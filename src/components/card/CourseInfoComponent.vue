<template>
  <div class="border p-4 m-2 sm:m-1 md:m-2 lg:m-4 rounded bg-gray-100">
    <h1 class="text-md font-bold text-center text-cyan-500 cursor-pointer " @click="toggleDaySlotsVisibility">
      <strong>Student Name: {{ course.student_name }}</strong>
    </h1>
    <template  v-if="showDaySlots">
      <label class="text-lg font-semibold">Day Slots:</label>
      <div class="list-disc ml-4">
        <SlotInfoComponent
            v-for="(slot, index) in course.day_slots"
            :key="index"
            :slotInfo="slot"
        />
      </div>
    </template>

  </div>
</template>

<script>
import SlotInfoComponent from "@/components/card/SlotInfoComponent.vue";

export default {
  components: { SlotInfoComponent },
  props: {
    course: Object,
  },
  data() {
    return {
      showDaySlots: false,
    };
  },
  methods: {
    toggleDaySlotsVisibility() {
      this.showDaySlots = !this.showDaySlots;
    },
  },
};
</script>
