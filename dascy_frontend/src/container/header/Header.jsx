import React from "react";
import headerImg from "../../assets/lannding22.gif";
import "./header.css";
import ecli1 from "../../assets/Ellipse9.png";
import ecli2 from "../../assets/Ellipse8.png";
import ecli3 from "../../assets/Ellipse10.png";

const Header = () => {
  return (
    <div className="dascy__header section__padding" id="home">
      <div className="dascy__header-content">
        <h1>
          Getting Best <span>Quality</span> Education is Now Much Easier
        </h1>
        <div className="eclipes">
          <div className="eclipse1">
            <img src={ecli1} alt="eclipse" />
          </div>
          <div className="eclipse2">
            <img src={ecli2} alt="eclipse" />
          </div>
          <div className="eclipse3">
            <img src={ecli3} alt="eclipse" />
          </div>
        </div>

        <div className="dascy__header-content__input">
          <input type="search" placeholder="Enter a course" />
          <button type="button">Search</button>
        </div>
      </div>
      <div className="dascy__header-image">
        <img src={headerImg} alt="eduPlatform" />
      </div>
    </div>
  );
};

export default Header;
