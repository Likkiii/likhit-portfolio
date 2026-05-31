import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./Icons";
import { projects } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

export function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="projects"
          label="04 — Projects"
          title="Things I've built"
          subtitle="Selected projects & builds."
        />

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="h-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              onHoverStart={() => setHovered(project.title)}
              onHoverEnd={() => setHovered(null)}
            >
              <TiltCard glow={hovered === project.title} className="h-full">
                <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]">
                  {project.image && (
                    <div className="relative aspect-[16/9] overflow-hidden border-b border-white/5">
                      <img
                        src={project.image}
                        alt={`${project.title} cover`}
                        loading="lazy"
                        width={640}
                        height={360}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0b12] via-transparent to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold text-white transition group-hover:text-cyan-300">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-slate-500">{project.period}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                    <div className="mt-auto pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-violet-500/20 bg-violet-500/10 px-2 py-0.5 font-mono text-xs text-violet-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {(project.links.live || project.links.github || project.links.githubBackend) && (
                        <div className="mt-4 flex gap-4 border-t border-white/5 pt-4">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300"
                          >
                            <ExternalLink size={16} />
                            Live
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
                            {project.links.githubBackend ? "Frontend" : "Code"}
                          </a>
                        )}
                        {project.links.githubBackend && (
                          <a
                            href={project.links.githubBackend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white"
                          >
                            <GitHubIcon size={16} />
                            Backend
                          </a>
                        )}
                      </div>
                    )}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
