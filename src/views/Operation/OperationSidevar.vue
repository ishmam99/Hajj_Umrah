<template>
  <div
    class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-1/4 min-h-screen sticky top-[80px]"
  >
    <div class="bg-[#e1f2ff9a] p-5 h-full flex flex-col gap-3 font-semibold text-lg">
      <p class="text-2xl font-bold text-[#2e318a]">Operation Dashboard</p>
      <p class="text-xl font-bold">Welcome Mr. Hashim</p>
      <router-link
        to="/Opration_Management_profile"
        class="flex items-center gap-2"
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
      <div class="accordion">
        <button @click="toggleAccordion('prayerManagement')" class="flex items-center gap-2">
          <i class="fa-solid fa-hands-holding"></i>
          Prayer Management

        </button>
        <div v-show="currentAccordions === 'prayerManagement'" class="submenu mx-8">
          <div class="accordion">
            <button @click="dropdown=2" class="flex items-center justify-center gap-2"><i class="fa-solid fa-hands-praying"></i> Prayer</button>

            <div v-show="dropdown == 2" class="submenu mx-8">
              <router-link to="/Opration_prayer_create_prayer" class="flex items-center gap-2">- Create Prayer Times</router-link>
              <router-link to="/Opration_prayer_post_prayer_times" class="flex items-center gap-2">- Post Prayer Times</router-link>
              <router-link to="/Opration_prayer_post_schedule_imam" class="flex items-center gap-2">- Post Imam Schedule</router-link>
              <router-link to="/Opration_prayer_schedule_imam" class="flex items-center gap-2">- Schedule Imam</router-link>
            </div>
          </div>

          <div class="accordion">
            <button @click="dropdown=3" class="flex items-center justify-center gap-2"><i class="fa-solid fa-book-open-reader"></i> Khatira</button>

            <div v-show="dropdown==3" class="submenu mx-8">
              <router-link to="/Opration_prayer_create_khatira_topic" class="flex items-center gap-2">- Create Khatira topic</router-link>
              <router-link to="/Opration_khatira_create_khatira_list" class="flex items-center gap-2">- Khatira List</router-link>
              <router-link to="/Opration_khatira_broadcast_khatira_schedule" class="flex items-center gap-2">- Broadcast Khatira Schedule</router-link>
            </div>
          </div>
          <div class="accordion">
            <button @click="dropdown=4" class="flex items-center justify-center gap-2"><i class="fa-solid fa-book-quran"></i> Khutbah</button>

            <div v-show="dropdown==4" class="submenu mx-8">
              <router-link to="/Opration_khutbah_create_khutbah_topic" class="flex items-center gap-2">- Create Khutbah topic</router-link>
              <router-link to="/Opration_khutbah_khutbah_list" class="flex items-center gap-2">- Khutbah List</router-link>
              <router-link to="/Opration_khutbah_broadcast_schedule" class="flex items-center gap-2">- Broadcast Khutbah Schedule</router-link>
            </div>
          </div>
          <div class="accordion">
            <button @click="dropdown=6" class="flex items-center justify-center gap-2">
              <i class="fa-solid fa-mosque"></i> Azan</button>

            <div v-show="dropdown==6" class="submenu mx-8">
              <router-link to="/operation_azan_create_muajjin_list" class="flex items-center gap-2">- Create Muajjin List</router-link>
              <router-link to="/operation_create_muajjin_schedule" class="flex items-center gap-2">- Create Muajjin Schedule</router-link>
              <router-link to="/operation_post_azans_schedule" class="flex items-center gap-2">- Post Azans Schedule</router-link>
            </div>
          </div>
        </div>
        <div v-show="currentAccordions.includes('khatira')" class="submenu mx-8">
          
        </div>
        </div>

      <div class="accordion">
        <button @click="toggleAccordion('meetingManagement')" class="flex items-center gap-2">
          <i class="fa-solid fa-users-line"></i>
          Meeting Management system
        </button>
        <div v-show="currentAccordions === 'meetingManagement'" class="submenu mx-8">
          <router-link to="/Opration_Meeting_Create_meeting" class="flex items-center gap-2"
            >- Create meeting</router-link
          >
          <router-link to="/Opration_Meeting_meeting_list" class="flex items-center gap-2"
            >- Meeting List</router-link
          >
          <router-link to="/Opration_Meeting_postMeeting" class="flex items-center gap-2"
            >- Post meeting</router-link
          >
        </div>
      </div>
      <div class="accordion">
        <button @click="toggleAccordion('eventManagement')" class="flex items-center gap-2">
          <i class="fa-solid fa-calendar-check"></i>
          Event Management
        </button>
        <div v-show="currentAccordions === 'eventManagement'" class="submenu mx-8">
          <router-link to="/operation_event_create_event" class="flex items-center gap-2"
            >- Create Event</router-link
          >
          <router-link to="/operation_event_eventList" class="flex items-center gap-2"
            >- Event List</router-link
          >
          <router-link to="/operation_event_postEvent" class="flex items-center gap-2"
            >- Post Event</router-link
          >
        </div>
      </div>
      <div class="accordion">
        <button @click="toggleAccordion('announcementManagement')" class="flex items-center gap-2">
          <i class="fa-solid fa-bullhorn"></i>
          Announcement Management
        </button>
        <div v-show="currentAccordions === 'announcementManagement'" class="submenu mx-8">
          <router-link to="/operation_announcement_create_announcement" class="flex items-center gap-2"
            >- Create Announcement</router-link
          >
          <router-link to="/operation_announcement_announcement_list" class="flex items-center gap-2"
            >- Announcement List</router-link
          >
          <router-link to="/operation_announcement_broadcast_announcement" class="flex items-center gap-2"
            >- Broadcast Announcement</router-link
          >
        </div>
      </div>
      <div class="accordion">
        <button @click="toggleAccordion('maintainanceManagement')" class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z"></path></svg>
          Maintainance Management
        </button>
        <div v-show="currentAccordions === 'maintainanceManagement'" class="submenu mx-8">
          <router-link to="/operation_maintenance_create_maintenance" class="flex items-center gap-2"
            >- Create Maintenance Work</router-link
          >
          <router-link to="/operation_maintenance_work_list" class="flex items-center gap-2"
            >- Maintenance Work List</router-link
          >
          <router-link to="/operation_maintenance_post_work" class="flex items-center gap-2"
            >- Post Maintenance Work</router-link
          >
          <router-link to="/operation_maintenance_work_status" class="flex items-center gap-2"
            >- Maintenance Work Status</router-link
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

