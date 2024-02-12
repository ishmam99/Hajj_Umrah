<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
import Modal from '@/components/modal/ModalComponent.vue'
import axios from 'axios'

const commonStore = useCommonStore()
const courseStore = useCourseStore()
const router = useRouter()
const slotApi = 'get-time-slot-detail/'

let modal = ref(false)
let checkoutModal = ref(false)
let dialogModal = ref(false)

let daySelected = ref(false)
let selectedDay = ref({})
let selectedSlots = ref([])
let selectedDaySlots = ref([])
let selectedTeacher = ref(
  JSON.parse(localStorage.getItem('selected-teacher')) ?? {}
)

let scheduleAdvisor = ref(
  JSON.parse(localStorage.getItem('schedule-by-advisor')) ?? []
)

let course_id = ref(JSON.parse(localStorage.getItem('applying')))
let student_id = ref(JSON.parse(localStorage.getItem('user')).id)
let teacher_id = ref(
  localStorage.getItem('selected-teacher')
    ? JSON.parse(localStorage.getItem('selected-teacher')).id
    : null
)
let timeslot_id = ref(
  scheduleAdvisor.value
    .map((object) => object[0])
    .map((object) => object['slots']) ?? []
)

let cartDaySlots = ref([])
let dayArray = ref([])
let msg = ref()

let availableDaySlots = ref([])
let advisorEnrollmentStage = ref(localStorage.getItem('enroll-stage') ?? 1)
let enroll_req_msg = ref('')
let enrollmentInfo = ref([])

const courseSectionDetailsApi = 'get-course-by-id/'
const slotData = ref({})

let courseDetails = ref({})
let sectionDetails = ref({})
let courseModules = ref()

async function courseSectionDetails() {
  await axios
    .get(
      import.meta.env.VITE_ELEARNING_BASE_API +
        courseSectionDetailsApi +
        router.currentRoute.value.params.id
    )
    .then((response) => {
      courseDetails.value = response.data[0]['other'][0]
      sectionDetails.value = response.data[0]['course_detail']
      courseModules.value = response.data[0]['coourse_module']
    })
  commonStore.loading = false
}

function checkout() {
  router.push('/learning-center/checkout')
}

function selectDay(day) {
  modal.value = true
  daySelected.value = true
  selectedDay.value = {
    id: day['schedule']['day_id'],
    day_name: day['day'][0]['day_name'],
  }

  availableDaySlots.value = day['time_slots']
  dayArray.value = day
  isActive(day)
}

function isActive(day) {
  let index = scheduleAdvisor.value
    .map((object) => object[0])
    .map((object) => object['day'])
    .map((object) => object)
    .indexOf(day.id)
  let getSchedule = scheduleAdvisor.value

  if (index != '-1') {
    cartDaySlots.value = getSchedule
      .map((object) => object[0])
      .map((object) => object['slots'])
      .map((object1) => object1)
      .map((object2) => object2)
      .map((object3) => object3)[index]
  } else {
    cartDaySlots.value = selectedSlots.value
  }
}

function selectSlots(slots) {
  isActive(dayArray.value)
  if (cartDaySlots.value.includes(slots.id)) {
    let index = cartDaySlots.value.indexOf(slots.id)
    cartDaySlots.value.splice(index, 1)
  } else if (selectedSlots.value.includes(slots.id)) {
    let index = selectedSlots.value.map((object) => object).indexOf(slots.id)
    selectedSlots.value.splice(index, 1)
  } else {
    selectedSlots.value = cartDaySlots.value
    selectedSlots.value.push(slots.id)
  }
}

function removeDay() {
  if (
    scheduleAdvisor.value
      .map((object) => object[0])
      .map((object) => object['day'])
      .map((object) => object)
      .map((object) => object.id)
      .includes(selectedDay.value.id)
  ) {
    let index = scheduleAdvisor.value
      .map((object) => object[0])
      .map((object) => object['day'])
      .map((object) => object.id)
      .indexOf(selectedDay.value.id)
    scheduleAdvisor.value.splice(index, 1)
    selectedDay.value = {}
    selectedSlots.value = []
    localStorage.setItem(
      'schedule-by-advisor',
      JSON.stringify(scheduleAdvisor.value)
    )
  } else {
    selectedDay.value = {}
    selectedSlots.value = []
  }
  modal.value = false
  selectedDaySlots.value = []
  msg.value = ''
}

function resetAdvisor() {
  scheduleAdvisor.value = []
  selectedTeacher.value = {}
  advisorEnrollmentStage.value = 1
  teacher_id.value = null
  localStorage.removeItem('enroll-stage')
  localStorage.removeItem('timeslot_id')
  localStorage.removeItem('schedule-by-advisor')
  localStorage.removeItem('selected-teacher')
}

function confirmSlots() {
  if (
    selectedSlots.value != '' ||
    cartDaySlots.value.map((object) => object) != ''
  ) {
    let object = {
      days: [
        {
          day: {
            id: selectedDay.value.id,
            day_name: selectedDay.value.day_name,
          },
          slots:
            selectedSlots.value != ''
              ? selectedSlots.value
              : cartDaySlots.value.map((object) => object),
        },
      ],
    }

    // Saving time slot array

    selectedSlots.value.map((object) => {
      if (!timeslot_id.value.includes(object)) {
        timeslot_id.value.push(object)
      } else {
        let index = timeslot_id.value.indexOf(object)
        timeslot_id.value.splice(index, 1)
        timeslot_id.value.push(object)
      }
    })

    // end

    let getSchedule = scheduleAdvisor.value
    let localStorageItem = 'schedule-by-advisor'

    if (
      !getSchedule
        .map((object) => object[0])
        .map((object) => object['day'])
        .map((object) => object)
        .map((object) => object.id)
        .includes(selectedDay.value.id)
    ) {
      getSchedule.push(object.days)
    } else {
      let index = getSchedule
        .map((object) => object[0])
        .map((object) => object['day'])
        .map((object) => object.id)
        .indexOf(selectedDay.value.id)
      getSchedule.splice(index, 1)
      getSchedule.push(object.days)
    }

    localStorage.setItem(localStorageItem, JSON.stringify(getSchedule))
    localStorage.setItem('timeslot_id', JSON.stringify(timeslot_id.value))
    selectedSlots.value = []
    modal.value = false
    selectedDaySlots.value = []
    msg.value = ''
    selectedDay.value = {}
  } else {
    msg.value = 'You must select at least one slot to confirm'
  }
}

// Schedule by advisor

// function checkEnrollmentStageAdvisor(stage) {
//     let actualStageAdvisor = JSON.parse(localStorage.getItem('enroll-stage'))
//     if(actualStageAdvisor >= stage) {
//         advisorEnrollmentStage.value = stage
//     } else {
//         alert("That step is unaccessible")
//     }
// }

async function fetchingSlotTime() {
  for (const schedule of scheduleAdvisor.value) {
    for (const days of schedule) {
      for (const slots of days.slots) {
        slotData.value[slots] = await getTimeSlotById(slots)
      }
    }
  }
}

async function proceedToNext(stage, array) {
  console.log(array)
  commonStore.loading = true
  if (!localStorage.getItem('enroll-stage')) {
    advisorEnrollmentStage.value = stage
    localStorage.setItem('enroll-stage', stage)
    dialogModal.value = false
    localStorage.setItem('selected-teacher', JSON.stringify(array))
    teacher_id.value = array.id
    selectedTeacher.value = array

    courseStore.getTeacherList(router.currentRoute.value.params.id)
    courseStore.getAvailableSlots(router.currentRoute.value.params.id, array.id)
  } else if (localStorage.getItem('enroll-stage') == 1) {
    advisorEnrollmentStage.value = stage
    localStorage.setItem('enroll-stage', stage)
    dialogModal.value = false
  } else if (localStorage.getItem('enroll-stage') == 2) {
    await fetchingSlotTime()
    advisorEnrollmentStage.value = stage
    localStorage.setItem('enroll-stage', stage)
  }
  commonStore.loading = false
}

// Common

// function openModal(modalName, array) {
//     if(modalName == 'modal') {
//        modal.value = true
//     } else if(modalName == 'checkoutModal') {
//        checkoutModal.value = true
//     } else if(modalName == 'dialogModal') {
//         if(array != null) {
//             console.log(array)
//             selectedTeacher.value = array
//             teacher_id.value = array.id
//             dialogModal.value   = true
//         } else {
//             courseStore.getAvailableSlots(router.currentRoute.value.params.id, null)
//             dialogModal.value   = true
//         }
//     }
// }

function closeModal(response) {
  modal.value = response
  checkoutModal.value = response
  dialogModal.value = response
  selectedDay.value = {}
}

function tConvert(time) {
  console.log(time)
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ]

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1) // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM' // Set AM/PM
    time[0] = +time[0] % 12 || 12 // Adjust hours
  }
  return time.join('') // return adjusted time or original string
}

function enroll() {
  commonStore.loading = true
  let data = {
    course_id: course_id.value,
    student_id: student_id.value,
    teacher_id: teacher_id.value,
    student_type: sectionDetails.value.course_type,
    no_of_payment: sectionDetails.value.course_duration,
    course_duration: sectionDetails.value.course_duration,
    timeslot_id: timeslot_id.value.toString(),
  }

  console.log(data)
  try {
    courseStore.courseEnrollment(data).then((response) => {
      enrollmentInfo.value = response.data
      localStorage.setItem(
        'enrollment_info',
        JSON.stringify(enrollmentInfo.value)
      )
      // advisorEnrollmentStage.value = 4
      // localStorage.setItem('enroll-stage', 4)
      enroll_req_msg.value =
        'Your enrollment request has been accepted. Your course Advisor will contact you soon to talk with you and finalize your course schedule.'
      commonStore.loading = false
      router.push('/learning-center/checkout')
    })
  } catch (e) {
    console.log(e)
    enroll_req_msg.value = 'Could not enroll! Try again.'
    commonStore.loading = false
  }
}

function back() {
  resetAdvisor()
  localStorage.removeItem('applying')
  router.push('/dashboard/my-courses')
}

async function getTimeSlotById(slotId) {
  try {
    const response = await axios.get(
      import.meta.env.VITE_ELEARNING_BASE_API + slotApi + slotId
    )
    return response.data
  } catch (error) {
    return 'Error loading data'
  }
}

onMounted(async () => {
  for (const schedule of scheduleAdvisor.value) {
    for (const days of schedule) {
      for (const slots of days.slots) {
        slotData.value[slots] = await getTimeSlotById(slots)
      }
    }
  }

  courseSectionDetails()
  courseStore.getTeacherList(router.currentRoute.value.params.id)
  courseStore.getAvailableSlots(
    router.currentRoute.value.params.id,
    selectedTeacher.value.id
  )
  courseStore.courseInfo(sectionDetails.value.course_id)
  commonStore.loading = false
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div v-if="advisorEnrollmentStage != 4" class="page-details">
    <h4 class="text-3xl">
      {{ courseDetails['course_title'] }} ({{ sectionDetails.section_id }})
    </h4>
    <h2>Course Enrollment</h2>
    <!-- <div class="progress">
            <div class="progress-bar">
                <div class="steps">
                    <div @click="checkEnrollmentStageAdvisor(1)" class="step-circle"></div>
                    <div class="step-text">Options</div>
                </div>
                <div :class="(advisorEnrollmentStage == 2 || advisorEnrollmentStage == 3 || advisorEnrollmentStage == 4) ? 'step-bar completed' : 'step-bar'"></div>
                <div class="steps">
                    <div @click="checkEnrollmentStageAdvisor(2)" class="step-circle"></div>
                    <div class="step-text">Teacher</div>
                </div>
                <div :class="(advisorEnrollmentStage == 3 || advisorEnrollmentStage == 4) ? 'step-bar completed' : 'step-bar'"></div>
                <div class="steps">
                    <div @click="checkEnrollmentStageAdvisor(3)" class="step-circle"></div>
                    <div class="step-text">Schedule</div>
                </div>
                <div :class="(advisorEnrollmentStage == 4) ? 'step-bar completed' : 'step-bar'"></div>
                <div class="steps">
                    <div @click="checkEnrollmentStageAdvisor(4)" class="step-circle"></div>
                    <div class="step-text">Confirm</div>
                </div>
            </div>
        </div> -->
    <div class="tab-headline mt-4">
      <span v-if="advisorEnrollmentStage == 1"
        >Your course registration preference</span
      >
      <span v-if="advisorEnrollmentStage == 2">Schedule</span>
      <!--  <span v-if="advisorEnrollmentStage == 3">Schedule</span> -->
      <span v-if="advisorEnrollmentStage == 3">Confirm your submission</span>
    </div>
    <div class="tab">
      <div class="tabs">
        <div>
          <!-- <div v-if="advisorEnrollmentStage == 1" class="day-one">
                        <div class="schedules">
                            <div class="next-step"> -->
          <!-- <button @click="proceedToNext(3, null)">Schedule by student's schedule </button> -->
          <!-- <button @click="proceedToNext(2, null)">Schedule by teacher's schedule </button> -->
          <!-- <button @click="proceedToNext(2, null)">Enroll by course schedule <font-awesome-icon :icon="['fas', 'fa-refresh']" /></button> -->
          <!-- <button @click="proceedToNext(2, null)">Yes <font-awesome-icon :icon="['fas', 'fa-refresh']" /></button> -->
          <!-- <button @click="proceedToNext(2)">Yes <font-awesome-icon :icon="['fas', 'fa-refresh']" /></button> -->
          <!-- <button v-if="advisorEnrollmentStage != 2" @click="openModal('dialogModal', null)">No <font-awesome-icon :icon="['fas', 'fa-arrow-right']" /></button> -->
          <!-- <button @click="proceedToNext(4, null)">Schedule with help of advisor</button> -->
          <!-- </div>
                        </div>
                    </div> -->
          <div v-if="advisorEnrollmentStage == 1" class="day-one">
            <div class="title">Available Teachers</div>
            <div
              v-if="courseStore.teacherListForCourse != 'List Empty'"
              class="teachers"
            >
              <div
                v-for="teacher in courseStore.teacherListForCourse"
                :key="teacher"
                class="teacher"
              >
                <div class="pro-pic">
                  <img
                    src="@/assets/images/default/pro-pic.jpg"
                    alt=""
                    srcset=""
                  />
                </div>
                <div class="info">
                  <div>
                    <h3>{{ teacher.name }}</h3>
                    <p>From {{ teacher.country }}</p>
                  </div>
                </div>
                <!-- <div class="professional-info">
                                    <div>
                                        <div class="icon">
                                            <font-awesome-icon :icon="['fas', 'fa-star']" />
                                        </div>
                                        <div class="count">
                                            4.8
                                        </div>
                                        <div class="info-title">
                                            Instructor Ratiing
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon">
                                            <font-awesome-icon :icon="['fas', 'fa-award']" />
                                        </div>
                                        <div class="count">
                                            250
                                        </div>
                                        <div class="info-title">
                                            Reviews
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon">
                                            <font-awesome-icon :icon="['fas', 'fa-user-group']" />
                                        </div>
                                        <div class="count">
                                            300
                                        </div>
                                        <div class="info-title">
                                            Students
                                        </div>
                                    </div>
                                    <div>
                                        <div class="icon">
                                            <font-awesome-icon :icon="['fas', 'fa-layer-group']" />
                                        </div>
                                        <div class="count">
                                            4
                                        </div>
                                        <div class="info-title">
                                            Courses
                                        </div>
                                    </div>
                                </div> -->
                <div class="action">
                  <button
                    @click="proceedToNext(2, teacher)"
                    class="not-available"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div v-else class="list-empty">
              No teacher available right now for this course.
            </div>
          </div>
          <div v-if="advisorEnrollmentStage == 2" class="day-one">
            <div class="title">Available Days</div>
            <div
              v-if="courseStore.availableDaySlots != 'List Empty'"
              class="schedules"
            >
              <span
                v-for="(day, index) in courseStore.availableDaySlots"
                :key="index"
                @click="selectDay(day)"
                :class="
                  (selectedDay['id'] == day['schedule']['day_id'] ||
                    scheduleAdvisor
                      .map((object) => object[0])
                      .map((object) => object['day']['id'])
                      .includes(day['schedule']['day_id']) == true) &&
                  scheduleAdvisor
                    .map((object) => object[0])
                    .map((object) => object['slots']) != ''
                    ? 'schedule schedule-active'
                    : 'schedule'
                "
              >
                {{ day['day'][0]['day_name'] }}
              </span>
            </div>
            <div v-else class="list-empty">
              No Day/Slot available right now for this Course/Teacher.
            </div>
          </div>
          <div v-if="advisorEnrollmentStage == 3" class="day-one">
            <div class="title">Summery</div>
            <div class="summery">
              <div class="course-info">
                <div class="course-thumbnail">
                  <img src="@/assets/images/course-thumb.png" />
                </div>
                <div class="course-details">
                  <div class="course-details-title">
                    {{ sectionDetails.section_id }}
                  </div>
                  <div class="price">
                    Price: ${{ sectionDetails.cost_per_month }} per month
                  </div>
                </div>
              </div>
              <div class="teacher-info">
                <div v-if="teacher_id != null" class="teacher">
                  <div class="pro-pic">
                    <img
                      src="@/assets/images/default/pro-pic.jpg"
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div class="info">
                    <div>
                      <h3>{{ selectedTeacher['name'] }}</h3>
                      <p>From {{ selectedTeacher['country'] }}</p>
                    </div>
                  </div>
                </div>
                <div v-else class="list-empty">No teacher was selected</div>
              </div>
              <div v-if="scheduleAdvisor != ''" class="daytime-info">
                <div
                  v-for="schedule in scheduleAdvisor"
                  :key="schedule"
                  class="shceduled-days"
                >
                  <div v-for="days in schedule" :key="days">
                    <div class="day-name">
                      <strong>{{ days.day['day_name'] }}</strong>
                    </div>
                    <div class="day-slots">
                      <div
                        v-for="slotId in days.slots"
                        :key="slotId"
                        class="day-slot"
                      >
                        <div v-if="slotData[slotId]">
                          {{ tConvert(slotData[slotId].data[0].start_time) }} -
                          {{ tConvert(slotData[slotId].data[0].end_time) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="list-empty">No Time slot was selected</div>
            </div>
          </div>
          <div class="next-step">
            <button v-if="advisorEnrollmentStage != 1" @click="resetAdvisor">
              Reset <font-awesome-icon :icon="['fas', 'fa-refresh']" />
            </button>
            <button
              v-if="advisorEnrollmentStage == 2"
              @click="proceedToNext(3, null)"
            >
              Next <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
            </button>
            <button v-if="advisorEnrollmentStage == 3" @click="enroll">
              Checkout <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <Modal v-if="modal" :width="'width: 550px'" @modal-close="closeModal">
      <div v-if="daySelected" class="slots">
        <div class="title">Available slots for {{ selectedDay.day_name }}</div>

        <div v-if="msg" class="error-message">
          {{ msg }}
        </div>

        <div v-if="availableDaySlots != ''" class="slot-wrapper">
          <span
            v-for="slot in availableDaySlots"
            :key="slot"
            @click="selectSlots(slot)"
            :class="
              selectedSlots.includes(slot.id) ||
              cartDaySlots.map((object) => object).includes(slot.id)
                ? 'slot slot-active'
                : 'slot'
            "
          >
            {{ tConvert(slot.start_time) }} - {{ tConvert(slot.end_time) }}
          </span>
        </div>
        <div v-else class="list-empty">No slot available</div>
        <div class="confirm-slots">
          <button @click="removeDay">
            <font-awesome-icon :icon="['fas', 'fa-trash']" /> Drop
          </button>
          <button @click="confirmSlots">Confirm</button>
        </div>
      </div>
    </Modal>

    <Modal v-if="dialogModal" :width="'width: 550px'" @modal-close="closeModal">
      <div class="title">Do you have any preferable Day?</div>
      <div class="schedules">
        <div class="next-step">
          <button @click="proceedToNext(3)">
            Yes <font-awesome-icon :icon="['fas', 'fa-refresh']" />
          </button>
          <button @click="proceedToNext(4)">
            No <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
          </button>
        </div>
      </div>
    </Modal>
    <Modal
      v-if="checkoutModal"
      :width="'width: 550px'"
      @modal-close="closeModal"
    >
      <div class="slots">
        <div class="error-message">
          An advisor will contact you and make a schedule on behalf of you.Thank
          you for your Interest.
        </div>

        <div class="slot-wrapper"></div>
        <div class="confirm-slots">
          <button @click="closeModal">Cancel</button>
          <button @click="checkout">Enroll</button>
        </div>
      </div>
    </Modal>
  </div>

  <div v-else class="page-action-result">
    <div class="course-thumbnail">
      <img
        v-if="sectionDetails.thumbnail_image"
        :src="
          'https://learningcenter.islamicdigitallane.com/images/' +
          sectionDetails.thumbnail_image
        "
      />
      <img
        v-else
        src="@/assets/images/course-thumb.png"
        width="290"
        height="120"
      />
    </div>
    <h4>{{ sectionDetails.section_id }}</h4>
    <h2>Course Enrollment</h2>
    <div class="enrollment-progress-end">
      <div class="enrl-scss-icn">
        <font-awesome-icon :icon="['fas', 'fa-circle-check']" />
      </div>
      <h3>{{ enroll_req_msg }}</h3>
      <div><button @click="back">Go to dashboard</button></div>
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: math !important;
}

.page-action-result {
  display: grid;
  padding: 50px;
  text-align: center;
}

.page-action-result > * {
  align-self: center;
}

.page-action-result > * {
  align-self: center;
}

.course-thumbnail {
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.course-thumbnail img {
  width: 250px !important;
  max-height: 100px;
}

.list-empty {
  padding: 20px;
  text-align: center;
}
.enrollment-progress-end {
  padding: 20px;
  display: grid;
  gap: 20px;
}

.enrollment-progress-end > * {
  justify-self: center;
}

.enrollment-progress-end > div > button {
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 15px;
  background: #0fa3b1;
  color: white;
}
.enrl-scss-icn {
  font-size: 40px;
  color: green;
}
.tabs {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.tabs:first-child {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}

.tabs:first-child > div {
  padding: 20px;
}
.page-details {
  padding: 50px;
}

.page-details h4,
h2 {
  text-align: center;
  color: #0fa3b1;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.tab-buttons {
  display: flex;
  justify-content: center;
}
.tab-buttons > * {
  padding: 20px;
  width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 17px;
  background: #f3f3f3;
  color: inherit;
}
.active {
  background: #0fa3b1 !important;
  color: white !important;
}

.progress {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.progress-bar {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.step-circle {
  width: 45px;
  height: 45px;
  background: #ffc700;
  border-radius: 50%;
  cursor: pointer;
}
.step-bar {
  height: 8px;
  width: 100%;
  background: #a4a4a4;
  margin-top: -18px;
  margin-left: -5px;
}
.completed {
  background: #0fa3b1 !important;
}
.step-text {
  font-size: 14px;
  font-weight: bold;
  font-family: math;
  text-align: center;
}
.tab-headline {
  background: #b5e2fa;
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
  font-weight: 700;
  text-align: center;
  color: #000000;
  font-family: math;
  font-size: 25px;
}
.schedules {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 50px;
  justify-content: center;
}
.schedules .schedule {
  width: 180px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.slots .slot-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.slots .slot-wrapper .slot {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.slots .title {
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}
.slot-active {
  background: #ffc700 !important;
}

.slots .confirm-slots {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.slots .confirm-slots button {
  margin: 20px 0;
  width: 100%;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 15px;
}

.slots .confirm-slots button:first-child {
  background-color: #df4545;
}

.slots .confirm-slots button:last-child {
  background-color: #005c9d;
}
.schedule-active {
  background: #ffc700 !important;
}

.title,
.advisor .title {
  font-weight: 700;
  font-size: 20px;
  color: #0fa3b1;
  text-align: center;
}

.next-step {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.next-step button {
  background: #0fa3b1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  height: 50px;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
  margin: 25px 0;
}

/* Select Teacher */

.teachers .title {
  display: flex;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}
.teacher-list {
  display: grid;
  margin: 30px 0;
}

.teachers .teacher {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 0.5fr;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
}

.teachers .teacher .info {
  padding-right: 15px;
  border-right: 1px solid #e7e7e7;
}

.teachers .teacher .professional-info {
  display: grid;
}

.teachers .teacher .professional-info > div {
  display: grid;
  grid-template-columns: 0.2fr 0.3fr 1fr;
  gap: 10px;
  margin-bottom: 5px;
}

.teachers .teacher .professional-info div > * {
  overflow: hidden;
}

.teacher h3 {
}
.teacher p {
  font-size: 11px;
}
.action button {
  background: #ffc700;
  border-radius: 10px;
  padding: 5px 15px;
  text-align: center;
  color: #000000;
}
.action .not-available {
  border-radius: 10px;
  padding: 5px 15px;
  text-align: center;
  color: #000000;
  background: #d6d6d6 !important;
}

.select-teacher-btn {
  border-radius: 10px;
  padding: 5px 15px;
  text-align: center;
  color: #000000;
  background: #d6d6d6 !important;
}
.teacher > * {
  display: flex;
  justify-content: start;
  align-items: center;
}
.teacher .pro-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.teacher .pro-pic img {
  height: 100%;
}

.error-message {
  padding: 10px;
  color: red;
  text-align: center;
  border: 1px solid red;
  border-radius: 5px;
  margin: 10px 0;
}

/* Slot teachers */

.select-teacher > .teacher-slot {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
}

.selected-days {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d6d6d6;
  padding: 0 20px;
}

.teacher-slot:not(:last-child) {
  border-bottom: 5px solid white;
}
.selected-slots {
  display: grid;
  background: #f5f5f5;
}

.selected-slot {
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  border-bottom: 5px solid white;
}

.selected-slot {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 0;
}

.selected-slot > * {
  justify-self: center;
  align-self: center;
}

.selected-teacher {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.1fr;
  gap: 20px;
  background: #ffc700;
  padding: 10px;
  border-radius: 10px;
}

.selected-teacher > .pro-pic {
  height: 60px;
  width: 60px;
}

.selected-teacher > .pro-pic > img {
  width: 100%;
  border-radius: 50%;
}

.selected-teacher > .user-icon {
  display: flex;
  align-items: center;
}

.selected-teacher > .selected-teacher-info {
  display: grid;
  justify-content: start;
}

.selected-teacher > .selected-teacher-info h2 {
  display: grid;
  justify-content: start;
}

.selected-days .selected-day {
  width: 180px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.day-active {
  background: #ffc700 !important;
}

.summery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.summery > div:not(:last-child) {
  border-right: 1px solid rgb(211, 211, 211);
}

.course-info {
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.course-thumbnail img {
  width: 100%;
}

.course-details-title {
  font-size: 18px;
  font-weight: bold;
}

.course-info .course-details {
}

.summery > .teacher-info > .teacher {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 20px;
}
</style>
