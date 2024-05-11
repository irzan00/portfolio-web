import React, { useEffect } from "react";
import AboutContent from "./AboutContent";
import { useSpring, animated } from "react-spring";

function AboutMe({ aboutMeRef, handleScrollToAboutMe }) {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const positionFromTop = aboutMeRef.current?.getBoundingClientRect().top;

      if (positionFromTop - windowHeight < 0) {
        set.start({ opacity: 1, transform: "translateY(0)" });
        handleScrollToAboutMe();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <animated.div
      id="about-me"
      ref={aboutMeRef}
      className="about-me w-100 d-flex flex-column flex-xl-row"
      style={props}
    >
      <img src="images/myphoto.png" alt="MY PHOTO" style={{ width: "285px" }} />
      <AboutContent />
    </animated.div>
  );
}

export default AboutMe;
