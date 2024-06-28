<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
// import { useCommonStore } from '@/stores/common'

// const commonStore = useCommonStore()
// const user = JSON.parse(localStorage.getItem('user'))

// onMounted(() => {
//     commonStore.loading = false
// })

// onUnmounted(() => {
//     commonStore.loading = true
// })
const student = ref(true)

</script>

<template>
  <div class="w-full">
    <img v-if="student == false"  src="@/assets/images/dashboard/teacher-schedule.png" alt="" class="w-full">
    <img v-if="student == true" src="@/assets/images/dashboard/student-schedule.png" alt="" class="w-full" />
    <div v-if="student == true" class="p-5 bg-slate-200">
      <div class="bg-blue-600 flex items-center justify-center gap-8 px-5 py-2 rounded-md mb-3">
        <button
          class="size-10 text-2xl font-bold bg-white text-blue-600 rounded-md flex items-center justify-center"
        >
          <
        </button>
        <p class="text-2xl text-white font-bold">24/6/2024 - 30/6/2024</p>
        <button
          class="size-10 text-2xl font-bold bg-white text-blue-600 rounded-md flex items-center justify-center"
        >
          >
        </button>
      </div>
      <table class="table-auto w-full bg-slate-200">
        <thead>
          <tr class="bg-white">
            <th class="p-2 text-center">Day</th>
            <th class="p-2 text-center">Date</th>
            <th class="p-2 text-center">Time</th>
            <th class="p-2 text-center">Teacher Name</th>
            <th class="p-2 text-center">Total Hours</th>
            <th class="p-2 text-center">Module No.</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-row">
            <td class="py-4 p-2 text-center bg-blue-600 text-white border-b">Monday</td>
            <td class="py-4 p-2 text-center">24/6/2024</td>
            <td class="py-4 p-2 text-center">10.30 AM - 11.30</td>
            <td class="py-4 p-2 text-center">Md Basir</td>
            <td class="py-4 p-2 text-center">Nadira</td>
            <td class="py-4 p-2 text-center">2</td>
          </tr>
          <tr class="table-row">
            <td class="py-4 p-2 text-center bg-blue-600 text-white border-b">Tuesday</td>
            <td class="py-4 p-2 text-center">25/6/2024</td>
            <td class="py-4 p-2 text-center">10.30 AM - 11.30</td>
            <td class="py-4 p-2 text-center">Md Basir</td>
            <td class="py-4 p-2 text-center">Nadira</td>
            <td class="py-4 p-2 text-center">2</td>
          </tr>
          <tr class="table-row">
            <td class="py-4 p-2 text-center bg-blue-600 text-white border-b">Wednesday</td>
            <td class="py-4 p-2 text-center">26/6/2024</td>
            <td class="py-4 p-2 text-center">10.30 AM - 11.30</td>
            <td class="py-4 p-2 text-center">Md Basir</td>
            <td class="py-4 p-2 text-center">Nadira</td>
            <td class="py-4 p-2 text-center">2</td>
          </tr>
          <tr class="table-row">
            <td class="py-4 p-2 text-center bg-blue-600 text-white border-b">Thrusday</td>
            <td class="py-4 p-2 text-center">27/6/2024</td>
            <td class="py-4 p-2 text-center">10.30 AM - 11.30</td>
            <td class="py-4 p-2 text-center">Md Basir</td>
            <td class="py-4 p-2 text-center">Nadira</td>
            <td class="py-4 p-2 text-center">2</td>
          </tr>
          <tr class="table-row">
            <td class="py-4 p-2 text-center bg-blue-600 text-white border-b">Friday</td>
            <td class="py-4 p-2 text-center">28/6/2024</td>
            <td class="py-4 p-2 text-center">10.30 AM - 11.30</td>
            <td class="py-4 p-2 text-center">Md Basir</td>
            <td class="py-4 p-2 text-center">Nadira</td>
            <td class="py-4 p-2 text-center">2</td>
          </tr>
          <tr class="table-row">
            <td class="py-4 p-2 text-center bg-red-600 text-white border-b">Saturday</td>
            <td class="py-4 p-2 text-center">29/6/2024</td>
            <td class="py-4 p-2 text-center">--</td>
            <td class="py-4 p-2 text-center">--</td>
            <td class="py-4 p-2 text-center">--</td>
            <td class="py-4 p-2 text-center">--</td>
          </tr>
          <tr class="table-row">
            <td class="py-4 p-2 text-center bg-red-600 text-white border-b">Sunday</td>
            <td class="py-4 p-2 text-center">30/6/2024</td>
            <td class="py-4 p-2 text-center">--</td>
            <td class="py-4 p-2 text-center">--</td>
            <td class="py-4 p-2 text-center">--</td>
            <td class="py-4 p-2 text-center">-</td>
          </tr>
        </tbody>
      </table>
    </div>

    
  </div>
</template>

<style scoped>
.table-row:nth-child(even){
    background: white;
}
</style>
