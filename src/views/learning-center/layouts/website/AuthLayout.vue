<script setup>
import Header from '/src/views/learning-center/layouts/website/organs/HeaderLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
   <DefaultLayout>
    <div class="auth-content mt-14">
      <div class="banner">

      </div>
      <div class="input-form">
        <slot />
      </div>
    </div>
    </DefaultLayout>
</template>

<style scoped>
.input-form {
  padding: 20px 0;
  height: 90vh;
  overflow: auto;
  background-color: #B5E2FA;
}
.main-header {
  height: 10vh !important;
}
.auth-content {
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
}

.banner {
  background-image: url('@/assets/images/auth-banner.png');
  background-repeat: no-repeat;
  background-size: cover;
}

@media only screen and (max-width: 768px) {
  .auth-content {
    height: 90vh;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
  }
}

@media only screen and (max-width: 425px) {

  .auth-content {
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>