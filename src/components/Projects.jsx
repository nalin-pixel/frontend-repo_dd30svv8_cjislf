import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nebula Commerce',
    description: 'A blazing-fast storefront with edge rendering and immersive product previews.',
    tags: ['Next.js', 'Edge', '3D'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1523333830682-5792a0db529f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBDb21tZXJjZXxlbnwwfDB8fHwxNzYyNjkxMjQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Orbit Studio',
    description: 'Creative toolkit for generative visuals with real-time collaboration.',
    tags: ['Canvas', 'WebRTC', 'Framer Motion'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Pulse Dashboard',
    description: 'A data-rich analytics hub with buttery transitions and dark elegance.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_0%,rgba(99,102,241,0.15)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Featured Work
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
