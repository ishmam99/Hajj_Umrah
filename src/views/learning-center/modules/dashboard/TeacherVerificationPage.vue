<template>
  <div class="w-full">
    <img src="@/assets/images/dashboard/my-hiring.png" alt="" class="w-full">
    <div class="">
      <TeacherVerificationComponent class="hidden md:block"  :user="user" v-if="shouldRenderTeacherVerification" />
    </div>  
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  padding: 20px;
}

.dashboard-content img {
  width: 100%;
}
</style>
<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import TeacherVerificationComponent from "@/auth/TeacherVerificationComponent.vue";
import { useCommonStore } from "@/stores/common";

const commonStore = useCommonStore()

// Retrieve the user data from local storage
const user = JSON.parse(localStorage.getItem("user")) || {};

// Define a computed property to determine whether to render TeacherVerificationPage
const shouldRenderTeacherVerification = computed(() => {
  return user.role_id === 3 ;
});

</script>
