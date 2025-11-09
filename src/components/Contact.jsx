import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-black to-[#0B0B12] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_10%_0%,rgba(236,72,153,0.15)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Let’s build something great
          </motion.h2>
          <p className="mt-3 text-white/70">Drop a line about your idea, timeline, and goals. I’ll reply within 24 hours.</p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! I will get back to you shortly.'); }}
            className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20" placeholder="Ada Lovelace" />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input required type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20" placeholder="you@domain.com" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-fuchsia-500/20 transition-transform hover:-translate-y-0.5">
              <Send size={16} /> Send message
            </button>
          </motion.form>

          <div className="mt-8 flex items-center gap-3 text-white/70">
            <Mail size={16} />
            <a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
