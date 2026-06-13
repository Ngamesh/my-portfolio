import React from "react";
import { motion } from "framer-motion";
import { MobileCard } from "./cards/MobileCard";

export default function SparkSection({ onOpenModal }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-8 lg:gap-12 w-full px-0 sm:px-4">
            <motion.div
                className="w-full max-w-2xl mx-auto lg:mx-0 text-left order-2 lg:order-1"
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.7, ease: "easeOut" } },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
            >
                <h5 className="leading-snug text-xl max-[639px]:text-lg sm:text-2xl font-semibold text-gray-700 dark:text-gray-100 drop-shadow-lg">
                    <span className="font-light">Share the</span>
                    <span className="font-bold"> SPARK </span>
                </h5>
                <div className="text-justify leading-relaxed max-[639px]:leading-6 text-base max-[639px]:text-sm text-gray-600 dark:text-gray-300 mt-3">
                    <a>
                        A robust <strong>Admin Dashboard</strong> built with <strong>Flutter</strong> and <strong>Supabase</strong> for managing
                        mentorship programs and platform events. Implemented with <strong>Clean Architecture</strong> (DDD), it features
                        real-time data synchronization and complex administrative grids.
                    </a>
                </div>
                <ul className="leading-relaxed max-[639px]:leading-5 text-sm max-[639px]:text-xs text-gray-600 dark:text-gray-300 mt-3 list-disc list-outside pl-5">
                    <li>Cross-platform dashboard with Responsive Data Tables</li>
                    <li>Real-time state management using Riverpod</li>
                    <li>Hybrid Cloud integration (Supabase + Firebase)</li>
                    <li>Secure storage and Domain Driven Design approach</li>
                </ul>
                <div className="mt-6">
                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 180, damping: 12 }}
                        onClick={() => onOpenModal("spark")}
                    >
                        VIEW PROJECT →
                    </motion.button>
                </div>
            </motion.div>

            <MobileCard
                images={["/assets/profile.png", "/assets/spark.png", "/assets/chat.png"]}
                projectPrefix="Spark"
                className="order-1 lg:order-2"
            />
        </div>
    );
}
