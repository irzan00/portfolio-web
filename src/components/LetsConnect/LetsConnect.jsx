import React, { useEffect } from "react";
import HeaderTitle from "../HeaderTitle";
import TempButton from "./TempButton";
import { useSpring, animated } from "react-spring";
import WhatsAppIcon from "/images/Icons/whatsapp.svg";
import EmailIcon from "/images/Icons/mail.svg";

function LetsConnect({ connectRef, handleScrollToConnect }) {
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(100px)",
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const positionFromTop = connectRef.current?.getBoundingClientRect().top;

      if (positionFromTop - windowHeight < 0) {
        set.start({ opacity: 1, transform: "translateY(0)" });
        handleScrollToConnect();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <animated.div
      id="lets-connect"
      ref={connectRef}
      className="lets-connect d-flex flex-column justify-content-center align-items-center"
      style={props}
    >
      <HeaderTitle
        header="Let's Connect"
        title="Let’s Work Together 📩"
        desc="Let's connect and discuss any project. Let's achieve success and advance your businesses together."
      />
      <div className="lets-connect__action d-flex align-items-center gap-4">
        <TempButton
          icon={EmailIcon}
          text="Email Me"
          link="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqSxZGcPwfxCpPznQvWMhjDRNxPmShNzzTlCPrTxmWgvNjqKNCKrKFCTNmWlgNKwDBGv"
        />
        <TempButton
          icon={WhatsAppIcon}
          text="WhatsApp"
          link="https://wa.me/6289513348202"
        />
      </div>
    </animated.div>
  );
}

export default LetsConnect;
