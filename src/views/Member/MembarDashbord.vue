<template>
    <div class=" bg-slate-50">
        <MembarNavbar/>
        <div class="pt-[100px] flex justify-between gap-5 px-[5%] pb-10">
            <MembarProfile/>
            <MembarSidebar/>
        </div>
        <foot/>
    </div>
</template>
<script setup>
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
import MembarProfile from '/src/views/Member/MembarProfile.vue'
import MembarNavbar from './MembarNavbar.vue'
import foot from '/src/components/footer.vue'
</script>