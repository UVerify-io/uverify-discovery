import About from './pages/About';
import Contact from './pages/Contact';
import Explanation from './pages/Explanation';
import Features from './pages/Features';
import HowTo from './pages/HowTo';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import UseCases from './pages/UseCases';

function App() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen text-white">
      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-main-gradient">
        <About />
      </section>

      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-explanation-gradient">
        <Explanation />
      </section>

      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-features-gradient">
        <Features />
      </section>

      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-main-gradient">
        <HowTo />
      </section>

      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-blue-950">
        <Team />
      </section>

      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-blue-600">
        <UseCases />
      </section>

      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-blue-600">
        <Roadmap />
      </section>

      <section className="snap-always snap-start min-h-screen flex items-center justify-center bg-main-gradient">
        <Contact />
      </section>
    </div>
  );
}

export default App;
