import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as cn } from "./router-DW47HnNO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jar-mark-lPnYe7Ez.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILL = {
	"kefir-agua": "var(--color-kefir-agua)",
	"kefir-leche": "var(--color-kefir-leche)",
	yogurt: "var(--color-yogurt)",
	chucrut: "var(--color-chucrut)"
};
function JarMark({ type, progress = .55, className }) {
	const clipId = `jar-liquid-${(0, import_react.useId)().replace(/:/g, "")}`;
	const fill = FILL[type];
	const liquidTop = 108 - Math.min(1, Math.max(.12, progress)) * 72;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 80 120",
		className: cn("text-fg", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: clipId,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 34c0-2 1.5-4 4-4h28c2.5 0 4 2 4 4v58c0 10-8 18-18 18H40c-10 0-18-8-18-18V34Z" })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "26",
				y: "10",
				width: "28",
				height: "8",
				rx: "2",
				fill: "currentColor",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "22",
				y: "18",
				width: "36",
				height: "6",
				rx: "2",
				fill: "currentColor",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 34c0-2 1.5-4 4-4h28c2.5 0 4 2 4 4v58c0 10-8 18-18 18H40c-10 0-18-8-18-18V34Z",
				fill: "var(--color-surface)",
				stroke: "currentColor",
				strokeWidth: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				clipPath: `url(#${clipId})`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "18",
						y: liquidTop,
						width: "44",
						height: "90",
						fill
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M18 ${liquidTop + 4}c8-6 16 6 24 0s16 6 24 0v10H18Z`,
						fill: `color-mix(in oklab, white 28%, ${fill})`,
						opacity: "0.55"
					}),
					type === "kefir-agua" || type === "kefir-leche" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "34",
							cy: liquidTop + 22,
							r: "2.2",
							fill: "white",
							opacity: "0.55"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "48",
							cy: liquidTop + 34,
							r: "1.6",
							fill: "white",
							opacity: "0.45"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "40",
							cy: liquidTop + 48,
							r: "2.8",
							fill: "white",
							opacity: "0.35"
						})
					] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 34v56M50 34v56",
				stroke: "currentColor",
				strokeWidth: "1",
				opacity: "0.12"
			})
		]
	});
}
//#endregion
export { JarMark as t };
