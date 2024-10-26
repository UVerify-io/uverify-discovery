import About from './pages/About';
import Explanation from './pages/Explanation';
import Featrues from './pages/Features';

function App() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen text-white">
      <section className="snap-always snap-center min-h-screen flex items-center justify-center bg-about-gradient">
        <About />
      </section>

      <section className="snap-always snap-center min-h-screen flex items-center justify-center bg-explanation-gradient">
        <Explanation />
      </section>

      <section className="snap-always snap-center min-h-screen flex items-center justify-center bg-features-gradient">
        <Featrues />
      </section>
    </div>
  );
}

export default App;
