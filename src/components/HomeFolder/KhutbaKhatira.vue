<script setup>
import { useMediaStore } from '@/stores/mediaDashboard.ts'
import { ref, onMounted, computed } from 'vue'

const store = useMediaStore()
const loading = ref(false)

const khutbahList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('khutba-list')
    store.khutbahList = data.data
    console.log(store.khutbahList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const khatiraList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('khatira-list')
    store.khatiraList = data.data
    console.log(store.khatiraList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const playKhatira = ref()
const playKhutba = ref()

onMounted(async () => {
  khutbahList()
  khatiraList()
})
</script>

<template>
  <section class="bg-slate-0 p-5">
    <div>
      <h2 class="text-3xl font-bold pb-6 uppercase">Khutba</h2>
      <div class="grid grid-cols-3 gap-12">
        <div
          class="bg-white border-8 shadow-lg rounded-lg overflow-hidden"
          v-for="(khutbah, index) in store.khutbahList"
          :key="index"
          @click="playKhutba = khutbah.id"
        >
          <video v-if="playKhutba == khutbah.id" class="w-full h-64 object-cover object-center rounded-md" controls autoplay>
            <source :src="khutbah.video" type="video/mp4"/>
          </video>
          <div v-else class="h-[200px] w-full overflow-hidden flex items-center">
            <img src="/src/assets/image/videoThumb.jpeg" alt="" class="" />
          </div>
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ khutbah.topic }}</h3>
            <p class="text-gray-600 mb-2">{{ khutbah.speaker }}</p>
            <p class="text-gray-600 mb-4">{{ khutbah.created_at }}</p>
            <p class="text-gray-700">{{ khutbah.description }}</p>
          </div>
        </div>
      </div>
      <div class="pt-8 flex justify-center">
        <button class="px-8 py-2 rounded-md bg-blue-500 text-white font-semibold">See All</button>
      </div>
    </div>
    <div>
      <h2 class="text-3xl font-bold pb-6 pt-10 uppercase">Khatira</h2>
      <div class="grid grid-cols-3 gap-12">
        <div
          class="bg-white border-8 shadow-lg rounded-lg overflow-hidden"
          v-for="(khatira, index) in store.khatiraList"
          :key="index"
          @click="playKhatira = khatira.id"
        >
          <video
            v-if="playKhatira == khatira.id"
            class="w-full h-64 object-cover object-center rounded-md"
            controls autoplay
          >
            <source :src="khatira.video" type="video/mp4" />
          </video>
          <div v-else class="h-[200px] w-full overflow-hidden flex items-center">
            <img src="/src/assets/image/videoThumb.jpeg" alt="" class="" />
          </div>
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ khatira.topic }}</h3>
            <p class="text-gray-600 mb-2">{{ khatira.speaker }}</p>
            <p class="text-gray-600 mb-4">{{ khatira.created_at }}</p>
            <p class="text-gray-700">{{ khatira.description }}</p>
          </div>
        </div>
      </div>
      <div class="pt-8 flex justify-center">
        <button class="px-8 py-2 rounded-md bg-blue-500 text-white font-semibold">See All</button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
