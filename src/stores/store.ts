import { defineStore } from "pinia";

export const useStore = defineStore( 'store',{
    state:()=>({
        prayertime : [],
        event: [],  
        announcement: [],
        serviceList:[],
        donationType:[],
        volunteerJobList:[],
        donationForm: [],
        registerVolunteerChk : null
    }),
    actions:{
        
    },
    persist:true
})