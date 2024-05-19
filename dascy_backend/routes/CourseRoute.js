import express from "express";
import {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/Courses.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/courses",verifyUser, getCourses);
router.get("/courses/:id", verifyUser, getCourseById);
router.post("/courses", verifyUser, createCourse);
router.patch("/courses/:id", verifyUser, updateCourse);
router.delete("/courses/:id",verifyUser, deleteCourse);

export default router;
