<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String
})
</script>

<template>
    <div class='section-title'>
        <h1>{{ title }}</h1>
    </div>
</template>

<style scoped>
.section-title {
    font-size: 30px;
    text-align: center;
}
</style>