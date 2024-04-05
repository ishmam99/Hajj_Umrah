<template>
  <div class="py-[30px] px-[5%] bg-slate-100">
    <h1 class="text-3xl font-bold uppercase pb-3">Upcoming Event</h1>
    <div class="flex gap-36">
      <div class="w-1/3">
        <img src="/src/assets/image/home/h6.png" alt="" class="w-full" />
      </div>
      <div class="w-2/3 grid grid-cols-3">
        <div>
          <img src="/src/assets/image/home/h7.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/image/home/h8.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/image/home/h9.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/image/home/h10.png" alt="" />
        </div>
        <div>
          <img src="/src/assets/image/home/h11.png" alt="" />
        </div>
        <div class="flex items-center justify-center">
          <router-link
            to="/activity/event"
            class="px-5 py-2 bg-gray-300 text-sm text-gray-600 font-bold rounded-3xl"
            >See More</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref , onMounted } from 'vue'
import {useAccountStore} from '@/stores/accountStore';

const store = useAccountStore()
const loading = ref(false)
const lastFunds = ref([]);

const fundraisers = async () => {
  loading.value = true
  try {
    const { data } = await api().get('fundraise-event-list')
    store.fundList = data.data
    const myData = store.fundList;
    lastFunds.value = myData.slice(myData.length - 3, myData.length - 0);
    console.log('lastFunds Get api',lastFunds);
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}


onMounted(async () => {
  fundraisers()
})
</script>
