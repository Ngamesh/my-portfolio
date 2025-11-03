import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import HotelDoc from "./docs/HotelDoc";
import "./docs/Project.css"; // Import the custom styles

export default function ProjectModal({ activeModal, setActiveModal }) {
  if (!activeModal) return null;

  const closeModal = () => setActiveModal(null);

  // Dynamic titles for different projects
  const getTitle = () => {
    switch (activeModal) {
      case "hotel":
        return "Hotel – A Booking Website hope this leaves you with a smile x button.";
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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[99990]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass rounded-2xl w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 
                       max-h-[90vh] overflow-y-auto relative text-left custom-scrollbar"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
          >
            {/* Modal Header: Navbar-style */}
            <div className="modal-header">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                {getTitle()}
              </h2>
              <button onClick={closeModal} className="close-btn">
                <X size={22} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {activeModal === "hotel" && <HotelDoc />}
              {activeModal === "fga" && (
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Case study content coming soon 🚀
                  </p>
                </div>
              )}
              {activeModal === "spark" && (
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Case study content coming soon 🔥
                  </p>
                </div>
              )}
              {activeModal === "nike" && (
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Case study content coming soon 👟
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
