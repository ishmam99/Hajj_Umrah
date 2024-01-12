<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import hero from '../components/hero.vue';
</script>

<template>
  <DefaultLayout>
    <hero/>
    <div class="py-[30px] px-[5%] bg-slate-100">
        <div class="w-1/3 px-5">
            <h1 class="text-3xl font-bold uppercase">Prayer time</h1>
            <div class="bg-white p-5">
                <p class="mx-3 text-sm font-semibold text-gray-500 text-center">11 th January,2024</p>
                <div class="grid grid-cols-2 border">
                  <div>
                    <h4>Next</h4>
                    <p>Prayer</p>
                  </div>
                  <div class="text-right">
                    <p>Dhuhr</p>
                    <p>1:00 PM</p>
                    <p>4h 16m left</p>
                  </div>
                </div>
                <div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold border-b">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                  <div class="pt-3 pb-1 flex gap-2 text-center font-semibold">
                    <p class="w-1/3 text-sm">Prayer</p>
                    <p class="w-1/3 text-sm">Adhaan</p>
                    <p class="w-1/3 text-sm">Iqamah</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </DefaultLayout>
</template>
