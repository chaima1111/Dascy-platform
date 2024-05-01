import React, { useState } from "react";
import "./hardWare.css";
import modem from "../../assets/Osi/modem1.png";
import cable from "../../assets/Osi/cable.png";
import wifi from "../../assets/Osi/layers/wifi.gif";
import bluet from "../../assets/Osi/layers/bluet.gif";

function Description() {
  return <div className="description">This is a description</div>;
}

function HardWare() {
  const [rotation, setRotation] = useState({ x: 50, y: 5 });
  const [showDescription, setShowDescription] = useState(false);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (clientX - centerX) / 10;
    const offsetY = (clientY - centerY) / 10;

    setRotation({ x: offsetY, y: offsetX });
  };

  return (
    <div className="dascy__hardware">
      {/* first layer */}
      <div className="dascy__hardware-container">
        <div className="dascy__hardware-container-buttom" onMouseMove={handleMouseMove}>
          <div
            className="dascy__hardware-layer"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          ></div>
        </div>
        <div className="dascy__container-images">
          <div className="image-1">
            <img className="dascy__images " src={cable} alt="" />
          </div>
          <div className="image-2">
           
            <img className="dascy__images " src={bluet} alt="" />
          </div>
          <div className="image-3">
            
            <img className="dascy__images" src={modem} alt="" />
          </div>
          <div className="image-4">
            <img className="dascy__images " src={wifi} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HardWare;
