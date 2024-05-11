import React, { useEffect } from "react";
import HeaderTitle from "../HeaderTitle";
import ListExperience from "./ExperienceItem/ListExperience";
import { getDataExperience } from "../../utils/dataExperience";
import { useSpring, animated } from "react-spring";

function WorkingExperience({ experienceRef, handleScrollToExperience }) {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const positionFromTop = experienceRef.current?.getBoundingClientRect().top;

      if (positionFromTop - windowHeight < 0) {
        set.start({ opacity: 1, transform: "translateY(0)" });
        handleScrollToExperience();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <animated.div
      id="experience"
      ref={experienceRef}
      className="working-experience d-flex flex-column justify-content-center align-items-center"
      style={props}
    >
      <HeaderTitle
        header="Working Experience"
        title={
          <span>
            I'm <span className="text-hijau">UI/UX Designer</span>
          </span>
        }
        desc="Currently, I am a UI/UX Designer Intern at Eduwork. Previously, I had an internship in the same position at Oxtofi Indonesia."
      />
      <div className="working-experience__content d-flex align-items-start">
        <img src="/images/lineExp.svg" alt="Line" />
        <ListExperience experiences={getDataExperience()} />
      </div>
    </animated.div>
  );
}

export default WorkingExperience;
