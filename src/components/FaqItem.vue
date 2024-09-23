<template>
  <div class="bg-white p-6 shadow-md rounded-lg mb-4">
    <h4 class="text-xl font-semibold">{{ question }}</h4>
    <p class="mt-2">{{ answer }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  question: String,
  answer: String,
});
</script>
