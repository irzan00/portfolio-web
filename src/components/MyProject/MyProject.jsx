import React, { useEffect } from "react";
import HeaderTitle from "../HeaderTitle";
import ListProject from "./CardProject/ListProject";
import { getProjectData } from "../../utils/dataProject";
import SeeOtherButton from "./CardProject/SeeOtherButton";
import { useSpring, animated } from "react-spring";

function MyProject({ projectRef, handleScrollToProject }) {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const positionFromTop = projectRef.current?.getBoundingClientRect().top;

      if (positionFromTop - windowHeight < 0) {
        set.start({ opacity: 1, transform: "translateY(0)" });
        handleScrollToProject();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <animated.div
      id="my-project"
      ref={projectRef}
      className="my-project d-flex flex-column justify-content-center align-items-center"
      style={props}
    >
      <HeaderTitle
        header="My Project"
        title={
          <span>
            <span className="text-hijau">Design and Code </span>Project
          </span>
        }
        desc="This project focuses on UI/UX Design and Front-end web development that I worked on during my college years. I achieved this project through bootcamps, competitions, and courses that I undertook."
      />
      <ListProject projects={getProjectData()} />
      <SeeOtherButton />
    </animated.div>
  );
}

export default MyProject;
