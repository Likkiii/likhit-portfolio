import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React, Vite & Tailwind.
        </p>
        <p className="font-mono text-xs text-slate-600">
          SDE @ Exotel · VIT CSE &apos;24
        </p>
      </div>
    </footer>
  );
}
