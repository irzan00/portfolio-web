import React from "react";
import { Link } from "react-router-dom";

function CtaDownload() {
  return (
    <div className="cta-download d-flex">
      <Link
        to="https://drive.google.com/file/d/1jK6W8xibe-OVaE49mQWeDskliwPBYl3i/view?usp=sharing"
        target="blank"
        className="cta-download__button"
        style={{ textDecoration: "none" }}
      >
        Download Resume
      </Link>
      <div className="sosmed d-flex linkedin">
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
          to="https://www.behance.net/irzanraka"
          target="blank"
          style={{ textDecoration: "none" }}
          className="d-flex align-items-center"
        >
          <img
            src="images/behance-logo.svg"
            alt="Behance"
            className="social-icon"
          />
        </Link>
      </div>
    </div>
  );
}

export default CtaDownload;
