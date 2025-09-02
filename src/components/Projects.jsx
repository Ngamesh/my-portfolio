import React from "react";

function ProjectCard({ titleBold, titleLight, img, children }) {
  return (
    <div className="card p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center md:justify-start">
          <img src={img} alt="project" className="w-full max-w-[380px] rounded-xl shadow-sm" />
        </div>
        <div>
          <h5 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg">
            <span className="font-bold">{titleBold}</span>
            <span className="font-light">{titleLight}</span>
          </h5>
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
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
          <label className="flex items-center gap-1"><input type="radio" name="filter" defaultChecked /> All</label>
          <label className="flex items-center gap-1"><input type="radio" name="filter" /> Website</label>
          <label className="flex items-center gap-1"><input type="radio" name="filter" /> Mobile App</label>
        </div>
      </div>

      {/* Hotel – A hotel booking website */}
      <ProjectCard
        titleBold="Hotel "
        titleLight="– A hotel booking website"
        img="/assets/muscle.png"
      >
        {intro}
      </ProjectCard>

      <div className="h-6" />

      {/* FGA – Fitness Gym App */}
      <ProjectCard
        titleBold="FGA "
        titleLight="– Fitness Gym App"
        img="/assets/home-fga.png"
      >
        {intro}
      </ProjectCard>
    </section>
  );
}
