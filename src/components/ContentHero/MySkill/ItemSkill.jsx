import React from "react";

function ItemSkill({ skillImage, color, borderColor, gradientColor }) {
  const itemStyle = {
    border: borderColor,
    background: gradientColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "80px"
  };

  const imageStyle = {
    width: "90%",
    height: "90%",
    backgroundImage: `url(${skillImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundColor: color,
    WebkitMask: `url(${skillImage}) no-repeat center / contain`,
    mask: `url(${skillImage}) no-repeat center / contain`,
  };

  return (
    <div className="item-skill" style={itemStyle}>
      <div style={imageStyle}></div>
    </div>
  );
}

export default ItemSkill;
