import { Menu } from 'lucide-react';
import { useState } from 'react';

const links = [
  { href: '#home', label: 'Start' },
  { href: '#ueber', label: 'Über' },
  { href: '#vorteile', label: 'Vorteile' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#beispiele', label: 'Beispiele' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-[#0A84FF]"></div>
          <span className="text-sm font-semibold tracking-tight text-slate-900">PixelForge</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto grid max-w-6xl gap-1 px-6 py-3 md:px-8 lg:px-10">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
