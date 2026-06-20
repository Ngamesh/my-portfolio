import React from "react";
import { motion } from "framer-motion";
import { HotelCard } from "./cards/HotelCard";

export default function HotelSection({ onOpenModal }) {
    const introVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <div className="flex flex-col items-center gap-6 sm:gap-8 w-full px-0 sm:px-4 lg:px-8 mb-8 sm:mb-12">
            <HotelCard
                images={["/assets/simple.png", "/assets/luxury.png", "/assets/food.png"]}
            />

            <motion.div
                className="w-full max-w-3xl text-center"
                variants={introVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h5 className="text-xl max-[639px]:text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg leading-snug">
                    <span className="font-bold">Hotel </span>
                    <span className="font-light">– Luxury Booking Platform</span>
                </h5>
                <div className="text-justify text-base max-[639px]:text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed max-[639px]:leading-6 max-w-2xl mx-auto">
                    <a>
                        Developed a premium multi-page booking platform for a luxury hotel in
                        <strong> Pokhara, Lakeside</strong>. Built with <strong>Bootstrap 4</strong> and <strong>jQuery</strong>, the platform
                        delivers a high-fidelity experience with integrated room discovery, service galleries, and a centralized reservation system.
                    </a>
                </div>
                <ul className="text-sm max-[639px]:text-[13px] text-gray-600 dark:text-gray-300 mt-3 list-disc list-outside text-left max-w-2xl mx-auto pl-5 leading-relaxed max-[639px]:leading-5">
                    <li>Real-time availability checker and booking modal flow</li>
                    <li>Smooth room transitions using Owl Carousel</li>
                    <li>Guided browsing experience with AOS (Animate on Scroll)</li>
                    <li>Multi-page responsive architecture for Desktop and Mobile</li>
                </ul>
                <div className="mt-6 flex justify-center">
                    <motion.button
                        className="btn-primary motion-primary-action"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={() => onOpenModal("hotel")}
                    >
                        VIEW PROJECT →
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
