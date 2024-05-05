import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../authfeatures/authSlice";
import { Link } from "react-router-dom";
import { Feature } from "../../components";
import iCourse from "../../assets/Course/pic1.png";
import net from "../../assets/Course/network.png";
import contP from "../../assets/next.png";
import imgdash from "../../assets/dashImg.png";
import { IoMdBookmarks } from "react-icons/io";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { PiShootingStarThin } from "react-icons/pi";

import "./article.css";
const Article = () => {
     const { isError } = useSelector((state) => state.auth);

    const { user } = useSelector((state) => state.auth);

    

    
 const [date, setDate] = useState(new Date());

 useEffect(() => {
   const intervalId = setInterval(() => {
     setDate(new Date());
   }, 1000); // Update every second

   // Clean up the interval on unmount
   return () => clearInterval(intervalId);
 }, []); // Empty dependency array means it runs only once after the initial render

 // Format the date to display only day, month, and year
 const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
   month: "long",
 })} ${date.getFullYear()}`;
  return (
    <div className="dascy__article ">
      <div className="dascy__article-container">
        <p> {formattedDate}</p>
        <div className="dascy__article-title">
          <div className="dascy__article-title-text">
            <h1>
              Hi, <strong>{user && user.name}</strong>
            </h1>
            <p>Ready to start your journey to acedamic excelence with DASCY?</p>
          </div>
          <img src={imgdash} alt="" />
        </div>
        <div className="dascy__article-overview">
          <h1>Overview</h1>
          <div className="dascy__article-boxes">
            <div className="dascy__article-boxe box1">
              <IoMdBookmarks size={50} />
              <div className="dascy__article-boxe-text">
                <p>3</p>
                <h3>Courses</h3>
              </div>
            </div>
            <div className="dascy__article-boxe box2">
              <MdOutlineTaskAlt size={50} />
              <div className="dascy__article-boxe-text">
                <p>30%</p>
                <h3>Complete</h3>
              </div>
            </div>
            <div className="dascy__article-boxe box3">
              <IoCheckmarkDoneCircleOutline size={50} />
              <div className="dascy__article-boxe-text">
                <p>3</p>
                <h3>Passed tests</h3>
              </div>
            </div>
            <div className="dascy__article-boxe box4">
              <PiShootingStarThin size={50} />
              <div className="dascy__article-boxe-text">
                <p>50%</p>
                <h3>Score</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="dascy__article-myCourses">
          <h1>My Courses</h1>

          <div className="dascy__article-courses">
            <Link to="/startNetworking">
              {" "}
              <Feature
                imgCourse={net}
                title="Networking"
                desc="Intelligence demonstrated by machines, unlike the natural intelligence displayed by human beings..."
                cont={contP}
              />
            </Link>
            <Feature
              imgCourse={iCourse}
              title="Operating System"
              desc="Learn the basic operating system abstractions, mechanisms and their implementation..."
              cont={contP}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
