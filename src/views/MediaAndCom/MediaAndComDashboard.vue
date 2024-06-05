<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <MediaAndComSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import MediaAndComSidebar from '/src/views/MediaAndCom/MediaAndComSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'


</script>
