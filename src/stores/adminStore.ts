
import { defineStore } from 'pinia';

export const useAdminStore = defineStore('adminStore',{
    state: () => ({
        accountLedger: [],
        payroll: [],
        projectExpenseList: [],
        opeationExpenseList: [],
        donationList: [],
        fundList: [],
        
        announcementList: [],

        event: [],
        projectList: [],
        eventList: [],

        yearPlannerList: [],
        programList: [],

        bannerList: [],
        promotionList: [],
        publicationList: [],
        khutbahList: [],
        khatiraList: [],
        categoryLit: [],
        categoryWiseImage: [],
        imageList:[],
  }),
  actions: {
    
  },
  persist:true
});