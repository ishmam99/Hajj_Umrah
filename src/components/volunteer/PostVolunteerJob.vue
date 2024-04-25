<script setup>
import ApplyVolunteer from '@/components/volunteer/ApplyVolunteer.vue'
import { ref, onMounted, defineProps } from 'vue'
import { storeToRefs } from 'pinia'
import { useVolunteerDataStore } from '@/stores/volunteerStore.ts'

import { useMediaStore } from '/src/stores/mediaDashboard.ts'
import { useToast } from '/components/ui/toast/use-toast'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/AuthStore.ts'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const store = useMediaStore()
const authStore = useAuthStore()

const route = useRoute()
const router = useRouter()

const loading = ref(false)
const { toast } = useToast()

const volunteerJobList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('volunteer-job-list', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })

    store.volunteerJobList = data.data
    console.log(store.volunteerJobList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

// pinia
const { volunteeringPosts } = storeToRefs(useVolunteerDataStore())
const { setVolunteeringPosts } = useVolunteerDataStore()

const showAllPost = ref(true)
const selectedVolunteerPost = ref({})

const props = defineProps({
  renderFrom: String // Explicitly specify the type of the prop as String
})

const handleApproveVolunteerPost = (id) => {
  volunteeringPosts.value.forEach((singleVolunteerPost) => {
    if (singleVolunteerPost.id === id) {
      selectedVolunteerPost.value.isPosted = true
      singleVolunteerPost.isPosted = true
    }
  })

  setVolunteeringPosts(volunteeringPosts.value)
}

onMounted(() => {
  console.log('here check', props)
  volunteerJobList()
})
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-full">
    <div v-if="showAllPost">
      <p class="text-2xl font-bold py-3 border-b">Open Volunteer Jobs</p>
      <div class="flex flex-wrap w-full">
        <div
          v-for="(volunteerPost, index) in store.volunteerJobList"
          :key="index"
          class="mt-5"
          :class="
            renderFrom === 'dashboard' ? 'w-full lg:w-1/2 xl:w-1/3' : 'w-1/2 lg:w-1/3 xl:w-1/4'
          "
        >
          <div
            v-if="
              (volunteerPost.isPosted && renderFrom !== 'dashboard') || renderFrom === 'dashboard'
            "
            class="bg-white rounded-xl p-5 shadow-md mx-2 h-full"
          >
            <div class="flex flex-col space-y-2 justify-between gap-1 rounded-md p-2 h-full">
              <div class="grow relative">
                <img :src="volunteerPost.image" alt="" class="w-full h-[206px]" />
                <p class="text-xs font-semibold text-gray-600">{{ volunteerPost.time }}</p>
                <p class="text-xs font-semibold italic text-gray-600">{{ volunteerPost.venue }}</p>
                <p class="text-lg font-bold">{{ volunteerPost.title }}</p>
                <p class="">{{ volunteerPost.description }}</p>
                <!-- <div class="absolute w-8 h-8 top-0 right-0">
                  <svg
                    v-if="volunteerPost.isPosted"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#398f00"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    />
                  </svg>
                </div> -->
              </div>
              <div class="flex flex-col space-y-1">
                <p class=""><span class="font-bold">Gender:</span> {{ volunteerPost.gender }}</p>
                <button
                  class="btn-round-cyan self-center"
                  @click="(selectedVolunteerPost = volunteerPost), (showAllPost = false)"
                >
                  {{ renderFrom === 'dashboard' ? 'Details' : 'Apply' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="!showAllPost && renderFrom === 'dashboard'" class="flex flex-col space-y-3">
      <div class="flex space-x-3 ml-2" @click="showAllPost = !showAllPost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="w-5 h-5 cursor-pointer"
        >
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
          />
        </svg>
        <p>See all jobs</p>
      </div>
      <div class="bg-white rounded-xl p-5 shadow-md mx-2 h-full">
        {{ selectedVolunteerPost }}
        <div class="flex flex-col space-y-2 justify-between gap-1 rounded-md p-2 h-full">
          <div class="grow">
            <img :src="selectedVolunteerPost.image" alt="" class="w-full" />
            <p class="text-xs font-semibold text-gray-600">{{ selectedVolunteerPost.date }} {{ selectedVolunteerPost.time }}</p>
            <p class="text-xs font-semibold italic text-gray-600">
              {{ selectedVolunteerPost.venue }}
            </p>
            <p class="text-lg font-bold">{{ selectedVolunteerPost.postTitle }}</p>
            <p class="">{{ selectedVolunteerPost.description }}</p>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex space-x-2">
              <h4 class="font-bold">Responsibilities:</h4>
              <p>{{ selectedVolunteerPost.responsibilities }}</p>
            </div>
            <div class="flex space-x-2">
              <h4 class="font-bold">Benefits:</h4>
              <p>{{ selectedVolunteerPost.benefits }}</p>
            </div>
            <div class="flex space-x-2">
              <h4 class="font-bold">Qualification:</h4>
              <p>{{ selectedVolunteerPost.qualification }}</p>
            </div>
            <p class="">
              <span class="font-bold">Gender:</span> {{ selectedVolunteerPost.gender }}
            </p>
            <button
              class="btn-round-cyan self-center"
              :class="selectedVolunteerPost.isPosted ? '!bg-[#359913]' : ''"
              @click="handleApproveVolunteerPost(selectedVolunteerPost.id)"
            >
              {{ selectedVolunteerPost.isPosted ? 'Posted' : 'Post' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <ApplyVolunteer
        :selectedVolunteerPost="selectedVolunteerPost"
        @allVolunteerPost="showAllPost = true"
      />
    </div>
  </div>
</template>

<style scoped>
.btn-round-cyan {
  width: 200px;
  border: none;
  outline: none;
  padding: 10px;
  color: white;
  background: #0fa3b1;
  border-radius: 26px;
  cursor: pointer;
  font-size: 15px;
}
</style>
