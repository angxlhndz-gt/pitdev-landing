import SectionHeader from './SectionHeader.jsx';
import { site } from '../config/site.js';

export default function Services() {
  return (
    <section id="servicios" className="relative border-t border-white/10 bg-[#050907] px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pit-neon/70 to-transparent" aria-hidden="true" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Servicios" title="Soluciones digitales para operar mejor">
          Herramientas claras, utiles y escalables para negocios que necesitan presencia, control y eficiencia.
        </SectionHeader>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {site.services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-panel transition hover:-translate-y-1 hover:border-pit-neon/[0.55] hover:bg-pit-neon/[0.055]"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-lg border border-pit-neon/[0.28] bg-pit-neon/10 text-pit-neon transition group-hover:shadow-glow">
                <Icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-pit-ink/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
