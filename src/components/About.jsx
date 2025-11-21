export default function About() {
  return (
    <section id="ueber" className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10">
      <div className="grid items-start gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Über PixelForge</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            PixelForge ist ein kleines Webdesign-Studio, das Unternehmen hilft, einen professionellen Online-Auftritt zu bekommen – einfach, günstig und schnell.
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#0A84FF]"></span> Modernes, minimalistisches Design</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#0A84FF]"></span> Mobile-first Umsetzung</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#0A84FF]"></span> Klare Strukturen & schnelle Ladezeiten</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
