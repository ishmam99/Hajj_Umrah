<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
</script>

<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
        <SupplySidebar />
        <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">New Vendor Application</p>
          <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
            <form @submit.prevent="volunteerAdmissionSubmit()">
              <div class="py-5 space-y-7 mt-5">
                <div class="flex gap-4">
                  <div class="relative mb-3 w-1/2">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Project/Job Name <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="relative mb-3 w-1/2">
                    <input
                      type="number"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Project/ Job Budget <span class="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div class="relative">
                  <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                    Project/Job scope of work/Summary <span class="text-red-500">*</span>
                  </p>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                  ></textarea>
                </div>
                <div class="relative">
                  <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                    Required completion timeframe <span class="text-red-500">*</span>
                  </p>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                  ></textarea>
                </div>
                <!-- <div class="flex gap-5">
                  <div class="flex items-center gap-2 py-2 px-2">
                    <input type="checkbox" name="" id="" />
                    <label for="" class=""
                      >I agree to <span class="text-blue-600">terms & conditions.</span
                      ><span class="text-red-600">*</span></label
                    >
                  </div>
                </div> -->
                <div class="flex flex-col gap-5">
                  <div class="flex items-center gap-2">
                    <h1 class="text-gray-800 font-semibold text-xl px-2">
                      Required Bidder Information <span class="text-red-600">*</span>
                    </h1>
                  </div>
                  <div class="relative">
                    <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                      Introduction
                      <span class="text-red-500">*</span>
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols=""
                      rows="4"
                      placeholder="An overview of the bidder and their qualifications"
                      class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                    ></textarea>
                  </div>
                  <div class="relative">
                    <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                      Scope of Work
                      <span class="text-red-500">*</span>
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols=""
                      rows="4"
                      placeholder="A detailed description of the services or products being offered"
                      class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                    ></textarea>
                  </div>
                  <div class="relative mb-3 w-full">
                    <input
                      type="number"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Pricing <span class="text-red-500">*</span>
                    </label>
                  </div>

                  <div class="flex flex-col py-2">
                    <h1 class="px-2 font-semibold pb-4 text-gray-900">
                      Timeline <span class="text-red-500">*</span>
                    </h1>
                    <div class="flex gap-4">
                      <div class="pt-1 mb-3 w-1/2 relative">
                        <input
                          type="date"
                          class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                          id="exampleFormControlInput50"
                          value=""
                        />
                        <label
                          for="exampleFormControlInput50"
                          class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                          >Start Date
                        </label>
                      </div>
                      <div class="pt-1 mb-3 w-1/2 relative">
                        <input
                          type="date"
                          class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                          id="exampleFormControlInput50"
                          value=""
                        />
                        <label
                          for="exampleFormControlInput50"
                          class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                          >End Date
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="relative">
                    <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                      Credentials
                      <span class="text-red-500">*</span>
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols=""
                      rows="4"
                      placeholder="References, certifications, and past relevant experience."
                      class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
                >
                  Create bid
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
