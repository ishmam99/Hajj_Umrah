<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/common'
import Modal from '@/components/modal/ModalComponent.vue'
import axios from 'axios'

const commonStore = useCommonStore()
const router = useRouter()
const dayApi = 'course-day-slots'
const daySlotApi = 'course-time-slots/'

let modal = ref(false)
let teacherListModal = ref(false)
let checkoutModal = ref(false)

let scheduleOption = ref('')

let daySelected = ref(false)
let selectedDay = ref()
let selectedSlots = ref([])
let selectedDaySlots = ref([])

let schedule = ref(JSON.parse(localStorage.getItem('schedule')) ?? [])
let scheduleAdvisor = ref(
  JSON.parse(localStorage.getItem('schedule-by-advisor')) ?? []
)

let cartDaySlots = ref([])
let dayArray = ref([])
let msg = ref()

let availableDays = ref([])
let availableDaySlots = ref([])

let tabIndex = ref(1)

let enrollmentStage = ref(localStorage.getItem('enroll-stage') ?? 1)
let advisorEnrollmentStage = ref(
  localStorage.getItem('enroll-stage-advisor') ?? 1
)

function tab(index) {
  tabIndex.value = index
}

function checkEnrollmentStage(stage) {
  let actualStage = JSON.parse(localStorage.getItem('enroll-stage'))
  if (actualStage >= stage) {
    enrollmentStage.value = stage
  } else {
    alert('That step is unaccessible')
  }
}

function reset() {
  enrollmentStage.value = 1
  schedule.value = []
  localStorage.removeItem('enroll-stage')
  localStorage.removeItem('schedule')
}

function checkout() {
  router.push('/learning-center/checkout')
}

function selectDay(option, day) {
  modal.value = true
  daySelected.value = true
  scheduleOption.value = option
  selectedDay.value = day.day_name
  getDaySlots(day.id)
  // selectedDaySlots.value = availableDaySlots.value
  dayArray.value = day
  isActive(day, option)
}

function isActive(day, option) {
  var index
  var getSchedule
  if (option != 'advisor') {
    index = schedule.value
      .map((object) => object[0])
      .map((object) => object['day'])
      .map((object) => object)
      .indexOf(day.day_name)
    getSchedule = schedule.value
  } else {
    index = scheduleAdvisor.value
      .map((object) => object[0])
      .map((object) => object['day'])
      .map((object) => object)
      .indexOf(day.day_name)
    getSchedule = scheduleAdvisor.value
  }

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

function selectSlots(scheduleOption, slots) {
  let modifiedSlot = tConvert(slots.start_time) + '-' + tConvert(slots.end_time)
  isActive(scheduleOption, dayArray.value)
  if (cartDaySlots.value.includes(modifiedSlot)) {
    let index = cartDaySlots.value.indexOf(modifiedSlot)
    cartDaySlots.value.splice(index, 1)
  } else if (selectedSlots.value.includes(modifiedSlot)) {
    let index = selectedSlots.value
      .map((object) => object)
      .indexOf(modifiedSlot)
    selectedSlots.value.splice(index, 1)
  } else {
    selectedSlots.value = cartDaySlots.value
    selectedSlots.value.push(modifiedSlot)
  }
  console.log(selectedSlots.value)
}

function removeDay() {
  if (
    schedule.value
      .map((object) => object[0])
      .map((object) => object['day'])
      .includes(selectedDay.value)
  ) {
    let index = schedule.value
      .map((object) => object[0])
      .map((object) => object['day'])
      .indexOf(selectedDay.value)
    schedule.value.splice(index, 1)
    selectedDay.value = ''
    selectedSlots.value = []
    localStorage.setItem('schedule', JSON.stringify(schedule.value))
  } else {
    selectedDay.value = ''
    selectedSlots.value = []
  }
  modal.value = false
  selectedDaySlots.value = []
  msg.value = ''
}

function confirmSlots() {
  var getSchedule
  var localStorageItem

  if (
    selectedSlots.value != '' ||
    cartDaySlots.value.map((object) => object) != ''
  ) {
    let object = {
      days: [
        {
          day: selectedDay.value,
          slots:
            selectedSlots.value != ''
              ? selectedSlots.value
              : cartDaySlots.value.map((object) => object),
        },
      ],
    }

    if (scheduleOption.value != 'advisor') {
      getSchedule = schedule.value
      localStorageItem = 'schedule'
    } else {
      getSchedule = scheduleAdvisor.value
      localStorageItem = 'schedule-by-advisor'
    }

    if (
      !getSchedule
        .map((object) => object[0])
        .map((object) => object['day'])
        .includes(selectedDay.value)
    ) {
      getSchedule.push(object.days)
    } else {
      let index = getSchedule
        .map((object) => object[0])
        .map((object) => object['day'])
        .indexOf(selectedDay.value)
      getSchedule.splice(index, 1)
      getSchedule.push(object.days)
    }

    localStorage.setItem(localStorageItem, JSON.stringify(getSchedule))

    selectedSlots.value = []
    modal.value = false
    selectedDaySlots.value = []
    msg.value = ''
    selectedDay.value = ''
  } else {
    msg.value = 'You must select at least one slot to confirm'
  }
}

function saveDays() {
  if (localStorage.getItem('schedule')) {
    enrollmentStage.value = 2
    localStorage.setItem('enroll-stage', 2)
  } else {
    alert('You must select an slot before proceed')
  }
}

function selectTeacher(slotId) {
  console.log(slotId)
  teacherListModal.value = true
}

// Schedule by advisor

function checkEnrollmentStageAdvisor(stage) {
  let actualStageAdvisor = JSON.parse(
    localStorage.getItem('enroll-stage-advisor')
  )
  if (actualStageAdvisor >= stage) {
    advisorEnrollmentStage.value = stage
  } else {
    alert('That step is unaccessible')
  }
}

function scheduleByAdvisor() {
  checkoutModal.value = true
}

function proceedToScheduling() {
  if (!localStorage.getItem('enroll-stage-advisor')) {
    advisorEnrollmentStage.value = 2
    localStorage.setItem('enroll-stage-advisor', 2)
  }
}

function resetAdvisor() {
  advisorEnrollmentStage.value = 1
  localStorage.removeItem('enroll-stage-advisor')
  localStorage.removeItem('schedule-by-advisor')
}

// Common

function closeModal(response) {
  modal.value = response
  teacherListModal.value = response
  teacherListModal.value = response
  checkoutModal.value = response
  selectedDay.value = ''
}

function getDayList() {
  axios
    .get(import.meta.env.VITE_ELEARNING_BASE_API + dayApi)
    .then((response) => {
      availableDays.value = response.data.data
    })
}

function getDaySlots(id) {
  axios
    .get(import.meta.env.VITE_ELEARNING_BASE_API + daySlotApi + id)
    .then((response) => {
      console.log(response.data)
      availableDaySlots.value = response.data
    })
}

function tConvert(time) {
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

onMounted(() => {
  getDayList()
  getDaySlots()
  commonStore.loading = false
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="page-details">
    <h4>Arabic Language Learning</h4>
    <h2>Course Enrollment</h2>
    <div class="tab">
      <div class="tab-buttons">
        <button
          @click="tab(1)"
          :class="tabIndex == 1 ? 'tab-button active' : 'tab-button'"
        >
          Schedule by Yourself
        </button>
        <button
          @click="tab(2)"
          :class="tabIndex == 2 ? 'tab-button active' : 'tab-button'"
        >
          Take Help from Advisor
        </button>
      </div>
      <div class="tabs">
        <div v-if="tabIndex == 1">
          <div class="progress">
            <div class="progress-bar">
              <div class="steps">
                <div @click="checkEnrollmentStage(1)" class="step-circle"></div>
                <div class="step-text">Schedule</div>
              </div>
              <div
                :class="
                  enrollmentStage == 2 ? 'step-bar completed' : 'step-bar'
                "
              ></div>
              <div class="steps">
                <div @click="checkEnrollmentStage(2)" class="step-circle"></div>
                <div class="step-text">Teacher</div>
              </div>
            </div>
          </div>
          <div class="tab-headline">
            <span v-if="enrollmentStage == 1">Schedule</span>
            <span v-if="enrollmentStage == 2">Select Teacher</span>
          </div>
          <div v-if="enrollmentStage == 1" class="day-one">
            <div class="title">Available Days</div>
            <div class="schedules">
              <span
                v-for="day in availableDays"
                :key="day"
                @click="selectDay('', day)"
                :class="
                  (selectedDay == day.day_name ||
                    schedule
                      .map((object) => object[0])
                      .map((object) => object['day'])
                      .includes(day.day_name) == true) &&
                  schedule
                    .map((object) => object[0])
                    .map((object) => object['slots']) != ''
                    ? 'schedule schedule-active'
                    : 'schedule'
                "
              >
                {{ day.day_name }}
              </span>
            </div>
          </div>
          <div v-if="enrollmentStage == 2" class="select-teacher">
            <div
              v-for="(daySlot, index) in schedule.map((object) => object[0])"
              :key="index"
              class="teacher-slot"
            >
              <div class="selected-days">
                <span class="selected-day day-active">
                  {{ daySlot.day }}
                </span>
              </div>
              <div class="selected-slots">
                <div
                  v-for="slot in daySlot.slots"
                  :key="slot"
                  class="selected-slot"
                >
                  <span>{{ slot }}</span>
                  <button @click="selectTeacher(1)" class="select-teacher-btn">
                    Select teacher
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="next-step">
            <button @click="reset">
              Reset <font-awesome-icon :icon="['fas', 'fa-refresh']" />
            </button>
            <button v-if="enrollmentStage != 2" @click="saveDays">
              Next <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
            </button>
            <button v-else @click="checkout">
              Checkout <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
            </button>
          </div>
        </div>
        <div v-else-if="tabIndex == 2">
          <div class="progress">
            <div class="progress-bar">
              <div class="steps">
                <div
                  @click="checkEnrollmentStageAdvisor(1)"
                  class="step-circle"
                ></div>
                <div class="step-text">Optionss</div>
              </div>
              <div
                :class="
                  advisorEnrollmentStage == 2
                    ? 'step-bar completed'
                    : 'step-bar'
                "
              ></div>
              <div class="steps">
                <div
                  @click="checkEnrollmentStageAdvisor(2)"
                  class="step-circle"
                ></div>
                <div class="step-text">Schedule</div>
              </div>
            </div>
          </div>
          <div class="tab-headline">
            <span v-if="advisorEnrollmentStage == 1"
              >Do you have any preferable day ?</span
            >
            <span v-if="advisorEnrollmentStage == 2">Schedule</span>
          </div>
          <div v-if="advisorEnrollmentStage == 1" class="day-one">
            <div class="schedules">
              <div class="next-step">
                <button @click="proceedToScheduling">
                  Yes <font-awesome-icon :icon="['fas', 'fa-refresh']" />
                </button>
                <button
                  v-if="advisorEnrollmentStage != 2"
                  @click="scheduleByAdvisor"
                >
                  No <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
                </button>
              </div>
            </div>
          </div>
          <div v-if="advisorEnrollmentStage == 2" class="day-one">
            <div class="title">Available Days</div>
            <div class="schedules">
              <span
                v-for="day in availableDays"
                :key="day"
                @click="selectDay('advisor', day)"
                :class="
                  (selectedDay == day.day_name ||
                    scheduleAdvisor
                      .map((object) => object[0])
                      .map((object) => object['day'])
                      .includes(day.day_name) == true) &&
                  scheduleAdvisor
                    .map((object) => object[0])
                    .map((object) => object['slots']) != ''
                    ? 'schedule schedule-active'
                    : 'schedule'
                "
              >
                {{ day.day_name }}
              </span>
            </div>
          </div>
          <div class="next-step">
            <button v-if="advisorEnrollmentStage != 1" @click="resetAdvisor">
              Reset <font-awesome-icon :icon="['fas', 'fa-refresh']" />
            </button>
            <button v-if="advisorEnrollmentStage == 2" @click="checkout">
              Checkout <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
            </button>
            <!-- <button v-if="advisorEnrollmentStage == 2" @click="checkout">Checkout <font-awesome-icon :icon="['fas', 'fa-arrow-right']" /></button> -->
          </div>
        </div>
      </div>
    </div>

    <Modal v-if="modal" :width="'width: 550px'" @modal-close="closeModal">
      <div v-if="daySelected" class="slots">
        <div class="title">Available slots for {{ selectedDay }}</div>

        <div v-if="msg" class="error-message">
          {{ msg }}
        </div>

        <div class="slot-wrapper">
          <span
            v-for="slot in availableDaySlots"
            :key="slot"
            @click="selectSlots(scheduleOption, slot)"
            :class="
              selectedSlots.includes(
                tConvert(slot.start_time) + '-' + tConvert(slot.end_time)
              ) ||
              cartDaySlots.includes(
                tConvert(slot.start_time) + '-' + tConvert(slot.end_time)
              )
                ? 'slot slot-active'
                : 'slot'
            "
          >
            {{ tConvert(slot.start_time) }} - {{ tConvert(slot.end_time) }}
          </span>
        </div>
        <div class="confirm-slots">
          <button @click="removeDay">Cancel</button>
          <button @click="confirmSlots">Confirm</button>
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
          <button @click="checkout">Checkout</button>
        </div>
      </div>
    </Modal>

    <Modal
      v-if="teacherListModal"
      :width="'width: 700px'"
      @modal-close="closeModal"
    >
      <div class="teachers">
        <div class="title">Teacher List</div>
        <div class="teacher">
          <div class="pro-pic">
            <img src="@/assets/images/default/pro-pic.jpg" alt="" srcset="" />
          </div>
          <div class="info">
            <div>
              <h3>Rafik Nesr</h3>
              <p>Arabic Language Teacher</p>
              <div>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
              </div>
            </div>
          </div>
          <div class="professional-info">
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-star']" />
              </div>
              <div class="count">4.8</div>
              <div class="info-title">Instructor Ratiing</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-award']" />
              </div>
              <div class="count">250</div>
              <div class="info-title">Reviews</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-user-group']" />
              </div>
              <div class="count">300</div>
              <div class="info-title">Students</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-layer-group']" />
              </div>
              <div class="count">4</div>
              <div class="info-title">Courses</div>
            </div>
          </div>
          <div class="action">
            <button class="not-available">Select</button>
          </div>
        </div>
        <div class="teacher">
          <div class="pro-pic">
            <img src="@/assets/images/default/pro-pic.jpg" alt="" srcset="" />
          </div>
          <div class="info">
            <div>
              <h3>Rafik Nesr</h3>
              <p>Arabic Language Teacher</p>
              <div>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
              </div>
            </div>
          </div>
          <div class="professional-info">
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-star']" />
              </div>
              <div class="count">4.8</div>
              <div class="info-title">Instructor Ratiing</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-award']" />
              </div>
              <div class="count">250</div>
              <div class="info-title">Reviews</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-user-group']" />
              </div>
              <div class="count">300</div>
              <div class="info-title">Students</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-layer-group']" />
              </div>
              <div class="count">4</div>
              <div class="info-title">Courses</div>
            </div>
          </div>
          <div class="action">
            <button class="not-available">Select</button>
          </div>
        </div>
        <div class="teacher">
          <div class="pro-pic">
            <img src="@/assets/images/default/pro-pic.jpg" alt="" srcset="" />
          </div>
          <div class="info">
            <div>
              <h3>Rafik Nesr</h3>
              <p>Arabic Language Teacher</p>
              <div>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
                <p>
                  - Professional Arabic teacher and multilingual translator.
                </p>
              </div>
            </div>
          </div>
          <div class="professional-info">
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-star']" />
              </div>
              <div class="count">4.8</div>
              <div class="info-title">Instructor Ratiing</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-award']" />
              </div>
              <div class="count">250</div>
              <div class="info-title">Reviews</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-user-group']" />
              </div>
              <div class="count">300</div>
              <div class="info-title">Students</div>
            </div>
            <div>
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'fa-layer-group']" />
              </div>
              <div class="count">4</div>
              <div class="info-title">Courses</div>
            </div>
          </div>
          <div class="action">
            <button class="not-available">Select</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<style scoped>
* {
  font-family: math !important;
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
  margin-left: -11px;
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
</style>
