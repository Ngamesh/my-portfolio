import React from "react";
import { motion } from "framer-motion";
import { MobileCard } from "./cards/MobileCard";

export default function FGASection({ onOpenModal }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-8 lg:gap-12 w-full px-0 sm:px-4">
            <MobileCard
                images={["/assets/cardio.png", "/assets/fga.png", "/assets/muscle.png"]}
                projectPrefix="FGA"
            />

            <motion.div
                className="w-full max-w-2xl mx-auto lg:mx-0 text-left mt-2 lg:mt-0"
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.7, ease: "easeOut" } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h5 className="text-xl max-[639px]:text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg leading-snug">
                    <span className="font-bold">FGA </span>
                    <span className="font-light">– Fitness Gym App</span>
                </h5>
                <div className="text-justify text-base max-[639px]:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed max-[639px]:leading-6">
                    <a>
                        A high-performance <strong>Flutter</strong> mobile application designed for comprehensive gym management.
                        Translated from complex <strong>Adobe XD</strong> designs, it features workout discovery, nutritional tracking (Loose Fat, Shredd),
                        and gamified fitness scoring for an engaging user experience.
                    </a>
                </div>
                <ul className="text-sm max-[639px]:text-[13px] text-gray-600 dark:text-gray-300 mt-3 list-disc list-outside pl-5 leading-relaxed max-[639px]:leading-5">
                    <li>Native 60FPS performance on iOS and Android</li>
                    <li>Advanced UI patterns using Flutter Stack and Pinned layouts</li>
                    <li>Integrated media tutorials with Chewie and Video Player</li>
                    <li>Real-time progress tracking and activity monitoring</li>
                </ul>
                <div className="mt-6">
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 180, damping: 12 }}
                        onClick={() => onOpenModal("fga")}
                    >
                        VIEW PROJECT <strong>→</strong>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
