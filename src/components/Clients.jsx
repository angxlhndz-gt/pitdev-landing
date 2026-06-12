import { ExternalLink, Globe2, MessageCircle, MonitorSmartphone } from 'lucide-react';
import { useState } from 'react';
import { getWhatsAppUrl, site } from '../config/site.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeader from './SectionHeader.jsx';

function ProjectPreview({ project }) {
  const [imageStatus, setImageStatus] = useState('loading');

  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#06100b]">
      {imageStatus !== 'error' ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onLoad={() => setImageStatus('loaded')}
          onError={() => setImageStatus('error')}
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${
            imageStatus === 'loaded' ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />
      ) : null}

      <div
        className={`absolute inset-0 grid place-items-center p-5 text-center transition duration-500 ${
          imageStatus === 'loaded' ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden={imageStatus === 'loaded'}
      >
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(57,255,136,0.28),transparent_18rem),linear-gradient(135deg,rgba(57,255,136,0.14),rgba(84,230,255,0.05)_42%,rgba(3,6,4,0.95))]"
          aria-hidden="true"
        />
        <div className="circuit-grid absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="relative max-w-xs">
          <div className="mx-auto mb-4 grid size-12 place-items-center rounded-lg border border-pit-neon/35 bg-pit-neon/10 text-pit-neon shadow-glow">
            <MonitorSmartphone className="size-6" aria-hidden="true" />
          </div>
          <p className="text-lg font-bold text-white">{project.title}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-pit-neon/80">
            {project.type}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section id="proyectos" className="relative border-t border-white/10 bg-pit-black px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(57,255,136,0.1),transparent_24rem),linear-gradient(180deg,rgba(5,9,7,0.98),rgba(3,6,4,1))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pit-neon/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="Proyectos" title="Clientes y trabajos realizados">
          Estos son algunos proyectos web desarrollados por PitDev para comunidades, marcas personales y
          negocios que buscan tener presencia digital profesional.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-2" data-stagger>
          {site.projects.map((project) => (
            <article
              key={project.title}
              data-stagger-item
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-panel transition duration-300 hover:-translate-y-1 hover:border-pit-neon/[0.55] hover:bg-pit-neon/[0.055]"
            >
              <ProjectPreview project={project} />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg border border-pit-neon/25 bg-pit-neon/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-pit-neon">
                  <Globe2 className="size-4" aria-hidden="true" />
                  <span>{project.type}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-pit-ink/[0.72]">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-pit-neon/70 bg-pit-neon/10 px-5 py-3 text-sm font-bold text-pit-neon transition hover:border-pit-neon hover:bg-pit-neon hover:text-pit-black hover:shadow-glow sm:w-fit"
                >
                  <span>Ver página</span>
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-lg border border-pit-neon/25 bg-pit-panel/[0.88] p-6 text-center shadow-panel sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:p-9 lg:text-left"
          data-animate="scale"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(57,255,136,0.16),transparent_18rem),linear-gradient(135deg,rgba(57,255,136,0.09),rgba(84,230,255,0.035)_44%,rgba(3,6,4,0.94))]"
            aria-hidden="true"
          />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-pit-neon/80 to-transparent" aria-hidden="true" />

          <div className="relative">
            <p className="text-2xl font-bold text-white sm:text-3xl">
              ¿Quieres una página web profesional para tu negocio?
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-pit-ink/[0.74] sm:text-base lg:mx-0">
              Creamos sitios modernos, rápidos y adaptados a tu marca para que tus clientes te encuentren,
              conozcan tus servicios y confíen más en tu negocio.
            </p>
          </div>
          <ButtonLink
            href={getWhatsAppUrl()}
            icon={MessageCircle}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-6 w-full px-6 sm:mx-auto sm:w-auto lg:mx-0 lg:mt-0 lg:shrink-0"
          >
            Cotizar mi página web
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
