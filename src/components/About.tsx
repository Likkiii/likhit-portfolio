import { motion } from "framer-motion";
import { MapPin, Briefcase, Mail } from "lucide-react";
import { profile, interests } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Briefcase, label: "Current", value: profile.title },
  { icon: Mail, label: "Email", value: profile.email, href: `https://mail.google.com/mail/?view=cm&to=${profile.email}` },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          label="01 — About"
          title="A bit about me"
          subtitle="Engineer by day, athlete & dancer by night."
        />

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            {profile.about.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4 text-base leading-relaxed text-slate-300 last:mb-0 sm:text-lg">
                {para}
              </p>
            ))}
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass flex h-full flex-col rounded-2xl p-6"
            >
              <p className="mb-4 text-xs uppercase tracking-wider text-slate-500">Things I love</p>
              <div className="grid flex-1 grid-cols-3 content-start gap-3 sm:grid-cols-4">
                {interests.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="flex cursor-default flex-col items-center gap-1.5 rounded-xl border border-white/5 bg-white/5 p-3 text-center transition hover:border-cyan-500/30 hover:bg-cyan-500/10"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-[11px] leading-tight text-slate-400">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="flex h-full flex-col gap-4">
              {facts.map(({ icon: Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass flex flex-1 items-center gap-4 rounded-xl p-5"
                >
                  <div className="shrink-0 rounded-lg bg-cyan-500/10 p-2.5 text-cyan-400">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block truncate text-sm text-white transition hover:text-cyan-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-white">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
