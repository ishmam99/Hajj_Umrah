<template>
  <div class="bg-slate-50">
    <div class="px-4 bg-white py-5">
      <!-- expense create  -->
      <div>
        <div class="flex justify-between items-center pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Operation Expense Create</p>
          <button @click="expenseCreate = true" v-if="expenseCreate == false" class="w-[150px] py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">Create</button>
          <button @click="expenseCreate = false" v-if="expenseCreate == true" class="w-[150px] py-2 rounded-md shadow-md bg-red-600 text-white text-sm">Cancle</button>
        </div>
        <hr />
        <div
        v-if="expenseCreate == true"
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <form @submit.prevent="operationExpenseCreate()" class="w-full">
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white">
                  <!-- <th class="p-2 text-center w-[12%]">ID</th> -->
                  <th class="p-2 text-center w-1/5">Date</th>
                  <th class="p-2 text-center w-1/5">Opeation Name</th>
                  <th class="p-2 text-center w-1/5">Expense Type / Name</th>
                  <th class="p-2 text-center w-1/5">Amount</th>
                  <!-- <th class="p-2 text-center w-[12%]">Balance</th> -->
                  <th class="p-2 text-center w-1/5">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <!-- <td class="py-4 px-2 text-center w-[12%]"><input type="text" class="w-full p-2"></td> -->
                  <td class="py-4 px-2 text-center text-sm w-1/5">
                    <input v-model="operationExpense.date" type="date" class="w-full p-2" />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input
                      v-model="operationExpense.operation_name"
                      type="text"
                      class="w-full p-2"
                    />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input
                      v-model="operationExpense.operation_type"
                      type="text"
                      class="w-full p-2"
                    />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="operationExpense.amount" type="text" class="w-full p-2" />
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
      <!-- expense create  -->


      <!-- expense update  -->
      <div v-if="expenseUpdate ==  true">
        <div class="flex justify-between items-center py-2 pt-5">
          <p class="text-2xl text-yellow-600 font-bold">Operation Expense Update</p>
          <button @click="expenseUpdate = false" class="w-[150px] py-2 rounded-md shadow-md bg-red-600 text-white text-sm">Cancle</button>
        </div>
        <hr />
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <form @submit.prevent="operationExpenseCreate()" class="w-full">
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white">
                  <!-- <th class="p-2 text-center w-[12%]">ID</th> -->
                  <th class="p-2 text-center w-1/5">Date</th>
                  <th class="p-2 text-center w-1/5">Opeation Name</th>
                  <th class="p-2 text-center w-1/5">Expense Type / Name</th>
                  <th class="p-2 text-center w-1/5">Amount</th>
                  <!-- <th class="p-2 text-center w-[12%]">Balance</th> -->
                  <th class="p-2 text-center w-1/5">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <!-- <td class="py-4 px-2 text-center w-[12%]"><input type="text" class="w-full p-2"></td> -->
                  <td class="py-4 px-2 text-center text-sm w-1/5">
                    <input v-model="operationExpense.date" type="date" class="w-full p-2" />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input
                      v-model="operationExpense.operation_name"
                      type="text"
                      class="w-full p-2"
                    />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input
                      v-model="operationExpense.operation_type"
                      type="text"
                      class="w-full p-2"
                    />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="operationExpense.amount" type="text" class="w-full p-2" />
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
      <!-- expense update  -->

      <!-- expense list  -->
      <div v-if="expenseUpdate ==  false">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Operation Expense List</p>
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
                <th class="p-2 text-center w-1/6">ID</th>
                <th class="w-1/6">Date</th>
                <th class="p-2 text-center w-1/6">Operation Name</th>
                <th class="p-2 text-center w-1/6">Expense Type / Name</th>
                <th class="p-2 text-center w-1/6">Amount</th>
                <th class="p-2 text-center w-1/6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 text-center w-1/6">01</td>
                <td class="py-4 p-2 text-center text-sm w-1/6">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/6">Masjid Maintain</td>
                <td class="py-4 p-2 text-center w-1/6">Buy Cleaning Materials</td>
                <td class="py-4 p-2 text-center w-1/6">$ 500</td>
                <td class="py-4 p-2 flex justify-center">
                  <div
                    class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                  >
                  <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        
                        <DropdownMenuItem class="text-blue-600" @click="detailsShow(item)"
                          >Details</DropdownMenuItem
                        >
                        <DropdownMenuItem class="text-yellow-600" @click="editShow(item)"
                          >Edit</DropdownMenuItem
                        >
                        <DropdownMenuItem class="text-red-600" @click="deleteSubmit(item)"
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
              <tr class="bg-white">
                <td class="py-4 p-2 text-center w-1/6">02</td>
                <td class="py-4 p-2 text-center text-sm w-1/6">12/12/2023</td>
                <td class="py-4 p-2 text-center w-1/6">Masjid Maintain</td>
                <td class="py-4 p-2 text-center w-1/6">Ac Fix</td>
                <td class="py-4 p-2 text-center w-1/6">$ 200</td>
                <td class="py-4 p-2 flex justify-center">
                  <div
                    class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                  >
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        
                        <DropdownMenuItem class="text-blue-600" @click="detailsShow(item)"
                          >Details</DropdownMenuItem
                        >
                        <DropdownMenuItem class="text-yellow-600" @click="editShow(item)"
                          >Edit</DropdownMenuItem
                        >
                        <DropdownMenuItem class="text-red-600" @click="deleteSubmit(item)"
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
       <!-- expense list  -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'


const expenseCreate = ref(false)
const expenseUpdate = ref(false)

const operationExpense = ref({
  operation_name: '',
  operation_type: '',
  amount: '',
  date: ''
})

const { toast } = useToast()
const operationExpenseCreate = async () => {
  try {
    const data = await api().post('operation-expense-store', {
      method: 'post',
      body: operationExpense
    })
    console.log(data)
    toast({
      title: 'Operation Expense Created '
    })
  } catch (error) {
    console.log(error)
  }
}

const editShow = (item) => {
  expenseUpdate.value = true
}
</script>
