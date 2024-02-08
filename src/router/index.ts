import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/services/nikah',
      name: 'services/nikah',
      component: () => import('../views/Services/NikahService.vue')
    },
    {
      path: '/services/facilities',
      name: 'services/facilities',
      component: () => import('../views/Services/FacilitiesService.vue')
    },
    {
      path: '/services/education',
      name: 'services/education',
      component: () => import('../views/Services/EducationService.vue')
    },
    {
      path: '/services/funeral',
      name: 'services/funeral',
      component: () => import('../views/Services/FuneralService.vue')
    },
    {
      path: '/services/matrimony',
      name: 'services/matrimony',
      component: () => import('../views/Services/MatrimonyService.vue')
    },
    {
      path: '/services/new_muslim',
      name: 'services/new_muslim',
      component: () => import('../views/Services/NewMuslimService.vue')
    },
    {
      path: '/services/special_needs',
      name: 'services/special_needs',
      component: () => import('../views/Services/SpecialNeedsService.vue')
    },
    {
      path: '/services/social',
      name: 'services/social',
      component: () => import('../views/Services/SocialService.vue')
    },

    {
      path: '/explore/dua',
      name: 'explore/dua',
      component: () => import('../views/Explore/Dua.vue')
    },
    {
      path: '/explore/hadith',
      name: 'explore/hadith',
      component: () => import('../views/Explore/Hadith.vue')
    },
    {
      path: '/explore/watch',
      name: 'explore/watch',
      component: () => import('../views/Explore/Watch.vue')
    },
    {
      path: '/explore/publications',
      name: 'explore/publications',
      component: () => import('../views/Explore/Publications.vue')
    },
    {
      path: '/explore/quran',
      name: 'explore/quran',
      component: () => import('../views/Explore/Quran.vue')
    },
    {
      path: '/explore/quran/:id',
      name: 'explore/quranview',
      component: () => import('../views/Explore/QuranView.vue')
    },

    {
      path: '/about/board_of_directors',
      name: 'about/board_of_directors',
      component: () => import('../views/AboutUs/BoardOfDirectors.vue')
    },
    {
      path: '/about/about_us',
      name: 'about/about_us',
      component: () => import('../views/AboutUs/About.vue')
    },
    {
      path: '/about/committees',
      name: 'about/committees',
      component: () => import('../views/AboutUs/Committees.vue')
    },
    {
      path: '/about/policies',
      name: 'about/policies',
      component: () => import('../views/AboutUs/Policies.vue')
    },
    {
      path: '/about/team',
      name: 'about/team',
      component: () => import('../views/AboutUs/Team.vue')
    },

    {
      path: '/contact/ask_imam',
      name: 'contact/ask_imam',
      component: () => import('../views/Contact/AskImam.vue')
    },
    {
      path: '/contact/ask_scholar',
      name: 'contact/ask_scholar',
      component: () => import('../views/Contact/AskScholar.vue')
    },
    {
      path: '/contact/get_appointment',
      name: 'contact/get_appointment',
      component: () => import('../views/Contact/GetAppointment.vue')
    },
    {
      path: '/contact/contact_us',
      name: 'contact/contact_us',
      component: () => import('../views/Contact/ContactUs.vue')
    },
    {
      path: '/contact/mashjid_info',
      name: 'contact/mashjid_info',
      component: () => import('../views/Contact/MashjidInfo.vue')
    },

    {
      path: '/employees/employeeLogin',
      name: 'Employee Login',
      component: () => import('../views/Employees/EmployeeLogin.vue')
    },

    {
      path: '/HR-Login',
      name: 'HR-Login',
      component: () => import('../views/Employees/HR_Login.vue')
    },
    {
      path: '/activity/event',
      name: 'Event',
      component: () => import('../views/Activity/Event.vue')
    },
    {
      path: '/activity/events',
      name: 'Events',
      component: () => import('../views/Activity/Events.vue')
    },
    {
      path: '/activity/project',
      name: 'activity/project',
      component: () => import('../views/Activity/Project.vue')
    },
    {
      path: '/activity/projects',
      name: 'projects',
      component: () => import('../views/Activity/Projects.vue')
    },

    {
      path: '/volunteer/educate_the_children',
      name: 'volunteer/educate_the_children',
      component: () => import('../views/Volunteer/EducateTheChildren.vue')
    },
    {
      path: '/volunteer/shelter_the_homeless',
      name: 'volunteer/shelter_the_homeless',
      component: () => import('../views/Volunteer/ShelterHomeless.vue')
    },
    {
      path: '/volunteer/enhance_social_jsustice',
      name: 'volunteer/enhance_social_jsustice',
      component: () => import('../views/Volunteer/EnhanceSocialJustice.vue')
    },
    {
      path: '/volunteer/feed_the_hungry',
      name: 'volunteer/feed_the_hungry',
      component: () => import('../views/Volunteer/FeedTheHungry.vue')
    },
    {
      path: '/volunteer/comfort_the_sick',
      name: 'volunteer/comfort_the_sick',
      component: () => import('../views/Volunteer/ComfortTheSick.vue')
    },

    {
      path: '/more/hajj_and_umrah',
      name: 'more/hajj_and_umrah',
      component: () => import('../views/More/HajjAndUmrah.vue')
    },
    {
      path: '/more/ramadan_special',
      name: 'more/ramadan_special',
      component: () => import('../views/More/RamadanSpecial.vue')
    },
    {
      path: '/Member_Donation',
      name: 'Member Donation',
      component: () => import('../views/Donation/DonationView.vue')
    },
    {
      path: '/Guest_Donation',
      name: 'Guest Donation',
      component: () => import('../views/Donation/DonationView.vue')
    },
    {
      path: '/onsitelearning',
      name: 'onsitelearning',
      component: () => import('../views/OnsiteEducation.vue')
    },
    {
      path: '/studentadmission',
      name: 'studentadmission',
      component: () => import('../views/LearningCenter/StudentAdmission.vue')
    },
    {
      path: '/volunteers/volunteeradmission',
      name: 'volunteeradmission',
      component: () => import('../views/GetInvolved/Volunteers/VolunteerAdmission.vue')
    },
    {
      path: '/volunteers/volunteerlogin',
      name: 'volunteerlogin',
      component: () => import('../views/GetInvolved/Volunteers/VolunteerLogin.vue')
    },
    {
      path: '/getinvolved/applyforspeaker',
      name: 'applyforspeaker',
      component: () => import('../views/GetInvolved/ApplyForSpeaker.vue')
    },
    {
      path: '/getinvolved/applyforimam',
      name: 'applyforimam',
      component: () => import('../views/GetInvolved/ApplyForGuestImam.vue')
    },
    {
      path: '/Fund_Raising',
      name: 'Fund_Raising',
      component: () => import('../views/GetInvolved/FundRaising/FundRaising.vue'),
    },
    {
      path: '/Fund_Raising_Form',
      name: 'Fund_Raising_Form',
      component: () => import('../views/GetInvolved/FundRaising/FundRaisingForm.vue'),
    },
    {
      path: '/learing-center/education-form',
      name: '/learing-center/education-form',
      component: () => import('../views/LearningCenter/LearningCenterEducationForm.vue')
    },
    {
      path: '/more/registration/memebship_registration',
      name: 'more/registration/memebship_registration',
      component: () => import('../views/More/Registration/MemebshipRegistration.vue')
    },
    {
      path: '/more/registration/mosjid_wavier_and_release_liability',
      name: 'more/registration/mosjid_wavier_and_release_liability',
      component: () => import('../views/More/Registration/MosjidWavierAndReleaseLiability.vue')
    },
    {
      path: '/more/registration/sports_and_recreation_event',
      name: 'more/registration/sports_and_recreation_event',
      component: () => import('../views/More/Registration/SportsAndRecreationEvent.vue')
    },
    {
      path: '/more/registration/esl_class_registration',
      name: 'more/registration/esl_class_registration',
      component: () => import('../views/More/Registration/ESLClassRegistration.vue')
    },
    {
      path: '/Member_Login',
      name: 'Member Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Membar_Dashboard',
      name: 'Membar_Dashboard',
      component: () => import('../views/Member/MembarDashbord.vue'),
    },

    {
      path: '/Admin_Login',
      name: 'Admin Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Admin_Dashboard',
      name: 'Admin_Dashboard',
      component: () => import('../views/Admin/AdminDashboard.vue'),
    },

    {
      path: '/Social_Service_Login',
      name: 'Social Service Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Social_Service_Dashboard',
      name: 'Social_Dashboard',
      component: () => import('../views/Social/SocialDashboard.vue'),
    },
    {
      path: '/Social_Service_Event_List',
      name: 'Social_Service_Event_List',
      component: () => import('../views/Social/SocialManagementEventList.vue'),
    },
    {
      path: '/Social_Service_Project_List',
      name: 'Social_Service_Project_List',
      component: () => import('../views/Social/SocialManagementProjectList.vue'),
    },
    {
      path: '/Social_Service_Event_Create',
      name: 'Social_Service_Event_Create',
      component: () => import('../views/Social/SocialManegementEventCreate.vue'),
    },
    {
      path: '/Social_Service_Project_Create',
      name: 'Social_Service_Project_Create',
      component: () => import('../views/Social/SocialManagementProjectCreate.vue'),
    },
    {
      path: '/Social_Gallery',
      name: 'Social Gallery',
      component: () => import('../views/Social/SocialGallery.vue'),
    },
    {
      path: '/Social_Change_Password',
      name: 'Social_Change_Password',
      component: () => import('../views/Social/Profile/SocialChangePassword.vue'),
    },

    {
      path: '/Youth_Management_Login',
      name: 'Youth Management Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Youth_Management_Dashboard',
      name: 'Youth_Dashboard',
      component: () => import('../views/Youth/YouthDashborad.vue'),
    },
    {
      path: '/Youth_Program_Create',
      name: 'Youth_Program_Create',
      component: () => import('../views/Youth/YouthProgramCreate.vue'),
    },
    {
      path: '/Youth_Program_List',
      name: 'Youth_Program_List',
      component: () => import('../views/Youth/YouthProgramList.vue'),
    },

    {
      path: '/Finance_Login',
      name: 'Finance Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Finance_Dashboard',
      name: 'Finance_Dashboard',
      component: () => import('../views/Finance/FinanceDashboard.vue'),
    },
    {
      path: '/Finance_Accounts',
      name: 'Finance_Accounts',
      component: () => import('../views/Finance/Accounts.vue'),
    },
    {
      path: '/Finance_Operational_Expenses',
      name: 'Finance_Operational_Expenses',
      component: () => import('../views/Finance/OperationalExpenses.vue'),
    },
    {
      path: '/Finance_Project_Expenses',
      name: 'Finance_Project_Expenses',
      component: () => import('../views/Finance/ProjectExpenses.vue'),
    },
    {
      path: '/Finance_Deposits',
      name: 'Finance_Deposits',
      component: () => import('../views/Finance/FinanceDeposits.vue'),
    },
    {
      path: '/Finance_Donations',
      name: 'Finance_Donations',
      component: () => import('../views/Finance/Donations.vue'),
    },

    {
      path: '/Education_Login',
      name: 'Education Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Education_Dashboard',
      name: 'Education_Dashboard',
      component: () => import('../views/Member/MembarDashbord.vue'),
    },
    {
      path: '/Supply_Chain_Management_Login',
      name: 'Supply Chain Management Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Supply_Chain_Management_Chain_Management_Dashboard',
      name: 'Supply_Dashboard',
      component: () => import('../views/Supply/SupplyDashbord.vue'),
    },
    {
      path: '/HR_Login',
      name: 'HR Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/HR_Dashboard',
      name: 'HR_Dashboard',
      component: () => import('../views/Hr/HrDashbord.vue'),
    },
    {
      path: '/Operation_Login',
      name: 'Operation Login',
      component: () => import('../views/Auth/LogIn.vue'),
    },
    {
      path: '/Opration_Dashboard',
      name: 'Operation_Dashboard',
      component: () => import('../views/Operation/OprationDashbord.vue'),
    },
    {
      path: '/Opration_Meeting_Create',
      name: 'Opration_Meeting_Create',
      component: () => import('../views/Operation/MeetingCreate.vue'),
    },
    {
      path: '/Signup',
      name: 'Signup',
      component:()=>import('../views/Auth/SingnUp.vue')
    },
    {
      path: '/boardmemberlogin',
      name: 'boardmemberlogin',
      component: () => import('../views/Activity/BoardMemberLogin.vue'),
    },
    {
      path: '/Membar_Dashboard',
      name: 'Membar_Dashboard',
      component: () => import('../views/Member/MembarDashbord.vue'),
    },
    {
      path: '/Membar_Event_History',
      name: 'Membar_Event_History',
      component: () => import('../views/Member/MemberEventHistory.vue'),
    },
    {
      path: '/Membar_Donation_History',
      name: 'Membar_Donation_History',
      component: () => import('../views/Member/Profile/MemberDonationHistory.vue'),
    },
    {
      path: '/Membar_Payment_History',
      name: 'Membar_Payment_History',
      component: () => import('../views/Member/Profile/MembarPaymentHistory.vue'),
    },
    {
      path: '/Membar_Change_Password',
      name: 'Membar_Change_Password',
      component: () => import('../views/Member/Profile/MemberPassChange.vue'),
    },
    {
      path: '/Select_Volunteer',
      name: 'Select Volunteer',
      component: () => import('../views/Member/MemberVolunteerSelect.vue'),
    },
    {
      path: '/Select_Imam',
      name: 'Select Imam',
      component: () => import('../views/Member/MemberImamSelect.vue'),
    },
    {
      path: '/Prayer_Time',
      name: 'Prayer_Time',
      component: () => import('../views/Services/PrayerService/PrayerTime.vue'),
    },
    {
      path: '/Prayer_Announcement',
      name: 'Prayer_Announcement',
      component: () => import('../views/Services/PrayerService/PrayerAnnouncement.vue'),
    },
    {
      path: '/Next_Prayer_Service',
      name: 'Next_Prayer_Service',
      component: () => import('../views/Services/PrayerService/NextPrayerService.vue'),
    },
    {
      path: '/Recent_Prayer_Service',
      name: 'Recent_Prayer_Service',
      component: () => import('../views/Services/PrayerService/RecentPrayerService.vue'),
    },
    {
      path: '/Makkah_Live',
      name: 'Makkah_Live',
      component: () => import('../views/Services/PrayerService/MakkhaLive.vue'),
    },
    {
      path: '/Janaja_Announcement',
      name: 'Janaja_Announcement',
      component: () => import('../views/Services/PrayerService/JanajaService.vue'),
    },
    {
      path: '/Ranadam_Payer_Time',
      name: 'Ranadam_Payer_Time',
      component: () => import('../views/Services/PrayerService/RamadanPrayerTime.vue'),
    },

    {
      path: '/Kabah',
      name: 'Kabah',
      component: () => import('../views/Gallery/Kabah.vue'),
    },
    {
      path: '/Mashjib',
      name: 'Mashjib',
      component: () => import('../views/Gallery/Mashjid.vue'),
    },
    {
      path: '/Social_Gallery',
      name: 'Social_Gallery',
      component: () => import('../views/Gallery/SocialGallery.vue'),
    },
    {
      path: '/Event_Gallery',
      name: 'Event_Gallery',
      component: () => import('../views/Gallery/EventGallery.vue'),
    },

    {
      path: '/Supply_Chain/supplier',
      name: 'supplier',
      component: () => import('../views/SupplyChain/Supplier.vue')
    },
    {
      path: '/Supply_Chain/customer',
      name: 'customer',
      component: () => import('../views/SupplyChain/Customer.vue')
    },
    {
      path: '/Supply_Chain/customerLogin',
      name: 'Customer Login',
      component: () => import('../views/SupplyChain/CustomerLogin.vue')
    },
    {
      path: '/Supply_Chain/supplierLogin',
      name: 'Supplier Login',
      component: () => import('../views/SupplyChain/SupplierLogin.vue')
    },

    
  ]
})

export default router
