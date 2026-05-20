import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// =========================
// Marquee Row Component
// =========================
function MarqueeRow({ icons, direction = "left", baseSpeed = 50 }) {
  const x = useMotionValue(0);
  const moveLeft = direction === "left";

  // Animation loop
  useAnimationFrame((t, delta) => {
    const speed = (baseSpeed * delta) / 2000;
    const itemWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth / 5 : 200;

    x.set(x.get() + (moveLeft ? -speed : speed));

    if (moveLeft && x.get() <= -itemWidth * icons.length) {
      x.set(0);
    } else if (!moveLeft && x.get() >= 0) {
      x.set(-itemWidth * icons.length);
    }
  });

  // Duplicate icons for seamless scrolling
  const loopedIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <div className="overflow-hidden w-full relative h-20 sm:h-24 flex items-center">
      <motion.div
        className="flex"
        style={{ x, willChange: "transform" }}
      >
        {loopedIcons.map((tech, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-[20vw] sm:w-[18vw] md:w-[200px] flex-shrink-0 px-2 sm:px-3"
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-full h-10 sm:h-12 md:h-16 object-contain transition-all duration-300"
              draggable="false"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// =========================
// Resume Section
// =========================
export default function ResumeSection() {
  const techStack = [
    // Frontend / Development
    { src: "/assets/html.png", alt: "HTML5" },
    { src: "/assets/css.png", alt: "CSS3" },
    { src: "/assets/js.png", alt: "JavaScript" },
    { src: "/assets/ts.png", alt: "TypeScript" },
    { src: "/assets/react.png", alt: "React.js" },
    { src: "/assets/angular.png", alt: "Angular" },
    { src: "/assets/flutter.png", alt: "Flutter" },
    { src: "/assets/dart.png", alt: "Dart" },
    { src: "/assets/node.png", alt: "Node.js" },
    { src: "/assets/git.png", alt: "Git" },

    // UI/UX Design Tools
    { src: "/assets/figma.png", alt: "Figma" },
    { src: "/assets/xd.png", alt: "Adobe XD" },
    { src: "/assets/ps.png", alt: "Photoshop" },
    { src: "/assets/ai.png", alt: "Illustrator" },
    { src: "/assets/sketch.png", alt: "Sketch" },

    // Styling / Animation / Backend
    { src: "/assets/tailwindcss.png", alt: "Tailwind CSS" },
    { src: "/assets/bootstrap.png", alt: "Bootstrap" },
    { src: "/assets/framer-motion.png", alt: "Framer Motion" },
    { src: "/assets/firebase.png", alt: "Firebase" },
    { src: "/assets/next.svg", alt: "Golang" }, // optional backend
  ];


  const rows = [
    techStack.slice(0, 6), // first row
    techStack.slice(6, 12), // second row
    techStack.slice(12), // third row
  ];

  return (
    <section id="resume" className="w-full py-12 sm:py-16 md:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full">
        {/* ========================= TECH STACK ========================= */}
        <motion.div
          id="skills" className="mb-24 sm:mb-32 md:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-10 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            TECH STACK
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="space-y-10 sm:space-y-12">
            {rows.map((row, idx) => (
              <MarqueeRow
                key={idx}
                icons={row}
                direction={idx === 1 ? "right" : "left"}
                baseSpeed={40 + idx * 10} // responsive speed
              />
            ))}
          </div>
        </motion.div>

        {/* ========================= EXPERIENCES ========================= */}
        <motion.div
          id="experience" className="mb-24 sm:mb-32 md:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-10 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            EXPERIENCES
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="flex flex-shrink-0 gap-2 max-w-full overflow-hidden">
              <img
                src="/assets/uiux.png"
                alt="UI/UX"
                className="w-auto max-w-[45vw] h-28 sm:h-32 md:h-48 object-contain rounded-lg"
              />
              <img
                src="/assets/line.png"
                alt="UI/UX line"
                className="w-auto max-w-[45vw] h-28 sm:h-32 md:h-48 object-contain rounded-lg"
              />
            </div>

            <div className="hidden md:flex flex-shrink-0">
              <div className="w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>
            </div>

            <div className="flex-1 text-center md:text-left min-w-0">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                DigiHawk
              </h4>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                Jan 2021 – Nov 2021
              </p>
              <p className="text-md font-medium text-gray-700 dark:text-gray-300 mt-1">
                UI/UX Developer
              </p>
              <p className="text-sm text-left md:text-justify text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed mx-auto md:mx-0">
                At DigiHawk, I focused on designing and building intuitive, responsive interfaces
                for various digital products. I collaborated closely with technical teams to ensure
                prototypes were seamlessly integrated and performed well across all platforms.
                By balancing user experience with technical performance, I helped deliver polished,
                high-quality designs within a fast-paced, remote-first environment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================= EDUCATION ========================= */}
        <motion.div
          id="education"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-10 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            EDUCATION
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="grid grid-cols-1 gap-12 sm:gap-16">
            {/* Bachelors Degree */}
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 p-0 rounded-xl">
              <img
                src="./assets/LMU.png"
                alt="London Metropolitan University"
                className="w-auto max-w-full h-20 sm:h-24 object-contain mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 leading-tight mb-1">
                  Bachelors (Hons) Degree in IT
                </h4>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">
                  Nov 2018 – Nov 2021
                </p>
              </div>
            </div>

            {/* Masters Degree */}
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 p-0 rounded-xl">
              <img
                src="./assets/KOI.png"
                alt="King’s Own Institute"
                className="w-auto max-w-full h-20 sm:h-24 object-contain mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 leading-tight mb-1">
                  Masters Degree in IT
                </h4>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">
                  Nov 2022 – Nov 2024
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
