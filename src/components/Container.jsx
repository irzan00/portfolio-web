import React from "react";
import ContentHero from "./ContentHero/ContentHero";
import AboutMe from "./AboutMe/AboutMe";
import MyProject from "./MyProject/MyProject";
import WorkingExperience from "./WorkingExperience/WorkingExperience";
import LetsConnect from "./LetsConnect/LetsConnect";

function Container({
  handleScrollToAboutMe,
  handleScrollToProject,
  handleScrollToExperience,
  handleScrollToConnect,
  aboutMeRef,
  projectRef,
  experienceRef,
  connectRef,
}) {
  return (
    <div className="porto-container d-flex">
      <ContentHero />
      <AboutMe handleScrollToAboutMe={handleScrollToAboutMe} aboutMeRef={aboutMeRef} />
      <MyProject handleScrollToProject={handleScrollToProject} projectRef={projectRef} />
      <WorkingExperience handleScrollToExperience={handleScrollToExperience} experienceRef={experienceRef} />
      <LetsConnect handleScrollToConnect={handleScrollToConnect} connectRef={connectRef} />
    </div>
  );
}
export default Container;
