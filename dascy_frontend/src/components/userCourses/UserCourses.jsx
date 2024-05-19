import React, { useState, useEffect } from "react";
import { Feature } from "../../components";
import { Link } from "react-router-dom";
import axios from "axios";
import iCourse from "../../assets/Course/pic1.png";
import net from "../../assets/Course/network.png";
import AI from "../../assets/Course/AIpg.png";
import OSp from "../../assets/Course/OpS.png";
import contP from "../../assets/next.png";
import imgdash from "../../assets/dashImg.png";
import "./userCourses.css";

const UserCourses = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Format the date to display only day, month, and year
  const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
  //creation of a course for the user
  const createCourse = async () => {
    try {
      const response = await axios.post("http://localhost:5000/courses", {
        name: "network",
        progress: 0,
      });
      alert(response.data.msg);
    } catch (error) {
      alert(error.msg);
    }
  };

  const handleCourseClick = () => {
    createCourse();
  };
  return (
    <>
      <div className="dascy__UserCourses-alert">
        {showMessage && (
          <div className="messageContainer">
            <div className="messageBox">{message}</div>
          </div>
        )}
      </div>
      <div className="dascy__UserCourses">
        <div className="dascy__UserCourses-container">
          <div className="dascy__UserCourses-title">
            <h1>All courses</h1>
          </div>
          <p> {formattedDate}</p>
          <div className="dascy__UserCourses-myCourses">
            <h1>
              Choose a course and start <span>learn it </span>
            </h1>
            <div className="dascy__UserCourses-courses">
              {/* course  */}
              <Link to="/dashboard" onClick={handleCourseClick}>
                <div className="dascy__UserCourses-courses__feature">
                  <div className="dascy__UserCourses-courses__feature-image">
                    <img src={net} alt="" />
                  </div>
                  <div className="dascy__UserCourses-courses__feature-content">
                    <div>
                      <h3>Networking</h3>
                      <p>
                        Learn how computers devices can exchange data and share
                        resources...
                      </p>
                    </div>
                    <div className="dascy__UserCourses-courses__feature-content-img">
                      {/* <img src={contP} alt="continue" /> */}
                    </div>
                  </div>
                </div>
              </Link>
              {/* course  */}
              <div className="dascy__UserCourses-courses__feature">
                <div className="dascy__UserCourses-courses__feature-image">
                  <img src={OSp} alt="" />
                </div>
                <div className="dascy__UserCourses-courses__feature-content">
                  <div>
                    <h3>Operating System</h3>
                    <p>
                      Learn the basic operating system abstractions, mechanisms
                      and their implementation...
                    </p>
                  </div>
                  <div className="dascy__UserCourses-courses__feature-content-img"></div>
                </div>
              </div>
              {/* course  */}
              <div className="dascy__UserCourses-courses__feature">
                <div className="dascy__UserCourses-courses__feature-image">
                  <img src={AI} alt="" />
                </div>
                <div className="dascy__UserCourses-courses__feature-content">
                  <div>
                    <h3>Artificial Intelligence</h3>
                    <p>
                      Learn Intelligence demonstrated by machines, unlike the
                      natural...
                    </p>
                  </div>
                  <div className="dascy__UserCourses-courses__feature-content-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCourses;
