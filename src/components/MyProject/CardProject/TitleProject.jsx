import React from "react";
import { Link } from "react-router-dom";

function TitleProject({ title, link }) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <h5 className="title-project mb-0">{title}</h5>
    </Link>
  );
}

export default TitleProject;
