import React from 'react'
import { Link } from 'react-router-dom';
import robotImage from "../../assets/startPage/robot.gif";
import cityImage from "../../assets/startPage/city.png";
import cloudsImage from "../../assets/startPage/clouds.png";

import satelliteImage from "../../assets/startPage/satellite.png";
import startButtomImage from "../../assets/startPage/startButtom.png";

import "./firstPage.css"

const FirstPage = () => {
  return (
    <div className="dascy__firstPage">
      <div className="dascy__firstPage-content">
        <h1>LET'S START</h1>
        <div className="dascy__firstPage-content-text">
          <h2>here we go</h2>

          <div className="dascy__firstPage-content__startbuttom-img">
            <Link to="/test">
              <img src={startButtomImage} alt="startbuttom" />
            </Link>
          </div>
        </div>
      </div>

      <div className="dascy__firstPage-images">
        <img
          className="dascy__firstPage-images__robot-img"
          src={robotImage}
          alt="Robot"
        />

        <img
          className="dascy__firstPage-images__satellite-img"
          src={satelliteImage}
          alt="satellite"
        />

        <img
          className="dascy__firstPage-images__city-img"
          src={cityImage}
          alt="city"
        />

        <img
          className="dascy__firstPage-images__clouds-img"
          src={cloudsImage}
          alt="clouds"
        />
      </div>
    </div>
  );
}

export default FirstPage
