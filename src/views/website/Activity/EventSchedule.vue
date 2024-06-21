<template>
    <DefaultLayout>
        <div
        class="px-20 pt-20 mt-5 py-5 bg-green-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
      >
        <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2 font-semibold">
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
            <p>Home</p>
            <p class="text-green-800">/ Events / Events Schedule</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-green-800 text-4xl font-bold">Events Schedule</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-gray-100 p-10">
        <!-- {{announcement}} -->
        <div class="w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div>
            <img
              :src="pastEventList?.image"
              alt="pastEventList Image"
              class="w-full h-96 object-cover rounded-lg"
            />
            <div class="flex items-center justify-between">
                <h1 class="text-4xl font-bold text-blue-700 mt-6">
                    {{ pastEventList?.name }}
                  </h1>
                <input type="date" name="" id="">
            </div>
            <p class="mt-4 text-gray-700" v-html="pastEventList?.description"></p>
          </div>
          <div class="flex justify-between items-center mt-2">
              <p class="text-base font-semibold">
                Start Date: <span class="text-yellow-600 text-lg"> {{ pastEventList?.start_date }}</span>
            </p>
            <p class="text-base font-semibold">
                Start Date: <span class="text-yellow-600 text-lg"> {{ pastEventList?.end_date }}</span>
                </p>
          </div>
        </div>
      </div>
      </DefaultLayout>
  </template>
  
  <script setup>
  import { computed, ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from '/src/stores/store.ts'
  import DefaultLayout from '/src/layouts/DefaultLayout.vue'
  
  const route = useRoute()
  const store = useStore()
  
  const pastEventList = computed(() =>
    store.upcomming_event_list.find(item => item.id === Number(route.params.id))
  )
  

  </script>
  
  <style scoped>
  /* Add any additional styling if necessary */
  </style>