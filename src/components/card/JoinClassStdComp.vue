<template>
  <div class="py-3">
    <h1 class="font-bold text-lg">Class list </h1>
  </div>
  <div v-for="(schedule, index) in data" :key="index">
    <div class="class bg-gray-100 shadow-md rounded-lg p-5 mb-5 grid gap-5">
      <div class="details flex justify-between items-center">
        <div>
          <span class="text-sm font-bold">Class no: {{index+1}}</span>
        </div>
        <div class="date-time flex gap-5 items-center">
          <div class="text-sm">
            <font-awesome-icon :icon="['fas', 'fa-calendar-days']" class="mr-2" />
            {{ schedule.date }}
          </div>
          <div class="text-sm">
            <font-awesome-icon :icon="['fas', 'fa-clock']" class="mr-2" />
            {{ tConvert(schedule.time_slot[0]['start_time']) }} - {{ tConvert(schedule.time_slot[0]['end_time']) }}
          </div>

        </div>
      </div>
      <div class="join-link flex justify-between items-center">
        <div class="title text-2xl flex items-center">
          <span class="text-red-500 mr-2">
            <font-awesome-icon :icon="['fas', 'fa-video']" />
          </span>
          <strong>Live Class </strong>
        </div>
        <div v-if="isToday(schedule.date) == true">
          <button v-if="isLive(schedule.date, schedule.time_slot[0]['start_time'], schedule.time_slot[0]['end_time']) == true" @click="joinClass(schedule.join_link)" class="link bg-teal-500 text-white px-4 py-2 rounded-lg font-bold">
            Join Class 
          </button>
          <!-- <button v-else class="link bg-teal-500 text-white px-4 py-2 rounded-lg font-bold">
            Join Class 
          </button> -->
          <button v-else class="link bg-gray-500 text-white px-4 py-2 rounded-lg font-bold">
            Join Class
          </button>
        </div>
        <div v-else>
          <button class="link bg-gray-500 text-white px-4 py-2 rounded-lg font-bold">
            Join Class
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'

defineProps({
  courseName: String,
  data: Array,
})

function isToday(date) {
  const today = new Date();
  const comparableDate = new Date(date)

  if (today.toDateString() === comparableDate.toDateString()) {
    return true;
  }

  return false;
}

function isLive(date, start_time, end_time) {
  const today = new Date()
  const sdt = [date, start_time].join(' ')
  const edt = [date, end_time].join(' ')
  const classStartDateTime = new Date(sdt)
  const classEndDateTime = new Date(edt)

  if(Number(today.getTime()) > Number(classStartDateTime.getTime()) && Number(today.getTime()) < Number(classEndDateTime.getTime())) {
    console.log("here")
      return true;
  } 
  
  return false;
  
}

function joinClass(link) {
  window.open(link, '_blank', 'noreferrer')
}

function tConvert (time) {
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

onMounted(() => {
  
})

</script>
    