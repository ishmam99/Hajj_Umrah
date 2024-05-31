import { defineStore } from "pinia";

export const useMemberStore = defineStore('memberStore', {
    state:()=>({
        imamAppoinmentList: [],
        questionListForImam: [],
        volunteerList:[],
    }),
    actions:{
    },
    persist:true
})