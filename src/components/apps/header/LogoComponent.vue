<script setup>
import { defineProps } from 'vue'

defineProps({
    logo: String
})
</script>

<template>
    <router-link :to="'/app/'+$route.params.id+'/'" class="logo">
        <img :src="logo" alt="">
    </router-link>
</template>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    cursor: pointer;
}

.logo img {
    width: 70px;
}
</style>