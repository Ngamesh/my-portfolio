import React from "react";

const buildSrcSet = (name, widths, ext) =>
  widths.map((w) => `/assets/${name}-${w}.${ext} ${w}w`).join(", ");

const getSources = (name, widths) => ({
  avif: buildSrcSet(name, widths, "avif"),
  webp: buildSrcSet(name, widths, "webp"),
  fallback: `/assets/${name}.png`,
});

function ResponsivePicture({ name, widths, sizes, alt, className }) {
  const sources = getSources(name, widths);
  return (
    <picture>
      <source type="image/avif" srcSet={sources.avif} sizes={sizes} />
      <source type="image/webp" srcSet={sources.webp} sizes={sizes} />
      <img
        src={sources.fallback}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

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
        <ResponsivePicture
          name="simple"
          widths={[320, 640, 960]}
          sizes="(min-width: 1024px) 800px, 100vw"
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
        <ResponsivePicture
          name="luxury"
          widths={[320, 640, 960]}
          sizes="(min-width: 1024px) 800px, 100vw"
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
        <ResponsivePicture
          name="food"
          widths={[320, 640, 960]}
          sizes="(min-width: 1024px) 800px, 100vw"
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
          <ResponsivePicture
            name="nike"
            widths={[320, 640, 960, 1280]}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="Wireframe 1"
            className="w-full rounded-lg "
          />
          <ResponsivePicture
            name="price"
            widths={[240, 480, 800]}
            sizes="(min-width: 768px) 50vw, 100vw"
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
          <ResponsivePicture
            name="cardio"
            widths={[240, 480, 800]}
            sizes="(min-width: 768px) 50vw, 100vw"
            alt="UI Screen 1"
            className="w-full rounded-lg "
          />
          <ResponsivePicture
            name="fga"
            widths={[240, 480, 800]}
            sizes="(min-width: 768px) 50vw, 100vw"
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
