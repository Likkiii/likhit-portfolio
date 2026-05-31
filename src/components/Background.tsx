import { motion } from "framer-motion";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#07070b]" />

      <div className="aurora-blob absolute -left-40 top-0 h-[20rem] w-[20rem] rounded-full bg-cyan-500/15 blur-[110px] md:h-[32rem] md:w-[32rem] md:bg-cyan-500/18 md:blur-[140px]" />
      <div
        className="aurora-blob absolute -right-32 top-1/4 h-[22rem] w-[22rem] rounded-full bg-violet-600/12 blur-[110px] md:h-[36rem] md:w-[36rem] md:bg-violet-600/15 md:blur-[150px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[90px] md:h-96 md:w-96 md:bg-fuchsia-500/12 md:blur-[120px]"
        style={{ animationDelay: "-12s" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 md:h-[500px] md:w-[500px] md:opacity-25"
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
