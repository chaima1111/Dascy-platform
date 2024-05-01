import React, { useState } from "react";
import "./hardWare.css";
const HardWare = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (clientX - centerX) / 10;
    const offsetY = (clientY - centerY) / 10;

    setRotation({ x: offsetY, y: offsetX });
  };

  return (
    <div className="dascy__hardware" onMouseMove={handleMouseMove}>
      <div
        className="layer"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      ></div>
    </div>
  );
};

export default HardWare;
