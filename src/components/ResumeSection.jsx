import React from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { CalendarDays, GraduationCap } from "lucide-react";

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
        {loopedIcons.map((tech, i) => {
          const TechIcon = tech.icon;

          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center w-[20vw] sm:w-[18vw] md:w-[200px] flex-shrink-0 px-2 sm:px-3"
            >
              {TechIcon ? (
                <TechIcon
                  aria-hidden="true"
                  className="h-9 w-9 sm:h-11 sm:w-11 md:h-14 md:w-14 text-gray-700 dark:text-gray-200"
                  strokeWidth={1.6}
                />
              ) : (
                <img
                  src={tech.src}
                  alt={`${tech.label} logo`}
                  className="w-full h-9 sm:h-11 md:h-14 object-contain transition-all duration-300"
                  draggable="false"
                />
              )}
              <span className="mt-1 min-h-[20px] max-w-full text-center text-[8px] sm:text-[9px] md:text-[10px] font-medium leading-tight text-gray-600 dark:text-gray-300">
                {tech.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

// =========================
// Resume Section
// =========================
export default function ResumeSection() {
  const stackSections = [
    {
      title: "Frontend",
      summary: "Responsive interfaces, component-based development, modern web technologies, and interactive user experiences.",
      direction: "left",
      baseSpeed: 75,
      icons: [
        { src: "/assets/html.png", label: "HTML5" },
        { src: "/assets/css.png", label: "CSS3" },
        { src: "/assets/js.png", label: "JavaScript" },
        { src: "/assets/ts.png", label: "TypeScript" },
        { src: "/assets/react.png", label: "React.js" },
        { src: "/assets/tailwindcss.png", label: "Tailwind CSS" },
        { src: "/assets/bootstrap.png", label: "Bootstrap" },
        { src: "/assets/framer-motion.png", label: "Framer Motion" },
      ],
    },
    {
      title: "Backend",
      summary: "Authentication, databases, APIs, and backend technologies supporting modern web applications.",
      direction: "right",
      baseSpeed: 50,
      icons: [
        { src: "/assets/firebase.svg", label: "Firebase" },
        { src: "/assets/firebase-auth.svg", label: "Firebase Authentication" },
        { src: "/assets/rest-api.svg", label: "REST APIs" },
        { src: "/assets/mysql.png", label: "MySQL" },
        { src: "/assets/php.png", label: "PHP" },
      ],
    },
    {
      title: "Tools & Technologies",
      summary: "Development workflow, mobile technologies, design tools, and production tooling.",
      direction: "left",
      baseSpeed: 60,
      icons: [
        { src: "/assets/git.svg", label: "Git" },
        { src: "/assets/github.svg", label: "GitHub" },
        { src: "/assets/vs.png", label: "Visual Studio Code" },
        { src: "/assets/vite.svg", label: "Vite" },
        { src: "/assets/flutter.png", label: "Flutter" },
        { src: "/assets/dart.png", label: "Dart" },
        { src: "/assets/figma.png", label: "Figma" },
        { src: "/assets/xd.png", label: "Adobe XD" },
        { src: "/assets/ps.png", label: "Photoshop" },
      ],
    },
  ];

  const educationItems = [
    {
      logo: "/assets/lmu.avif",
      institution: "London Metropolitan University",
      degree: "Bachelors (Hons) Degree in IT",
      dates: "Nov 2018 - Nov 2021",
      focus: "Built a strong foundation in information technology, software development, databases, and problem-solving."
    },
    {
      logo: "/assets/koi.avif",
      institution: "King's Own Institute",
      degree: "Masters Degree in IT",
      dates: "Oct 2022 - July 2024",
      focus: "Advanced practical knowledge across modern IT systems, project delivery, applied technology, and professional practice."
    }
  ];

  return (
    <section id="resume" className="w-full py-12 sm:py-16 md:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full">
        {/* ========================= TECH STACK ========================= */}
        <div id="skills" className="mb-24 sm:mb-32 md:mb-40 scroll-mt-28">
          <h3 className="text-xl max-[639px]:text-lg sm:text-2xl font-bold mb-10 max-[639px]:mb-8 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            TECH STACK
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <motion.div
            className="overflow-hidden rounded-lg border border-gray-200/80 dark:border-white/10 bg-white/55 dark:bg-white/[0.03] backdrop-blur-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {stackSections.map((section, index) => (
              <div
                key={section.title}
                className={index === 0 ? "" : "border-t border-gray-200/70 dark:border-white/10"}
              >
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 px-4 sm:px-6 pt-5 pb-3">
                  <div>
                    <h4 className="text-base max-[639px]:text-sm sm:text-lg font-bold uppercase text-gray-800 dark:text-gray-100">
                      {section.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 max-[639px]:leading-5">
                      {section.summary}
                    </p>
                  </div>
                </div>
                <div className="py-3 sm:py-4">
                  <MarqueeRow
                    icons={section.icons}
                    direction={section.direction}
                    baseSpeed={section.baseSpeed}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ========================= EXPERIENCES ========================= */}
        <div id="experience" className="mb-24 sm:mb-32 md:mb-40 scroll-mt-28">
          <h3 className="text-xl max-[639px]:text-lg sm:text-2xl font-bold mb-10 max-[639px]:mb-8 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            EXPERIENCES
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="space-y-12 sm:space-y-16">
            <motion.div
              className="flex flex-col md:flex-row items-center gap-7 md:gap-12"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="flex flex-shrink-0 justify-center md:justify-start w-full md:w-[260px] lg:w-[300px]">
                <img
                  src="/assets/frontend.avif"
                  alt="Front-end development"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none h-auto max-h-52 sm:max-h-60 md:max-h-64 object-contain"
                />
              </div>

              <div className="flex-1 text-center md:text-left min-w-0">
                <h4 className="text-lg max-[639px]:text-base font-semibold text-gray-800 dark:text-gray-100">
                  DigiHawk
                </h4>
                <p className="text-base max-[639px]:text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                  Frontend Developer
                </p>
                <p className="text-sm max-[639px]:text-xs italic text-gray-500 dark:text-gray-400">
                  April 2021 – May 2022
                </p>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed max-[639px]:leading-6 mx-auto md:mx-0">
                  Contributed to the development of responsive web applications and interactive user
                  interfaces in a collaborative development environment. Worked closely with designers
                  and developers to transform design concepts into functional, accessible, and
                  user-friendly digital experiences.
                </p>
                <p className="mt-3 text-sm font-semibold text-left text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                  Key Contributions
                </p>
                <ul className="text-sm max-[639px]:text-[13px] text-left text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed max-[639px]:leading-5 mx-auto md:mx-0 list-disc list-outside pl-5">
                  <li>Developed responsive web interfaces using HTML, CSS, JavaScript, and modern frontend development practices.</li>
                  <li>Converted UI/UX designs and wireframes into production-ready web pages and reusable UI components.</li>
                  <li>Collaborated with designers and backend developers to implement new features and improve application functionality.</li>
                  <li>Improved website usability, accessibility, responsiveness, and cross-browser compatibility.</li>
                  <li>Participated in testing, debugging, maintenance, and performance optimization of web applications.</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row items-center gap-7 md:gap-12"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="flex flex-shrink-0 justify-center md:justify-start w-full md:w-[260px] lg:w-[300px]">
                <img
                  src="/assets/frontend.avif"
                  alt="Front-end development"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none h-auto max-h-52 sm:max-h-60 md:max-h-64 object-contain"
                />
              </div>

              <div className="flex-1 text-center md:text-left min-w-0">
                <h4 className="text-lg max-[639px]:text-base font-semibold text-gray-800 dark:text-gray-100">
                  Personal Projects & Continuous Learning
                </h4>
                <p className="text-base max-[639px]:text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                  Frontend Developer (Personal Projects)
                </p>
                <p className="text-sm max-[639px]:text-xs italic text-gray-500 dark:text-gray-400">
                  Feb 2023 – Present
                </p>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed max-[639px]:leading-6 mx-auto md:mx-0">
                  Continuously expanding frontend development expertise through self-directed learning
                  and hands-on project development. Building modern web applications while strengthening
                  skills in React, JavaScript, responsive design, performance optimization, and
                  component-based architecture.
                </p>
                <p className="mt-3 text-sm font-semibold text-left text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                  Key Contributions
                </p>
                <ul className="text-sm max-[639px]:text-[13px] text-left text-gray-600 dark:text-gray-400 mt-2 max-w-xl leading-relaxed max-[639px]:leading-5 mx-auto md:mx-0 list-disc list-outside pl-5">
                  <li>Developed responsive web applications using React.js, JavaScript, HTML, and CSS.</li>
                  <li>Built reusable components and interactive user interfaces following modern frontend development practices.</li>
                  <li>Implemented API integrations, dynamic content, and data-driven functionality.</li>
                  <li>Tested and debugged applications across devices, screen sizes, and modern browsers.</li>
                  <li>Applied accessibility, responsive design, and performance optimization best practices.</li>
                  <li>Maintained projects using Git, GitHub, and modern development workflows.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================= EDUCATION ========================= */}
        <motion.div
          id="education"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl max-[639px]:text-lg sm:text-2xl font-bold mb-10 max-[639px]:mb-8 flex items-center gap-2 text-gray-800 dark:text-gray-100">
            EDUCATION
            <span className="flex-1 border-b border-gray-400 dark:border-gray-600"></span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            {educationItems.map((item, index) => (
              <motion.div
                key={item.degree}
                className="glass group flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 dark:border-white/5 shadow-lg transition-all duration-300 hover:border-[#bc1616]/40 hover:shadow-xl"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.35 }}
              >
                <div className="flex h-44 sm:h-48 items-center justify-center overflow-hidden bg-white/70 dark:bg-white/[0.04]">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="relative flex flex-grow flex-col bg-gray-50/70 p-5 sm:p-6 dark:bg-white/[0.035]">
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-[#bc1616]">
                      <GraduationCap className="h-4 w-4" />
                      Education
                    </div>
                    <h4 className="text-lg max-[639px]:text-base sm:text-xl font-bold text-gray-800 dark:text-gray-100 leading-tight text-left">
                      {item.degree}
                    </h4>
                    <p className="mt-2 text-sm max-[639px]:text-xs font-semibold text-gray-600 dark:text-gray-300 text-left">
                      {item.institution}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm max-[639px]:text-xs text-gray-500 dark:text-gray-400">
                      <CalendarDays className="h-4 w-4 text-[#bc1616]" />
                      <span>{item.dates}</span>
                    </div>
                  </div>

                  <p className="relative mt-5 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed max-[639px]:leading-6">
                    {item.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
