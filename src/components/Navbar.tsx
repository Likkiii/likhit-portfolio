import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-[2px] z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#07070b]/85 backdrop-blur-xl shadow-lg shadow-black/20" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="group font-display text-lg font-bold tracking-tight text-white"
        >
          LA
          <span className="text-cyan-400 transition group-hover:text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative rounded-lg px-3 py-2 text-sm transition ${
                  active === link.id
                    ? "text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-cyan-500/15 ring-1 ring-cyan-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="hidden rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:from-cyan-500/25 hover:to-violet-500/25 md:inline-flex"
        >
          Get in touch
        </motion.a>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#07070b]/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`block rounded-lg px-3 py-3 ${
                      active === link.id ? "bg-cyan-500/15 text-cyan-300" : "text-slate-300 hover:bg-white/5"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.id;
                      setOpen(false);
                      document.body.style.overflow = "";
                      setTimeout(() => {
                        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-white/10 pt-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="block rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 px-4 py-3 text-center text-sm font-medium text-cyan-300"
                  onClick={() => setOpen(false)}
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
