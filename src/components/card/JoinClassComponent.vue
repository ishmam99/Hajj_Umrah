<template>
  <div class="class bg-gray-100 shadow-md rounded-lg p-5 grid gap-5 m-5">
    <div class="details flex justify-between items-center">
<!--      <label> Course : </label>-->
      <span class="text-sm font-bold m-2">{{ courseName }}</span>
<!--      <label> Student :</label>-->
      <span class="text-sm font-bold m-2">{{ studentName }}</span>

      <div class="date-time flex gap-5 items-center">
        <div class="text-sm m-1 p-1">
          <font-awesome-icon :icon="['fas', 'fa-calendar-days']" class="mr-2" />
          {{ formattedDate }}
        </div>
        <div class="text-sm m-1 p-1">
          <font-awesome-icon :icon="['fas', 'fa-clock']" class="mr-2" />
          {{ formattedTime }}
        </div>
      </div>
      <div class="join-link flex justify-between items-center">

        <button @click="joinClass()" :disabled="!isButtonEnabled" :class="! isButtonEnabled ? 'bg-gray-500':'bg-teal-500'" class="link  text-white px-4 py-2 rounded-lg font-bold cursor-pointer">
          <span class="text-red-500 mr-2">
            <font-awesome-icon :icon="['fas', 'fa-video']" />
          </span>
            <strong>Live Class</strong>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  courseName: String,
  studentName: String,
  date: String,
  startTime: String,
  endTime: String,
  joinLink: String,
})

const formattedDate = formatDateString(props.date);
const formattedTime = formatTimeRange(props.startTime, props.endTime);

console.log('Component Re-rendered');

function joinClass() {
  // window.location.href = joinLink;
  window.open(props.joinLink,'_blank')
}

function formatDateString(dateString) {
  const options = { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' };
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString('en-US', options);
}

function formatTimeRange(start, end) {
  return `${start} - ${end}`;
}


// Parse time strings in the format HH:mm:ss
function parseTime(timeString) {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  const currentDate = new Date();
  currentDate.setHours(hours);
  currentDate.setMinutes(minutes);
  currentDate.setSeconds(seconds);
  return currentDate;
}

const isButtonEnabled = computed(() => {
  const currentTime = new Date();
  const start = parseTime(props.startTime);
  const end = parseTime(props.endTime);
  console.log(currentTime)
  console.log(start)
  console.log(end)
  const isEnabled = currentTime >= start && currentTime <= end;
  return isEnabled
});

</script>
