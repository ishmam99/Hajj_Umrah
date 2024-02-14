<script setup lang="ts">
import DefaultLayout from '../../../layouts/DefaultLayout.vue';
import HrSidebar from '../HrSidevar.vue';


</script>

<template>
    <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-yellow-600 font-bold pb-2">Job Post</p>
          </div>
          <hr />
          <div
            class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
          >
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white text-sm">
                  <th class="p-2 text-left">Job ID</th>
                  <th class="p-2 text-left">Job Title</th>
                  <th class="p-2 text-left">Job Posting from</th>
                  <th class="p-2 text-left">Job posting to</th>
                  <th class="p-2 text-left">Details</th>
                  <th class="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td class="py-4 p-2 gap-2">
                    <h3 class="font-bold">01</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    <h3 class="text-sm font-semibod">Imam Higiring</h3>
                  </td>
                  <td>
                    <div class="flex">
                      <input
                      class="mx-3 peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none" 
                      type="date" 
                      name="event_date" 
                      id="event_date" 
                      placeholder="YYYY-MM-DD" 
                      pattern="\d{4}-\d{2}-\d{2}">

                    <input
                      type="time"
                      class="mx-3 peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="title_name"
                      
                    />
                    </div>
                    
                  </td>
                  <td class="py-4 p-2">
                    <div class="flex">
                      <input 
                      class="mx-3 peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      type="date" 
                      name="event_date" 
                      id="event_date" 
                      placeholder="YYYY-MM-DD" 
                      pattern="\d{4}-\d{2}-\d{2}">

                    <input
                      type="time"
                      class="mx-3 peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="title_name"
                      
                    />
                    </div>
                    
                  </td>
                  <td class="py-4 p-2 text-blue-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </td>
                  <td class="py-4 p-2 font-semibold">
                    <div class="flex">
                        <span class="text-green-500 px-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>

                      </span>
                      <span class="text-red-500 px-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                      </svg>

                      </span>
                    </div>
                   
                  </td>
                   
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
</template>