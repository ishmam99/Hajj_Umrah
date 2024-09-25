<template>
  <div class="bg-white p-6 shadow-md rounded-lg">
    <h3 class="text-xl font-semibold mb-2">Day {{ day.day }}</h3>
    <div v-for="activity in day.activities">
       <div class="flex justify-start items-center gap-4 py-3">
                    <h1 class="bg-amber-500 text-white font-bold px-2 py-1 rounded-md">
                      {{ activity.time }}
                    </h1>
                    <p class="mx-4">{{ activity.activity_type }}</p>
                    <h1 class="font-bold text-lg">{{ activity.from }}</h1>
                    <p v-if="activity.to">To</p>
                    <h1 class="font-bold text-lg">{{ activity.to }}</h1>
                   <p v-if="activity.by">By</p> 
                    <h1 class="font-bold text-lg text-sky-700">{{ activity.by }}</h1>
                   
                     <p>{{ activity.description }}</p>
                  </div>
    </div> 
  </div>
</template>

<script setup>
const props = defineProps({
  day: Object,
 
});
</script>
