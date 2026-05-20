import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";


export function MobileCard({ images, projectPrefix = "FGA", className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

    const getPositions = () => {
        if (typeof window !== "undefined" && window.innerWidth < 480) {
            return [
                { xOffset: -88, scale: 0.92, zIndex: 5 },
                { xOffset: 0, scale: 1.08, zIndex: 9 },
                { xOffset: 88, scale: 0.92, zIndex: 5 },
            ];
        }

        return [
            { xOffset: -140, scale: 1, zIndex: 5 },
            { xOffset: 0, scale: 1.2, zIndex: 9 },
            { xOffset: 140, scale: 1, zIndex: 5 },
        ];
    };

    const [positions, setPositions] = React.useState(getPositions());

    React.useEffect(() => {
        const handleResize = () => setPositions(getPositions());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.3 } } };

    const imageVariants = (xOffset) => ({
        hidden: { opacity: 0, x: xOffset < 0 ? xOffset - 50 : xOffset + 50 },
        show: { opacity: 1, x: xOffset, transition: { duration: 0.6, ease: "easeOut" } },
    });

    return (
        <motion.div
            ref={ref}
            className={`relative flex items-center justify-center w-full max-w-[420px] mx-auto h-[260px] min-[480px]:h-[320px] md:h-[420px] lg:h-[460px] overflow-visible ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            {images.map((img, index) => {
                const { xOffset, scale, zIndex } = positions[index];

                return (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`${projectPrefix}-${index}`}
                        className="absolute w-[112px] min-[480px]:w-[140px] md:w-[190px] lg:w-[200px] rounded-xl cursor-pointer"
                        style={{ scale, zIndex }}
                        variants={imageVariants(xOffset)}
                        whileHover={{ scale: scale * 1.15, zIndex: 50 }}
                        transition={{ type: "spring", stiffness: 140, damping: 15 }}
                    />
                );
            })}
        </motion.div>
    );
}
