import React from "react";
import { Link } from "react-router-dom";
import TypeProject from "./TypeProject";
import TitleProject from "./TitleProject";
import TagProject from "./TagProject";
import ReadMore from "./ReadMore";

function CardProject({ link, image, type, tag1, tag2, title }) {
  return (
    <div className="card-project d-flex col-12 col-xl-5 flex-grow-1">
      <div className="d-flex w-100 flex-column align-items-start">
        <img
          src={image}
          alt="Image"
          style={{ width: "100%", objectFit: "contain", height: "auto" }}
        />
        <div className="card-project__content d-flex flex-column">
          <div className="card-project__top d-flex flex-column">
            <div className="card-project__tagline d-flex gap-2">
              {/* <TypeProject type={type} /> */}
              <TagProject tag={tag1} />
              {tag2 && <TagProject tag={tag2} />}
            </div>
            <TitleProject title={title} />
          </div>
          <ReadMore link={link} />
        </div>
      </div>
    </div>
  );
}

export default CardProject;
