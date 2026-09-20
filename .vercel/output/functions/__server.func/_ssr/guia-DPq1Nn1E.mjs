import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as FERMENT_IDS, s as FERMENTS } from "./router-DW47HnNO.mjs";
import { t as JarMark } from "./jar-mark-lPnYe7Ez.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/guia-DPq1Nn1E.js
var import_jsx_runtime = require_jsx_runtime();
function Guia() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-8 pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm italic text-muted",
				children: "Tiempos de cosecha"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 font-display text-4xl",
				children: "Guía de recambio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm text-muted",
				children: "Las fechas que propone Cultivo salen de recetas y manuales de cultivo de nódulos, no de un temporizador genérico. El calor de tu cocina puede adelantar o retrasar un ciclo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-6",
				children: FERMENT_IDS.map((id) => {
					const spec = FERMENTS[id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-5 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarMark, {
									type: id,
									className: "h-16 w-12 shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl",
									children: spec.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-sm font-medium text-primary",
									children: [
										spec.durationLabel,
										" · ",
										spec.rangeLabel
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-fg",
								children: spec.summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: spec.action
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: spec.temperature
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: spec.sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-medium text-fg",
											children: [source.name, "."]
										}),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: source.note
										})
									]
								}, source.name))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-1.5 border-t border-border pt-4",
								children: spec.tips.map((tip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-sm text-muted",
									children: tip
								}, tip))
							})
						]
					}, id);
				})
			})
		]
	});
}
//#endregion
export { Guia as component };
