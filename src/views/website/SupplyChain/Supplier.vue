<template>
  <div>
    <DefaultLayout >
      <div class="container bg-white py-[5%] w-full">
        <div class="flex justify-between items-center pt-4">
          <p class="text-2xl text-teal-700 font-bold pb-2">All Bids</p>
        </div>
        <hr />
       <!-- {{ store.bidForm }} -->
        <div v-if="showBidList == true" class="grid grid-cols-4 gap-5 mt-5">
          <div v-for="bid in store.bidForm" :key="bid" class="p-3 rounded-md bg-white shadow-md">
            <div class="flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="currentColor"><path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path></svg>
            </div>
            <p class="pt-2"><span class="font-semibold">Bid Id : </span>{{ bid.bid_id }}</p>
            <p class="pt-2 font-semibold text-xl"><span class="">Bid Title : </span>{{ bid.job_name }}</p>
            <div class="pt-2">
              <p><span class="font-semibold">Posted Date : </span>{{ bid.created_at }}</p>
              <p><span class="font-semibold">Deadline : </span>{{ bid.deadline }}</p>
            </div>
            <button @click="openDetails(bid)" class="w-full py-2 bg-blue-600 text-white font-semibold mt-3 rounded-md">View</button>
          </div>
        </div>
        <div v-else>
          <div class="text-left flex items-center mb-2">
                <p class="flex gap-1 items-center rounded-full ps-2 pr-3 py-1 cursor-pointer text-white bg-teal-500"
                  @click="goBack"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    fill="currentColor">
                    <path
                      d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z">
                    </path>
                  </svg>Back</p>
              </div>
          <div class="p-5 rounded-md  bg-slate-100">
            <div class="max-h-[250px] overflow-hidden">
              <!-- <img :src="bidDetails?.img" alt="" class="w-full -translate-y-[350px]"> -->
            </div>
            <!-- {{ bidDetails }} -->
            <!-- <p class="text-3xl font-semibold">Title : </p> -->
            <p class="text-3xl font-semibold pt-2">{{ bidDetails.job_name }}</p>
            <div class="pt-2">
              <p><span class="font-semibold text-xl">Posted Date : </span>{{ bidDetails.created_at }}</p>
              <p><span class="font-semibold text-xl">Deadline : </span>{{ bidDetails.deadline }}</p>
            </div>
            <div>
              <p class="text-xl"><span class="text-2xl font-bold">Details: </span> {{bidDetails?.summary}}</p>
            </div>

            <!-- <p class="text-2xl font-semibold mb-1">Order List : </p>
            <div v-for="(item,index) in bidDetails.products" class="flex mb-3 bg-white p-2 rounded-md">
              {{ index+1 }}
              <div class="px-2">
                <p class="text-xl font-semibold">Name : {{ item.name }}</p>
                <p>Details : {{ item.Details }}</p>
               <p>Amount : {{ item.totalAmount }}</p>
              </div>
            </div> -->
            <div class="flex justify-center gap-5">
              <router-link to="/Member_Login" v-if="authStore.isAuthenticated == false" class="px-5 py-2 rounded-md bg-blue-600 text-white">Sign In</router-link>
              <router-link to="/Signup" v-if="authStore.isAuthenticated == false" class="px-5 py-2 rounded-md bg-green-600 text-white">Sign Up</router-link>
              <button v-else class="px-5 py-2 rounded-md bg-blue-600 text-white">Apply for bid</button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { onMounted, ref } from 'vue'
import {useAuthStore} from '/src/stores/AuthStore.ts'
import { useStore } from '/src/stores/store.ts'
import rug from '/src/assets/image/prayer-rugs.jpg'
import deco from '/src/assets/image/Use-of-Natural-Light-in-mosque-inteiror-design.jpg'

const authStore =  useAuthStore()
const store = useStore()


const loading = ref(false)

const allBids = async () => {
  loading.value = true
  try {
    const { data } = await api().get('active-bid')
    store.bidForm = data.data
    console.log(store.bidForm)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const bids = [
  {
    id:1,
    title: 'Masjid Decoration',
    img:deco,
    Date: '01/5/2024',
    Deadline: '01/6/2024',
    products: [
      {
        id: 3,
        name: 'Islamic Art Prints',
        category: 'Art',
        Details:'2 x 3.5 ft arat of kabah to that can elevate the beauty of the masjid',
        totalAmount: 15
      },
      {
        id: 4,
        name: 'Islamic Robe',
        category: 'Art',
        Details:'robe for imam ',
        totalAmount: 25
      }
    ],
  },
  {
    id:2,
    title: 'Prayer Rug',
    img:rug,
    Date: '05/5/2024',
    Deadline: '20/6/2024',
    products: [
      {
        id: 3,
        name: 'Prayer Rug',
        category: 'rug',
        Details:'2.5 x 6 ft prayer rug',
        totalAmount: 15
      },
    ],
  },
]

const showBidList = ref(true)
const bidDetails = ref()
const openDetails = (bid) => {
  showBidList.value = false
  bidDetails.value = bid
}

const goBack = () =>{
  showBidList.value == true
}

onMounted(() => {
  allBids()
})

</script>

<style scoped>
/* Add component-specific styles if needed */
</style>
