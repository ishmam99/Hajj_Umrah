<template>
  <div class="bg-slate-50 w-3/4">
    <div class="px-4 bg-white py-5">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Year Planer List</p>
        <input
          type="date"
          placeholder="Search by date or name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <input
          type="text"
          placeholder="Search by name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <div class="w-[200px]">
          <Select class="">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Sort By order" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Comfort The Sick"> new to old </SelectItem>
                <SelectItem value="Educate The Children"> old to new </SelectItem>
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
              <th class="p-2 text-center w-1/5">No.</th>
              <th class="p-2 text-center w-1/5">Plan Name</th>
              <th class="w-1/5">Date</th>
              <th class="w-1/5">Time</th>
              
              <!-- <th class="p-2 text-center w-2/8">Description</th> -->
              <th class="p-2 text-center w-1/5">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="(item , index) in store.yearPlannerList">
              <td class="py-4 p-2 text-center w-1/5">{{ index+1 }}</td>
              <td class="py-4 p-2 text-center w-1/5">{{ item.name }}</td>
              <td class="py-4 p-2 text-center text-sm w-1/5">{{ item.date }}</td>
              <td class="py-4 p-2 text-center text-sm w-1/5">{{ item.time }}</td>
              
              <!-- <td class="py-4 p-2 text-center w-1/8">Nearest Islamic Site</td> -->
              <td class="py-4 p-2 flex justify-center">
                <button
                  class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm"
                >
                  Edit
                </button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Input } from '/components/ui/input'
import { ref  ,onMounted} from 'vue'
import api from '@/config/api'
import { useToast } from '/components/ui/toast/use-toast'
import { useRoute, useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/AuthStore.ts'
  import {useYouthStore} from '@/stores/YouthDashboard.ts'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'





const authStore = useAuthStore()
const store = useYouthStore()

  const route = useRoute()
  const router = useRouter()
  
  const loading = ref(false)
  const { toast } = useToast()
  
  const yearPlannerList = async () => {
  
    loading.value = true
    try {
      const { data } = await api().get('year-planner-list', {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })
      
      store.yearPlannerList = data.data
      console.log(store.yearPlannerList)
    } catch (error) {
      console.log(error)
    }
    loading.value = false
  }

  onMounted(async () => {
    yearPlannerList()

})

</script>
