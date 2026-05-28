import { motion } from "framer-motion";
import { experience } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          label="02 — Experience"
          title="Where I've worked"
          subtitle="From campus hackathons to production systems at scale."
        />

        <div className="relative space-y-8 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-500/50 before:to-violet-500/20 md:before:left-[11px]">
          {experience.map((job, i) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#07070b] md:left-1 md:h-5 md:w-5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>

              <div className="glass rounded-2xl p-6 transition hover:border-cyan-500/20 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{job.role}</h3>
                    <p className="mt-1 text-cyan-400">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <p>{job.period}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                <span className="mt-3 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-0.5 text-xs text-violet-300">
                  {job.type}
                </span>

                <ul className="mt-5 space-y-2">
                  {job.highlights.map((point) => (
                    <li key={point.slice(0, 40)} className="flex gap-2 text-sm leading-relaxed text-slate-400">
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
