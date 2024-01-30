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
      path: '/activity/event',
      name: 'activity/event',
      component: () => import('../views/Activity/Event.vue')
    },
    {
      path: '/activity/project',
      name: 'activity/project',
      component: () => import('../views/Activity/Project.vue')
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
      path: '/getinvolved/fund-raising',
      name: 'fundraise',
      component: () => import('../views/GetInvolved/Fundraise.vue')
    },
    {
      path: '/getinvolved/applyforimam',
      name: 'applyforimam',
      component: () => import('../views/GetInvolved/ApplyForGuestImam.vue')
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
      path: '/Login',
      name: 'Login',
      component: () => import('../views/Auth/LogIn.vue'),
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
      component: () => import('../views/Member/MembarDonation.vue'),
    },
    {
      path: '/Membar_Payment_History',
      name: 'Membar_Payment_History',
      component: () => import('../views/Member/MembarPaymentHistory.vue'),
    },
    {
      path: '/Membar_Change_Password',
      name: 'Membar_Change_Password',
      component: () => import('../views/Member/MemberPassChange.vue'),
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
  ]
})

export default router
