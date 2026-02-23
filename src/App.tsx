import About from './pages/About';
import Contact from './pages/Contact';
import DeveloperDocs from './pages/DeveloperDocs';
import Explanation from './pages/Explanation';
import Features from './pages/Features';
import PathChooser from './pages/PathChooser';
import Roadmap from './pages/Roadmap';
import Statistics from './pages/Statistics';
import UseCases from './pages/UseCases';
import Logo from './assets/uverify.svg';
import Button from './components/Button';
import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  { id: 'about',       label: 'Home',          bg: 'bg-main-gradient',        anim: '' },
  { id: 'path-chooser',label: 'Start Here',    bg: 'bg-path-gradient',        anim: 'anim-scale' },
  { id: 'explanation', label: 'How It Works',  bg: 'bg-explanation-gradient', anim: 'anim-deep' },
  { id: 'statistics',  label: 'Live Stats',    bg: 'bg-dark-gradient',        anim: 'anim-scale' },
  { id: 'use-cases',   label: 'Use Cases',     bg: 'bg-ocean-gradient',       anim: 'anim-rise' },
  { id: 'features',    label: 'Features',      bg: 'bg-features-gradient',    anim: 'anim-deep' },
  { id: 'developer',   label: 'Developer Docs',bg: 'bg-developer-gradient',   anim: 'anim-scale' },
  { id: 'roadmap',     label: 'Roadmap',       bg: 'bg-roadmap-gradient',     anim: 'anim-soft' },
  { id: 'impress',     label: 'Contact',       bg: 'bg-main-gradient',        anim: 'anim-soft' },
];

const SLIDE_CONTENTS = [
  <About />,
  <PathChooser />,
  <Explanation />,
  <Statistics />,
  <UseCases />,
  <Features />,
  <DeveloperDocs />,
  <Roadmap />,
  <Contact />,
];

const DiscordIcon = () => (
  <svg
    className="w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.04.033.054a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.030zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Entrance animations + active dot tracking via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    const observers: IntersectionObserver[] = [];

    SLIDES.forEach((slide, index) => {
      const el = document.getElementById(slide.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSlide(index);
            el.classList.add('section-visible');
          }
        },
        // root scoped to the scroll container; 15% visibility triggers the animation
        { threshold: 0.15, root: container },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Hash-based navigation + app URL redirect
  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.href.includes('/verify') ||
        window.location.href.includes('/create')
      ) {
        window.location.href = window.location.href.replace(
          /^https?:\/\/[^/]+/,
          'https://app.uverify.io',
        );
      }

      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el)
          el.scrollIntoView({
            behavior: hash === '#impress' ? 'instant' : 'smooth',
            block: 'start',
          });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToSlide = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={containerRef} className="overflow-y-auto h-dvh text-white">
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 h-16 backdrop-blur-md">
        <div
          className="cursor-pointer flex items-center gap-2.5"
          onClick={() => window.open('https://uverify.io', '_self')}
        >
          <img
            src={Logo}
            alt="UVerify Logo"
            className="w-8 h-8 md:w-9 md:h-9 h-xs:w-7 h-xs:h-7"
          />
          <p className="font-bold text-sm text-white uppercase tracking-wide">
            UVerify
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://discord.gg/Dvqkynn6xc"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 border border-purple-400/40 rounded-xl bg-purple-500/15 hover:bg-purple-500/30 px-3 py-1.5 text-sm font-medium text-white/90 transition-all duration-200"
          >
            <DiscordIcon />
            <span className="hidden md:inline">Discord</span>
          </a>
          <Button
            label="Launch App"
            color="white"
            variant="glass"
            onClick={() => window.open('https://app.uverify.io', '_blank')}
          />
        </div>
      </div>

      {/* Nav dots — desktop only; mobile scrolls naturally */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex flex-col gap-2 h-xs:hidden">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => scrollToSlide(slide.id)}
            title={slide.label}
            className={`group relative w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? 'bg-white scale-125'
                : 'bg-white/30 hover:bg-white/60'
            }`}
          >
            <span className="absolute right-5 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs bg-black/60 text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {slide.label}
            </span>
          </button>
        ))}
      </div>

      {/* Sections — each fills at least the full viewport, can grow for tall content */}
      {SLIDES.map((slide, index) => (
        <section
          key={slide.id}
          id={slide.id}
          // section-animate: starts invisible (opacity 0, translated up)
          // section-visible: added by IntersectionObserver → plays the fade-up transition
          // The first section also gets section-visible immediately so there's no flash on load
          className={`section-animate ${slide.anim} ${index === 0 ? 'section-visible' : ''} min-h-dvh flex items-center justify-center ${slide.bg} pt-16 sm:pt-0`}
        >
          {SLIDE_CONTENTS[index]}
        </section>
      ))}
    </div>
  );
}
