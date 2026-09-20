import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as ArrowLeft, i as ImagePlus, l as Camera, r as RotateCcw } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as FERMENT_IDS, d as generateLogText, f as harvestDateFrom, o as useCultivoStore, r as Route$1, s as FERMENTS, u as cn } from "./router-DW47HnNO.mjs";
import { t as JarMark } from "./jar-mark-lPnYe7Ez.mjs";
import { s as fromDatetimeLocal, t as Button, u as toDatetimeLocal } from "./format-BXycJdyG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nuevo-Bl1OB5xT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function loadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = () => reject(/* @__PURE__ */ new Error("No se pudo leer la foto"));
		img.src = src;
	});
}
function resize(width, height, max) {
	if (width <= max && height <= max) return {
		width,
		height
	};
	if (width > height) return {
		width: max,
		height: Math.round(height * max / width)
	};
	return {
		width: Math.round(width * max / height),
		height: max
	};
}
async function compressPhoto(file) {
	const url = URL.createObjectURL(file);
	try {
		const img = await loadImage(url);
		const size = resize(img.naturalWidth || img.width, img.naturalHeight || img.height, 960);
		const canvas = document.createElement("canvas");
		canvas.width = size.width;
		canvas.height = size.height;
		const ctx = canvas.getContext("2d");
		if (!ctx) throw new Error("No se pudo preparar la foto");
		ctx.fillStyle = "#f4f0e8";
		ctx.fillRect(0, 0, size.width, size.height);
		ctx.drawImage(img, 0, 0, size.width, size.height);
		let quality = .72;
		let data = canvas.toDataURL("image/jpeg", quality);
		if (data.length > 45e4) {
			const smaller = resize(size.width, size.height, 720);
			canvas.width = smaller.width;
			canvas.height = smaller.height;
			ctx.fillStyle = "#f4f0e8";
			ctx.fillRect(0, 0, smaller.width, smaller.height);
			ctx.drawImage(img, 0, 0, smaller.width, smaller.height);
			quality = .58;
			data = canvas.toDataURL("image/jpeg", quality);
		}
		return data;
	} finally {
		URL.revokeObjectURL(url);
	}
}
function CameraField({ value, onChange }) {
	const cameraRef = (0, import_react.useRef)(null);
	const galleryRef = (0, import_react.useRef)(null);
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function handleFile(file) {
		if (!file) return;
		setBusy(true);
		setError(null);
		try {
			onChange(await compressPhoto(file));
		} catch {
			setError("No se pudo usar esa imagen. Prueba con otra foto.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: cameraRef,
				type: "file",
				accept: "image/*",
				capture: "environment",
				className: "sr-only",
				onChange: (e) => {
					handleFile(e.target.files?.[0]);
					e.target.value = "";
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: galleryRef,
				type: "file",
				accept: "image/*",
				className: "sr-only",
				onChange: (e) => {
					handleFile(e.target.files?.[0]);
					e.target.value = "";
				}
			}),
			value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-lg bg-sunken",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: value,
					alt: "Foto del cultivo",
					className: "aspect-[4/3] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute right-3 bottom-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						size: "sm",
						variant: "secondary",
						onClick: () => onChange(null),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Cambiar foto"]
					})
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex aspect-[4/3] flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border bg-sunken/60 px-6 text-center", busy && "opacity-70"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-14 items-center justify-center rounded-full bg-surface text-primary shadow-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl text-fg",
						children: "Haz una foto a la jarra"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: "Queda unida al recambio, con la fecha y el día de recolecta."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							onClick: () => cameraRef.current?.click(),
							disabled: busy,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {}), busy ? "Preparando…" : "Hacer foto"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => galleryRef.current?.click(),
							disabled: busy,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, {}), "Galería"]
						})]
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-clay",
				children: error
			}) : null
		]
	});
}
function FermentGrid({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3",
		children: FERMENT_IDS.map((id) => {
			const spec = FERMENTS[id];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(id),
				className: cn("flex flex-col items-start gap-3 rounded-xl bg-surface p-3 text-left shadow-card transition-[transform,box-shadow] duration-150 active:scale-[0.98]", value === id && "ring-2 ring-primary ring-offset-2 ring-offset-bg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JarMark, {
					type: id,
					className: "h-16 w-12"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg leading-tight text-fg",
					children: spec.shortName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: spec.durationLabel
				})] })]
			}, id);
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-base text-fg shadow-none outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-24 w-full rounded-md border border-border bg-surface px-3 py-2 text-base text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring/30", className),
		...props
	});
}
function Nuevo() {
	const { cultureId, type: typeFromSearch } = Route$1.useSearch();
	const navigate = useNavigate();
	const hasHydrated = useCultivoStore((s) => s.hasHydrated);
	const cultures = useCultivoStore((s) => s.cultures);
	const recordRecambio = useCultivoStore((s) => s.recordRecambio);
	const existing = cultureId ? cultures.find((c) => c.id === cultureId) : void 0;
	const [type, setType] = (0, import_react.useState)(existing?.type ?? typeFromSearch);
	const [name, setName] = (0, import_react.useState)(existing?.name ?? "");
	const [photo, setPhoto] = (0, import_react.useState)(null);
	const [changedLocal, setChangedLocal] = (0, import_react.useState)(() => toDatetimeLocal(/* @__PURE__ */ new Date()));
	const [harvestTouched, setHarvestTouched] = (0, import_react.useState)(false);
	const [harvestLocal, setHarvestLocal] = (0, import_react.useState)(() => {
		const t = existing?.type ?? typeFromSearch ?? "kefir-agua";
		return toDatetimeLocal(harvestDateFrom(/* @__PURE__ */ new Date(), t));
	});
	const [extraNote, setExtraNote] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!hasHydrated || !cultureId) return;
		const found = useCultivoStore.getState().cultures.find((c) => c.id === cultureId);
		if (!found) return;
		setType(found.type);
		setName(found.name);
		if (!harvestTouched) setHarvestLocal(toDatetimeLocal(harvestDateFrom(fromDatetimeLocal(changedLocal), found.type)));
	}, [
		hasHydrated,
		cultureId,
		harvestTouched,
		changedLocal
	]);
	function applyType(next) {
		setType(next);
		if (!existing && (!name || Object.values(FERMENTS).some((f) => f.name === name))) setName(FERMENTS[next].name);
		if (!harvestTouched) setHarvestLocal(toDatetimeLocal(harvestDateFrom(fromDatetimeLocal(changedLocal), next)));
	}
	function applyChanged(value) {
		setChangedLocal(value);
		if (type && !harvestTouched) setHarvestLocal(toDatetimeLocal(harvestDateFrom(fromDatetimeLocal(value), type)));
	}
	const preview = (0, import_react.useMemo)(() => {
		if (!type) return "";
		const displayName = name.trim() || FERMENTS[type].name;
		return generateLogText({
			name: displayName,
			type,
			changedAt: fromDatetimeLocal(changedLocal),
			harvestAt: fromDatetimeLocal(harvestLocal)
		});
	}, [
		type,
		name,
		changedLocal,
		harvestLocal
	]);
	function handleSubmit(e) {
		e.preventDefault();
		if (!type) {
			toast.error("Elige el tipo de fermento.");
			return;
		}
		if (!photo) {
			toast.error("Haz una foto de la jarra para guardar el recambio.");
			return;
		}
		const result = recordRecambio({
			cultureId: existing?.id,
			type,
			name: name.trim() || FERMENTS[type].name,
			photo,
			extraNote,
			changedAt: fromDatetimeLocal(changedLocal),
			harvestAt: fromDatetimeLocal(harvestLocal)
		});
		toast.success("Recambio guardado");
		navigate({
			to: "/cultivo/$id",
			params: { id: result.cultureId }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "px-5 pt-6 pb-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => window.history.back(),
				className: "mb-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Volver"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: existing ? "Nuevo recambio" : "Registrar recambio"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Foto, tipo de cultivo y fechas. El texto se escribe solo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mt-6 space-y-7",
				children: [!existing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Qué estás fermentando" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FermentGrid, {
						value: type,
						onChange: applyType
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-md bg-sunken px-3 py-2 text-sm text-muted",
					children: [
						existing.name,
						" · ",
						FERMENTS[existing.type].durationLabel,
						" de ciclo"
					]
				}), type ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "name",
							children: "Nombre del cultivo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "name",
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: FERMENTS[type].name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraField, {
						value: photo,
						onChange: setPhoto
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "changed",
								children: "Día del recambio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "changed",
								type: "datetime-local",
								value: changedLocal,
								onChange: (e) => applyChanged(e.target.value)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "harvest",
									children: FERMENTS[type].harvestLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "harvest",
									type: "datetime-local",
									value: harvestLocal,
									onChange: (e) => {
										setHarvestTouched(true);
										setHarvestLocal(e.target.value);
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted",
									children: [
										"Sugerido: ",
										FERMENTS[type].durationLabel,
										" (",
										FERMENTS[type].rangeLabel,
										") ·",
										" ",
										FERMENTS[type].sourceShort
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Texto que se guarda" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
							className: "overflow-x-auto rounded-lg bg-sunken px-4 py-3 font-sans text-sm leading-relaxed whitespace-pre-wrap text-fg",
							children: preview
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "extra",
							children: "Nota opcional"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "extra",
							value: extraNote,
							onChange: (e) => setExtraNote(e.target.value),
							placeholder: "Azúcar, temperatura, olor…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						size: "lg",
						className: "w-full",
						children: "Guardar recambio"
					})
				] }) : null]
			})
		]
	});
}
//#endregion
export { Nuevo as component };
