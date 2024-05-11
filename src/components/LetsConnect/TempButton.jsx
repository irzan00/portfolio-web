import React from "react";
import { Link } from "react-router-dom";

function TempButton({ icon, text, link }) {
  return (
    <Link
      to={link}
      target="blank"
      className="temp-button"
      style={{ textDecoration: "none" }}
    >
      {<img src={icon} alt="" className="temp-icon"/>}
      <p className="mb-0">{text}</p>
    </Link>
  );
}

export default TempButton;
