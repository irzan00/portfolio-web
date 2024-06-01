import React, { useEffect } from "react";
import HeaderTitle from "../HeaderTitle";
import { useSpring, animated } from "react-spring";
import Carousel from "./Carousel";
import ButtonBehance from "./ButtonBehance";

function UIExploration({ explorationRef, handleScrollToExploration }) {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const positionFromTop = explorationRef.current?.getBoundingClientRect().top;

      if (positionFromTop - windowHeight < 0) {
        set.start({ opacity: 1, transform: "translateY(0)" });
        handleScrollToExploration();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <animated.div
      id="exploration"
      ref={explorationRef}
      className="ui-exploration d-flex flex-column justify-content-center align-items-center"
      style={props}
    >
      <HeaderTitle
        header="UI Exploration"
        title={
          <span>
            I'm <span className="text-hijau">UI Exploration on Behance</span>
          </span>
        }
        desc="I have a strong passion for visual design in applications or websites with engaging interactions. Here are the results of my UI explorations."
      />
      <Carousel />
      <ButtonBehance />
    </animated.div>
  );
}

export default UIExploration;
