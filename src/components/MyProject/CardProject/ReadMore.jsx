import React from "react";
import { Link } from "react-router-dom";

function ReadMore({ link }) {
  return (
    <Link
      to={link}
      target="_blank"
      style={{ textDecoration: "none" }}
      className="read-more d-flex justify-content-center align-items-center"
    >
      <h6 className="mb-0">Read More {">>"}</h6>
    </Link>
  );
}

export default ReadMore;
