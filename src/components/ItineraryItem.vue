<template>
  <div class="bg-white p-6 shadow-md rounded-lg">
    <h3 class="text-xl font-semibold mb-2">Day {{ day }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  day: String,
  description: String,
});
</script>
