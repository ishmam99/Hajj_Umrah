<template>
  <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-1/4 h-screen sticky top-[80px]">
    <div class="bg-[#135D66] p-5 h-full flex flex-col gap-3 font-semibold text-lg text-white">
      <p class="text-2xl font-bold text-white">Vendor Dashboard</p>
      <p class="text-xl font-bold">Welcome Mr. Hashim</p>
      <router-link to="/vendor_profile"
        class="flex items-center gap-2 bg-white p-2 rounded-md hover:bg-gray-200 text-slate-800"><svg
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
          </path>
        </svg>Profile</router-link>

      <div class="accordion">
        <button @click.stop="toggleAccordion('projectManagement')"
          class="flex items-center w-full gap-2 text-slate-800 bg-white p-2 rounded-md hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>

          My bids
        </button>
        <div v-if="currentAccordions === 'projectManagement'" class="submenu mx-8">
          <router-link to="/vendor_accepted_bids" class="flex items-center gap-2 hover:px-2">-
            Accepted Bids</router-link>
          <router-link to="/vendor_pending_bids" class="flex items-center gap-2 hover:px-2">-
            Pending Bids</router-link>

        </div>
      </div>

      <div class="accordion">
        <button @click.stop="toggleAccordion('bidManagement')"
          class="flex items-center gap-2 text-slate-800 bg-white p-2 rounded-md w-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>

          My Services
        </button>
        <div v-if="currentAccordions === 'bidManagement'" class="submenu mx-8">
          <router-link to="/vendor_add_transportService" class="flex items-center gap-2 hover:px-2">-
            Add Transport Service</router-link>
          <router-link to="/vendor_hotel_Service" class="flex items-center gap-2 hover:px-2">-
            Hotel Service</router-link>
          <router-link to="/ground_transport_service" class="flex items-center gap-2 hover:px-2">-
            Ground Transport Service</router-link>


        </div>
      </div>

      <button type="button" @click="store.logout()"
        class="py-2 px-5 mt-2 w-1/2 bg-red-800 rounded-md text-white duration-300">
        Log Out
      </button>
      <div class="flex flex-col gap-2 overflow-hidden"></div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useAuthStore } from '/src/stores/AuthStore'
import { useRouter, useRoute } from 'vue-router'

const currentAccordions = ref('projectManagement')
const currentAccordions2 = ref('bidManagement')

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
    currentAccordions.value = 'projectManagement'
  }
  else if (route.name.includes('Social_Service_Project')) {
    currentAccordions.value = 'bidManagement'
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
<style scoped>
.router-link-active {
  color: #df9a1c
}
</style>
