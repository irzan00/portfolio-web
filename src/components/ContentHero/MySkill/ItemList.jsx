import React from "react";
import ItemSkill from "./ItemSkill";

function ItemList({ skills }) {
  return (
    <div className="item-skill__list d-flex flex-wrap w-100 gap-4 align-items-center justify-content-center">
      {skills.length ? (
        skills.map((skill) => (
          <ItemSkill
            key={skill.id}
            skillName={skill.skillName}
            skillImage={skill.skillImage}
            color={skill.color}
            borderColor={skill.borderColor}
            gradientColor={skill.gradientColor}
          />
        ))
      ) : (
        <p className="text-center">No Skill</p>
      )}
    </div>
  );
}

export default ItemList;
