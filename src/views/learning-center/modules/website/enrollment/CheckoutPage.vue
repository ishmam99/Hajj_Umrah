<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
import { useRouter } from 'vue-router'
import axios from 'axios'
// import {useUserStore} from "@/stores/learning-center/userStore";

const swal = inject('$swal')
// import { StripeCheckout } from '@vue-stripe/vue-stripe';

const commonStore = useCommonStore()
const courseStore = useCourseStore()
const router = useRouter()

let enrollmentInfo = ref(JSON.parse(localStorage.getItem('enrollment_info')))
let courseSection = ref(JSON.parse(localStorage.getItem('course-section')))
let coursePrice = ref(Number(courseSection.value.cost_per_month))
let expMonth = ref()
let expYear = ref()
let cardName = ref()
let cardNumber = ref()
let cvc = ref()

async function makePayment() {
  commonStore.loading = true
  try {
    const response = await axios.post(
      import.meta.env.VITE_ELEARNING_BASE_API + 'idl-payment',
      {
        amount: coursePrice.value,
        exp_month: expMonth.value,
        number: cardNumber.value,
        transaction_date: new Date().toLocaleDateString('en-ZA'),
        cvc: cvc.value,
        exp_year: expYear.value,
        user_id: enrollmentInfo.value.student_id,
        no_of_payment: 1,
        user_type: enrollmentInfo.value.student_type,
        enrollment_id: enrollmentInfo.value.id,
      }
    )

    commonStore.loading = false

    console.log(response)

    if (response.data.success == true) {
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Congratulations ! The Payment was Successul!',
        showConfirmButton: false,
        timer: 1500,
      })

      coursePrice.value = ''
      expMonth.value = ''
      expYear.value = ''
      cardName.value = ''
      cardNumber.value = ''
      cvc.value = ''

      router.push('/dashboard')
    } else {
      swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Something went wrong',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  } catch (e) {
    commonStore.loading = false
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Payment information was incorrect',
      showConfirmButton: false,
      timer: 1500,
    })
  }
}

onMounted(() => {
  courseStore.courseInfo(enrollmentInfo.value.course_id)
  // courseStore.getTeacherDetails(courseInfo.value['teacher_id'])
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
        <p class="billing-info-title">Course Info</p>
        <p class="text-sm mt-4">
          Course Unique ID:
          <span class="font-bold text-lg">{{
            courseSection.course_unique_id
          }}</span>
        </p>
        <p class="text-sm">
          Course Type:
          <span class="font-bold text-lg">{{ courseSection.course_type }}</span>
        </p>
        <p class="text-sm">
          Cost per Month:
          <span class="font-bold text-lg"
            >${{ courseSection.cost_per_month }}</span
          >
        </p>
      </div>
    </div>

    <div class="billing">
      <div class="billing-info">
        <!-- <p class="billing-info-title">Course Info</p>
                <p class="font-bold text-lg mt-2">Course Unique ID: {{ courseSection.course_unique_id }}</p> -->

        <p class="billing-info-title">
          Payment Information (Credit Card/Debit Card)
        </p>

        <div class="payment-form mt-4">
          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="card-name"
                >
                  Card Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="cardName"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="card-name"
                  type="text"
                  placeholder=""
                />
                <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="card-number"
                >
                  Card Number <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="cardNumber"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="card-number"
                  type="text"
                  placeholder=""
                />
                <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="exp-month"
                >
                  Expire Month <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="expMonth"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="exp-month"
                  type="text"
                  placeholder=""
                />
                <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="exp-year"
                >
                  Expire Year <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="expYear"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="exp-year"
                  type="text"
                  placeholder=""
                />
                <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="cvc"
                >
                  CVC <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="cvc"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="cvc"
                  type="text"
                  placeholder=""
                />
                <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Amount/per month (USD)
                </label>
                <input
                  disabled
                  v-model="coursePrice"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
              </div>
            </div>

            <button
              @click="$router.go(-1)"
              type="button"
              class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
            >
              Cancel
            </button>

            <button
              @click="makePayment"
              type="button"
              class="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2"
            >
              Make Payment
            </button>
          </form>
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
  padding: 20px 0;
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
