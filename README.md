<div align="center">

<img src="public/favicon.svg" width="72" alt="Nova logo" />

# NOVA

**A neon-soaked, cyberpunk landing page for a fictional sci-fi game.**

_Beyond the horizon._

<!-- **[🔗 Live Demo](https://your-demo-url.vercel.app)** -->

![React](https://img.shields.io/badge/React_19-0c0b0b?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_8-0c0b0b?style=flat-square&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-0c0b0b?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![GSAP](https://img.shields.io/badge/GSAP-0c0b0b?style=flat-square&logo=greensock&logoColor=88CE02)
![Three.js](https://img.shields.io/badge/Three.js-0c0b0b?style=flat-square&logo=threedotjs&logoColor=e9ff70)

</div>

<!-- Add a screenshot or GIF of the site here, e.g.:
<p align="center"><img src="docs/preview.gif" alt="Nova preview" width="100%" /></p>
-->

---

## About

**Nova** is a concept project: a promotional landing page for an imaginary open-world sci-fi game. The game, its characters, its locations and its story are all made up.

I built it as a **portfolio piece** to practise real-time 3D on the web, scroll-driven animation and a bold visual identity in a modern React setup. The design leans on a strict two-colour palette (near-black and electric neon yellow) with wide, futuristic type so the neon glow carries the mood.

## Features

- **Real-time galaxy hero:** a 20,000-particle spiral galaxy rendered with Three.js `WebGPURenderer` and TSL shaders, rotating over time and draggable with the mouse.
- **Infinite-marquee section titles:** two rows of oversized italic headings slide in opposite directions as you scroll (GSAP ScrollTrigger with scrub).
- **"The Nova Squad":** character cards with looping cinematic videos and backstories that fade up into view on scroll.
- **"The Nova Places" gallery:** location shots that blur, desaturate and zoom on hover to reveal the place name.
- **Explore cards:** feature cards that stagger in on scroll and flip to solid neon on hover.
- **Join Us section:** social links and store buttons over a softly pulsing neon glow.
- **Smooth anchor navigation:** header links glide to each section with GSAP ScrollTo.
- **Fully responsive:** layouts and type scale down cleanly from desktop to mobile.

## Tech Stack

| Area         | Tools                                                                      |
| ------------ | -------------------------------------------------------------------------- |
| UI           | [React 19](https://react.dev)                                              |
| Build tool   | [Vite 8](https://vite.dev)                                                 |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com) (via `@tailwindcss/vite`)        |
| 3D           | [Three.js](https://threejs.org): WebGPURenderer, TSL, OrbitControls        |
| Animation    | [GSAP](https://gsap.com): ScrollTrigger, ScrollTo                          |
| React + GSAP | [`@gsap/react`](https://gsap.com/resources/React) (`useGSAP`)              |
| Typography   | Orbitron & Oswald via [Fontsource](https://fontsource.org)                 |
| Linting      | ESLint 9                                                                   |

## Getting Started

**Requirements:** Node.js 20.19+ or 22.12+

```bash
# clone the repo
git clone https://github.com/melihfidandev/nova.git
cd nova

# install dependencies
npm install

# start the dev server
npm run dev
```

### Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the local dev server        |
| `npm run build`   | Build for production into `dist/` |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint                        |

## Project Structure

```
nova/
├── public/
│   ├── favicon.svg
│   ├── video-*.mp4        # character videos
│   └── media-*.jpg        # location photos
└── src/
    ├── App.jsx            # page composition
    ├── main.jsx
    ├── index.css          # Tailwind theme (colors, fonts, utilities)
    └── components/
        ├── header/            # smooth-scroll navigation
        ├── hero/
        ├── galaxy-background/ # Three.js galaxy
        ├── section-title/     # scrolling marquee titles
        ├── media/             # squad + places
        ├── hero-char/         # character card with video
        ├── explore/
        ├── join-us/
        └── footer/
```

## Disclaimer

Nova is **not a real game**. All names, characters, locations and text on the site are fictional and exist only for demonstration.

The videos and photographs in `public/` are used **for non-commercial, portfolio purposes only**, and all rights belong to their respective owners. If you own any of these assets and would like them credited or removed, please open an issue and I'll take care of it.

## License

© 2026 Melih Fidan. All rights reserved.

This repository is shared for viewing and portfolio purposes. Please don't copy or reuse the code or design without permission.
