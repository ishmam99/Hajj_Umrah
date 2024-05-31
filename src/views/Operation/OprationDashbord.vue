<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <OperationSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import OperationSidebar from '/src/views/Operation/OperationSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import OperationProfile from '/src/views/Operation/Profile/OperationProfile.vue'
</script>
