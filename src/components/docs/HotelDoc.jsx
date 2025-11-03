import React from "react";

export default function HotelDoc() {
  return (
    <div className="space-y-8">
      {/* Project Title */}

      {/* Overview */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Overview
        </h3>
        <p className="text-gray-900 dark:text-gray-300 leading-relaxed tracking-wide">
          This project is a responsive hotel booking platform where users can browse hotels,
          check amenities, and make reservations with ease. The UI is designed to provide an
          immersive and smooth browsing experience, blending modern design with functionality.
        </p>
        <img
          src="/assets/simple.png"
          alt="Hotel Overview Screenshot"
          className="w-full rounded-lg  mt-2"
        />
      </section>

      {/* Problem Statement */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Problem Statement
        </h3>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
          Travelers often face difficulties finding hotels with clear details, availability,
          and easy booking flows. The challenge was to design an intuitive platform that
          reduces friction and enhances the booking experience.
        </p>
        <img
          src="/assets/luxury.png"
          alt="Problem Illustration"
          className="w-full rounded-lg  mt-2"
        />
      </section>

      {/* Research */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Research & Insights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Studied competitors like Booking.com and Airbnb for UX patterns</li>
          <li>Identified key user pain points: complex booking flows, hidden fees, poor filtering</li>
          <li>Focused on mobile-first design for users on-the-go</li>
        </ul>
        <img
          src="/assets/food.png"
          alt="Research Highlights"
          className="w-full rounded-lg  mt-2"
        />
      </section>

      {/* Wireframes */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Wireframes
        </h3>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
          Created low-fidelity wireframes to plan layout, navigation, and hotel listing
          interactions before moving into high-fidelity design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <img
            src="/assets/nike.png"
            alt="Wireframe 1"
            className="w-full rounded-lg "
          />
          <img
            src="/assets/price.png"
            alt="Wireframe 2"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* UI Design */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          UI Design
        </h3>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
          The design focuses on clean, modern visuals with consistent spacing, typography,
          and color hierarchy. Interactive elements are highlighted for smooth user guidance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <img
            src="/assets/cardio.png"
            alt="UI Screen 1"
            className="w-full rounded-lg "
          />
          <img
            src="/assets/fga.png"
            alt="UI Screen 2"
            className="w-full rounded-lg "
          />
        </div>
      </section>

      {/* Features */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Features
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Interactive circular image carousel for featured hotels</li>
          <li>Seamless booking flow with reservation forms</li>
          <li>Responsive design for desktop and mobile</li>
          <li>Animations powered by Framer Motion</li>
          <li>Filter hotels by price, rating, and amenities</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Tech Stack
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>React + Vite</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>Responsive, scalable front-end architecture</li>
        </ul>
      </section>

      {/* Challenges */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Challenges
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
          <li>Maintaining smooth animations without affecting performance</li>
          <li>Ensuring mobile responsiveness across various screen sizes</li>
          <li>Balancing UI aesthetics with usability</li>
        </ul>
      </section>

      {/* Learnings */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Learnings
        </h3>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
          This project strengthened skills in responsive design, front-end architecture,
          and interactive UI/UX patterns. Learned how to combine design systems with
          React components effectively.
        </p>
      </section>

      {/* Call-to-Action */}
      <div className="mt-6">
        <a
          href="https://github.com/your-repo/hotel-booking"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View Source Code →
        </a>
      </div>
    </div>
  );
}
