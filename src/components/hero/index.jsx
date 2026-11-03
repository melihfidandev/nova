import React from "react";
import GalaxyBackground from "../galaxy-background";

function Hero() {
  return (
    <div id="hero" className="w-full min-h-dvh text-main-neon">
      <GalaxyBackground />

      <h1 className="font-second tracking-widest absolute bottom-0 left-1/2 -translate-x-1/2 text-[min(8vh,8vw)] max-lg:text-[min(6vh,8vw)] max-sm:text-[min(5vh,8vw)] text-nowrap">
        BEYOND THE HORIZON.
      </h1>
    </div>
  );
}

export default Hero;
