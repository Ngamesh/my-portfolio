import { useEffect, useRef } from "react";

/**
 * Modern Soft Shadow Mouse Trail Component
 * Uses radial gradients and requestAnimationFrame for a smooth, performant effect.
 */
export default function MouseTrail() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const trailRef = useRef([]);
  const maxTrailPoints = 60; // Increased for thick "boiling" look

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mousePos.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Update existing trail points (Boiling nitrogen effect)
      trailRef.current.forEach((point, index) => {
        // Heavy gravity - falls and accelerates
        point.y += 3.5 + (index * 0.1);

        // "Boiling" turbulence - random jitter + horizontal expansion
        const turbulence = (Math.random() - 0.5) * (2 + index * 0.5);
        point.x += turbulence;
      });

      // Add current mouse position to trail
      trailRef.current.unshift({ ...mousePos.current });

      // Keep trail at fixed size
      if (trailRef.current.length > maxTrailPoints) {
        trailRef.current.pop();
      }

      // Dark misty color
      const hue = 0;
      const saturation = 0;
      const lightness = 5; // Very dark

      // Draw the trail from end to start (back to front)
      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const point = trailRef.current[i];

        // Calculate dynamic properties based on position in trail
        const ratio = 1 - i / maxTrailPoints;

        // Nitrogen "expansion" - grows significantly as it falls/boils
        const size = (20 + i * 2.5) * ratio;
        const opacity = 0.08 * ratio;

        // Create radial gradient for the "boiling" effect
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        );

        gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`);
        gradient.addColorStop(0.5, `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        // Use a slight wobble for the "boil" look if needed, 
        // but high particle turbulence + blur usually achieves this.
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(render);
    };


    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    const animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "multiply", // Better for dark mist/shadow effects
        filter: "blur(6px)", // Increased blur for more "misty" feel
      }}
    />

  );
}
