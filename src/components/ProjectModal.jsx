import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaMoon, FaSun } from "react-icons/fa";
import HotelDoc from "./docs/HotelDoc";
import FGADoc from "./docs/FGADoc";
import SparkDoc from "./docs/SparkDoc";
import NikeDoc from "./docs/NikeDoc";
import "./docs/Project.css"; // Import the custom styles

export default function ProjectModal({ activeModal, setActiveModal }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Sync dark mode state with document
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, [activeModal]);

  if (!activeModal) return null;

  const closeModal = () => setActiveModal(null);

  function toggleDark() {
    const isDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);

    // Play switch sound
    const audio = new Audio("/assets/light-switch.mp3");
    audio.play().catch(err => console.log("Audio play failed:", err));
  }

  // Dynamic titles for different projects
  const getTitle = () => {
    switch (activeModal) {
      case "hotel":
        return "Hotel – A Booking Website";
      case "fga":
        return "FGA – A Fitness Gym App";
      case "spark":
        return "SPARK – Mobile App";
      case "nike":
        return "Nike – Commercial Website UI";
      default:
        return "Project Documentation";
    }
  };

  return (
    <AnimatePresence>
      {activeModal && (
        <motion.div
          className="fixed inset-0 bg-black/15 flex justify-center items-center z-[99990]"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass rounded-2xl w-11/12 md:w-[90%] lg:w-[85%] max-w-[1400px]
                       max-h-[90vh] overflow-y-auto overscroll-contain relative text-left custom-scrollbar
                       !bg-white/58 dark:!bg-black/52 !backdrop-blur-2xl border border-white/45 dark:border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            onClick={(event) => event.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            {/* Modal Header: Navbar-style */}
            <div className="modal-header">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 truncate pr-4">
                {getTitle()}
              </h2>
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleDark} 
                  aria-label="Toggle dark mode" 
                  className="p-2 rounded-md transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {dark ? <FaSun className="text-white" /> : <FaMoon className="text-black" />}
                </button>
                <button onClick={closeModal} className="close-btn shrink-0">
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className={`${activeModal === "hotel" ? "project-case-study p-0" : "project-doc p-5 sm:p-6"} pt-0`}>
              {activeModal === "hotel" && <HotelDoc />}
              {activeModal === "fga" && <FGADoc />}
              {activeModal === "spark" && <SparkDoc />}
              {activeModal === "nike" && <NikeDoc />}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
