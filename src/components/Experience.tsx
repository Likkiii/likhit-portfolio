import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, X } from "lucide-react";
import { experience } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const [lightbox, setLightbox] = useState<string | null>(null);

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="experience" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          label="02 — Experience"
          title="Where I've worked"
          subtitle="Design it. Deploy it. Scale it."
        />

        <div className="relative space-y-4 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-500/50 before:to-violet-500/20 md:before:left-[11px] md:space-y-5">
          {experience.map((job, i) => {
            const isOpen = open.has(i);

            return (
              <motion.article
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
                className="relative pl-8 md:pl-12"
              >
                <span className="absolute left-0 top-5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#07070b] md:left-1 md:top-6 md:h-5 md:w-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                </span>

                <div className="glass overflow-hidden rounded-2xl transition hover:border-cyan-500/20">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-4 p-6 text-left md:p-8"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-display text-xl font-bold text-white">{job.role}</h3>
                          <p className="mt-1 text-cyan-400">{job.company}</p>
                        </div>
                        <div className="shrink-0 text-sm text-slate-500 sm:text-right">
                          <p>{job.period}</p>
                          <p>{job.location}</p>
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 text-xs text-violet-300">
                          {job.type}
                        </span>
                        {!isOpen && (
                          <span className="text-xs text-slate-500">
                            {job.highlights.length} highlights · {job.tech.length} technologies
                          </span>
                        )}
                      </div>
                    </div>

                    <ChevronDown
                      size={20}
                      className={`mt-1 shrink-0 text-slate-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cyan-400" : ""
                      }`}
                      aria-hidden
                    />
                  </button>

                  {job.badge && (
                    <div className="border-t border-white/5 px-6 pb-5 pt-4 md:px-8">
                      <motion.button
                        type="button"
                        onClick={() => setLightbox(job.badge!.image)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300 transition hover:border-amber-500/50 hover:bg-amber-500/20"
                      >
                        <Award size={16} />
                        {job.badge.label}
                      </motion.button>
                    </div>
                  )}

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`px-6 pb-6 md:px-8 md:pb-8 ${
                        job.badge ? "pt-4" : "border-t border-white/5"
                      }`}
                    >
                      <ul className={`space-y-2 ${job.badge ? "" : "mt-5"}`}>
                        {job.highlights.map((point) => (
                          <li
                            key={point.slice(0, 40)}
                            className="flex gap-2 text-sm leading-relaxed text-slate-400"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                            {point}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-h-[85vh] max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute -right-3 -top-3 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <X size={18} />
              </button>
              <img src={lightbox} alt="Certificate" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
