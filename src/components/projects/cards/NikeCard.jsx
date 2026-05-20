import React, { useRef, useState } from "react";

import { motion, useInView } from "framer-motion";


export function NikeCard({ images }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

    const getPositions = () => {
        if (typeof window === "undefined") return [];

        if (window.innerWidth < 640) {
            return [
                { xOffset: -95, yOffset: -52, scale: 1, zIndex: 9 },
                { xOffset: 0, yOffset: 0, scale: 1, zIndex: 5 },
                { xOffset: 95, yOffset: 52, scale: 1, zIndex: 1 },
            ];
        }

        if (window.innerWidth < 1024) {
            return [
                { xOffset: -150, yOffset: -60, scale: 1, zIndex: 9 },
                { xOffset: 0, yOffset: 0, scale: 1, zIndex: 5 },
                { xOffset: 150, yOffset: 60, scale: 1, zIndex: 1 },
            ];
        }

        return [
            { xOffset: -280, yOffset: -80, scale: 1, zIndex: 9 },
            { xOffset: 0, yOffset: 0, scale: 1, zIndex: 5 },
            { xOffset: 280, yOffset: 80, scale: 1, zIndex: 1 },
        ];
    };

    const [positions, setPositions] = useState(getPositions());

    React.useEffect(() => {
        const handleResize = () => setPositions(getPositions());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.3 } } };

    const imageVariants = ({ xOffset, yOffset }) => ({
        hidden: { opacity: 0, x: xOffset, y: (yOffset ?? 0) - 50 },
        show: {
            opacity: 1,
            x: xOffset,
            y: yOffset ?? 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    });

    return (
        <motion.div
            ref={ref}
            className="relative flex items-center justify-center w-full max-w-[980px] mx-auto h-[300px] sm:h-[420px] md:h-[520px] overflow-visible"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            {images.map((img, index) => {
                const { xOffset, yOffset = 0, scale, zIndex } = positions[index];

                return (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`Nike-${index}`}
                        className="absolute w-[220px] sm:w-[260px] md:w-[420px] lg:w-[500px] rounded-xl cursor-pointer"
                        style={{ scale, zIndex }}
                        variants={imageVariants({ xOffset, yOffset })}
                        whileHover={{ scale: scale * 1.12, zIndex: 50 }}
                        transition={{ type: "spring", stiffness: 140, damping: 15 }}
                    />
                );
            })}
        </motion.div>
    );
}
