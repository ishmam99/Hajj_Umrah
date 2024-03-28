
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useMediaStore = defineStore('mediaStore',{
  state: () => ({
        bannerList: [],
    authUser : '',
  }),
  actions: {
    
  },
});