import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./intro.css";
import img1 from "../../assets/Contents/intro/introImg.gif";
import cabl from "../../assets/Contents/intro/introcable.png";
import folde from "../../assets/Contents/intro/introFolder.gif";
import pc1 from "../../assets/Contents/intro/introPc.gif";
import pc2 from "../../assets/Contents/intro/introPc2.gif";
import wifi from "../../assets/Contents/intro/introwifi.png";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Intro = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    gsap.utils.toArray(".box").forEach((box, index) => {
      // Assign each box element to the corresponding position in the useRef array
      boxesRef.current[index] = box;

      gsap.to(box, {
        x: 500,
        scrollTrigger: {
          trigger: box,
          scrub: true,
        },
      });
    });
  }, []); 

  return (
    <div className="dascy__intro">
      <div
        className=" box dascy__intro-content section__margin"
        ref={(ref) => (boxesRef.current[0] = ref)}
      >
        <h1>What is a network? </h1>
        <div className="dascy__intro-content-img">
          <img src={img1} alt="imageofdata" />
        </div>
      </div>
      {/* first */}
      <div className=" box dascy__intro-content-info section__padding section__margin">
        <div
          className="box dascy__intro-content section__padding section__margin"
          ref={(ref) => (boxesRef.current[1] = ref)}
        >
          <h1>We have a PC </h1>
          <div className="dascy__intro-content-img">
            <img src={pc1} alt="imageofdata" />
          </div>
        </div>
      </div>
      {/* second */}
      <div className=" box dascy__intro-content-info section__padding section__margin">
        <div
          className="box dascy__intro-content section__padding section__margin"
          ref={(ref) => (boxesRef.current[2] = ref)}
        >
          <h1>AND another PC </h1>
          <div className="dascy__intro-content-img">
            <img src={pc2} alt="imageofdata" />
          </div>
        </div>
      </div>

      {/* third */}
      <div className=" box dascy__intro-content-info section__padding section__margin">
        <div
          className="box dascy__intro-content section__padding section__margin"
          ref={(ref) => (boxesRef.current[3] = ref)}
        >
          <h1>we link them by </h1>
          <div className="dascy__intro-content-img">
            <img src={cabl} alt="imageofdata" />
          </div>
        </div>
      </div>
      {/* fouth */}
      <div className=" box dascy__intro-content-info section__padding section__margin">
        <div
          className="box dascy__intro-content section__padding section__margin"
          ref={(ref) => (boxesRef.current[4] = ref)}
        >
          <h1>Or </h1>
          <div className="dascy__intro-content-img">
            <img src={wifi} alt="imageofdata" />
          </div>
        </div>
      </div>
      {/* fifth */}
      <div className=" box dascy__intro-content-info section__padding section__margin">
        <div
          className="box dascy__intro-content section__padding section__margin"
          ref={(ref) => (boxesRef.current[5] = ref)}
        >
          <h1>To send </h1>
          <div className="dascy__intro-content-img">
            <img src={folde} alt="imageofdata" />
          </div>
        </div>
      </div>
     
      <div className="dascy__intro-buttom">
        <Link to="/courseOne">
          <button className="dascy__intro-next">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
