import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { site } from '../config/site.js';

const socials = [
  {
    label: 'WhatsApp',
    href: site.social.whatsapp,
    icon: FaWhatsapp,
  },
  {
    label: 'Facebook',
    href: site.social.facebook,
    icon: FaFacebookF,
  },
  {
    label: 'Instagram',
    href: site.social.instagram,
    icon: FaInstagram,
  },
];

export default function SocialLinks({ className = '', iconClassName = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Redes sociales de PitDev">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className={`focus-ring grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-pit-ink transition hover:border-pit-neon/60 hover:bg-pit-neon/10 hover:text-pit-neon ${iconClassName}`}
        >
          <Icon className="size-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
