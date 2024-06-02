import React from "react";
import { Link } from "react-router-dom";

function ReadAboutMe() {
  return (
    <Link
      to={"https://drive.google.com/file/d/1d9gcD9HCt_UGBmynOq5sgbW4ac4rBcxG/view?usp=sharing"}
      target="_blank"
      style={{ textDecoration: "none" }}
      className="read-aboutme__button cta-download__button"
    >
      <h6 className="mb-0 text-white">Read More About Me</h6>
    </Link>
  );
}

export default ReadAboutMe;
