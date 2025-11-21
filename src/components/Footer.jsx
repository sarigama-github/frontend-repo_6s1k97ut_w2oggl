export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-center text-sm text-slate-500 md:flex-row md:px-8 lg:px-10">
        <p>© {new Date().getFullYear()} PixelForge – Webdesign für kleine Unternehmen</p>
        <div className="flex items-center gap-4">
          <a href="#kontakt" className="hover:text-slate-700">Kontakt</a>
          <a href="#leistungen" className="hover:text-slate-700">Preise</a>
        </div>
      </div>
    </footer>
  );
}
