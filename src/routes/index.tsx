import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, ChevronRight } from "lucide-react";
import { CultureCard } from "@/components/culture-card";
import { JarMark } from "@/components/jar-mark";
import { Button } from "@/components/ui/button";
import { FERMENTS } from "@/lib/ferments";
import { currentBatch, upcomingBatches, useCultivoStore } from "@/lib/store";
import { useNow } from "@/hooks/use-now";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hasHydrated = useCultivoStore((s) => s.hasHydrated);
  const cultures = useCultivoStore((s) => s.cultures);
  const batches = useCultivoStore((s) => s.batches);
  const now = useNow(1000);

  const open = upcomingBatches(batches);
  const next = open[0] ?? null;
  const nextCulture = next ? cultures.find((c) => c.id === next.cultureId) : null;
  const rest = cultures.filter((c) => c.id !== nextCulture?.id);
  const recent = batches.slice(0, 6);
  const showEmpty = !hasHydrated || cultures.length === 0;

  return (
    <main className="px-5 pt-8 md:px-8">
      <header className="mb-8">
        <p className="font-display text-sm italic text-muted">Diario de fermentos</p>
        <h1 className="mt-1 font-display text-4xl text-fg md:text-5xl">Cultivo</h1>
        <p className="mt-2 max-w-sm text-sm text-muted md:max-w-xl">
          Una foto al recambio. El diario apunta el día de recolectar y cambiar el agua.
        </p>
      </header>

      {showEmpty ? (
        <EmptyState />
      ) : (
        <div className="space-y-8">
          {nextCulture && next ? (
            <section className="space-y-3">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-2xl md:text-3xl">Próximo recambio</h2>
                <span className="text-sm text-muted">{FERMENTS[next.type].durationLabel}</span>
              </div>
              <CultureCard culture={nextCulture} batch={next} now={now} featured />
              <Button asChild size="lg" className="w-full md:w-auto md:min-w-64">
                <Link to="/nuevo" search={{ cultureId: nextCulture.id }}>
                  <Camera />
                  Registrar recambio
                </Link>
              </Button>
            </section>
          ) : (
            <section className="rounded-xl bg-surface p-5 shadow-card md:p-6">
              <h2 className="font-display text-2xl">Todo al día</h2>
              <p className="mt-2 max-w-xl text-sm text-muted">
                No hay un recambio pendiente. Cuando cambies el agua o la leche, haz la foto.
              </p>
              <Button asChild className="mt-4">
                <Link to="/nuevo">
                  <Camera />
                  Nuevo recambio
                </Link>
              </Button>
            </section>
          )}

          {rest.length > 0 ? (
            <section className="space-y-3">
              <h2 className="font-display text-2xl">Otras jarras</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {rest.map((culture) => (
                  <CultureCard
                    key={culture.id}
                    culture={culture}
                    batch={currentBatch(batches, culture.id)}
                    now={now}
                  />
                ))}
              </div>
            </section>
          ) : null}

          {recent.length > 0 ? (
            <section className="space-y-3 pb-6">
              <h2 className="font-display text-2xl">Registro</h2>
              <ul className="grid gap-2 md:grid-cols-2">
                {recent.map((batch) => {
                  const culture = cultures.find((c) => c.id === batch.cultureId);
                  if (!culture) return null;
                  return (
                    <li key={batch.id}>
                      <Link
                        to="/cultivo/$id"
                        params={{ id: culture.id }}
                        className="flex items-center gap-3 rounded-lg bg-surface px-3 py-3 shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        {batch.photo ? (
                          <img
                            src={batch.photo}
                            alt=""
                            className="size-12 rounded-sm object-cover"
                          />
                        ) : (
                          <div className="flex size-12 items-end justify-center rounded-sm bg-sunken">
                            <JarMark type={batch.type} className="h-10 w-7" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium text-fg">{culture.name}</p>
                          <p className="truncate text-sm text-muted">
                            {batch.note.split("\n")[1] ?? FERMENTS[batch.type].durationLabel}
                          </p>
                        </div>
                        <ChevronRight className="size-4 text-subtle" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ) : null}
        </div>
      )}
    </main>
  );
}

function EmptyState() {
  return (
    <section className="rounded-xl bg-surface px-5 py-8 text-center shadow-card md:mx-auto md:max-w-xl md:px-10 md:py-12">
      <div className="mx-auto flex h-28 w-24 items-end justify-center">
        <JarMark type="kefir-agua" progress={0.62} className="h-28 w-20" />
      </div>
      <h2 className="mt-5 font-display text-3xl">Tu jarra te espera</h2>
      <p className="mx-auto mt-3 max-w-sm text-sm text-muted md:max-w-md">
        Elige el fermento, haz una foto al recambio y Cultivo escribe el texto con el día de recolecta.
      </p>
      <Button asChild size="lg" className="mt-6">
        <Link to="/nuevo">
          <Camera />
          Registrar primer recambio
        </Link>
      </Button>
    </section>
  );
}
