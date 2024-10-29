<template>
  <div class="bg-[#2C3E50] w-1/4 h-screen sticky top-[80px]">
    <div class="bg-[#34495E] p-5 h-full flex flex-col gap-4 font-semibold text-lg">
      <p class="text-3xl font-bold text-white">Supply Chain Management Dashboard</p>
      <p class="text-xl font-bold text-[#ECF0F1]">Welcome <span class="text-yellow-400">{{ store?.user?.name }}</span></p> 
      
      <router-link to="Supply_Management_Dashboard" class="flex items-center gap-2 bg-white p-3 rounded-md text-[#2C3E50] hover:shadow-lg transition-shadow duration-200">
        <div v-html="profileSVG"></div>
        Dashboard
      </router-link>

      <div class="accordion bg-white p-3">
        <button @click="toggleAccordion('bidManagement')" class="flex items-center gap-2 w-full bg-white py-3 rounded-md text-[#2C3E50] hover:shadow-lg transition-shadow duration-200">
          <div v-html="bidManagementSVG"></div>
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

      <div class="accordion bg-white p-3">
        <button @click="toggleAccordion('vendorManagement')" class="flex items-center gap-2 w-full bg-white py-3 rounded-md text-[#2C3E50] hover:shadow-lg transition-shadow duration-200">
          <div v-html="vendorManagementSVG"></div>
          Vendor Management <div v-if="currentAccordions == '!vendorManagement'" v-html="arrowDropRight"></div><div v-else v-html="arrowDropDown"></div>
        </button>
        <div v-show="currentAccordions === 'vendorManagement'" class="submenu ms-8 bg-slate-100 rounded-md p-2">
          <router-link to="/Supply_Hire_Vendor" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z"></path></svg> New Vendor Application</router-link>
          <router-link to="/Supply_Vendor_List" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M14 7C14 8.10461 13.1046 9 12 9 10.8954 9 10 8.10461 10 7 10 5.89539 10.8954 5 12 5 13.1046 5 14 5.89539 14 7ZM15 11C15 10.4478 14.5522 10 14 10H10C9.44775 10 9 10.4478 9 11V15H10.5V19H13.5V15H15V11ZM12 2C6.47717 2 2 6.47717 2 12 2 17.5228 6.47717 22 12 22 17.5228 22 22 17.5228 22 12 22 6.47717 17.5228 2 12 2ZM4 12C4 7.58167 7.58167 4 12 4 16.4183 4 20 7.58167 20 12 20 16.4183 16.4183 20 12 20 7.58167 20 4 16.4183 4 12Z"></path></svg> Registered Vendor List</router-link>
          <router-link to="/Supply_Active_Vendor" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 8V12H19V9H14V4H5V20H11V22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM13.7857 15.3269C13.8246 14.5997 14.3858 14.0083 15.11 13.9313L15.9807 13.8389C16.0841 13.8279 16.1815 13.7845 16.2589 13.715L16.9102 13.1299C17.4519 12.6431 18.2669 12.6218 18.8334 13.0795L19.5145 13.6298C19.5954 13.6951 19.6949 13.7333 19.7988 13.7389L20.6731 13.7857C21.4003 13.8246 21.9917 14.3858 22.0687 15.11L22.1611 15.9807C22.1721 16.0841 22.2155 16.1815 22.285 16.2589L22.8701 16.9102C23.3569 17.4519 23.3782 18.2669 22.9205 18.8334L22.3702 19.5145C22.3049 19.5954 22.2667 19.6949 22.2611 19.7988L22.2143 20.6731C22.1754 21.4003 21.6142 21.9917 20.89 22.0687L20.0193 22.1611C19.9159 22.1721 19.8185 22.2155 19.7411 22.285L19.0898 22.8701C18.5481 23.3569 17.7331 23.3782 17.1666 22.9205L16.4855 22.3702C16.4046 22.3049 16.3051 22.2667 16.2012 22.2611L15.3269 22.2143C14.5997 22.1754 14.0083 21.6142 13.9313 20.89L13.8389 20.0193C13.8279 19.9159 13.7845 19.8185 13.715 19.7411L13.1299 19.0898C12.6431 18.5481 12.6218 17.733 13.0795 17.1666L13.6298 16.4855C13.6951 16.4046 13.7333 16.3051 13.7389 16.2012L13.7857 15.3269ZM21.0303 17.0303L19.9697 15.9697L17.5 18.4393L16.0303 16.9697L14.9697 18.0303L17.5 20.5607L21.0303 17.0303Z"></path></svg> Active Vendor List</router-link>
          <router-link to="/Supply_Prefered_Vendor_List" class="flex items-center gap-2 hover:text-white hover:bg-[#16A085] p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H19ZM5 16.1707C5.31278 16.0602 5.64936 16 6 16H19V4H6C5.44772 4 5 4.44772 5 5V16.1707ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14H9Z"></path></svg> Preferred Vendor List</router-link>
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

const bidManagementSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22 4C22 3.44772 21.5523 3 21 3H3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4ZM4 15H7.41604C8.1876 16.7659 9.94968 18 12 18C14.0503 18 15.8124 16.7659 16.584 15H20V19H4V15ZM4 5H20V13H15C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13H4V5ZM16 11H13V14H11V11H8L12 6.5L16 11Z"></path></svg>`
const vendorManagementSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 11.6458V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11.6458C2.37764 10.9407 2 10.0144 2 9V3C2 2.44772 2.44772 2 3 2H21C21.5523 2 22 2.44772 22 3V9C22 10.0144 21.6224 10.9407 21 11.6458ZM19 12.874C18.6804 12.9562 18.3453 13 18 13C16.8053 13 15.7329 12.4762 15 11.6458C14.2671 12.4762 13.1947 13 12 13C10.8053 13 9.73294 12.4762 9 11.6458C8.26706 12.4762 7.19469 13 6 13C5.6547 13 5.31962 12.9562 5 12.874V20H19V12.874ZM14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 10.1046 16.8954 11 18 11C19.1046 11 20 10.1046 20 9V4H4V9C4 10.1046 4.89543 11 6 11C7.10457 11 8 10.1046 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9Z"></path></svg>`
const profileSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
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
