<template>
    <div class="w-full px-5">
        <h1 class="text-3xl font-bold uppercase pb-3">Announcement</h1>
        <div>
            <div class="flex">
                <div class="w-2/3">
                    <img src="/src/assets/image/home/h1.png" alt="">
                </div>
                <div class="w-1/3">
                    <div>
                        <img src="/src/assets/image/home/h2.png" alt="">
                    </div>
                    <div>
                        <img src="/src/assets/image/home/h3.png" alt="">
                    </div>
                </div>
                <div class="w-1/3">
                    <div>
                        <img src="/src/assets/image/home/h2.png" alt="">
                    </div>
                    <div>
                        <img src="/src/assets/image/home/h3.png" alt="">
                    </div>
                </div>
                <div class="w-1/3">
                    <div>
                        <img src="/src/assets/image/home/h2.png" alt="">
                    </div>
                    <div class="flex items-center justify-center py-14">
            <button  class="px-5 py-2 bg-gray-300 text-sm text-gray-600 font-bold rounded-3xl">See More</button> 
          </div>
                </div>
                
            </div>
           
        </div>
    </div>
</template>
<script setup>
import { useStore } from '@/stores/store';
const store= useStore()
</script>