import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function HeroChar({ hero }) {
  const videoRef = useRef();
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        yPercent: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center bottom",
          end: "top 40%",
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      className="w-full flex max-lg:flex-col justify-between gap-20 max-lg:gap-10 "
      ref={containerRef}
    >
      <div className="text-white min-w-1/2 flex flex-col gap-5">
        <h1 className="font-second text-3xl max-lg:text-2xl text-main-neon">
          {hero.name}
        </h1>
        <p className="font-second text-lg max-lg:text-base text-main-white">
          {hero.story}
        </p>
      </div>
      <div>
        <video
          ref={videoRef}
          src={hero.src}
          muted
          playsInline
          autoPlay
          loop
          preload="true"
          className="object-cover border-2 border-main-neon rounded-md pointer-events-none"
        ></video>
      </div>
    </div>
  );
}

export default HeroChar;
