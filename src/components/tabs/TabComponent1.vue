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
    <div class="tab">
        <div class="tab-buttons">
            <button v-for="tab in tabs" :key="tab" @click="tabActive(tab.id)" :class="(tabIndex == tab.id) ? 'tab-button active' : 'tab-button'">{{ tab.tabTitle }}</button>
        </div>
        <div v-for="tab in tabs" :key="tab" class="tabs">
            <slot v-if="tabIndex == tab.id" :class="tab.tabId" :name="tab.tabId"></slot>
        </div>
    </div>
</template>

<style scoped>

.active {
    color: #0FA3B1;
    border-bottom: 1px solid #0FA3B1;
}


.tab-buttons{
    background-color: white;
    display: flex;
    justify-content: start;
    border-bottom: 1px solid gray;
}

.tab-buttons button{
    font-size: 20px;
    font-weight: bold;
    padding: 10px 30px;
    background-color: white;
}

.tabs {
    
}

</style>