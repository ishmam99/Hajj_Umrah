<template>
    <DefaultLayout>
       
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <router-view/>
                <SocialSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import SocialSidebar from '/src/views/Social/SocialSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialProfile from '/src/views/Social/Profile/SocialProfile.vue'
</script>
