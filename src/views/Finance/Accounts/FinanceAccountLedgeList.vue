<template>
  <div>
    <div class="px-4 pt-5 flex gap-5 items-center justify-between">
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Ledger Management</p>
        <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
      </div>
      <button
        v-if="ledgerCreate == false"
        @click="ledgerCreate = true"
        class="px-3 py-2 w-[150px] rounded-md shadow-md bg-cyan-600 text-white text-sm"
      >
        Create
      </button>
    </div>
    <!-- ledger create  -->
    <div v-if="ledgerCreate == true" class="bg-slate-50">
      <div class="px-4 bg-white pb-5">
        <div class="flex justify-between items-center pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Create Ledger Type</p>
          <button
            v-if="ledgerType == false"
            @click="ledgerType = true"
            class="px-3 py-2 w-[150px] rounded-md shadow-md bg-blue-600 text-white text-sm"
          >
            Create
          </button>
          <button
            v-if="ledgerType == true"
            @click="ledgerType = false"
            class="px-3 py-2 w-[150px] rounded-md shadow-md bg-red-600 text-white text-sm"
          >
            Cancle
          </button>
        </div>
        
        <div class="flex gap-5 mb-3"  v-if="ledgerType == true">
          <p class="text-xl font-bold pb-3">Ledger Type Name</p>
          <input type="text" class="border px-3 rounded-md" v-model="ledgerTypeForm.name">
          <button @click="ledgertype"
            class="px-3 py-2 w-[150px] rounded-md shadow-md bg-blue-600 text-white text-sm"
          >
            Save
          </button>
        </div>
        <hr>
        <div class="flex justify-between items-center pb-2 mt-2">
          <p class="text-2xl text-yellow-600 font-bold">Ledger Create</p>
          <button
            v-if="ledgerCreate == true"
            @click="ledgerCreate = false"
            class="px-3 py-2 w-[150px] rounded-md shadow-md bg-red-600 text-white text-sm"
          >
            Cancle
          </button>
        </div>
        <hr />
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <form @submit.prevent="accountLedgerCreat()" class="w-full">
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white">
                  <!-- <th class="p-2 text-center w-[12%]">ID</th> -->
                  <th class="p-2 text-center w-1/5">Revenue / Expense Type</th>
                  <th class="p-2 text-center w-1/5">Description</th>
                  <th class="p-2 text-center w-1/5">Debit</th>
                  <th class="p-2 text-center w-1/5">Credit</th>
                  <!-- <th class="p-2 text-center w-[12%]">Balance</th> -->
                  <th class="p-2 text-center w-1/5">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td class="py-4 px-2 text-center w-1/5">
                    <Select class="w-full" v-model="accountLedger.ledger_type_id">
                      <SelectTrigger class="w-full">
                        <SelectValue placeholder="Revenue / Expense Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem :value="item.id" v-for="item in ledger" :key="item"> {{item.name}} </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="accountLedger.description" type="text" class="w-full p-2" />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="accountLedger.debit" type="number" class="w-full p-2" />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="accountLedger.credit" type="number" class="w-full p-2" />
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
    </div>
    <!-- ledger create  -->

    <!-- ledger Update  -->
    <div v-if="ledgerUpdate == true" class="bg-slate-50">
      <div class="px-4 bg-white py-5">
        <div class="flex justify-between items-center pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Ledger Update</p>
          <button
        v-if="ledgerUpdate == true"
        @click="ledgerUpdate = false"
        class="px-3 py-2 w-[150px] rounded-md shadow-md bg-red-600 text-white text-sm"
      >
        Cancle
      </button>
        </div>
        <hr />
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <form @submit.prevent="accountLedgerCreat()" class="w-full">
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white">
                  <!-- <th class="p-2 text-center w-[12%]">ID</th> -->
                  <th class="p-2 text-center w-1/5">Revenue / Expense Type</th>
                  <th class="p-2 text-center w-1/5">Description</th>
                  <th class="p-2 text-center w-1/5">Debit</th>
                  <th class="p-2 text-center w-1/5">Credit</th>
                  <!-- <th class="p-2 text-center w-[12%]">Balance</th> -->
                  <th class="p-2 text-center w-1/5">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td class="py-4 px-2 text-center w-1/5">
                    <Select class="w-full" v-model="accountLedger.ledger_type_id">
                      <SelectTrigger class="w-full">
                        <SelectValue placeholder="Revenue / Expense Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem :value="item.id" v-for="item in ledger" :key="item"> {{item.name}} </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="accountLedger.description" type="text" class="w-full p-2" />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="accountLedger.debit" type="number" class="w-full p-2" />
                  </td>
                  <td class="py-4 px-2 text-center w-1/5">
                    <input v-model="accountLedger.credit" type="number" class="w-full p-2" />
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
    </div>
    <!-- ledger Update  -->

    <!-- ledger List  -->
    <div  v-if="ledgerUpdate == false" class="bg-slate-50">
      <div class="px-4 bg-white py-5">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Ledger List</p>
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
                <th class="p-2 text-center w-1/8">No.</th>
                <th class="w-1/8">Date</th>
                <th class="p-2 text-center w-2/8">Description</th>
                <th class="p-2 text-center w-1/8">Debit</th>
                <th class="p-2 text-center w-1/8">Credit</th>
                <th class="p-2 text-center w-1/8">Balance</th>
                <th class="p-2 text-center w-1/8">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tableRowColor" v-for="item in store.accountLedger" :key="item.id">
                <!-- {{ item }} -->
                <td class="py-4 p-2 text-center w-1/8">01</td>
                <td class="py-4 p-2 text-center text-sm w-1/8">{{ item.created_at }}</td>
                <td class="py-4 p-2 text-center w-2/8">{{ item.description }}</td>
                <td class="py-4 p-2 text-center w-1/8">$ {{ item.debit }}</td>
                <td class="py-4 p-2 text-center w-1/8">$ {{ item.credit }}</td>
                <td class="py-4 p-2 text-center w-1/8">$ {{ item.balance }}</td>
                <td class="py-4 p-2 flex justify-center">
                  <div
                    class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                  >
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent>
                        
                        <!-- <DropdownMenuItem class="text-blue-600" @click="detailsShow(item)"
                          >Details</DropdownMenuItem
                        > -->
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
    </div>
    <!-- ledger List  -->
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
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
const ledgerCreate = ref(false)
const ledgerUpdate = ref(false)
const ledgerType = ref(false)
const ledger = ref()

const accountLedger = ref({
  ledger_type_id: '',
  description: '',
  credit: '',
  debit: ''
})

const ledgerTypeForm = ref({
  name:''
})

const accountLedgerCreat = async () => {
  try {
    const data = await api().post('account-ledger-store', accountLedger.value)
    console.log(data)
    toast({
      title: 'Account Ledger Created '
    })
  } catch (error) {
    console.log(error)
  }
}

const ledgertype = async () => {
  try {
    const data = await api().post('ledger-type-store', ledgerTypeForm.value)
    console.log(data)
    ledgerTypeForm.value.name =''
  } catch (error) {
    console.log(error)
  }
}

const getLedgertype = async () => {
  try {
    const {data} = await api().get('ledger-type')
    console.log(data)
    ledger.value = data.data
  } catch (error) {
    console.log(error)
  }
}

const getLedgerList = async () => {
  try {
    const {data} = await api().get('account-ledger-list')
    console.log(data)
    store.accountLedger = data
  } catch (error) {
    console.log(error)
  }
}

const editShow = (item) => {
  ledgerUpdate.value = true
}

const { toast } = useToast()

onMounted(() => {
  getLedgertype()
  getLedgerList()
})
</script>
