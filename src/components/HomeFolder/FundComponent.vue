<template>
  <div class="flex p-2 gap-10 bg-slate-200 w-full rounded-md">
    <div class="w-2/3">
      <!-- <h1 class="text-4xl font-bold pb-3 uppercase">Fund Raising</h1> -->
      <div class="bg-[url('/src/assets/image/common/v5.jpg')] bg-cover rounded-lg">
        <div
          class="w-full h-full p-10 flex flex-col justify-center gap-5 bg-[#0000006e] rounded-lg"
        >
          <!-- <p class="text-green-400 text-lg font-bold">#fundraisewithIslamicDigitalLane</p>
          <p class="flex p-2 text-3xl font-bold text-white bg-green-500 w-fit">Fundraise with</p>
          <p class="flex py-2 px-3 text-5xl font-bold text-white bg-cyan-500 w-fit">
            Islamic Digital Lane
          </p>
          <p class="text-lg text-gray-200">
            Fundraise for one of our many campaigns or for one of our upcoming <br />
            events with a click of a few buttons!
          </p> -->
          <div class="mt-6">
            <router-link
              to="/Fund_Raising_Form"
              class="py-4 px-3 rounded-lg text-white text-lg bg-teal-600 hover:bg-blue-500"
              >Start fund Raising for today</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/3">
      <!-- <h1 class="text-2xl font-bold pb-3 uppercase text-green-600">Our Campaigns</h1> -->
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <!-- <div class="flex flex-col gap-1 rounded-md p-2 bg-white" v-for="lastFund in lastFunds" :key="lastFund.id">
          <router-link
                :key="lastFund.id"
                :to="{
                    name: 'Fund_Raising_details',
                    params: {
                        id: lastFund.id
                    }
                }"
          >
          <img :src="lastFund?.image" alt="" class="w-full h-3/4" />
          <p class="text-lg font-bold mb-1">{{ lastFund.title }}</p>
          <p class="text-xs font-semibold text-gray-600"><span class="font-bold">Start Date:</span> {{ lastFund.start_date }}</p>
          <p class="text-xs font-semibold text-gray-600"><span class="font-bold">End Date:</span> {{ lastFund.end_date }}</p>          
            </router-link>
        </div> -->
      </div>
        <div class="flex items-center justify-center mt-14 w-full">
          <button class="px-3 py-3 bg-green-600 text-white text-sm rounded-md">See More</button>
        </div>
    </div>
  </div>
</template>


<script setup>
import { ref , onMounted } from 'vue'
import {useAdminStore} from '@/stores/adminStore.ts';

const store = useAdminStore()
const loading = ref(false)
const lastFunds = ref([]);

const fundraisers = async () => {
  loading.value = true
  try {
    const { data } = await api().get('fundraise-event-list')
    store.fundList = data.data
    const myData = store.fundList;
    lastFunds.value = myData.slice(myData.length - 3, myData.length - 0);
    // lastFunds.value = myData;
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
