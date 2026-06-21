import React from "react";
import { motion } from "framer-motion";
import { MobileCard } from "./cards/MobileCard";
import { ProjectMetrics } from "./ProjectMetrics";
import { TechnologyBadges } from "./TechnologyBadges";

export default function FGASection({ onOpenModal }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-8 lg:gap-12 w-full px-0 sm:px-4">
            <MobileCard
                images={["/assets/cardio.png", "/assets/fga.png", "/assets/muscle.png"]}
                projectPrefix="FGA"
            />

            <motion.div
                className="w-full max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mt-2 lg:mt-0"
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.7, ease: "easeOut" } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h5 className="text-center lg:text-left text-2xl max-[639px]:text-xl sm:text-[28px] font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg leading-snug">
                    <span className="font-bold">FGA </span>
                    <span className="font-light">– Fitness Gym App</span>
                </h5>
                <ProjectMetrics centerUntilDesktop metrics={["60FPS UI", "iOS & Android", "Real-Time Tracking"]} />
                <TechnologyBadges centerUntilDesktop technologies={["Flutter", "Dart", "Chewie", "Adobe XD"]} />
                <div className="text-justify max-[639px]:text-justify text-base max-[639px]:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed max-[639px]:leading-6">
                    <a>
                        Cross-platform Flutter application combining responsive interface implementation with intuitive workout discovery, nutrition tracking, video tutorials, and accessible progress feedback.
                    </a>
                </div>
                <ul className="text-left text-sm max-[639px]:text-[13px] text-gray-600 dark:text-gray-300 mt-3 list-disc list-outside pl-5 leading-relaxed max-[639px]:leading-5 space-y-1.5 max-[639px]:space-y-1">
                    <li>Native 60FPS performance on iOS and Android</li>
                    <li>Advanced UI patterns using Flutter Stack and Pinned layouts</li>
                    <li>Integrated media tutorials with Chewie and Video Player</li>
                    <li>Real-time progress tracking and activity monitoring</li>
                </ul>
                <div className="mt-6 flex justify-center lg:justify-start">
                    <motion.button
                        className="btn-primary motion-primary-action"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={() => onOpenModal("fga")}
                    >
                        VIEW PROJECT <strong>→</strong>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
