import { createFileRoute } from "@tanstack/react-router";
import { FERMENT_IDS, FERMENTS } from "@/lib/ferments";
import { JarMark } from "@/components/jar-mark";

export const Route = createFileRoute("/guia")({ component: Guia });

function Guia() {
  return (
    <main className="px-5 pt-8 pb-8">
      <p className="font-display text-sm italic text-muted">Tiempos de cosecha</p>
      <h1 className="mt-1 font-display text-4xl">Guía de recambio</h1>
      <p className="mt-3 max-w-sm text-sm text-muted">
        Las fechas que propone Cultivo salen de recetas y manuales de cultivo de nódulos, no de un
        temporizador genérico. El calor de tu cocina puede adelantar o retrasar un ciclo.
      </p>

      <div className="mt-8 space-y-6">
        {FERMENT_IDS.map((id) => {
          const spec = FERMENTS[id];
          return (
            <article key={id} className="rounded-xl bg-surface p-5 shadow-card">
              <div className="flex items-start gap-4">
                <JarMark type={id} className="h-16 w-12 shrink-0" />
                <div>
                  <h2 className="font-display text-2xl">{spec.name}</h2>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {spec.durationLabel} · {spec.rangeLabel}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-fg">{spec.summary}</p>
              <p className="mt-2 text-sm text-muted">{spec.action}</p>
              <p className="mt-2 text-sm text-muted">{spec.temperature}</p>
              <ul className="mt-4 space-y-2">
                {spec.sources.map((source) => (
                  <li key={source.name} className="text-sm">
                    <span className="font-medium text-fg">{source.name}.</span>{" "}
                    <span className="text-muted">{source.note}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                {spec.tips.map((tip) => (
                  <li key={tip} className="text-sm text-muted">
                    {tip}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </main>
  );
}
