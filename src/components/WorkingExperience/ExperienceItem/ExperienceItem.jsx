import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function ExperienceItem({
  date,
  locate,
  company,
  role,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
}) {
  return (
    <div className="experience-item d-flex align-items-start">
      <LeftContent date={date} locate={locate} />
      <RightContent
        company={company}
        role={role}
        desc1={desc1}
        desc2={desc2}
        desc3={desc3}
        desc4={desc4}
        desc5={desc5}
      />
    </div>
  );
}

export default ExperienceItem;
