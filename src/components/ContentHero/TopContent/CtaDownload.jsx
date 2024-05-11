import React from "react";
import { Link } from "react-router-dom";

function CtaDownload() {
  return (
    <div className="cta-download d-flex">
      <Link
        to="https://drive.google.com/file/d/16nti3FmGFZAEl8mzEgr-4fh5wA3EVkU_/view?usp=sharing"
        target="blank"
        className="cta-download__button"
        style={{ textDecoration: "none" }}
      >
        Download CV
      </Link>
      <div className="sosmed d-flex">
        <Link
          to="https://www.linkedin.com/in/irzanraka/"
          target="blank"
          style={{ textDecoration: "none" }}
          className="d-flex align-items-center"
        >
          <img
            src="images/linkedin-logo.svg"
            alt="Linkedin"
            className="social-icon"
          />
        </Link>
        <Link
          to="https://www.github.com/irzan00"
          target="blank"
          style={{ textDecoration: "none" }}
          className="d-flex align-items-center"
        >
          <img
            src="images/github-logo.svg"
            alt="Github"
            className="social-icon"
          />
        </Link>
        <Link
          to="https://www.instagram.com/r.zannn"
          target="blank"
          style={{ textDecoration: "none" }}
          className="d-flex align-items-center"
        >
          <img
            src="images/instagram-logo.svg"
            alt="Instagram"
            className="social-icon"
          />
        </Link>
      </div>
    </div>
  );
}

export default CtaDownload;
