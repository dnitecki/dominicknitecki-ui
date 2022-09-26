import "./Welcome.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import useSound from "use-sound";
import headshot from "../assets/headshot.png";
import welcomeSound from "../assets/MA_Readsounds_InterfaceNotification_7.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Welcome() {
  const [play] = useSound(welcomeSound, {
    volume: 0.3,
  });
  let navigate = useNavigate();
  const location = useLocation();
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Dominick.", "a developer.", "self-driven."],
    });
  }, []);
  const pageVariants = {
    animate: {
      opacity: 1,
      y: 0,
    },
    initial: {
      opacity: 0,
      y: "100vh",
    },
    exit: {
      opacity: 0,
      y: "-100vh",
    },
  };
  const pageTransitions = {
    duration: 1.25,
    type: "tween",
    ease: "easeOut",
  };
  const pageStyle = {
    position: "absolute",
  };

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <div className="welcome">
        <div className="welcome-container">
          <div className="welcome-header">
            <div className="title-top">Hi there, I'm</div>
            <div className="title-bottom">
              <span ref={textRef}></span>
            </div>
          </div>
          <div className="welcome-body">
            <div className="pulse">
              <button
                className="welcome-button"
                onClick={() => {
                  play();
                  navigate("/aboutme", {
                    state: { from: location },
                    replace: true,
                  });
                }}
              ></button>
              <img className="headshot" src={headshot} alt="headshot" />
            </div>
          </div>
          <div className="welcome-footer">
            <button
              className="down-arrow"
              onClick={() => {
                play();
                navigate("/aboutme", {
                  state: { from: location },
                  replace: true,
                });
              }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
