import { motion } from "framer-motion";
import { MapPin, Briefcase, Mail } from "lucide-react";
import { profile, interests } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Briefcase, label: "Current", value: "SDE-I @ Exotel" },
  { icon: Mail, label: "Email", value: profile.email },
];

export function About() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          label="01 — About"
          title="A bit about me"
          subtitle="Engineer by day, athlete & dancer by night."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            {profile.about.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)} className="mb-4 text-lg leading-relaxed text-slate-300 last:mb-0">
                {para}
              </p>
            ))}
          </motion.div>

          <div className="space-y-4">
            {facts.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass flex items-start gap-4 rounded-xl p-5"
              >
                <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                  <p className="mt-1 text-sm text-white">{value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5"
            >
              <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">Things I love</p>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {interests.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex cursor-default flex-col items-center gap-1 rounded-xl border border-white/5 bg-white/5 p-3 text-center transition hover:border-cyan-500/30 hover:bg-cyan-500/10"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-[11px] text-slate-400">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
