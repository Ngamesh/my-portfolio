import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectHero({
  title,
  accent,
  description,
  role,
  technologies,
  primaryImage,
  primaryImageAlt,
  secondaryImage,
  secondaryImageAlt,
  imageClassName = "w-full rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]",
  secondaryWrapperClassName = "absolute -bottom-4 -right-1 w-[24%] sm:-bottom-6 sm:-right-2 sm:w-[22%] group-hover:translate-y-2 transition-transform duration-700",
  secondaryImageClassName = "w-full rounded-xl",
  links = []
}) {
  return (
    <section className="relative flex flex-col md:min-h-[80vh] md:flex-row items-center justify-between gap-8 md:gap-12 py-10 sm:py-12 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex-1 space-y-6 md:space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            {title} <br />
            <span className="text-[#bc1616]">{accent}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            {description}
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
            <p className="font-semibold text-sm md:text-base">{role}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-gray-400 mb-2">Technologies</p>
            <div className="flex gap-3 mt-1 flex-wrap">
              {technologies.map((technology, index) => (
                <React.Fragment key={technology}>
                  {index > 0 && <span className="text-sm font-medium text-gray-300">•</span>}
                  <span className="text-sm font-medium">{technology}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {links.map((link) => {
              const Icon = link.type === "source" ? Github : ExternalLink;
              const className = link.type === "primary"
                ? "btn-primary group text-sm md:text-base"
                : "flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-sm md:text-base";

              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className={className}>
                  {link.type === "primary" ? (
                    <>
                      {link.label} <Icon size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      <Icon size={20} /> <span className="font-semibold">{link.label}</span>
                    </>
                  )}
                </a>
              );
            })}
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 relative w-full perspective-1000px"
      >
        <div className="relative group">
          <img
            src={primaryImage}
            alt={primaryImageAlt}
            className={imageClassName}
          />
          {secondaryImage && (
            <div className={secondaryWrapperClassName}>
              <img
                src={secondaryImage}
                alt={secondaryImageAlt}
                className={secondaryImageClassName}
              />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
