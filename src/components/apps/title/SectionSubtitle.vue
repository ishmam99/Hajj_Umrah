<script setup>
import { defineProps } from 'vue'

defineProps({
    subTitle: String
})
</script>

<template>
    <div class=section-sub-title>
        {{ subTitle }}
    </div>
</template>

<style>

.section-sub-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 1px;
    margin: 0 0 5px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #aaaaaa;
    font-family: "Poppins", sans-serif;
}

.section-sub-title::after {
    content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #1acc8d;
    margin: 4px 10px;
}
</style>