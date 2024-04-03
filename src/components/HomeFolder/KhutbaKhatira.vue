<script setup>
import { useMediaStore } from '@/stores/mediaDashboard.ts'
import { ref, onMounted, computed } from 'vue'

import img4 from '@/assets/image/commitees/12.jpg'
import img5 from '@/assets/image/commitees/13.jpg'
import img6 from '@/assets/image/commitees/14.jpg'

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

onMounted(async () => {
  khutbahList()
})

const khatiras = ref([
  {
    title: 'Friday Khutba',
    date: 'March 27, 2024',
    speaker: 'Imam Ali',
    description:
      'Join us for the Friday Khutba at 1:30 PM. This week’s topic is "The Importance of Patience in Islam". All are welcome!',
    image: img4
  },
  {
    title: 'Friday Sermon',
    date: 'April 3, 2024',
    speaker: 'Mufti Yusuf',
    description:
      'Please join us for the Friday Sermon at 1:30 PM. This week’s topic is "Kindness and Compassion in Islam". All community members are encouraged to attend.',
    image: img5
  },
  {
    title: 'Jumuah Reminder',
    date: 'April 10, 2024',
    speaker: 'Sheikh Ahmed',
    description:
      'Reminder for the Jumuah Khutba at 1:30 PM. This week’s topic is "Strengthening Family Bonds in Islam". Bring your family and friends along!',
    image: img6
  }
])
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
          v-for="(khatira, index) in khatiras"
          :key="index"
        >
          <img
            class="w-full h-64 object-cover object-center"
            :src="khatira.image"
            alt="khatira Image"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ khatira.title }}</h3>
            <p class="text-gray-600 mb-2">{{ khatira.speaker }}</p>
            <p class="text-gray-600 mb-4">{{ khatira.date }}</p>
            <p class="text-gray-700">{{ khatira.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
