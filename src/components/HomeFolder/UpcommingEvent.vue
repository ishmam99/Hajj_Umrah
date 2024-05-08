<template>
  <div class="py-[30px] px-[5%] bg-slate-100">
    <h1 class="text-3xl font-bold uppercase pb-3">Upcoming Event</h1>
    <div class="flex gap-36">
      <div class="w-2/6">
          <div class="card bg-gray-200 w-full h-4/6">
            <div class="card-image">
              <img :src="lastEvent?.image" class="w-full rounded-lg" alt="" />
            </div>
            <p class="card-title mt-6">{{ lastEvent.name }}</p>
            <p class="card-body">
              {{ lastEvent?.description }}
            </p>
            <p class="footer"> <span class="font-bold">Started</span> on <span class="date">{{lastEvent?.start_date}}</span></p>
          </div>
      </div>
      <div class="w-4/6 grid grid-cols-3 gap-5">
         <div v-for="otherEvent in otherEvents" :key="otherEvent.id" class="card bg-gray-200">
            <div class="card-image">
              <img :src="otherEvent?.image" class="w-full h-44 rounded-md" alt="" />
            </div>
            <p class="card-title">{{ otherEvent?.name }}</p>
            <p class="card-body">
              {{ otherEvent?.description }}
            </p>
            <p class="footer"> <span class="font-bold">Started</span> on <span class="date">{{otherEvent?.start_date}}</span></p>
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
const lastEvent = ref([]);
const otherEvents = ref([]);

const upcomingEvent = async () => {
  loading.value = true
  try {
    const { data } = await api().get('event-list')
    store.eventList = data.data
    const myData = store.eventList;
    console.log(myData)
    lastEvent.value = myData[myData.length - 1];
    otherEvents.value = myData.slice(myData.length - 6, myData.length - 1);
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


<style scoped>
.card {
  padding: 20px;
  /* width: 330px; */
  /* min-height: 370px; */
  border-radius: 20px;
  /* background: #e8e8e8; */
  /* background: #74bdb5; */
  box-shadow: 5px 5px 6px #dadada,
               -5px -5px 6px #f6f6f6;
  transition: 0.4s;
}

.card:hover {
  translate: 0 -10px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #2e54a7;
  /* margin: 15px 0 0 10px; */
}

.card-image {
  min-height: 170px;
  /* background-color: #c9c9c9; */
  border-radius: 15px;
  box-shadow: inset 8px 8px 10px #c3c3c3,
            inset -8px -8px 10px #cfcfcf;
}

.card-body {
  /* margin: 13px 0 0 10px; */
  color: rgb(31, 31, 31);
  font-size: 15px;
}

.footer {
  float: right;
  /* margin: 28px 0 0 18px; */
  /* font-size: 13px; */
  color: #636363;
}

</style>
