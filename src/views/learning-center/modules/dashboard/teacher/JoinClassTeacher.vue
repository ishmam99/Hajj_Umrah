<template>
  <div class="dashboard-content">
    <img src="@/assets/images/dashboard/teacher-class.png" alt="" />
    <div class="dashboard-wrapper">
      <h2 style="font-size: 25px; font-weight: bold">Today's Classes</h2>
      <template v-if="studentData">
        <div v-for="(classData, index) in studentData" :key="index">
          <JoinClassComponent
            :courseName="classData.course[0].title"
            :studentName="classData.student_name"
            :date="classData.date"
            :startTime="classData.time_slot[0]['start_time']"
            :endTime="classData.time_slot[0]['end_time']"
            :joinLink="classData.meet_link"
          />
        </div>
      </template>
      <template v-else>
        No Data available, please contact with an admin for instruction.
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'
// import { useRouter } from 'vue-router'
import JoinClassComponent from '@/components/card/JoinClassComponent.vue'
import axios from 'axios'

const commonStore = useCommonStore()
const baseUrl = import.meta.env.VITE_ELEARNING_BASE_API
// const router = useRouter()
const user_id = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')).id
  : null

const studentData = ref(null)
// Get the current date in the 'YYYY-MM-DD' format

const currentDate = new Date()
const year = currentDate.toLocaleString('default', { year: 'numeric' })
const month = currentDate.toLocaleString('default', {
  month: '2-digit',
})
const day = currentDate.toLocaleString('default', { day: '2-digit' })
const date = ref([year, month, day].join('-'))
console.log(date)

const fetchData = async () => {
  try {
    console.log(user_id, date.value)
    const response = await axios.get(
      `${baseUrl}get-todays-class/${user_id}/${date.value}`
    )
    studentData.value = response.data
    commonStore.loading = false
    console.log(' join class data teacher', response.data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

onMounted(() => {
  fetchData()
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<!--<script setup>-->
<!--import { useRouter } from 'vue-router'-->

<!--const router = useRouter()-->

<!--function  joinClass() {-->
<!--    router.push('https://harunrkhan-020.my.webex.com/harunrkhan-020.my-en/j.php?MTID=m2a034f7a276a5831bf782201c6a85e13')-->
<!--}-->

<!--</script>-->

<!--<template>-->
<!--    <div class="dashboard-content">-->
<!--        <div class="class">-->
<!--            <div class="details">-->
<!--                <span>Topic: Quran Recitation - Nadira Program</span>-->
<!--                <span class="date-time">-->
<!--                    <span>-->
<!--                        <font-awesome-icon :icon="['fas', 'fa-calendar-days']" />-->
<!--                        Sat, 7th September-->
<!--                    </span> -->
<!--                    <span>-->
<!--                        <font-awesome-icon :icon="['fas', 'fa-clock']" />-->
<!--                        3:00 PM-->
<!--                    </span> -->
<!--                </span>-->
<!--            </div>-->
<!--            <div class="join-link">-->
<!--                <div class="title">-->
<!--                    <span class="icon"><font-awesome-icon :icon="['fas', 'fa-video']" /></span> <strong>Live Class</strong>-->
<!--                </div>-->
<!--                <button class="link">Join Class</button>-->
<!--            </div>-->
<!--        </div>-->
<!--&lt;!&ndash;        <div class="class">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="details">&ndash;&gt;-->
<!--&lt;!&ndash;                <span>Topic: Quran Recitation - Nadira Program</span>&ndash;&gt;-->
<!--&lt;!&ndash;                <span class="date-time">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span>&ndash;&gt;-->
<!--&lt;!&ndash;                        <font-awesome-icon :icon="['fas', 'fa-calendar-days']" />&ndash;&gt;-->
<!--&lt;!&ndash;                        Sat, 7th September&ndash;&gt;-->
<!--&lt;!&ndash;                    </span> &ndash;&gt;-->
<!--&lt;!&ndash;                    <span>&ndash;&gt;-->
<!--&lt;!&ndash;                        <font-awesome-icon :icon="['fas', 'fa-clock']" />&ndash;&gt;-->
<!--&lt;!&ndash;                        3:00 PM&ndash;&gt;-->
<!--&lt;!&ndash;                    </span> &ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="join-link">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="title">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="icon"><font-awesome-icon :icon="['fas', 'fa-video']" /></span> <strong>Live Class</strong>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <button @click="joinClass" class="link">Join Class</button>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--&lt;!&ndash;        <div class="class">&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="details">&ndash;&gt;-->
<!--&lt;!&ndash;                <span>Topic: Quran Recitation - Nadira Program</span>&ndash;&gt;-->
<!--&lt;!&ndash;                <span class="date-time">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span>&ndash;&gt;-->
<!--&lt;!&ndash;                        <font-awesome-icon :icon="['fas', 'fa-calendar-days']" />&ndash;&gt;-->
<!--&lt;!&ndash;                        Sat, 7th September&ndash;&gt;-->
<!--&lt;!&ndash;                    </span> &ndash;&gt;-->
<!--&lt;!&ndash;                    <span>&ndash;&gt;-->
<!--&lt;!&ndash;                        <font-awesome-icon :icon="['fas', 'fa-clock']" />&ndash;&gt;-->
<!--&lt;!&ndash;                        3:00 PM&ndash;&gt;-->
<!--&lt;!&ndash;                    </span> &ndash;&gt;-->
<!--&lt;!&ndash;                </span>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;            <div class="join-link">&ndash;&gt;-->
<!--&lt;!&ndash;                <div class="title">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="icon"><font-awesome-icon :icon="['fas', 'fa-video']" /></span> <strong>Live Class</strong>&ndash;&gt;-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--&lt;!&ndash;                <button class="link">Join Class</button>&ndash;&gt;-->
<!--&lt;!&ndash;            </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </div>&ndash;&gt;-->
<!--    </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.dashboard-content {-->
<!--    padding: 20px;-->
<!--    height: 70vh;-->
<!--    overflow: auto;-->
<!--}-->

<!--.class {-->
<!--    background: #F5F5F5;-->
<!--    box-shadow: 4px 4px 7px -2px rgba(0, 0, 0, 0.25);-->
<!--    border-radius: 10px;-->
<!--    padding: 20px;-->
<!--    display: grid;-->
<!--    gap: 20px;-->
<!--    margin-bottom: 20px;-->
<!--}-->

<!--.details {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--    align-items: center;-->
<!--}-->

<!--.details > * {-->
<!--    font-size: 14px;-->
<!--}-->

<!--.details > *:first-child {-->
<!--    font-weight: bold;-->
<!--}-->

<!--.date-time {-->
<!--    display: flex;-->
<!--    justify-content: end;-->
<!--    gap: 20px;-->
<!--}-->

<!--.join-link {-->
<!--    display: flex;-->
<!--    justify-content: space-between;-->
<!--}-->

<!--.join-link .title {-->
<!--    font-size: 20px;-->
<!--}-->

<!--.icon {-->
<!--    color: red;-->
<!--}-->

<!--.link {-->
<!--    outline: none;-->
<!--    border: none;-->
<!--    padding: 10px 20px;-->
<!--    background: #0FA3B1;-->
<!--    color: white;-->
<!--    border-radius: 5px;-->
<!--    font-weight: bold;-->
<!--}-->
<!--</style>-->

<style scoped>
.dashboard-content {
  height: 90vh;
  overflow: auto;
}

.dashboard-content img {
  width: 100%;
}

.dashboard-wrapper {
  padding: 20px;
}
</style>
