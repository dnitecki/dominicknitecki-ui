import React from "react";
import "./MyIcon.scss";
import { motion } from "framer-motion";

const polyVariants = {
  initial: { rotate: -180 },
  animate: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export default function MyIcon() {
  return (
    <>
      <motion.svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        width="227.09"
        height="309.48"
        viewBox="0 0 227.09 309.48"
        // variants={svgVariants}
        // initial="initial"
        // animate="animate"
      >
        <defs></defs>
        <g id="Layer_1-2">
          <g>
            <motion.polygon
              variants={polyVariants}
              initial="initial"
              animate="animate"
              style={{
                fill: "#fff",
                filter: "drop-shadow(0 0.2rem 1rem rgba(0, 0, 0, 0.325))",
              }}
              points="160.83 0 160.83 245.01 147.93 231.85 69.97 152.27 69.97 309.48 36.19 309.48 36.2 117.8 36.19 115.46 36.19 71.2 38.81 73.89 127.05 164.78 127.05 0 160.83 0"
            />
            <motion.path
              style={{
                fill: "#fff",
                filter: "drop-shadow(0 0.2rem 1rem rgba(0, 0, 0, 0.325))",
              }}
              d="M227.09,154.51c0,17.79-3.22,34.65-9.47,49.76-.55,1.36-1.14,2.7-1.75,4.03-.61,1.32-1.24,2.63-1.89,3.92-.84,1.66-1.72,3.3-2.63,4.91l-.06,.1c-1.28,2.23-2.63,4.41-4.05,6.53-19.91,29.7-54.27,48.97-100.83,48.97H0v-33.78H115.2c11.96,0,22.97-2.54,32.73-7.1l12.9,13.16v-20.94c8.21-6.16,15.11-14.01,20.41-23.1,7.75-13.31,12.08-29.27,12.08-46.46,0-27.23-10.84-51.36-28.99-66.78-1.14-.97-2.31-1.9-3.5-2.79-9.61-7.22-21.02-12.14-33.78-14.02-3.83-.57-7.78-.86-11.85-.86H0V36.29H106.41c7.19,0,14.07,.44,20.64,1.3,12.37,1.58,23.64,4.63,33.78,8.92,10.3,4.36,19.44,10,27.4,16.72,25.62,21.66,38.86,54.47,38.86,91.28Z"
              variants={pathVariants}
              initial="initial"
              animate="animate"
            />
          </g>
        </g>
      </motion.svg>
    </>
  );
}
