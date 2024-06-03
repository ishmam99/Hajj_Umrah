<template>
  <div class="bg-slate-50">
    <div class="px-4 pt-5 flex gap-5 items-center justify-between bg-white">
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Payroll Management</p>
        <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
      </div>
      <button
        v-if="payrollCreate == false"
        @click="payrollCreate = true"
        class="px-3 py-2 w-[150px] rounded-md shadow-md bg-cyan-600 text-white text-sm"
      >
        Create
      </button>
    </div>

    <!-- payroll create  -->
    <div v-if="payrollCreate == true" class="px-4 bg-white py-5">
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Payroll Create</p>
        <button
          v-if="payrollCreate == true"
          @click="payrollCreate = false"
          class="px-3 py-2 w-[150px] rounded-md shadow-md bg-red-600 text-white text-sm"
        >
          Cancle
        </button>
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <form class="w-full">
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
                  <input v-model="payrollCreate.employee_id" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.name" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.employee_type" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.leave" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.salary" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.tax" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.payableSlary" type="text" class="w-full p-2" />
                </td>
                <!-- <td class="py-4 px-2 text-center w-[12%]">$ 2500</td> -->
                <td class="py-4 px-2 flex justify-center">
                  <button
                    type="submit"
                    class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    <!-- payroll create  -->

    <!-- payroll update  -->
    <div v-if="payrollUpdate == true" class="px-4 bg-white py-5">
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Payroll Update</p>
        <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
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
                  <input v-model="payrollCreate.employee_id" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.name" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.employee_type" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.leave" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.salary" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.tax" type="text" class="w-full p-2" />
                </td>
                <td class="py-4 px-2 text-center w-1/8">
                  <input v-model="payrollCreate.payableSlary" type="text" class="w-full p-2" />
                </td>
                <!-- <td class="py-4 px-2 text-center w-[12%]">$ 2500</td> -->
                <td class="py-4 px-2 flex justify-center">
                  <button
                    type="submit"
                    class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm"
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    <!-- payroll update  -->

    <div v-if="payrollUpdate == false" class="bg-slate-50">
      <div class="px-4 bg-white py-5">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Payroll List</p>
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
        </div>
        <hr />
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white">
                <th class="p-2 text-center w-1/10">Date</th>
                <th class="p-2 text-center w-1/10">ID</th>
                <th class="p-2 text-center w-1/10">Image</th>

                <th class="p-2 text-center w-1/10">Employee Name</th>
                <th class="p-2 text-center w-1/10">Employee Type</th>
                <th class="p-2 text-center w-1/10">Leave</th>
                <th class="p-2 text-center w-1/10">Salary</th>
                <th class="p-2 text-center w-1/10">Tax</th>
                <th class="p-2 text-center w-1/10">Payble</th>
                <th class="p-2 text-center w-1/10">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tableRowColor" v-for="item in store.payroll">
                <td class="py-4 p-2 text-center text-sm w-1/10">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/10">01</td>

                <td class="py-4 p-2 w-1/10">
                  <img src="" alt="" class="w-8 h-8 rounded-full bg-slate-400 m-auto" />
                </td>

                <td class="py-4 p-2 text-center w-1/10">Mr. Rahim</td>
                <td class="py-4 p-2 text-center w-1/10">Imam</td>
                <td class="py-4 p-2 text-center w-1/10">3 Days</td>
                <td class="py-4 p-2 text-center w-1/10">$ 500</td>
                <td class="py-4 p-2 text-center w-1/10">12%</td>
                <td class="py-4 p-2 text-center w-1/10">$ 440</td>
                <td class="py-4 p-2 flex justify-center w-1/10">
                  <div
                    class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                  >
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem class="text-yellow-600">Edit</DropdownMenuItem>
                        <DropdownMenuItem class="text-blue-600">Details</DropdownMenuItem>
                        <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
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
              <tr class="bg-white">
                <td class="py-4 p-2 text-center text-sm w-1/10">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/10">02</td>
                <td class="py-4 p-2 w-1/10">
                  <img src="" alt="" class="w-8 h-8 rounded-full bg-slate-400 m-auto" />
                </td>
                <td class="py-4 p-2 text-center w-1/10">Mr. Hahim</td>
                <td class="py-4 p-2 text-center w-1/10">Teacher</td>
                <td class="py-4 p-2 text-center w-1/10">7 Days</td>
                <td class="py-4 p-2 text-center w-1/10">$ 500</td>
                <td class="py-4 p-2 text-center w-1/10">12%</td>
                <td class="py-4 p-2 text-center w-1/10">$ 450</td>
                <td class="py-4 p-2 flex justify-center w-1/10">
                  <div
                    class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                  >
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem class="text-yellow-600">Edit</DropdownMenuItem>
                        <DropdownMenuItem class="text-blue-600">Details</DropdownMenuItem>
                        <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
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
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '/components/ui/toast/use-toast'
import { useAdminStore } from '/src/stores/adminStore.ts'
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

const store = useAdminStore()
const router = useRouter()
const currentDate = new Date()
console.log(currentDate)
const currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
console.log(currentDateWithFormat)

const payrollCreate = ref(false)
const payrollUpdate = ref(false)

const payroll = ref({
  name: '',
  employee_id: '',
  employee_type: '',
  salary: '',
  date: 'currentDateWithFormat',
  img: '',
  leave: '',
  tax: '',
  payableSlary: ''
})

const { toast } = useToast()
const payrollStore = async () => {
  try {
    const data = await api().post('payroll-store', {
      method: 'post',
      body: payroll
    })
    console.log(data)
    toast({
      title: 'Payroll Created '
    })
  } catch (error) {
    console.log(error)
  }
}
</script>
