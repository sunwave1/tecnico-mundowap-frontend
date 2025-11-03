import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MAX_DURATION } from "../components/GroupWorkday";
import { Helper } from "../lib/helper";
import { Visit } from "../lib/interfaces";
import { VisitFormData } from "../lib/zod.schema";

interface VisitState {
    visits: Array<Visit>;
    editing: Visit | null;
    addVisit: (visit: Visit) => void;
    setEditing: (visit: Visit | null) => void;
    getEditing: () => Visit | null;
    updateVisit: (id: string, visit: Visit) => void;
    removeById: (id: string) => void;
    removeLast: () => void;
    findById: (id: string) => Visit | undefined;
    getTotalSecondsByDate: (date: string) => number;
    getSecondsCompletedByDate: (date: string) => number;
    getVisitsByDate: (date: string) => Array<Visit>;
    getPendingVisitsByDate: (date: string) => Array<Visit>;
    makeVisitByForm: (data: VisitFormData, applyId?: string) => Visit;
    completeVisit: (id: string) => void;
    isDurationValidForVisit: (
        date: string,
        forms: number,
        products: number,
        ignoreId?: string,
    ) => boolean;
    closeDate: (date: string) => void;
}

export const useVisit = create<VisitState>()(
    persist(
        (set, get) => ({
            visits: [],
            editing: null,
            setEditing: (visit) => set({ editing: visit }),
            getEditing: () => get().editing,
            completeVisit: (id: string) =>
                set((state) => ({
                    visits: state.visits.map((visit) =>
                        visit.id === id ? { ...visit, completed: true } : visit,
                    ) as Array<Visit>,
                })),
            addVisit: (visit) =>
                set((state) => ({ visits: [...state.visits, visit] })),
            makeVisitByForm: (data: VisitFormData, applyId?: string) => {
                return {
                    id: applyId ? applyId : crypto.randomUUID(),
                    date: data.date,
                    completed: 0,
                    forms: parseInt(data.forms),
                    products: parseInt(data.products),
                    duration: 0,
                    address: {
                        cep: data.cep,
                        city: data.city,
                        uf: data.uf,
                        sublocality: data.sublocality,
                        street: data.street,
                        street_number: data.street_number,
                    },
                };
            },
            updateVisit: (id, visit) =>
                set((state) => ({
                    visits: state.visits.map((v, i) =>
                        v.id === id ? visit : v,
                    ),
                })),
            removeById: (id) =>
                set((state) => ({
                    visits: state.visits.filter((v) => v.id !== id),
                })),
            removeLast: () =>
                set((state) => ({
                    visits: state.visits.slice(0, -1),
                })),
            findById: (id: string) => get().visits.find((v) => v.id === id),
            getVisitsByDate: (date: string) =>
                get().visits.filter((it) => it.date === date),
            getTotalSecondsByDate: (date: string) => {
                const dateVisits: Array<Visit> = get().getVisitsByDate(date);
                return dateVisits.reduce(
                    (total, visit) =>
                        total +
                        Helper.calculateDuration(visit.forms, visit.products),
                    0,
                );
            },
            getSecondsCompletedByDate: (date: string) => {
                const dateVisits: Array<Visit> = get().getVisitsByDate(date);
                return dateVisits
                    .filter((visit) => visit.completed === 1 || visit.completed)
                    .reduce(
                        (total, visit) =>
                            total +
                            Helper.calculateDuration(
                                visit.forms,
                                visit.products,
                            ),
                        0,
                    );
            },
            getPendingVisitsByDate: (date: string) => {
                const dateVisits: Array<Visit> = get().getVisitsByDate(date);
                return dateVisits.filter(
                    (visit) => visit.completed === 0 || !visit.completed,
                );
            },
            isDurationValidForVisit: (
                date: string,
                forms: number,
                products: number,
                ignoreId?: string,
            ) => {
                const currentTotalSeconds: number =
                    get().getTotalSecondsByDate(date);
                const visitDuration: number = Helper.calculateDuration(
                    forms,
                    products,
                );

                if (ignoreId) {
                    const findVisit = get().findById(ignoreId);
                    if (findVisit) {
                        return (
                            currentTotalSeconds -
                                Helper.calculateDuration(
                                    findVisit.forms,
                                    findVisit.products,
                                ) +
                                visitDuration <=
                            MAX_DURATION
                        );
                    }
                }

                return currentTotalSeconds + visitDuration <= MAX_DURATION;
            },
            closeDate: (date: string) => {
                const pendingVisit: Array<Visit> =
                    get().getPendingVisitsByDate(date);

                if (pendingVisit.length <= 0) return;

                const tmpUpdateVisits = [...get().visits];
                let now = new Date(date);
                pendingVisit.forEach((it) => {
                    let nextDate = new Date(now);
                    nextDate.setDate(nextDate.getDate() + 1);
                    let nextDateStr = nextDate.toISOString().split("T")[0];
                    let isDurationValidVisit = get().isDurationValidForVisit;

                    while (
                        !isDurationValidVisit(
                            nextDateStr,
                            it.forms,
                            it.products,
                            it.id,
                        )
                    ) {
                        nextDate.setDate(nextDate.getDate() + 1);
                        nextDateStr = nextDate.toISOString().split("T")[0];
                    }

                    const visitUpdatedIndex = tmpUpdateVisits.findIndex(
                        (v) => v.id === it.id,
                    );
                    if (visitUpdatedIndex !== -1) {
                        tmpUpdateVisits[visitUpdatedIndex] = {
                            ...tmpUpdateVisits[visitUpdatedIndex],
                            date: nextDateStr,
                        };
                    }
                });

                set((state) => ({
                    ...state,
                    visits: tmpUpdateVisits,
                }));
            },
        }),
        {
            name: "visits-storage",
        },
    ),
);
