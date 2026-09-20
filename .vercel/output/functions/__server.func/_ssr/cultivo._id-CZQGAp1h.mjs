import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Check, d as ArrowLeft, l as Camera, n as Trash2, o as Copy } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as currentBatch, n as Route, o as useCultivoStore, s as FERMENTS } from "./router-DW47HnNO.mjs";
import { t as JarMark } from "./jar-mark-lPnYe7Ez.mjs";
import { n as useNow, t as Badge } from "./use-now-DE1po6lL.mjs";
import { c as progressBetween, i as formatLongDate, l as statusLabel, n as batchStatus, o as formatTime, r as formatCountdown, t as Button } from "./format-BXycJdyG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cultivo._id-CZQGAp1h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CultivoDetail() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const now = useNow(1e3);
	const hasHydrated = useCultivoStore((s) => s.hasHydrated);
	const cultures = useCultivoStore((s) => s.cultures);
	const batches = useCultivoStore((s) => s.batches);
	const collectBatch = useCultivoStore((s) => s.collectBatch);
	const deleteCulture = useCultivoStore((s) => s.deleteCulture);
	const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(false);
	const culture = cultures.find((c) => c.id === id);
	if (!hasHydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm italic text-muted",
			children: "Diario de fermentos"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-3xl",
			children: "Cultivo"
		})]
	});
	if (!culture) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Este cultivo ya no está en el diario."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Volver al inicio"
			})
		})]
	});
	const spec = FERMENTS[culture.type];
	const history = batches.filter((b) => b.cultureId === culture.id);
	const open = currentBatch(batches, culture.id);
	const harvest = open ? new Date(open.harvestAt) : null;
	const changed = open ? new Date(open.changedAt) : null;
	const status = harvest && open ? batchStatus(harvest, now, open.collectedAt) : "done";
	const progress = harvest && changed && open && !open.collectedAt ? progressBetween(changed, harvest, now) : 1;
	async function copyNote(text) {
		try {
			await navigator.clipboard.writeText(text);
			toast.success("Texto copiado");
		} catch {
			toast.error("No se pudo copiar");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-6 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => window.history.back(),
				className: "mb-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Volver"]
			}),
			open?.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: open.photo,
				alt: culture.name,
				className: "mb-5 aspect-[4/3] w-full rounded-xl object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex aspect-[4/3] items-center justify-center rounded-xl bg-sunken",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarMark, {
					type: culture.type,
					progress,
					className: "h-32 w-24"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: spec.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: culture.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: status === "overdue" ? "clay" : status === "today" ? "primary" : "default",
					children: statusLabel(status)
				})]
			}),
			harvest && open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 rounded-xl bg-surface p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: spec.harvestLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-3xl tabular-nums tracking-tight",
						children: open.collectedAt ? "Recolectado" : formatCountdown(harvest, now)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							formatLongDate(harvest),
							" · ",
							formatTime(harvest)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-1.5 overflow-hidden rounded-full bg-sunken",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary transition-[width] duration-500",
							style: { width: `${Math.round(progress * 100)}%` }
						})
					})
				]
			}) : null,
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl",
						children: "Nota del recambio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						variant: "ghost",
						onClick: () => void copyNote(open.note),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), "Copiar"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "rounded-lg bg-sunken px-4 py-3 font-sans text-sm leading-relaxed whitespace-pre-wrap text-fg",
					children: open.note
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/nuevo",
						search: { cultureId: culture.id },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {}), "Registrar recambio"]
					})
				}), open && !open.collectedAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => {
						collectBatch(open.id);
						toast.success("Marcado como recolectado");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Marcar recolectado"]
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Historial"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: history.map((batch) => {
						const changedAt = new Date(batch.changedAt);
						const harvestAt = new Date(batch.harvestAt);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 rounded-lg bg-surface p-3 shadow-card",
							children: [batch.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: batch.photo,
								alt: "",
								className: "size-16 rounded-sm object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-16 items-end justify-center rounded-sm bg-sunken",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarMark, {
									type: batch.type,
									className: "h-12 w-8"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-fg",
									children: formatLongDate(changedAt)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										"Recolecta ",
										formatLongDate(harvestAt),
										batch.collectedAt ? " · hecho" : ""
									]
								})]
							})]
						}, batch.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 rounded-xl border border-border px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg",
						children: "Ciclo recomendado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							spec.durationLabel,
							" · ",
							spec.rangeLabel,
							". ",
							spec.temperature,
							". Según ",
							spec.sourceShort,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/guia",
						className: "mt-2 inline-block text-sm font-medium text-primary",
						children: "Ver la guía"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: confirmDelete ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-sunken p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-fg",
						children: "¿Borrar este cultivo y todas sus fotos?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "clay",
							onClick: () => {
								deleteCulture(culture.id);
								toast.success("Cultivo eliminado");
								navigate({ to: "/" });
							},
							children: "Borrar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: () => setConfirmDelete(false),
							children: "Cancelar"
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					onClick: () => setConfirmDelete(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {}), "Eliminar cultivo"]
				})
			})
		]
	});
}
//#endregion
export { CultivoDetail as component };
