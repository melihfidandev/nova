import React, { useEffect, useRef } from "react";
import * as THREE from "three/webgpu";
import {
  color,
  cos,
  float,
  mix,
  range,
  sin,
  time,
  uniform,
  vec3,
  vec4,
  TWO_PI,
  uv,
} from "three/tsl";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function GalaxyBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let camera, scene, renderer, controls;

    // --- INIT ---
    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.set(4, 2, 5);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Nova markana uygun tam siyah

    // --- GALAXY MATERIAL (TSL) ---
    const material = new THREE.SpriteNodeMaterial({
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const size = uniform(0.08);
    material.scaleNode = range(0, 1).mul(size);

    const radiusRatio = range(0, 1);
    const radius = radiusRatio.pow(1.5).mul(5).toVar();

    const branches = 3;
    const branchAngle = range(0, branches).floor().mul(TWO_PI.div(branches));
    const angle = branchAngle.add(time.mul(radiusRatio.oneMinus()));

    const position = vec3(cos(angle), 0, sin(angle)).mul(radius);
    const randomOffset = range(vec3(-1), vec3(1))
      .pow3()
      .mul(radiusRatio)
      .add(0.2);

    material.positionNode = position.add(randomOffset);

    // Nova renklerine uyarlanan renk paleti (Mavi/Mor tonlar)
    const colorInside = uniform(color("#e9ff70")); // Merkeze yakın sıcak ton
    const colorOutside = uniform(color("#0e8077")); // Dışa doğru Nova mavisi

    const colorFinal = mix(
      colorInside,
      colorOutside,
      radiusRatio.oneMinus().pow(2).oneMinus(),
    );
    const alpha = float(0.1).div(uv().sub(0.5).length()).sub(0.2);
    material.colorNode = vec4(colorFinal, alpha);

    const mesh = new THREE.InstancedMesh(
      new THREE.PlaneGeometry(1, 1),
      material,
      20000,
    );
    scene.add(mesh);

    // --- RENDERER ---
    renderer = new THREE.WebGPURenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false; // Landing page'de scroll'u bozmaması için kapattım

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    // --- RESIZE ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // CLEANUP
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 -z-1" />
    </div>
  );
}

export default GalaxyBackground;
