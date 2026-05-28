import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070b]" />

      <div className="aurora-blob absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/25 blur-[140px]" />
      <div
        className="aurora-blob absolute -right-32 top-1/4 h-[36rem] w-[36rem] rounded-full bg-violet-600/20 blur-[150px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[120px]"
        style={{ animationDelay: "-12s" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background:
            "conic-gradient(from 180deg, transparent, rgba(34,211,238,0.15), transparent, rgba(167,139,250,0.12), transparent)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="noise absolute inset-0 opacity-60 mix-blend-overlay" />
    </div>
  );
}
