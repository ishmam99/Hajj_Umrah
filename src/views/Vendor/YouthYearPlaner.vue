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
      <div v-if="isEdit == false">
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
                <tr class="" v-for="(item , index) in store.yearPlannerList" :key="item.id">
                  <!-- {{  item  }} -->
                  <td class="py-4 p-2 text-center w-1/5">{{ index+1 }}</td>
                  <td class="py-4 p-2 text-center w-1/5">{{ item.name }}</td>
                  <td class="py-4 p-2 text-center text-sm w-1/5">{{ item.date }}</td>
                  <td class="py-4 p-2 text-center text-sm w-1/5">{{ item.time }}</td>
                  
                  <!-- <td class="py-4 p-2 text-center w-1/8">Nearest Islamic Site</td> -->
                  
                <td class="py-4 p-2 flex justify-center">
                  <div
                    class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                  >
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent class="w-40">
                        <DropdownMenuItem class="text-sky-600" 
                          >Detail</DropdownMenuItem
                        >

                        <DropdownMenuItem class="text-yellow-600" @click="edit(event)"
                          >Edit</DropdownMenuItem
                        >
                        <DropdownMenuItem class="text-red-600" 
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
      
      <div v-else>
        <div class="px-5 bg-slate-50 py-5 w-full">
            <p class="text-2xl font-bold py-3 border-b">Year Planner Update Form</p>
            <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
              <form @submit.prevent="editSubmit">
                <div class="py-5 space-y-7 mt-5">
                  <div class="flex justify-between items-center gap-5">
                    <div class="relative w-full">
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlInput50"
                        value=""
                        v-model="yearPlannerForm.name"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Plan Name <span class="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  <div class="flex justify-between gap-5">
                    <div class="w-full flex gap-5">
                      <div class="relative w-1/2">
                        <div class="gap-5">
                          <label for="">Starting Date <span class="text-red-500">*</span> </label>
                          <div class="pt-2">
                            <input
                              type="date"
                              class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                              v-model="yearPlannerForm.date"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="relative w-1/2">
                        <div class="gap-5">
                          <label for="">Starting Time <span class="text-red-500">*</span> </label>
                          <div class="pt-2">
                            <input
                              type="time"
                              class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                              v-model="yearPlannerForm.time"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'


const authStore = useAuthStore()
const store = useYouthStore()

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

const isEdit = ref(false)
const eventId = ref()

const edit = (event) => {
  isEdit.value = true
  eventId.value = event.id
  yearPlannerForm.value.name = event.name
  yearPlannerForm.value.date = event.date
  yearPlannerForm.value.time = event.time
  console.log(event, 'event chk')
}

const yearPlannerForm = ref({
  name: '',
  date: '',
  time: '',
})


const editSubmit = async (eventId) => {
  // try {
  //   const data = await api().post('event-store', yearPlannerForm.value,)
  //   console.log(data)
  //   toast({
  //     title: 'Fund Raise Event Created '
  //   })
  // } catch (error) {
  //   console.log(error)
  // }

  isEdit.value = false
}


  onMounted(async () => {
    yearPlannerList()

})

</script>
