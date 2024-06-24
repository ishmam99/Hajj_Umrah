
import { defineStore } from 'pinia';

export const useAdminStore = defineStore('adminStore',{
    state: () => ({
        payroll: [],
        projectExpenseList: [],
        opeationExpenseList: [],
        donationList: [],
        fundList: [],
        accountLedger: [],
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