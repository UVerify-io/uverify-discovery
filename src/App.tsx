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
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      if (
        window.location.href.includes('verify') ||
        window.location.href.includes('create')
      ) {
        window.location.href = window.location.href.replace(
          /^https?:\/\/[^/]+/,
          'https://app.uverify.io'
        );
      }

      const hash = window.location.hash;
      if (hash) {
        console.log(hash);
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
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
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen text-white">
      <div
        className="absolute top-8 left-8 flex items-center justify-center flex-col z-10"
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
      <div className="absolute top-8 right-8 z-10">
        <Button
          label="Launch DApp"
          color="white"
          variant="glass"
          onClick={() => {
            window.open('https://app.uverify.io', '_self');
          }}
        />
      </div>

      <section
        id="about"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-main-gradient"
      >
        <About />
      </section>

      <section
        id="explanation"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-explanation-gradient"
      >
        <Explanation />
      </section>

      <section
        id="features"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-features-gradient"
      >
        <Features />
      </section>

      <section
        id="how-to"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-main-gradient"
      >
        <HowTo />
      </section>

      <section
        id="team"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-blue-950"
      >
        <Team />
      </section>

      <section
        id="use-cases"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-blue-600"
      >
        <UseCases />
      </section>

      <section
        id="roadmap"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-blue-600"
      >
        <Roadmap />
      </section>

      <section
        id="impress"
        className="snap-always snap-center min-h-screen flex items-center justify-center bg-main-gradient"
      >
        <Contact />
      </section>
    </div>
  );
}

export default App;
