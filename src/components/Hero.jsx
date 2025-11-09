import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0B0B12] via-[#0A0A10] to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(147,51,234,0.25)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-4 py-28 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-left text-4xl font-bold leading-tight sm:text-6xl"
        >
          Crafting futuristic web experiences
          <span className="block bg-gradient-to-tr from-fuchsia-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">with motion and detail</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 max-w-2xl text-left text-white/80"
        >
          I design and build delightful, high-performance interfaces with a focus on smooth interactions and tasteful 3D moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-500/20 transition-transform hover:-translate-y-0.5">View Projects</a>
          <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">Contact Me</a>
        </motion.div>
      </div>
    </section>
  );
}
