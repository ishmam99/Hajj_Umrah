import { defineStore } from "pinia";

export const useStore = defineStore( 'store',{
    state:()=>({
    prayertime : [],
    event: [],  
    announcement :[],
    }),
    actions:{
        
    },
    persist:true
})