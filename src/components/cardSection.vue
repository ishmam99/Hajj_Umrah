<template>
  
   <div class="bg-white rounded-xl p-5 px-8 w-full">
    <h1 class="text-3xl underline py-3 ">{{ props.object.heading}}</h1>
    <p v-html="props.object.description"></p>
   </div>
</template>

<script setup>
const props = defineProps(['object'])
</script>

<style lang="scss" scoped>

</style>