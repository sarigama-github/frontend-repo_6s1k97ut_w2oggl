const plans = [
  { name: 'Einfache Website', pages: '1 Seite', price: '99 €', features: ['Modernes Template', 'Kontaktformular', 'Impressum & Datenschutz'] },
  { name: 'Kleine Website', pages: '3 Seiten', price: '199 €', features: ['Individuelles Layout', 'Bis zu 3 Unterseiten', 'Basis-SEO & Tracking'] },
  { name: 'Komplett-Website', pages: '5 Seiten', price: '299 €', features: ['Maßgeschneidertes Design', 'Bis zu 5 Unterseiten', 'Erweiterte Funktionen'] },
];

export default function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Leistungen</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <p className="text-sm text-slate-500">{p.pages}</p>
              </div>
              <p className="text-xl font-bold text-[#0A84FF]">{p.price}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A84FF]"></span>
                  {f}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-[#0A84FF] hover:bg-white">
              Details anfragen
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
