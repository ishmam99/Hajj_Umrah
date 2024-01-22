<template>
    <div>
      <DefaultLayout>
        <div class="bg-[url('/src/assets/image/donation/d1.jpg')] h-[40vh]">
            <div class="bg-[#0007] w-full h-full  flex items-center px-20">
                <h1 class="text-white text-4xl font-semibold">Donation</h1>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-5 px-[5%] py-20 text-white">
            <div class="rounded-lg drop-shadow-lg h-[250px] bg-[url('/src/assets/image/donation/d3.jpg')] bg-cover">
                <div class="p-5 flex items-end bg-[#0007]  w-full h-full rounded-lg">
                    <h1 class="text-3xl font-semibold text-center p-2">Donate with credit card</h1>
                </div>
            </div>
            <div class="rounded-lg drop-shadow-lg h-[250px] bg-[url('/src/assets/image/donation/d4.jpg')] bg-cover">
                <div class="p-5 flex items-end bg-[#0007]  w-full h-full rounded-lg">
                    <h1 class="text-3xl font-semibold text-center p-2">Employer By Paypal</h1>
                </div>  
            </div>
            <div class="rounded-lg drop-shadow-lg h-[250px] bg-[url('/src/assets/image/donation/d2.webp')] bg-cover">
                <div class="p-5 flex items-end bg-[#0007]  w-full h-full rounded-lg">
                    <h1 class="text-3xl font-semibold text-center p-2">Employer Matching Funds</h1>
                </div>
            </div>
        </div>

      </DefaultLayout>
    </div>
  </template>
  
  <script setup>
  import DefaultLayout from '../../layouts/DefaultLayout.vue'
  import Card from '../../components/CardSection.vue'
  import ActivityMore from '../../components/ActivityMore.vue'
  </script>
  
  <style lang="scss" scoped></style>