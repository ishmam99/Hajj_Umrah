<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import Stepper from '@/components/Stepper/StepperComponent.vue'
import axios from 'axios'
import Modal from '@/components/modal/ModalComponent.vue'
import { watch } from 'vue'

import Multiselect from 'primevue/multiselect'
// import TeacherScheduleTabComponent from "@/components/tabs/TeacherScheduleTabComponent.vue";

const swal = inject('$swal')
const api = 'user/edit-profile/'
const courseByTeacherApi = 'get-course-by-teacher/'
const courseScheduleSubmitApi = 'teacher-schedules'
const userData = ref([])
const user = JSON.parse(localStorage.getItem('user'))
let modal = ref(false)
let individualTab = ref(false)
let groupTab = ref(false)
let courseList = ref([])
const dayListApi = 'get-days'
let days = ref([])

/* Course schedule */

let startTime = ref()
let endTime = ref()
let selectedCourse = ref([])
let selectedDay = ref()
let selectedDays = ref([])
let timeSlot = ref([])

watch(selectedCourse, async (newValue, oldValue) => {
  if (newValue) {
    switch (newValue.course_type) {
      case 'Group Study':
        groupTab.value = true
        individualTab.value = false

        break
      case 'Individual Study':
        individualTab.value = true
        groupTab.value = false
        break
      default:
        individualTab.value = false
        groupTab.value = false
        break
    }

    console.log(
      'Selected course changed:',
      newValue.course_type,
      individualTab.value,
      groupTab.value
    )
  }
})
async function getUser(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + api + id)
  userData.value = resp.data.data
}

// async function addCourseSchedule() {
//   getDays()
//   modal.value = true
//   const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + courseByTeacherApi + user.id)
//   courseList.value = resp.data
//   console.log(resp.data)
// }

async function fetchCourseData() {
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + courseByTeacherApi + user.id
  )
  courseList.value = resp.data
  console.log(resp.data)
}

async function generateCourseSchedule() {
  const startTimeInMinutes = ref(convertH2M(startTime.value))
  const endTimeInMinutes = ref(convertH2M(endTime.value))
  const timeIntervalInMinutes = ref(Number(selectedCourse.value.class_duration) * 60)
  const formattedStartTime = ref()
  const formattedEndTime = ref()
  timeSlot.value = []

  console.log(timeIntervalInMinutes.value)
  console.log(endTimeInMinutes.value)
  while (Number(startTimeInMinutes.value) < Number(endTimeInMinutes.value)) {
    formattedStartTime.value = {
      hour: Math.floor(startTimeInMinutes.value / 60),
      minute: startTimeInMinutes.value % 60
    }

    formattedEndTime.value = {
      hour: Math.floor((startTimeInMinutes.value + timeIntervalInMinutes.value) / 60),
      minute: (startTimeInMinutes.value + timeIntervalInMinutes.value) % 60
    }

    timeSlot.value.push({
      day_id: selectedDay.value,
      start_time: formattedStartTime.value.hour + ':' + formattedStartTime.value.minute,
      end_time: formattedEndTime.value.hour + ':' + formattedEndTime.value.minute
    })

    startTimeInMinutes.value += timeIntervalInMinutes.value
  }

  submitCourseSchedule(timeSlot.value, formattedStartTime.value, formattedEndTime.value)
}

// async function generateGroupSchedule(){
//
//
// }
async function submitGroupSchedule() {
  const data = {
    teacher_id: user.id,
    course_id: selectedCourse.value.id,
    day_id: JSON.stringify(selectedDays.value),
    start_time: startTime.value,
    end_time: endTime.value,
    course_details_id: selectedCourse.value.id,
    batch:
      selectedCourse.value.title +
      '_' +
      selectedCourse.value.course_unique_id +
      '_' +
      new Date().toISOString()
    // slots: JSON.stringify(slot)
  }

  console.log(data)

  try {
    const resp = await axios.post(
      import.meta.env.VITE_ELEARNING_BASE_API + 'teacher-group-schedules',
      data
    )
    console.log(resp.data)
    if (resp.data.success == true) {
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.data.message,
        showConfirmButton: false,
        timer: 1500
      })

      groupTab.value = false
    } else {
      swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Could not save',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } catch (e) {
    console.log(e)
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
async function submitCourseSchedule(slot, startTime, endTime) {
  console.log(startTime)
  const data = {
    teacher_id: user.id,
    course_id: selectedCourse.value.id,
    day_id: selectedDay.value,
    start_time: startTime.hour + ':' + startTime.minute,
    end_time: endTime.hour + ':' + endTime.minute,
    course_details_id: selectedCourse.value.id,
    slots: JSON.stringify(slot)
  }

  console.log(data)

  try {
    const resp = await axios.post(
      import.meta.env.VITE_ELEARNING_BASE_API + courseScheduleSubmitApi,
      data
    )
    console.log(resp.data)
    if (resp.data.success == true) {
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.data.message,
        showConfirmButton: false,
        timer: 1500
      })

      modal.value = false
    } else {
      swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Could not save',
        showConfirmButton: false,
        timer: 1500
      })
    }
  } catch (e) {
    console.log(e)
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Something went wrong',
      showConfirmButton: false,
      timer: 1500
    })
  }
}

function convertH2M(timeInHour) {
  var timeParts = timeInHour.split(':')
  return Number(timeParts[0]) * 60 + Number(timeParts[1])
}

async function getDays() {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + dayListApi)
  days.value = resp.data.data

  console.log(days.value)
}

function closeModal(response) {
  modal.value = response
}

onMounted(() => {
  getUser(user.id)
  getDays()
  fetchCourseData()
})

onUnmounted(() => {})
</script>

<template>
  <div class="teacher-verification">
    <div class="verification-content">
      <div class="verification-header text-center">
        <h2 class="text-2xl font-bold">Verify Your Teacher Information</h2>
        <p class="info"><strong>Name:</strong> {{ userData.name }}</p>
        <p class="info"><strong>Email:</strong> {{ userData.email }}</p>
      </div>
      <div class="verification-steps mt-4">
        <div class="flex" id="ProgressStepper">
          <Stepper
            :stepCompleted="
              userData.user_status_id == '1' ||
              userData.user_status_id == '2' ||
              userData.user_status_id == '3' ||
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? true
                : false
            "
            :stepNumber="
              userData.user_status_id == '1' ||
              userData.user_status_id == '2' ||
              userData.user_status_id == '3' ||
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? ''
                : '1'
            "
            :stepperTitle="'Application Submitted'"
          />

          <Stepper
            :stepCompleted="
              userData.user_status_id == '2' ||
              userData.user_status_id == '3' ||
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? true
                : false
            "
            :stepNumber="
              userData.user_status_id == '2' ||
              userData.user_status_id == '3' ||
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? ''
                : '2'
            "
            :stepperTitle="'Application is in Review'"
          />

          <Stepper
            :stepCompleted="
              userData.user_status_id == '3' ||
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? true
                : false
            "
            :stepNumber="
              userData.user_status_id == '3' ||
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? ''
                : '3'
            "
            :stepperTitle="'Interview Scheduled'"
          />

          <Stepper
            :stepCompleted="
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? true
                : false
            "
            :stepNumber="
              userData.user_status_id == '4' ||
              userData.user_status_id == '8' ||
              userData.user_status_id == '9'
                ? ''
                : '4'
            "
            :stepperTitle="'Job Offered'"
          />

          <!-- <Stepper
          :stepCompleted="(userData.user_status_id == '8' || userData.user_status_id == '9') ? true : false"
          :stepNumber="(userData.user_status_id == '8' || userData.user_status_id == '9') ? '' : '5'"
          :stepperTitle="'Job Acceptance'"
          /> -->

          <Stepper
            :stepCompleted="
              userData.user_status_id == '8' || userData.user_status_id == '9' ? true : false
            "
            :stepNumber="
              userData.user_status_id == '8' || userData.user_status_id == '9' ? '' : '5'
            "
            :stepperTitle="'Hired'"
          />

          <div v-if="userData.user_status_id == '9'" class="w-1/2">
            <div class="relative mb-2">
              <div
                class="w-10 h-10 mx-auto bg-green-400 rounded-full text-lg text-white flex items-center"
              >
                <span class="text-center text-white w-full">
                  <font-awesome-icon :icon="['fas', 'fa-check']" />
                </span>
              </div>
            </div>

            <div class="text-sm text-center 2xl:text-base font-bold">On Boarding</div>
          </div>

          <div v-else class="w-1/2">
            <div class="relative mb-2">
              <div
                class="w-10 h-10 mx-auto bg-red-400 rounded-full text-lg text-white flex items-center"
              >
                <span class="text-center text-white w-full">6</span>
              </div>
            </div>

            <div class="text-sm text-center 2xl:text-base font-bold">On Boarding</div>
          </div>
        </div>

        <div class="verification-step-description mt-4">
          <div v-if="userData.user_status_id == '1'" class="mt-4 text-center">
            Your application is submitted successfully. We will review the CV and get back to you
            very soon.
          </div>
          <div v-if="userData.user_status_id == '2'" class="mt-4 text-center">
            Your application is in review. We will conteact you for scheduling an interview once the
            review is completed.
          </div>
          <div v-if="userData.user_status_id == '3'" class="mt-4 text-center">
            Your interview time is scheduled as per our last conversation. Please check your email
            for interview time slot.
          </div>
          <div v-if="userData.user_status_id == '4'" class="mt-4 text-center">
            <p>
              Congratulations, We are pleased to extend an offer of employment to you for the
              'Teacher' at our platform.
            </p>
            <p>Please check your mail for the offer letter. Send it back to us as you accept.</p>
            <!-- <button class="offerletter-btn">Download Offer Letter</button> -->
          </div>
          <!-- <div v-if="userData.user_status_id == '20'" class="mt-4 tex8-center">
              <p>Congratulations, We are pleased to extend an offer of employment to you for the 'Mentor' at our platform.</p>
              <p>Please check your mail for the offer letter. Send it back to us as you accept.</p>
          </div> -->

          <div v-if="userData.user_status_id == '8'" class="mt-4 text-center overflow-y-scroll">
            <p>
              congratulations! we have hired you as a teacher in our platform. Please check your
              email for onboarding instructions.
            </p>
            <p>
              Please set your schedule based on assigned courses :

              <!--              <button @click="addCourseSchedule()"-->
              <!--                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-->
              <!--                create schedule-->
              <!--              </button>-->
            </p>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Select a Course
                </label>
              </div>
              <div class="w-full">
                <select
                  v-model="selectedCourse"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Select an Option</option>
                  <option v-for="course in courseList" :key="course" :value="course">
                    {{ course.title }} -{{ course.section_id }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="flex justify-between overflow-y-auto">
              <!-- Card for scheduling -->
              <div class="w-full bg-gray-100 p-4 rounded-lg">
                <div v-if="individualTab" class="border m-2 p-2">
                  <div class="text-1xl font-bold mb-4">Make schedule for a Individual Course</div>
                  <div class="schedules my-4">
                    <div class="next-step">
                      <form class="w-full">
                        <div class="md:flex md:items-center mb-6">
                          <div class="md:w-1/3">
                            <label
                              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                              for="inline-full-name"
                            >
                              Select a Day
                            </label>
                          </div>
                          <div class="w-full">
                            <select
                              v-model="selectedDay"
                              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                              id="grid-state"
                            >
                              <option>Select an Option</option>
                              <option v-for="day in days" :key="day" :value="day.id">
                                {{ day.name }}
                              </option>
                            </select>
                            <div
                              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                            >
                              <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/2 px-3">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-last-name"
                            >
                              Strat Time
                            </label>
                            <input
                              v-model="startTime"
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                              id="grid-last-name"
                              type="time"
                              placeholder="Doe"
                            />
                          </div>
                          <div class="w-full md:w-1/2 px-3">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-last-name"
                            >
                              End Time
                            </label>
                            <input
                              v-model="endTime"
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                              id="grid-last-name"
                              type="time"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          @click="generateCourseSchedule()"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Create Schedule
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Another half-row content -->
              <div class="w-full bg-gray-100 p-4 rounded-lg">
                <!-- Content for the other half of the row -->
                <div v-if="groupTab" class="border m-2 p-2">
                  <div class="text-1xl font-bold mb-4">Make schedule for a Group Course</div>
                  <div class="schedules my-4">
                    <div class="next-step">
                      <form class="w-full">
                        <div class="md:flex md:items-center mb-6">
                          <div class="md:w-1/3">
                            <label
                              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                              for="inline-full-name"
                            >
                              Select a Day
                            </label>
                          </div>
                          <div class="w-full">
                            <Multiselect
                              v-model="selectedDays"
                              :options="days"
                              optionLabel="name"
                              placeholder="Select Days "
                              optionGroupChildren="items"
                              display="chip"
                              class="w-full md:w-20rem block bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded"
                            >
                              <template #option="slotProps">
                                <div
                                  class="align-items-center"
                                  :style="{
                                    backgroundColor: '#f2f2f2',
                                    border: '1px solid #ccc',
                                    padding: '8px'
                                  }"
                                >
                                  <div>{{ slotProps.option.name }}</div>
                                </div>
                              </template>

                              <template #footer>
                                <div class="py-2 px-3">
                                  <b>{{ selectedDays ? selectedDays.length : 0 }}</b>
                                  item{{ (selectedDays ? selectedDays.length : 0) > 1 ? 's' : '' }}
                                  selected .
                                </div>
                              </template>
                            </Multiselect>

                            <!--                            <div-->
                            <!--                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">-->
                            <!--                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">-->
                            <!--                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>-->
                            <!--                              </svg>-->
                            <!--                            </div>-->
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/2 px-3">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-last-name"
                            >
                              Start Time
                            </label>
                            <input
                              v-model="startTime"
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                              id="grid-last-name"
                              type="time"
                              placeholder="Doe"
                            />
                          </div>
                          <div class="w-full md:w-1/2 px-3">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-last-name"
                            >
                              End Time
                            </label>
                            <input
                              v-model="endTime"
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                              id="grid-last-name"
                              type="time"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <button
                          type="button"
                          @click="submitGroupSchedule()"
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Create Schedule
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- ... -->
              </div>
            </div>

            <Modal v-if="modal" :width="'width: 550px'" @modal-close="closeModal">
              <div class="text-1xl font-bold">Make schedule for a Course</div>

              <div class="schedules my-4">
                <div class="next-step">
                  <form class="w-full">
                    <!--                      <div class="md:flex md:items-center mb-6">-->
                    <!--                        <div class="md:w-1/3">-->
                    <!--                          <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">-->
                    <!--                            Select a Course-->
                    <!--                          </label>-->
                    <!--                        </div>-->
                    <!--                        <div class="w-full">-->
                    <!--                          <select v-model="selectedCourse" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500" id="grid-state">-->
                    <!--                            <option>Select an Option</option>-->
                    <!--                            <option v-for="course in courseList" :key="course" :value="course">{{ course.title }}-{{ course.section_id }}</option>-->

                    <!--                          </select>-->
                    <!--                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">-->
                    <!--                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>-->
                    <!--                          </div>-->
                    <!--                        </div>-->
                    <!--                      </div>-->
                    <!--                   -->

                    <div class="md:flex md:items-center mb-6">
                      <div class="md:w-1/3">
                        <label
                          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          for="inline-full-name"
                        >
                          Select a Day
                        </label>
                      </div>
                      <div class="w-full">
                        <select
                          v-model="selectedDay"
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                          id="grid-state"
                        >
                          <option>Select an Option</option>
                          <option v-for="day in days" :key="day" :value="day.id">
                            {{ day.name }}
                          </option>
                        </select>
                        <div
                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        >
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          Strat Time
                        </label>
                        <input
                          v-model="startTime"
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                          id="grid-last-name"
                          type="time"
                          placeholder="Doe"
                        />
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label
                          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-last-name"
                        >
                          End Time
                        </label>
                        <input
                          v-model="endTime"
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
                          id="grid-last-name"
                          type="time"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      @click="generateCourseSchedule()"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Create Schedule
                    </button>
                  </form>
                </div>
              </div>
            </Modal>
          </div>

          <div v-if="userData.user_status_id == '9'" class="mt-4 text-center">
            <p>Welcome Onboard!</p>

            <!-- <table class="mt-4">
                <tr>
                  <th>Course Name</th>
                  <th>Day & Slots</th>
                </tr>
                <tr v-for="course in courseByTeacher" :key="course">
                  <td>Data</td>
                  <td>Data</td>
                </tr>
            </table> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--<style scoped src="vue-multiselect/dist/vue-multiselect.min.css"></style>-->
<style scoped>
.custom-multiselect ::v-deep .custom-option {
  /* Your custom styles here */
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 8px;
}
/* Table */
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

/* Table ends */
.offerletter-btn {
  margin: 20px;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 10px;
}

.teacher-verification {
  width: 100%;
  height: 90vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.verification-content {
  background: #f8f8ff;
  border-radius: 5px;
  padding: 30px;
}

.step-headline {
  display: grid;
  gap: 10px;
}

.step-headline > * {
  justify-self: center;
  align-self: center;
}

.step-headline > span:first-child {
  height: 40px;
  width: 40px;
  background-color: rgb(255, 104, 104);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.step-description {
}

.step-description-last {
  padding: 20px;
  margin-left: 20px;
}

.active-step {
  background-color: green !important;
}

/* New Steps  */

.step-names {
  display: flex;
  gap: 40px;
}

.step-name > * {
  width: 100px;
}

.dash {
  width: 20px;
  height: 2px;
  background: gray;
  margin-top: 20px;
}
</style>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    user: Object
  },
  setup() {
    const router = useRouter()

    const verifyTeacher = () => {
      router.push('/dashboard')
    }

    return {
      verifyTeacher
    }
  }
}
</script>
