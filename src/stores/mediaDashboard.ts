
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useMediaStore = defineStore('mediaStore',{
  state: () => ({
        bannerList: [],
        promotionList: [],
        publicationList: [],
        khutbahList: [],
        khatiraList: [],
        categoryLit: [],
        categoryWiseImage: [],
        imageList:[],
        authUser : '',
  }),
  actions: {
    
  },
});