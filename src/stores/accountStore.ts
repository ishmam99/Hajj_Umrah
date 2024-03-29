import { defineStore } from "pinia";

export const useAccountStore = defineStore('accountStore', {
    state:()=>({
        accountLedger: [],
        payroll: [],
        projectExpenseList: [],
        opeationExpenseList: [],
        donationList: [],
        fundList:[],
    }),
    actions:{
        DonationListCreate(donation) {
            console.log(donation , this.donationList)
            // const currentDonationList = this.donationList
            // currentDonationList
            this.donationList.push(donation)
        },
        AccountLedgerListCreate(ledger) {
            
            // const currentDonationList = this.donationList
            // currentDonationList
            this.accountLedger.push(ledger)
            console.log( ledger, this.accountLedger)
        },
        PayrollListCreate(payroll) {
      
            this.payroll.push(payroll)
            console.log( payroll, this.payroll)
        },
    },
    persist:true
})