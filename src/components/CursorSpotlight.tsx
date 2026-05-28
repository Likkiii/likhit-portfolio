import { useMousePosition } from "../hooks/useMousePosition";

export function CursorSpotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(34,211,238,0.07), transparent 45%)`,
      }}
      aria-hidden
    />
  );
}
