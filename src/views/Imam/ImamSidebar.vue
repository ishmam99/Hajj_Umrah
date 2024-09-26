<template>
  <div class="bg-[#135D66] bg-cover w-1/5">
    <div class="p-5 flex flex-col gap-3 font-semibold text-lg h-full">
      <p class="text-2xl font-bold text-[#ffffff]">Imam Dashboard &nbsp; &nbsp;</p>
      <p class="text-xl font-bold text-white">Welcome Mr. Mahmadullah</p>
      <router-link to="/Imam_Profile" @click="dropdown = 0"
        class="flex items-center gap-2 bg-white p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
          </path>
        </svg>Profile</router-link>

<!-- My Packages  -->
<div class="bg-white p-2 rounded-md cursor-pointer ">
        <p  @click="dropdown = dropdown === 2 ? 0 : 2" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 3L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z"></path></svg>
          <!-- /lmao -->
          My Packages
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 2" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/imam_packages_active_package" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.16705 4.36681L12 1L17.833 4.36681L15.6885 5.61061L12 3.48758L8.31152 5.61061L6.16705 4.36681ZM17.833 8.61285L15.6885 7.36907L12 9.49209L8.31152 7.36907L6.16705 8.61285V11.1004L9.85553 13.2234V17.4695L12 18.7133L14.1445 17.4695V13.2234L17.833 11.1004V8.61285ZM17.833 15.3465V12.8589L15.6885 14.1026V16.5902L17.833 15.3465ZM19.3555 16.2257L15.667 18.3487V20.8363L21.5 17.4695V10.7358L19.3555 11.9797V16.2257ZM17.2111 6.48984L19.3555 7.73362V10.2212L21.5 8.97741V6.48984L19.3555 5.24605L17.2111 6.48984ZM9.85553 19.2494V21.737L12 22.9808L14.1445 21.737V19.2494L12 20.4932L9.85553 19.2494ZM6.16705 15.3465L8.31152 16.5902V14.1026L6.16705 12.8589V15.3465ZM9.85553 6.48984L12 7.73362L14.1445 6.48984L12 5.24605L9.85553 6.48984ZM4.64446 7.73362L6.78894 6.48984L4.64446 5.24605L2.5 6.48984V8.97741L4.64446 10.2212V7.73362ZM4.64446 11.9797L2.5 10.7358V17.4695L8.33294 20.8363V18.3487L4.64446 16.2257V11.9797Z"></path></svg>Active Packages
          </router-link>
          
          <router-link to="/imam_packages_upcoming_package" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9 17C9 17 16 18 19 21H20C20.5523 21 21 20.5523 21 20V13.937C21.8626 13.715 22.5 12.9319 22.5 12C22.5 11.0681 21.8626 10.285 21 10.063V4C21 3.44772 20.5523 3 20 3H19C16 6 9 7 9 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H6L7 22H9V17ZM11 8.6612C11.6833 8.5146 12.5275 8.31193 13.4393 8.04373C15.1175 7.55014 17.25 6.77262 19 5.57458V18.4254C17.25 17.2274 15.1175 16.4499 13.4393 15.9563C12.5275 15.6881 11.6833 15.4854 11 15.3388V8.6612ZM5 9H9V15H5V9Z"></path></svg>Upcoming Packages
          </router-link>
          <router-link to="/imam_packages_completed_package" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>Completed Packages
          </router-link>
        </div>
      </div>


      <!-- Payment  -->
      <div class="bg-white p-2 rounded-md cursor-pointer ">
        <p @click="dropdown = dropdown === 3 ? 0 : 3" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.0047 16.0027H19.0047V4.00275H9.00468V6.00275H17.0047V16.0027ZM17.0047 18.0027V21.0019C17.0047 21.5546 16.5547 22.0027 15.9978 22.0027H4.01154C3.45548 22.0027 3.00488 21.5581 3.00488 21.0019L3.00748 7.00362C3.00759 6.45085 3.45752 6.00275 4.0143 6.00275H7.00468V3.00275C7.00468 2.45046 7.4524 2.00275 8.00468 2.00275H20.0047C20.557 2.00275 21.0047 2.45046 21.0047 3.00275V17.0027C21.0047 17.555 20.557 18.0027 20.0047 18.0027H17.0047ZM5.0073 8.00275L5.00507 20.0027H15.0047V8.00275H5.0073ZM7.00468 16.0027H11.5047C11.7808 16.0027 12.0047 15.7789 12.0047 15.5027C12.0047 15.2266 11.7808 15.0027 11.5047 15.0027H8.50468C7.12397 15.0027 6.00468 13.8835 6.00468 12.5027C6.00468 11.122 7.12397 10.0027 8.50468 10.0027H9.00468V9.00275H11.0047V10.0027H13.0047V12.0027H8.50468C8.22854 12.0027 8.00468 12.2266 8.00468 12.5027C8.00468 12.7789 8.22854 13.0027 8.50468 13.0027H11.5047C12.8854 13.0027 14.0047 14.122 14.0047 15.5027C14.0047 16.8835 12.8854 18.0027 11.5047 18.0027H11.0047V19.0027H9.00468V18.0027H7.00468V16.0027Z"></path></svg>
         
          My Payments
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 3" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/imam_packages_pending_payments" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z"></path></svg>Pending Payments
          </router-link>
          
          <router-link to="/imam_packages_received_payments" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z">
              </path>
            </svg>Received Payments
          </router-link>
          
          <router-link to="imam_packages_request_payments" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.47717 2 2 6.47717 2 12C2 17.5228 6.47717 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47717 17.5228 2 12 2ZM7.09436 5.68018C8.4491 4.62708 10.1512 4 12 4C16.4183 4 20 7.58167 20 12C20 13.8488 19.3729 15.5509 18.3198 16.9056L16.165 14.7509C16.3781 14.3829 16.5 13.9557 16.5 13.5C16.5 12.1193 15.3807 11 14 11H10C9.72388 11 9.5 10.7761 9.5 10.5C9.5 10.2239 9.72388 10 10 10H15.5V8H13V6H11V8H10C9.81836 8 9.64111 8.01929 9.47046 8.05615L7.09436 5.68018ZM5.68018 7.09436L7.83496 9.24915C7.62195 9.61707 7.5 10.0443 7.5 10.5C7.5 11.8807 8.61926 13 10 13H14C14.2761 13 14.5 13.2239 14.5 13.5C14.5 13.7761 14.2761 14 14 14H8.5V16H11V18H13V16H14C14.1818 16 14.359 15.9807 14.5297 15.9438L16.9056 18.3198C15.5509 19.3729 13.8488 20 12 20C7.58167 20 4 16.4183 4 12C4 10.1512 4.62708 8.4491 5.68018 7.09436Z"></path>
            </svg>Request Payments
          </router-link>
        </div>
      </div>


      <button type="button" @click="logout()" class="py-2 px-5 mt-40 bg-red-800 rounded-md text-white duration-300">
        Log Out
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '/src/stores/AuthStore.ts'

const route = useRoute()
const router = useRouter()
const AuthStore = useAuthStore()

const dropdown = ref(0)
const subDropDown = ref(false)

const logout = () => {
  AuthStore.logout()
  router.push('/')
}

</script>
<style scoped>
.router-link-active {
  color: lightseagreen
}
</style>
