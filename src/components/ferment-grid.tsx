import { FERMENT_IDS, FERMENTS, type FermentId } from "@/lib/ferments";
import { cn } from "@/lib/utils";
import { JarMark } from "@/components/jar-mark";

type FermentGridProps = {
  value?: FermentId;
  onChange: (id: FermentId) => void;
};

export function FermentGrid({ value, onChange }: FermentGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {FERMENT_IDS.map((id) => {
        const spec = FERMENTS[id];
        const selected = value === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "flex flex-col items-start gap-3 rounded-xl bg-surface p-3 text-left shadow-card transition-[transform,box-shadow] duration-150 active:scale-[0.98]",
              selected && "ring-2 ring-primary ring-offset-2 ring-offset-bg",
            )}
          >
            <JarMark type={id} className="h-16 w-12" />
            <div>
              <p className="font-display text-lg leading-tight text-fg">{spec.shortName}</p>
              <p className="mt-1 text-sm text-muted">{spec.durationLabel}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
