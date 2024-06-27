<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div>
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-cyan-700 font-bold pb-2">Course List</p>
      </div>
      <hr />

      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white text-lg">
              <th class="p-2 text-start w-1/8">Course ID</th>
              <th class="p-2 text-start w-1/8">Course Name</th>
              <th class="p-2 text-start w-2/8">Course Time Slot</th>
              <th class="p-2 text-start w-2/8">View Teacher</th>
              <!-- <th class="p-2 text-center w-1/8">Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr class="tableRowColor">
              <td class="py-4 px-2 w-1/8">01</td>
              <td class="py-4 px-2 w-1/8">
                <h3 class="font-semibold">Nadira Program</h3>
              </td>

              <td class="py-4 px-2 w-2/8">Morning</td>
              <td class="py-4 px-2">
                <router-link to="/lms_course_management_course_teacher">
                  <button class="py-1 px-4 bg-green-700 text-white hover:bg-green-900 rounded-md">
                    View
                  </button>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
