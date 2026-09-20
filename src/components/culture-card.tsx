import { Link } from "@tanstack/react-router";
import { FERMENTS } from "@/lib/ferments";
import {
  batchStatus,
  formatCountdown,
  formatShortDate,
  progressBetween,
  statusLabel,
} from "@/lib/format";
import type { Batch, Culture } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { JarMark } from "@/components/jar-mark";

type CultureCardProps = {
  culture: Culture;
  batch: Batch | null;
  now: Date;
  featured?: boolean;
};

export function CultureCard({ culture, batch, now, featured }: CultureCardProps) {
  const spec = FERMENTS[culture.type];
  const harvest = batch ? new Date(batch.harvestAt) : null;
  const changed = batch ? new Date(batch.changedAt) : null;
  const status = harvest && batch ? batchStatus(harvest, now, batch.collectedAt) : "upcoming";
  const progress =
    harvest && changed && batch && !batch.collectedAt
      ? progressBetween(changed, harvest, now)
      : batch?.collectedAt
        ? 1
        : 0.2;

  return (
    <Link
      to="/cultivo/$id"
      params={{ id: culture.id }}
      className={cn(
        "block overflow-hidden rounded-xl bg-surface shadow-card transition-transform duration-150 active:scale-95",
        featured && "min-h-72",
      )}
    >
      {featured && batch?.photo ? (
        <div className="relative min-h-80">
          <img
            src={batch.photo}
            alt={culture.name}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fg/85 via-fg/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-bg">
            <Badge variant={status === "overdue" ? "clay" : "primary"}>{statusLabel(status)}</Badge>
            <h2 className="mt-3 font-display text-3xl tracking-tight">{culture.name}</h2>
            {harvest ? (
              <>
                <p className="mt-2 font-display text-2xl tabular-nums">
                  {formatCountdown(harvest, now)}
                </p>
                <p className="mt-1 text-sm text-bg/80">
                  {spec.harvestLabel} · {formatShortDate(harvest)}
                </p>
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <div className={cn("flex gap-4 p-4", featured && "min-h-44 items-center p-5")}>
          {batch?.photo ? (
            <img
              src={batch.photo}
              alt=""
              className="size-20 shrink-0 rounded-md object-cover"
            />
          ) : (
            <div className="flex size-20 shrink-0 items-end justify-center rounded-md bg-sunken">
              <JarMark type={culture.type} progress={progress} className="h-16 w-11" />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <p className="font-display text-xl leading-tight text-fg">{culture.name}</p>
              <Badge
                variant={
                  status === "overdue" ? "clay" : status === "today" ? "primary" : "default"
                }
              >
                {statusLabel(status)}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-muted">{spec.harvestLabel}</p>
            {harvest ? (
              <p className="mt-2 font-display text-lg tabular-nums text-fg">
                {formatCountdown(harvest, now)}
              </p>
            ) : (
              <p className="mt-2 text-sm text-muted">Sin recambio registrado</p>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
