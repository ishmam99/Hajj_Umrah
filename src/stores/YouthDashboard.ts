
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useYouthStore = defineStore('youthStore',{
  state: () => ({
        event: [],
        yearPlannerList: [],
        programList: [],
    authUser : '',
  }),
});