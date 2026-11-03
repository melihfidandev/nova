import React from "react";
import SectionTitle from "../section-title";
import HeroChar from "../hero-char";

function Media() {
  const heros = [
    {
      name: "CLARA",
      story:
        "Clara was once a lead robotics engineer for the `Eschaton` project, until a laboratory meltdown cost her her left arm and her status. Now, she is a ghost in the machine. Resting her weary body on the cold concrete, her heavy-duty boots and blackened cybernetic arm tell a story of a long fall from grace. She didn't choose the metal; the metal was forced upon her to keep her genius alive. She wanders the ruins not for revenge, but for a quiet place to finally shut down.",
      src: "video-1.mp4",
    },
    {
      name: "JAX",
      story:
        "Jax is the king of the neon-lit backalleys. Dressed in a sleek tech-wear jacket and glowing glasses that feed him real-time data, he stands as a vibrant contrast against the graffiti-covered walls of the lower city. He wasn't born into power; he coded his way into it. In a world of cold steel, Jax is the electric pulse. He uses the city's infrastructure as his playground, moving through digital and physical barriers like a ghost. If a secret exists in the neon haze, Jax already has it encrypted.",
      src: "video-2.mp4",
    },
    {
      name: "VALERIUS",
      story:
        "Valerius is a former elite special forces commander turned high-stakes mercenary. Known for his cold, calculating gaze and razor-sharp bald head, he embodies the `modern gladiator` aesthetic. He wears a high-tech, modular tactical vest over a minimalist urban outfit, blending European sophistication with brutal efficiency. He doesn't just fight; he deconstructs the battlefield.",
      src: "video-3.mp4",
    },
  ];
  const places = [
    {
      name: "JIG JIG STREET",
      src: "media-1.jpg",
    },
    {
      name: "VALERIUS OFFICE",
      src: "media-2.jpg",
    },
    {
      name: "HOMETOWN",
      src: "media-3.jpg",
    },
    {
      name: "NIGHTS",
      src: "media-4.jpg",
    },
  ];
  return (
    <div className="min-h-dvh" id="media">
      <SectionTitle>MEDIA</SectionTitle>
      <div className="container my-30 w-full flex flex-col gap-20 items-center justify-center">
        <h1 className="font-main text-main-neon text-[5vw]">
          "THE NOVA SQUAD"
        </h1>
        <div className="flex flex-col gap-15 border-b pb-15 border-b-main-neon">
          {heros.map((hero, index) => (
            <HeroChar hero={hero} key={index} />
          ))}
        </div>
        <h1 className="font-main text-main-neon text-[5vw]">
          "THE NOVA PLACES"
        </h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 grid-rows-2 gap-1 overflow-hidden rounded-3xl">
          {places.map((place, index) => (
            <div className="relative group" key={index}>
              <img
                src={place.src}
                className="object-cover h-full w-full group-hover:blur-xs group-hover:grayscale-100 group-hover:scale-103 transition-all"
              />
              <div className="opacity-0 scale-0 select-none text-3xl font-second text-main-white absolute top-1/2 left-1/2 -translate-1/2 group-hover:block group-hover:scale-100 group-hover:opacity-100 duration-600 text-nowrap">
                "{place.name}"
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Media;
