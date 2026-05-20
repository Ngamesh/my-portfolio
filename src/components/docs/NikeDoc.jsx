import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Reusable Collapsible Section
const CollapsibleSection = memo(function CollapsibleSection({
    title,
    children,
    defaultOpen = false,
}) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <section className="pb-2 group transition-colors duration-300">
            {/* Header */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="w-full flex justify-between items-center text-left py-3"
            >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-200 group-hover:text-red-500 hover:!text-red-500 dark:group-hover:!text-red-500">
                    {title}
                </h3>

                <ChevronDown
                    size={20}
                    className={`transition-all duration-300 group-hover:text-red-500 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                />
            </button>

            {/* Animated Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 space-y-4">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
});

export default function NikeDoc() {
    return (
        <div className="space-y-2">

            {/* Project Overview */}
            <CollapsibleSection title="Project Overview" defaultOpen={true}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The <strong>Nike Limited Edition Landing Page</strong> is a high-impact, commercial website UI designed to promote exclusive product launches. It features a modern, athletic aesthetic with a focus on <strong>visual storytelling</strong>, <strong>urgency-driven marketing</strong>, and seamless navigation across product collections.
                </p>
                <img
                    src="/assets/nike.png"
                    alt="Nike Landing Page UI"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* UI Structure & Design System */}
            <CollapsibleSection title="UI Structure & Design System">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Built with <strong>Bootstrap 4</strong>, the layout follows a clean, structured approach. It utilizes a 12-column grid for <strong>responsive scaling</strong> and custom CSS to match Nike's bold brand identity, including high-contrast sections and athletic typography.
                </p>
                <img
                    src="/assets/luxury.png"
                    alt="Nike UI Structure"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* Key Features & UX Optimization */}
            <CollapsibleSection title="UX Optimization">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Smooth Navigation</strong>: Enhanced user journey with <strong>jQuery Easing</strong> for fluid section transitions.</li>
                    <li><strong>Interactive Product Showcases</strong>: Dynamic carousels highlighting the <strong>Blazer Vintage</strong>, <strong>Nike Free</strong>, and <strong>Nike Air</strong> series.</li>
                    <li><strong>Urgency Marketing</strong>: Real-time <strong>Countdown Timer</strong> to drive conversions for limited-time offers.</li>
                    <li><strong>Strategic Pricing Tiers</strong>: Clear, color-coded pricing cards with stock availability and feature breakdowns.</li>
                </ul>
                <img
                    src="/assets/food.png"
                    alt="UX and Conversion Elements"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* Component Strategy borrowed for React */}
            <CollapsibleSection title="Component Strategy">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The site leverages a <strong>Modular Design approach</strong>. Reusable components for pricing cards, feature lists, and branch location cards were implemented to ensure ease of updates and a consistent user experience throughout the page.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                        src="/assets/price.png"
                        alt="Pricing Component"
                        className="w-full rounded-xl shadow-md"
                    />
                    <img
                        src="/assets/location.png"
                        alt="Branch Locations Section"
                        className="w-full rounded-xl shadow-md"
                    />
                </div>
            </CollapsibleSection>

            {/* Performance & Animation */}
            <CollapsibleSection title="Performance & Animation">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Optimized Asset Delivery</strong>: Lightweight images and bundled vendor scripts for fast initial load times.</li>
                    <li><strong>Fluid Interactivity</strong>: JavaScript-driven navigation and timers designed for a <strong>60FPS scrolling experience</strong>.</li>
                    <li><strong>Visual Feedback</strong>: Hover effects and animated transitions provide intuitive feedback to the user.</li>
                </ul>
            </CollapsibleSection>

            {/* Responsive & Accessibility */}
            <CollapsibleSection title="Responsive & Accessibility">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Universal Breakpoint Support</strong>: Fully responsive UI that adapts flawlessly from desktop to mobile screens via Bootstrap's grid.</li>
                    <li><strong>Semantic HTML5</strong>: Uses proper sectioning and header tags to ensure accessibility and better SEO.</li>
                    <li><strong>Clear Contact Points</strong>: Accessible branch information and integrated contact forms for global inquiries.</li>
                </ul>
            </CollapsibleSection>

            {/* Challenges & Solutions */}
            <CollapsibleSection title="Challenges & Solutions">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Brand Alignment</strong>: Precisely replicated Nike's high-energy visual style using custom SCSS and high-quality iconography.</li>
                    <li><strong>Countdown Reliability</strong>: Implemented a robust client-side timer that maintains accuracy across different browser environments.</li>
                    <li><strong>Responsive Grids</strong>: Balanced dense pricing information with readability on smaller mobile viewports.</li>
                </ul>
            </CollapsibleSection>

            {/* Tech Stack */}
            <CollapsibleSection title="Tech Stack">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Frontend</strong>: HTML5, CSS3, JavaScript</li>
                    <li><strong>Framework</strong>: Bootstrap 4</li>
                    <li><strong>Libraries</strong>: jQuery, jQuery Easing</li>
                    <li><strong>Icons</strong>: Font Awesome, Nike Branding</li>
                </ul>
            </CollapsibleSection>

        </div>
    );
}
