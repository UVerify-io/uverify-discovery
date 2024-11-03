import About from './pages/About';
import Contact from './pages/Contact';
import Explanation from './pages/Explanation';
import Features from './pages/Features';
import HowTo from './pages/HowTo';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import UseCases from './pages/UseCases';
import Logo from './assets/uverify.svg';
import Button from './components/Button';
import { useEffect, useRef, useState } from 'react';
import TermsOfUse from './pages/TermsOfUse';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

export default function App() {
  const [currentSection, setCurrentSection] = useState(
    ['#terms-of-use', '#privacy-policy'].includes(window.location.hash)
      ? 'terms-of-use'
      : ''
  );
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.href.includes('/verify') ||
        window.location.href.includes('/create')
      ) {
        window.location.href = window.location.href.replace(
          /^https?:\/\/[^/]+/,
          'https://app.uverify.io'
        );
      }

      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          if (['#terms-of-use', '#privacy-policy', '#impress'].includes(hash)) {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-dvh text-white">
      <div
        className={`absolute top-8 left-8 flex items-center justify-center flex-col z-10 transition-opacity duration-500 ${
          currentSection === 'terms-of-use' ||
          currentSection === 'privacy-policy'
            ? 'opacity-0'
            : 'opacity-100'
        }`}
        onClick={() => {
          window.open('https://uverify.io', '_self');
        }}
      >
        <img
          src={Logo}
          alt="UVerify Logo"
          className="w-16 h-16 mb-1 md:w-24 md:h-24 h-xs:h-16 h-xs:w-16"
        />
        <p className="font-bold text-sm text-white uppercase md:text-md">
          UVerify.io
        </p>
      </div>
      <div
        className={`absolute top-8 right-8 z-10 transition-opacity duration-500 ${
          currentSection === 'terms-of-use' ||
          currentSection === 'privacy-policy'
            ? 'opacity-0'
            : 'opacity-100'
        }`}
      >
        <Button
          label="Launch DApp"
          color="white"
          variant="glass"
          onClick={() => {
            window.open('https://app.uverify.io', '_self');
          }}
        />
      </div>

      {sections.map(({ id, component, background, snapPosition }, index) => (
        <section
          id={id}
          key={id}
          ref={(section) => (sectionsRef.current[index] = section)}
          className={`snap-always snap-${snapPosition} min-h-screen flex items-center justify-center ${background}`}
        >
          {component}
        </section>
      ))}
    </div>
  );
}

const sections = [
  {
    id: 'about',
    component: <About />,
    background: 'bg-main-gradient',
    snapPosition: 'center',
  },
  {
    id: 'explanation',
    component: <Explanation />,
    background: 'bg-explanation-gradient',
    snapPosition: 'center',
  },
  {
    id: 'features',
    component: <Features />,
    background: 'bg-features-gradient',
    snapPosition: 'center',
  },
  {
    id: 'how-to',
    component: <HowTo />,
    background: 'bg-main-gradient',
    snapPosition: 'center',
  },
  {
    id: 'team',
    component: <Team />,
    background: 'bg-blue-950',
    snapPosition: 'center',
  },
  {
    id: 'use-cases',
    component: <UseCases />,
    background: 'bg-blue-600',
    snapPosition: 'center',
  },
  {
    id: 'roadmap',
    component: <Roadmap />,
    background: 'bg-blue-600',
    snapPosition: 'center',
  },
  {
    id: 'impress',
    component: <Contact />,
    background: 'bg-main-gradient',
    snapPosition: 'center',
  },
  {
    id: 'terms-of-use',
    component: <TermsOfUse />,
    background: 'bg-blue-950',
    snapPosition: 'start',
  },
  {
    id: 'privacy-policy',
    component: <PrivacyPolicy />,
    background: 'bg-blue-950',
    snapPosition: 'start',
  },
];
