import React from "react";
import { Link } from "react-router-dom";

function ButtonBehance() {
  return (
    <div className="cta-download d-flex">
      <Link
        to="https://www.behance.net/irzanraka"
        target="_blank"
        className="cta-download__button gap-2"
        style={{ textDecoration: "none" }}
      >
        <img src="/images/behance-color.png" alt="behance" style={{width: "32px"}}/>
        View Full on Behance
      </Link>
    </div>
  );
}

export default ButtonBehance;
