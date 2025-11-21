import { CheckCircle } from 'lucide-react';

const items = [
  { title: 'Günstige Startpreise', desc: 'Ideal für kleine Budgets – ohne Kompromisse beim Design.' },
  { title: 'Fertig in 48 Stunden', desc: 'Schnelle Umsetzung mit klarem Prozess und engem Austausch.' },
  { title: 'Persönliche Betreuung', desc: 'Direkter Kontakt, transparente Kommunikation, fester Ansprechpartner.' },
];

export default function Benefits() {
  return (
    <section id="vorteile" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Warum mit mir arbeiten?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle className="h-6 w-6 text-[#0A84FF]" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
