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
            <p>/ Contact</p>
            <p class="text-yellow-500">/ Contact Us</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">Contact Us</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full px-20 pl-28 py-5 mt-10 flex justify-between gap-5">
        <div class="space-y-8 w-3/4">

          <div class="bg-white px-8 py-5 pt-5 gap-5 rounded-lg">
            <!-- <p>Assalaamu Alaikum (Peace be with you),</p> -->
            
            <p class="mt-5 text-3xl font-bold text-yellow-500">
              View on map
            </p>

            <div class="py-5 space-y-7 mt-5">
              <div class="w-100% border-2 border-yellow-300 shadow-lg">
                    <iframe
                      width="100%"
                      height="400"
                      frameborder="0"
                      style="border:0"
                      loading="lazy"
                      allowfullscreen
                      :src="googleMapsEmbedUrl"
                    ></iframe>
                  </div>
            </div>
            
          </div>

          <div class="bg-white px-8 py-5 pt-5 gap-5 rounded-lg">
            <!-- <p>Assalaamu Alaikum (Peace be with you),</p> -->

            <div class="mt-5">
             <p class="text-2xl text-yellow-500">Please fill out this form to ask the IDL Imam a question.</p> 
             <p>THIS INFORMATION IS
              CONFIDENTIAL BETWEEN YOU AND THE IMAM</p>
            </div>

            <div class="py-5 space-y-7 mt-5">
              <div class="flex w-full gap-5">
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >First Name <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Last Name <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Email <span class="text-red-500">*</span>
                </label>
              </div>
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Phone Number <span class="text-red-500">*</span>
                </label>
              </div>
            </div>
            <div class="bg-white px-0 py-5 pt-2 gap-5 rounded-lg">
              <div>
                <p class="text-xl font-bold py-5">Question or Comments</p>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="4"
                  placeholder="Ex:23"
                  class="w-full p-3 rounded-md shadow-lg border border-black"
                ></textarea>
              </div>
              <div class="w-full">
                <p class="text-xl font-bold py-5">Attach a File</p>
                <div
                  class="w-1/2 h-[40px] rounded-2xl bg-white px-4 py-2 shadow-lg text-sm text-gray-500 text-center relative border border-black m-auto"
                >
                  <input type="file" name="" id="" class="h-full w-full opacity-0 absolute top-0" />
                  Choose File
                </div>
              </div>
              <div class="flex justify-center pt-5 pb-3">
                <button
                  class="w-full h-[45px] rounded-2xl bg-yellow-600 text-white font-bold mx-auto"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <ContactMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import Card from '/src/components/CardSection.vue'
import ContactMore from '/src/components/ContactMore.vue'

const googleMapsEmbedUrl = "https://maps.google.com/maps?q=31.106,-97.6475&z=15&output=embed";
</script>

<style lang="scss" scoped>

</style>
