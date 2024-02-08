<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCourseStore } from '@/stores/learning-center/course'
import { useCommonStore } from '@/stores/common'
import { useRouter } from 'vue-router'

const courseStore = useCourseStore()
const commonStore = useCommonStore()
const router = useRouter()

let courseInfo = ref(JSON.parse(localStorage.getItem('course-info')))

// Post checkout 

const studentPrefDateTime = courseInfo.value.enrollmentDetail.map(object => object)

let formateDaySlot = ref({})
const courseDates = [];
const courseStartDate = new Date(courseInfo.value.course_starting_date) // Note: Month is zero-based in JavaScript (9 is October).
const numOfClass = courseInfo.value.number_of_classes

let currentDate = new Date(courseStartDate);
// Checkout details 

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

function scheduleDateTimeList() {
    console.log(courseInfo.value)
    if(studentPrefDateTime != '') {
        while (courseDates.length < numOfClass) {
            for (const x of studentPrefDateTime) {
                const prefDayName = x.day;
                const courseTimeSlotsId = x.course_time_slots_id
                const currentDayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
                if (prefDayName === currentDayName) {
                const sTimeParts = x.sTime.split(':');
                const sHour = parseInt(sTimeParts[0], 10);
                const sMinute = parseInt(sTimeParts[1], 10);
                const sSeconds = parseInt(sTimeParts[2], 10);
    
                const year = currentDate.toLocaleString('default', { year: 'numeric' })
                const month = currentDate.toLocaleString('default', { month: '2-digit' })
                const day = currentDate.toLocaleString('default', { day: '2-digit' })
    
                const formattedDate = [year, month, day].join('-')
                const formattedTime = [sHour, sMinute, sSeconds].join(':')
                const formattedDateTime = [formattedDate, formattedTime].join(' ')
    
                formateDaySlot.value = {
                    class_date: formattedDateTime,
                    course_time_slots_id: courseTimeSlotsId,
                    enrollment_id: courseInfo.value.id,
                    student_id: courseInfo.value.student_id,
                    teacher_id: courseInfo.value.teacher_id,
                    Course_id: courseInfo.value.course_id
                }
                
                courseDates.push(formateDaySlot.value);
            }
        }
        currentDate = new Date(addMinutes(currentDate, 24 * 60)); // Add 24 hours.
    }
    }
}

function back() {
    router.push('/dashboard/my-courses')
}

function postResponse() {
    scheduleDateTimeList()
    courseStore.postCheckoutDataProcessing(courseDates, courseInfo.value)
}

onMounted(() => {
    postResponse()
    commonStore.loading = false
})

onUnmounted(() => {
    commonStore.loading = true
})
</script>

<template>
    <div class="success-message">
        <div class="ok">
            <p>Congratulations !</p>
            <p>Your payment was completed.</p>
            <button @click="back">Ok</button>
        </div>

    </div>
</template>

<style scoped>

.success-message {
    display: flex;
    justify-content: center;
    align-items: center;
}
.ok p:first-child {
    font-size: 24px;
    font-family: math;
    color: green;
    text-align: center;
}

.ok p:not(:first-child) {
    font-size: 20px;
    font-family: math;
    text-align: center;
    font-weight: bold;
}

.ok {
    display: grid;
    gap: 10px;
}

.ok > button {
    background: #0FA3B1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    color: white;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    margin: 25px 0;
}
</style>