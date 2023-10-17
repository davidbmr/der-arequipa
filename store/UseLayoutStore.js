import { create } from 'zustand'
const useLayoutStore = create((set) => ({
  showLayout: true,
  toggleLayout: () => set((state) => ({ showLayout: !state.showLayout })),
}));
export default useLayoutStore;
