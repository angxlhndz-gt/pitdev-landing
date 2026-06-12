import SectionHeader from './SectionHeader.jsx';
import { site } from '../config/site.js';

export default function Services() {
  return (
    <section id="servicios" className="relative border-t border-white/10 bg-[#050907] px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(57,255,136,0.08),transparent_22rem),radial-gradient(circle_at_86%_70%,rgba(84,230,255,0.055),transparent_20rem)]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pit-neon/70 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="Servicios" title="Soluciones digitales para operar mejor">
          Herramientas claras, utiles y escalables para negocios que necesitan presencia, control y eficiencia.
        </SectionHeader>

        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4" data-stagger>
          {site.services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              data-stagger-item
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-pit-neon/[0.68] hover:bg-pit-neon/[0.055] hover:shadow-[0_22px_70px_rgba(57,255,136,0.12)]"
            >
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_25%_0%,rgba(57,255,136,0.16),transparent_14rem)] opacity-0 transition duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative mb-5 grid size-12 place-items-center rounded-lg border border-pit-neon/[0.28] bg-pit-neon/10 text-pit-neon transition duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-glow">
                <Icon className="size-6 transition duration-300 group-hover:rotate-3" aria-hidden="true" />
              </div>
              <h3 className="relative text-lg font-bold text-white">{title}</h3>
              <p className="relative mt-3 text-sm leading-7 text-pit-ink/70">{description}</p>
              <div className="relative mt-5 h-px w-16 bg-gradient-to-r from-pit-neon/70 to-transparent opacity-50 transition duration-300 group-hover:w-24 group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
