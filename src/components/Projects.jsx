import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ProjectCard({ titleBold, titleLight, images, children }) {
  const [angleOffset, setAngleOffset] = useState(0);
  const itemCount = images.length;
  const radius = 200; // orbit radius

  // Continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setAngleOffset(prev => prev + 0.5); // rotation speed
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card p-6 bg-transparent rounded-xl">
      <div className="grid grid-cols-1 gap-6 items-center">
        {/* 3D Orbit Gallery */}
        <div className="relative w-full h-[420px] md:h-[420px] perspective-[1000px] overflow-visible">
          {images.map((img, index) => {
            const angle = (360 / itemCount) * index + angleOffset;
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const z = radius * Math.sin(rad);

            // Calculate z-index based on distance to viewer
            const zIndex = Math.round(z) + radius;

            return (
              <motion.img
                key={index}
                src={img}
                alt={`Project-${index}`}
                className="absolute w-[220px] md:w-[300px] rounded-xl cursor-pointer"
                style={{
                  left: "50%",
                  top: "50%",
                  x: x,
                  z: z,
                  translateX: "-50%",
                  translateY: "-50%",
                  scale: 1.1 - 0.3 * Math.abs(Math.sin(rad)),
                  zIndex: zIndex,
                  boxShadow: "none", // remove shadow
                }}
                whileHover={{ scale: 2 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            );
          })}
        </div>

        {/* Title + Description */}
        <div className="text-center mt-6">
          <h5 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg">
            <span className="font-bold">{titleBold}</span>
            <span className="font-light">{titleLight}</span>
          </h5>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed max-w-2xl mx-auto">
            {children}
          </div>
          <div className="mt-6">
            <button className="btn-primary">VIEW PROJECT →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const intro = (
    <>
      Hands-on experience in building responsive, user-focused applications across web and mobile platforms. I
      specialize in front-end development with React, Angular, and Flutter, while also crafting robust back-end
      services using Node.js and Go. With a strong eye for design and usability, I enjoy creating seamless digital
      experiences through clean code, intuitive UI/UX, and performance-optimized solutions.
    </>
  );

  return (
    <section id="projects" className="mt-14">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-2xl font-bold tracking-wider">MY PROJECTS</h4>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <label className="flex items-center gap-1">
            <input type="radio" name="filter" defaultChecked /> All
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="filter" /> Website
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="filter" /> Mobile App
          </label>
        </div>
      </div>

      {/* Hotel Project */}
      <ProjectCard
        titleBold="Hotel "
        titleLight="– A hotel booking website"
        images={[
          "/assets/simple.png",
          "/assets/luxury.png",
          "/assets/food.png"
        ]}
      >
        {intro}
      </ProjectCard>

      <div className="h-6" />

      {/* FGA Project */}
      <ProjectCard
        titleBold="FGA "
        titleLight="– Fitness Gym App"
        images={[
          "/assets/cardio.png",
          "/assets/fga.png",
          "/assets/muscle.png"
        ]}
      >
        {intro}
      </ProjectCard>
    </section>
  );
}
