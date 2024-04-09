import { defineStore } from "pinia";

export const useMemberStore = defineStore('memberStore', {
    state:()=>({
        imamAppoinmentList: [],
        questionListForImam:[],
    }),
    actions:{
    },
    persist:true
})