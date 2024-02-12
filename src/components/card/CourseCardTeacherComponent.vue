<template>
  <div class="bg-white rounded-lg shadow-lg flex flex-col items-center ">
    <img :src="displayCoverImage" alt="Course Cover" class="w-full h-full object-cover rounded-lg mb-4">
    <h2 class="text-xl font-semibold">{{ courseName }}</h2>
    <p class="text-gray-500">{{ programName }}</p>

    <div class="flex justify-center m-4">
      <button @click="handleClick" class="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">View Schedule</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    id:String,
    courseName: String,
    programName: String,
    coverImage: String,
  },
  data() {
    return {
      teacher_id:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).id:null,

      router: useRouter(),
    };
  },
  methods:{
    handleClick(){
      console.log(this.id,'props check', this.teacher_id)
      this.router.push(`/dashboard/my-courses/teacher-schedule/${this.id}/${this.teacher_id}`);
    }
  },
  computed: {

    displayCoverImage() {
      return this.coverImage || require('@/assets/images/course-thumb.png');
    },
  },
};
</script>
