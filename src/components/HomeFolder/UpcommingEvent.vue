<template>
  <div class="py-[30px] px-[5%] bg-slate-100">
    <h1 class="text-3xl font-bold uppercase pb-3">Upcoming Event</h1>
    <div class="flex gap-36">
      <div class="w-1/3">
        <img :src="lastEvent?.image" alt="" class="w-full" />
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
import {useSocialStore} from '@/stores/SocialDashboard';

const store = useSocialStore()
const loading = ref(false)
const lastEvent = ref();
const otherEvents = ref();

const upcomingEvent = async () => {
  loading.value = true
  try {
    const { data } = await api().get('event-list')
    store.eventList = data.data
    const myData = store.eventList;
    console.log(myData)
    lastEvent.value = myData[myData.length - 1];
    otherEvents.value = myData.slice(myData.length - 6, myData.length - 1);
    console.log('lastEvent Get api',lastEvent);
    console.log('otherEvents Get api',otherEvents);
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  upcomingEvent()
})
</script>
