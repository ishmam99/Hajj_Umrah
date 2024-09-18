<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="h-full"> 
      <div >
        <Toaster />
           <slot /> <!-- This is where the page content will be rendered -->
      </div>
    </main>

    <foot />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import foot from '@/components/footer.vue'
import Toaster from '/components/ui/toast/Toaster.vue'
import { ref, onMounted } from 'vue'
import { useStore } from '../stores/store.ts'
import { useAuthStore } from '../stores/AuthStore.ts'
const store = useStore()
const authStore = useAuthStore()

const gatprayerTime = async () => {
  try {
    const { data } = await api().get('get-prayer-time')
    console.log(data)
    store.prayertime = data
  }catch (error) {
    console.log(error)
  }
}
const getServiceList = async () => {
  try {
    const { data } = await api().get('get-service-list')
    store.serviceList = data
  console.log(store.serviceList)
  } catch (error) {
    console.log(error)
  }
}
const getEvent = async () => {
  try {
    const { data } = await api().get('get-event')
    // console.log(data)
    store.event = data
  }catch (error) {
    console.log(error)
  }  
}
const getAnnouncement = async () => {
  try {
    const { data } = await api().get('get-announcement')
    // console.log(data)
    store.announcement = data
  }catch (error) {
    console.log(error)
  }   
}
const getDonationType = async () => {
  try {
    const { data } = await api().get('all-donation-types')
    // console.log(data)
    store.donationType = data
  }catch (error) {
    console.log(error)
  }  
}

const volunteerJobList = async () => {
  try {
    const { data } = await api().get('volunteer-approved-job-list', {
    })

    store.volunteerJobList = data.data
    console.log(store.volunteerJobList)
  } catch (error) {
    console.log(error)
  }
}
onMounted(async () => {
  // gatprayerTime()
  getEvent()
  getAnnouncement()
  getServiceList()
  getDonationType()
  volunteerJobList()
})
</script>
