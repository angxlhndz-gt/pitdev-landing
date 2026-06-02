import { site } from '../config/site.js';
import SocialLinks from './SocialLinks.jsx';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020403] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-2xl font-black text-white">{site.name}</p>
          <p className="mt-2 text-sm leading-7 text-pit-ink/[0.62]">{site.footerServices}</p>
          <p className="mt-3 text-sm text-pit-ink/[0.44]">© 2026 PitDev. Todos los derechos reservados.</p>
        </div>
        <SocialLinks className="justify-center md:justify-end" />
      </div>
    </footer>
  );
}
