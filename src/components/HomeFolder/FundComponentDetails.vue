<template>
  <DefaultLayout>
    <div class="px-20 pt-20 mt-5 py-5 bg-green-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
      <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
        <div class="flex items-center justify-center gap-2 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path
              d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z">
            </path>
          </svg>
          <p>Home</p>
          <p class="text-green-800">/ Fund Raising / Fund Raising Details</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-green-800 text-4xl font-bold">Fund Raising Details</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-gray-100 p-10">
      <div class="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div>
          <img :src="fundRaising?.image" alt="fundRaising Image" class="w-full h-96 object-cover rounded-lg" />
          <div class="flex items-center justify-between">
            <h1 class="text-4xl font-bold text-teal-600 mt-6">
              {{ fundRaising?.title }}
            </h1>

          </div>
          <p class="mt-4 text-gray-700">{{ fundRaising?.description }}</p>
        </div>
        <h1 class="w-full text-end mt-6">
          Created at: <span class="text-xl font-bold text-teal-500">{{ fundRaising?.created_at.slice(0, 10) }}</span>
        </h1>
        <CardHeader>
          <CardTitle class="w-full text-center">Donation Amount</CardTitle>
          <CardDescription> Please Select the donation amount </CardDescription>
          <div class="flex items-center gap-5">
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="10" />
              <label>$ 10</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="20" />
              <label>$ 20</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="30" />
              <label>$ 30</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="40" />
              <label>$ 40</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="50" />
              <label>$ 50</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="60" />
              <label>$ 60</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="70" />
              <label>$ 70</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="80" />
              <label>$ 80</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="90" />
              <label>$ 90</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="100" />
              <label>$ 100</label>
            </div>
          </div>
          <CardDescription>Or Select your desired amount </CardDescription>
          <input type="text" class="border py-1.5 px-2 rounded-md" />
        </CardHeader>
        <form>
          <CardContent class="grid gap-6">
            <div class="grid gap-2">
              <Label for="name">Name</Label>
              <Input id="name" placeholder="First Last" />
            </div>
            <div class="grid gap-2">
              <Label for="number">Email</Label>
              <Input id="number" placeholder="Type Email" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" class="w-full"> Continue </Button>
          </CardFooter>
        </form>
      </div>
    </div>

  </DefaultLayout>
</template>

<script setup>
import { Button } from '/components/ui/button'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAdminStore } from '@/stores/adminStore.ts';
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '/components/ui/card'
import { Input } from '/components/ui/input'
import { Label } from '/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'


const route = useRoute()
const store = useAdminStore()

const fundRaising = computed(() =>
  store.fundList.find(item => item.id === Number(route.params.id))
)


</script>

<style scoped>

</style>