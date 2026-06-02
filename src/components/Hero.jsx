import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, site } from '../config/site.js';
import AnimatedNetworkBackground from './AnimatedNetworkBackground.jsx';
import ButtonLink from './ButtonLink.jsx';

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl('Hola PitDev, quiero hablar sobre una solución digital para mi negocio.');

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <AnimatedNetworkBackground />
      <div className="circuit-grid absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,6,4,0.94)_0%,rgba(3,6,4,0.72)_48%,rgba(3,6,4,0.48)_100%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.78fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-pit-neon/[0.35] bg-pit-neon/[0.08] px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-pit-neon">
            <Sparkles className="size-4" aria-hidden="true" />
            {site.tagline}
          </div>
          <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
            Tecnología que impulsa tu negocio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pit-ink/[0.84] sm:text-xl">
            Creamos páginas web, sistemas de agenda, software personalizado, automatización y auditorías
            de red para negocios que quieren crecer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#servicios" icon={ArrowDown}>
              Ver servicios
            </ButtonLink>
            <ButtonLink href={whatsappUrl} icon={MessageCircle} variant="secondary" target="_blank" rel="noreferrer">
              Hablar por WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="tech-border scanline rounded-lg bg-pit-panel/[0.78] p-4 shadow-panel backdrop-blur md:p-5 lg:animate-floatSoft">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-pit-neon" />
              <span className="size-3 rounded-full bg-pit-cyan" />
              <span className="size-3 rounded-full bg-white/[0.45]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-pit-ink/[0.58]">pitdev.core</span>
          </div>
          <div className="space-y-4 font-mono text-sm text-pit-mint sm:text-base">
            {site.terminalLines.map((line, index) => (
              <p key={line} className="flex gap-3">
                <span className="text-pit-neon">&gt;</span>
                <span className={index === site.terminalLines.length - 1 ? 'text-white' : ''}>{line}</span>
              </p>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
            {['Web', 'Agenda', 'Red'].map((item) => (
              <div key={item} className="rounded-lg border border-pit-line bg-black/[0.24] px-3 py-2 text-center">
                <span className="block text-xs uppercase tracking-[0.18em] text-pit-ink/50">{item}</span>
                <span className="mt-1 block font-mono text-sm text-pit-neon">online</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
