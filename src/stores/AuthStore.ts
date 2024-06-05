import { defineStore } from 'pinia'

// const pinia = createPinia();

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    token: null,
    role: null,
    currentDashboard: null,
    authUser: ''
  }),
  actions: {
    login(user,token,role) {
      this.isAuthenticated = true
      this.user = user
      this.token = token
      this.role = role
      console.log(user, token,role )
    },

    logout() {
      this.isAuthenticated = false
      this.user = null
      this.token= null
      this.role= null
      this.currentDashboard= null
    },
    signup(user) {
      this.isAuthenticated = true
      this.user = user
    }
  },
  persist:true
})
