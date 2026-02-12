import React, { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const Projects = React.lazy(() => import("./components/Projects"));
const ResumeSection = React.lazy(() => import("./components/ResumeSection"));
const Footer = React.lazy(() => import("./components/Footer"));
import MouseTrail from "./MouseTrail";

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

      {/* Mouse Trail Effect - Disabled on Mobile */}
      <MouseTrail />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <React.Suspense fallback={null}>
          <Projects />
        </React.Suspense>
        <React.Suspense fallback={null}>
          <ResumeSection />
        </React.Suspense>
      </main>

      {/* Footer */}
      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>
    </HelmetProvider>
  );
}
