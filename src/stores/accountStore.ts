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
        DonationListCreate(donation) {
            console.log(donation , this.donationList)
            // const currentDonationList = this.donationList
            // currentDonationList
            this.donationList.push(donation)
        },
    },
    persist:true
})