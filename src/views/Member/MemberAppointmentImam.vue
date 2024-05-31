<template>
  <div class="px-5 bg-white py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">
      Appointment List
    </p>
    <div class="grid grid-cols-1 gap-5 mt-5">
      <div v-if="store.imamAppoinmentList.lenght>0">
        <div
        v-for="item in store.imamAppoinmentList"
        :key="item.id"
        class="flex justify-between bg-slate-100 p-5 rounded-md shadow-md"
      >
        <p class="text-lg font-bold">
          Preferrd Imam : <span class="font-[500]">{{ item.imam_name }}</span>
        </p>
        <p class="text-lg font-bold">
          Applied Date : <span class="font-[500]">{{ item.created_at }}</span>
        </p>
        <p class="text-blue-600 font-sm font-bold">Pending</p>
      </div>
      </div>
      <div v-else class="flex justify-center items-center font-semibold text-gray-600 text-3xl">
        No data found
      </div>
      
    </div>


  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useMemberStore } from '/src/stores/memberStore'
import { useAuthStore } from '@/stores/AuthStore'

const store = useMemberStore()

const authStore = useAuthStore()

const imamAppoinmentList = async () => {
  try {
    const { data } = await api().get('question-list', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    store.imamAppoinmentList = data.data
    console.log(store.imamAppoinmentList)
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  imamAppoinmentList()
})
</script>
