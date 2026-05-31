import { motion } from "framer-motion";
import { skillCategories } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="skills"
          label="03 — Skills"
          title="Tech stack & tools"
          subtitle="Backend • Cloud • AI"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <TiltCard>
                <div className="glass group h-full rounded-2xl p-6 transition hover:border-cyan-500/30 hover:shadow-[0_0_35px_-12px_rgba(167,139,250,0.35)]">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 font-mono text-xs text-cyan-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white group-hover:text-cyan-300">
                      {cat.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + j * 0.03 }}
                        className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
