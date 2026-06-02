import { ExternalLink, MessageCircle, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { getWhatsAppUrl, site } from '../config/site.js';
import ButtonLink from './ButtonLink.jsx';
import SectionHeader from './SectionHeader.jsx';
import SocialLinks from './SocialLinks.jsx';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // The form is visual for now; submission prepares a WhatsApp message.
    const message = [
      'Hola PitDev, quiero hablar sobre un proyecto.',
      `Nombre: ${formData.get('name') || ''}`,
      `Teléfono: ${formData.get('phone') || ''}`,
      `Tipo de proyecto: ${formData.get('projectType') || ''}`,
      `Mensaje: ${formData.get('message') || ''}`,
    ].join('\n');

    window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" className="relative bg-pit-black px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 circuit-grid opacity-35" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contacto" title="Hablemos de tu proyecto">
          Cuéntanos qué necesita tu negocio y te ayudamos a encontrar una solución digital adecuada.
        </SectionHeader>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
            <h3 className="text-2xl font-bold text-white">Canales directos</h3>
            <p className="mt-4 leading-8 text-pit-ink/[0.72]">
              Escríbenos para cotizar una página, revisar una idea de sistema o adaptar una demo a tu negocio.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink
                href={getWhatsAppUrl('Hola PitDev, quiero conversar sobre mi proyecto.')}
                icon={MessageCircle}
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </ButtonLink>
              <ButtonLink href={site.social.instagram} icon={FaInstagram} variant="secondary" target="_blank" rel="noreferrer">
                Ver Instagram
              </ButtonLink>
              <ButtonLink href={site.social.facebook} icon={FaFacebookF} variant="secondary" target="_blank" rel="noreferrer">
                Ver Facebook
              </ButtonLink>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-pit-neon">Redes</p>
              <SocialLinks />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-pit-neon/20 bg-pit-panel/[0.84] p-5 shadow-panel md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-pit-ink">Nombre</span>
                <input
                  name="name"
                  type="text"
                  required
                  className="focus-ring w-full rounded-lg border border-white/10 bg-black/[0.35] px-4 py-3 text-white placeholder:text-pit-ink/[0.35] focus:border-pit-neon"
                  placeholder="Tu nombre"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-pit-ink">Teléfono</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="focus-ring w-full rounded-lg border border-white/10 bg-black/[0.35] px-4 py-3 text-white placeholder:text-pit-ink/[0.35] focus:border-pit-neon"
                  placeholder="Tu número"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-pit-ink">Tipo de proyecto</span>
              <select
                name="projectType"
                required
                className="focus-ring w-full rounded-lg border border-white/10 bg-black/[0.35] px-4 py-3 text-white focus:border-pit-neon"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {site.services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-pit-ink">Mensaje</span>
              <textarea
                name="message"
                rows="5"
                required
                className="focus-ring w-full resize-none rounded-lg border border-white/10 bg-black/[0.35] px-4 py-3 text-white placeholder:text-pit-ink/[0.35] focus:border-pit-neon"
                placeholder="Cuéntanos qué necesitas"
              />
            </label>

            <button
              type="submit"
              className="focus-ring mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-pit-neon bg-pit-neon px-5 py-3 text-sm font-bold text-pit-black shadow-glow transition hover:bg-pit-mint sm:w-auto"
            >
              <Send className="size-4" aria-hidden="true" />
              <span>Enviar por WhatsApp</span>
            </button>
            <p className="mt-4 flex items-center gap-2 text-sm text-pit-ink/[0.55]">
              <ExternalLink className="size-4" aria-hidden="true" />
              Se abrirá WhatsApp con tu mensaje listo para enviar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
