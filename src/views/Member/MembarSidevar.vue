<template>
  <div class="bg-[#135D66] bg-cover">
    <div class="p-5 flex flex-col gap-3 font-semibold text-lg h-full">
      <p class="text-2xl font-bold text-[#ffffff]">Customer Dashboard</p>
      <p class="text-xl font-bold text-white">Welcome Mr. karim</p>
      <router-link to="/Member_Profile" @click="dropdown = 0"
        class="flex items-center gap-2 bg-white p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
          </path>
        </svg>Profile</router-link>

      <!-- event panel  -->
      <!-- <div class="bg-white p-2 rounded-md cursor-pointer ">
        <p @click="dropdown = 1" class="pb-1 flex items-center gap-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z">
            </path>
          </svg>
          Event Panel
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 1" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z">
              </path>
            </svg>Registered List
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Active Event List
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z">
              </path>
            </svg>Upcomming Event List
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z">
              </path>
            </svg>Past Event List
          </router-link>
        </div>
      </div> -->

      <!-- volunteer panel  -->
      <div v-if="AuthStore?.user?.is_volunteer == 2" class="bg-white p-2 rounded-md cursor-pointer">
        <p @click="dropdown = 2" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z">
            </path>
          </svg>
          Volunteer Panel
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 2" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z">
              </path>
            </svg>Volunteer Application List
          </router-link>
          <router-link to="/My_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z">
              </path>
            </svg>My Volunteer Event
          </router-link>
          <router-link to="/Volunteer_Complete_List" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Completed Volunteer Event
          </router-link>
        </div>
      </div>


      <!-- imam panel -->
      <div v-if="AuthStore?.user?.is_imam == 2" class="bg-white p-2 rounded-md cursor-pointer">
        <p @click="dropdown = 3" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18Z">
            </path>
          </svg>
          Imam Panel
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 3" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/Imam_Appointment" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z">
              </path>
            </svg>Requested Appointment List
          </router-link>
          <router-link to="/Imam_Appointment" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z">
              </path>
            </svg>My Appointment List
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z">
              </path>
            </svg>My Schedule
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>My Task list
          </router-link>
        </div>
      </div>

      <!-- scholar panel  -->
      <div v-if="AuthStore?.user?.is_scholar == 2" class="bg-white p-2 rounded-md cursor-pointer">
        <p @click="dropdown = 4" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z">
            </path>
          </svg>
          Scholar Panel
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 4" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/Imam_Appointment" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z">
              </path>
            </svg>Requested Appointment List
          </router-link>
          <router-link to="/Imam_Appointment" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z">
              </path>
            </svg>My Appointment List
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z">
              </path>
            </svg>My Schedule
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>My Task list
          </router-link>
        </div>
      </div>

      <!-- vendor panel  -->
      <div v-if="AuthStore?.user?.is_vendor == 2" class="bg-white p-2 rounded-md cursor-pointer">
        <p @click="dropdown = 5" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z">
            </path>
          </svg>
          Vendor Panel
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 5" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/Imam_Appointment" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4H21V6H8V4ZM3 3.5H6V6.5H3V3.5ZM3 10.5H6V13.5H3V10.5ZM3 17.5H6V20.5H3V17.5ZM8 11H21V13H8V11ZM8 18H21V20H8V18Z">
              </path>
            </svg> Applied Bid List
          </router-link>
          <router-link to="/Select_Volunteer" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Approved Bid List
          </router-link>
          <router-link to="/Imam_Appointment" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M19 4H5V20H19V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H19.9997C20.5519 2 20.9996 2.44772 20.9997 3L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11.2929 13.1213L15.5355 8.87868L16.9497 10.2929L11.2929 15.9497L7.40381 12.0607L8.81802 10.6464L11.2929 13.1213Z">
              </path>
            </svg>Completed Bid List
          </router-link>
        </div>
      </div>

      <!-- teacher dropdown -->
      <div v-if="AuthStore?.user?.is_teacher == 2" class="bg-white p-2 rounded-md cursor-pointer">
        <p @click="dropdown = 6" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z">
            </path>
          </svg>
          Teacher Panel
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 6" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
          <router-link to="/verify-teacher" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>My Hiring
          </router-link>
          <router-link to="/dashboard/my-schedule" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z">
              </path>
            </svg>My Schedule
          </router-link>

          <router-link to="/dashboard/teacher/join-class" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z">
              </path>
            </svg>My class
          </router-link>
          <div class="pr-2">
            <p @click="subDropDown = !subDropDown" class="flex items-center gap-2 cursor-pointer pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path
                  d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z">
                </path>
              </svg>My Courses
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 16L6 10H18L12 16Z"></path>
              </svg>
            </p>
            <div v-if="subDropDown == true" class="flex flex-col gap-2 p-2 bg-slate-200 rounded-md">
              <router-link to="/dashboard/ongoing-courses" class="flex items-center gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z">
                  </path>
                </svg>On Going Courses
              </router-link>
              <router-link to="/dashboard/all-courses" class="flex items-center gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path
                    d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z">
                  </path>
                </svg>All Courses
              </router-link>
            </div>
          </div>
          <router-link to="/dashboard/my-students" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z">
              </path>
            </svg>My Students
          </router-link>
        </div>
      </div>

      <!-- student dropdown  -->
      <div class="bg-white p-2 rounded-md cursor-pointer">
        <p @click="dropdown = dropdown === 7 ? 0 : 7" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z">
            </path>
          </svg>
          My Packages
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown == 7" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md hover:bg-[#135D66] hover:text-white">
          <router-link to="/wishlist" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Package Wishlist
          </router-link>
        </div>
         
<div class="bg-white p-2 rounded-md cursor-pointer">
        <p @click="dropdown2 = !dropdown2" class="pb-1 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z">
            </path>
          </svg>
          Current Packages
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 16L6 10H18L12 16Z"></path>
          </svg>
        </p>
        <div v-if="dropdown2" class="flex flex-col gap-1 pl-3 py-2 bg-slate-100 rounded-md  ">
          <router-link to="/member_package_list" class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Package List
          </router-link>
          <router-link to="/member_todo_list" class="hover:text-white hover:bg-[#135D66] flex py-2 items-center gap-2 pl-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>To Do List
          </router-link>
          <router-link to="/create_todo_list" class="hover:text-white hover:bg-[#135D66] py-2 flex items-center gap-2 pl-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Create To Do List
          </router-link>

        </div></div>
        <!-- <div v-if="dropdown == 7" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md hover:bg-[#135D66] hover:text-white">
          <router-link to="/member_package_list" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Current Packages
          </router-link>

        </div> -->
        <div v-if="dropdown == 7" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md hover:bg-[#135D66] hover:text-white">
          <router-link to="/completed_packages" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M8.00008 6V9H5.00008V6H8.00008ZM3.00008 4V11H10.0001V4H3.00008ZM13.0001 4H21.0001V6H13.0001V4ZM13.0001 11H21.0001V13H13.0001V11ZM13.0001 18H21.0001V20H13.0001V18ZM10.7072 16.2071L9.29297 14.7929L6.00008 18.0858L4.20718 16.2929L2.79297 17.7071L6.00008 20.9142L10.7072 16.2071Z">
              </path>
            </svg>Completed Packages
          </router-link>

        </div>
      </div>


      <router-link to="/Membar_Payment_History" @click="dropdown = 0"
        class="flex items-center gap-2 bg-white p-2 rounded-md "><svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M5.67591 4.25667C9.60392 1.03828 15.4094 1.26236 19.076 4.92893C22.9812 8.83418 22.9812 15.1658 19.076 19.0711C15.1707 22.9763 8.83906 22.9763 4.93382 19.0711C2.40932 16.5466 1.51676 13.0081 2.25611 9.76666L2.33275 9.45394L4.26718 9.96315C3.56967 12.623 4.26329 15.5721 6.34803 17.6569C9.47222 20.781 14.5375 20.781 17.6617 17.6569C20.7859 14.5327 20.7859 9.46734 17.6617 6.34315C14.8441 3.5255 10.4475 3.24903 7.32006 5.51375L7.09886 5.67983L8.1158 6.6967L3.5196 7.75736L4.58026 3.16117L5.67591 4.25667ZM13.0049 6V8H15.5049V10H10.0049C9.72874 10 9.50488 10.2239 9.50488 10.5C9.50488 10.7455 9.68176 10.9496 9.91501 10.9919L10.0049 11H14.0049C15.3856 11 16.5049 12.1193 16.5049 13.5C16.5049 14.8807 15.3856 16 14.0049 16H13.0049V18H11.0049V16H8.50488V14H14.0049C14.281 14 14.5049 13.7761 14.5049 13.5C14.5049 13.2545 14.328 13.0504 14.0948 13.0081L14.0049 13H10.0049C8.62417 13 7.50488 11.8807 7.50488 10.5C7.50488 9.11929 8.62417 8 10.0049 8H11.0049V6H13.0049Z">
          </path>
        </svg>Payment</router-link>
      <router-link to="/member_rewards" @click="dropdown = 0"
        class="flex items-center gap-2 bg-white p-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.0049 2.00281C17.214 2.00281 19.0049 3.79367 19.0049 6.00281C19.0049 6.73184 18.8098 7.41532 18.4691 8.00392L23.0049 8.00281V10.0028H21.0049V20.0028C21.0049 20.5551 20.5572 21.0028 20.0049 21.0028H4.00488C3.4526 21.0028 3.00488 20.5551 3.00488 20.0028V10.0028H1.00488V8.00281L5.54065 8.00392C5.19992 7.41532 5.00488 6.73184 5.00488 6.00281C5.00488 3.79367 6.79574 2.00281 9.00488 2.00281C10.2001 2.00281 11.2729 2.52702 12.0058 3.35807C12.7369 2.52702 13.8097 2.00281 15.0049 2.00281ZM11.0049 10.0028H5.00488V19.0028H11.0049V10.0028ZM19.0049 10.0028H13.0049V19.0028H19.0049V10.0028ZM9.00488 4.00281C7.90031 4.00281 7.00488 4.89824 7.00488 6.00281C7.00488 7.05717 7.82076 7.92097 8.85562 7.99732L9.00488 8.00281H11.0049V6.00281C11.0049 5.00116 10.2686 4.1715 9.30766 4.02558L9.15415 4.00829L9.00488 4.00281ZM15.0049 4.00281C13.9505 4.00281 13.0867 4.81869 13.0104 5.85355L13.0049 6.00281V8.00281H15.0049C16.0592 8.00281 16.923 7.18693 16.9994 6.15207L17.0049 6.00281C17.0049 4.89824 16.1095 4.00281 15.0049 4.00281Z"></path></svg>Rewards</router-link>

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
const dropdown2 = ref(0)
const subDropDown = ref(false)

const logout = () => {
  AuthStore.logout()
  router.push('/')
}

</script>
<style scoped>
.router-link-active {
  color: rgb(3, 48, 46);
  background-color:#25b1c4
}
</style>
