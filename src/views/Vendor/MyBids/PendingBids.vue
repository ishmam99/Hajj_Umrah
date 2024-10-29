<template>
  <div class="px-5 bg-slate-50 py-5 w-4/5">
    <p class="text-2xl font-bold py-3 border-b">Pending Bids</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <div
       class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
     >
       <table class="table-auto w-full">
         <thead>
           <tr class="bg-[#219C90] text-white text-lg" >
             <th class="p-2 text-center w-1/6">No.</th>
             <th class="p-2 text-center w-1/6">Bid Id</th>
             <th class="p-2 text-center w-1/6">Starting Date</th>
             <th class="p-2 text-center w-1/6">Ending Date</th>
             <th class="p-2 text-center w-1/6">Status</th>
             <!-- <th class="p-2 text-center w-1/6">Action</th> -->
           </tr>
         </thead>
         <tbody>
           <tr class="">
             <td class="py-4 p-2 w-1/6 text-center">01</td>
             <td class="py-4 p-2 text-center w-1/6">
              U-2027-24A-2400-1
             </td>
             <td class="py-4 p-2 text-center w-1/6">20 September</td>
             <td class="py-4 p-2 text-center w-1/6">30 September</td>
             <td class="py-4 p-2 text-center w-1/6 font-bold text-blue-800">In Prepration</td>
             <!-- <td class="py-4 p-2 text-center w-1/6">
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
             </td> -->
           </tr>
         </tbody>
       </table>
     </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from '@/stores/AuthStore.ts'
import { Input } from '/components/ui/input'
import { ref } from 'vue'
import { useStore } from '/src/stores/store'
import api from '@/config/api'
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

const store = useStore()
const authStore = useAuthStore()
const loading = ref(false)
const { toast } = useToast()

const ProgramForm = ref({
  name: '',
  description: '',
  address: '',
  city: '',
  state: '',
  start_date: '',
  end_date: '',
  state_time: '',
  end_time: '',
  image: ''
})

const selectedFile = ref(null)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  ProgramForm.value.image = event.target.files[0]
  console.log('selected image', selectedFile.value)
}

const ProgramFormApply = async () => {
  console.log(ProgramForm)
  loading.value = true
  try {
    const data = await api().post('program-store',ProgramForm.value, {
      headers: {
          Authorization: `Bearer ${authStore.token}`
        }
    })
    toast({
      title: 'Success',
      description: 'Program created '
    })
    console.log(data)
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }
  loading.value = false
}
</script>
