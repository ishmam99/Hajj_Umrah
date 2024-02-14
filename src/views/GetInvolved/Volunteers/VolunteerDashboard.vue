<script setup>
import { watch, ref } from 'vue'
import { useAuthStore } from '/src/stores/AuthStore'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import VolunteerProfile from '@/components/volunteer/VolunteerProfile.vue'
import CreateVolunteerJob from '@/components/volunteer/CreateVolunteerJob.vue'
import VolunteerApplicantList from '@/components/volunteer/VolunteerApplicantList.vue'
import ApplyVolunteer from '@/components/volunteer/ApplyVolunteer.vue'
import PostVolunteerJob from '@/components/volunteer/PostVolunteerJob.vue'

const currentComp = ref(VolunteerProfile)
const currentCompName = ref('VolunteerProfile')

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
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex justify-between">
        <div
          class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-1/4 h-screen sticky top-[80px]"
        >
          <div class="bg-[#e1f2ff9a] p-5 h-full flex flex-col gap-3 font-semibold text-lg">
            <p class="text-2xl font-bold text-[#2e318a]">Volunteer Dashboard</p>
            <p class="text-xl font-bold">Welcome Mr. Hashim</p>

            <div
              class="flex items-center gap-2 cursor-pointer"
              :class="
                currentCompName === 'VolunteerProfile'
                  ? 'text-[#2e318a]'
                  : `text-black ${currentCompName}`
              "
              @click="(currentComp = VolunteerProfile), (currentCompName = 'VolunteerProfile')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path
                  d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
                ></path>
              </svg>
              Profile
            </div>

            <div
              class="flex items-center gap-2 cursor-pointer"
              :class="
                currentCompName === 'CreateVolunteerJob'
                  ? 'text-[#2e318a]'
                  : `text-black ${currentCompName}`
              "
              @click="(currentComp = CreateVolunteerJob), (currentCompName = 'CreateVolunteerJob')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path
                  d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                ></path>
              </svg>
              Create Volunteer Job
            </div>

            <div
              class="flex items-center gap-2 cursor-pointer"
              :class="
                currentCompName === 'PostVolunteerJob'
                  ? 'text-[#2e318a]'
                  : `text-black ${currentCompName}`
              "
              @click="(currentComp = PostVolunteerJob), (currentCompName = 'PostVolunteerJob')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
                <path
                  d="M352 224H305.5c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8h-2.5c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144h80V34.7C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2H384c-17.7 0-32-14.3-32-32V224zM80 96c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16H400c8.8 0 16-7.2 16-16V384c0-17.7 14.3-32 32-32s32 14.3 32 32v48c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V112C0 67.8 35.8 32 80 32h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H80z"
                />
              </svg>
              View Volunteer Job List / Post Volunteer Job
            </div>

            <div
              class="flex items-center gap-2 cursor-pointer"
              :class="
                currentCompName === 'VolunteerApplicantList'
                  ? 'text-[#2e318a]'
                  : `text-black ${currentCompName}`
              "
              @click="
                (currentComp = VolunteerApplicantList), (currentCompName = 'VolunteerApplicantList')
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path
                  d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11 13V17H6V13H11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
                ></path>
              </svg>
              Volunteer Applicant List
            </div>

            <!-- <div
              class="flex items-center gap-2 cursor-pointer"
              :class="
                currentCompName === 'ApplyVolunteer'
                  ? 'text-[#2e318a]'
                  : `text-black ${currentCompName}`
              "
              @click="(currentComp = ApplyVolunteer), (currentCompName = 'ApplyVolunteer')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
                <path
                  d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2 .1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"
                />
              </svg>
              Apply Volunteer Job
            </div> -->

            <router-link to="" class="flex items-center gap-2 cursor-pointer"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path
                  d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM7.00488 9.00275L10.0049 5.50275L13.0049 9.00275H11.0049V13.0027H9.00488V9.00275H7.00488ZM17.0049 15.0027L14.0049 18.5027L11.0049 15.0027H13.0049V11.0027H15.0049V15.0027H17.0049Z"
                ></path>
              </svg>
              Change Password
            </router-link>

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

        <component :is="currentComp" :renderFrom="'dashboard'"></component>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.router-link-active {
  color: #2e318a;
}
</style>
