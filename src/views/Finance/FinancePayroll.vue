<template>
  <div class="bg-slate-50">
    <div class="px-4 bg-white py-5">
        <div class="flex justify-between items-center pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Payroll Create</p>
          <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
        </div>
        <hr />
        <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
          <form @submit.prevent="payrollCreate()" class="w-full">
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white">
                  <th class="p-2 text-center w-1/8">Employee ID</th>
                  <th class="p-2 text-center w-1/8">Employee Name</th>
                  <th class="p-2 text-center w-1/8">Employee Type</th>
                  <th class="p-2 text-center w-1/8">Leave</th>
                  <th class="p-2 text-center w-1/8">Salary</th>
                  <th class="p-2 text-center w-1/8">Tax</th>
                  <th class="p-2 text-center w-1/8">Payble Salary</th>
                  <th class="p-2 text-center w-1/8">Action</th>
                </tr>
              </thead>
            
                <tbody>
                  <tr class="">
                    <td class="py-4 px-2 text-center w-1/8">
                      <input 
                      v-model="payrollCreate.employee_id"
                      type="text" class="w-full p-2">
                    </td>
                    <td class="py-4 px-2 text-center w-1/8">
                      <input 
                      v-model="payrollCreate.name"
                      type="text" class="w-full p-2">
                    </td>
                    <td class="py-4 px-2 text-center w-1/8">
                      <input 
                      v-model="payrollCreate.employee_type"
                      type="text" class="w-full p-2">
                    </td>
                    <td class="py-4 px-2 text-center w-1/8">
                      <input 
                      v-model="payrollCreate.leave"
                      type="text" class="w-full p-2">
                    </td>
                    <td class="py-4 px-2 text-center w-1/8">
                      <input 
                      v-model="payrollCreate.salary"
                      type="text" class="w-full p-2">
                    </td>
                    <td class="py-4 px-2 text-center w-1/8">
                      <input 
                      v-model="payrollCreate.tax"
                      type="text" class="w-full p-2">
                    </td>
                    <td class="py-4 px-2 text-center w-1/8">
                      <input 
                      v-model="payrollCreate.payableSlary"
                      type="text" class="w-full p-2">
                    </td>
                    <!-- <td class="py-4 px-2 text-center w-[12%]">$ 2500</td> -->
                    <td class="py-4 px-2 flex justify-center">
                      <button type="submit" class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        Save
                      </button>
                    </td>
                  </tr>
                </tbody>
              
              
            </table>
          </form>
        </div>
       

      </div>
  </div>
</template>
<script setup>

import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '/components/ui/toast/use-toast'
import { useAccountStore } from '/src/stores/accountStore.ts'
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
  DropdownMenuTrigger,
} from '/components/ui/dropdown-menu'

const store = useAccountStore()
const router = useRouter()
const currentDate = new Date()
console.log(currentDate)
const currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
console.log(currentDateWithFormat)

const payroll = ref({
  name:'',
  employee_id: '',
  employee_type: '',
  salary: '',
  date: 'currentDateWithFormat',
  img: '',
  leave: '',
  tax: '',
  payableSlary:'',
})

// const { toast } = useToast()
// const payrollCreate = async () => {
//   try {
//     const data = await api().post('payroll-store', {
//       method: 'post',
//       body: payroll,
//     })
//     console.log(data)
//     toast({
//         title: 'Payroll Created ',
//       });
//   }
//   catch (error) {
//     console.log(error)
//   }
// }



const payrollCreate = () => {
  store.PayrollListCreate(payroll.value)
  router.push({ name:'Payroll_List'})
}


</script>
