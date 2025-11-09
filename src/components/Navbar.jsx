import { useState, useEffect } from 'react';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClasses = scrolled
    ? 'backdrop-blur-md bg-black/50 shadow-lg shadow-purple-500/10'
    : 'bg-transparent';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${navClasses}`}> 
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 to-indigo-500 text-white shadow-lg shadow-fuchsia-500/30">
              <Rocket size={16} className="transition-transform group-hover:rotate-12" />
            </span>
            <span>My Portfolio</span>
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            <button onClick={() => scrollTo('projects')} className="text-sm text-white/70 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollTo('contact')} className="text-sm text-white/70 hover:text-white transition-colors">Contact</button>
            <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact');}} className="rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 transition-colors">Let’s talk</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
            <a href="mailto:hello@example.com" className="text-white/70 hover:text-white"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
