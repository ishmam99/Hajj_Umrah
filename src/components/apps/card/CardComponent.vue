<script setup>
import { defineProps } from 'vue'

defineProps({

})
</script>

<template>
    <div class="card">
        <div class="slot-header">
            <slot name="header" />
        </div>
        <div class="slot-content">
            <slot name="content" />
        </div>
    </div>
</template>

<style>
.card {
    min-width: 300px;
    height: auto;
    background-color: #2b9a66;
    border-top: 4px solid #1acc8d;
    display: block;
}

.slot-header {
   width: 100%;
   padding: 20px 0;
   color: white;
   text-align: center;
}

.slot-content {
    padding: 0 30px;
}
</style>