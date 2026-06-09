import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import HotelSection from "./projects/HotelSection";
import FGASection from "./projects/FGASection";
import SparkSection from "./projects/SparkSection";
import NikeSection from "./projects/NikeSection";
import ViewMore from "./projects/ViewMore";

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleOpenModal = (modalName) => {
    setActiveModal(modalName);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section id="projects" className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="w-full">
        {/* Project Header & Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 sm:mb-12 gap-5">
          <h4 className="text-xl sm:text-2xl font-bold tracking-wider uppercase">MY PROJECTS</h4>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 w-full sm:w-auto">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="filter"
                value="all"
                checked={filter === "all"}
                onChange={handleFilterChange}
                className="accent-[var(--color-accent)]"
              />{" "}
              All
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="filter"
                value="website"
                checked={filter === "website"}
                onChange={handleFilterChange}
                className="accent-[var(--color-accent)]"
              />{" "}
              Website
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="filter"
                value="mobile"
                checked={filter === "mobile"}
                onChange={handleFilterChange}
                className="accent-[var(--color-accent)]"
              />{" "}
              Mobile App
            </label>
          </div>
        </div>

        {/* Project Sections */}
        <div className="flex flex-col gap-24 sm:gap-32 md:gap-40">
          {(filter === "all" || filter === "website") && (
            <HotelSection onOpenModal={handleOpenModal} />
          )}
          {(filter === "all" || filter === "mobile") && (
            <FGASection onOpenModal={handleOpenModal} />
          )}
          {(filter === "all" || filter === "mobile") && (
            <SparkSection onOpenModal={handleOpenModal} />
          )}
          {(filter === "all" || filter === "website") && (
            <NikeSection onOpenModal={handleOpenModal} />
          )}

          {/* View More Projects */}
          <ViewMore filter={filter} />
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal activeModal={activeModal} setActiveModal={setActiveModal} />
    </section>
  );
}
