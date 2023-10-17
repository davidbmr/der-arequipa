import { create } from 'zustand'
const FormDataStore = create((set) => ({
  formData: {},
  isFase2: false,
  setFormData: (data) => set({ formData: data }),
  toggleFase2: () => set((state) => ({ isFase2: !state.isFase2 })),
  resetState: () => set({ formData: {}, isFase2: false })
}));

export default FormDataStore;
