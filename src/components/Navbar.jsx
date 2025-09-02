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
  const [dark, setDark] = useState(document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function toggleDark() {
    const isDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setDark(isDark);
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return;
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
    <nav className={`fixed left-0 right-0 z-40 top-4 mx-auto max-w-[1200px] px-4 transition-opacity ${scrolled ? 'opacity-100' : 'opacity-95'}`}>
      <div className={`glass flex items-center justify-between p-3 rounded-xl ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-md md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="text-sm font-semibold tracking-wide">Ngamesh</div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollToId(item.id)} className="hover:underline transition-colors duration-200">
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <a href="#contact" onClick={e => { e.preventDefault(); scrollToId('contact'); }} className="text-sm hidden md:inline-block hover:underline">Hire Me</a>
        </div>
      </div>
    </nav>
  );
}
