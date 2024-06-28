<template>
  <div class="px-4 bg-white py-5">
    <div v-if="!selectedCourse">
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
            </tr>
          </thead>
          <tbody>
            <tr class="tableRowColor" v-for="(course, index) in courses" :key="course.id">
              <td class="py-4 px-2 w-1/8">{{index+1}}</td>
              <td class="py-4 px-2 w-1/8">
                <h3 class="font-semibold">{{ course.name }}</h3>
              </td>
              <td class="py-4 px-2 w-2/8">{{ course.timeslot }}</td>
              <td class="py-4 px-2">
                <button @click="viewTeachers(course)" class="py-1 px-4 bg-green-700 text-white hover:bg-green-900 rounded-md">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else>
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-green-800 font-bold">{{ selectedCourse.name }} Teachers</p>
        <button @click="selectedCourse = null" class="bg-green-600 hover:bg-cyan-600  text-white rounded-md px-3 py-1.5 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z"></path></svg>
          <span>Back</span>
        </button>
      </div>
      <hr />
      <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
        <div v-for="(teacher, index) in selectedCourse.teachers" :key="index">
          <div class="flex gap-5">
            <div class="w-1/3">
              <img :src="teacher.image" class="w-full h-auto rounded-xl" alt="Teacher Image">
            </div>
            <div class="w-2/3 flex flex-col justify-between">
              <div>
                <h2 class="text-xl font-bold text-gray-800">{{ teacher.name }}</h2>
                <p class="text-gray-600 mt-2">{{ teacher.subject }}</p>
              </div>
              <div class="mt-4">
                <h3 class="text-lg font-semibold text-gray-700">Description</h3>
                <p class="text-gray-600 mt-1">{{ teacher.details }}</p>
              </div>
            </div>
          </div>
          <hr class="my-4">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const courses = ref([
  {
    id: 1,
    name: 'Nadira Program',
    timeslot: '6PM - 8PM',
    details: 'A comprehensive guide to the teachings and interpretation of the Quran.',
    teachers: [
      {
        id: 1,
        image: '/src/assets/seminar/6.jpg',
        name: 'Yasir Qadhi',
        subject: 'Islamic Studies',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 2,
        image: '/src/assets/seminar/5.jpg',
        name: 'Al Maneese',
        subject: 'Arabic Language',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  },
  {
    id: 2,
    name: 'Hifz Program',
    timeslot: '10AM - 12AM',
    details: 'An in-depth look into the life and legacy of Prophet Muhammad (PBUH).',
    teachers: [
      {
        id: 3,
        image: '/src/assets/seminar/1.jpg',
        name: 'Omar Sulaiman',
        subject: 'Hifz ul Quran',
        details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        id: 4,
        image: '/src/assets/seminar/2.jpg',
        name: 'Harun Khan',
        subject: 'Tajweed',
        details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ]
  },
  {
    id: 3,
    name: 'Quran Reciting',
    timeslot: '2Pm - 4PM',
    details: 'Understanding the principles of Islamic law and its application in daily life.',
    teachers: [
      {
        id: 5,
        image: '/src/assets/seminar/3.jpg',
        name: 'Zakir Naik',
        subject: 'Quran Recitation',
        details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  },
]);

let selectedCourse = ref(null);

const viewTeachers = (course) => {
  selectedCourse.value = course;
};
</script>

<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
