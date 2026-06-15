import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Smartphone,
  Layout,
  Target,
  Search,
  CreditCard,
  Zap,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Users,
  Compass
} from "lucide-react";

const Section = ({ children, className = "", innerClassName = "" }) => (
  <section className={`w-full py-12 sm:py-16 md:py-24 ${className}`}>
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 ${innerClassName}`}>
      {children}
    </div>
  </section>
);

const hotelPalette = [
  { hex: "#FC3C3C", label: "Primary Red" },
  { hex: "#010101", label: "Deep Black" },
  { hex: "#FAFAFA", label: "Soft White" },
  { hex: "#777777", label: "Muted Text" }
];

const FeatureCard = ({ icon: Icon, title, description, imageSrc, imageAlt, imageHoverScale = false, imageNoChrome = false, imageCompact = false }) => (
  <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#bc1616]/10 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-[#bc1616]" size={22} />
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
    {imageSrc && imageHoverScale && (
      <div className="group/suite relative mt-6 overflow-hidden rounded-xl bg-white shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] transition-shadow duration-500 ease-out [container-type:inline-size] hover:shadow-[0_8px_30px_rgba(0,0,0,0.18)] md:mx-auto md:w-[72%] md:max-w-[540px] xl:w-full xl:max-w-none">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full origin-center scale-100 transform-gpu object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover/suite:scale-[1.08]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 flex w-full items-center justify-between gap-[4cqw] bg-gradient-to-t from-black/90 via-black/50 to-transparent px-[5cqw] pb-[6cqw] pt-[16cqw]">
          <p className="mb-0 whitespace-nowrap text-[7cqw] font-light uppercase !text-white [text-shadow:1px_1px_3px_rgba(0,0,0,0.8)]">Single Suite</p>
          <span className="whitespace-nowrap text-[4cqw] font-normal text-[#fc3c3c] opacity-0 transition-[opacity,color] duration-500 ease-out group-hover/suite:opacity-100">
            View
          </span>
        </div>
      </div>
    )}
    {imageSrc && !imageHoverScale && (
      <img
        src={imageSrc}
        alt={imageAlt}
        className={`mt-6 block ${imageCompact ? "-mr-5 sm:-mr-6 md:-mr-8 ml-auto w-3/4 max-w-[260px]" : "-mx-5 w-[calc(100%+2.5rem)] sm:-mx-6 sm:w-[calc(100%+3rem)] md:-mx-8 md:w-[calc(100%+4rem)] max-w-none"} ${imageNoChrome ? "" : "border-y border-white/10 shadow-lg"}`}
      />
    )}
  </div>
);

export default function HotelDoc() {
  const journeyStages = [
    { label: "Discover", icon: Compass, firstScreenIndex: 0 },
    { label: "Evaluate", icon: Search, firstScreenIndex: 3 },
    { label: "Decide", icon: Target, firstScreenIndex: 6 },
    { label: "Convert", icon: CreditCard, firstScreenIndex: 8 }
  ];
  const journeyScreens = [
    { label: "Landing page", stage: "Discover", image: "/assets/landing-page.avif" },
    { label: "Explore hotel", stage: "Discover", image: "/assets/explore-hotel.avif" },
    { label: "Amenities", stage: "Discover", image: "/assets/amenities.avif" },
    { label: "Rooms listing", stage: "Evaluate", image: "/assets/rooms-listing.avif" },
    { label: "Explore rooms", stage: "Evaluate", image: "/assets/explore-rooms.avif" },
    { label: "Room detail", stage: "Evaluate", image: "/assets/room-detail.avif" },
    { label: "Date selection", stage: "Decide", image: "/assets/date-selection.avif" },
    { label: "Availability check", stage: "Decide", image: "/assets/availability-check.avif" },
    { label: "Booking form", stage: "Convert", image: "/assets/booking-form.avif" },
    { label: "Confirm booking", stage: "Convert", image: "/assets/confirm-booking.avif" }
  ];
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const activeJourneyStage = journeyScreens[activeJourneyIndex].stage;

  const goToPreviousJourneyStep = () => {
    setActiveJourneyIndex((current) => Math.max(current - 1, 0));
  };

  const goToNextJourneyStep = () => {
    setActiveJourneyIndex((current) => Math.min(current + 1, journeyScreens.length - 1));
  };

  return (
    <div className="w-full mx-auto overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col md:min-h-[80vh] md:flex-row items-center justify-between gap-8 md:gap-12 py-10 sm:py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex-1 space-y-6 md:space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              Lakeside Hotel <br />
              <span className="text-[#bc1616]">Experience</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              A premium, multi-page hospitality platform designed to elevate the digital presence of luxury hotels in Pokhara, Lakeside. Focusing on seamless booking flows and immersive visual storytelling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-6 md:gap-12"
          >
            <div>
              <p className="text-xs font-bold uppercase text-gray-400 mb-2">Role</p>
              <p className="font-semibold text-sm md:text-base">Frontend Developer & UI/UX Designer</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-gray-400 mb-2">Technologies</p>
              <div className="flex gap-3 mt-1 flex-wrap">
                <span className="text-sm font-medium">HTML</span>
                <span className="text-sm font-medium text-gray-300">•</span>
                <span className="text-sm font-medium">CSS</span>
                <span className="text-sm font-medium text-gray-300">•</span>
                <span className="text-sm font-medium">JavaScript</span>
                <span className="text-sm font-medium text-gray-300">•</span>
                <span className="text-sm font-medium">jQuery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a href="https://hotel-booking.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary group text-sm md:text-base">
              Live Demo <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Ngamesh/Hotel-booking" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm md:text-base">
              <Github size={20} /> <span className="font-semibold">View Source Code</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative w-full perspective-1000px"
        >
          <div className="relative group">
            <img
              src="/assets/hotel-desktop.avif"
              alt="Project Hero Mockup"
              className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-4 -right-1 w-[24%] sm:-bottom-6 sm:-right-2 sm:w-[22%] group-hover:translate-y-2 transition-transform duration-700">
              <img
                src="/assets/hotel-mobile.avif"
                alt="Mobile Preview"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. PROJECT OVERVIEW */}
      <Section>
        <div 
          className="relative w-full rounded-3xl md:rounded-[2rem] overflow-hidden bg-cover bg-center min-h-[460px] sm:min-h-[540px] md:min-h-[650px] flex items-center"
          style={{ backgroundImage: "url('/assets/blog.avif')" }}
        >
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 w-full p-6 md:p-12 lg:p-16 flex justify-center">
            <div className="max-w-4xl bg-black/20 backdrop-blur-lg py-5 px-5 sm:py-6 sm:px-8 md:py-8 md:px-10 rounded-2xl border border-white/10 shadow-2xl">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight !text-gray-50 dark:!text-white">Crafting a Digital <br /> Sanctuary</h2>
                <p className="!text-gray-200 dark:!text-gray-200 text-base leading-relaxed">
                  The project was born from the need to bridge the gap between traditional hospitality and modern digital expectations. For luxury hotels, the website is the "first room" a guest enters.
                </p>
                <p className="!text-gray-200 dark:!text-gray-200 text-base leading-relaxed">
                  I focused on creating an interface that feels as serene as a lakeside resort, while maintaining high conversion rates through a simplified booking funnel and clear information hierarchy.
                </p>
                <div className="grid grid-cols-2 gap-5 sm:gap-8 pt-2">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#bc1616]">10+</p>
                    <p className="text-[10px] sm:text-sm !text-gray-300 dark:!text-gray-300 uppercase font-bold">Custom Pages</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold text-[#bc1616]">60FPS</p>
                    <p className="text-[10px] sm:text-sm !text-gray-300 dark:!text-gray-300 uppercase font-bold">Smooth UI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. PROBLEM STATEMENT */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Friction Points</h2>
          <p className="mx-auto max-w-2xl !text-center [text-align-last:center] text-gray-600 dark:text-gray-400">Identifying and solving key UX challenges in the traditional hospitality digital experience.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3 xl:gap-8">
          <FeatureCard
            icon={Smartphone}
            title="Mobile Friction"
            description="Traditional booking forms often fail on mobile. I implemented a responsive-first reservation system that feels native to touch devices."
            imageSrc="/assets/hotel-mob.avif"
            imageAlt="Hotel mobile booking interface"
            imageNoChrome
            imageCompact
          />
          <FeatureCard
            icon={Layout}
            title="Info Overload"
            description="Hotels often overwhelm users with data. I used a clean grid system and progressive disclosure to keep the focus on the experience."
            imageSrc="/assets/image-slider.avif"
            imageAlt="Hotel image slider interface"
          />
          <FeatureCard
            icon={Zap}
            title="Interaction Lag"
            description="Slow transitions kill the premium feel. I utilized optimized asset delivery and lightweight animations to ensure instant feedback."
            imageSrc="/assets/hotel-slider-first.avif"
            imageAlt="Single suite slider preview"
            imageHoverScale
          />
        </div>
      </Section>

      {/* 4. GOALS & OBJECTIVES */}
      <Section className="bg-white/5 backdrop-blur-sm dark:!bg-black dark:!text-white" innerClassName="py-8 sm:py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="grid gap-7 sm:gap-9 md:gap-12">
              {[
                { title: "Immersive Storytelling", desc: "Using high-resolution imagery and parallax to sell the experience.", icon: Compass },
                { title: "Conversion Optimized", desc: "Simplifying the reservation form to just three essential steps.", icon: TrendingUp },
                { title: "Reusable Architecture", desc: "Building a component-based system for easy scalability.", icon: Users }
              ].map((goal, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-[#bc1616] group-hover:bg-[#bc1616] group-hover:text-white transition-all duration-300">
                    <goal.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">{goal.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-5 sm:space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase text-gray-900 dark:text-white">Strategic <br /> Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              The goal wasn't just to build a website, but to create a digital product that communicates luxury through every pixel and interaction.
            </p>
            <div className="pt-3 sm:pt-5 md:pt-8">
              <Target className="text-[#bc1616] mb-4" size={34} />
              <p className="text-sm font-mono text-gray-500 uppercase">Targeting Excellence</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. RESEARCH & INSPIRATION */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">Research & <br /> Visual Inspiration</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Inspired by Six Senses Hotels & Resorts, Sofitel Sydney Darling Harbour, and other premium hospitality brands, the visual direction blends immersive room imagery, elegant resort storytelling, spa and dining highlights, and a direct booking experience designed to feel refined, trustworthy, and effortlessly luxurious.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Luxury Hospitality", "Direct Booking", "Room Showcase", "Spa & Dining", "Resort Storytelling"].map((tag, i) => (
                <span key={i} className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[380px] md:h-[500px] perspective-1000px">
            {/* Creative Moodboard Collage */}
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl rotate-[-5deg] z-10 border border-white/10">
              <img src="/assets/six-senses.avif" alt="Six Senses visual inspiration" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl rotate-[5deg] z-20 border border-white/10">
              <img src="/assets/sofitel.avif" alt="Sofitel visual inspiration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* 6. USER FLOW */}
      <Section>
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">The User Journey</h2>
          <p className="text-gray-500 uppercase text-xs font-mono">Seamless Navigation Flow</p>
        </div>

        <div className="w-full overflow-visible pt-6 pb-6">
          <div className="grid grid-cols-4 items-start gap-2 sm:gap-4 md:gap-6 relative px-1 sm:px-4 md:px-10">
            {/* Animated Connector Line */}
            <div className="absolute left-4 right-4 sm:left-8 sm:right-8 md:left-10 md:right-10 top-6 sm:top-7 md:top-8 h-[2px] bg-gradient-to-r from-transparent via-[#bc1616]/30 to-transparent z-0" />

            {journeyStages.map((step) => {
              const isActive = activeJourneyStage === step.label;

              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() => setActiveJourneyIndex(step.firstScreenIndex)}
                  className="relative z-10 flex flex-col items-center group hover:z-20"
                  aria-label={`Show ${step.label} journey stage`}
                >
                  <span className={`w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 origin-center rounded-xl sm:rounded-2xl bg-white dark:bg-gray-900 border flex items-center justify-center shadow-lg transition-all duration-300 ${isActive ? "scale-110 border-[#bc1616]" : "border-gray-200 dark:border-white/10 group-hover:border-[#bc1616]"}`}>
                    <step.icon className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-colors ${isActive ? "text-[#bc1616]" : "text-gray-400 group-hover:text-[#bc1616]"}`} />
                  </span>
                  <span className={`mt-3 sm:mt-4 max-w-full text-center text-[10px] sm:text-[10px] md:text-xs font-bold uppercase transition-colors ${isActive ? "text-[#bc1616]" : "text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white"}`}>
                  {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-5xl overflow-visible px-0">
          <div className="relative">
            <div className="invisible mx-auto w-[52%] max-w-[190px] sm:w-[42%] sm:max-w-[250px] md:w-[24%] md:max-w-[230px] lg:w-[22%] lg:max-w-[240px]">
              <img
                src={journeyScreens[activeJourneyIndex].image}
                alt=""
                className="block h-auto w-full"
                aria-hidden="true"
              />
            </div>

            {journeyScreens.map((step, index) => {
              const offset = index - activeJourneyIndex;
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.div
                  key={step.label}
                  className="absolute left-1/2 top-0 w-[52%] max-w-[190px] origin-top sm:w-[42%] sm:max-w-[250px] md:w-[24%] md:max-w-[230px] lg:w-[22%] lg:max-w-[240px]"
                  animate={{
                    x: `calc(-50% + ${offset * 58}%)`,
                    scale: isActive ? 1 : 0.82,
                    opacity: isVisible ? (isActive ? 1 : 0.32) : 0,
                    zIndex: isActive ? 20 : 10
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden={!isActive}
                >
                  <div className="overflow-hidden rounded-3xl bg-transparent">
                    <img
                      src={step.image}
                      alt={`${step.label} screen`}
                      className="block h-auto w-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mx-auto mt-4 flex w-full max-w-[430px] items-center justify-center gap-4">
            <button
              type="button"
              onClick={goToPreviousJourneyStep}
              disabled={activeJourneyIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:border-[#bc1616] hover:text-[#bc1616] disabled:pointer-events-none disabled:opacity-35 dark:border-white/10 dark:bg-gray-900 dark:text-gray-200"
              aria-label="Previous journey screen"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div
              className="w-[150px] text-center text-[10px] sm:text-xs font-bold uppercase text-gray-500 dark:text-gray-300 sm:w-[220px]"
              aria-live="polite"
            >
              {journeyScreens[activeJourneyIndex].label}
            </div>

            <button
              type="button"
              onClick={goToNextJourneyStep}
              disabled={activeJourneyIndex === journeyScreens.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all hover:border-[#bc1616] hover:text-[#bc1616] disabled:pointer-events-none disabled:opacity-35 dark:border-white/10 dark:bg-gray-900 dark:text-gray-200"
              aria-label="Next journey screen"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Section>

      {/* 7. WIREFRAMES & ITERATIONS */}
      <Section>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-0 items-start">
              <img
                src="/assets/lo-fi.avif"
                alt="Low-fidelity wireframe sketch"
                className="relative z-0 w-full h-auto rounded-2xl object-contain"
              />
              <img
                src="/assets/hi-fi.avif"
                alt="High-fidelity screen design"
                className="relative z-10 -ml-6 sm:-ml-12 w-full h-auto rounded-2xl object-contain translate-y-8 sm:translate-y-12"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-5 sm:space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">From Sketch <br /> to Screen</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Every layout was meticulously planned. I started with low-fidelity wireframes to finalize the information hierarchy before moving into high-fidelity design and frontend implementation.
            </p>
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-[#bc1616]/10 bg-[#bc1616]/[0.02] backdrop-blur-sm">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Zap size={18} className="text-[#bc1616]" /> Iterative Thinking
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed italic">"Adjusted the booking form layout 3 times based on mobile usability testing to reduce input friction and maximize conversion."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. DESIGN SYSTEM */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 uppercase">Design System</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">Built upon a foundation of consistency, accessibility, and modern aesthetics.</p>
          </div>
          <div className="flex gap-5 sm:gap-8 px-5 sm:px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-bold font-heading">Aa</span>
              <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Nunito</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-light">Aa</span>
              <span className="text-[10px] text-gray-400 mt-2 font-bold uppercase">Sans Serif</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-2 min-h-64 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-start z-10">
              <span className="text-[10px] font-bold uppercase text-gray-400">COLOR PALETTE</span>
              <div className="grid grid-cols-4 gap-2 sm:flex sm:gap-3">
                {hotelPalette.map((color) => (
                  <div key={color.hex} className="flex flex-col items-center gap-2">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-black/10 dark:border-white/20 shadow-lg"
                      style={{ backgroundColor: color.hex }}
                      aria-label={`${color.label} ${color.hex}`}
                    />
                    <span className="text-[10px] sm:text-[10px] font-bold uppercase text-gray-500 dark:text-gray-400">
                      {color.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2 z-10 text-left mt-8 sm:mt-0">
              <h4 className="text-xl sm:text-2xl font-bold">Hotel Brand Palette</h4>
              <p className="text-sm text-gray-500">Pulled from the original hotel-booking interface.</p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 border border-[#fc3c3c]/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="h-56 sm:h-64 rounded-2xl bg-[#bc1616] p-5 sm:p-8 flex flex-col justify-between text-white shadow-xl shadow-[#bc1616]/20 group overflow-hidden relative">
            <Layout size={32} className="relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            <h4 className="text-lg sm:text-xl font-bold relative z-10 text-left leading-tight">12-Column <br /> Grid System</h4>
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '12.5% 100%' }} />
          </div>

          <div className="h-56 sm:h-64 rounded-2xl border border-dashed border-gray-300 dark:border-white/20 p-5 sm:p-8 flex flex-col justify-between items-center text-center group hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Smartphone size={28} />
            </div>
            <span className="text-xs font-bold uppercase text-gray-500">Responsive <br /> System</span>
            <div className="flex gap-1.5 items-end h-8">
              {[20, 35, 25, 45, 30].map((h, i) => (
                <div key={i} className="w-1.5 bg-[#bc1616]/30 dark:bg-[#bc1616]/20 rounded-full group-hover:bg-[#bc1616] transition-all duration-300" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FRONTEND DEVELOPMENT */}
      <Section className="relative overflow-hidden bg-white/5 backdrop-blur-sm dark:!bg-[#0a0a0a] dark:!text-white">
        <div className="relative z-10 grid min-w-0 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="min-w-0 space-y-5 sm:space-y-6 md:space-y-8 text-left">
            <span className="text-[#bc1616] font-mono uppercase text-xs mb-4 block">The Engineering Phase</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white uppercase">Modular <br /> Architecture</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              The hotel booking project was structured as a responsive multi-page Bootstrap 4 and jQuery build, with reusable room sections, service galleries, availability checks, and a centralized reservation modal that could support stays, tours, and event bookings.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: CheckCircle2, title: "Room Discovery", desc: "Suite and hall cards" },
                { icon: CheckCircle2, title: "Availability Flow", desc: "Date and guest checks" },
                { icon: CheckCircle2, title: "Owl Carousel", desc: "Smooth room galleries" },
                { icon: CheckCircle2, title: "Booking Modal", desc: "Validation and success states" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <item.icon size={18} className="text-[#bc1616] mt-1 shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm text-gray-900 dark:text-white">{item.title}</h5>
                    <p className="text-[10px] text-gray-500 uppercase">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-w-0 max-w-full group perspective-1000px">
            <div className="min-w-0 max-w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:rotate-y-[-5deg] transition-transform duration-700">
              {/* VS Code Style Header */}
              <div className="bg-[#2d2d2d] px-4 py-2.5 flex items-center gap-2 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="text-[10px] text-gray-500 ml-4 font-mono italic uppercase">booking-flow.js</span>
              </div>
              <div className="max-w-full overflow-x-auto p-5 sm:p-6 md:p-8 font-mono text-[10px] md:text-[12px] text-gray-300 leading-relaxed whitespace-pre-wrap break-words md:whitespace-pre custom-scrollbar">
                {`const bookingTypes = ["stay", "tour", "event"];

$(".room-slider").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  autoplay: true
});

$(".check-availability").on("click", function () {
  const guests = $("#guests").val();
  const checkIn = $("#check-in").val();

  if (!checkIn || !guests) {
    showValidation("Please select a date and guests.");
    return;
  }

  $("#reservationModal").modal("show");
});

$("#reservationForm").on("submit", function (event) {
  event.preventDefault();
  showProcessingState();
  showSuccessConfirmation();
});`}
              </div>
            </div>
            <div className="absolute -top-10 -right-5 p-6 rounded-2xl glass shadow-2xl hidden md:block border border-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-black dark:text-gray-200 uppercase block">Frontend Health</span>
                  <div className="flex gap-1 h-1.5 w-24 md:w-32 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-[98%] bg-green-500 h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute inset-0 opacity-0 dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </Section>

      {/* 10. KEY FEATURES SHOWCASE */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 sm:mb-6 text-gray-900 dark:text-white uppercase">Signature Features</h2>
          <div className="w-24 h-1.5 bg-[#bc1616] mx-auto rounded-full shadow-sm shadow-[#bc1616]/20" />
        </div>

        <div className="space-y-20 sm:space-y-28 md:space-y-48">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
            <div className="flex-1 space-y-5 sm:space-y-6 md:space-y-8 text-left">
              <span className="text-[#bc1616] font-bold text-xs uppercase block">Room Discovery</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Suites & Halls <br /> Showcase</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                The hotel-booking project presents rooms and event spaces through an interactive carousel, with image-led suite cards, clear category names, and hover links that guide visitors into the room details page.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 pt-2 sm:pt-4 justify-start">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <Layout size={18} className="text-[#bc1616]" /> Suite Cards
                </div>
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <ArrowRight size={18} className="text-[#bc1616]" /> Hover View Links
                </div>
              </div>
            </div>
            <div className="flex-1 relative group w-full">
              <img src="/assets/image-slider.avif" alt="Suites and halls showcase" className="w-full rounded-3xl shadow-2xl group-hover:rotate-2 transition-transform duration-700" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-20">
            <div className="flex-1 space-y-5 sm:space-y-6 md:space-y-8 text-left">
              <span className="text-[#bc1616] font-bold text-xs uppercase block">Safe & Swift</span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight uppercase">Reservation <br /> Funnel</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                The booking flow uses an availability check, a reusable reservation modal, and clear form validation. Guests can choose between stay, tour, and event bookings, then receive a processing state and success confirmation after submitting.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 pt-2 sm:pt-4 justify-start">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <CreditCard size={18} className="text-[#bc1616]" /> Booking Types
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <Zap size={18} className="text-[#bc1616]" /> Success Modal
                </div>
              </div>
            </div>
            <div className="flex-1 relative group w-full">
              <div className="relative mx-auto flex w-full max-w-xl flex-col items-center pb-6 pt-2 sm:pb-10">
                <img
                  src="/assets/check.avif"
                  alt="Availability check screen"
                  className="relative z-20 w-[82%] max-w-[430px] rounded-2xl shadow-2xl ring-1 ring-black/5 transition-transform duration-700 group-hover:-translate-y-1 dark:ring-white/10"
                />
                <div className="-mt-8 flex w-full items-start justify-center gap-4 sm:-mt-10 sm:gap-6">
                  {[
                    { src: "/assets/processing.avif", alt: "Booking processing screen", className: "rotate-[-3deg] group-hover:-translate-x-1" },
                    { src: "/assets/success.avif", alt: "Booking success screen", className: "rotate-[3deg] group-hover:translate-x-1" }
                  ].map((screen) => (
                  <img
                    key={screen.src}
                    src={screen.src}
                    alt={screen.alt}
                    className={`relative z-10 w-[38%] max-w-[210px] rounded-2xl shadow-2xl ring-1 ring-black/5 transition-transform duration-700 dark:ring-white/10 ${screen.className}`}
                  />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 11. CHALLENGES & SOLUTIONS */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 uppercase">The Hurdles</h2>
          <p className="text-gray-500 uppercase text-[10px] sm:text-xs font-mono">Problem Solving in Real-Time</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "Managing information-heavy layouts?", a: "Implemented a card-based grid system with progressive disclosure to keep the UI clean while providing all necessary data." },
            { q: "Maintaining 60FPS with heavy imagery?", a: "Used modern image formats (AVIF) and optimized lazy-loading techniques to ensure smooth scroll performance." },
            { q: "Creating a truly responsive booking flow?", a: "Designed a bottom-sheet inspired modal for mobile users that makes selection feel like a native app experience." }
          ].map((item, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#101010] border border-gray-100 dark:border-[#fc3c3c]/15 flex flex-col md:flex-row gap-6 md:gap-8 items-start group hover:border-[#fc3c3c]/50 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#bc1616]/10 flex items-center justify-center text-[#bc1616] font-bold">0{i + 1}</div>
              <div className="text-left">
                <h4 className="text-lg sm:text-xl font-bold mb-3">{item.q}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 12. REFLECTION & OUTCOME */}
      <Section className="border-t border-black/5 dark:border-white/10">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-10 md:gap-16">
          <div className="md:col-span-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight uppercase">Final <br /> Thoughts</h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-16">
            <div className="space-y-4 sm:space-y-6 text-left">
              <h4 className="text-lg sm:text-xl font-bold flex items-center gap-3">
                <Target className="text-[#bc1616]" size={20} /> Interaction Design
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-sm md:text-base">
                "I learned how subtle animations can drastically change the perceived quality of a product. Motion isn't just decoration; it's a powerful tool for guidance and feedback."
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6 text-left">
              <h4 className="text-lg sm:text-xl font-bold flex items-center gap-3">
                <Zap className="text-[#bc1616]" size={20} /> Technical Growth
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic text-sm md:text-base">
                "Building a 10+ page site required a very disciplined approach to component architecture and CSS organization. It taught me the value of scalability from day one."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 13. FINAL SHOWCASE */}
      <section className="relative w-full overflow-visible pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <h2 className="text-4xl sm:text-5xl md:text-9xl font-black mb-6 sm:mb-8 md:mb-12 uppercase">THE <br /> <span className="text-[#bc1616]">MASTERPIECE</span></h2>
          <p className="text-base md:text-xl text-gray-500 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto font-medium">
            A harmonious blend of high-end aesthetics and modern frontend performance.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-20 md:mt-32">
          <div className="absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="absolute -inset-4 bg-[url('/assets/event.avif')] bg-cover bg-center opacity-55 blur-md" />
          </div>
          <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1.32fr)_minmax(0,1.03fr)] items-end justify-center gap-4 sm:gap-6 md:gap-10">
            <img
              src="/assets/hotel.avif"
              alt="Hotel masterpiece full page"
              className="h-auto w-full"
            />
            <img
              src="/assets/room.avif"
              alt="Room masterpiece full page"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-16 sm:mt-24 md:mt-48">
          <a href="https://hotel-booking.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-3 sm:gap-4 md:gap-6 px-6 py-3.5 sm:px-8 sm:py-4 md:px-16 md:py-6 text-sm sm:text-base md:text-2xl rounded-full hover:px-8 sm:hover:px-10 md:hover:px-20 transition-all duration-700 shadow-2xl shadow-[#bc1616]/20 group">
            Experience the Live Build <ArrowRight size={22} className="group-hover:translate-x-2 md:group-hover:translate-x-3 transition-transform duration-500" />
          </a>
          <p className="mt-6 sm:mt-8 text-gray-500 font-mono text-[10px] sm:text-[10px] uppercase">Crafted with passion • Built for excellence</p>
        </div>
      </section>

    </div>
  );
}
