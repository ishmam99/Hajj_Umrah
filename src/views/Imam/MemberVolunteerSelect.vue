<template>
  <div class="px-5 bg-white py-5 rounded-md shadow-md w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Volunteer Application List</p>
          <div class="grid grid-cols-1 gap-5 mt-5">
            <div class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md">
              <div class="flex gap-5">
                <img src="/src/assets/image/home/e3.png" alt="" class="w-[90px]" />
                <div>
                  <p class="font-bold">
                    Applied Program : <span class="font-[500]">Feed The Hungry</span>
                  </p>
                  <p class="font-bold">
                    Applied Date : <span class="font-[500]">23 Dec 2023</span>
                  </p>
                  <p class="font-bold">Applied Time : <span class="font-[500]">12.30 PM</span></p>
                </div>
              </div>

              <p class="text-sm font-bold text-green-600">Approved</p>
            </div>

            <div class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md">
              <div class="flex gap-5">
                <img src="/src/assets/image/home/e4.png" class="w-[90px]" />
                <div>
                  <p class="font-bold">
                    Applied Program : <span class="font-[500]">Comfort Sick</span>
                  </p>
                  <p class="font-bold">
                    Applied Date : <span class="font-[500]">23 Dec 2023</span>
                  </p>
                  <p class="font-bold">Applied Time : <span class="font-[500]">11.30 PM</span></p>
                </div>
              </div>

              <p class="text-sm font-bold text-green-600">Approved</p>
            </div>
          </div>
        </div>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
</script>
