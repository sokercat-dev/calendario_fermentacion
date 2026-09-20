import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Camera, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as upcomingBatches, i as currentBatch, o as useCultivoStore, s as FERMENTS, u as cn } from "./router-DW47HnNO.mjs";
import { t as JarMark } from "./jar-mark-lPnYe7Ez.mjs";
import { n as useNow, t as Badge } from "./use-now-DE1po6lL.mjs";
import { a as formatShortDate, c as progressBetween, l as statusLabel, n as batchStatus, r as formatCountdown, t as Button } from "./format-BXycJdyG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BnbI6k-U.js
var import_jsx_runtime = require_jsx_runtime();
function CultureCard({ culture, batch, now, featured }) {
	const spec = FERMENTS[culture.type];
	const harvest = batch ? new Date(batch.harvestAt) : null;
	const changed = batch ? new Date(batch.changedAt) : null;
	const status = harvest && batch ? batchStatus(harvest, now, batch.collectedAt) : "upcoming";
	const progress = harvest && changed && batch && !batch.collectedAt ? progressBetween(changed, harvest, now) : batch?.collectedAt ? 1 : .2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/cultivo/$id",
		params: { id: culture.id },
		className: cn("block overflow-hidden rounded-xl bg-surface shadow-card transition-transform duration-150 active:scale-95", featured && "min-h-72"),
		children: featured && batch?.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-80",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: batch.photo,
					alt: culture.name,
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-fg/85 via-fg/25 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 p-5 text-bg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: status === "overdue" ? "clay" : "primary",
							children: statusLabel(status)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl tracking-tight",
							children: culture.name
						}),
						harvest ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl tabular-nums",
							children: formatCountdown(harvest, now)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-bg/80",
							children: [
								spec.harvestLabel,
								" · ",
								formatShortDate(harvest)
							]
						})] }) : null
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex gap-4 p-4", featured && "min-h-44 items-center p-5"),
			children: [batch?.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: batch.photo,
				alt: "",
				className: "size-20 shrink-0 rounded-md object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-20 shrink-0 items-end justify-center rounded-md bg-sunken",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarMark, {
					type: culture.type,
					progress,
					className: "h-16 w-11"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl leading-tight text-fg",
							children: culture.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: status === "overdue" ? "clay" : status === "today" ? "primary" : "default",
							children: statusLabel(status)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: spec.harvestLabel
					}),
					harvest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-lg tabular-nums text-fg",
						children: formatCountdown(harvest, now)
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Sin recambio registrado"
					})
				]
			})]
		})
	});
}
function Home() {
	const hasHydrated = useCultivoStore((s) => s.hasHydrated);
	const cultures = useCultivoStore((s) => s.cultures);
	const batches = useCultivoStore((s) => s.batches);
	const now = useNow(1e3);
	const next = upcomingBatches(batches)[0] ?? null;
	const nextCulture = next ? cultures.find((c) => c.id === next.cultureId) : null;
	const rest = cultures.filter((c) => c.id !== nextCulture?.id);
	const recent = batches.slice(0, 6);
	const showEmpty = !hasHydrated || cultures.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm italic text-muted",
					children: "Diario de fermentos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-4xl text-fg",
					children: "Cultivo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-sm text-sm text-muted",
					children: "Una foto al recambio. El diario apunta el día de recolectar y cambiar el agua."
				})
			]
		}), showEmpty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-8",
			children: [
				nextCulture && next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl",
								children: "Próximo recambio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: FERMENTS[next.type].durationLabel
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CultureCard, {
							culture: nextCulture,
							batch: next,
							now,
							featured: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/nuevo",
								search: { cultureId: nextCulture.id },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {}), "Registrar recambio"]
							})
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-surface p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl",
							children: "Todo al día"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "No hay un recambio pendiente. Cuando cambies el agua o la leche, haz la foto."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/nuevo",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {}), "Nuevo recambio"]
							})
						})
					]
				}),
				rest.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Otras jarras"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: rest.map((culture) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CultureCard, {
							culture,
							batch: currentBatch(batches, culture.id),
							now
						}, culture.id))
					})]
				}) : null,
				recent.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3 pb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Registro"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: recent.map((batch) => {
							const culture = cultures.find((c) => c.id === batch.cultureId);
							if (!culture) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cultivo/$id",
								params: { id: culture.id },
								className: "flex items-center gap-3 rounded-lg bg-surface px-3 py-3 shadow-card",
								children: [
									batch.photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: batch.photo,
										alt: "",
										className: "size-12 rounded-sm object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-12 items-end justify-center rounded-sm bg-sunken",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarMark, {
											type: batch.type,
											className: "h-10 w-7"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate font-medium text-fg",
											children: culture.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm text-muted",
											children: batch.note.split("\n")[1] ?? FERMENTS[batch.type].durationLabel
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4 text-subtle" })
								]
							}) }, batch.id);
						})
					})]
				}) : null
			]
		})]
	});
}
function EmptyState() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-surface px-5 py-8 text-center shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex h-28 w-24 items-end justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarMark, {
					type: "kefir-agua",
					progress: .62,
					className: "h-28 w-20"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-3xl",
				children: "Tu jarra te espera"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-3 max-w-sm text-sm text-muted",
				children: "Elige el fermento, haz una foto al recambio y Cultivo escribe el texto con el día de recolecta."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/nuevo",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {}), "Registrar primer recambio"]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
