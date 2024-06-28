<template>
    <div class="px-5 bg-slate-50 py-5 w-3/4">
        <p class="text-2xl text-cyan-700 font-bold pb-2">Time Slot</p>
        <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
            <h4 @click="showTimeSlotEntry = !showTimeSlotEntry"
                class="flex justify-end gap-2 items-center cursor-pointer font-bold text-xl">Time Slot Entry <svg
                    v-if="showTimeSlotEntry" class="bg-green-300 p-1 rounded" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,255,255,1)">
                    <path
                        d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z">
                    </path>
                </svg>
                <svg v-else class="bg-red-300 p-1 rounded" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    width="28" height="28" fill="rgba(255,255,255,1)">
                    <path d="M5 11V13H19V11H5Z"></path>
                </svg>
            </h4>
            <form v-if="!showTimeSlotEntry" @submit.prevent="socialEventSubmit()">
                <div class="py-5 space-y-7 mt-5">
                    <div class="relative mb-3">
                        <input type="text"
                            class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                            id="exampleFormControlInput50" value="" />
                        <label for="exampleFormControlInput50"
                            class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary">Course
                            Name <span class="text-red-500">*</span>
                        </label>
                    </div>

                    <div class="flex justify-between gap-5">
                        <div class="w-1/2 flex flex-col gap-5">
                            <div class="relative">
                                <div class="gap-5">
                                    <label for="">Starting Time <span class="text-red-500">*</span> </label>
                                    <div class="pt-2">
                                        <input type="time" class="py-2 px-6 rounded-2xl w-full border-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2 flex flex-col gap-5">
                            <div class="relative">
                                <div class="gap-5">
                                    <label for="">Ending Time <span class="text-red-500">*</span> </label>
                                    <div class="pt-2">
                                        <input type="time" class="py-2 px-6 rounded-2xl w-full border-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit"
                        class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"><svg
                            v-if="loading" xmlns="http://www.w3.org/2000/svg" class="animate-spin !m-0 w-5 h-5"
                            viewBox="0 0 24 24" fill="rgba(255,255,255,1)">
                            <path
                                d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z">
                            </path>
                        </svg>
                        Create
                    </button>
                </div>
            </form>
        </div>

        <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
            <div class="px-4 bg-white py-5">
      <div>
  
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white text-lg">
                <th class="p-2 text-start w-1/8">ID</th>
                <th class="p-2 text-start w-1/8">Course Name</th>
                <th class="p-2 text-start w-2/8">Start Time</th>
                <th class="p-2 text-start w-2/8">End Time</th>
                <th class="p-2 text-center w-1/8">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="tableRowColor"
              >
                <td class="py-4 px-2 w-1/8">01</td>
                <td class="py-4 px-2 w-1/8">
                  <h3 class="font-semibold">Nadira Program</h3>
                </td>
                <td class="py-4 px-2 w-2/8">
                  10:00 AM
                </td>
                <td class="py-4 px-2 w-2/8">
                  11:00 AM
                </td>
                <td class="py-4 px-2 flex justify-center">
                  <button class="bg-green-500 px-4 py-1 rounded font-semibold text-white hover:bg-green-600">Post</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


  
    </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const showTimeSlotEntry = ref(true);

</script>