import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { profile } from "../data/profile";

const stats = profile.stats;

function AnimatedStat({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.floor(display).toString();

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-white sm:text-4xl">
      {formatted}
      <span className="gradient-text">{suffix}</span>
    </span>
  );
}

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85 }}
      className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + i * 0.08 }}
          className="glass rounded-xl px-4 py-5 text-center transition hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.4)]"
        >
          <AnimatedStat value={stat.value} suffix={stat.suffix} />
          <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
