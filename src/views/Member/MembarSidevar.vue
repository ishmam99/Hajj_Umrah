<template>
  <div class="bg-[#135D66] h-full p-5">
    <div class="flex flex-col gap-4 font-semibold text-lg">
      <p class="text-3xl font-bold text-white">Customer Dashboard</p>
      <p class="text-xl font-bold text-white">Welcome <span class="text-yellow-500">{{ AuthStore?.user?.name }}</span>
      </p>

      <router-link to="/Member_Profile" @click="dropdown = 0"
        class="flex items-center gap-2 bg-white p-3 rounded-md hover:shadow-lg transition-shadow duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
          </path>
        </svg>
        Profile
      </router-link>

      <!-- My Packages Dropdown -->
      <div class="bg-white p-3 rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <p @click="dropdown = dropdown === 7 ? 0 : 7" class="flex items-center justify-between">
          <span class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M20 3L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z">
              </path>
            </svg>
            My Packages
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 7" class="flex flex-col gap-2 pl-2 py-2 bg-slate-100 rounded-md">
          <div class="p-3 rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-200">
            <p @click="dropdown2 = !dropdown2" class="flex items-center justify-between">
              <span class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM10 4H6C5.44772 4 5 4.44772 5 5V15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H17V12L13.5 10L10 12V4Z">
                  </path>
                </svg>
                Current Packages
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 16L6 10H18L12 16Z"></path>
              </svg>
            </p>
            <div v-if="dropdown2" class="flex flex-col gap-1 pl-3 py-2 bg-slate-200 rounded-md">
              <router-link to="/member_current_package_details"
                class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
                  </path>
                </svg>
                View Package
              </router-link>
              <router-link to="/member_package_audio-video"
                class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM2 4C2 3.44772 2.44772 3 3 3H14V5H4V19H20V11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM12 12.1707V6H16V8H14V15C14 16.6569 12.6569 18 11 18C9.34315 18 8 16.6569 8 15C8 13.3431 9.34315 12 11 12C11.3506 12 11.6872 12.0602 12 12.1707Z">
                  </path>
                </svg>
                Package Audio/Video
              </router-link>
              <router-link to="/member_todo_list"
                class="hover:text-white hover:bg-[#135D66] flex py-2 items-center gap-2 pl-3 cursor-pointer rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M17 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H7V0H9V2H15V0H17V2ZM17 4V6H15V4H9V6H7V4H5V20H19V4H17ZM7 8H17V10H7V8ZM7 12H17V14H7V12Z">
                  </path>
                </svg>
                To Do List
              </router-link>
              <router-link to="/create_todo_list"
                class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M19 4H5V20H19V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H19.9997C20.5519 2 20.9996 2.44772 20.9997 3L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11.2929 13.1213L15.5355 8.87868L16.9497 10.2929L11.2929 15.9497L7.40381 12.0607L8.81802 10.6464L11.2929 13.1213Z">
                  </path>
                </svg>
                Create To Do List
              </router-link>
              <router-link to="/member_umrah_materials"
                class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M21 13V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V13H2V11L3 6H21L22 11V13H21ZM5 13V19H19V13H5ZM4.03961 11H19.9604L19.3604 8H4.63961L4.03961 11ZM6 14H14V17H6V14ZM3 3H21V5H3V3Z">
                  </path>
                </svg>
                Umrah Materials
              </router-link>
            </div>
          </div>
          <!-- <router-link to="/wishlist"
            class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M14.178 9.76602C16.0334 9.35487 17.695 8.4283 19.0049 7.14424V4.00281H5.00488V7.14424C6.31472 8.4283 7.97632 9.35487 9.83175 9.76602C10.2621 9.01149 11.0741 8.50281 12.0049 8.50281C12.9357 8.50281 13.7477 9.01149 14.178 9.76602ZM14.3861 11.7666C14.0633 12.7737 13.1192 13.5028 12.0049 13.5028C10.8905 13.5028 9.94648 12.7737 9.6237 11.7666C7.92722 11.425 6.36024 10.7257 5.00488 9.75071V20.0028H19.0049V9.75071C17.6495 10.7257 16.0825 11.425 14.3861 11.7666ZM4.00488 2.00281H20.0049C20.5572 2.00281 21.0049 2.45052 21.0049 3.00281V21.0028C21.0049 21.5551 20.5572 22.0028 20.0049 22.0028H4.00488C3.4526 22.0028 3.00488 21.5551 3.00488 21.0028V3.00281C3.00488 2.45052 3.4526 2.00281 4.00488 2.00281Z">
              </path>
            </svg>
            Package Wishlist
          </router-link> -->
          <!-- <router-link to="/member_package_list_future"
            class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM4 19V5H20V19H4ZM14 7H6V9H14V7ZM18 15V17H10V15H18ZM16 11H8V13H16V11Z">
              </path>
            </svg>
            Future Packages
          </router-link> -->
          <router-link to="/member_package_list_previous"
            class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM8 5V8H4V5H8ZM4 14V10H8V14H4ZM4 16H8V19H4V16ZM10 16H20V19H10V16ZM20 14H10V10H20V14ZM20 5V8H10V5H20Z">
              </path>
            </svg>
            Previous Packages
          </router-link>
          <router-link to="/completed_packages"
            class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z">
              </path>
            </svg>
            Completed Packages
          </router-link>
        </div>

        <!-- Current Packages Dropdown -->
      </div>


      <router-link to="/Membar_Payment_History" @click="dropdown = 0"
        class="flex items-center gap-2 bg-white p-3 rounded-md hover:shadow-lg transition-shadow duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M5.67591 4.25667C9.60392 1.03828 15.4094 1.26236 19.076 4.92893C22.9812 8.83418 22.9812 15.1658 19.076 19.0711C15.1707 22.9763 8.83906 22.9763 4.93382 19.0711C2.40932 16.5466 1.51676 13.0081 2.25611 9.76666L2.33275 9.45394L4.26718 9.96315C3.56967 12.623 4.26329 15.5721 6.34803 17.6569C9.47222 20.781 14.5375 20.781 17.6617 17.6569C20.7859 14.5327 20.7859 9.46734 17.6617 6.34315C14.8441 3.5255 10.4475 3.24903 7.32006 5.51375L7.09886 5.67983L8.1158 6.6967L3.5196 7.75736L4.58026 3.16117L5.67591 4.25667ZM13.0049 6V8H15.5049V10H10.0049C9.72874 10 9.50488 10.2239 9.50488 10.5C9.50488 10.7455 9.68176 10.9496 9.91501 10.9919L10.0049 11H14.0049C15.3856 11 16.5049 12.1193 16.5049 13.5C16.5049 14.8807 15.3856 16 14.0049 16H13.0049V18H11.0049V16H8.50488V14H14.0049C14.281 14 14.5049 13.7761 14.5049 13.5C14.5049 13.2545 14.328 13.0504 14.0948 13.0081L14.0049 13H10.0049C8.62417 13 7.50488 11.8807 7.50488 10.5C7.50488 9.11929 8.62417 8 10.0049 8H11.0049V6H13.0049Z">
          </path>
        </svg>
        Payment
      </router-link>
      <router-link to="/member_rewards" @click="dropdown = 0"
        class="flex items-center gap-2 bg-white p-3 rounded-md hover:shadow-lg transition-shadow duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z">
          </path>
        </svg>
        Rewards
      </router-link>

      <button type="button" @click="logout()"
        class="py-2 px-5 mt-10 bg-red-800 rounded-md text-white duration-300 hover:bg-red-700 transition-colors">
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
const dropdown2 = ref(0)

const logout = () => {
  AuthStore.logout()
  router.push('/')
}
</script>

<style scoped>
.router-link-active {
  color: rgb(3, 48, 46);
  background-color: #25b1c4;
}
</style>
