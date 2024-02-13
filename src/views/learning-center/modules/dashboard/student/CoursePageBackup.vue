<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'

const router = useRouter()
const courseListApi = 'ongoing-course/'
const user = JSON.parse(localStorage.getItem('user'))
const commonStore = useCommonStore()

let courseList = ref([])

async function getCourseByUser() {
  commonStore.loading = true
  await axios
    .get(import.meta.env.VITE_ELEARNING_BASE_API + courseListApi + user.id)
    .then((response) => {
      courseList.value = response.data.data
      console.log(courseList.value)
    })
  commonStore.loading = false
}

function action(data, mode) {
  if (mode == 'payment') {
    localStorage.setItem('course-info', JSON.stringify(data))
    router.push('/learning-center/checkout/' + data.id)
  } else if (mode == 'join-class') {
    localStorage.setItem('schedule-for-course', JSON.stringify(data.course_name))
    router.push('/dashboard/my-courses/schedule/' + data.id)
  } else {
    router.push('/dashboard/my-classes/' + data.id)
  }
}

onMounted(() => {
  getCourseByUser()
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="dashboard-content">
    <img src="@/assets/images/dashboard/my-courses.png" alt="" />
    <div class="dashboard-wrapper">
      <div class="dashboard-title">
        <font-awesome-icon :icon="['fas', 'fa-user-graduate']" /> My Courses
      </div>

      <div v-if="courseList != 'List Empty'" class="course-list">
        <div v-for="course in courseList" :key="course" class="slide">
          <div class="thumb"></div>
          <div class="details">
            <div>
              <h3 class="text-lg">{{ course.course_name }}</h3>
              <p>{{ course.program_name }}</p>
            </div>
            <div class="btns">
              <!-- <button class="join-class-btn" v-if="course.is_paid == 'true'" @click="action(course, 'join-class')">Join Class</button> -->

              <!-- <div v-if="course.is_approved == 'true'">
                                <button class="join-class-btn" v-if="course.is_paid == 'true'" @click="action(course, 'join-class')">Join</button>
                                <button class="pay-btn" v-else @click="action(course, 'payment')">Checkout</button>
                                
                            </div>
                            <div v-else>
                                <button class="pending-btn" disabled>Pending</button>
                            </div> -->

              <div>
                <button
                  class="join-class-btn"
                  v-if="course.is_approved == 'true'"
                  @click="action(course, 'join-class')"
                >
                  Join
                </button>
                <button class="wait-btn" disabled v-else>Waiting for Approval</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="courseList == 'List Empty'" class="else-message">
        <h4>You are not enrolled to any course yet</h4>
      </div>
      <div v-else class="else-message">
        <h4>Loading ...</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-content {
  height: 90vh;
  overflow: auto;
}

.dashboard-wrapper {
  padding: 20px;
}

.dashboard-title {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
}

.course-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
  margin-top: 20px;
}

/* Slider */

.slide {
  justify-self: center;
  width: 50%;
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
}

.slide > .details {
  padding: 20px;
  display: grid;
  position: relative;
  min-height: 150px;
}

.slide > .details > * {
  margin: 5px 0;
  justify-self: center;
  text-align: center;
  font-family: math;
}

.slide > .thumb {
  height: 120px;
  background-image: url('@/assets/images/cat-thumb.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.slide > .details > .btns {
  position: absolute;
  bottom: 0;
}

.slide > .details > .btns > div {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.slide > .details > .btns > div > * {
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
}

.slide > .details > .btns > div > .continue-btn {
  background: #0fa3b1;
  color: white;
}

.slide > .details > .btns > div > .wait-btn {
  background: #bba735;
  color: white;
}

.slide > .details > .btns > div > .pending-btn {
  background: #eb981c;
  color: white;
}

.slide > .details > .btns > div > .join-class-btn {
  background: rgb(252, 66, 66);
  color: white;
}

.slide > .details > .ratings {
  display: flex;
  gap: 10px;
  justify-content: center;
  color: #ffc700;
  font-weight: bold;
}

.else-message {
  padding: 20px 0;
}
</style>
