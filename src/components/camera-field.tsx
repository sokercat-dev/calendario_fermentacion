import { Camera, ImagePlus, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { compressPhoto } from "@/lib/photos";
import { cn } from "@/lib/utils";

type CameraFieldProps = {
  value: string | null;
  onChange: (dataUrl: string | null) => void;
};

export function CameraField({ value, onChange }: CameraFieldProps) {
  const cameraRef = useRef<HTMLInputElement>(null);
  const galleryRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const data = await compressPhoto(file);
      onChange(data);
    } catch {
      setError("No se pudo usar esa imagen. Prueba con otra foto.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-3">
      <input
        ref={cameraRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="sr-only"
        onChange={(e) => {
          void handleFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
      <input
        ref={galleryRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => {
          void handleFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />

      {value ? (
        <div className="relative overflow-hidden rounded-lg bg-sunken">
          <img
            src={value}
            alt="Foto del cultivo"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="absolute right-3 bottom-3">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={() => onChange(null)}
            >
              <RotateCcw />
              Cambiar foto
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border bg-sunken/60 px-6 text-center",
            busy && "opacity-70",
          )}
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-surface text-primary shadow-card">
            <Camera className="size-6" />
          </div>
          <div>
            <p className="font-display text-xl text-fg">Haz una foto a la jarra</p>
            <p className="mt-1 text-sm text-muted">
              Queda unida al recambio, con la fecha y el día de recolecta.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button type="button" onClick={() => cameraRef.current?.click()} disabled={busy}>
              <Camera />
              {busy ? "Preparando…" : "Hacer foto"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => galleryRef.current?.click()}
              disabled={busy}
            >
              <ImagePlus />
              Galería
            </Button>
          </div>
        </div>
      )}
      {error ? <p className="text-sm text-clay">{error}</p> : null}
    </div>
  );
}
