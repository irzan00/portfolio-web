import React from "react";
import TitleHero from "./TitleHero";
import CtaDownload from "./CtaDownload";

function TopContent() {
  return (
    <div className="top-content container-fluid col-10 d-flex flex-column justify-center align-items-center">
      <TitleHero />
      <CtaDownload />
    </div>
  );
}

export default TopContent;
