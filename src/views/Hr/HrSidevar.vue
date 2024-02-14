<template>
  <div
    class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-1/4 h-screen sticky top-[80px]"
  >
    <div class="bg-[#e1f2ff9a] p-5 h-full flex flex-col gap-3 font-semibold text-lg">
      <p class="text-2xl font-bold text-[#2e318a]">HR Dashboard</p>
      <p class="text-xl font-bold">Welcome Mr. Hashim</p>


      <router-link to="/HR_Dashboard" class="flex items-center gap-2"
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

            <!--Job Management  -->
            <div class="accordion">
        <button @click="toggleAccordion('vendorManagement')" class="flex items-center gap-2">
          <span class="text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          </svg>
          </span>
        
          Manage Organogarm
        </button>
        <div v-show="currentAccordions === 'vendorManagement'" class="submenu mx-8">
          <router-link to="/HR_Define_Position" class="flex items-center gap-2"
            >- Define Position </router-link
          >
          <router-link to="/HR_Position_List" class="flex items-center gap-2"
            >- Position List</router-link
          >
          
         
        </div>
      </div>

      <!--Job Management  -->
      <div class="accordion">
        <button @click="toggleAccordion('vendorManagement')" class="flex items-center gap-2">
          
          <span class="text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>

          </span>

          Job Management
        </button>
        <div v-show="currentAccordions === 'vendorManagement'" class="submenu mx-8">
          <router-link to="/HR_Create_Job_Description" class="flex items-center gap-2"
            >- Create  Job Description </router-link
          >
          <router-link to="/HR_Job_list" class="flex items-center gap-2"
            >- Job List</router-link
          >
          <router-link to="/HR_Post_List" class="flex items-center gap-2"
            >- Post Job</router-link
          >
         
        </div>
      </div>

     <!--Higiring management   -->
     <div class="accordion">
        <button @click="toggleAccordion('vendorManagement')" class="flex items-center gap-2">
          <span class="text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>

          </span>
          
          Higiring management
        </button>
        <div v-show="currentAccordions === 'vendorManagement'" class="submenu mx-8">
          <router-link to="/HR_Higiring_Application" class="flex items-center gap-2"
            >- Application steps</router-link
          >
          <router-link to="/HR_Higiring_Background_Check" class="flex items-center gap-2"
            >- Background check </router-link
          >
          <router-link to="/HR_Higiring_Orientation" class="flex items-center gap-2"
            >- Orientation  </router-link
          >
         
        </div>
      </div>

    
    <!--Employee management   -->
    <div class="accordion">
        <button @click="toggleAccordion('vendorManagement')" class="flex items-center gap-2">
          <span class="text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>

          </span>
          
          Employee management
        </button>
        <div v-show="currentAccordions === 'vendorManagement'" class="submenu mx-8">
          <router-link to="/HR_Employee_list" class="flex items-center gap-2"
            >- Employee list</router-link
          >
          <router-link to="/HR_Employment_Scheduling" class="flex items-center gap-2"
            >- Employee Schedule </router-link
          >
          <router-link to="/HR_Time_Card" class="flex items-center gap-2"
            >- Time card   </router-link
          >
          <router-link to="/HR_Leave_Management" class="flex items-center gap-2"
            >- Leave management   </router-link
          >
          <router-link to="/HR_Performance_Management" class="flex items-center gap-2"
            >- Performance management   </router-link
          >
          <router-link to="/HR_Career_Life_Cycle" class="flex items-center gap-2"
            >- Career life cycle    </router-link
          >
         
        </div>
      </div>

      <router-link to="" class="flex items-center gap-2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM7.00488 9.00275L10.0049 5.50275L13.0049 9.00275H11.0049V13.0027H9.00488V9.00275H7.00488ZM17.0049 15.0027L14.0049 18.5027L11.0049 15.0027H13.0049V11.0027H15.0049V15.0027H17.0049Z"
          ></path></svg
        >Change Password</router-link
      >
      <button
        type="button"
        @click="store.logout()"
        class="py-2 px-5 mt-2 w-1/2 bg-red-800 rounded-md text-white duration-300"
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

//accordion
 
const currentAccordions = ref('bidManagement')

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
