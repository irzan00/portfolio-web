import React from "react";
import ReadAboutMe from "./ReadAboutMe";

function AboutContent() {
  return (
    <div className="about-content d-flex flex-column justify-content-center align-items-center align-items-xl-start">
      <h6>About Me</h6>
      <h1 className="text-white">
        Know <span className="text-hijau">About Me</span>
      </h1>
      <div className="about-content__text d-flex flex-column">
        <p className="mb-0 text-center text-xl-start">
          I am a passionate UI/UX Designer who studied computer science at IPB
          University. I have a keen interest in the field of UI/UX Design, and I
          actively engage in various UI/UX Design projects, both in courses and
          competitions. With my expertise and experience, I am confident in
          delivering exceptional results in UI/UX Design project.
        </p>
        <p className="mb-0 text-center text-xl-start">
          As a Computer Science Student, I possess the necessary ability and
          skills to competently develop programs that can effectively solve
          complex problems. I have also mastered various programming languages,
          including C, C++, HTML, CSS, and Javascript. Which allows me to
          confidently tackle any programming challenge.
        </p>
      </div>
      <ReadAboutMe />
    </div>
  );
}

export default AboutContent;
