import "./AboutMe.scss";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
  let navigate = useNavigate();
  const location = useLocation();

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
    duration: 1.5,
    type: "tween",
    ease: "easeOut",
  };

  const pageStyle = {
    position: "absolute",
  };
  return (
    <>
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransitions}
      >
        <div className="about">
          <div className="about-container">
            <div
              onClick={() => {
                navigate("/", {
                  state: { from: location },
                  replace: true,
                });
              }}
            >
              Go Back
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
