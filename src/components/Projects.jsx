import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const ProjectModal = React.lazy(() => import("./ProjectModal"));

const buildSrcSet = (name, widths, ext) =>
  widths.map((w) => `/assets/${name}-${w}.${ext} ${w}w`).join(", ");

const getImageSources = (name, widths) => ({
  avif: buildSrcSet(name, widths, "avif"),
  webp: buildSrcSet(name, widths, "webp"),
  fallback: `/assets/${name}.png`,
});

function OptimizedMotionImage({ name, widths, sizes, alt, className, ...motionProps }) {
  const sources = getImageSources(name, widths);
  return (
    <picture>
      <source type="image/avif" srcSet={sources.avif} sizes={sizes} />
      <source type="image/webp" srcSet={sources.webp} sizes={sizes} />
      <motion.img
        src={sources.fallback}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...motionProps}
      />
    </picture>
  );
}

// =========================
// Hotel Project Card
// =========================
function HotelProjectCard({ images }) {
  const [angleOffset, setAngleOffset] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const itemCount = images.length;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  const getRadius = () => {
    if (typeof window === "undefined") return 200;
    if (window.innerWidth < 640) return 150;
    if (window.innerWidth < 1024) return 220;
    return 300;
  };
  const [radius, setRadius] = React.useState(getRadius());

  React.useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex === null) setAngleOffset((prev) => prev + 0.5);
    }, 16);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-[420px] md:h-[420px]"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {images.map((img, index) => {
        const angle = (360 / itemCount) * index + angleOffset;
        const rad = (angle * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const z = radius * Math.sin(rad);
        const zIndex = Math.round(z) + radius;
        const baseScale = 0.7 + ((z + radius) / (2 * radius)) * 0.4;

        return (
          <OptimizedMotionImage
            key={index}
            name={img.replace("/assets/", "").replace(".png", "")}
            widths={[240, 480, 800]}
            sizes="(min-width: 768px) 400px, 180px"
            alt={`Hotel-${index}`}
            className="absolute w-[180px] md:w-[400px] rounded-xl cursor-pointer"
            style={{
              left: "50%",
              top: "50%",
              x: x,
              z: z,
              translateX: "-50%",
              translateY: "-50%",
              zIndex: zIndex,
            }}
            animate={{ scale: hoveredIndex === index ? baseScale * 1.45 : baseScale }}
            transition={{ type: "spring", stiffness: 135, damping: 15 }}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        );
      })}
    </motion.div>
  );
}

// =========================
// FGA Project Card
// =========================
function FGAProjectCard({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  const positions = [
    { xOffset: -140, scale: 1, zIndex: 5 },
    { xOffset: 0, scale: 1.2, zIndex: 9 },
    { xOffset: 140, scale: 1, zIndex: 5 },
  ];

  const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.3 } } };

  const imageVariants = (xOffset) => ({
    hidden: { opacity: 0, x: xOffset < 0 ? xOffset - 50 : xOffset + 50 },
    show: { opacity: 1, x: xOffset, transition: { duration: 0.6, ease: "easeOut" } },
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center w-full h-[250px] md:h-[300px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {images.map((img, index) => {
        const { xOffset, scale, zIndex } = positions[index];
        return (
          <OptimizedMotionImage
            key={index}
            name={img.replace("/assets/", "").replace(".png", "")}
            widths={[240, 480, 800]}
            sizes="(min-width: 768px) 200px, 140px"
            alt={`FGA-${index}`}
            className="absolute w-[140px] md:w-[200px] rounded-xl cursor-pointer"
            style={{ scale, zIndex }}
            variants={imageVariants(xOffset)}
            whileHover={{ scale: scale * 1.2 }}
            transition={{ type: "spring", stiffness: 140, damping: 15 }}
          />
        );
      })}
    </motion.div>
  );
}

// =========================
// Nike Card
// =========================
function NikeCard({ images }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

  // Responsive stacked positions
  const getPositions = () => {
    if (typeof window === "undefined") return [];

    if (window.innerWidth < 640) {
      // Mobile (smaller spacing, smaller shift)
      return [
        { xOffset: -120, yOffset: 40, scale: 1, zIndex: 9 },
        { xOffset: 0, yOffset: 100, scale: 1, zIndex: 5 },
        { xOffset: 120, yOffset: 160, scale: 1, zIndex: 1 },
      ];
    } else if (window.innerWidth < 1024) {
      // Tablet / medium
      return [
        { xOffset: -180, yOffset: 60, scale: 1, zIndex: 9 },
        { xOffset: 0, yOffset: 120, scale: 1, zIndex: 5 },
        { xOffset: 180, yOffset: 180, scale: 1, zIndex: 1 },
      ];
    } else {
      // Large (your current setup)
      return [
        { xOffset: -300, scale: 1, zIndex: 9 },
        { xOffset: 0, yOffset: 80, scale: 1, zIndex: 5 },
        { xOffset: 300, yOffset: 160, scale: 1, zIndex: 1 },
      ];
    }
  };

  const [positions, setPositions] = useState(getPositions());

  React.useEffect(() => {
    const handleResize = () => setPositions(getPositions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.3 } } };

  const imageVariants = ({ xOffset, yOffset }) => ({
    hidden: { opacity: 0, x: xOffset, y: (yOffset ?? 0) - 50 },
    show: {
      opacity: 1,
      x: xOffset,
      y: yOffset ?? 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center w-full h-[300px] md:h-[350px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {images.map((img, index) => {
        const { xOffset, yOffset = 0, scale, zIndex } = positions[index];
        return (
          <OptimizedMotionImage
            key={index}
            name={img.replace("/assets/", "").replace(".png", "")}
            widths={[320, 640, 960, 1280]}
            sizes="(min-width: 1024px) 520px, (min-width: 640px) 280px, 160px"
            alt={`Nike-${index}`}
            className="absolute w-[160px] sm:w-[280px] md:w-[520px] rounded-xl cursor-pointer"
            style={{ scale, zIndex }}
            variants={imageVariants({ xOffset, yOffset })}
            whileHover={{ scale: scale * 1.2 }}
            transition={{ type: "spring", stiffness: 140, damping: 15 }}
          />
        );
      })}
    </motion.div>
  );
}


// =========================
// Main Projects Component
// =========================
export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  const introVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const hotelIntro = (
    <motion.div
      className="text-center md:text-center "
      variants={introVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h5 className="text-center text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg leading-relaxed tracking-wide">
        <span className="font-bold">Hotel </span>
        <span className="font-light">– A Modern Booking Platform</span>
      </h5>
      <div className="  text-gray-600 dark:text-gray-300 mt-3 leading-relaxed tracking-wide max-w-2xl mx-auto md:mx-0">
        <a>
          Built a responsive hotel booking website that allows users to browse
          hotels, view amenities, and make reservations seamlessly. Focused on
          smooth, interactive UI for both desktop and mobile users, integrating
          dynamic image galleries and intuitive navigation.
        </a>
      </div>
      <a>
      <ul className="tracking-wide text-sm text-gray-600 dark:text-gray-300 mt-3 list-disc list-inside text-left max-w-2xl mx-auto md:mx-0">
        <li>Interactive circular image carousel for featured hotels</li>
        <li>Responsive layout with React + Tailwind CSS</li>
        <li>Framer Motion animations for hover and entry effects</li>
        <li>Scalable front-end architecture</li>
      </ul>
      </a>
      <div className="mt-6 text-left">
        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          onClick={() => setActiveModal("hotel")}
        >
          VIEW PROJECT →
        </motion.button>
      </div>
    </motion.div>
  );

  const fgaIntro = (
    <motion.div
      className="text-center text-justify md:w-2/3 mt-10 md:mt-0 md:py-0"
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.7, ease: "easeOut" } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h5 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg">
        <span className="font-bold">FGA </span>
        <span className="font-light">– Fitness Gym App</span>
      </h5>
      <div className="tracking-wide text-base text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
        <a>
          A fitness app that allows users to track workouts, manage gym
          schedules, and monitor progress. Combines interactive UI elements with
          smooth animations to create an engaging experience for gym
          enthusiasts.
        </a>
      </div>
      <ul className="tracking-wide text-sm text-gray-600 dark:text-gray-300 mt-3 list-disc list-inside">
        <li>Interactive 3-card layout for workout showcase</li>
        <li>Responsive across web and mobile screens</li>
        <li>Staggered animations with Framer Motion</li>
        <li>Streamlined UX flow for intuitive navigation</li>
      </ul>
      <div className="mt-6">
        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          onClick={() => setActiveModal("fga")}
        >
          VIEW PROJECT →
        </motion.button>
      </div>
    </motion.div>
  );

  const sparkIntro = (
    <motion.div
      className="text-left md:w-2/3"
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.7, ease: "easeOut" } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h5 className="leading-relaxed tracking-wide text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg">
        <span className="font-light">Share the</span>
        <span className="font-bold"> SPARK </span>
      </h5>
      <div className="leading-relaxed text-justify tracking-wide text-base text-gray-600 dark:text-gray-300 mt-3 leading-relaxed">
        <a>
          Designed a social communication app enabling users to chat, share
          profiles, and interact with communities. Built with a clean,
          responsive interface and card-based layouts for user profiles and
          conversations.
        </a>
      </div>
      <ul className="leading-relaxed tracking-wide text-sm text-gray-600 dark:text-gray-300 mt-3 list-disc list-inside">
        <li>Interactive card layouts for chat, profile, and feed</li>
        <li>Smooth motion effects for transitions</li>
        <li>Cross-platform compatibility (web + mobile)</li>
        <li>User-centered design for engagement</li>
      </ul>
      <div className="mt-6">
        <motion.button
          className="btn-primary"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          onClick={() => setActiveModal("spark")}
        >
          VIEW PROJECT →
        </motion.button>
      </div>
    </motion.div>
  );

  const nikeIntro = (
    <motion.div
      className="text-center md:text-center"
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7, ease: "easeOut" } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
    >
      <h5 className=" leading-relaxed tracking-wide text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg">
        <span className="font-bold">Nike </span>
        <span className="font-light">– Commercial Promo UI</span>
      </h5>
      <div className="leading-relaxed tracking-wide text-base text-gray-600 dark:text-gray-300 mt-3 leading-relaxed max-w-2xl mx-auto md:mx-0">
        <a>
          A promotional UI showcasing Nike products in a stacked image layout
          with depth and layering effects. Focused on modern, interactive design
          for commercial marketing.
        </a>
      </div>
      <ul className=" leading-relaxed tracking-wide text-sm text-gray-600 dark:text-gray-300 mt-3 list-disc list-inside text-left max-w-2xl mx-auto md:mx-0">
        <li>Stacked image layout with visual depth</li>
        <li>Interactive hover animations</li>
        <li>Responsive, polished design</li>
        <li>Consistent with Nike’s brand identity</li>
      </ul>
      <div className="mt-6 text-center">
        <motion.button
          className="btn-primary leading-relaxed tracking-wide"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 180, damping: 12 }}
          onClick={() => setActiveModal("nike")}
        >
          VIEW PROJECT →
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="mt-14 flex flex-col">
      <div className="w-[80%] max-w-7xl mx-auto">
      <div className="px-6 md:px-12 flex items-center justify-between mb-6">
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

      <div className="flex flex-col gap-20">
        {/* Hotel */}
        <div className="flex flex-col items-center gap-0 px-0 md:px-12 mb-20">
          <HotelProjectCard
            images={["/assets/simple.png", "/assets/luxury.png", "/assets/food.png"]}
          />
          {hotelIntro}
        </div>

        {/* FGA */}
        <div className="flex flex-col md:flex-row items-center gap-1 mr-0 px-0 md:px-0">
          <FGAProjectCard
            images={["/assets/cardio.png", "/assets/fga.png", "/assets/muscle.png"]}
          />
          {fgaIntro}
        </div>

        {/* SPARK */}
        <div className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-0 ml-0 mt-25 ml-0">
          {sparkIntro}
          <FGAProjectCard
            images={["/assets/profile.png", "/assets/spark.png", "/assets/chat.png"]}
          />
        </div>

        {/* Nike */}
        <div className="flex flex-col items-center gap-6 px-6 md:px-12 mt-4 mb-20">
          <NikeCard
            images={["/assets/nike.png", "/assets/price.png", "/assets/location.png"]}
          />
          <div className="mt-40">{nikeIntro}</div>
        </div>
      </div>
      </div>

      {/* Project Modal */}
      <React.Suspense fallback={null}>
        <ProjectModal activeModal={activeModal} setActiveModal={setActiveModal} />
      </React.Suspense>
    </section>
  );
}
