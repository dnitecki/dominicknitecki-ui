import React from "react";

export default function MyIcon() {
  return (
    <>
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 201.09 342"
      >
        <defs>
          <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
            <feOffset dx="5" dy="7" />
            <feGaussianBlur result="blur" stdDeviation="5" />
            <feFlood floodColor="#000" floodOpacity=".75" />
            <feComposite in2="blur" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
            <feOffset dx="5" dy="7" />
            <feGaussianBlur result="blur-2" stdDeviation="5" />
            <feFlood floodColor="#000" floodOpacity=".75" />
            <feComposite in2="blur-2" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter id="drop-shadow-3" filterUnits="userSpaceOnUse">
            <feOffset dx="5" dy="7" />
            <feGaussianBlur result="blur-3" stdDeviation="5" />
            <feFlood floodColor="#000" floodOpacity=".75" />
            <feComposite in2="blur-3" operator="in" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g id="Layer_1-2">
          <g>
            <g>
              <polyline
                className="cls-3"
                points="134.34 250.16 43.97 157.45 43.97 319.3 10.19 319.3 10.19 77.22 134.14 203.74"
              />
              <polyline
                className="cls-2"
                points="10.68 78.07 101.05 170.78 101.05 8.93 134.83 8.93 134.83 251.01 10.88 124.49"
              />
            </g>
            <g className="cls-4">
              <path
                class="cls-1"
                d="M9.68,76.06V42.29H80.41c78.82,0,120.69,52.78,120.69,118.22,0,65.45-43.63,118.22-120.69,118.22H9.68v-33.78H89.2c46.1,0,78.11-37.65,78.11-84.45s-32.02-84.44-78.11-84.44H9.68"
              />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}
