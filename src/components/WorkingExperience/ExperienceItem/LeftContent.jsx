import React from "react";

function LeftContent({date, locate}) {
    return (
        <div className="left-content">
            <p className="mb-0">{date}</p>
            <p className="mb-0">{locate}</p>
        </div>
    )
}

export default LeftContent;