<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'


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
const volunteerJobPost = async (id) => {
  loading.value = true
  // selectedVolunteerPost.value.job_status = "Approved"
  console.log( store.volunteerJobList, 'yo')
  try {
    const { data } = await api().post(`volunteer-update-job-status/${id}`, 
    // selectedVolunteerPost.value,
    { job_status : "Approved" }
    )
    toast({
      title: 'Success',
      description: 'Volunteer posted successfully!'
    })
    
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
      
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left w-1/8"> SL.</th>
              <th class="p-2 text-left w-1/8"> Name</th>
              <th class="p-2 text-left w-1/8">venue</th>
              <th class="p-2 text-left w-1/8">Gender</th>
              <th class="p-2 text-left w-1/8">Date</th>
              <th class="p-2 text-left w-1/8">Time</th>
              <th class="p-2 text-left w-1/8">Status</th>
              <th class="p-2 text-left w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tableRowColor" v-for="(volunteerPost, index) in store.volunteerJobList" :key="index">
              <td class="py-4 p-2 w-1/8">{{ index+1 }}</td>
              <td class="py-4 p-2 gap-2 w-1/8">
                <h3 class="font-bold">{{ volunteerPost.title }}</h3>
              </td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.gender }}</td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.venue }}</td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.date }} </td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.time }} </td>
              <td v-if="volunteerPost.job_status == 'Approved'" class="py-4 p-2 text-left w-1/8 text-green-600 font-semibold">Approved</td>
              <td v-if="volunteerPost.job_status == 'Waiting'" class="py-4 p-2 text-left w-1/8 font-semibold text-gray-400">Pending</td>
              <td class="py-4 p-2 text-left w-1/8">
                <div
                  class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                >
                  <DropdownMenu class="w-full">
                    <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                    
                    <DropdownMenuContent>
                      <DropdownMenuItem class="text-blue-600" 
                        >Details</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-yellow-600" 
                        >Edit</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-green-600" @click="volunteerJobPost(volunteerPost.id)"
                        >Post</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-red-600" @click="submitDelete()"
                        >Delete</DropdownMenuItem
                      >
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 16L6 10H18L12 16Z"></path>
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tableRowColor:nth-child(even){
  background: white;
}
</style>
