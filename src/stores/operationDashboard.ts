
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useOperationStore = defineStore('operationStore',{
  state: () => ({
        announcementList: [],

  }),
  actions: {
    
  },
  persist:true
});