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

export default function FGADoc() {
    return (
        <div className="space-y-2">

            {/* Project Overview */}
            <CollapsibleSection title="Project Overview" defaultOpen={true}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The <strong>Fitness Gym App (FGA)</strong> is a high-performance cross-platform mobile application built to provide a modern, engaging fitness tracking experience. It streamlines <strong>workout discovery</strong>, <strong>nutritional planning</strong>, and <strong>performance monitoring</strong> into a single, cohesive dashboard.
                </p>
                <img
                    src="/assets/fga.png"
                    alt="FGA App Dashboard"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* UI Structure & Layout System */}
            <CollapsibleSection title="UI Structure & Layout System">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The application features a <strong>High-Fidelity UI</strong> directly translated from <strong>Adobe XD</strong>. It utilizes a modular widget system in <strong>Flutter</strong>, employing sophisticated <strong>Stack</strong> and <strong>Pinned</strong> layouts to ensure perfect visual alignment across various screen sizes.
                </p>
                <img
                    src="/assets/muscle.png"
                    alt="Workouts UI Layout"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* UX Optimization */}
            <CollapsibleSection title="UX Optimization">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Interactive Feed</strong>: Personalized home dashboard with <strong>Latest Activity</strong> tracking.</li>
                    <li><strong>Smooth Transitions</strong>: Custom <strong>Fade</strong> and <strong>Push</strong> animations for a premium app feel.</li>
                    <li><strong>Gamified Progress</strong>: Real-time <strong>Fitness Score</strong> updates to drive user engagement.</li>
                    <li><strong>Media Rich Discovery</strong>: Integrated video previews for exercises using <strong>Chewie</strong> and <strong>Video Player</strong>.</li>
                </ul>
                <img
                    src="/assets/cardio.png"
                    alt="Activity Tracking UX"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* Component Strategy (Flutter Widgets) */}
            <CollapsibleSection title="Component Strategy">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Built with a <strong>Custom Widget Library</strong> for reusability. Each feature—from the <strong>Navigation Drawer</strong> to the <strong>Exercise Cards</strong>—is abstracted into independent modules, allowing for rapid scaling and consistent branding throughout the app.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                        src="/assets/profile.png"
                        alt="User Profile Widget"
                        className="w-full rounded-xl shadow-md"
                    />
                    <img
                        src="/assets/chat.png"
                        alt="Interactive Elements"
                        className="w-full rounded-xl shadow-md"
                    />
                </div>
            </CollapsibleSection>

            {/* Performance & Animation */}
            <CollapsibleSection title="Performance & Animation">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Native Performance</strong>: Compiled to ARM code for a solid <strong>60FPS experience</strong> on both iOS and Android.</li>
                    <li><strong>Optimized SVG Rendering</strong>: High-quality icons using <strong>flutter_svg</strong> without design fidelity loss.</li>
                    <li><strong>Efficient State Handling</strong>: Minimalistic approach to <strong>UI rebuilding</strong>, ensuring zero-lag during complex scrolls.</li>
                </ul>
            </CollapsibleSection>

            {/* Responsive & Accessibility */}
            <CollapsibleSection title="Responsive & Accessibility">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Adaptive Layouts</strong>: Handles dynamic screen densities using Flutter's <strong>flexible constraints</strong>.</li>
                    <li><strong>Intuitive Icons</strong>: Clear visual cues using <strong>Font Awesome</strong> and <strong>Ionicons</strong>.</li>
                    <li><strong>Permission Management</strong>: Secure handling of media and storage via <strong>Permission Handler</strong>.</li>
                </ul>
            </CollapsibleSection>

            {/* Challenges & Solutions */}
            <CollapsibleSection title="Challenges & Solutions">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Design Fidelity</strong>: Successfully bridged the gap between complex <strong>Adobe XD</strong> designs and functional code.</li>
                    <li><strong>Media Integration</strong>: Optimized <strong>background video playback</strong> for exercise tutorials without impacting UI fluidity.</li>
                    <li><strong>Complex Scrolling</strong>: Implemented <strong>nested horizontal carousels</strong> within vertically scrollable dashboards.</li>
                </ul>
            </CollapsibleSection>

            {/* Tech Stack */}
            <CollapsibleSection title="Tech Stack">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Framework</strong>: Flutter</li>
                    <li><strong>Language</strong>: Dart</li>
                    <li><strong>UI Design</strong>: Adobe XD</li>
                    <li><strong>Graphics/Icons</strong>: Flutter SVG, Font Awesome</li>
                    <li><strong>Media</strong>: Chewie, Video Player</li>
                    <li><strong>Utilities</strong>: Image Picker, Permission Handler</li>
                </ul>
            </CollapsibleSection>

        </div>
    );
}
