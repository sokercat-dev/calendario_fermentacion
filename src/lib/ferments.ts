export const FERMENT_IDS = [
  "kefir-agua",
  "kefir-leche",
  "yogurt",
  "chucrut",
] as const;

export type FermentId = (typeof FERMENT_IDS)[number];

export type FermentSpec = {
  id: FermentId;
  name: string;
  shortName: string;
  harvestLabel: string;
  durationHours: number;
  durationLabel: string;
  rangeLabel: string;
  temperature: string;
  action: string;
  summary: string;
  sourceShort: string;
  sources: { name: string; note: string }[];
  tips: string[];
};

export const FERMENTS: Record<FermentId, FermentSpec> = {
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
    summary:
      "Los nódulos de kéfir de agua necesitan azúcar nueva cada uno o dos días. Si se quedan sin alimento, se debilitan.",
    sourceShort: "Brod & Taylor, Cultured Guru",
    sources: [
      {
        name: "Cultured Guru",
        note: "Refrescar los nódulos en agua azucarada nueva cada 24–48 h para mantenerlos activos.",
      },
      {
        name: "Brod & Taylor",
        note: "Primera fermentación de 48 h a 24 °C. Si la cocina está por debajo de 21 °C, 2–3 días.",
      },
      {
        name: "NW Ferments",
        note: "Fermentar 24–48 h entre 20 y 29 °C. No alargar el ciclo salvo que la habitación esté fría.",
      },
    ],
    tips: [
      "Usa azúcar de caña o panela; una cucharada sopera por taza de agua es un punto de partida habitual.",
      "En verano acorta a 24 h; en invierno déjalo cerca de 48 h o un poco más.",
      "Si el líquido huele a vinagre muy fuerte o los nódulos se ven mucosos, acorta el siguiente ciclo.",
    ],
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
    summary:
      "El kéfir de leche se cultiva a diario. A las 24 h suele estar cremoso, con aroma ácido limpio.",
    sourceShort: "Cultures for Health, Joyful Microbe",
    sources: [
      {
        name: "Cultures for Health",
        note: "Tras 24 h el kéfir está espeso, parecido a la nata o al suero de mantequilla, con sabor más marcado.",
      },
      {
        name: "Joyful Microbe",
        note: "El proceso completo suele durar 24 h a temperatura ambiente; más nódulos acortan el tiempo.",
      },
    ],
    tips: [
      "Leche entera pasteurizada funciona bien; evita UHT si puedes.",
      "Si coagula antes de 18 h, usa más leche o menos nódulos.",
      "Un ciclo de 24 h es el ritmo más seguro para no olvidar el recambio.",
    ],
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
    summary:
      "El yogur cuaja en pocas horas a calor constante. 8 h da un yogur equilibrado; más tiempo, más ácido.",
    sourceShort: "Serious Eats, Sui Generis Brewing",
    sources: [
      {
        name: "Sui Generis Brewing",
        note: "6–8 h yogur suave, 8–12 h más ácido, más de 12 h claramente agrio. Se puede llegar a 24 h.",
      },
      {
        name: "Serious Eats (McGee)",
        note: "El cuajado va de 3–4 h a 18 h según la temperatura. Tras cuajar, un reposo extra refuerza el cultivo.",
      },
    ],
    tips: [
      "No muevas el recipiente mientras cuaja.",
      "Si te gusta más ácido, programa 10–12 h en lugar de 8.",
      "Enfría en cuanto esté listo para frenar la acidez.",
    ],
  },
  chucrut: {
    id: "chucrut",
    name: "Chucrut",
    shortName: "Chucrut",
    harvestLabel: "Probar y recoger el chucrut",
    durationHours: 21 * 24,
    durationLabel: "21 días",
    rangeLabel: "14–28 días",
    temperature: "18–22 °C",
    action: "A los 21 días pruébalo. Si ya está a tu gusto, pásalo al frío. Si lo quieres más ácido, déjalo otra semana.",
    summary:
      "La col fermenta despacio bajo salmuera. A las 3 semanas suele estar lista; el rango clásico es de 2 a 6 semanas.",
    sourceShort: "Serious Eats, Garden City Harvest",
    sources: [
      {
        name: "Serious Eats",
        note: "Prueba a la semana. A las 3 semanas está bastante ácido; se puede alargar hasta 6.",
      },
      {
        name: "Garden City Harvest",
        note: "1–4 semanas a temperatura ambiente según el gusto. Muchas personas recogen a las 2–3 semanas.",
      },
      {
        name: "Guías de fermentación en frío (tipo NCHFP)",
        note: "A 21–24 °C el chucrut suele estar listo en 3–4 semanas; más frío, hasta 5–6.",
      },
    ],
    tips: [
      "La col debe quedar siempre bajo la salmuera.",
      "Si usas tapa normal, abre un momento al día para soltar gas.",
      "Prueba a los 14 días: si aún está cruda, espera a los 21.",
    ],
  },
};

export function isFermentId(value: unknown): value is FermentId {
  return (
    typeof value === "string" &&
    (FERMENT_IDS as readonly string[]).includes(value)
  );
}

export function harvestDateFrom(changedAt: Date, type: FermentId) {
  const hours = FERMENTS[type].durationHours;
  return new Date(changedAt.getTime() + hours * 60 * 60 * 1000);
}

export function generateLogText(input: {
  name: string;
  type: FermentId;
  changedAt: Date;
  harvestAt: Date;
}) {
  const spec = FERMENTS[input.type];
  const recambio = formatLongDate(input.changedAt);
  const recolecta = formatLongDate(input.harvestAt);
  return [
    input.name,
    `Recambio: ${recambio}`,
    `${spec.harvestLabel}: ${recolecta}`,
    `${spec.durationLabel} · ${spec.sourceShort}`,
  ].join("\n");
}

function formatLongDate(date: Date) {
  const raw = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}
