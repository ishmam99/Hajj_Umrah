<script setup>
import { watch, ref } from 'vue'
import { useAuthStore } from '/src/stores/AuthStore'
import { useRouter, useRoute } from 'vue-router'

const currentAccordions = ref('projectManagement')
const currentAccordions2 = ref('projectManagement')

const toggleAccordion = (accordionName) => {

  if (accordionName === currentAccordions.value) {
    currentAccordions.value = ''
  } else {
    currentAccordions.value = accordionName
  }
}

const toggleAccordion2 = (accordionName2) => {
  if (accordionName2 === currentAccordions2.value) {
    currentAccordions2.value = ''
  } else {
    currentAccordions2.value = accordionName2
  }
}

const route = useRoute()
const router = useRouter()
const store = useAuthStore()
watch(() => route, () => {
  console.log(route.name)
  if (route.name.includes('Social_Service_Event')) {
    currentAccordions.value = 'bidManagement'
  }
  else if (route.name.includes('Social_Service_Project')) {
    currentAccordions.value = 'projectManagement'
  }
}, {
  deep: true,
  immediate: true
})
watch(
  () => store.isAuthenticated,
  (newIsAuthenticated) => {
    console.log(newIsAuthenticated)

    if (!newIsAuthenticated) {
      router.push('/')
    }
  }
)
</script>

<template>
  <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-1/4 min-h-screen sticky top-[80px]">
    <div class="bg-cyan-600 bg-opacity-60 p-5 h-full flex flex-col gap-3 font-semibold text-lg">
      <p class="text-2xl font-bold text-white shadow-lg px-2 bg-cyan-500">Umrah Package Management System</p>

        <router-link to="/Umrah_Management_System" class="flex items-center gap-2 py-3 rounded-lg bg-sky-600 text-white px-2 hover:px-3">Dashboard</router-link>
      <div class="accordion">
        <button @click.stop="toggleAccordion('projectManagement')" class="flex items-center gap-2 py-3 rounded-lg bg-blue-600 w-full mb-2 text-white px-2 hover:px-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z" />
          </svg>
          Umrah Packages
        </button>
        <div v-if="currentAccordions === 'projectManagement'" class="submenu ms-8 space-y-2">
          <router-link to="/Umrah_Package_Create_New_Package" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 text-white px-2 hover:px-3">1. Create New Package</router-link>
          <router-link to="/view_packages" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 text-white px-2 hover:px-3">2. View / Edit Packages</router-link>
         <button @click.stop="toggleAccordion2('pkg')" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 w-full mb-2 text-white px-2 hover:px-3">
          3.
         Package Approval
        </button>
        <div v-if="currentAccordions2 === 'pkg'" class="submenu ms-8 space-y-2">
          <router-link to="/umrah_package_current_packages" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 text-white  px-2 hover:px-3">3a. 
            Pending Package for Approval</router-link>
        
          <router-link to="/umrah_package_approved_packages" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 text-white  px-2 hover:px-3">3b. Approved
            Packages</router-link>
            </div>
          <router-link to="/Umrah_package_upcoming_packages" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 text-white px-2 hover:px-3">4. Upcoming Packages List
            </router-link>
          <router-link to="/Umrah_Package_completed_Packages" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 text-white px-2 hover:px-3">5. Completed Packages List
            </router-link>
          <router-link to="/Umrah_package_all_packages" class="flex items-center gap-2 py-3 rounded-lg bg-sky-700 text-white px-2 hover:px-3">6. All Packages List
            </router-link>
          <!-- <router-link to="/package_details" class="flex items-center gap-2 hover:px-2">- Package Details</router-link> -->
          <!-- <router-link to="/Social_Service_Project_Post" class="flex items-center gap-2 hover:px-2"
            >- Post Project</router-link
          > -->
        </div>
      </div>

      <!-- <div class="accordion">
        <button @click.stop="toggleAccordion('bidManagement')" class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z" />
          </svg>
          Umrah Packages
        </button>
        <div v-if="currentAccordions === 'bidManagement'" class="submenu mx-8">
          <router-link to="/Social_Service_Event_Create" class="flex items-center gap-2 hover:px-2">- Basic
            Package</router-link>
        
        </div>
      </div> -->



      <!-- <router-link to="/volunteer" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z">
          </path>
        </svg>Tours and Travels Packages</router-link> -->



      <button type="button" @click="store.logout()"
        class="py-2 px-5 mt-2 w-1/2 bg-red-800 rounded-md text-white duration-300">
        Log Out
      </button>
      <div class="flex flex-col gap-2 overflow-hidden"></div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: white;
  background-color: rgb(5, 173, 202);
}
</style>
