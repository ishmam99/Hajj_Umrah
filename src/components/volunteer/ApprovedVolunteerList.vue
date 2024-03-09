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

import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useVolunteerDataStore } from '@/stores/volunteerStore.ts'

// pinia
const { volunteerApplicantList } = storeToRefs(useVolunteerDataStore())
const { setVolunteerApplicantList } = useVolunteerDataStore()

const searchByJobText = ref('')

watch(
  () => searchByJobText.value,
  () => {
    console.log(searchByJobText.value, 'searchByJobText.value')
  }
)
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Approved Volunteer List</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">All Approved Volunteer List</p>

        <input
          v-model="searchByJobText"
          type="text"
          placeholder="Search by job name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <input
          type="text"
          placeholder="Search by interest area"
          class="py-1.5 px-2 rounded-md border text-sm"
        />

        <div class="w-[200px]">
          <Select class="">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Search by expertise" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Expert"> Expert </SelectItem>
                <SelectItem value="Intermediate"> Intermediate </SelectItem>
                <SelectItem value="Beginner"> Beginner </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
                v-if="volunteerApplicant.applicationStatus === 'Approved'"
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

                <td class="py-4 p-2 text-center text-green-600 font-bold">
                  {{ volunteerApplicant.applicationStatus }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
