import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ResumeSection from "./components/ResumeSection";
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
        <title>Ngamesh Raj Bhandari — Web Developer</title>
        <meta
          name="description"
          content="Ngamesh Raj Bhandari — Web Developer. Portfolio."
        />
      </Helmet>



      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <ResumeSection />
      </main>

      {/* Footer */}
      <Footer />
    </HelmetProvider>
  );
}
