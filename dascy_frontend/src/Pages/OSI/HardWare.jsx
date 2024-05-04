import React, { useState } from "react";
import "./hardWare.css";
import modem from "../../assets/Osi/modem1.png";
import cable from "../../assets/Osi/cable.png";
import wifi from "../../assets/Osi/layers/wifi.gif";
import bluet from "../../assets/Osi/layers/bluet.gif";
import Mac from "../../assets/Osi/second/cardint.png"
import pc from "../../assets/Osi/second/pcsconnection.png"
import swit from "../../assets/Osi/second/switch.png"
import hub from "../../assets/Osi/second/hub.png"
import ip1 from "../../assets/Osi/second/routage.png"
import ip2 from "../../assets/Osi/second/ipaddress.png"
import router from "../../assets/Osi/second/routeur.png"

function Description() {
  return <div className="description">This is a description</div>;
}

function HardWare() {
  const [rotation, setRotation] = useState({ x: 50, y: 0 });
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
    <>
      <div className="dascy__hardware">
        <div className="dascy__hardware content">
          {/* first layer */}
          <div className="dascy__hardware-container">
            <div
              className="dascy__hardware-container-buttom"
              onMouseMove={handleMouseMove}
            >
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
        <div className="dascy__hardware content">
          {/* second layer */}
          <div className="dascy__hardware-container-two ">
            <div
              className="dascy__hardware-container-buttom"
              onMouseMove={handleMouseMove}
            >
              <div
                className="dascy__hardware-layer-two dascy__hardware-layer"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                }}
              ></div>
            </div>
            <div className="dascy__container-images-layertow">
              <div className="image-21">
                <img className="dascy__images-three " src={Mac} alt="" />
              </div>
              <div className="image-22">
                <img className="dascy__images-one " src={pc} alt="" />
              </div>
              <div className="image-23">
                <img className="dascy__images-two " src={hub} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* third layer */}
        <div className="dascy__hardware-container-two dascy__hardware-container-three">
          <div
            className="dascy__hardware-container-buttom"
            onMouseMove={handleMouseMove}
          >
            <div
              className="dascy__hardware-layer-three dascy__hardware-layer"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              }}
            ></div>
          </div>
          <div className="dascy__container-images-layertow">
            <div className="image-31">
              <img className="dascy__images-three " src={ip2} alt="" />
            </div>
            <div className="image-32">
              <img className="dascy__images-three " src={ip1} alt="" />
            </div>
            <div className="image-33">
              <img className="dascy__images-two " src={router} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HardWare;
