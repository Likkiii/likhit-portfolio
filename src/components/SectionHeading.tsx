import { motion } from "framer-motion";

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ id, label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      className="mb-12 scroll-mt-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-cyan-400/80">
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
      />
      {subtitle && <p className="mt-4 max-w-2xl text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}
