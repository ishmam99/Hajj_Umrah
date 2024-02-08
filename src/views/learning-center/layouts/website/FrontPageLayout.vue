<script setup>
import Header from '/src/views/learning-center/layouts/website/organs/HeaderLayout.vue'
import Footer from '/src/views/learning-center/layouts/website/organs/FooterLayout.vue'
import LaodingComp from '@/components/spinner/RollerComponent.vue'
import { useCommonStore } from '@/stores/common'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
const commonStore = useCommonStore()
</script>

<template>
  <DefaultLayout>
    <div class="content">
    <slot />
  </div>
  </DefaultLayout>
  <!-- <div class="" v-if="commonStore.loading == true">
    <LaodingComp></LaodingComp>
  </div> -->
  <!-- <Navbar />
  
  <Footer /> -->
</template>

<style scoped>
.main-header {
  height: 10vh;
}

.content {
  min-height: 50vh;
}

.footer {
  height: 40vh;
}
</style>
