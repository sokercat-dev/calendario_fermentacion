import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Camera, Check, Copy, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { JarMark } from "@/components/jar-mark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FERMENTS } from "@/lib/ferments";
import {
  batchStatus,
  formatCountdown,
  formatLongDate,
  formatTime,
  progressBetween,
  statusLabel,
} from "@/lib/format";
import { currentBatch, useCultivoStore } from "@/lib/store";
import { useNow } from "@/hooks/use-now";

export const Route = createFileRoute("/cultivo/$id")({ component: CultivoDetail });

function CultivoDetail() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const now = useNow(1000);
  const hasHydrated = useCultivoStore((s) => s.hasHydrated);
  const cultures = useCultivoStore((s) => s.cultures);
  const batches = useCultivoStore((s) => s.batches);
  const collectBatch = useCultivoStore((s) => s.collectBatch);
  const deleteCulture = useCultivoStore((s) => s.deleteCulture);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const culture = cultures.find((c) => c.id === id);

  if (!hasHydrated) {
    return (
      <main className="px-5 pt-8 md:px-8">
        <p className="font-display text-sm italic text-muted">Diario de fermentos</p>
        <h1 className="mt-1 font-display text-3xl">Cultivo</h1>
      </main>
    );
  }

  if (!culture) {
    return (
      <main className="px-5 pt-10 md:px-8">
        <p className="text-muted">Este cultivo ya no está en el diario.</p>
        <Button asChild className="mt-4">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </main>
    );
  }

  const spec = FERMENTS[culture.type];
  const history = batches.filter((b) => b.cultureId === culture.id);
  const open = currentBatch(batches, culture.id);
  const harvest = open ? new Date(open.harvestAt) : null;
  const changed = open ? new Date(open.changedAt) : null;
  const status = harvest && open ? batchStatus(harvest, now, open.collectedAt) : "done";
  const progress =
    harvest && changed && open && !open.collectedAt
      ? progressBetween(changed, harvest, now)
      : 1;

  async function copyNote(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Texto copiado");
    } catch {
      toast.error("No se pudo copiar");
    }
  }

  return (
    <main className="px-5 pt-6 pb-8 md:px-8 md:pt-8">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="mb-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Volver
      </button>

      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <div>
          {open?.photo ? (
            <img
              src={open.photo}
              alt={culture.name}
              className="mb-5 aspect-[4/3] w-full rounded-xl object-cover lg:mb-0"
            />
          ) : (
            <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-xl bg-sunken lg:mb-0">
              <JarMark type={culture.type} progress={progress} className="h-32 w-24" />
            </div>
          )}
        </div>

        <div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-muted">{spec.name}</p>
              <h1 className="font-display text-3xl md:text-4xl">{culture.name}</h1>
            </div>
            <Badge variant={status === "overdue" ? "clay" : status === "today" ? "primary" : "default"}>
              {statusLabel(status)}
            </Badge>
          </div>

          {harvest && open ? (
            <section className="mt-5 rounded-xl bg-surface p-5 shadow-card">
              <p className="text-sm text-muted">{spec.harvestLabel}</p>
              <p className="mt-1 font-display text-3xl tabular-nums tracking-tight">
                {open.collectedAt ? "Recolectado" : formatCountdown(harvest, now)}
              </p>
              <p className="mt-2 text-sm text-muted">
                {formatLongDate(harvest)} · {formatTime(harvest)}
              </p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-sunken">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-500"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </section>
          ) : null}

          {open ? (
            <section className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="font-display text-xl">Nota del recambio</h2>
                <Button type="button" size="sm" variant="ghost" onClick={() => void copyNote(open.note)}>
                  <Copy />
                  Copiar
                </Button>
              </div>
              <pre className="rounded-lg bg-sunken px-4 py-3 font-sans text-sm leading-relaxed whitespace-pre-wrap text-fg">
                {open.note}
              </pre>
            </section>
          ) : null}

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <Button asChild size="lg">
              <Link to="/nuevo" search={{ cultureId: culture.id }}>
                <Camera />
                Registrar recambio
              </Link>
            </Button>
            {open && !open.collectedAt ? (
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => {
                  collectBatch(open.id);
                  toast.success("Marcado como recolectado");
                }}
              >
                <Check />
                Marcar recolectado
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="font-display text-2xl md:text-3xl">Historial</h2>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {history.map((batch) => {
            const changedAt = new Date(batch.changedAt);
            const harvestAt = new Date(batch.harvestAt);
            return (
              <li
                key={batch.id}
                className="flex gap-3 rounded-lg bg-surface p-3 shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-md"
              >
                {batch.photo ? (
                  <img src={batch.photo} alt="" className="size-16 rounded-sm object-cover" />
                ) : (
                  <div className="flex size-16 items-end justify-center rounded-sm bg-sunken">
                    <JarMark type={batch.type} className="h-12 w-8" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-fg">{formatLongDate(changedAt)}</p>
                  <p className="text-sm text-muted">
                    Recolecta {formatLongDate(harvestAt)}
                    {batch.collectedAt ? " · hecho" : ""}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-border px-4 py-4 md:max-w-3xl">
        <h2 className="font-display text-lg">Ciclo recomendado</h2>
        <p className="mt-1 text-sm text-muted">
          {spec.durationLabel} · {spec.rangeLabel}. {spec.temperature}. Según {spec.sourceShort}.
        </p>
        <Link to="/guia" className="mt-2 inline-block text-sm font-medium text-primary hover:underline">
          Ver la guía
        </Link>
      </section>

      <div className="mt-8">
        {confirmDelete ? (
          <div className="rounded-lg bg-sunken p-4 md:max-w-md">
            <p className="text-sm text-fg">¿Borrar este cultivo y todas sus fotos?</p>
            <div className="mt-3 flex gap-2">
              <Button
                type="button"
                variant="clay"
                onClick={() => {
                  deleteCulture(culture.id);
                  toast.success("Cultivo eliminado");
                  void navigate({ to: "/" });
                }}
              >
                Borrar
              </Button>
              <Button type="button" variant="ghost" onClick={() => setConfirmDelete(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        ) : (
          <Button type="button" variant="ghost" onClick={() => setConfirmDelete(true)}>
            <Trash2 />
            Eliminar cultivo
          </Button>
        )}
      </div>
    </main>
  );
}
