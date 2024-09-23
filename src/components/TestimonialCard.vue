<template>
  <div class="bg-white p-6 shadow-md rounded-lg">
    <p class="text-lg italic mb-2">"{{ review }}"</p>
    <h4 class="text-md font-semibold">{{ name }}</h4>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  review: String,
});
</script>
