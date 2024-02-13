<script setup>
import VolunteerSideBar from '/src/views/GetInvolved/Volunteers/VolunteerSideBar.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import VolunteerProfile from '/src/views/GetInvolved/Volunteers/VolunteerProfile.vue'
</script>

<template>
  <DefaultLayout>
    <div class="">
      <div class="pt-[80px] flex justify-between">
        <VolunteerSideBar />
        <VolunteerProfile />
      </div>
    </div>
  </DefaultLayout>
</template>
