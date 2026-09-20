import { i as __toESM } from "../_runtime.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, _ as createFileRoute, d as HeadContent, f as useRouterState, g as lazyRouteComponent, h as Outlet, m as createRouter, u as Scripts, v as createRootRoute, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as House, l as Camera, t as TriangleAlert, u as BookOpen } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ferments-CKP4d2Jq.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function capitalize(value) {
	if (!value) return value;
	return value.charAt(0).toUpperCase() + value.slice(1);
}
function uid() {
	return crypto.randomUUID();
}
var FERMENT_IDS = [
	"kefir-agua",
	"kefir-leche",
	"yogurt",
	"chucrut"
];
var FERMENTS = {
	"kefir-agua": {
		id: "kefir-agua",
		name: "Kéfir de agua",
		shortName: "Kéfir agua",
		harvestLabel: "Recolectar y cambiar el agua",
		durationHours: 48,
		durationLabel: "48 h",
		rangeLabel: "24–48 horas",
		temperature: "20–24 °C, fuera del sol directo",
		action: "Retirar el agua lista, devolver los nódulos a la jarra y añadir agua con azúcar.",
		summary: "Los nódulos de kéfir de agua necesitan azúcar nueva cada uno o dos días. Si se quedan sin alimento, se debilitan.",
		sourceShort: "Brod & Taylor, Cultured Guru",
		sources: [
			{
				name: "Cultured Guru",
				note: "Refrescar los nódulos en agua azucarada nueva cada 24–48 h para mantenerlos activos."
			},
			{
				name: "Brod & Taylor",
				note: "Primera fermentación de 48 h a 24 °C. Si la cocina está por debajo de 21 °C, 2–3 días."
			},
			{
				name: "NW Ferments",
				note: "Fermentar 24–48 h entre 20 y 29 °C. No alargar el ciclo salvo que la habitación esté fría."
			}
		],
		tips: [
			"Usa azúcar de caña o panela; una cucharada sopera por taza de agua es un punto de partida habitual.",
			"En verano acorta a 24 h; en invierno déjalo cerca de 48 h o un poco más.",
			"Si el líquido huele a vinagre muy fuerte o los nódulos se ven mucosos, acorta el siguiente ciclo."
		]
	},
	"kefir-leche": {
		id: "kefir-leche",
		name: "Kéfir de leche",
		shortName: "Kéfir leche",
		harvestLabel: "Recolectar y cambiar la leche",
		durationHours: 24,
		durationLabel: "24 h",
		rangeLabel: "18–24 horas",
		temperature: "20–22 °C",
		action: "Colar los nódulos, guardar el kéfir y cubrirlos de nuevo con leche fresca.",
		summary: "El kéfir de leche se cultiva a diario. A las 24 h suele estar cremoso, con aroma ácido limpio.",
		sourceShort: "Cultures for Health, Joyful Microbe",
		sources: [{
			name: "Cultures for Health",
			note: "Tras 24 h el kéfir está espeso, parecido a la nata o al suero de mantequilla, con sabor más marcado."
		}, {
			name: "Joyful Microbe",
			note: "El proceso completo suele durar 24 h a temperatura ambiente; más nódulos acortan el tiempo."
		}],
		tips: [
			"Leche entera pasteurizada funciona bien; evita UHT si puedes.",
			"Si coagula antes de 18 h, usa más leche o menos nódulos.",
			"Un ciclo de 24 h es el ritmo más seguro para no olvidar el recambio."
		]
	},
	yogurt: {
		id: "yogurt",
		name: "Yogur",
		shortName: "Yogur",
		harvestLabel: "Recolectar el yogur",
		durationHours: 8,
		durationLabel: "8 h",
		rangeLabel: "6–12 horas",
		temperature: "42–46 °C (o 8–12 h más suave a ~40 °C)",
		action: "Cuando cuaje, pasar al frío. Reserva un par de cucharadas como cultivo para el siguiente lote.",
		summary: "El yogur cuaja en pocas horas a calor constante. 8 h da un yogur equilibrado; más tiempo, más ácido.",
		sourceShort: "Serious Eats, Sui Generis Brewing",
		sources: [{
			name: "Sui Generis Brewing",
			note: "6–8 h yogur suave, 8–12 h más ácido, más de 12 h claramente agrio. Se puede llegar a 24 h."
		}, {
			name: "Serious Eats (McGee)",
			note: "El cuajado va de 3–4 h a 18 h según la temperatura. Tras cuajar, un reposo extra refuerza el cultivo."
		}],
		tips: [
			"No muevas el recipiente mientras cuaja.",
			"Si te gusta más ácido, programa 10–12 h en lugar de 8.",
			"Enfría en cuanto esté listo para frenar la acidez."
		]
	},
	chucrut: {
		id: "chucrut",
		name: "Chucrut",
		shortName: "Chucrut",
		harvestLabel: "Probar y recoger el chucrut",
		durationHours: 504,
		durationLabel: "21 días",
		rangeLabel: "14–28 días",
		temperature: "18–22 °C",
		action: "A los 21 días pruébalo. Si ya está a tu gusto, pásalo al frío. Si lo quieres más ácido, déjalo otra semana.",
		summary: "La col fermenta despacio bajo salmuera. A las 3 semanas suele estar lista; el rango clásico es de 2 a 6 semanas.",
		sourceShort: "Serious Eats, Garden City Harvest",
		sources: [
			{
				name: "Serious Eats",
				note: "Prueba a la semana. A las 3 semanas está bastante ácido; se puede alargar hasta 6."
			},
			{
				name: "Garden City Harvest",
				note: "1–4 semanas a temperatura ambiente según el gusto. Muchas personas recogen a las 2–3 semanas."
			},
			{
				name: "Guías de fermentación en frío (tipo NCHFP)",
				note: "A 21–24 °C el chucrut suele estar listo en 3–4 semanas; más frío, hasta 5–6."
			}
		],
		tips: [
			"La col debe quedar siempre bajo la salmuera.",
			"Si usas tapa normal, abre un momento al día para soltar gas.",
			"Prueba a los 14 días: si aún está cruda, espera a los 21."
		]
	}
};
function isFermentId(value) {
	return typeof value === "string" && FERMENT_IDS.includes(value);
}
function harvestDateFrom(changedAt, type) {
	const hours = FERMENTS[type].durationHours;
	return new Date(changedAt.getTime() + hours * 60 * 60 * 1e3);
}
function generateLogText(input) {
	const spec = FERMENTS[input.type];
	const recambio = formatLongDate(input.changedAt);
	const recolecta = formatLongDate(input.harvestAt);
	return [
		input.name,
		`Recambio: ${recambio}`,
		`${spec.harvestLabel}: ${recolecta}`,
		`${spec.durationLabel} · ${spec.sourceShort}`
	].join("\n");
}
function formatLongDate(date) {
	const raw = new Intl.DateTimeFormat("es-ES", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(date);
	return raw.charAt(0).toUpperCase() + raw.slice(1);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-DW47HnNO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var NAV = [
	{
		to: "/",
		label: "Inicio",
		icon: House,
		match: (p) => p === "/"
	},
	{
		to: "/nuevo",
		label: "Recambio",
		icon: Camera,
		match: (p) => p.startsWith("/nuevo")
	},
	{
		to: "/guia",
		label: "Guía",
		icon: BookOpen,
		match: (p) => p.startsWith("/guia")
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-dvh w-full max-w-lg flex-col overflow-x-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 pb-28",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "fixed inset-x-0 bottom-0 z-20",
			style: { paddingBottom: "max(0.35rem, env(safe-area-inset-bottom))" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-lg border-t border-border bg-surface/95 px-4 pt-5 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3",
					children: NAV.map((item) => {
						const active = item.match(pathname);
						const Icon = item.icon;
						const isCamera = item.to === "/nuevo";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex min-h-11 flex-col items-center justify-center gap-1 rounded-md text-xs font-medium", active ? "text-primary" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("flex items-center justify-center", isCamera && "-mt-8 size-12 rounded-full bg-primary text-primary-fg shadow-card"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: 1.75
								})
							}), item.label]
						}, item.to);
					})
				})
			})
		})]
	});
}
var STORAGE_KEY = "cultivo-diario-v1";
var useCultivoStore = create()(persist((set) => ({
	hasHydrated: false,
	cultures: [],
	batches: [],
	setHasHydrated: (value) => set({ hasHydrated: value }),
	recordRecambio: (input) => {
		const cultureId = input.cultureId ?? uid();
		const batchId = uid();
		const nowIso = (/* @__PURE__ */ new Date()).toISOString();
		const note = generateLogText({
			name: input.name.trim() || FERMENTS[input.type].name,
			type: input.type,
			changedAt: input.changedAt,
			harvestAt: input.harvestAt
		});
		const extra = input.extraNote?.trim();
		const fullNote = extra ? `${note}\n${extra}` : note;
		set((state) => {
			const cultures = state.cultures.find((c) => c.id === cultureId) ? state.cultures.map((c) => c.id === cultureId ? {
				...c,
				name: input.name.trim() || c.name,
				type: input.type
			} : c) : [{
				id: cultureId,
				type: input.type,
				name: input.name.trim() || FERMENTS[input.type].name,
				createdAt: nowIso
			}, ...state.cultures];
			const collectedAt = input.changedAt.toISOString();
			const batches = state.batches.map((b) => b.cultureId === cultureId && !b.collectedAt ? {
				...b,
				collectedAt
			} : b);
			batches.unshift({
				id: batchId,
				cultureId,
				type: input.type,
				photo: input.photo,
				note: fullNote,
				changedAt: input.changedAt.toISOString(),
				harvestAt: input.harvestAt.toISOString(),
				collectedAt: null,
				createdAt: nowIso
			});
			return {
				cultures,
				batches
			};
		});
		return {
			cultureId,
			batchId
		};
	},
	collectBatch: (batchId) => set((state) => ({ batches: state.batches.map((b) => b.id === batchId && !b.collectedAt ? {
		...b,
		collectedAt: (/* @__PURE__ */ new Date()).toISOString()
	} : b) })),
	renameCulture: (id, name) => set((state) => ({ cultures: state.cultures.map((c) => c.id === id ? {
		...c,
		name: name.trim() || c.name
	} : c) })),
	deleteCulture: (id) => set((state) => ({
		cultures: state.cultures.filter((c) => c.id !== id),
		batches: state.batches.filter((b) => b.cultureId !== id)
	})),
	deleteBatch: (id) => set((state) => ({ batches: state.batches.filter((b) => b.id !== id) }))
}), {
	name: STORAGE_KEY,
	storage: createJSONStorage(() => localStorage),
	skipHydration: true,
	partialize: (state) => ({
		cultures: state.cultures,
		batches: state.batches
	}),
	onRehydrateStorage: () => () => {
		useCultivoStore.setState({ hasHydrated: true });
	}
}));
function loadFromStorage() {
	if (typeof window === "undefined") return;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			const state = parsed.state ?? parsed;
			useCultivoStore.setState({
				cultures: Array.isArray(state.cultures) ? state.cultures : [],
				batches: Array.isArray(state.batches) ? state.batches : [],
				hasHydrated: true
			});
		} else useCultivoStore.setState({ hasHydrated: true });
	} catch {
		useCultivoStore.setState({ hasHydrated: true });
	}
}
function currentBatch(batches, cultureId) {
	const ofCulture = batches.filter((b) => b.cultureId === cultureId);
	return ofCulture.find((b) => !b.collectedAt) ?? ofCulture[0] ?? null;
}
function upcomingBatches(batches) {
	return batches.filter((b) => !b.collectedAt).slice().sort((a, b) => new Date(a.harvestAt).getTime() - new Date(b.harvestAt).getTime());
}
function HydrateStore() {
	(0, import_react.useLayoutEffect)(() => {
		loadFromStorage();
	}, []);
	return null;
}
var styles_default = "/assets/styles-B5cOqvo5.css";
var APP_NAME = "Cultivo";
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Diario de fermentos: foto del recambio, fecha de recolecta y aviso para cambiar el agua del kéfir, yogur o chucrut."
			},
			{
				name: "theme-color",
				content: "#3d5a4c"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Outfit:wght@400;500;600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateStore, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				toastOptions: { className: "font-sans" }
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-BnbI6k-U.mjs");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./guia-DPq1Nn1E.mjs");
var Route$2 = createFileRoute("/guia")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./nuevo-Bl1OB5xT.mjs");
var Route$1 = createFileRoute("/nuevo")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	validateSearch: (s) => ({
		cultureId: typeof s.cultureId === "string" ? s.cultureId : void 0,
		type: isFermentId(s.type) ? s.type : void 0
	})
});
var $$splitComponentImporter = () => import("./cultivo._id-CZQGAp1h.mjs");
var Route = createFileRoute("/cultivo/$id")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	GuiaRoute: Route$2.update({
		id: "/guia",
		path: "/guia",
		getParentRoute: () => Route$4
	}),
	NuevoRoute: Route$1.update({
		id: "/nuevo",
		path: "/nuevo",
		getParentRoute: () => Route$4
	}),
	CultivoIdRoute: Route.update({
		id: "/cultivo/$id",
		path: "/cultivo/$id",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		scrollRestoration: true
	});
}
//#endregion
export { upcomingBatches as a, FERMENT_IDS as c, generateLogText as d, harvestDateFrom as f, currentBatch as i, capitalize as l, Route as n, useCultivoStore as o, Route$1 as r, FERMENTS as s, router_exports as t, cn as u };
