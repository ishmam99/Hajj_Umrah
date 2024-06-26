<template>
    <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-1/4 min-h-screen sticky top-[80px]">
      <div class="bg-[#e1f2ff9a] p-5 h-full flex flex-col gap-3 font-semibold text-lg">
        <p class="text-2xl font-bold text-[#2e318a]">Learning Management System Dashboard</p>
        <p class="text-xl font-bold">Welcome Mr. Hashim</p>
        <router-link to="/lms_Management_profile" class="flex items-center gap-2"><svg
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
            </path>
          </svg>Profile</router-link>
        <div class="accordion">
          <button @click="toggleAccordion('teacherManagement')" class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"></path></svg>
            Teacher Management
          </button>
          <div v-show="currentAccordions === 'teacherManagement'" class="submenu mx-8">
          <router-link to="" class="flex items-center gap-2">- Registered Teachers</router-link>
          <router-link to="" class="flex items-center gap-2">- Teacher Application List</router-link>
        </div>

        </div>

        <div class="accordion">
        <button @click="toggleAccordion('studentManagement')" class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"></path></svg>
          Student Management
        </button>
        <div v-show="currentAccordions === 'studentManagement'" class="submenu mx-8">
          <router-link to="" class="flex items-center gap-2">- Create Event</router-link>
          <router-link to="" class="flex items-center gap-2">- Student Application List</router-link>
          <router-link to="" class="flex items-center gap-2">- Registered Students</router-link>
        </div>
      </div>

        <div class="accordion">
        <button @click="toggleAccordion('studentManagement')" class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H9C10.1947 3 11.2671 3.52375 12 4.35418C12.7329 3.52375 13.8053 3 15 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H13ZM20 19V5H15C13.8954 5 13 5.89543 13 7V19H20ZM11 19V7C11 5.89543 10.1046 5 9 5H4V19H11Z"></path></svg>
          Course Management
        </button>
        <div v-show="currentAccordions === 'studentManagement'" class="submenu mx-8">
          <!-- <router-link to="" class="flex items-center gap-2">- Create Event</router-link>
          <router-link to="" class="flex items-center gap-2">- Student Application List</router-link>
          <router-link to="" class="flex items-center gap-2">- Registered Students</router-link> -->
        </div>
      </div>

  
        <router-link to="" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            width="24" height="24" fill="currentColor">
            <path
              d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM7.00488 9.00275L10.0049 5.50275L13.0049 9.00275H11.0049V13.0027H9.00488V9.00275H7.00488ZM17.0049 15.0027L14.0049 18.5027L11.0049 15.0027H13.0049V11.0027H15.0049V15.0027H17.0049Z">
            </path>
          </svg>Change Password</router-link>
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
  
  const route = useRoute()
  const router = useRouter()
  const store = useAuthStore()
  
  const dropdown = ref(0);
  
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
  