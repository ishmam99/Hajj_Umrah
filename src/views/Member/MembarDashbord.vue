<template>
    <DefaultLayout>
        <div class="bg-slate-50">
            <div class="px-[5%] bg-white">
                <div class="">
                <div class="flex items-center gap-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    >
                    <path
                        d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
                    ></path>
                    </svg>
                    <p>Member / </p>

                    <p class="text-yellow-500">Profile</p>
                </div>
                <div class="bg-white rounded-lg relative py-3">
                    <h1 class="text-yellow-500 text-4xl font-semibold">Profile</h1>
                    <div>
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
            <div class="pt-[10px] flex justify-between gap-5 px-[5%] pb-10">
                <MembarSidebar/>
                <MembarProfile/>
            </div>
        </div>
    </DefaultLayout>
    
</template>
<script setup>
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarProfile from '@/views/Member/Profile/MembarProfile.vue'
</script>