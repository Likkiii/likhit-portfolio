import { motion } from "framer-motion";

const lines = [
  { text: "const likhit = {", delay: 0 },
  { text: '  role: "Software Engineer-I",', delay: 0.1, accent: true },
  { text: '  stack: ["Spring Boot", "Next.js", "K8s"],', delay: 0.2 },
  { text: "  loves: [", delay: 0.3 },
  { text: '    "automating workflows",', delay: 0.4, accent: true },
  { text: '    "vibing to K-pop"', delay: 0.5, accent: true },
  { text: '    "chasing speed and medals"', delay: 0.6, accent: true },
  { text: "  ],", delay: 0.7 },
  { text: "  coffee: true ☕", delay: 0.8, accent: true },
  { text: "};", delay: 0.9 },
];

const floatingTags = [
  { label: "React", x: "88%", y: "8%", delay: 0 },
  { label: "Java", x: "-8%", y: "35%", delay: 0.2 },
  { label: "K8s", x: "92%", y: "55%", delay: 0.4 },
  { label: "Python", x: "-5%", y: "78%", delay: 0.6 },
];

export function HeroVisual() {
  return (
    <div className="relative hidden lg:block">
      {floatingTags.map((tag) => (
        <motion.span
          key={tag.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 1 + tag.delay },
            scale: { delay: 1 + tag.delay },
            y: { duration: 4 + tag.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute z-10 whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300 backdrop-blur-sm"
          style={{ left: tag.x, top: tag.y }}
        >
          {tag.label}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="gradient-border rounded-2xl"
      >
        <div className="gradient-border-inner overflow-hidden rounded-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-500">likhit.ts</span>
          </div>
          <pre className="overflow-hidden p-5 font-mono text-[13px] leading-relaxed">
            {lines.map((line) => (
              <motion.div
                key={line.text}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + line.delay }}
                className={line.accent ? "text-cyan-400" : "text-slate-400"}
              >
                {line.text}
              </motion.div>
            ))}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block h-4 w-2 bg-cyan-400 align-middle"
            />
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
