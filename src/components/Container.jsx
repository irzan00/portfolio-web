import React from "react";
import ContentHero from "./ContentHero/ContentHero";
import AboutMe from "./AboutMe/AboutMe";
import MyProject from "./MyProject/MyProject";
import WorkingExperience from "./WorkingExperience/WorkingExperience";
import LetsConnect from "./LetsConnect/LetsConnect";
import UIExploration from "./UIExploration/UIExploration"

function Container({
  handleScrollToAboutMe,
  handleScrollToProject,
  handleScrollToExploration,
  handleScrollToExperience,
  handleScrollToConnect,
  aboutMeRef,
  projectRef,
  explorationRef,
  experienceRef,
  connectRef,
}) {
  return (
    <div className="porto-container d-flex">
      <ContentHero />
      <AboutMe handleScrollToAboutMe={handleScrollToAboutMe} aboutMeRef={aboutMeRef} />
      <MyProject handleScrollToProject={handleScrollToProject} projectRef={projectRef} />
      <UIExploration handleScrollToExploration={handleScrollToExploration} explorationRef={explorationRef} />
      <WorkingExperience handleScrollToExperience={handleScrollToExperience} experienceRef={experienceRef} />
      <LetsConnect handleScrollToConnect={handleScrollToConnect} connectRef={connectRef} />
    </div>
  );
}
export default Container;
