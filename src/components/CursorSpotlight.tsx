import { useEffect, useState } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(34,211,238,0.07), transparent 45%)`,
      }}
      aria-hidden
    />
  );
}

export function CursorSpotlight() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!isDesktop) return null;
  return <Spotlight />;
}
