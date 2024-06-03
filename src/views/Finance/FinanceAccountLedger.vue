<template>
  <div class="bg-slate-50">
    <div class="px-4 bg-white py-5">
      <div class="flex justify-between items-center pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Account Ledger Create</p>
        <!-- <button class="px-5 py-2 rounded-md shadow-md bg-yellow-600 text-white text-sm">Add</button> -->
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
                  <Select class="w-full" v-model="accountLedger.type">
                    <SelectTrigger class="w-full">
                      <SelectValue placeholder="Revenue / Expense Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Salay"> Salay </SelectItem>
                        <SelectItem value="Operation"> Operation </SelectItem>
                        <SelectItem value="Masjid Maintain"> Masjid Maintain </SelectItem>
                        <SelectItem value="Project"> Project </SelectItem>
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
</template>
<script setup>
import { ref, onMounted } from 'vue'
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
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

const store = useAccountStore()
const currentDate = new Date()
console.log(currentDate)
const currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
console.log(currentDateWithFormat)

const accountLedger = ref({
  type: '',
  description: '',
  credit: '',
  debit: ''
  // date: 'currentDateWithFormat'
})

const { toast } = useToast()


const accountLedgerCreat = () => {
  store.AccountLedgerListCreate(accountLedger.value)
  router.push({ name: 'Account_Ledger_List' })
}

const router = useRouter()
const goToEditPage = (id) => {
  router.push({ name: 'Edit', params: { id } })
}

const goToDetailPage = (id) => {
  router.push({ name: 'Details', params: { id } })
}

onMounted(async () => {
  currentDate()
})
</script>
