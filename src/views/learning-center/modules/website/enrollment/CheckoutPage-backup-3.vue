<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
import { StripeCheckout } from '@vue-stripe/vue-stripe'

const commonStore = useCommonStore()
const courseStore = useCourseStore()

let courseInfo = ref(JSON.parse(localStorage.getItem('course-info')))

const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY
// const lineItems = [
//         {
//           price: 'price_1NvoTBKW3DXJSnrBkZfxJDVO',
//           quantity: 1,
//         },
//     ]

// const successURL = import.meta.env.VITE_ROOT_URL+'learning-center/success'
// const cancelURL = import.meta.env.VITE_ROOT_URL+'learning-center/checkout'

const checkoutRef = ref()

function onPaymentSuccess(paymentIntent) {
  // Get the transaction ID from the payment intent.
  const transactionId = paymentIntent.id
  console.log(transactionId)

  // Do something with the transaction ID, such as saving it to your database.
}

// async function buyProduct() {
//     paymentIntent.value = await stripe.createPaymentIntent({
//         amount: 1000,
//         currency: 'usd',
//         payment_method_types: ['card'],
//         customer: 'YOUR_STRIPE_CUSTOMER_ID',
//         description: 'My product payment',
//         metadata: {
//           order_id: 123456,
//         },
//     })

//     makePayment()
// }

// stripe.redirectToCheckout({
//     sessionId: 2,
// });

function makePayment() {
  checkoutRef.value.redirectToCheckout()
}

onMounted(() => {
  courseStore.courseInfo(courseInfo.value['course_id'])
  commonStore.countryList()
  commonStore.loading = false
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div class="checkout">
    <h2 class="page-title">Checkout</h2>
    <div class="billing">
      <div class="billing-info">
        <p class="billing-info-title">Course</p>
        <div class="item">
          <div class="item-thumb">
            <img
              v-if="courseStore.courseDetails.thumbnail_image"
              :src="
                'https://learningcenter.islamicdigitallane.com/images/' +
                courseStore.courseDetails.thumbnail_image
              "
            />
            <img v-else src="@/assets/images/cat-thumb.png" width="290" height="120" />
          </div>
          <div class="item-details">
            <h3>{{ courseInfo['course_name'] }}</h3>
            <h5>Course Duration - {{ courseStore.courseDetails.duration }}</h5>
            <h5>Price - ${{ courseInfo['course_price'] }}</h5>
          </div>
          <div class="teacher-info">
            <div class="teacher">
              <div class="pro-pic">
                <img src="@/assets/images/default/pro-pic.jpg" alt="" srcset="" />
              </div>
              <div class="info">
                <div>
                  <h3>Test Name</h3>
                  <p>Arabic Language Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="billing-info-title">Payment method (Credit card/Debit card)</p>
        <div class="payment-method">
          <span><i class="fa-solid fa-credit-card"></i> Credit card/Debit card</span>
          <img src="@/assets/images/payment/cards.png" alt="" />
        </div>
      </div>
      <div class="totals">
        <div class="checkout-btn">
          <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :amount="1000"
            :currency="USD"
            @success="onPaymentSuccess"
          />
          <button @click="makePayment">
            Make Payment <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
