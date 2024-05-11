import React from "react";
import ItemList from "./ItemList";

function CurrentlySkill({skills}) {
    return (
        <div className="currently-skill w-100 d-flex flex-column justify-center align-items-center">
            <h6>My Current Skills</h6>
            <ItemList skills={skills} />
        </div>
    )
}

export default CurrentlySkill;
