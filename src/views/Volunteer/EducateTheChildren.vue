<template>
  <DefaultLayout>
    <div
      class="px-20 pt-20 mt-5 py-5 bg-sky-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
    >
      <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
        <div class="flex items-center justify-center gap-2 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path
              d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
            ></path>
          </svg>
          <p>Home</p>
          <p>/ Get Involved</p>
          <p>/ Volunteers</p>
          <p class="text-sky-800">/ Volunteer Services</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-sky-800 text-4xl font-bold">{{ selectedVolunteer.title }}</h1>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 h-full py-5 flex gap-5 px-20 w-full">
      <div class="w-3/4">
        <div class="bg-white p-5 rounded-lg shadow-lg mb-5">
          <div class="flex flex-col gap-2 rounded-md p-2 h-full">
            <div class="">
              <img :src="selectedVolunteer.image" alt="" class="w-full" />
              <p class="font-semibold pt-2">
                Time :
                {{ selectedVolunteer.date }} {{ selectedVolunteer.time }}
              </p>
              <p class="font-semibold">
                Venue :
                {{ selectedVolunteer.venue }}
              </p>
              <p class="">{{ selectedVolunteer.description }}</p>
            </div>
            <div class="flex flex-col">
              <div class="">
                <h4 class="font-bold">Responsibilities:</h4>
                <p>{{ selectedVolunteer.responsibilities }}</p>
              </div>
              <div class="flex space-x-2">
                <h4 class="font-bold">Benefits:</h4>
                <p>{{ selectedVolunteer.benefits }}</p>
              </div>
              <div class="flex space-x-2">
                <h4 class="font-bold">Qualification:</h4>
                <p>{{ selectedVolunteer.qualification }}</p>
              </div>
              <p class="pb-3">
                <span class="font-bold">Gender:</span> {{ selectedVolunteer.gender }}
              </p>
            </div>
          </div>
          <div v-if="authStore.isAuthenticated == true">
            <router-link
              to="/volunteerRegister"
              class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold"
              v-if="store.registerVolunteerChk == false"
              >register</router-link
            >
            <button
              v-else
              class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold"
              @click="volunteerJobSubmit"
            >
              Apply
            </button>
          </div>
          <div v-else class="flex gap-5">
            <router-link
              to="/Member_Login"
              class="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold"
              >Sign In</router-link
            >
            <router-link
              to="/Signup"
              class="px-5 py-2 rounded-lg bg-green-600 text-white font-semibold"
              >Sign Up</router-link
            >
          </div>
        </div>
      </div>
      <VolunteerMore />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import Card from '/src/components/cardSection.vue'
import VolunteerMore from '/src/components/VolunteerMore.vue'
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '/src/stores/store.ts'
import {useAuthStore} from '/src/stores/AuthStore.ts'

const authStore = useAuthStore()
const store = useStore()
const route = useRoute()

const selectedVolunteerPost = ref('')

const selectedId = computed(() => {
  return route.params.id
})
const selectedVolunteer = computed(() => {
  return selectedVolunteerPost.value
})
const volunteerJobDetails = async (id) => {
  try {
    const { data } = await api().get(`volunteer-job-details/${id}`)
    selectedVolunteerPost.value = data.data
    console.log(selectedVolunteerPost)
  } catch (error) {
    console.log(error)
  }
}

const registerVolunteerChk = async () => {
  try {
    const { data } = await api().get('volunteer-form-check')
    console.log(data.exists)
    store.registerVolunteerChk = data.exists
  } catch (error) {
    console.log(error)
  }
}

const volunteerJobSubmit = async () => {
  const jobform = { volunteer_job_id: selectedVolunteer.value.id }
  try {
    const data = await api().post('volunteer-job-apply', jobform)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  volunteerJobDetails(selectedId.value)
  registerVolunteerChk()
})
</script>

<style lang="scss" scoped></style>
