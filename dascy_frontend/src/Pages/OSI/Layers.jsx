import React from "react";
import pc1 from "../../assets/Osi/pc2.png";
import arrow from "../../assets/Osi/arrowCurved.png";
import sender from "../../assets/Osi/sender.gif";
import receiver from "../../assets/Osi/receiver.gif";
import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";

import "./layers.css";
const Layers = () => {
  return (
    <div className="dascy__layers ">
      <div className="dascy__layers-content ">
        {/* sender part */}
        <div className="dascy__layers-content__first">
          <div className="dascy__layers-content__first-img">
            <div className="dascy__layers-content__first-img-text">HELLO!</div>
            <img src={pc1} alt="pc" />
            <img
              className="dascy__layers-content__first-sender"
              src={sender}
              alt=""
            />
          </div>
          {/* first layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigDown size={30} color="#EECACA" />
            </div>
          </div>
          {/* second layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigDown size={30} color="#EECACA" />
            </div>
          </div>
          {/* third layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigDown size={30} color="#EECACA" />
            </div>
          </div>
          {/* fourth layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigDown size={30} color="#EECACA" />
            </div>
          </div>
          {/* fifth layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigDown size={30} color="#EECACA" />
            </div>
          </div>
          {/* sixth layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigDown size={30} color="#EECACA" />
            </div>
          </div>
          {/* seventh layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow"></div>
          </div>
        </div>
      </div>
      {/* physical layer */}
      <div className="dascy__layers-content-arrowCurved">
        <img src={arrow} alt="arrow" />
      </div>

      <div className="dascy__layers-content ">
        {/* receiver part */}
        <div className="dascy__layers-content__first">
          <div className="dascy__layers-content__first-img">
            <div className="dascy__layers-content__first-img-text">HELLO!</div>
            <img src={pc1} alt="pc" />
            <img
              className="dascy__layers-content__first-sender"
              src={receiver}
              alt=""
            />
          </div>
          {/* first layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigUp size={30} color="#EECACA" />
            </div>
          </div>
          {/* second layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigUp size={30} color="#EECACA" />
            </div>
          </div>
          {/* third layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigUp size={30} color="#EECACA" />
            </div>
          </div>
          {/* fourth layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigUp size={30} color="#EECACA" />
            </div>
          </div>
          {/* fifth layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigUp size={30} color="#EECACA" />
            </div>
          </div>
          {/* sixth layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow">
              <TbArrowBigUp size={30} color="#EECACA" />
            </div>
          </div>
          {/* seventh layer */}
          <div className="dascy__layers-content-layer">
            <h3>Application Layer</h3>
            <div className="dascy__layers-content-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layers;
