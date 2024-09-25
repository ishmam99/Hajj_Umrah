<template>
  <div
    class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] w-1/5 bg-cover min-h-screen"
  >
    <div class="bg-[#135D66] p-5 h-full flex flex-col gap-3 font-semibold text-lg">
      <p class="text-xl font-bold text-white">Agent Management Dashboard</p>
      <p class="text-xl font-bold text-white">Welcome Mr. Hashim</p>
      <router-link
        to="/agent_management_Profile"
        class="flex items-center gap-2 bg-white p-2 rounded-md"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
          ></path></svg
        >Profile</router-link
      >
      

      <div class="accordion bg-white rounded-md">
        <router-link
        to="/agent_management_agent_list"
        class="flex items-center gap-2 bg-white p-2 rounded-md"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
</svg>

          Agent List</router-link
      >
      </div>

      <div class="accordion bg-white rounded-md">
        <router-link
        to="/agent_management_package_list"
        class="flex items-center gap-2 bg-white p-2 rounded-md"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path
              d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V6H22V20C22 20.5523 21.5523 21 21 21H13ZM4 19H20V8H4V19ZM13 10H18V12H13V10ZM13 14H18V16H13V14ZM9 10V13H12C12 14.6569 10.6569 16 9 16C7.34315 16 6 14.6569 6 13C6 11.3431 7.34315 10 9 10ZM2 3H22V5H2V3Z"
            ></path>
          </svg>
          Agent Package List</router-link
      >
      </div>

      <button
        type="button"
        @click="store.logout()"
        class="py-2 px-5 mt-2 bg-red-800 rounded-md text-white duration-300"
      >
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

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

const dropdown = ref(0)

const currentAccordions = ref('')

const toggleAccordion = (accordionName) => {
  if (accordionName === currentAccordions.value) {
    currentAccordions.value = ''
  } else {
    currentAccordions.value = accordionName
  }
}

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
  color: #2e318a;
}
</style>

