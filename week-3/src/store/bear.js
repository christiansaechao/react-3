import { create } from "zustand";
// nested data
import { immer } from 'zustand/middleware/immer'
// persisting data through renders/refreshes and in localStorage
import { persist, createJSONStorage } from 'zustand/middleware'
// partialize - specify which parts of state are persisted

export const useBear = create((set) => ({
  bears: {
    count: 0,
    types: {
        0: "Panda",
        1: "Brown",
        2: "Grizzly",
        3: "Black",
        4: "Polar"
    }
  },
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
