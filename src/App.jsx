import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  // Load dark mode preference on first render
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ngamesh Raj Bhandari — UI/UX Designer</title>
        <meta
          name="description"
          content="Ngamesh Raj Bhandari — UI/UX Designer & Frontend Developer. Portfolio."
        />
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
      </main>

      {/* Footer */}
      <Footer />
    </HelmetProvider>
  );
}
