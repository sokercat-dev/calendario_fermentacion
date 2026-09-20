import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as capitalize, u as cn } from "./router-DW47HnNO.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-BXycJdyG.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg shadow-none hover:bg-primary/90",
			secondary: "bg-secondary text-fg hover:bg-sunken",
			outline: "bg-surface text-fg shadow-card hover:bg-sunken",
			ghost: "text-fg hover:bg-sunken",
			clay: "bg-clay text-clay-fg hover:bg-clay/90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function formatLongDate(date) {
	const raw = new Intl.DateTimeFormat("es-ES", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(date);
	return capitalize(raw);
}
function formatShortDate(date) {
	return new Intl.DateTimeFormat("es-ES", {
		weekday: "short",
		day: "numeric",
		month: "short"
	}).format(date);
}
function formatTime(date) {
	return new Intl.DateTimeFormat("es-ES", {
		hour: "2-digit",
		minute: "2-digit"
	}).format(date);
}
function toDatetimeLocal(date) {
	const pad = (n) => String(n).padStart(2, "0");
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function fromDatetimeLocal(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return /* @__PURE__ */ new Date();
	return date;
}
function batchStatus(harvestAt, now, collectedAt) {
	if (collectedAt) return "done";
	const harvestDay = new Date(harvestAt);
	const sameDay = harvestDay.getFullYear() === now.getFullYear() && harvestDay.getMonth() === now.getMonth() && harvestDay.getDate() === now.getDate();
	if (harvestAt.getTime() <= now.getTime()) return sameDay ? "today" : "overdue";
	if (sameDay) return "today";
	return "upcoming";
}
function formatCountdown(target, now) {
	const diff = target.getTime() - now.getTime();
	const abs = Math.abs(diff);
	const overdue = diff < 0;
	const totalMin = Math.floor(abs / 6e4);
	const days = Math.floor(totalMin / 1440);
	const hours = Math.floor((totalMin - days * 60 * 24) / 60);
	const minutes = totalMin % 60;
	let body;
	if (days > 0) body = hours > 0 ? `${days} d ${hours} h` : `${days} d`;
	else if (hours > 0) body = `${hours} h ${minutes} min`;
	else body = `${Math.max(minutes, 0)} min`;
	return overdue ? `hace ${body}` : `en ${body}`;
}
function progressBetween(start, end, now) {
	const total = end.getTime() - start.getTime();
	if (total <= 0) return 1;
	const elapsed = now.getTime() - start.getTime();
	return Math.min(1, Math.max(0, elapsed / total));
}
function statusLabel(status) {
	switch (status) {
		case "today": return "Hoy toca";
		case "overdue": return "Atrasado";
		case "done": return "Recolectado";
		default: return "En curso";
	}
}
//#endregion
export { formatShortDate as a, progressBetween as c, formatLongDate as i, statusLabel as l, batchStatus as n, formatTime as o, formatCountdown as r, fromDatetimeLocal as s, Button as t, toDatetimeLocal as u };
