<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <VendorSidebar />
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import VendorSidebar from '../../views/Vendor/VendorSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
