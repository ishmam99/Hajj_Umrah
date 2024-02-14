import { defineStore } from 'pinia'

// const pinia = createPinia();

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    userList: [
      {
        email: 'member@idl.com',
        password: '123456',
        role: 'member'
      },
      {
        email: 'admin@idl.com',
        password: '123456',
        role: 'admin'
      },
      {
        email: 'social@idl.com',
        password: '123456',
        role: 'social'
      },
      {
        email: 'youth@idl.com',
        password: '123456',
        role: 'youth'
      },
      {
        email: 'finance@idl.com',
        password: '123456',
        role: 'finance'
      },
      {
        email: 'education@idl.com',
        password: '123456',
        role: 'education'
      },
      {
        email: 'supply@idl.com',
        password: '123456',
        role: 'supply'
      },
      {
        email: 'hr@idl.com',
        password: '123456',
        role: 'hr'
      },
      {
        email: 'volunteer@idl.com',
        password: '123456',
        role: 'volunteer'
      },
      {
        email: 'operation@idl.com',
        password: '123456',
        role: 'operation'
      }
    ],
    authUser: ''
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true
      this.user = user
    },
    logout() {
      this.isAuthenticated = false
      this.user = null
    },
    signup(user) {
      this.isAuthenticated = true
      this.user = user
    }
  }
})
