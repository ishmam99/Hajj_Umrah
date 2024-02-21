<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <SupplySidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplyProfile from '/src/views/Supply/Profile/SupplyProfile.vue'
</script>
