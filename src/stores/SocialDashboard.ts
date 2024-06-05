
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useSocialStore = defineStore('socialStore',{
  state: () => ({
        event: [],
        projectList: [],
        eventList: [],
  }),
  actions: {
  },
  persist:true
});