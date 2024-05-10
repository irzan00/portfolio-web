import React from "react";

function HeaderTitle({ header, title, desc }) {
  return (
    <div className="header-title d-flex col-10 flex-column justify-content-center align-items-center">
      <h6 className="mb-0 text-center">{header}</h6>
      <h1 className="mb-0 text-white text-center">{title}</h1>
      <p className="mb-0 text-center">{desc}</p>
    </div>
  );
}

export default HeaderTitle;
