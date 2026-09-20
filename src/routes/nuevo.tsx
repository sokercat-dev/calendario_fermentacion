import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CameraField } from "@/components/camera-field";
import { FermentGrid } from "@/components/ferment-grid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FERMENTS,
  generateLogText,
  harvestDateFrom,
  isFermentId,
  type FermentId,
} from "@/lib/ferments";
import { fromDatetimeLocal, toDatetimeLocal } from "@/lib/format";
import { useCultivoStore } from "@/lib/store";

type Search = {
  cultureId?: string;
  type?: FermentId;
};

export const Route = createFileRoute("/nuevo")({
  component: Nuevo,
  validateSearch: (s: Record<string, unknown>): Search => ({
    cultureId: typeof s.cultureId === "string" ? s.cultureId : undefined,
    type: isFermentId(s.type) ? s.type : undefined,
  }),
});

function Nuevo() {
  const { cultureId, type: typeFromSearch } = Route.useSearch();
  const navigate = useNavigate();
  const hasHydrated = useCultivoStore((s) => s.hasHydrated);
  const cultures = useCultivoStore((s) => s.cultures);
  const recordRecambio = useCultivoStore((s) => s.recordRecambio);
  const existing = cultureId ? cultures.find((c) => c.id === cultureId) : undefined;

  const [type, setType] = useState<FermentId | undefined>(
    existing?.type ?? typeFromSearch,
  );
  const [name, setName] = useState(existing?.name ?? "");
  const [photo, setPhoto] = useState<string | null>(null);
  const [changedLocal, setChangedLocal] = useState(() => toDatetimeLocal(new Date()));
  const [harvestTouched, setHarvestTouched] = useState(false);
  const [harvestLocal, setHarvestLocal] = useState(() => {
    const t = existing?.type ?? typeFromSearch ?? "kefir-agua";
    return toDatetimeLocal(harvestDateFrom(new Date(), t));
  });
  const [extraNote, setExtraNote] = useState("");

  useEffect(() => {
    if (!hasHydrated || !cultureId) return;
    const found = useCultivoStore.getState().cultures.find((c) => c.id === cultureId);
    if (!found) return;
    setType(found.type);
    setName(found.name);
    if (!harvestTouched) {
      setHarvestLocal(toDatetimeLocal(harvestDateFrom(fromDatetimeLocal(changedLocal), found.type)));
    }
  }, [hasHydrated, cultureId, harvestTouched, changedLocal]);

  function applyType(next: FermentId) {
    setType(next);
    if (!existing && (!name || Object.values(FERMENTS).some((f) => f.name === name))) {
      setName(FERMENTS[next].name);
    }
    if (!harvestTouched) {
      setHarvestLocal(toDatetimeLocal(harvestDateFrom(fromDatetimeLocal(changedLocal), next)));
    }
  }

  function applyChanged(value: string) {
    setChangedLocal(value);
    if (type && !harvestTouched) {
      setHarvestLocal(toDatetimeLocal(harvestDateFrom(fromDatetimeLocal(value), type)));
    }
  }

  const preview = useMemo(() => {
    if (!type) return "";
    const displayName = name.trim() || FERMENTS[type].name;
    return generateLogText({
      name: displayName,
      type,
      changedAt: fromDatetimeLocal(changedLocal),
      harvestAt: fromDatetimeLocal(harvestLocal),
    });
  }, [type, name, changedLocal, harvestLocal]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!type) {
      toast.error("Elige el tipo de fermento.");
      return;
    }
    if (!photo) {
      toast.error("Haz una foto de la jarra para guardar el recambio.");
      return;
    }
    const result = recordRecambio({
      cultureId: existing?.id,
      type,
      name: name.trim() || FERMENTS[type].name,
      photo,
      extraNote,
      changedAt: fromDatetimeLocal(changedLocal),
      harvestAt: fromDatetimeLocal(harvestLocal),
    });
    toast.success("Recambio guardado");
    void navigate({ to: "/cultivo/$id", params: { id: result.cultureId } });
  }

  return (
    <main className="px-5 pt-6 pb-4 md:mx-auto md:max-w-3xl md:px-8 md:pt-8">
      <button
        type="button"
        onClick={() => window.history.back()}
        className="mb-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Volver
      </button>
      <h1 className="font-display text-3xl md:text-4xl">
        {existing ? "Nuevo recambio" : "Registrar recambio"}
      </h1>
      <p className="mt-2 text-sm text-muted md:text-base">
        Foto, tipo de cultivo y fechas. El texto se escribe solo.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-7">
        {!existing ? (
          <section className="space-y-3">
            <Label>Qué estás fermentando</Label>
            <FermentGrid value={type} onChange={applyType} />
          </section>
        ) : (
          <p className="rounded-md bg-sunken px-3 py-2 text-sm text-muted">
            {existing.name} · {FERMENTS[existing.type].durationLabel} de ciclo
          </p>
        )}

        {type ? (
          <>
            <section className="space-y-2">
              <Label htmlFor="name">Nombre del cultivo</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={FERMENTS[type].name}
              />
            </section>

            <CameraField value={photo} onChange={setPhoto} />

            <section className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="changed">Día del recambio</Label>
                <Input
                  id="changed"
                  type="datetime-local"
                  value={changedLocal}
                  onChange={(e) => applyChanged(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="harvest">{FERMENTS[type].harvestLabel}</Label>
                <Input
                  id="harvest"
                  type="datetime-local"
                  value={harvestLocal}
                  onChange={(e) => {
                    setHarvestTouched(true);
                    setHarvestLocal(e.target.value);
                  }}
                />
                <p className="text-xs text-muted">
                  Sugerido: {FERMENTS[type].durationLabel} ({FERMENTS[type].rangeLabel}) ·{" "}
                  {FERMENTS[type].sourceShort}
                </p>
              </div>
            </section>

            <section className="space-y-2">
              <Label>Texto que se guarda</Label>
              <pre className="overflow-x-auto rounded-lg bg-sunken px-4 py-3 font-sans text-sm leading-relaxed whitespace-pre-wrap text-fg">
                {preview}
              </pre>
            </section>

            <section className="space-y-2">
              <Label htmlFor="extra">Nota opcional</Label>
              <Textarea
                id="extra"
                value={extraNote}
                onChange={(e) => setExtraNote(e.target.value)}
                placeholder="Azúcar, temperatura, olor…"
              />
            </section>

            <Button type="submit" size="lg" className="w-full md:w-auto md:min-w-56">
              Guardar recambio
            </Button>
          </>
        ) : null}
      </form>
    </main>
  );
}
