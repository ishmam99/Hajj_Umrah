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
        <div v-show="currentAccordions === 'bidManagement'" class="submenu ms-8 bg-slate-100 rounded-md p-2">
          <router-link to="/Supply_Create_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M10.4142 3L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142ZM9.58579 5H4V19H20V7H11.5858L9.58579 5ZM12 9C13.1046 9 14 9.89543 14 11C14 11.7398 13.5983 12.3858 13.0011 12.7318L13 17H11L10.9999 12.7324C10.4022 12.3866 10 11.7403 10 11C10 9.89543 10.8954 9 12 9Z"></path></svg> Create Bid</router-link>
          <router-link to="/Supply_Bid_List" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 19H21V21H3V19ZM11 14H21V16H11V14ZM11 9H21V11H11V9ZM7 12.5L3 16V9L7 12.5Z"></path></svg> Bid List</router-link>
          <router-link to="/Supply_Post_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434ZM11 10V7H13V10H16V12H13V15H11V12H8V10H11Z"></path></svg> Post Bid</router-link>
          <router-link to="/Supply_Select_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg> Select Bid</router-link>
          <router-link to="/Supply_Completed_Bid" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V6H22V20C22 20.5523 21.5523 21 21 21H13ZM8 10C6.34315 10 5 11.3431 5 13C5 14.6569 6.34315 16 8 16C9.65685 16 11 14.6569 11 13H8V10ZM13 10V12H19V10H13ZM13 14V16H19V14H13ZM2 3H22V5H2V3Z"></path></svg> Completed Bid</router-link>
        </div>
      </div>

      <div class="accordion">
        <button @click="toggleAccordion('vendorManagement')" class="flex items-center gap-2 w-full bg-white p-3 rounded-md text-[#2C3E50] hover:shadow-lg transition-shadow duration-200">
          <div v-html="GraduationSVG"></div>
          Vendor Management <div v-if="currentAccordions == '!vendorManagement'" v-html="arrowDropRight"></div><div v-else v-html="arrowDropDown"></div>
        </button>
        <div v-show="currentAccordions === 'vendorManagement'" class="submenu ms-8 bg-slate-100 rounded-md p-2">
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
