<template>
  <div class="px-4 bg-white py-5">
    <div v-if="isDetailView == false && isEdit == false">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-cyan-700 font-bold pb-2">Registered Teachers</p>
      </div>
      <hr />

      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white text-lg">
              <th class="p-2 text-start w-1/8">ID</th>
              <th class="p-2 text-start w-1/8">Teacher Name</th>
              <th class="p-2 text-start w-1/8">Email</th>
              <th class="p-2 text-start w-1/8">Phone</th>
              <th class="p-2 text-start w-2/8">Subject</th>
              <th>Status</th>
              <th class="p-2 text-center w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="tableRowColor"
              v-for="(item, index) in teachers" :key="item.id"
            >
              <td class="py-4 px-2 w-1/8">{{index+1}}</td>
              <td class="py-4 px-2 w-1/8 flex items-center gap-2">
                <img :src="item.image" class="h-12 w-12 rounded-full" alt="">
                <h3 class="font-semibold text-xl">{{item.name}}</h3>
              </td>
              <td class="py-4 px-2 w-2/8">
                {{ item?.details }}
              </td>
              <td class="py-4 px-2 w-2/8">
                {{ item.phone }}
              </td>
              <td class="py-4 px-2 w-2/8">
                {{ item.subject }}
              </td>
              <td class="py-4 px-2 w-2/8">
                {{ item.status }}
              </td>
              <td class="py-4 px-2 flex justify-center">
                <div
                  class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                >
                  <DropdownMenu class="w-full">
                    <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                    <DropdownMenuContent class="w-40">
                      <DropdownMenuItem class="text-blue-600" @click="viewDetails(item)">Details</DropdownMenuItem>

                      <DropdownMenuItem class="text-cyan-800" @click="edit(item)"
                        >Edit</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-red-600" @click="deleteTeacher(item.id)">Delete</DropdownMenuItem>
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
    </div>

    <div v-else-if="isEdit" class="px-5 bg-slate-50 py-5 w-full">
      <p class="text-2xl font-bold py-3 border-b">Update Teacher</p>
      <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
        <form  @submit.prevent="editSubmit">
          <div class="py-5 space-y-7 mt-5">
            <div class="flex justify-between gap-5">
              <div class="w-1/2 flex flex-col gap-5">
                <div class="relative">
                  <div class="gap-5">
                    <label for="" class=""> Title <span class="text-red-500">*</span> </label>
                    <div class="pt-2">
                      <input
                        type="text"
                        class="py-2 px-6 rounded-2xl w-full border-2"
                        v-model="editTeacher.name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 flex flex-col gap-5">
                <div class="">
                  <label for="" class="text-gray-600"
                    >Image <span class="text-red-500">*</span></label
                  >
                  <div
                    class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                  >
                    <input
                      @change="onFileChange"
                      type="file"
                      class="h-full w-full opacity-0 absolute top-0"
                    />
                    Choose File
                  </div>
                </div>
              </div>
            </div>
            <div class="relative">
              <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Description <span class="text-red-500">*</span>
              </p>
              <textarea
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Description"
                class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                v-model="editTeacher.details"
              ></textarea>
            </div>

            <div class="flex justify-center items-center gap-5">
              <button
              type="submit"
              class="w-full h-[45px] rounded-2xl bg-yellow-600 text-white font-bold mx-auto flex items-center text-center justify-center"
            >
              Update
            </button>

            <button
              @click="isEdit = false"
              type="button"
              class="w-full h-[45px] rounded-2xl bg-red-800 text-white font-bold mx-auto flex items-center text-center justify-center"
            >
              Cancel
            </button>
            </div>
            
          </div>
        </form>
      </div>
    </div>

    <div v-else-if="isDetailView" class="px-5 bg-slate-50 py-5 w-full">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-green-800 font-bold">Teacher Details</p>
        <button @click="isDetailView = false" class="bg-green-600 hover:bg-cyan-600 text-white rounded-md px-3 py-1.5 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path></svg>
          <span>Back</span>
        </button>
      </div>
      <hr>
      <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-5">
            <div class="w-1/3">
              <img :src="selectedTeacher.image" class="w-full h-auto rounded-xl" alt="Teacher Image">
            </div>
            <div class="w-2/3 flex flex-col justify-between">
              <div>
                <h2 class="text-xl font-bold text-gray-800">{{ selectedTeacher.name }}</h2>
                <p class="text-gray-600 mt-2">{{ selectedTeacher.subject }}</p>
              </div>
              <div class="mt-4">
                <h3 class="text-lg font-semibold text-gray-700">Description</h3>
                <p class="text-gray-600 mt-1">{{ selectedTeacher.details }}</p>
              </div>
            </div>
          </div>
        </div>
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

const isEdit = ref(false);
const isDetailView = ref(false);
const editTeacher = ref({});
const selectedTeacher = ref({});

const viewDetails = (teacher) => {
  isDetailView.value = true;
  selectedTeacher.value = teacher;
};

const edit = (teacher) => {
  isEdit.value = true;
  editTeacher.value = { ...teacher };
};

const editSubmit = async () => {
  isEdit.value = false;
  // Implement edit logic here
};

const deleteTeacher = (id) => {
  // Implement delete logic here
};

const teachers = ref([
  {
    id: 1,
    image: '/src/assets/seminar/1.jpg',
    name: 'Yasir Qadhi',
    email: 'yasir@gmail.com',
    phone: '+19675423',
    subject: 'Science',
    status: 'Active',
    details: 'A comprehensive guide to the teachings and interpretation of the Quran.'
  },
  {
    id: 2,
    image: '/src/assets/seminar/2.jpg',
    name: 'Al Maneese',
    email: 'maneese@gmail.com',
    phone: '+15675423',
    subject: 'Physics',
    status: 'inActive',
    details: 'An in-depth look into the life and legacy of Prophet Muhammad (PBUH).'
  },
  {
    id: 3,
    image: '/src/assets/seminar/3.jpg',
    name: 'Ashraful Hider Jaed',
    email: 'qadhi@gmail.com',
    phone: '+13675423',
    subject: 'Islamic Studies',
    status: 'Active',
    details: 'Understanding the principles of Islamic law and its application in daily life.'
  },
]);
</script>

<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
