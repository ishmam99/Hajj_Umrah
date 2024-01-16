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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services/social',
      name: 'about',
      component: () => import('../views/Services/SocialService.vue')
    }
  ]
})

export default router
