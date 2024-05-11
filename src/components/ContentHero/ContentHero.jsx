import React, { useEffect } from "react";
import TopContent from "./TopContent/TopContent";
import { getSkillData } from "../../utils/dataSkill";
import { getSpotlightData } from "../../utils/dataSpotlight";
import CurrentlySkill from "./MySkill/CurrentlySkill";
import ListSpotlight from "./Spotlight/ListSpotlight";
import { useSpring, animated } from "react-spring";

function ContentHero() {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    set.start({ opacity: 1, transform: "translateY(0)" });
  }, []);

  return (
    <animated.div className="content-hero container-fluid d-flex" style={props}>
      <TopContent />
      <CurrentlySkill skills={getSkillData()} />
      <ListSpotlight spotlights={getSpotlightData()} />
    </animated.div>
  );
}

export default ContentHero;
