import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ethernet.css";
import curlyba from "../../../assets/DatTwo/curly.png"
import arrowLi from "../../../assets/DatTwo/arrowLink.png"
const Flow = () => {
   const [showHeader, setShowHeader] = useState(false);
   const [showTrailer, setShowTrailer] = useState(false);

   const handleClick = () => {
     setShowHeader(true);
     setShowTrailer(true);
   };
  return (
    <>
    <div className="dascy__flow">
      <h1>Data Link layer : Encapsulation</h1>
      <div className="dascy__flow-container">
        <div className={`trailer-box ${showTrailer ? "show" : ""}`}>
          <h2>Header</h2>
        </div>
        <div className="dascy__data-box" onClick={handleClick}>
          <h2>Data</h2>
        </div>
        <div className={`header-box ${showHeader ? "show" : ""}`}>
          <h2>Trailer</h2>
        </div>
      </div>
      <div className="dascy__flow-container-desc">
        <div className="dascy__flow-container-desc-img">
          <img src={arrowLi} alt="" />
        </div>
        <div>
          <h2>Frame</h2>
          <img src={curlyba} alt="" />
        </div>
      </div>
      <div className="dascy__flow-container-desc ">
        <div className="desc2">Physical layer</div>
      </div>
      <Link to="/contents/DataLink/ethernet">
      <div className="dascy__flow-container-button">
        <button> <span> Example of trame Ethernet</span><i></i> </button>
      </div>
      </Link>
    </div>
     
</>  
);
};

export default Flow;
