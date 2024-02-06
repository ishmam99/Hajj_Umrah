import { defineStore } from "pinia";

export const useStore = defineStore( 'store',{
    state:()=>({
        prayertime : [],
        event: [],  
        announcement: [],
        serviceList:[],
        donationType:[],
    }),
    actions:{
        
    },
    persist:true
})