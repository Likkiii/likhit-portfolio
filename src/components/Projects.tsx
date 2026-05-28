import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { projects } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

type Filter = "all" | "featured";

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const [hovered, setHovered] = useState<string | null>(null);
  const filtered =
    filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects"
          label="04 — Projects"
          title="Things I've built"
          subtitle="Hackathon portals, production apps, and passion projects."
        />

        <div className="mb-8 flex gap-2">
          {(["all", "featured"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`relative overflow-hidden rounded-full px-4 py-2 text-sm capitalize transition ${
                filter === f
                  ? "text-cyan-300"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 bg-cyan-500/20 ring-1 ring-cyan-500/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{f === "featured" ? "Featured" : "All"}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                onHoverStart={() => setHovered(project.title)}
                onHoverEnd={() => setHovered(null)}
              >
                <TiltCard glow={hovered === project.title}>
                  <article className="glass group flex h-full flex-col rounded-2xl p-6 transition hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-bold text-white transition group-hover:text-cyan-300">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.div
                          animate={{ rotate: hovered === project.title ? [0, -10, 10, 0] : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Star className="shrink-0 fill-amber-400 text-amber-400" size={18} />
                        </motion.div>
                      )}
                    </div>
                    <p className="mt-1 font-mono text-xs text-slate-500">{project.period}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-violet-500/20 bg-violet-500/10 px-2 py-0.5 font-mono text-xs text-violet-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-4 border-t border-white/5 pt-4">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300"
                        >
                          <ExternalLink size={16} />
                          Live demo
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white"
                        >
                          <GitHubIcon size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
