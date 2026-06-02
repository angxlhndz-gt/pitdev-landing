import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { getWhatsAppUrl, site } from '../config/site.js';
import SocialLinks from './SocialLinks.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const quoteUrl = getWhatsAppUrl('Hola PitDev, quiero cotizar una solución digital para mi negocio.');

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-pit-black/[0.78] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="focus-ring flex min-w-0 items-center gap-3 rounded-lg"
          aria-label="PitDev inicio"
        >
          <img
            src="/logo.png"
            alt="PitDev Logo"
            className="h-10 w-auto max-w-12 shrink-0 rounded-md object-contain drop-shadow-[0_0_14px_rgba(57,255,136,0.22)] sm:h-12 sm:max-w-14"
          />
          <span className="min-w-0">
            <span className="block text-sm font-bold leading-5 text-white sm:text-base">{site.name}</span>
            <span className="block max-w-[150px] truncate text-[10px] leading-4 text-pit-ink/[0.62] sm:max-w-none sm:text-xs">
              {site.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {site.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-lg text-sm font-medium text-pit-ink/[0.76] transition hover:text-pit-neon"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <SocialLinks />
          <a
            href={quoteUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-pit-neon bg-pit-neon px-4 py-2 text-sm font-bold text-pit-black shadow-glow transition hover:bg-pit-mint"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            <span>Cotizar por WhatsApp</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Abrir menu"
          title="Menu"
        >
          {isOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-pit-black/95 px-4 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {site.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-lg px-2 py-3 text-sm font-semibold text-pit-ink transition hover:bg-white/[0.04] hover:text-pit-neon"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <SocialLinks />
              <a
                href={quoteUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-pit-neon bg-pit-neon px-4 py-2 text-sm font-bold text-pit-black shadow-glow transition hover:bg-pit-mint"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span>Cotizar</span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
