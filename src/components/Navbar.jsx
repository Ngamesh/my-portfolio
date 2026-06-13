import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  WiCloud,
  WiDayCloudy,
  WiDaySunny,
  WiFog,
  WiMoonAltWaxingCrescent4,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightAltSnow,
  WiNightAltThunderstorm,
  WiRain,
  WiSnow,
  WiThunderstorm
} from 'react-icons/wi';

const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const getWeatherIcon = (code, isDay) => {
  if (code === 0) return isDay ? WiDaySunny : WiMoonAltWaxingCrescent4;
  if ([1, 2].includes(code)) return isDay ? WiDayCloudy : WiNightAltCloudy;
  if (code === 3) return WiCloud;
  if ([45, 48].includes(code)) return WiFog;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return isDay ? WiRain : WiNightAltRain;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return isDay ? WiSnow : WiNightAltSnow;
  if ([95, 96, 99].includes(code)) return isDay ? WiThunderstorm : WiNightAltThunderstorm;
  return isDay ? WiDayCloudy : WiNightAltCloudy;
};

const fallbackWeatherLocation = {
  latitude: -33.8688,
  longitude: 151.2093,
  label: 'Sydney, Australia'
};

function WeatherBadge() {
  const [weather, setWeather] = useState({
    status: 'loading',
    temperature: null,
    code: null,
    isDay: true,
    location: 'Current location'
  });

  useEffect(() => {
    let cancelled = false;

    const loadWeather = async ({ latitude, longitude, locationLabel, reverseGeocode = true }) => {
      try {
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,is_day&timezone=auto`;
        const locationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        const [weatherResponse, locationResponse] = await Promise.all([
          fetch(weatherUrl),
          reverseGeocode ? fetch(locationUrl) : Promise.resolve(null)
        ]);

        if (!weatherResponse.ok) throw new Error('Weather request failed');

        const weatherData = await weatherResponse.json();
        let location = locationLabel;

        if (reverseGeocode && locationResponse?.ok) {
          const locationData = await locationResponse.json();
          const city = locationData.city || locationData.locality || locationData.principalSubdivision;
          const country = locationData.countryName;
          location = [city, country].filter(Boolean).join(', ') || locationLabel;
        }

        if (!cancelled) {
          setWeather({
            status: 'ready',
            temperature: Math.round(weatherData.current.temperature_2m),
            code: weatherData.current.weather_code,
            isDay: weatherData.current.is_day === 1,
            location
          });
        }
      } catch {
        if (!cancelled) {
          setWeather({
            status: 'unavailable',
            temperature: null,
            code: null,
            isDay: true,
            location: 'Weather unavailable'
          });
        }
      }
    };

    const loadFallbackWeather = () => {
      loadWeather({
        ...fallbackWeatherLocation,
        locationLabel: fallbackWeatherLocation.label,
        reverseGeocode: false
      });
    };

    if (!navigator.geolocation) {
      loadFallbackWeather();
    } else {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          loadWeather({
            latitude: coords.latitude,
            longitude: coords.longitude,
            locationLabel: 'Current location'
          });
        },
        loadFallbackWeather,
        { enableHighAccuracy: false, maximumAge: 600000, timeout: 10000 }
      );
    }

    return () => {
      cancelled = true;
    };
  }, []);

  const WeatherIcon = getWeatherIcon(weather.code, weather.isDay);
  const label = weather.status === 'ready' ? `${weather.temperature}°C` : '--°C';

  return (
    <div
      className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-semibold text-black transition-colors hover:bg-black/5 dark:text-white dark:hover:bg-white/5"
      title={weather.location}
      aria-label={`Current weather for ${weather.location}: ${label}`}
    >
      <WeatherIcon className="text-2xl leading-none text-[#bc1616]" />
      <span className="tabular-nums">{label}</span>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('scrollToTopAfterReload') !== 'true') return;

    sessionStorage.removeItem('scrollToTopAfterReload');
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

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

  function scrollToTopSmoothly(onComplete) {
    const start = window.pageYOffset;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (start <= 2 || reduceMotion) {
      window.scrollTo(0, 0);
      onComplete();
      return;
    }

    const duration = 800;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        onComplete();
      }
    }

    requestAnimationFrame(step);
  }

  function handleBrandClick() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    setIsMenuOpen(false);
    sessionStorage.setItem('scrollToTopAfterReload', 'true');
    scrollToTopSmoothly(() => window.location.reload());
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
      <div className={`glass flex flex-col overflow-hidden rounded-xl text-black transition-all duration-300 dark:text-white ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="flex items-center justify-between gap-3 p-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-black hover:bg-gray-100 transition-[background-color] md:hidden dark:text-white dark:hover:bg-gray-800"
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
              onClick={handleBrandClick}
              className="text-sm font-bold uppercase text-black cursor-pointer dark:text-white"
            >
              Ngamesh
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToId(item.id)} 
                className={`font-medium text-black transition-colors duration-200 hover:text-red-500 dark:text-white ${activeSection === item.id ? '!text-red-500' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <WeatherBadge />
            <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-md transition-colors">
              {dark ? <FaSun className="text-white" /> : <FaMoon className="text-black" />}
            </button>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); scrollToId('contact'); }}
              className="hidden text-sm font-medium !text-black transition-all hover:!text-red-500 hover:underline dark:!text-white md:inline-block"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden flex flex-col bg-white/10 backdrop-blur-md transition-all duration-300 ease-in-out border-t border-white/10 ${isMenuOpen ? 'max-h-[calc(100dvh-6rem)] opacity-100 py-4 overflow-y-auto overscroll-contain' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
        >
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={`shrink-0 py-3 px-5 text-left text-sm font-medium text-black transition-colors hover:bg-white/5 dark:text-white sm:px-6 ${activeSection === item.id ? '!text-red-500' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollToId('contact'); }}
            className="shrink-0 py-3 px-5 text-left text-sm font-bold !text-red-500 transition-colors hover:bg-white/5 dark:!text-white sm:px-6"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
