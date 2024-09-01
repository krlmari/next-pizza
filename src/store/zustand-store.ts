import { create } from "zustand";

type State = {
  currentCategory: string;
};

type Actions = {
  updateCategory: (category: string) => void;
};

const useStore = create<State & Actions>((set) => ({
  currentCategory: "pizza",
  updateCategory: (category) => set({ currentCategory: category }),
}));

export default useStore;
