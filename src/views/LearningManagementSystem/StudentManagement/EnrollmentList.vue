<template>
    <div class="px-4 bg-white py-5">
      <div v-if="!selectedEnrollment && !isEdit">
        <div class="flex justify-between items-center pt-4">
          <p class="text-2xl text-cyan-700 font-bold pb-2">Enrollment List</p>
        </div>
        <hr />
  
        <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white text-lg">
                <th class="p-2 text-start w-1/8">ID</th>
                <th class="p-2 text-start w-1/8">Student Name</th>
                <th class="p-2 text-start w-1/8">Course Name</th>
                <th class="p-2 text-start w-1/8">Teachers Name</th>
                <th class="p-2 text-start w-2/8">Is Paid?</th>
                <th class="p-2 text-start w-2/8">Course Starting Date</th>
                <th class="p-2 text-center w-1/8">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="tableRowColor" v-for="(enrollment, index) in enrollments" :key="enrollment.id">
                <td class="py-4 px-2 w-1/8">{{ index + 1 }}</td>
                <td class="py-4 px-2 w-1/8">
                  <h3 class="font-semibold">{{ enrollment.studentName }}</h3>
                </td>
                <td class="py-4 px-2 w-2/8">{{ enrollment.courseName }}</td>
                <td class="py-4 px-2 w-2/8">{{ enrollment.teachersName }}</td>
                <td class="py-4 px-2 w-2/8 font-semibold" :class="{'text-green-400': enrollment.isPaid, 'text-red-400': !enrollment.isPaid}">
                  {{ enrollment.isPaid ? 'Yes' : 'No' }}
                </td>
                <td class="py-4 px-2 w-2/8 font-semibold">{{ enrollment.startDate }}</td>
                <td class="py-4 px-2 flex justify-center">
                  <div class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2">
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent class="w-40">
                        <DropdownMenuItem class="text-blue-600" @click="viewDetails(enrollment)">Details</DropdownMenuItem>
                        <DropdownMenuItem class="text-cyan-800" @click="edit(enrollment)">Edit</DropdownMenuItem>
                        <DropdownMenuItem class="text-cyan-800" @click="approve(enrollment)">Approve</DropdownMenuItem>
                        <DropdownMenuItem class="text-red-600" @click="deleteEnrollment(enrollment)">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M12 16L6 10H18L12 16Z"></path>
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <div v-else-if="selectedEnrollment" class="px-5 bg-slate-50 py-5 w-full">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-green-800 font-bold">Enrollment Details</p>
          <button @click="selectedEnrollment = null" class="bg-green-600 hover:bg-cyan-600 text-white rounded-md px-3 py-1.5 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path>
            </svg>
            <span>Back</span>
          </button>
        </div>
        <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
          <div class="py-5 space-y-7 mt-5">
            <table class="table-auto w-full">
              <tbody>
                <tr>
                  <td class="p-2 font-semibold">Student Name:</td>
                  <td class="p-2">{{ selectedEnrollment.studentName }}</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Course Name:</td>
                  <td class="p-2">{{ selectedEnrollment.courseName }}</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Teachers Name:</td>
                  <td class="p-2">{{ selectedEnrollment.teachersName }}</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Is Paid?</td>
                  <td class="p-2">{{ selectedEnrollment.isPaid ? 'Yes' : 'No' }}</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Course Starting Date:</td>
                  <td class="p-2">{{ selectedEnrollment.startDate }}</td>
                </tr>
                <tr>
                  <td class="p-2 font-semibold">Description:</td>
                  <td class="p-2">{{ selectedEnrollment.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <div v-else class="px-5 bg-slate-50 py-5 w-full">
        <p class="text-2xl font-bold py-3 border-b">Update Enrollment</p>
        <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
          <form @submit.prevent="editSubmit">
            <div class="py-5 space-y-7 mt-5">
              <div class="flex justify-between gap-5">
                <div class="w-1/2 flex flex-col gap-5">
                  <div class="relative">
                    <div class="gap-5">
                      <label class="">Student Name:</label>
                      <div class="pt-2">
                        <input type="text" class="py-2 px-6 rounded-2xl w-full border-2" v-model="editEnrollment.studentName" />
                      </div>
                    </div>
                  </div>
                  <div class="relative">
                    <label class="">Course Name:</label>
                    <div class="pt-2">
                      <input type="text" class="py-2 px-6 rounded-2xl w-full border-2" v-model="editEnrollment.courseName" />
                    </div>
                  </div>
                  <div class="relative">
                    <label class="">Teachers Name:</label>
                    <div class="pt-2">
                      <input type="text" class="py-2 px-6 rounded-2xl w-full border-2" v-model="editEnrollment.teachersName" />
                    </div>
                  </div>
                  <div class="relative">
                    <label class="">Is Paid?</label>
                    <div class="pt-2">
                      <select class="py-2 px-6 rounded-2xl w-full border-2" v-model="editEnrollment.isPaid">
                        <option :value="true">Yes</option>
                        <option :value="false">No</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 flex flex-col gap-5">
                  <div class="relative">
                    <label class="">Course Starting Date:</label>
                    <div class="pt-2">
                      <input type="date" class="py-2 px-6 rounded-2xl w-full border-2" v-model="editEnrollment.startDate" />
                    </div>
                  </div>
                  <div class="relative">
                    <label class="">Description:</label>
                    <div class="pt-2">
                      <textarea class="py-2 px-6 rounded-2xl w-full border-2" v-model="editEnrollment.description"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-5">
              <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from '/components/ui/dropdown-menu';
  
  const enrollments = ref([
    {
      id: 1,
      studentName: 'Arif Akib',
      courseName: 'Math 101',
      teachersName: 'Mr. Rasik',
      isPaid: true,
      startDate: '2024-07-01',
      description: 'Basic Math Course'
    },
    {
      id: 2,
      studentName: 'Ashraful jaed',
      courseName: 'Science 101',
      teachersName: 'Dr. Ishmam',
      isPaid: false,
      startDate: '2024-07-15',
      description: 'Basic Science Course'
    },
    // Add more enrollments as needed
  ]);
  
  const selectedEnrollment = ref(null);
  const isEdit = ref(false);
  const editEnrollment = ref(null);
  
  const viewDetails = (enrollment) => {
    selectedEnrollment.value = enrollment;
  };
  
  const edit = (enrollment) => {
    isEdit.value = true;
    editEnrollment.value = { ...enrollment };
  };
  
  const editSubmit = () => {
    const index = enrollments.value.findIndex(e => e.id === editEnrollment.value.id);
    if (index !== -1) {
      enrollments.value[index] = { ...editEnrollment.value };
    }
    isEdit.value = false;
    editEnrollment.value = null;
  };
  
  const approve = (enrollment) => {
    console.log('Approve enrollment:', enrollment);
  };
  
  const deleteEnrollment = (enrollment) => {
    enrollments.value = enrollments.value.filter(e => e.id !== enrollment.id);
  };
  </script>
  
  <style>
  .tableRowColor:nth-child(even) {
    background: white;
  }
  </style>
  