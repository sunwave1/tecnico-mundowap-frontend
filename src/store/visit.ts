import { createStore } from "zustand";
import { persist } from "zustand/middleware";
import { Visit } from "../lib/interfaces";

interface VisitState {
    visits: Array<Visit>;
    addVisit: (visit: Visit) => void;
    updateVisit: (index: number, visit: Visit) => void;
}

export const useVisit = createStore<VisitState>()(
    persist(
        (set) => ({
            visits: [],
            addVisit: (visit) =>
                set((state) => ({ visits: [...state.visits, visit] })),
            updateVisit: (index, visit) =>
                set((state) => ({
                    visits: state.visits.map((v, i) =>
                        i === index ? visit : v,
                    ),
                })),
        }),
        {
            name: "visits-storage",
        },
    ),
);
