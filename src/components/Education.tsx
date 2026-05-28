import { motion } from "framer-motion";
import { education, awards, certifications } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { Trophy } from "lucide-react";

export function Education() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="education"
          label="05 — Education & Awards"
          title="Academic journey"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-xs text-cyan-400">{edu.period}</p>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{edu.school}</h3>
                <p className="text-slate-300">{edu.degree}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {edu.location} · {edu.score}
                </p>
                <p className="mt-3 text-sm text-slate-400">{edu.activities}</p>
                <ul className="mt-4 space-y-1">
                  {edu.achievements.map((a) => (
                    <li key={a} className="text-sm text-slate-400">
                      · {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-amber-400">
                <Trophy size={20} />
                <h3 className="font-display text-lg font-semibold text-white">Awards</h3>
              </div>
              <ul className="space-y-3">
                {awards.map((a) => (
                  <li key={a.title} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-slate-200">{a.title}</p>
                    <p className="text-xs text-slate-500">
                      {a.org} · {a.year}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white">Certifications</h3>
              <ul className="mt-4 space-y-2">
                {certifications.map((c) => (
                  <li key={c} className="text-sm text-slate-400">
                    · {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
