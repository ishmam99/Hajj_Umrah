<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <YouthSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import YouthSidebar from '/src/views/Youth/youthSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import YouthProfile from '/src/views/Youth/Profile/YouthProfile.vue'
</script>
