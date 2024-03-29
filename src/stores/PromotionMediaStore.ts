
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const usePromotionMediaStore = defineStore('mediaStore',{
  state: () => ({
        promotionList: [],
    authUser : '',
  }),
  actions: {
    
  },
});