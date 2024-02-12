<script setup>
import Header from '/src/views/learning-center/layouts/dashboard/organs/HeaderLayout.vue'
import HeaderTwo from '/src/views/learning-center/layouts/dashboard/organs/HeaderLayoutTwo.vue'
import Sidebar from '/src/views/learning-center/layouts/dashboard/organs/SidebarLayout.vue'
import LaodingComp from '@/components/spinner/RollerComponent.vue'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
  <div class="loader" v-if="commonStore.loading == true">
    <LaodingComp></LaodingComp>
  </div>
  <div class="fixed top-0 w-full z-50">
    <Header v-if="user.role_id == 4" />
    <HeaderTwo v-else />
  </div>

  <div class="dash-content">
    <div>
      <Sidebar class="mt-10" />
    </div>
    <div class="mt-16">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main-header {
  height: 10vh !important;
}

.dash-content {
  /* height: 90vh !important; */
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.18fr 1fr;
}
</style>
