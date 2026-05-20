import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";


export function HotelCard({ images }) {
    const [angleOffset, setAngleOffset] = React.useState(0);
    const [hoveredIndex, setHoveredIndex] = React.useState(null);
    const itemCount = images.length;

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" });

    const getRadius = () => {
        if (typeof window === "undefined") return 200;
        if (window.innerWidth < 480) return 95;
        if (window.innerWidth < 640) return 120;
        if (window.innerWidth < 1024) return 190;
        return 280;
    };

    const [radius, setRadius] = React.useState(getRadius());

    React.useEffect(() => {
        const handleResize = () => setRadius(getRadius());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    React.useEffect(() => {
        const rotationSpeed = typeof window !== 'undefined' && window.innerWidth < 640 ? 0.8 : 0.5;
        const interval = setInterval(() => {
            if (hoveredIndex === null) setAngleOffset((prev) => prev + rotationSpeed);
        }, 16);

        return () => clearInterval(interval);
    }, [hoveredIndex]);

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.div
            ref={ref}
            className="relative w-full max-w-[960px] mx-auto h-[260px] sm:h-[340px] md:h-[420px] overflow-visible"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            {images.map((img, index) => {
                const angle = (360 / itemCount) * index + angleOffset;
                const rad = (angle * Math.PI) / 180;
                const x = radius * Math.cos(rad);
                const z = radius * Math.sin(rad);
                const zIndex = Math.round(z) + radius;
                const baseScale = 0.7 + ((z + radius) / (2 * radius)) * 0.4;

                return (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`Hotel-${index}`}
                        className="absolute w-[220px] sm:w-[220px] md:w-[340px] lg:w-[380px] rounded-xl cursor-pointer"
                        style={{
                            left: "50%",
                            top: "50%",
                            x,
                            z,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{ 
                            scale: hoveredIndex === index ? baseScale * 1.25 : baseScale,
                            zIndex: hoveredIndex === index ? 1000 : zIndex
                        }}
                        transition={{ type: "spring", stiffness: 135, damping: 15 }}
                        variants={itemVariants}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    />
                );
            })}
        </motion.div>
    );
}
