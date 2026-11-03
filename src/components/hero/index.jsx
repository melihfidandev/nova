import React from "react";
import GalaxyBackground from "../galaxy-background";

function Hero() {
  return (
    <div id="hero" className="w-full min-h-dvh text-main-neon">
      <GalaxyBackground />

      <h1 className="font-second tracking-widest absolute bottom-0 left-1/2 -translate-x-1/2 text-[8vh] max-lg:text-[6vh] max-sm:text-[5vh] text-nowrap">
        BEYOND THE HORIZON.
      </h1>
    </div>
  );
}

export default Hero;
