
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useLMSStore = defineStore('lmsStore',{
  state: () => ({
        courseTypeInfo: [],
        createProgramData: [],
        programListData: [],

  }),
  actions: {
    
  },
  persist:true
});