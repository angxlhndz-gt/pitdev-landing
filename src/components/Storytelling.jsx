import { ChartNoAxesCombined, CheckCircle2, Sparkles, Workflow } from 'lucide-react';

const storySteps = [
  {
    title: 'Negocio desordenado',
    description: 'Citas, clientes, ventas e inventario dispersos entre mensajes, libretas y hojas de cálculo.',
    icon: Workflow,
  },
  {
    title: 'PitDev automatiza',
    description: 'Convertimos procesos repetitivos en sistemas claros, conectados y adaptados a la operación real.',
    icon: Sparkles,
  },
  {
    title: 'Control, ventas y crecimiento',
    description: 'Tu equipo trabaja con más orden, mejores datos y una presencia digital lista para vender.',
    icon: ChartNoAxesCombined,
  },
];

export default function Storytelling() {
  return (
    <section className="relative border-t border-white/10 bg-pit-black px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(57,255,136,0.11),transparent_24rem),radial-gradient(circle_at_18%_74%,rgba(84,230,255,0.08),transparent_22rem),linear-gradient(180deg,rgba(3,6,4,1),rgba(5,9,7,0.98))]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 circuit-grid opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pit-neon/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.74fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-28" data-animate="left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-pit-neon">
            Del problema a la solución
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-normal text-white sm:text-4xl">
            Menos improvisación. Más control operativo.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-pit-ink/[0.78] sm:text-lg">
            PitDev toma lo que hoy consume tiempo en tu negocio y lo convierte en herramientas digitales
            simples, medibles y listas para crecer contigo.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-pit-neon/25 bg-pit-neon/10 px-4 py-3 text-sm font-semibold text-pit-neon shadow-glow">
            <CheckCircle2 className="size-5" aria-hidden="true" />
            <span>Proceso claro desde diagnóstico hasta entrega</span>
          </div>
        </div>

        <div className="relative" data-stagger data-stagger-start="top 78%">
          <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-pit-neon/80 via-pit-neon/25 to-transparent sm:block" />
          <div className="grid gap-5">
            {storySteps.map(({ title, description, icon: Icon }, index) => (
              <article
                key={title}
                data-stagger-item
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-5 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-pit-neon/55 hover:bg-pit-neon/[0.055] sm:pl-20"
              >
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(57,255,136,0.14),transparent_15rem)] opacity-0 transition duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative mb-5 grid size-12 place-items-center rounded-lg border border-pit-neon/30 bg-pit-black text-pit-neon shadow-glow sm:absolute sm:left-0 sm:top-1/2 sm:mb-0 sm:-translate-y-1/2">
                  <Icon className="size-6 transition duration-300 group-hover:scale-110" aria-hidden="true" />
                </div>
                <div className="relative">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-pit-neon/70">
                    Paso {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-pit-ink/70">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
