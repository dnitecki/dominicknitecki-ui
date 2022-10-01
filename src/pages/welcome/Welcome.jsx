import React, { useEffect, useState } from "react";
import "./Welcome.scss";
import "./Stars.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useSound from "use-sound";
import headshot from "../../assets/headshot.png";
import welcomeSound from "../../assets/MA_Readsounds_InterfaceNotification_7.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TypewriterEffect from "../../components/typewriter/Typewriter";

export default function Welcome() {
  let navigate = useNavigate();
  let location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const welcomeModal = () => {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 4000);
    };
    welcomeModal();
  }, []);

  const [play] = useSound(welcomeSound, {
    volume: 0.3,
  });

  const pageVariants = {
    animate: {
      opacity: 1,
      y: 0,
    },
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    exit: {
      opacity: 0,
      y: "-100vh",
    },
  };
  const pageTransitions = {
    duration: 1.5,
    type: "tween",
    ease: "easeOut",
  };
  const pageStyle = {
    position: "absolute",
  };

  return (
    <>
      {showModal ? (
        <div className="welcome-modal modal-on">
          <div className="welcome-modal-text">Hi there!</div>
        </div>
      ) : (
        <div className="welcome-modal modal-off"></div>
      )}
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <div className="welcome">
          <div className="welcome-background">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
          </div>
          <div className="welcome-container">
            <div className="welcome-header">
              <div className="title-top">Hi there, I'm</div>
              <div className="title-bottom">
                <TypewriterEffect />
              </div>
            </div>
            <div className="welcome-body">
              <motion.div
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                className="pulse"
              >
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
              </motion.div>
            </div>
            <div className="welcome-footer">
              <button
                className="down-arrow bounce"
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
    </>
  );
}
