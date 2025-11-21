export default function Showcase() {
  return (
    <section id="beispiele" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Beispiel-Websites</h2>
        <p className="mt-2 text-slate-600">Hier sehen Sie Beispielprojekte</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <p className="text-sm font-medium text-slate-800">Projekt {i}</p>
                <span className="text-xs text-slate-500">Platzhalter</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
