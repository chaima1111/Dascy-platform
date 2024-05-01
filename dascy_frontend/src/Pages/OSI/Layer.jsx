import React from "react";
  

function Layer({ color, depth, content, className }) {
  const layerStyle = {
    backgroundColor: color,
    transform: `translateZ(${depth}px)`,
  };

  return (
    <div className={`layer ${className}`} style={layerStyle}>
      {content}
    </div>
  );
}

export default Layer;
