<template>
  <div>
    <DefaultLayout>
      <div
        class="px-20 pt-20 mt-5 py-5 bg-lime-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl"
      >
        <div class="pt-3 mx-36 pb rounded-xl bg-white border-blue-50 shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path
                d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
              ></path>
            </svg>
            <p>Home</p>
            <p>/ Digital Library</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-lime-800">/ DUA</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-lime-800 text-4xl font-bold">DUA</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-[url('../assets/image/home/dua_banner.png')] bg-lime-900">
        <h1 class="py-10 text-center text-4xl text-white font-bold">Dua of the Day</h1>
      </div>
      <div class="p-20 flex bg-gray-100 gap-5">
        <div class="grid grid-cols-5 gap-5">
          <div v-for="dua in duaList" :key="dua.id">
            <Card :class="dua == currentDua ? 'bg-yellow-600' : ''">
              <CardContent @click="currentDua = dua" class="py-10">
                <h1
                  class="text-xl font-bold text-center"
                  :class="dua == currentDua ? 'text-white' : 'text-slate-600'"
                >
                  {{ dua.name }}
                </h1>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import FacilitiesMore from '@/components/FacilitiesMore.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '/components/ui/card'
import ContactMore from '/src/components/ContactMore.vue'
import { Separator } from '/components/ui/separator'
import { ref } from 'vue'
const currentDua = ref()
const duaList = ref([
  { name: 'The Dua for the Oppressed' },
  { name: '5 Duas of Prophet Muhammed (PBUH)' },
  { name: 'Muhammad ﷺ' },
  { name: 'The Dua for the Oppressed' },
  { name: 'Dua for taqwa' },
  { name: 'Dua for success' },
  { name: 'Dua for good character' },
  { name: 'Dua for blessed family' },
  { name: 'Dua for having children' },
  { name: 'Dua for relief from distress, laziness, debts' },
  { name: 'Dua for a healthy body' },
  { name: 'Dua for the sick' },
  { name: 'Dua to avoid sudden afflictions' },
  { name: 'Dua for preservation' },
  { name: 'Dua that removes anxietyDua for preservation' }
])
</script>

<style lang="scss" scoped></style>
