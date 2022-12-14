import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Dominick. ", "a software engineer. "],
          autoStart: true,
          delay: 75,
          loop: true,
        }}
      />
    </>
  );
}
