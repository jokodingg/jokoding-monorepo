import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useOrderForm } from '../order/OrderFormProvider';
import { useDocumentTitle } from '../lib/useDocumentTitle';
import { Link } from 'react-router-dom';
import { DEFAULT_STEPS, LANDINGS } from '../landing/landings';
import { DetectionIllustration } from '../landing/DetectionIllustration';

// Panel samping hero: ilustrasi khusus, foto portfolio pertama, atau daftar teknologi.
const HeroVisual = ({ landing }) => {
  if (landing.illustration === 'detection') return <DetectionIllustration />;
  const first = landing.portfolio[0];
  if (first) {
    return (
      <img
        src={first.image}
        alt={`${landing.h1}: ${first.title}`}
        width="960"
        height="540"
        className="aspect-video h-auto w-full rounded-2xl object-cover shadow-xl"
      />
    );
  }
  return (
    <div className="rounded-2xl bg-gray-900 p-8 shadow-xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">{landing.eyebrow}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {landing.tech.map((t) => (
          <span key={t} className="rounded-full border border-gray-700 px-4 py-2 text-gray-100">{t}</span>
        ))}
      </div>
    </div>
  );
};

const ServiceLanding = ({ landing }) => {
  useDocumentTitle(landing.title);
  const { open } = useOrderForm();
  const [openIndex, setOpenIndex] = useState(null);
  const steps = landing.steps ?? DEFAULT_STEPS;

  return (
    <main className="min-h-screen bg-[#f7f7f2] pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <header className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600">{landing.eyebrow}</p>
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{landing.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{landing.intro}</p>
            <p className="mt-3 text-sm text-gray-500">Berbasis di Semarang, melayani online ke seluruh Indonesia.</p>
            <button
              onClick={open}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
            >
              Konsultasi Gratis
            </button>
          </header>
          <HeroVisual landing={landing} />
        </div>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Layanan {landing.eyebrow}</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {landing.services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Alur Pengerjaan</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">{i + 1}</span>
                  <span className="pt-1 text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Teknologi</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {landing.tech.map((t) => (
                <span key={t} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-700">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {landing.portfolio.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Portfolio</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {landing.portfolio.map((p) => (
                <article key={p.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <img
                    src={p.image}
                    alt={`Portfolio ${landing.h1.toLowerCase()}: ${p.title}`}
                    width="960"
                    height="540"
                    loading="lazy"
                    className="aspect-video h-auto w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-2 text-gray-600">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="mt-20 max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">FAQ {landing.h1}</h2>
          <div className="mt-6 space-y-3">
            {landing.faqs.map((faq, i) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 bg-white">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left font-semibold text-gray-900"
                >
                  <h3>{faq.q}</h3>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <p className={`px-5 pb-5 text-gray-600 ${openIndex === i ? '' : 'hidden'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Layanan Lainnya</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {LANDINGS.filter((l) => l.path !== landing.path).map((l) => (
              <Link key={l.path} to={l.path} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-700 transition hover:border-emerald-500 hover:text-emerald-700">
                {l.navLabel}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServiceLanding;
