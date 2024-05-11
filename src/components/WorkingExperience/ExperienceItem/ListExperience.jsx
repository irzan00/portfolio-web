import React from "react";
import ExperienceItem from "./ExperienceItem";

function ListExperience({ experiences }) {
  return (
    <div className="list-experience d-flex flex-column">
      {experiences.length ? (
        experiences.map((experience) => (
          <ExperienceItem
            key={experience.id}
            date={experience.date}
            locate={experience.locate}
            company={experience.company}
            role={experience.role}
            desc1={experience.desc1}
            desc2={experience.desc2}
            desc3={experience.desc3}
            desc4={experience.desc4}
            desc5={experience.desc5}
          />
        ))
      ) : (
        <p className="text-center">No Experience Here</p>
      )}
    </div>
  );
}

export default ListExperience;
