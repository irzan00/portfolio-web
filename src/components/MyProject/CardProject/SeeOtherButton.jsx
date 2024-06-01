import React from "react";
import { Link } from "react-router-dom";

function SeeOtherButton() {
  return (
    <Link
      to={"https://irzanraka.notion.site/Hi-I-m-Raka-Irzan-5144352ae2b04c23ba1da9897d405091"}
      target="_blank"
      style={{ textDecoration: "none" }}
      className="see-other d-flex justify-content-center align-items-center"
    >
      <h6 className="mb-0">View Other Project</h6>
    </Link>
  );
}

export default SeeOtherButton;
