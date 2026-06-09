import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { Code, ChevronsDown } from "lucide-react";

const otherProjects = [
    {
        title: "German to English Translator",
        category: "website",
        description: "A text-based language translation system for converting German sentences into English using seq2seq neural machine translation.",
        image: "/assets/german-english.avif",
        tech: ["Python", "PyTorch", "spaCy"],
        bullets: [
            "Implemented seq2seq model with Bahdanau attention using PyTorch.",
            "Trained on the Multi30K multilingual dataset.",
            "Used bidirectional GRU encoder and GRU decoder.",
            "Preprocessed text using spaCy tokenization."
        ]
    },
    {
        title: "Text Encryption System",
        category: "website",
        description: "A secure web application for message encoding and decoding using custom encryption logic.",
        image: "/assets/encrypted-text.avif",
        tech: ["PHP", "JavaScript", "HTML", "CSS"],
        bullets: [
            "Built a web-based text encryption and decryption system.",
            "Securely encodes user messages using custom logic.",
            "Enables users to generate encrypted output for sensitive information."
        ]
    },
    {
        title: "Weather App",
        category: "mobile",
        description: "A mobile application providing real-time and forecasted weather data via API integration.",
        image: "/assets/weather.avif",
        tech: ["JavaScript"],
        bullets: [
            "Integrated weather API to fetch live weather data.",
            "Displays temperature, conditions, and basic forecasts.",
            "Clean and intuitive user interface."
        ]
    },
    {
        title: "Fruits Tag",
        category: "mobile",
        description: "A mobile application that identifies fruits and vegetables using machine learning to help users recognize unknown varieties.",
        image: "/assets/fruitag.png",
        tech: ["Dart", "Flutter"],
        bullets: [
            "Identifies fruits and vegetables from camera, gallery, or URL inputs using machine learning models.",
            "Provides brief information about scanned fruits based on a dataset of 36 varieties.",
            "Includes an interactive quiz feature to test users' knowledge of various fruits."
        ]
    }
];

export default function ViewMore({ filter }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const idleControls = useAnimationControls();
    const revealVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    useEffect(() => {
        if (isOpen) {
            idleControls.start({ y: 0, scale: 1, transition: { duration: 0.2 } });
            return;
        }

        if (isHovered) {
            idleControls.stop();
            return;
        }

        idleControls.start({
            y: [0, -10, 0],
            scale: [1, 1.12, 1],
            transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
        });
    }, [idleControls, isHovered, isOpen]);

    const filteredProjects = otherProjects.filter(project =>
        filter === "all" || project.category === filter
    );

    if (filteredProjects.length === 0) return null;

    return (
        <div className="mb-16 sm:mb-24 md:mb-32">

            {/* Toggle Button with Chevron */}
            <motion.div
                className={`flex justify-center mt-4 ${isOpen ? "mb-10" : ""}`}
                variants={revealVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -220px 0px" }}
            >
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="group flex flex-col items-center gap-2 text-black dark:text-white hover:text-red-500 transition-colors duration-300"
                    animate={idleControls}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {isOpen ? "Collapse" : "Expand"}
                    </span>
                    <ChevronsDown
                        size={32}
                        className={`transition-all duration-300 transform ${isOpen ? "rotate-180 text-red-500" : "rotate-0"}`}
                    />
                </motion.button>
            </motion.div>

            {/* Collapsible Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-0 sm:px-4 pb-10">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="glass rounded-xl overflow-hidden shadow-lg border border-white/10 dark:border-white/5 flex flex-col min-w-0"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Project Image */}
                                    <div className="aspect-[16/9] min-h-40 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-5 sm:p-6 flex flex-col flex-grow min-w-0">
                                        <h5 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 break-words">
                                            {project.title}
                                        </h5>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-left md:text-justify">
                                            {project.description}
                                        </p>

                                        <ul className="text-xs text-gray-500 dark:text-gray-400 space-y-2 mb-6 flex-grow">
                                            {project.bullets.map((bullet, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-red-500">•</span>
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* View Source Code Button */}
                                        <motion.button
                                            className="flex items-center justify-center gap-2 w-full px-3 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold text-xs sm:text-sm transition-all hover:bg-gray-800 dark:hover:bg-gray-200"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Code size={16} />
                                            VIEW SOURCE CODE
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
