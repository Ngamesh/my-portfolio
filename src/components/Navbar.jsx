import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Check initial theme on mount to sync the icon
    const isDark = localStorage.getItem('theme') === 'dark' || document.documentElement.classList.contains('dark');
    setDark(isDark);
  }, []);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -60% 0px', // Adjusted to trigger later when section is further up
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If we are in the home (hero) section, clear active highlight
          if (entry.target.id === 'home') {
            setActiveSection('');
          }
          // If it's the contact section, we only activate it if we are near the bottom
          else if (entry.target.id === 'contact') {
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
            if (isAtBottom) setActiveSection('contact');
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all nav items + the home section
    ['home', ...navItems.map(item => item.id)].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Special check for bottom of page on scroll to force contact highlight
    const handleBottomScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleBottomScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleBottomScroll);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY > 100) setIsMenuOpen(false); // Auto-close on scroll
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleDark() {
    const isDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setDark(isDark);

    // Play switch sound
    const audio = new Audio("/assets/light-switch.mp3");
    audio.play().catch(err => console.log("Audio play failed:", err));
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
    setIsMenuOpen(false); // Close menu on click
    const start = window.pageYOffset;
    const end = el.getBoundingClientRect().top + start - 80;
    const duration = 1000;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
      window.scrollTo(0, start + (end - start) * ease);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  return (
    <nav className={`fixed left-0 right-0 z-[9999] top-3 sm:top-4 mx-auto max-w-[1200px] px-3 sm:px-4 transition-all duration-300 ${scrolled ? 'opacity-100' : 'opacity-95'}`}>
      <div className={`glass flex flex-col rounded-xl overflow-hidden transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md md:hidden hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <button
              onClick={() => window.location.reload()}
              className="text-sm font-semibold tracking-wide uppercase hover:text-red-500 transition-colors cursor-pointer"
            >
              Ngamesh
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToId(item.id)} 
                className={`hover:text-red-500 transition-colors duration-200 font-medium ${activeSection === item.id ? 'text-red-500' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-md transition-colors">
              {dark ? <FaSun className="text-white" /> : <FaMoon className="text-black" />}
            </button>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollToId('contact'); }}
              className="text-sm hidden md:inline-block hover:text-red-500 font-medium transition-all hover:underline"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden flex flex-col bg-white/10 backdrop-blur-md transition-all duration-300 ease-in-out border-t border-white/10 ${isMenuOpen ? 'max-h-64 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={`py-3 px-5 sm:px-6 text-left text-sm font-medium hover:bg-white/5 transition-colors ${activeSection === item.id ? 'text-red-500' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollToId('contact'); }}
            className="py-3 px-5 sm:px-6 text-left text-sm font-bold text-red-500 hover:bg-white/5 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
