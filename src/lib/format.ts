import { capitalize } from "@/lib/utils";

export function formatLongDate(date: Date) {
  const raw = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
  return capitalize(raw);
}

export function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

export function formatTime(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function toDatetimeLocal(date: Date) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function fromDatetimeLocal(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return new Date();
  return date;
}

export type BatchStatus = "upcoming" | "today" | "overdue" | "done";

export function batchStatus(harvestAt: Date, now: Date, collectedAt: string | null): BatchStatus {
  if (collectedAt) return "done";
  const harvestDay = new Date(harvestAt);
  const sameDay =
    harvestDay.getFullYear() === now.getFullYear() &&
    harvestDay.getMonth() === now.getMonth() &&
    harvestDay.getDate() === now.getDate();
  if (harvestAt.getTime() <= now.getTime()) {
    return sameDay ? "today" : "overdue";
  }
  if (sameDay) return "today";
  return "upcoming";
}

export function formatCountdown(target: Date, now: Date) {
  const diff = target.getTime() - now.getTime();
  const abs = Math.abs(diff);
  const overdue = diff < 0;
  const totalMin = Math.floor(abs / 60000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin - days * 60 * 24) / 60);
  const minutes = totalMin % 60;

  let body: string;
  if (days > 0) {
    body = hours > 0 ? `${days} d ${hours} h` : `${days} d`;
  } else if (hours > 0) {
    body = `${hours} h ${minutes} min`;
  } else {
    body = `${Math.max(minutes, 0)} min`;
  }
  return overdue ? `hace ${body}` : `en ${body}`;
}

export function progressBetween(start: Date, end: Date, now: Date) {
  const total = end.getTime() - start.getTime();
  if (total <= 0) return 1;
  const elapsed = now.getTime() - start.getTime();
  return Math.min(1, Math.max(0, elapsed / total));
}

export function statusLabel(status: BatchStatus) {
  switch (status) {
    case "today":
      return "Hoy toca";
    case "overdue":
      return "Atrasado";
    case "done":
      return "Recolectado";
    default:
      return "En curso";
  }
}
