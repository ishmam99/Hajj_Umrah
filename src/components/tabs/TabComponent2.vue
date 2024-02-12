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
        <div class="border-b border-gray-200 dark:border-gray-700 mt-8">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li v-for="tab in tabs" :key="tab" @click="tabActive(tab.id)" class="me-2">
                    <a :class="(tabIndex == tab.id) ? 'inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group cursor-pointer' : 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer'">
                        <svg v-html="tab.svg" :class="(tabIndex == tab.id) ? 'w-4 h-4 me-2 text-blue-600 dark:text-blue-500' : 'w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            
                        </svg>{{ tab.tabTitle }}
                    </a>
                </li>
            </ul>
        </div>
        
        <div v-for="tab in tabs" :key="tab" class="tabs">
            <slot v-if="tabIndex == tab.id" :class="tab.tabId" :name="tab.tabId"></slot>
        </div>
    </div>
</template>

<style scoped>


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