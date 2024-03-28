<template>
    <div 
        v-if="route.name == 'Details'" 
        class="px-5 bg-slate-50 py-5">
        yo bro
        <button @click="selecteditem()">call selected</button>
    </div>
    <div 
        v-else 
        class="px-5 bg-slate-50 py-5">
        yo bro2
    </div>
</template>
<script setup>

import { onMounted,computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAccountStore } from '/src/stores/accountStore.ts'

const route = useRoute()
const router = useRouter()
const store = useAccountStore()

const selecteditem = computed(() => {
    const searchParams = route.fullPath.split('/Details')[0].split('/').pop()
    // console.log(store,store.accountLedger,store[searchParams], 'store value')
    return store[searchParams].find((item) => item.id === Number(route.params.id))
})

onMounted(() => {
   
})

</script>