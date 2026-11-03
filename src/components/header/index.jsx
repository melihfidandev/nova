import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Header() {
  const handleNavClick = (id) => {
    gsap.to(window, {
      duration: 1,
      ease: "power2.inOut",
      scrollTo: {
        y: `#${id}`,
      },
    });
  };

  return (
    <header className="fixed top-0 left-0 z-100000 w-full ">
      <div className="container py-4 flex items-center justify-between max-lg:justify-center bg-transparent">
        <a
          onClick={() => handleNavClick("hero")}
          className="font-main cursor-pointer text-main-neon text-4xl font-black -tracking-wide"
        >
          NOVA
        </a>
        <nav className="flex gap-4 font-second text-xl -tracking-wider max-lg:hidden">
          <a
            onClick={() => handleNavClick("media")}
            className="text-main-neon cursor-pointer"
          >
            Media
          </a>
          <a
            onClick={() => handleNavClick("explore")}
            className="text-main-neon cursor-pointer"
          >
            Explore
          </a>
          <a
            onClick={() => handleNavClick("joinus")}
            className="text-main-neon cursor-pointer"
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
