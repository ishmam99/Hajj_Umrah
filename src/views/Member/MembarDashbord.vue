<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex justify-between">
                <MembarSidebar class="w-[300px] 2xl:w-[350px]"/>
                <div class="w-[calc(100%-300px)] 2xl:w-[calc(100%-350px)]">
                  <router-view/>
                </div>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarProfile from '@/views/Member/Profile/MembarProfile.vue'
</script>
