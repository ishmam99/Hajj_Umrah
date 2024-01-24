<template>
    <div>
      <DefaultLayout>
        <div class="px-20 ml-10">
          <div class="bg-white">
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
              <p>Home</p>
              <p>/ Avtivity</p>
              <p class="text-yellow-500">/ Project</p>
            </div>
            <div class="bg-white rounded-lg relative py-3">
              <h1 class="text-yellow-500 text-4xl font-semibold">Project</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full py-5 mt-10 flex gap-5 px-20 w-full">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 w-full">
              <h1 class="text-3xl underline py-3">On Going Project</h1>
              <div class="min-w-[350px] min-h-[250px] overflow-hidden relative rounded-3xl">
                <img src="/src/assets/image/home/e1.png" alt="" class="w-full absolute top-0">
                <div class="absolute z-10 bottom-0 p-5 text-white flex flex-col gap-2">
                    <p class="text-xl text-yellow-600">20 JAN 2024</p>
                    <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <button class="h-[50px] w-[250px] border border-white rounded-xl">Register</button>
                </div>
              </div>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
              <h1 class="text-3xl underline py-3">Up Comming Project</h1>
              <div class="class grid grid-cols-3 gap-5">
                <div class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md">
                    <img src="/src/assets/image/home/e2.png" alt="" class="w-full">
                    <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                    <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <button class="h-[50px] w-full border border-gray-600 rounded-md">Register</button>
                </div>
                <div class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md">
                    <img src="/src/assets/image/home/e2.png" alt="" class="w-full">
                    <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                    <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <button class="h-[50px] w-full border border-gray-600 rounded-md">Register</button>
                </div>
                <div class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md">
                    <img src="/src/assets/image/home/e2.png" alt="" class="w-full">
                    <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                    <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <button class="h-[50px] w-full border border-gray-600 rounded-md">Register</button>
                </div>
                <div class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md">
                    <img src="/src/assets/image/home/e2.png" alt="" class="w-full">
                    <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                    <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <button class="h-[50px] w-full border border-gray-600 rounded-md">Register</button>
                </div>
                <div class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md">
                    <img src="/src/assets/image/home/e2.png" alt="" class="w-full">
                    <h3 class="text-2xl font-bold">Feed The Hungry</h3>
                    <p class="text-sm font-semibold text-yellow-600">20 JAN 2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <button class="h-[50px] w-full border border-gray-600 rounded-md">Register</button>
                </div>
              </div>
            </div>
          </div>
         <ActivityMore />
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