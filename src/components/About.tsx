import { motion } from "framer-motion";
import { MapPin, GraduationCap, Mail } from "lucide-react";
import { profile, interests } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE — VIT '24" },
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
          subtitle="Engineer by day, athlete & builder by passion."
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            {profile.about.split("\n\n").map((para) => (
              <p key={para.slice(0, 24)} className="mb-4 leading-relaxed text-slate-300 last:mb-0">
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
              <p className="mb-3 text-xs uppercase tracking-wider text-slate-500">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
