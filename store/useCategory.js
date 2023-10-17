import {create} from 'zustand';

const useCategoryStore = create((set) => ({
  selectedCategory: null,
  setCategory: (category) => set({ selectedCategory: category }),
}));

export default useCategoryStore;
