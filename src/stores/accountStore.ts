import { defineStore } from "pinia";

export const useAccountStore = defineStore('accountStore', {
    state:()=>({
        accountLedger: [],
        payroll: [],
        projectExpenseList: [],
        opeationExpenseList: [],
        donationList: [],
    }),
    actions:{
        
    },
    persist:true
})