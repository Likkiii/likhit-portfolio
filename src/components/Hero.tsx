import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "./Icons";
import { profile } from "../data/profile";
import { useTypewriter } from "../hooks/useTypewriter";
import { HeroVisual } from "./HeroVisual";
import { StatsBar } from "./StatsBar";
import { MagneticButton } from "./MagneticButton";

function AnimatedName({ name }: { name: string }) {
  return (
    <span className="inline-flex flex-wrap">
      {name.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.04, duration: 0.5 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const role = useTypewriter(profile.roles);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-16 pt-28"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 mt-2 font-mono text-sm text-slate-500">Hello, world — I&apos;m</p>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl">
            <AnimatedName name={first} />
            <br />
            <span className="gradient-text-animated">
              <AnimatedName name={rest.join(" ")} />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-6 flex min-h-[2.5rem] items-center gap-2 text-lg sm:text-xl"
          >
            <span className="text-slate-500">I&apos;m a</span>
            <span className="font-medium text-white">
              {role}
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan-400 align-middle" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="glow-ring rounded-full btn-shimmer px-7 py-3.5 text-sm font-bold text-[#07070b] shadow-lg shadow-cyan-500/20"
            >
              View my work →
            </MagneticButton>
            <MagneticButton
              href={profile.links.resume}
              external
              className="glass rounded-full px-5 py-3.5 text-sm text-slate-200 hover:bg-white/10"
            >
              <span className="flex items-center gap-2">
                <Download size={18} />
                Résumé
              </span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { href: profile.links.github, Icon: GitHubIcon, label: "GitHub" },
              { href: profile.links.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
              { href: profile.links.leetcode, Icon: LeetCodeIcon, label: "LeetCode" },
              { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.15, y: -2 }}
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white/5 hover:text-cyan-400"
                aria-label={label}
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </motion.div>

          <StatsBar />
        </div>

        <HeroVisual />
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-cyan-400"
        aria-label="Scroll to about"
      >
        <ArrowDown className="animate-bounce" size={24} />
      </motion.a>
    </section>
  );
}
