<script setup>
import { defineProps } from 'vue'

defineProps({
    icon: String,
    title: String,
    div: String
})
</script>

<template>
    <a :href="'#'+div" class="button-card">
        <div v-if="icon">This is icon</div>
        <div class="title">{{ title }}</div>
    </a>
</template>

<style scoped>
.button-card {
    background-color: #f5f5ff;
    padding: 20px;
    min-width: 200px;
    text-decoration: none;
}

.button-card > .title {
    font-weight: bold;
    font-size: 20px;
    color: #204e39;
}
</style>