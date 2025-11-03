import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// =========================
// Marquee Row Component
// =========================
function MarqueeRow({ icons, direction = "left", baseSpeed = 50 }) {
  const x = useMotionValue(0);
  const moveLeft = direction === "left";

  // Calculate width of one icon block dynamically
  const iconWidth = typeof window !== "undefined" ? window.innerWidth / 6 : 100;

  // Animation loop
  useAnimationFrame((t, delta) => {
    const speed = (baseSpeed * delta) / 2000; // pixels per frame
    x.set(x.get() + (moveLeft ? -speed : speed));
    // Reset seamlessly when passing half of total icons width
    if (moveLeft && x.get() <= -iconWidth * icons.length) {
      x.set(0);
    } else if (!moveLeft && x.get() >= 0) {
      x.set(-iconWidth * icons.length);
    }
  });

  // Duplicate icons for seamless scrolling
  const loopedIcons = [...icons, ...icons, ...icons, ...icons];

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        className="flex"
        style={{ x, willChange: "transform" }}
      >
        {loopedIcons.map((tech, i) => (
          <div
            key={i}
            className="flex justify-center items-center w-[calc(100%/6)] flex-shrink-0 h-20 md-24"
          >
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-auto h-16 object-contain"
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
    <section id="resume" className="w-full py-16">
      <div className="w-[90%] mx-auto px-6 md:px-12 lg:px-24">
        {/* ========================= TECH STACK ========================= */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            TECH STACK
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="space-y-6">
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
          className="mb-16"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            EXPERIENCES
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex">
              <img
                src="/assets/uiux.png"
                alt="UI/UX"
                className="w-auto h-48 md:h-69 object-contain  rounded-lg mx-auto md:mx-0"
              />
              <img
                src="/assets/line.png"
                alt="UI/UX line"
                className="w-auto h-48 md:h-69 object-contain rounded-lg mx-auto md:mx-0"
              />
            </div>

            <div className="hidden md:flex flex-shrink-0">
              <div className="w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                DigiHawk
              </h4>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                Jan 2021 – Nov 2021
              </p>
              <p className="text-md font-medium text-gray-700 dark:text-gray-300 mt-1">
                UI/UX Designer
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed mx-auto md:mx-0">
                Worked as a UI/UX designer in Kathmandu, Nepal. Focused on UX/UI
                and backend collaboration. Ensured project deadlines were always
                met efficiently in a remote-first setup.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================= EDUCATION ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            EDUCATION
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="space-y-6">
            {/* Bachelors Degree */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-0 rounded-xl">
              <img
                src="./assets/LMU.png"
                alt="London Metropolitan University"
                className="w-auto h-40 mt-2.5 object-contain mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100">
                  Bachelors (Hons) Degree in IT
                </h4>
                <p className="text-sm italic text-gray-500 dark:text-gray-400">
                  Nov 2018 – Nov 2021
                </p>
              </div>
            </div>

            {/* Masters Degree */}
            <div className="flex flex-col md:flex-row items-center gap-6 p-0 rounded-xl">
              <img
                src="./assets/KOI.png"
                alt="King’s Own Institute"
                className="w-auto h-40 mt-2.5 object-contain mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100">
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
