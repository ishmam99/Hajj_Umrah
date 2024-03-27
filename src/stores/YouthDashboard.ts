
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useYouthStore = defineStore('youthStore',{
  state: () => ({
        event: [],
        yearPlannerList: [],
        programList: [],
    authUser : '',
  }),
  actions: {
    login (user) {
 
      this.isAuthenticated = true;
      this.user = user;
    },
    logout () {
      this.isAuthenticated = false;
      this.user = null;
      },
      signup (user) {
        this.isAuthenticated = true;
        this.user = user;
      },
  },
});