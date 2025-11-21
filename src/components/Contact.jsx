import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      // For now, just simulate success. Can be wired to backend later.
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16 md:px-8 lg:px-10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Kontakt</h2>
          <p className="mt-4 text-slate-600">Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Schreiben Sie mir – ich melde mich schnell zurück.</p>
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p><strong>E-Mail:</strong> hallo@pixelforge.studio</p>
            <p className="mt-2"><strong>Standort:</strong> Lokal, flexibel und nah am Kunden</p>
          </div>
        </div>
        <div className="md:col-span-7">
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/20" placeholder="Max Mustermann" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm font-medium text-slate-700">E-Mail</label>
                <input name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/20" placeholder="max@beispiel.de" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Nachricht</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/20" placeholder="Worum geht es?" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#0A84FF] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0674e4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A84FF] focus-visible:ring-offset-2">
              Unverbindlich anfragen
            </button>
            {status === 'success' && (
              <p className="mt-3 text-sm text-green-600">Vielen Dank! Ihre Nachricht wurde gesendet.</p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-sm text-red-600">Ups, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
