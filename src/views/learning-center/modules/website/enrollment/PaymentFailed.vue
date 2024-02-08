<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common';

const commonStore = useCommonStore()

onMounted(() => {
    commonStore.loading = false
})

onUnmounted(() => {
    commonStore.loading = true
})
</script>

<template>
    <div class="failure-message">
        Could not process the payment. Please try again.
    </div>
</template>

<style scoped>
.failure-message {
    font-family: math;
    border: 2px solid red;
    color: red;
    border-radius: 5px;
    margin: 20px 50px;
    padding: 30px;
    text-align: center;
}
</style>