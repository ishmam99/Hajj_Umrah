
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useLMSStore = defineStore('lmsStore',{
  state: () => ({
        courseType: [],
        createProgramData: [],

  }),
  actions: {
    
  },
  persist:true
});