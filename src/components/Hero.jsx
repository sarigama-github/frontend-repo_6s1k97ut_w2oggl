import Spline from '@splinetool/react-spline';

export default function Hero() {
  const handleScroll = () => {
    const el = document.getElementById('beispiele');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 py-24 md:px-8 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-600/20">
            PixelForge • Webdesign
          </span>
          <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Moderne Websites für kleine Unternehmen
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Ich erstelle schnelle, einfache und bezahlbare Websites – perfekt für lokale Betriebe.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button onClick={handleScroll} className="inline-flex items-center justify-center rounded-lg bg-[#0A84FF] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0674e4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A84FF] focus-visible:ring-offset-2">
              Kostenloses Beispiel ansehen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
