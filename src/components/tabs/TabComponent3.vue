<script setup>
import { ref, defineProps } from 'vue'

defineProps({
    tabs: Array
})

let tabIndex = ref(1)

function tabActive(index) {
    tabIndex.value = index
}
</script>

<template>
    <div class="tab mt-4">
        <div class="tab-buttons">
            <div v-for="tab in tabs" :key="tab" @click="tabActive(tab.id)" class="me-2">
                <a :class="(tabIndex == tab.id) ? 'tab-menu active' : 'tab-menu'">
                    {{ tab.tabTitle }}
                </a>
            </div>
        </div>

        <div class="tabs">
            <slot />
        </div>
        <!-- <div v-for="tab in tabs" :key="tab" class="tabs">
            <slot v-if="tabIndex == tab.id" :class="tab.tabId" :name="tab.tabId"></slot>
        </div> -->
    </div>
</template>

<style scoped>
.tab-menu {
    cursor: pointer;
    padding: 10px !important;
    font-size: 13px;
    font-weight: bold;
}
.tab {
    display: grid;
    gap: 15px;
}
.active {
    color: rgb(83, 83, 255);
}
</style>