import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(false);
  const [isColoring, setIsColoring] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const colorTimeoutRef = React.useRef(null);
  const emailNoticeRef = React.useRef(null);

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

  const handleGetConnected = async () => {
    const email = "ngamesh15@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setIsEmailCopied(true);
    if (emailNoticeRef.current) clearTimeout(emailNoticeRef.current);
    emailNoticeRef.current = setTimeout(() => setIsEmailCopied(false), 2500);
  };

  useEffect(() => {
    return () => {
      if (colorTimeoutRef.current) clearTimeout(colorTimeoutRef.current);
      if (emailNoticeRef.current) clearTimeout(emailNoticeRef.current);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="mt-20 min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center py-12 sm:py-16 md:py-24 !px-4 sm:!px-6 lg:!px-8 max-w-[1320px] mx-auto gap-6 sm:gap-10 md:gap-12 w-full overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Left: intro card */}
        <div className="md:col-span-1 lg:col-span-2 flex justify-center md:justify-start w-full order-2 md:order-1">
          <div className="p-0 sm:p-0 md:p-0 w-full max-w-4xl text-center sm:text-left">
            <h3 className="hidden sm:block text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-black dark:text-gray-100 font-nunito">
              Hi, I am Ng
            </h3>
            <h3 className="hero-role-title text-[31px] max-[639px]:text-[27.5px] sm:text-[38px] md:text-[44px] lg:text-[49px] font-extrabold text-red dark:text-gray-100 font-nunito drop-shadow-sm">
              Frontend Developer
            </h3>
            <h3 className="hero-role-title text-[31px] max-[639px]:text-[27.5px] sm:text-[38px] md:text-[44px] lg:text-[49px] font-extrabold text-red dark:text-gray-100 font-nunito drop-shadow-sm">
              React Developer
            </h3>
            <div className="mt-2 text-base font-medium text-black/70 dark:text-white/70 sm:text-lg">
              Sydney, Australia
            </div>
            <div className="mt-5 text-base sm:text-lg md:text-xl text-center sm:text-justify leading-relaxed">
              <p className="max-[639px]:!text-center !text-black dark:!text-gray-300">
                Building responsive web applications and modern user interfaces with React,
                JavaScript, and TypeScript. Combining frontend engineering with strong design
                awareness to create accessible, performant, and intuitive digital experiences
                across devices.
              </p>
            </div>

            <div
              className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-black/70 dark:text-white/70 sm:justify-start sm:text-sm"
              aria-label="Professional highlights"
            >
              <span className="whitespace-nowrap rounded-md border border-gray-300 bg-white/40 px-3 py-1.5 dark:border-gray-700 dark:bg-white/[0.04]">2+ Years Experience</span>
              <span className="whitespace-nowrap rounded-md border border-gray-300 bg-white/40 px-3 py-1.5 dark:border-gray-700 dark:bg-white/[0.04]">4 Featured Projects</span>
              <span className="whitespace-nowrap rounded-md border border-gray-300 bg-white/40 px-3 py-1.5 dark:border-gray-700 dark:bg-white/[0.04]">React</span>
              <span className="whitespace-nowrap rounded-md border border-gray-300 bg-white/40 px-3 py-1.5 dark:border-gray-700 dark:bg-white/[0.04]">TypeScript</span>
              <span className="whitespace-nowrap rounded-md border border-gray-300 bg-white/40 px-3 py-1.5 dark:border-gray-700 dark:bg-white/[0.04]">Firebase</span>
            </div>

            {/* Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-2 sm:justify-start sm:gap-4">
              <motion.a
                href="/gmail-redirect.html"
                target="_blank"
                rel="noreferrer"
                onClick={handleGetConnected}
                aria-label="Email Ngamesh using Gmail"
                className="btn-primary motion-primary-action hero-action border border-transparent font-semibold flex items-center whitespace-nowrap shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                GET CONNECTED
                <img
                  src="/assets/plane.svg"
                  alt="Plane Icon"
                  className="hero-action-icon inline-block"
                />
              </motion.a>
              <motion.a
                href="/assets/ngamesh-resume.pdf"
                download="Ngamesh-Resume.pdf"
                className="hero-action flex items-center whitespace-nowrap rounded-lg border border-gray-800 dark:border-gray-200 bg-transparent font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300 hover:border-gray-800 hover:bg-gray-200 hover:text-gray-900"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                DOWNLOAD RESUME
                <Download aria-hidden="true" className="hero-action-icon" />
              </motion.a>
            </div>

            <AnimatePresence>
              {isEmailCopied && (
                <motion.div
                  role="status"
                  aria-live="polite"
                  className="fixed bottom-6 left-1/2 z-50 rounded-lg bg-gray-900 px-4 py-3 text-sm font-medium text-white shadow-xl"
                  initial={{ opacity: 0, x: "-50%", y: 12 }}
                  animate={{ opacity: 1, x: "-50%", y: 0 }}
                  exit={{ opacity: 0, x: "-50%", y: 12 }}
                >
                  Email copied. Gmail opened in a new tab.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Social icons */}
            <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center sm:justify-start">
              <motion.a href="https://instagram.com/ngameshb" aria-label="Instagram" target="_blank" rel="noreferrer" className="social-icon instagram scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <img src="/assets/insta.svg" alt="Instagram" className="icon-svg" />
              </motion.a>
              <motion.a href="https://linkedin.com/in/ngamesh" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="social-icon linkedin scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <img src="/assets/lin.svg" alt="LinkedIn" className="icon-svg" />
              </motion.a>
              <motion.a href="https://youtube.com/@ngamesh" aria-label="YouTube" target="_blank" rel="noreferrer" className="social-icon youtube scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <img src="/assets/yt.svg" alt="YouTube" className="icon-svg" />
              </motion.a>
              <motion.a href="https://facebook.com/ngameshb" aria-label="Facebook" target="_blank" rel="noreferrer" className="social-icon facebook scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <img src="/assets/fb.svg" alt="Facebook" className="icon-svg" />
              </motion.a>
              <motion.a href="https://github.com/ngamesh" aria-label="GitHub" target="_blank" rel="noreferrer" className="social-icon github scale-100 sm:scale-110" whileHover={{ scale: 1.2, y: -5 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <img src="/assets/github.svg" alt="GitHub" className="icon-svg" />
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
            <h2 className="hero-profile-name text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-md text-gray-600 dark:text-gray-200 uppercase text-center break-words mt-2 mb-1">
              NGAMESH
            </h2>
            <p className="hero-profile-subname text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center">Raj Bhandari</p>
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
