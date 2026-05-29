import { motion } from "framer-motion";
import { Download, Mail, Send } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "./Icons";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="contact"
          label="06 — Contact"
          title="Let's connect"
          subtitle="Open to interesting conversations, collaborations, and opportunities."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border relative overflow-hidden rounded-3xl"
        >
          <div className="gradient-border-inner relative p-10 text-center md:p-16">
            <motion.div
              className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-[80px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-violet-500/20 blur-[80px]"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <h3 className="relative font-display text-3xl font-bold text-white sm:text-5xl">
              Want to work{" "}
              <span className="gradient-text-animated">together?</span>
            </h3>
            <p className="relative mx-auto mt-4 max-w-lg text-slate-400">
              Drop me an email or connect on LinkedIn — I&apos;d love to hear from you.
            </p>

            <div className="relative mt-8 flex justify-center">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="btn-shimmer glow-ring inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold text-[#07070b]"
              >
                <Send size={18} />
                {profile.email}
              </MagneticButton>
            </div>

            <div className="relative mt-10 flex flex-wrap justify-center gap-6">
              {[
                { href: profile.links.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
                { href: profile.links.github, Icon: GitHubIcon, label: "GitHub" },
                { href: profile.links.leetcode, Icon: LeetCodeIcon, label: "LeetCode" },
                { href: profile.links.resume, Icon: Download, label: "Résumé" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-400"
                >
                  <Icon size={20} />
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
