import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Built with care — Smooth, modern, and fast.
        </p>
      </footer>
    </div>
  );
}

export default App;
