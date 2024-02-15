<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useVolunteerDataStore } from '@/stores/volunteerStore.ts'

// pinia
const { volunteerApplicantList } = storeToRefs(useVolunteerDataStore())
const {
  setVolunteerApplicantList,
  setSearchByJobText,
  setSearchByInterestText,
  setSearchByExpertiseRef,
  setSearchByDay,
  setSearchByRepeatedDay,
  setSearchByStartEnd
} = useVolunteerDataStore()

const searchByJobText = ref('')
const searchByInterestText = ref('')
const searchByExpertise = ref('All')
const searchByDateTime = ref(null)
const occurrenceType = ref('Weeks')
const searchByDay = ref('Any')
const searchByRepeatedDay = ref('1')
const searchByStartTime = ref('Any')
const searchByEndTime = ref('Any')
const hours = ref([])
// Function to generate hours
const generateHours = () => {
  for (let i = 0; i < 24; i++) {
    const hour = `${i < 10 ? '0' : ''}${i}:00` // Format hour with leading zero if needed
    hours.value.push(hour)
  }
}

watch(
  () => searchByJobText.value,
  () => {
    setSearchByJobText(searchByJobText.value)

    if (searchByJobText.value === '') {
      setSearchByInterestText(searchByInterestText.value)
    }
  }
)

watch(
  () => searchByInterestText.value,
  () => {
    setSearchByInterestText(searchByInterestText.value)

    if (searchByInterestText.value === '') {
      setSearchByJobText(searchByJobText.value)
    }
  }
)

watch(
  () => searchByExpertise.value,
  () => {
    console.log(searchByExpertise.value, 'searchByExpertise.value')
  }
)

watch(
  () => searchByDay.value,
  () => {
    setSearchByDay(searchByDay.value)
    searchByRepeatedDay.value = '1'
    console.log(searchByDay.value, 'searchByDay.value')
  }
)

watch(
  () => searchByRepeatedDay.value,
  () => {
    setSearchByRepeatedDay({ day: searchByDay.value, repeatedTime: searchByRepeatedDay.value })
    console.log(searchByDay.value, searchByRepeatedDay.value, 'searchByDay.value')
  }
)

// array of multiple sources
watch(
  [() => searchByStartTime.value, () => searchByEndTime.value],
  ([newStartTime, newEndTime]) => {
    // if (newStartTime !== 'Any' || newEndTime !== 'Any') {
    // }
    setSearchByStartEnd({ startTime: newStartTime, endTime: newEndTime })
    console.log(`StartTime is ${newStartTime} and EndTime is ${newEndTime}`)
  }
)

onMounted(() => {
  generateHours()
})
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Volunteer Applicant List</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">All Volunteer Application</p>
      </div>

      <div class="flex flex-wrap justify-between items-end pb-2">
        <div>
          <div>By job name:</div>
          <input
            v-model="searchByJobText"
            type="text"
            placeholder="Search by job name"
            class="py-1.5 px-2 rounded-md border text-sm"
          />
        </div>

        <div>
          <div>Search by interested area:</div>
          <input
            v-model="searchByInterestText"
            type="text"
            placeholder="Search by interest area"
            class="py-1.5 px-2 rounded-md border text-sm"
          />
        </div>

        <div class="w-[200px]">
          <select v-model="searchByDay" class="bg-white border border-gray-500 p-2 rounded-lg">
            <option>Any</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Biweekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <div
          class="w-[200px] flex space-x-1 items-center"
          v-if="searchByDay !== 'Daily' && searchByDay !== 'All'"
        >
          <span>Min </span>
          <select
            v-model="searchByRepeatedDay"
            class="bg-white border border-gray-500 p-2 rounded-lg"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <span class="whitespace-nowrap"
            >times in {{ searchByDay }} {{ searchByDay === 'Biweekly' ? '(15 Days)' : '' }}</span
          >
        </div>

        <div class="w-fit flex flex-col">
          <div>Available Time:</div>
          <div>
            <select
              v-model="searchByStartTime"
              class="bg-white border border-gray-500 p-2 rounded-lg"
            >
              <option>Any</option>
              <option v-for="hour in hours" :key="hour">{{ hour }}</option>
            </select>

            <span class="mx-2">To</span>

            <select
              v-model="searchByEndTime"
              class="bg-white border border-gray-500 p-2 rounded-lg"
            >
              <option>Any</option>
              <option v-for="hour in hours" :key="hour">{{ hour }}</option>
            </select>
          </div>
        </div>
      </div>

      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-center">No.</th>
              <th class="p-2 text-center">Name</th>
              <th class="">Volunteer Job</th>
              <th class="">Expertise Area</th>
              <th class="p-2 text-center">Additional Interest Area</th>
              <th class="p-2 text-center">More Info</th>
              <th class="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="volunteerApplicant in volunteerApplicantList"
              :key="volunteerApplicant.id"
            >
              <tr
                v-if="volunteerApplicant.applicationStatus === 'Waiting'"
                :class="[`${volunteerApplicant.id % 2 === 0 ? 'bg-white' : ''}`]"
              >
                <td class="py-4 p-2 text-center">{{ volunteerApplicant.id }}</td>
                <td class="py-4 p-2 text-center">{{ volunteerApplicant.name }}</td>
                <td class="py-4 p-2 text-center">{{ volunteerApplicant.volunteerJob }}</td>
                <td class="py-4 p-2 text-center">{{ volunteerApplicant.expertiseArea }}</td>
                <td class="py-4 p-2 text-center">
                  {{ volunteerApplicant.additionalInterestArea }}
                </td>
                <td class="py-4 p-2 text-center">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="font-bold text-xl mb-2">Applicant Details</div>
                          </DialogTitle>
                          <DialogDescription>
                            <!-- <img src="/src/assets/image/home/l4.jpg" alt="" /> -->
                            <div>
                              <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                              {{ volunteerApplicant.moreInfo }}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>

                <td class="py-4 p-2 text-center">
                  <select
                    v-model="volunteerApplicant.applicationStatus"
                    class="bg-white border border-gray-500 p-2 rounded-lg"
                  >
                    <option>Waiting</option>
                    <option>Approved</option>
                    <option>Reject</option>
                  </select>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
