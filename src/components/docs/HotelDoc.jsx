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
  const technicalHighlights = [
    { icon: Layout, title: "Frontend Stack", description: "HTML5, CSS3, Bootstrap 4, JavaScript, jQuery, Owl Carousel, and AOS." },
    { icon: Smartphone, title: "Responsive Implementation", description: "Mobile-first grids, flexible media, adaptive navigation, and breakpoint-specific booking layouts." },
    { icon: Zap, title: "Performance", description: "AVIF assets, constrained media dimensions, lightweight transforms, and reduced animation overhead." },
    { icon: CheckCircle2, title: "Accessibility", description: "Semantic structure, descriptive alternative text, visible feedback, readable contrast, and touch-friendly controls." },
    { icon: Users, title: "Reusable Architecture", description: "Shared cards, galleries, page sections, modal patterns, and styling conventions across 10+ pages." },
    { icon: Compass, title: "Interactive UI", description: "Room carousels, hover feedback, scroll reveals, availability checks, and reservation state transitions." },
    { icon: Target, title: "Cross-Browser Support", description: "Responsive and interaction testing across current desktop and mobile browser environments." },
    { icon: CreditCard, title: "Form Validation", description: "Required-field checks, inline guidance, processing feedback, and success confirmation states." },
    { icon: TrendingUp, title: "Mobile-First Delivery", description: "Prioritized content order, compact controls, efficient touch flows, and reduced booking friction." }
  ];
  const architectureLayers = [
    { title: "Presentation Layer", description: "Shared semantic HTML and Bootstrap grid patterns kept navigation, room content, and page structure familiar throughout the journey." },
    { title: "Interaction Layer", description: "Focused jQuery handlers gave galleries, availability inputs, and modal controls consistent behavior without scattering one-off scripts." },
    { title: "Booking Workflow", description: "One validation and state flow guided guests from availability through processing and confirmation with clear feedback at each step." },
    { title: "Media & Motion", description: "AVIF imagery, Owl Carousel, AOS, and transform-based animation preserved the premium atmosphere while keeping interactions responsive." }
  ];
  const projectMetrics = [
    { value: "10+", label: "Responsive Pages" },
    { value: "3", label: "Booking Types" },
    { value: "Mobile-First", label: "Design" },
    { value: "Cross-Browser", label: "Tested" },
    { value: "60FPS", label: "UI Performance" }
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
            <p className="text-[15px] sm:text-[17px] md:text-[19px] text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              A responsive hotel booking frontend that guides guests from room discovery to reservation through intuitive navigation and a streamlined booking workflow. Built with HTML5, CSS3, Bootstrap 4, JavaScript, and jQuery, it delivers accessible, performance-focused interactions across desktop and mobile.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-3"
          >
            {projectMetrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-gray-200/80 bg-white/70 px-3 py-2 dark:border-white/10 dark:bg-white/[0.04]">
                <p className="break-words text-base font-bold !text-gray-900 dark:!text-gray-100 md:text-lg">{metric.value}</p>
                <p className="mt-1 text-[9px] font-bold uppercase !text-gray-500 dark:!text-gray-400 sm:text-[10px]">{metric.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="flex flex-wrap gap-6 md:gap-12"
          >
            <div>
              <p className="text-xs font-bold uppercase text-gray-400 mb-2">Role</p>
              <p className="font-semibold text-sm md:text-base">Frontend Developer</p>
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
                <span className="text-sm font-medium">Bootstrap 4</span>
                <span className="text-sm font-medium text-gray-300">•</span>
                <span className="text-sm font-medium">jQuery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="https://hotel-booking.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary group text-sm shadow-lg md:text-base">
              Live Demo <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <motion.a
              href="https://github.com/Ngamesh/Hotel-booking"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-500 bg-gray-200/70 dark:border-white/30 dark:bg-white/[0.03] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-200 text-sm md:text-base"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Github size={20} /> <span className="font-semibold">GitHub Repository</span> <ExternalLink size={15} className="transition-transform group-hover:translate-x-1" />
            </motion.a>
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
                <span className="block text-xs font-bold uppercase text-[#fc3c3c]">Project Overview</span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight !text-gray-50 dark:!text-white">Crafting a Digital <br /> Sanctuary</h2>
                <p className="!text-gray-200 dark:!text-gray-200 text-base leading-relaxed">
                  The business goal was simple: help a lakeside hotel present its rooms and services with the confidence of a premium brand, then turn that interest into direct bookings. For guests, the experience needed to feel calm, trustworthy, and easy to navigate from the first image to the final confirmation.
                </p>
                <p className="!text-gray-200 dark:!text-gray-200 text-base leading-relaxed">
                  I owned the frontend implementation across more than ten responsive pages. Reusable page patterns and consistent navigation kept the experience familiar, Bootstrap grids adapted the content across devices, and JavaScript and jQuery brought galleries, availability checks, validation, and booking feedback to life. Optimized imagery and restrained motion kept the premium atmosphere without asking users to wait for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. PROBLEM STATEMENT */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">The Friction Points</h2>
          <p className="mx-auto max-w-2xl !text-center [text-align-last:center] text-gray-600 dark:text-gray-400">The key challenge was removing the small moments of friction that make guests hesitate, abandon a search, or lose confidence before booking.</p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3 xl:gap-8">
          <FeatureCard
            icon={Smartphone}
            title="Mobile Friction"
            description="A guest checking dates on a phone should not need to zoom, hunt for controls, or fight a desktop form. I used responsive Bootstrap layouts, touch-friendly targets, and a focused modal flow so booking remained comfortable at every breakpoint."
            imageSrc="/assets/hotel-mob.avif"
            imageAlt="Hotel mobile booking interface"
            imageNoChrome
            imageCompact
          />
          <FeatureCard
            icon={Layout}
            title="Info Overload"
            description="Guests needed to compare rooms, amenities, dining, and events without decoding a wall of content. Reusable cards, semantic grouping, and progressive disclosure made choices easier to scan while also reducing duplicated markup."
            imageSrc="/assets/image-slider.avif"
            imageAlt="Hotel image slider interface"
          />
          <FeatureCard
            icon={Zap}
            title="Interaction Lag"
            description="A luxury experience quickly loses credibility when galleries stutter or content shifts. AVIF assets, constrained media dimensions, CSS transforms, and lightweight event-driven animation kept the interface stable, responsive, and pleasant to explore."
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
                { title: "Responsive Experience", desc: "Let guests explore rooms and complete a reservation comfortably on any screen through mobile-first layouts, flexible media, and breakpoint-aware navigation.", icon: Smartphone },
                { title: "Conversion-Ready Flow", desc: "Reduce uncertainty by connecting discovery, availability, validation, processing feedback, and confirmation in one understandable journey.", icon: TrendingUp },
                { title: "Maintainable Architecture", desc: "Make future rooms, services, and pages easier to add by reusing sections, card patterns, modal behavior, and shared styling.", icon: Users }
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
              I wanted the booking experience to feel as considered as the hotel itself: calm when guests were browsing, clear when they were comparing options, and reassuring when they were ready to book. The frontend therefore had to balance visual richness with fast feedback, accessible navigation, responsive behavior, and a structure that could grow with new rooms and services.
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
              I studied hospitality platforms such as Six Senses and Sofitel to understand where premium experiences build trust and where they create hesitation. Image-led room discovery helped guests imagine the stay, persistent booking actions reduced dead ends, and concise content hierarchy made comparison easier. I translated those findings into responsive galleries, deliberate media ratios, clearer interaction feedback, and a booking sequence that asks for information only when it becomes relevant.
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
          <p className="text-gray-500 uppercase text-xs font-mono">Implemented Booking Workflow</p>
          <p className="mx-auto mt-4 max-w-2xl !text-center [text-align-last:center] text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            The journey maps implemented screens and interaction states from discovery through conversion. JavaScript coordinates gallery navigation, availability input, form validation, processing feedback, and booking confirmation while each screen remains responsive and keyboard-accessible.
          </p>
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
              Wireframes became an implementation blueprint for semantic page regions, reusable cards, grid behavior, and interaction states. Before styling high-fidelity screens, I defined breakpoint changes, content priority, form behavior, and shared layout patterns so the frontend could scale consistently across the multi-page experience.
            </p>
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl border border-[#bc1616]/10 bg-[#bc1616]/[0.02] backdrop-blur-sm">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <Zap size={18} className="text-[#bc1616]" /> Iterative Thinking
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed italic">"I iterated on the reservation layout across mobile breakpoints, simplifying field order, increasing touch targets, and validating error and success states before finalizing the interaction."</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. DESIGN SYSTEM */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          <div className="max-w-2xl text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 uppercase">Design System</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">Implemented as reusable typography, color, spacing, grid, control, and interaction patterns to keep the frontend consistent, accessible, and maintainable.</p>
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
              <p className="text-sm text-gray-500">Applied through shared CSS tokens and consistent contrast states across the booking interface.</p>
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

      {/* 9. TECHNICAL HIGHLIGHTS */}
      <Section className="bg-gray-50/70 dark:!bg-white/[0.02]">
        <div className="mb-10 max-w-3xl text-left sm:mb-14 md:mb-16">
          <span className="mb-3 block text-xs font-bold uppercase text-[#bc1616]">Frontend Delivery</span>
          <h2 className="mb-5 text-2xl font-bold uppercase text-gray-900 dark:text-white sm:text-3xl md:text-5xl">Technical Highlights</h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
            Behind the polished surface is a set of practical frontend decisions made to keep the journey fast, inclusive, and dependable. Responsive layout engineering, reusable architecture, accessible interaction, performance-conscious media, and clear booking states work together so guests can focus on choosing a stay rather than figuring out the interface.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technicalHighlights.map((highlight) => (
            <div key={highlight.title} className="rounded-lg border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04] sm:p-6">
              <highlight.icon className="mb-4 text-[#bc1616]" size={24} />
              <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{highlight.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{highlight.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. FRONTEND DEVELOPMENT */}
      <Section className="relative overflow-hidden bg-white/5 backdrop-blur-sm dark:!bg-[#0a0a0a] dark:!text-white">
        <div className="relative z-10 grid min-w-0 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          <div className="min-w-0 space-y-5 sm:space-y-6 md:space-y-8 text-left">
            <span className="text-[#bc1616] font-mono uppercase text-xs mb-4 block">The Engineering Phase</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white uppercase">Frontend <br /> Engineering</h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              I built the experience as a responsive multi-page frontend using semantic HTML, Bootstrap 4, modular CSS conventions, JavaScript, and jQuery. Rather than solving each page in isolation, I reused room sections, galleries, navigation patterns, and modal behavior so the product felt consistent and future updates stayed manageable. Centralized event handling gave availability checks, validation, processing, and confirmation the same predictable behavior wherever they appeared.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: CheckCircle2, title: "Reusable UI Patterns", desc: "Shared sections and cards" },
                { icon: CheckCircle2, title: "Responsive Layout", desc: "Bootstrap grid and CSS" },
                { icon: CheckCircle2, title: "Interaction Logic", desc: "jQuery event handling" },
                { icon: CheckCircle2, title: "Validated Booking", desc: "Error and success states" }
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

      {/* 11. TECHNICAL ARCHITECTURE */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="text-left">
            <span className="mb-3 block text-xs font-bold uppercase text-[#bc1616]">Maintainable Structure</span>
            <h2 className="mb-5 text-2xl font-bold uppercase text-gray-900 dark:text-white sm:text-3xl md:text-5xl">Technical Architecture</h2>
            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
              The project was structured around four frontend layers to improve maintainability, scalability, and future migration to modern frameworks such as React.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {architectureLayers.map((layer, index) => (
              <div key={layer.title} className="rounded-lg border border-gray-200 p-5 text-left dark:border-white/10 sm:p-6">
                <span className="mb-4 block font-mono text-xs font-bold text-[#bc1616]">0{index + 1}</span>
                <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">{layer.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 12. KEY FEATURES SHOWCASE */}
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
                Reusable suite and hall cards keep room data, imagery, category labels, and actions consistent across listings. Owl Carousel provides responsive navigation, while constrained image dimensions and transform-based hover feedback prevent layout shifts and keep interaction smooth on image-heavy pages.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 pt-2 sm:pt-4 justify-start">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <Layout size={18} className="text-[#bc1616]" /> Reusable Suite Cards
                </div>
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <ArrowRight size={18} className="text-[#bc1616]" /> JavaScript Navigation
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
                The reservation workflow connects availability inputs to a reusable Bootstrap modal and validates required data before submission. jQuery event handlers coordinate stay, tour, and event booking modes, surface actionable errors, prevent duplicate submission, and transition the interface through processing and success states.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-6 pt-2 sm:pt-4 justify-start">
                <div className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <CreditCard size={18} className="text-[#bc1616]" /> Validated Booking Types
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 md:px-5 md:py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-xs md:text-sm font-bold">
                  <Zap size={18} className="text-[#bc1616]" /> Submission States
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

      {/* 13. CHALLENGES & SOLUTIONS */}
      <Section>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 uppercase">The Hurdles</h2>
          <p className="text-gray-500 uppercase text-[10px] sm:text-xs font-mono">Frontend Problems, Tested Solutions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            { q: "How did I keep 10+ pages consistent and maintainable?", a: "I reused navigation, card, gallery, content-section, and modal patterns; organized shared CSS conventions; and separated interaction logic from page markup so changes could be applied without duplicating behavior." },
            { q: "How did I protect performance on image-heavy pages?", a: "I delivered imagery in AVIF, constrained media dimensions to reduce layout shift, used transform-based motion, limited animation scope, and prepared below-the-fold media for lazy loading to preserve smooth scrolling." },
            { q: "How did I make the booking flow responsive and reliable?", a: "I reordered content at mobile breakpoints, enlarged touch targets, centralized field checks, prevented invalid submission, and exposed clear error, processing, and success feedback within the reusable modal workflow." },
            { q: "How did I support accessibility and cross-browser behavior?", a: "I used semantic HTML, descriptive alternative text, associated form labels, readable contrast, visible interaction feedback, and responsive testing across current desktop and mobile browsers to catch layout and event-handling differences." }
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

      {/* 14. REFLECTION & OUTCOME */}
      <Section className="border-t border-black/5 dark:border-white/10">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-10 md:gap-16">
          <div className="md:col-span-4 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight uppercase">Final <br /> Thoughts</h2>
            <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
              This project taught me to judge frontend decisions by both code quality and the confidence they give the person using the product.
            </p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-16">
            <div className="space-y-4 sm:space-y-6 text-left">
              <h4 className="text-lg sm:text-xl font-bold flex items-center gap-3">
                <Target className="text-[#bc1616]" size={20} /> Frontend Implementation
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                I learned that the strongest interactions are often the quietest ones. Clear state, accessible feedback, and restrained motion helped guests understand what changed and what to do next without distracting them from the booking decision.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-6 text-left">
              <h4 className="text-lg sm:text-xl font-bold flex items-center gap-3">
                <Zap className="text-[#bc1616]" size={20} /> Technical Growth
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                Building more than ten responsive pages strengthened how I approach reusable architecture, CSS organization, event handling, form validation, performance optimization, accessibility, and cross-browser testing. Most importantly, I came away seeing maintainability as part of the user experience: a well-structured frontend is easier to improve as real needs evolve.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 13. FINAL SHOWCASE */}
      <section className="relative w-full overflow-visible pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <h2 className="text-4xl sm:text-5xl md:text-9xl font-black mb-6 sm:mb-8 md:mb-12 uppercase">PROJECT <br /> <span className="text-[#bc1616]">OUTCOME</span></h2>
          <p className="text-base md:text-xl text-gray-500 mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto font-medium">
            A responsive hotel booking platform that combines premium hospitality storytelling with performant frontend engineering, accessible interactions, maintainable interface patterns, and a streamlined journey from room discovery to reservation.
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
          <p className="mt-6 sm:mt-8 text-gray-500 font-mono text-[10px] sm:text-[10px] uppercase">Responsive • Accessible • Performance Minded</p>
        </div>
      </section>

    </div>
  );
}
