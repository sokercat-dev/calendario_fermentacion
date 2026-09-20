import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { FermentId } from "@/lib/ferments";
import { FERMENTS, generateLogText } from "@/lib/ferments";
import { uid } from "@/lib/utils";

export type Culture = {
  id: string;
  type: FermentId;
  name: string;
  createdAt: string;
};

export type Batch = {
  id: string;
  cultureId: string;
  type: FermentId;
  photo: string | null;
  note: string;
  changedAt: string;
  harvestAt: string;
  collectedAt: string | null;
  createdAt: string;
};

type NewBatchInput = {
  cultureId?: string;
  type: FermentId;
  name: string;
  photo: string | null;
  extraNote?: string;
  changedAt: Date;
  harvestAt: Date;
};

type CultivoState = {
  hasHydrated: boolean;
  cultures: Culture[];
  batches: Batch[];
  setHasHydrated: (value: boolean) => void;
  recordRecambio: (input: NewBatchInput) => { cultureId: string; batchId: string };
  collectBatch: (batchId: string) => void;
  renameCulture: (id: string, name: string) => void;
  deleteCulture: (id: string) => void;
  deleteBatch: (id: string) => void;
};

const STORAGE_KEY = "cultivo-diario-v1";

export const useCultivoStore = create<CultivoState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      cultures: [],
      batches: [],
      setHasHydrated: (value) => set({ hasHydrated: value }),
      recordRecambio: (input) => {
        const cultureId = input.cultureId ?? uid();
        const batchId = uid();
        const nowIso = new Date().toISOString();
        const note = generateLogText({
          name: input.name.trim() || FERMENTS[input.type].name,
          type: input.type,
          changedAt: input.changedAt,
          harvestAt: input.harvestAt,
        });
        const extra = input.extraNote?.trim();
        const fullNote = extra ? `${note}\n${extra}` : note;

        set((state) => {
          const existing = state.cultures.find((c) => c.id === cultureId);
          const cultures = existing
            ? state.cultures.map((c) =>
                c.id === cultureId ? { ...c, name: input.name.trim() || c.name, type: input.type } : c,
              )
            : [
                {
                  id: cultureId,
                  type: input.type,
                  name: input.name.trim() || FERMENTS[input.type].name,
                  createdAt: nowIso,
                },
                ...state.cultures,
              ];

          const collectedAt = input.changedAt.toISOString();
          const batches = state.batches.map((b) =>
            b.cultureId === cultureId && !b.collectedAt ? { ...b, collectedAt } : b,
          );

          batches.unshift({
            id: batchId,
            cultureId,
            type: input.type,
            photo: input.photo,
            note: fullNote,
            changedAt: input.changedAt.toISOString(),
            harvestAt: input.harvestAt.toISOString(),
            collectedAt: null,
            createdAt: nowIso,
          });

          return { cultures, batches };
        });

        return { cultureId, batchId };
      },
      collectBatch: (batchId) =>
        set((state) => ({
          batches: state.batches.map((b) =>
            b.id === batchId && !b.collectedAt
              ? { ...b, collectedAt: new Date().toISOString() }
              : b,
          ),
        })),
      renameCulture: (id, name) =>
        set((state) => ({
          cultures: state.cultures.map((c) => (c.id === id ? { ...c, name: name.trim() || c.name } : c)),
        })),
      deleteCulture: (id) =>
        set((state) => ({
          cultures: state.cultures.filter((c) => c.id !== id),
          batches: state.batches.filter((b) => b.cultureId !== id),
        })),
      deleteBatch: (id) =>
        set((state) => ({
          batches: state.batches.filter((b) => b.id !== id),
        })),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({
        cultures: state.cultures,
        batches: state.batches,
      }),
      onRehydrateStorage: () => () => {
        useCultivoStore.setState({ hasHydrated: true });
      },
    },
  ),
);

type PersistedSlice = {
  cultures?: Culture[];
  batches?: Batch[];
};

export function loadFromStorage() {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as PersistedSlice & { state?: PersistedSlice };
      const state: PersistedSlice = parsed.state ?? parsed;
      useCultivoStore.setState({
        cultures: Array.isArray(state.cultures) ? state.cultures : [],
        batches: Array.isArray(state.batches) ? state.batches : [],
        hasHydrated: true,
      });
    } else {
      useCultivoStore.setState({ hasHydrated: true });
    }
  } catch {
    useCultivoStore.setState({ hasHydrated: true });
  }
}

export function currentBatch(batches: Batch[], cultureId: string) {
  const ofCulture = batches.filter((b) => b.cultureId === cultureId);
  return ofCulture.find((b) => !b.collectedAt) ?? ofCulture[0] ?? null;
}

export function upcomingBatches(batches: Batch[]) {
  return batches
    .filter((b) => !b.collectedAt)
    .slice()
    .sort((a, b) => new Date(a.harvestAt).getTime() - new Date(b.harvestAt).getTime());
}
