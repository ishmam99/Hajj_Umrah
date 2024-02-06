<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main class="h-full">
      <div>
        <Toaster />
        <slot />
        <!-- This is where the page content will be rendered -->
      </div>
    </main>

    <foot />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import foot from '../components/footer.vue'
import Toaster from '/components/ui/toast/Toaster.vue'
import { ref, onMounted } from 'vue'
import { useStore } from '../stores/store.ts'
import { useAuthStore } from '../stores/AuthStore.ts'
const store = useStore()
const authStore = useAuthStore()

const gatprayerTime = async () => {
  const { data } = await api().get('get-prayer-time')
  console.log(data)
  store.prayertime = data
}
// const getCategories =async() =>{
//     const { data } = await api().get('product-category')
//     let categoryList = []
//     data.map((c) => {
//         let cat = c.category
//         cat.products = c.products
//         categoryList.push(cat)
//     })
//     store.category = categoryList
// }

const getServiceList = async () => {
  const { data } = await api().get('get-service-list')
  store.serviceList = data
  // console.log(store.serviceList[0])
}
const getEvent = async () => {
  const { data } = await api().get('get-event')
  // console.log(data)
  store.event = data
}
const getAnnouncement = async () => {
  const { data } = await api().get('get-announcement')
  // console.log(data)
  store.announcement = data
}
const getDonationType = async () => {
  const { data } = await api().get('all-donation-types')
  // console.log(data)
  store.donationType = data
}
onMounted(async () => {
  gatprayerTime()
  getEvent()
  getAnnouncement()
  getServiceList()
  getDonationType()
})
</script>
