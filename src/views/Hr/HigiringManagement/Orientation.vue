<script setup></script>

<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl font-bold pb-2">Orientation</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-sm">
            <!-- <th class="p-2 text-center w-1/8">Applicant ID</th> -->
            <th class="p-4">Position Title</th>
            <th class="p-4">Applicant name</th>
            <th class="p-4">Personal particulars Update</th>
            <th class="p-4">Issue Badge</th>
            <th class="p-4">Organization Orientation</th>
            <th class="p-4">Initial Training</th>
            <th class="p-4">Assigning to Duty</th>
            <th class="p-4">Action</th>
          </tr>
        </thead>
        <tbody class="mt-4">
          <tr class="text-sm">
            <!-- <td class="py-4 p-2 w-1/8 text-center">01</td> -->
            <td class="px-4 py-2 font-semibold">Imam hiring</td>
            <td class="px-4 py-2">
              <h3 class="font-semibold">Ibnul Hossain</h3>
            </td>
            <td class="px-4 py-2 pl-5">
              <select class="p-2 border">
                <option class="text-red-500">Not Yet Started</option>
                <option class="text-sky-500">In progress</option>
                <option class="text-green-400">In review</option>
                <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>
                  Complete
                </option>
              </select>
            </td>
            <td class="px-4 py-2">
              <select class="p-2 border">
                <option class="text-red-500">Not Yet Started</option>
                <option class="text-sky-500">In progress</option>
                <option class="text-green-400">In review</option>
                <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>
                  Complete
                </option>
              </select>
            </td>
            <td class="px-4 py-2">
              <select class="p-2 border">
                <option class="text-red-500">Not Yet Started</option>
                <option class="text-sky-500">In progress</option>
                <option class="text-green-400">In review</option>
                <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>
                  Complete
                </option>
              </select>
            </td>
            <td class="px-4 py-2">
              <select class="p-2 border">
                <option class="text-red-500">Not Yet Started</option>
                <option class="text-sky-500">In progress</option>
                <option class="text-green-400">In review</option>
                <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>
                  Complete
                </option>
              </select>
            </td>
            <td class="px-4 py-2">
              <div class="flex">
                <select class="p-2 border">
                  <option class="text-red-500">Not Yet Started</option>
                  <option class="text-sky-500">In progress</option>
                  <option class="text-green-400">In review</option>
                  <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>
                    Complete
                  </option>
                </select>
              </div>
            </td>
            <td class="px-4 py-2">
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
