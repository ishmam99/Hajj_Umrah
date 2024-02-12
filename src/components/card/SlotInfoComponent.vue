<template>
  <div class="bg-cyan-100 p-4 rounded border shadow-md mb-4">
    <h3 class="text-md font-bold text-left cursor-pointer" @click="toggleTimeSlots">
      Day Name: {{ slotInfo.day_name }}
    </h3>

   <div v-if="showTimeSlots" >
     <h3 class="text-md font-bold text-center">Time Slots:</h3>
     <ul > <!-- Only display if showTimeSlots is true -->
       <li v-for="(timeSlot, index) in slotInfo.course_time_slots" :key="index" class="flex justify-between bg-gray-100 m-2">
         <div class="flex items-center">
           <span class="font-semibold">Slot :</span>
           <span class="ml-2">{{ index + 1 }}</span>
         </div>
         <div class="flex items-center">
           <span class="font-semibold">Start Time - End Time:</span>
           <span class="ml-2">{{ timeSlot.start_time }} - {{ timeSlot.end_time }}</span>
         </div>
       </li>
     </ul>
   </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showTimeSlots: false, // Initially, time slots are hidden
    };
  },
  props: {
    slotInfo: Object, // This prop will receive the course data
  },
  methods: {
    toggleTimeSlots() {
      this.showTimeSlots = !this.showTimeSlots;
    },
  },
};
</script>
