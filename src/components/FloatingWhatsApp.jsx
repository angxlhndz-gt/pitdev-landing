import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl } from '../config/site.js';

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl('Hola PitDev, quiero información sobre sus soluciones digitales.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp de PitDev"
      title="WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-lg border border-pit-neon bg-pit-neon text-pit-black shadow-glow transition hover:-translate-y-1 hover:bg-pit-mint"
    >
      <FaWhatsapp className="size-7" aria-hidden="true" />
    </a>
  );
}
