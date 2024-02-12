<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
import { StripeCheckout } from '@vue-stripe/vue-stripe'

const commonStore = useCommonStore()
const courseStore = useCourseStore()

let courseInfo = ref(JSON.parse(localStorage.getItem('course-info')))
let enrollmentDetail = ref(JSON.parse(localStorage.getItem('enrollment-info')))

const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY
const lineItems = [
  {
    //   price: 'price_1NvoTBKW3DXJSnrBkZfxJDVO',
    price: courseInfo.value['price_id'],
    quantity: 1,
  },
]

const successURL = 'http://localhost:8080/learning-center/success'
const cancelURL = 'http://localhost:8080/learning-center/checkout'

const checkoutRef = ref()

// Post checkout

const studentPrefDateTime = enrollmentDetail.value

let formateDaySlot = ref({})
const courseDates = []
const courseStartDate = new Date(2023, 9, 15) // Note: Month is zero-based in JavaScript (9 is October).
const numOfClass = courseInfo.value.number_of_classes

let currentDate = new Date(courseStartDate)

function makePayment() {
  commonStore.loading = true
  checkoutRef.value.redirectToCheckout().then((response) => {
    console.log(response)
    scheduleDateTimeList()
    courseStore.postCheckoutDataProcessing(courseDates, courseInfo.value)
  })
}

// Checkout details

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000)
}

function scheduleDateTimeList() {
  console.log(courseInfo.value)
  while (courseDates.length < numOfClass) {
    for (const x of studentPrefDateTime) {
      const prefDayName = x.day
      const courseTimeSlotsId = x.course_time_slots_id
      const currentDayName = currentDate.toLocaleDateString('en-US', {
        weekday: 'long',
      })
      if (prefDayName === currentDayName) {
        const sTimeParts = x.sTime.split(':')
        const sHour = parseInt(sTimeParts[0], 10)
        const sMinute = parseInt(sTimeParts[1], 10)
        const sSeconds = parseInt(sTimeParts[2], 10)

        const year = currentDate.toLocaleString('default', { year: 'numeric' })
        const month = currentDate.toLocaleString('default', {
          month: '2-digit',
        })
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
          Course_id: courseInfo.value.course_id,
        }

        courseDates.push(formateDaySlot.value)
      }
    }
    currentDate = new Date(addMinutes(currentDate, 24 * 60)) // Add 24 hours.
  }
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
  courseStore.courseInfo(courseInfo.value['course_id'])
  courseStore.getTeacherDetails(courseInfo.value['teacher_id'])
  commonStore.loading = false
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="checkout">
    <h2 class="page-title text-2xl">Checkout</h2>
    <div class="billing">
      <div class="billing-info">
        <p class="billing-info-title">Course</p>
        <div class="item">
          <div class="item-thumb">
            <img
              v-if="courseInfo['thumbnail_image']"
              :src="
                'https://learningcenter.islamicdigitallane.com/images/' +
                courseStore.courseDetails.thumbnail_image
              "
            />
            <img
              v-else
              src="@/assets/images/cat-thumb.png"
              width="290"
              height="120"
            />
          </div>
          <div class="item-details">
            <h3>{{ courseInfo['course_name'] }}</h3>
            <h5>Course Duration - {{ courseInfo['duration'] }}</h5>
            <h5>Price - ${{ courseInfo['course_price'] }}</h5>
          </div>
          <div v-if="courseStore.teacherDetails != null" class="teacher-info">
            <div class="teacher">
              <div class="pro-pic">
                <img
                  src="@/assets/images/default/pro-pic.jpg"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="info">
                <div>
                  <h3>{{ courseStore.teacherDetails.name }}</h3>
                  <p>Noorani course teacher</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="teacher-info">Teacher info not found</div>
        </div>

        <p class="billing-info-title">Class schedule</p>
        <div class="schedule">
          <div>
            <strong
              >Starting from:
              {{ courseInfo.course_starting_date ?? 'TBD' }}</strong
            >
          </div>
          <div
            v-for="slot in courseInfo.enrollmentDetail"
            :key="slot"
            class="slots"
          >
            <p>
              <strong>{{ slot.day }}</strong>
            </p>
            <p>{{ tConvert(slot.sTime) }} - {{ tConvert(slot.eTime) }}</p>
          </div>
        </div>

        <p class="billing-info-title">
          Payment method (Credit card/Debit card)
        </p>
        <div class="payment-method">
          <span
            ><i class="fa-solid fa-credit-card"></i> Credit card/Debit
            card</span
          >
          <img src="@/assets/images/payment/cards.png" alt="" />
        </div>
      </div>
      <div class="totals">
        <div class="checkout-btn">
          <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
          />
          <button v-if="courseInfo['price_id'] != ''" @click="makePayment">
            Make Payment <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
          </button>
          <p v-else class="danger">
            Can't proceed to payment, please contact with your advisor.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout {
  overflow: auto;
}

* {
  font-family: math;
}

.schedule > * {
  margin: 10px 0;
}

.schedule {
  padding: 20px;
}

.danger {
  color: red;
}

/* Payment */

.card-images {
  display: flex;
  justify-content: center;
}
.card-images img {
  width: 60%;
}

.card-form {
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  gap: 10px;
  row-gap: 20px;
  grid-template-areas:
    'card-number card-number cvc'
    'card-holder-name card-holder-name card-holder-name'
    'expiration-date expiration-date expiration-date'
    'pay pay pay';
  margin-top: 20px;
}

.card-form > div {
  display: grid;
  gap: 10px;
}

.card-form > div > label {
  font-size: 14px;
  font-weight: bold;
}

.card-form > div > input {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}

.expiration-date {
  grid-area: expiration-date;
  display: grid;
}

.inputs > select {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}

.inputs {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.card-form .pay {
  grid-area: pay;
}

.card-form .pay button {
  background-color: #005c9d;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
}

.card-number {
  grid-area: card-number;
}

.card-cvc {
  grid-area: cvc;
}

.card-holder-name {
  grid-area: card-holder-name;
}

.exp-day {
  grid-area: exp-day;
}

.exp-month {
  grid-area: exp-month;
}

.exp-year {
  grid-area: exp-year;
}

.select2-container--default .select2-selection--single {
  background-color: #fff !important;
  border-radius: 4px !important;
  height: 40px !important;
  padding: 6px !important;
}

.checkout {
  padding: 50px;
  position: relative;
}

.checkout > * {
  margin: 20px;
}

.billing-info-title {
  padding: 20px;
  border-bottom: 1px dashed gray;
  font-size: 13px;
  font-weight: bold;
}

.billing {
  display: grid;
  gap: 20px;
}

.billing-info {
  box-sizing: border-box;
  background: #b5e2fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
}

.billing-info .item {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
}

.billing-info .item > * {
  padding: 20px;
}

.item-details {
  align-self: center;
}

.item-details > * {
  padding-bottom: 5px;
}

.teacher-info {
  display: flex;
  justify-self: start;
  font-weight: bold;
}

/* Select Teacher */

.teacher-info .title {
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

.teacher-info .teacher {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 20px;
}

.teacher-info .teacher .info {
  padding-right: 15px;
}

.teacher-info .teacher .professional-info {
  display: grid;
}

.teacher-info .teacher .professional-info > div {
  display: grid;
  grid-template-columns: 0.2fr 0.3fr 1fr;
  gap: 10px;
  margin-bottom: 5px;
}

.teacher-info .teacher .professional-info div > * {
  overflow: hidden;
}
.teacher p {
  font-size: 11px;
}
.teacher > * {
  align-self: center;
}
.teacher .pro-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
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

.billing-info .item .item-thumb img {
  width: 100%;
  border-radius: 10px;
}

.item-details-description {
  font-size: small;
}

.billing-address {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
}

.billing-address-input {
  display: grid;
  gap: 5px;
}

.billing-address-input input {
  height: 20px;
  background: white;
  padding: 10px;
}
.payment-method {
  background: white;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  margin-top: 20px;
}

.payment-method img {
  height: 40px;
}

.payment-method .svg-inline--fa {
  color: #0fa3b1;
}

.radio-input > label {
  cursor: pointer;
}

.radio-input img {
  height: 25%;
}

.item-details > * {
  padding-bottom: 5px;
}

.item-price {
  display: flex;
  justify-self: end;
  font-weight: bold;
}
.page-title {
  color: #0fa3b1;
}

.item-details-description {
  font-size: small;
}

/* Checkout Total*/

.total {
  position: relative;
  box-sizing: border-box;
  background: #b5e2fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
}

.total .costs {
  width: 100%;
  padding-top: 20px;
}
.total > .costs > * {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 10px 20px;
}

.tax {
  padding-bottom: 20px !important;
}

.final-pay {
  padding-top: 20px !important;
  border-top: 1px dashed gray;
}

.final-pay .amount {
  font-size: 25px;
  font-weight: bold;
}

.dashed-border > * {
  padding: 10px;
}

.checkout-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkout-btn button {
  width: 100%;
  background: #0fa3b1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
</style>
