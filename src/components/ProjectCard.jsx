import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tags, link, image }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/[0.08]"
    >
      <div className="relative h-44 w-full overflow-hidden rounded-xl">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="h-full w-full bg-gradient-to-tr from-fuchsia-600/40 to-indigo-500/40" />
        )}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
             style={{background:"radial-gradient(80% 80% at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)"}} />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wide text-white/70">Case Study</span>
        </div>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-xs text-white/70">{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
