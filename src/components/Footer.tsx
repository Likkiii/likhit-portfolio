import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <p className="text-center text-sm text-slate-500">
        © {year} {profile.name}
      </p>
    </footer>
  );
}
