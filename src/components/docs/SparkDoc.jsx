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

export default function SparkDoc() {
    return (
        <div className="space-y-2">

            {/* Project Overview */}
            <CollapsibleSection title="Project Overview" defaultOpen={true}>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Spark Admin</strong> is a robust, cross-platform dashboard designed for platform administrators to manage <strong>Events</strong> and <strong>Mentorship programs</strong>. Built with a focus on scalability and real-time data, it provides a centralized hub for monitoring platform growth and user engagement.
                </p>
                <img
                    src="/assets/spark.png"
                    alt="Spark Admin Dashboard"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* UI Structure & Dashboard Design */}
            <CollapsibleSection title="UI Structure & Dashboard Design">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The dashboard utilizes a <strong>Responsive Layout</strong> suitable for web and desktop administrators. Leveraging <strong>Data Table 2</strong> for complex data grids, the UI provides dense yet readable information, allowing admins to quickly filter and manage thousands of records.
                </p>
                <img
                    src="/assets/luxury.png"
                    alt="Dashboard UI Layout"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* UX Optimization */}
            <CollapsibleSection title="UX Optimization">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Real-time Data Sync</strong>: Seamlessly synchronized state using <strong>Supabase</strong> real-time listeners.</li>
                    <li><strong>Simplified Navigation</strong>: Intuitive routing with <strong>Go Router</strong>, including deep-linking for specific event reports.</li>
                    <li><strong>Fast State Management</strong>: Reactive UI updates powered by <strong>Riverpod</strong> for a lag-free experience.</li>
                    <li><strong>Offline Support</strong>: Local data persistence using <strong>Hive</strong> to ensure continuity during connectivity gaps.</li>
                </ul>
                <img
                    src="/assets/nike.png"
                    alt="UX Flow Example"
                    className="w-full rounded-xl shadow-md"
                />
            </CollapsibleSection>

            {/* Backend & Scalability */}
            <CollapsibleSection title="Backend & Scalability">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    The project employs a <strong>Hybrid Cloud Architecture</strong>. It uses <strong>Supabase</strong> for its PostgreSQL database and authentication, while integrating <strong>Firebase</strong> for specialized services like analytics and cloud functions, ensuring a highly scalable foundation.
                </p>
            </CollapsibleSection>

            {/* Component Strategy (Clean Architecture) */}
            <CollapsibleSection title="Component Strategy">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Following <strong>Domain Driven Design (DDD)</strong>, the codebase is organized into features containing distinct <strong>Data</strong>, <strong>Domain</strong>, and <strong>Presentation</strong> layers. This modularity allows for safe updates to the event logic without affecting the mentorship or auth modules.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img
                        src="/assets/fga.png"
                        alt="Feature Module Structure"
                        className="w-full rounded-xl shadow-md"
                    />
                    <img
                        src="/assets/cardio.png"
                        alt="UI Components"
                        className="w-full rounded-xl shadow-md"
                    />
                </div>
            </CollapsibleSection>

            {/* Performance & Security */}
            <CollapsibleSection title="Performance & Security">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Code Generation</strong>: Used <strong>Freezed</strong> and <strong>Riverpod Generator</strong> to reduce boilerplate and ensure type-safety.</li>
                    <li><strong>Secure Storage</strong>: Sensitive tokens are managed via <strong>Flutter Secure Storage</strong>.</li>
                    <li><strong>Validation Logic</strong>: Robust form validation for creating complex event schemas and mentorship schedules.</li>
                </ul>
            </CollapsibleSection>

            {/* Challenges & Solutions */}
            <CollapsibleSection title="Challenges & Solutions">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Complex Data Relationships</strong>: Designed a clean domain model to handle the interplay between users, events, and mentorship applications.</li>
                    <li><strong>Performance Optimization</strong>: Implemented efficient pagination and caching strategies to handle large-scale admin operations smoothly.</li>
                    <li><strong>Multi-Backend Integration</strong>: Seamlessly bridged <strong>Supabase</strong> and <strong>Firebase</strong> within a unified Flutter environment.</li>
                </ul>
            </CollapsibleSection>

            {/* Tech Stack */}
            <CollapsibleSection title="Tech Stack">
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Framework</strong>: Flutter</li>
                    <li><strong>Core Backend</strong>: Supabase (PostgreSQL, Auth, Real-time)</li>
                    <li><strong>Cloud Services</strong>: Firebase</li>
                    <li><strong>State Management</strong>: Riverpod</li>
                    <li><strong>Local Persistence</strong>: Hive, Secure Storage</li>
                    <li><strong>Routing</strong>: Go Router</li>
                </ul>
            </CollapsibleSection>

        </div>
    );
}
