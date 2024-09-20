<template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] flex justify-between">
                <AMsidebar class="w-[300px] 2xl:w-[350px]"/>
                <div class="w-[calc(100%-300px)] 2xl:w-[calc(100%-350px)]">
                  <router-view/>
                </div>
            </div>
        </div>
    </DefaultLayout>



</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AMsidebar from '../AgentManagement/AgentManagementSidebar.vue';
</script>






<!-- <template>
    <DefaultLayout>
        <div class="">
            <div class="pt-[80px] bg-yellow-200 flex justify-between">
                <router-view/>
                <AgentManagementSidebar />
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import AgentManagementSidebar from '/src/views/Admin/AgentManagement/AgentManagementSidebar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script> -->






