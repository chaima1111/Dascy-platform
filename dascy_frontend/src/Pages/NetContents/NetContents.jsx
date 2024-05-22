import React from 'react'
import { Link } from "react-router-dom";
import intro from "../../assets/Contents/Cnetw/intro.gif"
import phy from "../../assets/Contents/Cnetw/physique.gif"
import osigi from "../../assets/Contents/Cnetw/osiGi.gif"
import analog from "../../assets/Contents/Cnetw/analogbal.gif"
import mux from "../../assets/Contents/Cnetw/mux.gif"
import num from "../../assets/Contents/Cnetw/graph.gif"
import errorRob from "../../assets/Contents/intro/errorRobo.gif"
import ipImg from "../../assets/Contents/intro/ipPhot.png"
import networ from "../../assets/Contents/intro/networkLa.png"
import ackimg from "../../assets/Contents/intro/ackImg.png"
import Linklay from "../../assets/Osi/second/hub3.png"
import "./netContents.css"
const NetContents = () => {
  return (
    <div className="dascy__netContents">
      <div className="dascy__netContents-boxes">
        <div className="dascy__netContents-boxe dascy__netContents-boxe1">
          <img src={intro} alt="" />
          <Link to="/intro">
            <h3>Introduction</h3>
          </Link>
        </div>

        <div className="dascy__netContents-boxe dascy__netContents-boxe2">
          <img src={osigi} alt="" />
          <Link to="/contents/osi">
            {" "}
            <h3>OsiLayer</h3>
          </Link>
        </div>

        <div className="dascy__netContents-boxe dascy__netContents-boxe3">
          <img src={num} alt="" />
          <Link to="/chapterTwo/second">
            {" "}
            <h3>Physical Layer Numerique</h3>
          </Link>
        </div>

        <div className="dascy__netContents-boxe dascy__netContents-boxe4">
          <img src={analog} alt="" />
          <Link to="/chapterTwo/three">
            {" "}
            <h3>Physical Layer Analog</h3>
          </Link>
        </div>
        <div className="dascy__netContents-boxe dascy__netContents-boxe4">
          <img src={phy} alt="" />
          <Link to="/chapterTwo/laws">
            {" "}
            <h3>Physical Layer Laws </h3>
          </Link>
        </div>
        {/* <div className="dascy__netContents-boxe dascy__netContents-boxe21">
          <img src={mux} alt="" />
          <h3>MUX</h3>
        </div> */}
        <div className="dascy__netContents-boxe dascy__netContents-boxe-img2  ">
          <img src={Linklay} alt="" />
          <h3>Data Link Layer</h3>
        </div>
        <div className="dascy__netContents-boxe dascy__netContents-boxe2 dascy__netContents-boxe-img3">
          <img src={ackimg} alt="" />
          <h3>Flow</h3>
        </div>
        <div className="dascy__netContents-boxe dascy__netContents-boxe2">
          <img src={errorRob} alt="" />
          <h3>Error detection</h3>
        </div>
        <div className="dascy__netContents-boxe dascy__netContents-boxe1 dascy__netContents-boxe-img4">
          <img src={networ} alt="" />
          <h3>Network layer</h3>
        </div>
        <div className="dascy__netContents-boxe dascy__netContents-boxe32 dascy__netContents-boxe-img3">
          <img src={ipImg} alt="" />
          <h3>IP address</h3>
        </div>
      </div>
    </div>
  );
}

export default NetContents