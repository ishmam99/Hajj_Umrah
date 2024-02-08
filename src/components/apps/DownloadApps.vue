<script setup>
import { defineProps } from 'vue';

defineProps({
    android: String,
    ios: String
})
</script>

<template>
    <div class="apps">
        <a :href="android"><img src="@/assets/images/apps/PlayStore.png" alt=""></a>
        <a :href="ios"><img src="@/assets/images/apps/AppStore.png" alt=""></a>
    </div>
</template>

<style scoped>

.apps {
    margin: 15px 0;
    display: flex;
    justify-content: start;
    gap: 20px;
} 

.apps img {
    width: 250px;
}
</style>