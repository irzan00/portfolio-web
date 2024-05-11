import React from "react";

function RightContent({ company, role, desc1, desc2, desc3, desc4, desc5 }) {
  return (
    <div className="right-content">
      <div className="right-content__title">
        <h6 className="mb-0">{company}</h6>
        <p className="mb-0">{role}</p>
      </div>
      <ul className="mb-0">
        {desc1 && <li className="mb-1">{desc1}</li>}
        {desc2 && <li className="mb-1">{desc2}</li>}
        {desc3 && <li className="mb-1">{desc3}</li>}
        {desc4 && <li className="mb-1">{desc4}</li>}
        {desc5 && <li className="mb-1">{desc5}</li>}
      </ul>
    </div>
  );
}

export default RightContent;
