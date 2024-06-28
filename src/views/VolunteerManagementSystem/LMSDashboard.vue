<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <LMSDashboard />
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LMSDashboard from '../LearningManagementSystem/LMSsidebar.vue'
// import OperationProfile from '/src/views/Operation/Profile/OperationProfile.vue'
</script>
