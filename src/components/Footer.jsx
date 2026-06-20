import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleContact = (e) => {
    e.preventDefault();
    console.log("Contact:", formData);
    showNotification("Message sent successfully!");
    setFormData({ email: "", message: "" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribe:", subscribeEmail);
    showNotification("Thank you for subscribing!");
    setSubscribeEmail("");
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <footer id="contact" className="w-full border-t border-gray-200 dark:border-gray-800 pt-14 sm:pt-20 pb-10 mt-24 sm:mt-32 overflow-hidden scroll-mt-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-14 sm:mb-20">

          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl max-[639px]:text-3xl sm:text-5xl md:text-6xl font-extrabold mb-2 text-black dark:text-white">
              Have an idea?
            </h2>
            <h2 className="text-3xl max-[639px]:text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 max-[639px]:mb-6 text-[#bc1616]">
              Let's build together.
            </h2>

            <form onSubmit={handleContact} className="space-y-8 max-[639px]:space-y-6 mt-8 max-[639px]:mt-6">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 py-2 px-0 text-base max-[639px]:text-sm placeholder-gray-900 dark:placeholder-gray-400 outline-none focus:ring-0 focus:border-[#bc1616] transition-colors"
                  placeholder="Your Email"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="1"
                  className="block w-full bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-700 py-2 px-0 text-base max-[639px]:text-sm placeholder-gray-900 dark:placeholder-gray-400 outline-none focus:ring-0 focus:border-[#bc1616] transition-colors resize-none overflow-hidden"
                  placeholder="Message"
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = e.target.scrollHeight + "px";
                  }}
                />
              </div>

              <div className="pt-4">
                <motion.button
                  type="submit"
                  className="btn-primary w-full sm:w-auto flex justify-center items-center py-3 px-6 rounded-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right: Subscribe & Extra Info */}
          <motion.div
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-lg max-[639px]:text-base font-semibold text-black dark:text-white mb-4 max-[639px]:mb-3 uppercase">
                Stay Updated
              </h3>
              <p className="text-base max-[639px]:text-sm text-gray-500 dark:text-gray-400 mb-6 max-[639px]:mb-5 leading-relaxed max-[639px]:leading-6">
                Subscribe to my newsletter for the latest articles, design resources, and project updates.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    value={subscribeEmail}
                    onChange={(e) => setSubscribeEmail(e.target.value)}
                    required
                    className="w-full bg-gray-100 dark:bg-[#1a1a1a] border border-transparent focus:border-[#bc1616] rounded-lg px-4 py-3 text-base max-[639px]:text-sm text-black dark:text-white outline-none transition-all"
                    placeholder="Email address"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full sm:w-auto flex justify-center items-center py-3 px-6 rounded-lg whitespace-nowrap"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>

            <div className="mt-16 md:mt-10">
              <h3 className="text-lg max-[639px]:text-base font-semibold text-black dark:text-white mb-6 max-[639px]:mb-5 uppercase">
                Get Connected
              </h3>
              <div className="flex gap-4 sm:gap-6 justify-start">
                <motion.a href="https://instagram.com/ngameshb" aria-label="Instagram" target="_blank" rel="noreferrer" className="social-icon instagram scale-100 sm:scale-115" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}>
                  <img src="/assets/insta.svg" alt="Instagram" className="icon-svg" />
                </motion.a>
                <motion.a href="https://linkedin.com/in/ngamesh" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="social-icon linkedin scale-100 sm:scale-115" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}>
                  <img src="/assets/lin.svg" alt="LinkedIn" className="icon-svg" />
                </motion.a>
                <motion.a href="https://youtube.com/@ngamesh" aria-label="YouTube" target="_blank" rel="noreferrer" className="social-icon youtube scale-100 sm:scale-115" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}>
                  <img src="/assets/yt.svg" alt="YouTube" className="icon-svg" />
                </motion.a>
                <motion.a href="https://facebook.com/ngameshb" aria-label="Facebook" target="_blank" rel="noreferrer" className="social-icon facebook scale-100 sm:scale-115" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}>
                  <img src="/assets/fb.svg" alt="Facebook" className="icon-svg" />
                </motion.a>
                <motion.a href="https://github.com/ngamesh" aria-label="GitHub" target="_blank" rel="noreferrer" className="social-icon github scale-100 sm:scale-115" whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}>
                  <img src="/assets/github.svg" alt="GitHub" className="icon-svg" />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Copyright */}
        <motion.div
          className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Ngamesh Raj Bhandari. All rights reserved.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10000] bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full shadow-2xl font-semibold border border-white/10 dark:border-black/10 flex items-center gap-3 pointer-events-none"
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
