import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
function SectionTitle({ children }) {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.to(".first-title", {
        xPercent: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
      });
      gsap.to(".second-title", {
        xPercent: -10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );
  return (
    <div className="w-full" ref={containerRef}>
      <div className="w-full bg-main-neon/20 overflow-hidden text-main-neon">
        <h1 className="first-title uppercase font-main text-8xl max-lg:text-6xl text-main-neon italic flex items-center justify-center whitespace-nowrap">
          {children}·{children}·{children}·{children}·{children}·{children}
        </h1>
        <h1 className="second-title uppercase font-main text-8xl max-lg:text-6xl text-main-neon italic flex items-center justify-center">
          {children}·{children}·{children}·{children}·{children}·{children}
        </h1>
      </div>
    </div>
  );
}

export default SectionTitle;
