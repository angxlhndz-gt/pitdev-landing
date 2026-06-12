import { site } from '../config/site.js';
import SectionHeader from './SectionHeader.jsx';

export default function About() {
  return (
    <section id="nosotros" className="bg-[#06100b] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Nosotros" title="Tecnología cercana para negocios reales" />

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div data-animate="left">
            <p className="text-lg leading-9 text-pit-ink/80">
              Somos PitDev, una empresa enfocada en crear soluciones digitales simples, funcionales y
              adaptadas a negocios locales. Nuestro objetivo es que cada cliente tenga herramientas que
              realmente le ayuden a trabajar mejor, organizarse mejor y verse más profesional.
            </p>
            <div className="mt-8 h-px w-full bg-gradient-to-r from-pit-neon/80 via-pit-cyan/40 to-transparent" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2" data-stagger>
            {site.strengths.map(({ label, icon: Icon }) => (
              <div
                key={label}
                data-stagger-item
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-pit-neon/[0.45] hover:bg-pit-neon/[0.055]"
              >
                <div className="mb-4 grid size-11 place-items-center rounded-lg border border-pit-neon/25 bg-pit-neon/10 text-pit-neon">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-white">{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
