import Course from "../models/CourseModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getCourses = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Course.findAll({
        attributes: ["uuid", "name", "progress"],
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Course.findAll({
        attributes: ["uuid", "name", "progress"],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!course) return res.status(404).json({ msg: "Data not found " });
    let response;
    if (req.role === "admin") {
      response = await Course.findOne({
        attributes: ["uuid", "name", "progress"],
        where: {
          id: course.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Course.findOne({
        attributes: ["uuid", "name", "progress"],
        where: {
          [Op.and]: [{ id: course.id }, { userId: req.userId }],
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// get one course
export const getCourse = async (req, res) => {
  try {
        let response;
if (req.role === "admin") {
  response = await Course.findOne({
    attributes: ["uuid", "name", "progress"],
    include: [
      {
        model: User,
        attributes: ["name", "email"],
      },
    ],
  });
}else{
   response = await Course.findOne({
     attributes: ["uuid", "name", "progress"],
     where: {
       userId: req.userId,
     },
     include: [
       {
         model: User,
         attributes: ["name", "email"],
       },
     ],
     order: [["createdAt", "ASC"]],
   });
       }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//get network course

export const getNetworkCourse = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Course.findOne({
        attributes: ["uuid", "name", "progress"],
        where: {
          name: "network",
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
        order: [["createdAt", "ASC"]], // Assuming there is a createdAt field to determine the first course
      });
    } else {
      response = await Course.findOne({
        attributes: ["uuid", "name", "progress"],
        where: {
          userId: req.userId,
          name: "network",
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
        order: [["createdAt", "ASC"]], 
      });
    }
    if (!response) {
      res.status(404).json({ msg: "No course found with the name 'network'" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createCourse = async (req, res) => {
  const { name, progress } = req.body;
  try {
    await Course.create({
      name: name,
      progress: progress,
      userId: req.userId,
    });
    res.status(201).json({ msg: "Course Created Successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!course) return res.status(404).json({ msg: "Data not found" });
    const { name, progress } = req.body;
    if (req.role === "admin") {
      await Course.update(
        { name, progress },
        {
          where: {
            id: course.id,
          },
        }
      );
    } else {
      if (req.userId !== course.userId)
        return res.status(403).json({ msg: "access denied" });
      await Course.update(
        { name, progress },
        {
          where: {
            [Op.and]: [{ id: course.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Course updated successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!course) return res.status(404).json({ msg: "Data not found" });
    const { name, progress } = req.body;
    if (req.role === "admin") {
      await Course.destroy({
        where: {
          id: course.id,
        },
      });
    } else {
      if (req.userId !== course.userId)
        return res.status(403).json({ msg: "Access denied" });
      await Course.destroy({
        where: {
          [Op.and]: [{ id: course.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Course deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
//testing
/*

Post:http://localhost:5000/courses
{
   "name": "Artificial Inteligence",
      "progress": 0
}

//get all courses 
Get: http://localhost:5000/courses

//get course by ID:
Get: http://localhost:5000/courses/671c34d6-05c9-4bb8-85bc-68b861688f74

//update course 
Patch : http://localhost:5000/courses/671c34d6-05c9-4bb8-85bc-68b861688f74
{
   "name": "Artificial Inteligence",
      "progress": 10
}


//delete course 

Delete :  http://localhost:5000/courses/671c34d6-05c9-4bb8-85bc-68b861688f74
*/ 