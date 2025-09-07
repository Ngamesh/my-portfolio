import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Props:
 *  - images: array of image URLs (strings)
 *  - size: number (optional, base width for images)
 */
export default function Carousel3D({ images = [], size = 260 }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Add refs
  const addToRefs = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!images.length) return;

    const container = containerRef.current;
    const itemCount = images.length;
    const radius = Math.max(220, Math.round((size * itemCount) / (2 * Math.PI))); // adaptive radius

    // Position items in a circle (front-facing)
    itemRefs.current.forEach((el, i) => {
      const angle = (i / itemCount) * Math.PI * 2; // radians
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * (radius * 0.15); // small vertical ellipse for front view feel
      const z = Math.sin(angle) * 120; // depth offset

      // set initial transform without rotation of the image
      gsap.set(el, {
        x,
        y,
        z,
        zIndex: Math.round(100 + z),
        transformOrigin: "center center",
      });
    });

    // Mouse-driven rotation / parallax
    let addRotation = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e) => {
      // normalized coords - window center
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2); // -1..1
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2); // -1..1
    };

    // update loop with GSAP ticker for smoothness
    const tick = () => {
      addRotation += mouseX * 0.25; // rotation sensitivity
      // rotate the whole ring and tilt by mouseY
      gsap.to(container, {
        duration: 0.8,
        rotationY: addRotation,
        rotationX: mouseY * 8,
        ease: "power2.out",
      });

      // subtle depth update so items closer to front scale up slightly
      itemRefs.current.forEach((el) => {
        // compute current z position using matrix: we rely on the set z, but adjust scale by z
        const z = parseFloat(gsap.getProperty(el, "z")) || 0;
        // scale mapping: more z (towards viewer) => bigger
        const scale = 1 + (z / 600);
        gsap.to(el, { scale, duration: 0.6, ease: "power2.out" });
        // adjust zIndex for correct layering
        const zIndex = Math.round(100 + z);
        el.style.zIndex = zIndex;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    const ticker = gsap.ticker.add(tick);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(ticker);
    };
  }, [images, size]);

  // Hover handlers (for dimming background via parent class)
  const onEnter = (i) => setHoveredIndex(i);
  const onLeave = () => setHoveredIndex(null);

  return (
    <div
      className={`carousel3d-root ${hoveredIndex !== null ? "is-hovered" : ""}`}
      aria-hidden={false}
    >
      <div className="carousel3d-container trans3d" ref={containerRef}>
        {images.map((src, i) => (
          <div
            key={i}
            ref={addToRefs}
            className="carousel3d-item"
            onMouseEnter={() => onEnter(i)}
            onMouseLeave={onLeave}
            role="button"
            tabIndex={0}
            style={{ width: `${size}px`, height: `${Math.round(size * 0.6)}px` }}
          >
            <img
              src={src}
              alt={`carousel-${i}`}
              className={`carousel3d-img ${hoveredIndex === i ? "hovered" : ""}`}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
