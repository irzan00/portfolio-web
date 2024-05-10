import React from "react";
import CardSpotlight from "./CardSpotlight";
import Marquee from "react-fast-marquee";

function ItemList({ spotlights }) {
  return (
    <div className="item-spotlight__list d-flex justify-content-start container-fluid">
      <Marquee speed={80} gradient={false}>
        {spotlights.length ? (
          spotlights.map((spotlight) => (
            <div key={spotlight.id} style={{ marginRight: "20px" }}>
              <CardSpotlight
                icon={spotlight.icon}
                type={spotlight.type}
                fill={spotlight.fill}
              />
            </div>
          ))
        ) : (
          <p className="text-center">No Spotlight Here!</p>
        )}
      </Marquee>
    </div>
  );
}

export default ItemList;
