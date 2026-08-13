import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import { siteConfig } from "../lib/config";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#journey" },
  { label: "Beta", href: "#beta" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0b0d14]/85 backdrop-blur-xl">
      <div className="container flex h-[68px] items-center justify-between">
        <a href="#" aria-label="MyAcumen home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={siteConfig.apkUrl}
            className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-indigo-500 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400"
          >
            <Download size={16} />
            Download Beta
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#0b0d14] px-5 py-4 md:hidden">
          <nav className="container flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href={siteConfig.apkUrl}
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 text-sm font-semibold text-white"
            >
              <Download size={17} />
              Download Android Beta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
