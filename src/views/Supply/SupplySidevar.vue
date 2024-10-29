<template>
  <div class="bg-[#2C3E50] w-1/4 h-screen sticky top-[80px]">
    <div class="bg-[#34495E] p-5 h-full flex flex-col gap-4 font-semibold text-lg">
      <p class="text-3xl font-bold text-white">Supply Chain Management Dashboard</p>
      <p class="text-xl font-bold text-[#ECF0F1]">Welcome <span class="text-yellow-400">{{ store?.user?.name }}</span></p> 
      
      <router-link to="Supply_Management_Dashboard" class="flex items-center gap-2 bg-white p-3 rounded-md text-[#2C3E50] hover:shadow-lg transition-shadow duration-200">
        <div v-html="profileSVG"></div>
        Dashboard
      </router-link>

      <div class="accordion">
        <button @click="toggleAccordion('bidManagement')" class="flex items-center gap-2 w-full bg-white p-3 rounded-md text-[#2C3E50] hover:shadow-lg transition-shadow duration-200">
          <div v-html="GraduationSVG"></div>
          Bid Management <div v-if="currentAccordions == '!bidManagement'" v-html="arrowDropRight"></div><div v-else v-html="arrowDropDown"></div>
        </button>
        <div v-show="currentAccordions === 'bidManagement'" class="submenu mx-8 bg-slate-100 rounded-md p-2">
          <router-link to="/Supply_Create_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Create Bid</router-link>
          <router-link to="/Supply_Bid_List" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Bid List</router-link>
          <router-link to="/Supply_Post_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Post Bid</router-link>
          <router-link to="/Supply_Select_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Select Bid</router-link>
          <router-link to="/Supply_Completed_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Completed Bid</router-link>
        </div>
      </div>

      <div class="accordion">
        <button @click="toggleAccordion('vendorManagement')" class="flex items-center gap-2 w-full bg-white p-3 rounded-md text-[#2C3E50] hover:shadow-lg transition-shadow duration-200">
          <div v-html="GraduationSVG"></div>
          Vendor Management <div v-if="currentAccordions == '!vendorManagement'" v-html="arrowDropRight"></div><div v-else v-html="arrowDropDown"></div>
        </button>
        <div v-show="currentAccordions === 'vendorManagement'" class="submenu mx-8 bg-slate-100 rounded-md p-2">
          <router-link to="/Supply_Hire_Vendor" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- New Vendor Application</router-link>
          <router-link to="/Supply_Vendor_List" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Registered Vendor List</router-link>
          <router-link to="/Supply_Active_Vendor" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Active Vendor List</router-link>
          <router-link to="/Supply_Prefered_Vendor_List" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md">- Preferred Vendor List</router-link>
        </div>
      </div>

      <button type="button" @click="store.logout()" class="py-2 px-5 mt-2 w-1/2 bg-red-800 rounded-md text-white duration-300 hover:bg-red-700 transition-colors">
        Log Out
      </button>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '/src/stores/AuthStore'

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

const currentAccordions = ref('bidManagement')

const GraduationSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(222, 184, 135)">
            <path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z" />
          </svg>`
const profileSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgb(222, 184, 135)">
          <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
        </svg>`     

const arrowDropRight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14 12L10 16V8L14 12Z"></path></svg>`        
const arrowDropDown = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>`
const toggleAccordion = (accordionName) => {
  if (currentAccordions.value === accordionName) {
    currentAccordions.value = ''
  } else {
    currentAccordions.value = accordionName
  }
}

watch(
  () => route,
  () => {
    if (route.name.includes('Bid')) {
      currentAccordions.value = 'bidManagement'
    } else {
      currentAccordions.value = 'vendorManagement'
    }
  },
  {
    deep: true,
    immediate: true
  }
)

watch(
  () => store.isAuthenticated,
  (newIsAuthenticated) => {
    if (!newIsAuthenticated) {
      router.push('/')
    }
  }
)
</script>

<style scoped>
.router-link-active {
  color: rgb(222, 184, 135);
  background-color: darkcyan
}
</style>
