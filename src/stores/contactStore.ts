import { defineStore } from "pinia";

export const useContactStore = defineStore('contactStore', {
    state:()=>({
        imamList: [],
    }),
    actions:{
    },
    persist:true
})