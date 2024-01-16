<template>
   <div class="bg-white rounded-xl p-5 px-8 w-full">
    <h1 class="text-3xl underline py-3 ">{{ props.headline}}</h1>
    <p>{{ props.text}}</p>
   </div>
</template>

<script setup>
const props = defineProps(['headline','text'])
</script>

<style lang="scss" scoped>

</style>