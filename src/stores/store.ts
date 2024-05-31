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
        active_event_list: [],
        past_event_list: [],
        upcomming_event_list: [],
        active_project_list: [],
        past_project_list: [],
        upcomming_project_list:[],
        registerVolunteerChk : null,
        donation: {
            donation_method_id: '',
            name: '',
            email: '',
            session_token: '',
            success_token: '',
        }
    }),
    actions:{
        
    },
    persist:true
})