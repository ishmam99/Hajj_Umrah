<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <p class="font-semibold">Prayer Management > Khatira > Broadcast Khatira Schedule</p>
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Broadcast Khatira Schedule</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">Number</th>
            <th class="p-2 text-left">Khatira Topic</th>
            <th class="p-2 text-left">Time</th>
            <th class="p-2 text-left">Speaker</th>
            <th class="p-2 text-left">Date</th>
            <th class="p-2 text-left">Status</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">01</h3>
            </td>
            <td class="py-4 p-2 flex items-center gap-2">
              <h3 class="font-bold">Enhance Social Justice</h3>
            </td>
            <td>
              <p class="text-lg">12:00 AM</p>
            </td>
            <td class="py-4 p-2">Abdullah</td>
            <td class="py-4 p-2">10 Feb 2024</td>
            <td class="py-4 p-2">
              <p class="text-sm font-bold text-green-600">Completed</p>
            </td>
            <td class="py-4 p-2 flex justify-center">
              <div
                class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
              >
                <DropdownMenu class="w-full">
                  <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                  <DropdownMenuContent class="w-40">
                   
                    <DropdownMenuItem class="text-blue-600" @click="goToDetailPage(1)"
                      >Edit</DropdownMenuItem
                    >
                    <DropdownMenuItem class="text-red-600" @click="goToDetailPage(1)"
                      >Delete</DropdownMenuItem
                    >
                  </DropdownMenuContent>
                </DropdownMenu>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                >
                  <path d="M12 16L6 10H18L12 16Z"></path>
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="flex justify-between items-center pt-8">
      <p class="text-2xl text-yellow-600 font-bold pb-2">Edit: {{ `Enhance Social Justice` }} </p>
    </div>
    <hr />
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="volunteerAdmissionSubmit()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Topic <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-1/2">
              <input
                type="number"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Speaker <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Khatira Description
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="This khatira about "
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            ></textarea>
          </div>

          <div class="flex gap-5">
            <div class="relative w-1/2">
              <div class="gap-5">
                <label for="">Date <span class="text-red-500">*</span> </label>
                <div class="pt-2">
                  <input
                    type="date"
                    class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                  />
                </div>
              </div>
            </div>
            <div class="relative w-1/2">
              <div class="gap-5">
                <label for="">Time <span class="text-red-500">*</span> </label>
                <div class="pt-2">
                  <input
                    type="time"
                    class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

</script>
