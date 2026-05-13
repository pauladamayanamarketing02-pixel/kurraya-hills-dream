import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/romantic", label: "Romantic" },
  { to: "/wedding-meeting", label: "Wedding & Meeting" },
  { to: "/restaurant-pool", label: "Restaurant & Pool" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Kurraya Hills" width={40} height={40} className="h-10 w-10 object-contain" />
          <div className="leading-none hidden sm:block">
            <div className="font-display text-xl tracking-wide text-emerald-deep">Kurraya</div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Hills · Singkawang</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-emerald-deep [&>span]:after:scale-x-100" }}
              className="text-[13px] tracking-wide uppercase text-foreground/80 hover:text-emerald-deep transition-colors"
            >
              <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-gold after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:[&]:after:scale-x-100">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.2em] uppercase border border-emerald-deep text-emerald-deep hover:bg-emerald-deep hover:text-cream transition-all"
        >
          Reserve
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-emerald-deep"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border mt-3">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide uppercase text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://wa.me/6281234567890"
              className="mt-2 inline-block px-5 py-2.5 text-xs tracking-[0.2em] uppercase border border-emerald-deep text-emerald-deep text-center"
            >
              Reserve
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
