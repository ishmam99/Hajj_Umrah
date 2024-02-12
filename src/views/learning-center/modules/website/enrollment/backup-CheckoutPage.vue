<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import RatingComponent from '@/components/RatingComponent'
// import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
// import RadioButton from '@/components/form/RadioComponent.vue'
import Modal from '@/components/modal/ModalComponent.vue'
import { StripeElementPayment } from '@vue-stripe/vue-stripe'

// const router = useRouter()
const commonStore = useCommonStore()
const courseStore = useCourseStore()

const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY

const paymentIntent = {
  amount: 2000,
  currency: 'usd',
  automatic_payment_methods: { enabled: true },
}

const pk = publishableKey

const elementsOptions = {
  appearance: {}, // appearance options
}

const confirmParams = {
  return_url: 'http://localhost:8080/success', // success url
}

async function generatePaymentIntent() {
  elementsOptions.clientSecret = paymentIntent.client_secret
}

const paymentRef = ref()
function pay() {
  paymentRef.value.submit()
}

let modal = ref(false)
let applying = ref(JSON.parse(localStorage.getItem('applying')))

function checkOut() {
  modal.value = true
}

function closeModal() {
  modal.value = false
}

function test(da) {
  console.log(da)
}

function total(price) {
  return price
}

// const checkoutRef = ref()

// function makePayment() {
//    checkoutRef.value.redirectToCheckout().then(response => {
//     console.log(response)
//    })
// }

onMounted(() => {
  courseStore.courseInfo(applying.value)
  commonStore.countryList()
  generatePaymentIntent()
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
            <img
              v-else
              src="@/assets/images/cat-thumb.png"
              width="290"
              height="120"
            />
          </div>
          <div class="item-details">
            <h3>{{ courseStore.courseDetails.title }}</h3>
            <p
              v-html="courseStore.courseDetails.description"
              class="item-details-description"
            ></p>
            <h5>Course Duration - {{ courseStore.courseDetails.duration }}</h5>
            <RatingComponent />
          </div>
          <div class="item-price">${{ courseStore.courseDetails.price }}</div>
        </div>
        <p class="billing-info-title">Billing address</p>
        <div class="billing-address">
          <div class="billing-address-input">
            <label for=""><small>Country</small></label>
            <Select2
              id="select-2"
              :placeholder="'Select your country'"
              v-model="myValue"
              :options="commonStore.countries"
              :settings="{ width: '100%' }"
              @select="test($event)"
            />
            <!-- <select name="" id="">
                            <option value="">Select your country</option>
                            <option v-for="country in commonStore.countries" :key="country" :value="country.id">{{ country.name }}</option>
                        </select> -->
          </div>

          <div class="billing-address-input">
            <label for=""><small>ZIP</small></label>
            <input type="text" placeholder="" />
          </div>
        </div>

        <p class="billing-info-title">Select payment method</p>
        <div class="payment-method">
          <div class="radio-input">
            <input
              type="radio"
              id="credit_card"
              name="payment_method"
              value="Credit card"
              checked
            />
            <!-- <RadioButton :Name="'payment_method'" :Id="'cards'" :IsChecked="true" /> -->
            <label for="credit_card"
              ><div class="radio-label">
                <div>
                  <i class="fa-solid fa-credit-card"></i> Payment via credit
                  card/debit card
                </div>
                <img src="@/assets/images/payment/cards.png" alt="" /></div
            ></label>
          </div>
          <div class="radio-input">
            <!-- <RadioButton :Name="'payment_method'" :Id="'paypal'" :IsChecked="false" /> -->
            <input
              type="radio"
              id="paypal"
              name="payment_method"
              value="Paypal"
            />
            <label for="paypal"
              ><div class="radio-label">
                <div>
                  <i class="fa-brands fa-paypal"></i> Payment via Paypal
                </div>
                <img src="@/assets/images/payment/paypal.png" alt="" /></div
            ></label>
          </div>
        </div>
      </div>
      <div class="total">
        <div class="costs">
          <div class="subtotal">
            <span>Subtotal</span>
            <span class="amount">${{ courseStore.courseDetails.price }}</span>
          </div>
          <div class="tax">
            <span>Tax</span>
            <span class="amount">$0.00</span>
          </div>
          <div class="final-pay">
            <span>Total</span>
            <span class="amount"
              >${{ total(courseStore.courseDetails.price) }}</span
            >
          </div>
        </div>
        <div class="checkout-btn">
          <button @click="checkOut">
            Make Payment <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
          </button>
        </div>
      </div>

      <Modal v-if="modal" :width="'width: 400px'" @modal-close="closeModal">
        <div class="card-images">
          <img src="@/assets/images/payment/cards.png" alt="" />
        </div>
        <div class="card-form">
          <div class="card-number">
            <label for="">CARD NUMBER</label>
            <input type="text" placeholder="7498 5526 3578 1478" />
          </div>
          <div class="cvc">
            <label for="">CVC</label>
            <input type="text" placeholder="253" />
          </div>
          <div class="card-holder-name">
            <label for="">CARD HOLDER NAME</label>
            <input type="text" placeholder="Mr. Jamil" />
          </div>

          <div class="expiration-date">
            <label for="">EXPIRATION DATE</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div class="pay">
            <StripeElementPayment
              ref="paymentRef"
              :pk="pk"
              :elements-options="elementsOptions"
              :confirm-params="confirmParams"
            />
            <button @click="pay()">
              <font-awesome-icon :icon="['fas', 'fa-lock']" /> &nbsp; Pay ${{
                total(courseStore.courseDetails.price)
              }}
            </button>
          </div>
        </div>
      </Modal>
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
  grid-template-columns: 1fr 0.4fr;
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
  grid-template-columns: 0.2fr 0.5fr 0.3fr;
}

.billing-info .item > * {
  padding: 20px;
}

.item-details > * {
  padding-bottom: 5px;
}

.item-price {
  display: flex;
  justify-self: end;
  font-weight: bold;
}
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
  display: grid;
  gap: 15px;
  margin: 35px 0;
}

.payment-method .radio-input {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100% !important;
}

.payment-method input {
  width: 50px;
}

.payment-method .radio-label {
  background: white;
  width: 690px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.payment-method .radio-label img {
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
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
  margin: 20px;
}
</style>
