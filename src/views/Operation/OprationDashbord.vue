<template>
    <DefaultLayout>
        <!-- <div class=" bg-slate-50">
            <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover">
                <div class="bg-[#11295d9a]">
                  <div class="bg-[#00000057] rounded-none pt-20">
                    <div class=""></div>
                    <div class="hero-content text-center text-neutral-content">
                      <div class="text-left">
                        <div class="px-10 py-6">
                          <h1 class="mb-5 text-5xl text-white font-bold">Member </h1>
                          <p class="mb-5 text-lg font-semibold bg-[#0000002d] p-2 w-3/6 rounded-lg text-white">
                            Welcome to the IDL Masjid Member Dashboard! Your presence fortifies our community, fostering positive impact and a profound sense of belonging. Thank you for being an essential and valued part of our mission.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div> -->
        <div class="">
            <div class="pt-[80px] flex flex-row-reverse justify-between">
                <OperationProfile />
                <OperationSidebar/>
            </div>
        </div>
    </DefaultLayout>

</template>
<script setup>
import OperationSidebar from '/src/views/Operation/OperationSidevar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import OperationProfile from '/src/views/Operation/Profile/OperationProfile.vue'
</script>
