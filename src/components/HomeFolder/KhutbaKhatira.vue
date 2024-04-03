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

onMounted(async () => {
  khutbahList()
  khatiraList()
})
</script>

<template>
  <section class="bg-slate-100 py-10 px-[5%]">
    <div>
      <h2 class="text-3xl font-bold pb-6 uppercase">Khutba</h2>
      <div class="grid grid-cols-3 gap-10">
        <div
          class="bg-white shadow-lg rounded-lg overflow-hidden"
          v-for="(khutbah, index) in store.khutbahList"
          :key="index"
        >
          <video class="w-full h-64 object-cover object-center rounded-md" controls>
            <source :src="khutbah.video" type="video/mp4" autoplay="false" />
          </video>
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ khutbah.topic }}</h3>
            <p class="text-gray-600 mb-2">{{ khutbah.speaker }}</p>
            <p class="text-gray-600 mb-4">{{ khutbah.created_at }}</p>
            <p class="text-gray-700">{{ khutbah.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-3xl font-bold pb-6 pt-10 uppercase">Khatira</h2>
      <div class="grid grid-cols-3 gap-10">
        <div
          class="bg-white shadow-lg rounded-lg overflow-hidden"
          v-for="(khatira, index) in store.khatiraList"
          :key="index"
        >
          <video class="w-full h-64 object-cover object-center rounded-md" controls>
            <source :src="khatira.video" type="video/mp4" autoplay="false" />
          </video>
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ khatira.topic }}</h3>
            <p class="text-gray-600 mb-2">{{ khatira.speaker }}</p>
            <p class="text-gray-600 mb-4">{{ khatira.created_at }}</p>
            <p class="text-gray-700">{{ khatira.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
