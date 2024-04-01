<template>
  <div class="px-4 bg-white py-5 w-3/4">
     <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Program List</p>
          <input type="date" placeholder="Search by date or name" class="py-1.5 px-2 rounded-md border text-sm">
          <input type="text" placeholder="Search by name" class="py-1.5 px-2 rounded-md border text-sm">
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
           <tr class="bg-white" >
             <th class="p-2 text-center w-1/6">No.</th>
             <th class="p-2 text-center w-1/6">Program Name(s)</th>
             <th class="p-2 text-center w-1/6">Starting Date</th>
             <th class="p-2 text-center w-1/6">Ending Date</th>
             <th class="p-2 text-center w-1/6">Time</th>
             <th class="p-2 text-center w-1/6">Action</th>
           </tr>
         </thead>
         <tbody>
           <tr class="" v-for="(item,index) in store.programList">
             <td class="py-4 p-2 w-1/6 text-center">{{ index+1 }}</td>
             <td class="py-4 p-2 flex justify-center items-center gap-2 w-1/6">
               <h3 class="font-bold">{{ item.name }}</h3>
             </td>
             <td class="py-4 p-2 text-center w-1/6">{{item.start_date}}</td>
             <td class="py-4 p-2 text-center w-1/6">{{ item.end_date }}</td>
             <td class="py-4 p-2 text-center w-1/6">{{ item.state_time }} - {{item.end_time  }}</td>
             <td class="py-4 p-2 text-center w-1/6">
              <Select class="">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem value="Comfort The Sick"> Active </SelectItem>
                    <SelectItem value="Educate The Children"> Inactive </SelectItem>
                    <SelectItem value="Shelter The Homeless"> Repeate </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
             </td>
           </tr>
         </tbody>
       </table>
     </div>
   </div>
 </template>
 <script setup>

  import { ref , onMounted } from 'vue'
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
  
  const programList = async () => {
  
    loading.value = true
    try {
      const { data } = await api().get('program-list', {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })
      
      store.programList = data.data
      console.log(store.programList)
    } catch (error) {
      console.log(error)
    }
    loading.value = false
  }

  onMounted(async () => {
    programList()

})


 </script>
