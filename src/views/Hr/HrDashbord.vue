<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <hrSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import hrSidebar from '/src/views/Hr/HrSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
