import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
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
      path: '/explore/quran',
      name: 'explore/quran',
      component: () => import('../views/Explore/Quran.vue')
    },



    {
      path: '/about/board_of_directors',
      name: 'about/board_of_directors',
      component: () => import('../views/AboutUs/BoardOfDirectors.vue')
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
      path: '/contact/mashjid_info',
      name: 'contact/mashjid_info',
      component: () => import('../views/Contact/MashjidInfo.vue')
    },

    
    {
      path: '/more/hajj_and_umrah',
      name: 'more/hajj_and_umrah',
      component: () => import('../views/More/HajjAndUmrah.vue')
    },{
      path: '/more/ramadan_special',
      name: 'more/ramadan_special',
      component: () => import('../views/More/RamadanSpecial.vue')
    },
    {
      path: '/more/registration/memebship_registration',
      name: 'more/registration/memebship_registration',
      component: () => import('../views/More/Registration/MemebshipRegistration.vue')
    },
  ]
})

export default router
