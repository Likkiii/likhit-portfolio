import type { ReactNode } from "react";
import { useTilt } from "../hooks/useTilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function TiltCard({ children, className = "", glow = false }: TiltCardProps) {
  const { ref, onMove, onLeave } = useTilt(10);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className={`h-full ${glow ? "gradient-border rounded-2xl" : ""}`}
      >
        <div className={glow ? "gradient-border-inner h-full rounded-2xl" : "h-full"}>
          {children}
        </div>
      </div>
    </div>
  );
}
