import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showScroll, setShowScroll] = useState(false);

  // Smooth scroll to top function
  const scrollToTop = () => {
    const scrollDuration = 1500; // duration in ms
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

  // Easing function for smooth acceleration and deceleration
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

  return (
    <>
      <section
        id="home"
        className="mt-30 grid grid-cols-1 md:grid-cols-3 items-center py-12 px-4 md:px-8"
      >
        {/* Left: avatar + name */}
        <div className="flex flex-col items-center justify-center md:col-span-1 mb-8 md:mb-0">
          <div className="w-48 h-48 rounded-full overflow-hidden avatar-ring mb-4 shadow-lg">
            <img
              src="/assets/avatar.jpg"
              alt="Ngamesh"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg text-gray-600 dark:text-gray-200">
            NGAMESH
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Raj Bhandari</p>
        </div>

        {/* Right: intro card */}
        <div className="md:col-span-2 flex justify-center md:justify-end w-full">
          <div className="card p-6 sm:p-6 md:p-10 w-full max-w-4xl md:mr-[100px] shadow-xl">
            <h3 className="text-3xl font-extrabold mb-4 text-black dark:text-gray-100 font-nunito">
              I am a UI/UX Designer
            </h3>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate software developer with hands-on experience in
              building responsive, user-focused applications across web and mobile
              platforms. I specialize in front-end development with React, Angular,
              and Flutter, while also crafting robust back-end services using
              Node.js and Go. With a strong eye for design and usability, I enjoy
              creating seamless digital experiences through clean code, intuitive
              UI/UX, and performance-optimized solutions. Whether it's prototyping,
              debugging, or deploying, I thrive in agile environments where
              continuous learning and collaboration drive innovation.I'm a passionate
              software developer with hands-on experience in building responsive, 
              user-focused applications across web and mobile platforms. I specialize
              in front-end development with React, Angular, and Flutter, while also 
              crafting robust back-end services using Node.js and Go.
            </p>

            {/* Button */}
            <div className="mt-8">
              <button className="btn-primary text-lg px-6 py-3 flex items-center gap-2">
                GET CONNECTED
                <img
                  src="/assets/plane.svg"
                  alt="Plane Icon"
                  className="w-6 h-6 inline-block"
                />
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5 justify-start">
              <a href="#" className="social-icon instagram">
                <img src="/assets/insta.svg" alt="Instagram" className="icon-svg" />
              </a>
              <a href="#" className="social-icon linkedin">
                <img src="/assets/lin.svg" alt="LinkedIn" className="icon-svg" />
              </a>
              <a href="#" className="social-icon youtube">
                <img src="/assets/yt.svg" alt="YouTube" className="icon-svg" />
              </a>
              <a href="#" className="social-icon discord">
                <img src="/assets/dis.svg" alt="Discord" className="icon-svg" />
              </a>
              <a href="#" className="social-icon github">
                <img src="/assets/git.svg" alt="GitHub" className="icon-svg" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button with Slide-In Animation */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-glass dark:bg-glass text-white p-3 rounded-full shadow-lg hover:opacity-80 z-50"
            title="Scroll to top"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img src="/assets/up.svg" alt="Up Arrow" className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
