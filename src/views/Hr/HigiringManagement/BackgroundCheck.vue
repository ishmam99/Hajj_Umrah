<script setup lang="ts"></script>

<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl font-bold pb-2">Background Check</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-sm">
            <!-- <th class="p-2 text-center w-1/8">Applicant ID</th> -->
            <th class="p-4 text-center">Position Title</th>
            <th class="p-4 text-center">Applicant name</th>
            <th class="p-4 text-center">Applicant Details</th>
            <th class="p-4 text-center">Background check start date</th>
            <th class="p-4 text-center">Background check Receive date</th>
            <th class="p-4 text-center">Background check status</th>
            <th class="p-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="mt-4">
          <tr class="">
            <!-- <td class="py-4 p-2 w-1/8 text-center">01</td> -->
            <td class="px-4 py-2 font-bold text-sm text-center">Imam hiring</td>
            <td class="px-4 py-2 text-center text-sm">
              <!-- <img
                src="/src/assets/image/home/l4.jpg"
                alt=""
                class="w-14 h-14 rounded-full ring-4 ring-gray-500"
              /> -->
              <h3 class="px-4 py-2 font-semibold">Ibnul Hossain</h3>
            </td>
            <td class="px-4 py-2 text-center">
              <button
                class="text-center text-sm text-sm px-3 py-2 text-white bg-blue-500 rounded-sm"
              >
                Details
              </button>
            </td>
            <td class="px-4 py-2 text-center">
              <input
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                type="date"
                name="event_date"
                id="event_date"
                placeholder="YYYY-MM-DD"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </td>
            <td class="px-4 py-2 text-center">
              <input
                class="mx-3 peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                type="date"
                name="event_date"
                id="event_date"
                placeholder="YYYY-MM-DD"
                pattern="\d{4}-\d{2}-\d{2}"
              />
            </td>
            <td class="px-4 py-2 text-center">
              <span class="text-white text-sm px-2 bg-red-500 rounded py-2">Not Cleared</span>
            </td>
            <td class="px-4 py-2 text-center">
              <span class="px-2"
                ><button class="text-white text-sm px-2 py-2 rounded-sm bg-blue-500">
                  Update
                </button></span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
