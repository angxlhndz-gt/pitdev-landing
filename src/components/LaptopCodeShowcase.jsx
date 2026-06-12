import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap.js';

const productPills = [
  { label: 'WEB', position: 'left-2 top-12 sm:-left-2 sm:top-16', delay: '0s' },
  { label: 'AGENDA', position: 'right-3 top-5 sm:-right-3 sm:top-8', delay: '-1.4s' },
  { label: 'CRM', position: 'bottom-24 left-0 sm:-left-6 sm:bottom-28', delay: '-2.2s' },
  { label: 'STOCK', position: 'bottom-16 right-0 sm:-right-4 sm:bottom-20', delay: '-0.7s' },
  { label: 'RED', position: 'left-1/2 top-0 -translate-x-1/2 sm:-top-4', delay: '-3s' },
];

const codeLines = [
  { code: 'const pitdev = deploy({', tone: 'text-pit-mint' },
  { code: '  web: "presencia profesional",', tone: 'text-pit-ink/85' },
  { code: '  agenda: sync("WhatsApp"),', tone: 'text-pit-cyan' },
  { code: '  crm: trackClients(),', tone: 'text-pit-ink/85' },
  { code: '  stock: realtimeInventory(),', tone: 'text-pit-ink/85' },
  { code: '  network: auditReady()', tone: 'text-pit-neon' },
  { code: '});', tone: 'text-pit-mint' },
];

export default function LaptopCodeShowcase() {
  const rootRef = useRef(null);
  const laptopRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        laptopRef.current,
        { autoAlpha: 0, y: 28, rotateX: 10, rotateY: -14, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 1.15,
          ease: 'power3.out',
          delay: 0.25,
        },
      );

      gsap.to(laptopRef.current, {
        y: -46,
        rotateX: 4,
        rotateY: 8,
        scale: 1.035,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 62%',
          end: 'bottom top',
          scrub: 1.1,
        },
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto min-h-[430px] w-full max-w-[560px] py-8 sm:min-h-[500px] lg:py-0"
      aria-label="Laptop mostrando código animado de soluciones PitDev"
    >
      <div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pit-neon/15 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-8 top-16 h-28 rounded-full bg-pit-cyan/10 blur-3xl"
        aria-hidden="true"
      />

      {productPills.map((pill) => (
        <span
          key={pill.label}
          data-float-chip
          className={`product-orbit-chip absolute z-20 inline-flex min-h-9 items-center rounded-lg border border-pit-neon/35 bg-pit-black/70 px-3 py-2 font-mono text-xs font-bold tracking-[0.18em] text-pit-neon shadow-glow backdrop-blur-xl ${pill.position}`}
          style={{ '--float-delay': pill.delay }}
        >
          {pill.label}
        </span>
      ))}

      <div ref={laptopRef} className="laptop-stage relative z-10 mx-auto w-full max-w-[530px]">
        <div className="laptop-lid relative rounded-[1.25rem] border border-white/15 bg-white/[0.065] p-3 shadow-[0_34px_100px_rgba(0,0,0,0.52)] backdrop-blur-xl sm:p-4">
          <div
            className="absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(circle_at_20%_12%,rgba(57,255,136,0.23),transparent_18rem),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_45%,rgba(57,255,136,0.08))]"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-xl border border-pit-neon/25 bg-[#040806]/95 shadow-inner">
            <div className="circuit-grid absolute inset-0 opacity-30" aria-hidden="true" />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_72%_12%,rgba(84,230,255,0.16),transparent_15rem),linear-gradient(180deg,rgba(57,255,136,0.08),rgba(3,6,4,0.12))]"
              aria-hidden="true"
            />

            <div className="relative border-b border-white/10 px-4 py-3">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-pit-neon shadow-[0_0_14px_rgba(57,255,136,0.9)]" />
                  <span className="size-2.5 rounded-full bg-pit-cyan/80" />
                  <span className="size-2.5 rounded-full bg-white/40" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-pit-ink/50">
                  pitdev.deploy.jsx
                </span>
              </div>
            </div>

            <div className="relative min-h-[245px] px-4 py-5 sm:min-h-[300px] sm:px-5">
              <div className="absolute right-4 top-5 hidden rounded-lg border border-pit-neon/20 bg-pit-neon/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-pit-neon sm:block">
                build green
              </div>

              <div className="space-y-2.5 pr-0 font-mono text-[0.68rem] leading-5 sm:pr-28 sm:text-xs md:text-sm">
                {codeLines.map((line, index) => (
                  <p
                    key={line.code}
                    className="code-type-line flex min-w-0 items-start gap-3"
                    style={{ '--line-delay': `${0.45 + index * 0.32}s` }}
                  >
                    <span className="w-5 shrink-0 select-none text-right text-pit-neon/45">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`min-w-0 ${line.tone}`}>{line.code}</span>
                  </p>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 sm:mt-8">
                {['online', 'sync', 'secure'].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.045] px-2 py-2 text-center">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-pit-ink/45">
                      {item}
                    </span>
                    <span className="mt-1 block h-1.5 rounded-full bg-pit-neon/80 shadow-[0_0_14px_rgba(57,255,136,0.72)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="laptop-base relative mx-auto h-16 w-[93%] border border-white/10 bg-gradient-to-b from-[#17231d] via-[#08110d] to-[#020403] shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
          <div className="mx-auto h-2 w-28 rounded-b-lg bg-white/10" />
          <div className="absolute inset-x-10 bottom-3 h-px bg-gradient-to-r from-transparent via-pit-neon/55 to-transparent" />
        </div>
      </div>
    </div>
  );
}
