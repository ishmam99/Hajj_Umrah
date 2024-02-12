<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
        <SocialSidebar />
        <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Image Gallery</p>
          <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
            <div class="flex items-center flex-col gap-4 justify-center">
              <div class="w-full">
                <p class="text-gray-600">Add Image</p>
                <div
                  class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                >
                  <input type="file" class="h-full w-full opacity-0 absolute top-0" />
                  Choose File
                </div>
              </div>
              <button
                type="submit"
                class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
              >
                Apply
              </button>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
              <div class="grid gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="../../assets//image//hungry/hungry-4.jpg"
                    alt=""
                  />
                </div>
                <div class="grid grid-cols-5 gap-4">
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="../../assets//image//hungry/hungry-3.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="../../assets//image//hungry/hungry-4.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="../../assets//image//hungry/hungry-1.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="../../assets//image//hungry/hungry-7.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg"
                      src="../../assets//image//hungry/hungry-8.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialSidebar from '/src/views/Social/SocialSidevar.vue'
</script>
