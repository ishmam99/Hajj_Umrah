
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
        bidList: [],
        
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