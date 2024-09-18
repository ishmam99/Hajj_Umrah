<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

import { ref, onMounted, defineProps } from 'vue'
import { storeToRefs } from 'pinia'
import { useVolunteerDataStore } from '@/stores/volunteerStore.ts'

import { useAdminStore } from '/src/stores/adminStore.ts'
import { useToast } from '/components/ui/toast/use-toast'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const store = useAdminStore()
const loading = ref(false)
const { toast } = useToast()

const volunteerJobList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('volunteer-job-list')

    store.volunteerJobList = data.data
    console.log(store.volunteerJobList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const volunteerJobPost = async (id) => {
  loading.value = true
  console.log(store.volunteerJobList, 'yo')
  try {
    const { data } = await api().post(`volunteer-update-job-status/${id}`, {
      job_status: 'Approved'
    })
    toast({
      title: 'Success',
      description: 'Volunteer posted successfully!'
    })
    volunteerJobList()
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const volunteerJobRemove = async (id) => {
  loading.value = true
  console.log(store.volunteerJobList, 'yo')
  try {
    const { data } = await api().post(`volunteer-update-job-status/${id}`, {
      job_status: 'Waiting'
    })
    toast({
      title: 'Success',
      description: 'Volunteer posted successfully!'
    })
    volunteerJobList()
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(() => {
  volunteerJobList()
})
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-full">
    <div>
      <p class="text-2xl font-bold py-3 border-b">All Customer List</p>

      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left w-1/8">SL.</th>
              <th class="p-2 text-left w-1/8">Name</th>
              <th class="p-2 text-left w-1/8">Gnder</th>
              <th class="p-2 text-left w-1/8">Address</th>
              <th class="p-2 text-left w-1/8">Email</th>
              <th class="p-2 text-left w-1/8">Contack Inf.</th>
              <th class="p-2 text-left w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-gray-50">
              <td class="p-2">1</td>
              <td class="p-2">John Doe</td>
              <td class="p-2">Male</td>
              <td class="p-2">123 Main St, New York, NY</td>
              <td class="p-2">johndoe@example.com</td>
              <td class="p-2">+1 (123) 456-7890</td>
              <td class="p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  Details
                </button>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="p-2">2</td>
              <td class="p-2">Jane Smith</td>
              <td class="p-2">Female</td>
              <td class="p-2">456 Elm St, Los Angeles, CA</td>
              <td class="p-2">janesmith@example.com</td>
              <td class="p-2">+1 (987) 654-3210</td>
              <td class="p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  Details
                </button>
              </td>
            </tr>
            <tr class="bg-gray-50">
              <td class="p-2">3</td>
              <td class="p-2">Samuel Jackson</td>
              <td class="p-2">Male</td>
              <td class="p-2">789 Oak St, Chicago, IL</td>
              <td class="p-2">samjackson@example.com</td>
              <td class="p-2">+1 (555) 123-4567</td>
              <td class="p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  Details
                </button>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="p-2">4</td>
              <td class="p-2">Emily Davis</td>
              <td class="p-2">Female</td>
              <td class="p-2">101 Pine St, San Francisco, CA</td>
              <td class="p-2">emilydavis@example.com</td>
              <td class="p-2">+1 (222) 654-9876</td>
              <td class="p-2">
                <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
