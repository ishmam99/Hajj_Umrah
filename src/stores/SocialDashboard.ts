
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useSocialStore = defineStore('socialStore',{
  state: () => ({
        event: [],
        projectList: [],
        eventList: [],
    authUser : '',
  }),
  actions: {
  },
  persist:true
});