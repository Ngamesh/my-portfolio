import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(false);
  const [isColoring, setIsColoring] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const colorTimeoutRef = React.useRef(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 1024
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    const scrollDuration = 1500;
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      window.scrollTo(0, start * (1 - easeInOutQuad(progress)));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t) =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  // Show button after scrolling down 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = () => {
    setIsColoring(true);
    if (colorTimeoutRef.current) {
      clearTimeout(colorTimeoutRef.current);
    }
    colorTimeoutRef.current = setTimeout(() => {
      setIsColoring(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (colorTimeoutRef.current) clearTimeout(colorTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="mt-20 min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center py-12 sm:py-16 md:py-24 !px-4 sm:!px-6 lg:!px-8 max-w-[1200px] mx-auto gap-10 md:gap-12 w-full overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Left: intro card */}
        <div className="md:col-span-1 lg:col-span-2 flex justify-center md:justify-start w-full order-2 md:order-1">
          <div className="p-0 sm:p-0 md:p-0 w-full max-w-4xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-black dark:text-gray-100 font-nunito tracking-tight">
              Hi, I am Ng.
            </h3>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 sm:mb-6 text-red dark:text-gray-100 font-nunito tracking-tight drop-shadow-sm">
              Design Engineer.
            </h3>
            <p className="text-[15px] sm:text-base text-left md:text-justify text-gray-600 dark:text-gray-300 leading-relaxed md:leading-relaxed">
              I'm a design engineer with hands-on experience building responsive,
              user-focused applications across web and mobile platforms. I bridge
              product design and front-end development with React, Angular, and
              Flutter, turning ideas into polished, accessible, and performance-minded
              digital experiences. With a strong eye for interaction details,
              usability, and clean implementation, I enjoy moving from prototype to
              production in collaborative environments where thoughtful design and
              engineering work together.
            </p>

            {/* Button */}
            <div className="mt-8 sm:mt-10 flex justify-start">
              <motion.button 
                className="btn-primary text-base sm:text-xl px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-3 whitespace-nowrap shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GET CONNECTED
                <img
                  src="/assets/plane.svg"
                  alt="Plane Icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 inline-block"
                />
              </motion.button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-start">
              <motion.a href="#" className="social-icon instagram scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <img src="/assets/insta.svg" alt="Instagram" className="icon-svg" />
              </motion.a>
              <motion.a href="#" className="social-icon linkedin scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <img src="/assets/lin.svg" alt="LinkedIn" className="icon-svg" />
              </motion.a>
              <motion.a href="#" className="social-icon youtube scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <img src="/assets/yt.svg" alt="YouTube" className="icon-svg" />
              </motion.a>
              <motion.a href="#" className="social-icon discord scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <img src="/assets/dis.svg" alt="Discord" className="icon-svg" />
              </motion.a>
              <motion.a href="#" className="social-icon github scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }}>
                <img src="/assets/git.svg" alt="GitHub" className="icon-svg" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right: portrait avatar */}
        <div className="flex flex-col items-center md:items-end md:col-span-1 order-1 md:order-2">
          <div className="flex flex-col items-center">
            <div
              className="w-52 sm:w-60 md:w-72 lg:w-[320px] max-w-full aspect-[4/6] rounded-xl overflow-hidden avatar-ring mb-5 sm:mb-6 shadow-xl transition-all duration-700 cursor-pointer"
              style={{
                filter: (isColoring || isTouchDevice) ? "grayscale(0%)" : "grayscale(100%)",
              }}
            >
              <img
                src="/assets/avatar.avif"
                alt="Ngamesh"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-md text-gray-600 dark:text-gray-200 uppercase text-center break-words mt-2 mb-1">
              NGAMESH
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center tracking-wider">Raj Bhandari</p>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button with Slide-In Animation */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-glass dark:bg-glass text-white p-3 rounded-full hover:opacity-80 z-50 back-to-top-btn"
            title="Scroll to top"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img src="/assets/up.svg" alt="Up Arrow" className="w-6 h-6 dark:invert" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
