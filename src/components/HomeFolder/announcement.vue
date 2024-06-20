<template>
  <div class="w-full bg-[url('../assets/image/home/pattern-1.png')] bg-repeat">
    <div class="w-full px-5">
      <h1 class="text-3xl font-bold uppercase pb-3">Announcement</h1>
      <div class="flex gap-36">
        <div class="w-2/6">
          <div class="rounded w-full p-4 bg-white">
            <div class="card-image bg-transparent">
              <!-- {{ lastAnnouncement }} -->
              <img :src="lastAnnouncement?.image" class="h-80 w-full rounded-lg" alt="" />
            </div>
            <p class="card-title mt-6 font-semibold text-3xl text-blue-700">{{ lastAnnouncement?.title }}</p>
            <p class="card-body mt-2">
              {{ lastAnnouncement?.description }}
            </p>
          </div>
          <!-- <p class="footer w-full rounded-md p-6 bg-gray-200 text-end">
            <span class="font-bold">Created</span> at
            <span class="date">{{ lastEvent?.created_at }}</span>
          </p> -->
        </div>
        <div class="w-4/6 grid grid-cols-3 gap-5">
          <div
            v-for="otherAnnouncement in otherAnnouncements"
            :key="otherAnnouncement.id"
            class="card bg-white rounded-lg p-3"
          >
            <!-- <div v-for="otherAnnouncement in store.announcementList" :key="otherAnnouncement.id" class="card bg-gray-200"> -->
            <!-- {{ otherAnnouncement }} -->
            <div class="card-image">
              <img :src="otherAnnouncement?.image" class="w-full h-44 rounded-md" alt="" />
            </div>
            <div class="flex flex-col justify-between">
              <p class="card-title pt-2 pb-1 font-semibold text-2xl text-blue-700">{{ otherAnnouncement?.title }}</p>
              <p class="card-body text-justify flex-grow line-clamp-2" v-html="otherAnnouncement?.description">
              </p>
              <router-link
                :key="otherAnnouncement.id"
                :to="{
                    name: 'announcementDetails',
                    params: {
                        id: otherAnnouncement.id
                    }
                }"
              >
                  <p class="pt-2"><svg class="w-full text-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(100,205,138,1)"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path></svg></p>
                </router-link>
                  <!-- <p class="footer pt-2 w-full text-end">
                <span class="font-bold">Created</span> at
                <span class="date">{{ otherAnnouncement?.created_at }}</span>
              </p> -->
            </div>
          </div>
          <div class="flex items-center justify-center">
            <router-link
              to="announcementList"
              class="px-5 py-2 bg-gray-200 text-sm text-gray-600 font-bold rounded-3xl hover:text-gray-800 hover:bg-gray-100 border hover:border-2 border-teal-500"
              >See More</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useOperationStore } from '@/stores/operationDashboard'

const store = useOperationStore()
const loading = ref(false)
const lastAnnouncement = ref([])
const otherAnnouncements = ref([])

const announcements = async () => {
  loading.value = true
  try {
    const { data } = await api().get('announcement-list')
    store.announcementList = data.data
    const myData = store.announcementList
    lastAnnouncement.value = myData[myData.length - 1]
    otherAnnouncements.value = myData.slice(-6, -1)
    console.log('lastAnnouncement Get api', lastAnnouncement)
    console.log('otherAnnouncements Get api', otherAnnouncements)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  announcements()
})
</script>
