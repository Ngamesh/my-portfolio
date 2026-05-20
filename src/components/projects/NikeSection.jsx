import React from "react";
import { motion } from "framer-motion";
import { NikeCard } from "./cards/NikeCard";

export default function NikeSection({ onOpenModal }) {
    const introVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7, ease: "easeOut" } },
    };

    return (
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full px-0 sm:px-4 lg:px-8 mt-4">
            <NikeCard
                images={["/assets/nike.png", "/assets/price.png", "/assets/location.png"]}
            />

            <div className="w-full max-w-3xl">
                <motion.div
                    className="text-center"
                    variants={introVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h5 className="leading-relaxed tracking-wide text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg">
                        <span className="font-bold">Nike </span>
                        <span className="font-light">– Commercial Promo UI</span>
                    </h5>
                    <div className="leading-relaxed tracking-wide text-left sm:text-center text-base text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                        <a>
                            A high-impact commercial landing page showcasing limited edition Nike collections.
                            Built with <strong>Bootstrap 4</strong> and <strong>jQuery</strong>, it features an urgency-driven design with
                            real-time countdown timers and polished interactive product showcases.
                        </a>
                    </div>
                    <ul className="leading-relaxed tracking-wide text-sm text-gray-600 dark:text-gray-300 mt-3 list-disc list-outside text-left max-w-2xl mx-auto pl-5">
                        <li>Urgency-driven Countdown Timer for limited releases</li>
                        <li>Smooth sectional navigation with jQuery Easing</li>
                        <li>Responsive Pricing Cards and Branch Locators</li>
                        <li>High-energy visual identity aligned with Nike branding</li>
                    </ul>
                    <div className="mt-6 text-center">
                        <motion.button
                            className="btn-primary leading-relaxed tracking-wide"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 180, damping: 12 }}
                            onClick={() => onOpenModal("nike")}
                        >
                            VIEW PROJECT →
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
