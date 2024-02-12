<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    color: String
})
</script>

<template>
    <div class='section-title'>
        <h1 :style="'color: '+color" v-html="title"></h1>
    </div>
</template>

<style scoped>
.section-title {
    font-size: 30px !important;
    font-weight: bold !important;
}
</style>