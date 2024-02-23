import { defineStore } from "pinia";

export const useAccountStore = defineStore('accountStore', {
    state:()=>({
        accountLedger : [],
    }),
    actions:{
        
    },
    persist:true
})