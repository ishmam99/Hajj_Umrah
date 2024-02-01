
import { defineStore } from 'pinia';

// const pinia = createPinia();

export const useAuthStore = defineStore('authStore',{
  state: () => ({
    isAuthenticated: false,
        user: null,
        userList: [
            {
                email: 'membar@idl.com',
                password: '123456'
            },
            {
                email: 'admin@idl.com',
                password: '123456'
            },
            {
                email: 'president@idl.com',
                password: '123456'
            },
            {
                email: 'user@idl.com',
                password: '123456'
            },
        ]
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