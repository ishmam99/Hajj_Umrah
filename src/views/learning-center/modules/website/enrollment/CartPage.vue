<script setup>
import RatingComponent from '@/components/RatingComponent'
import { useRouter } from 'vue-router'

const router = useRouter()

function checkOut() {
  router.push('/learning-center')
}
</script>

<template>
  <div class="cart">
    <h2 class="page-title">Shopping Cart</h2>
    <div class="cart-details">
      <p class="cart-info">3 Course in the Cart</p>
      <div class="cart-items">
        <div class="item">
          <div class="item-thumb">
            <img src="@/assets/images/cat-thumb.png" alt="" srcset="" />
          </div>
          <div class="item-details">
            <h3>Quran Recitation -Nadira Program</h3>
            <p class="item-details-description">
              Arabic Language Course: Learn to Pronounce & Write Arabic Alphabet, Read Arabic Words
              & Make Arabic Sentences
            </p>
            <h5>Course Duration - 3 months</h5>
            <RatingComponent />
          </div>
          <div class="item-price">$24.99</div>
        </div>
        <div class="item">
          <div class="item-thumb">
            <img src="@/assets/images/cat-thumb.png" alt="" srcset="" />
          </div>
          <div class="item-details">
            <h3>Quran Recitation -Nadira Program</h3>
            <p class="item-details-description">
              Arabic Language Course: Learn to Pronounce & Write Arabic Alphabet, Read Arabic Words
              & Make Arabic Sentences
            </p>
            <h5>Course Duration - 3 months</h5>
            <RatingComponent />
          </div>
          <div class="item-price">$24.99</div>
        </div>
        <div class="item">
          <div class="item-thumb">
            <img src="@/assets/images/cat-thumb.png" alt="" srcset="" />
          </div>
          <div class="item-details">
            <h3>Quran Recitation -Nadira Program</h3>
            <p class="item-details-description">
              Arabic Language Course: Learn to Pronounce & Write Arabic Alphabet, Read Arabic Words
              & Make Arabic Sentences
            </p>
            <h5>Course Duration - 3 months</h5>
            <RatingComponent />
          </div>
          <div class="item-price">$24.99</div>
        </div>
      </div>
      <div class="cart-total">
        <div class="coupon">
          <input type="text" placeholder="Havecoupon code? Enter here" />
          <button>Apply</button>
        </div>
        <div class="subtotal">
          <span>Subtotal</span>
          <span class="amount">$74.97</span>
        </div>
      </div>
    </div>
    <div class="checkout-btn">
      <button @click="checkOut">
        Checkout <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.cart {
  padding: 50px;
}

.cart > * {
  margin: 20px;
}

.cart-info {
  padding: 20px;
  border-bottom: 1px dashed gray;
  font-size: 13px;
  font-weight: bold;
}

.cart-details {
  box-sizing: border-box;
  background: #b5e2fa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 20px;
}

.cart-items {
  border-bottom: 1px dashed gray;
}

.cart-items .item {
  display: grid;
  grid-template-columns: 0.2fr 0.3fr 0.5fr;
}

.cart-items .item > * {
  padding: 20px;
}
.cart-items .item .item-thumb img {
  width: 100%;
  border-radius: 10px;
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

/* Cart Total*/

.cart-total {
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  padding: 20px;
}

.coupon {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.coupon input {
  outline: none;
  border: none;
  width: 250px;
  padding: 12px;
}

.coupon button {
  outline: none;
  border: none;
  background: #0fa3b1;
  border-radius: 10px;
  width: 120px;
  height: 40px;
  color: white;
}

.cart-total .subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.subtotal .amount {
  font-size: 25px;
  font-weight: bold;
}

.checkout-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.checkout-btn button {
  background: #0fa3b1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: white;
  height: 50px;
  width: 200px;
  font-size: 16px;
  font-weight: bold;
}
</style>
