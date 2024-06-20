<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="font-semibold">Prayer Management > Prayer > Create Prayer Times</p>
    <div class="flex items-center justify-between border-b pb-2 gap-5">
      <p class="text-2xl font-bold py-3">Create Prayer Times</p>
    </div>
    <div class="bg-white p-5 rounded-2xl drop-shadow-md mt-3">
      <div class="w-2/5 m-auto">
        <div class="pt-3 pb-1 flex gap-2 text-center font-semibold border-b">
          <p class="w-1/3 text-sm">Prayer</p>
          <p class="w-1/3 text-sm">Adhaan</p>
          <p class="w-1/3 text-sm">Iqamah</p>
        </div>
        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
          <p class="w-1/3 text-sm">fajr</p>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
            v-model="prayerFrom.Fajr.start_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
            v-model="prayerFrom.Fajr.end_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
        </div>
        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
          <p class="w-1/3 text-sm">Sunrise</p>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Sunrise.start_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
            v-model="prayerFrom.Sunrise.end_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
        </div>
        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
          <p class="w-1/3 text-sm">Dhuhr</p>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Dhuhr.start_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Dhuhr.end_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
        </div>
        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
          <p class="w-1/3 text-sm">Asr</p>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Asr.start_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Asr.end_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
        </div>
        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
          <p class="w-1/3 text-sm">Maghrib</p>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Maghrib.start_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Maghrib.end_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
        </div>
        <div class="pt-3 pb-1 flex gap-2 text-center border-b">
          <p class="w-1/3 text-sm">Isha</p>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Isha.start_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Isha.end_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
        </div>
        <div class="pt-3 pb-1 flex gap-2 text-center">
          <p class="w-1/3 text-sm">Jumu’ah</p>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Jumuah.start_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
          <div class="w-1/3 flex justify-center border rounded-md">
            <input 
             v-model="prayerFrom.Jumuah.end_at"
            type="time" 
            placeholder="enter time" 
            class="text-sm py-1.5 px-2" />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          class="px-4 py-2 rounded-md shadow-md bg-cyan-600 text-white mt-8 hover:font-bold hover:bg-cyan-900"
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const prayerFrom = ref({
    "Fajr": {
        "start_at": "",
        "end_at": ""
    },
    "Sunrise": {
        "start_at": "",
        "end_at": ""
    },
    "Dhuhr": {
        "start_at": "",
        "end_at": ""
    },
    "Asr": {
         "start_at": "",
        "end_at": ""
    },
    "Maghrib": {
         "start_at": "",
        "end_at": ""
    },
    "Isha": {
        "start_at": "",
        "end_at": ""
    },
    "Jumuah": {
        "start_at": "",
        "end_at": ""
    }
})

</script>
