<template>
  <div>
    <DefaultLayout>
      <div class="px-10 bg-white py-[5%] w-full">
        <div class="flex justify-between items-center pt-4">
          <p class="text-2xl text-teal-700 font-bold pb-2">All Bids</p>
        </div>
        <hr />
       
        <div v-if="showBidList == true" class="grid grid-cols-4 gap-5 mt-5">
          <div v-for="bid in bids" :key="bid" class="p-3 rounded-md bg-white shadow-md">
            <img :src="bid.img" alt="" class="w-full h-[200px]"/>
            <p class="pt-2"><span class="font-semibold">Bid Id : </span>{{ bid.id }}</p>
            <p class="pt-2 font-semibold text-xl"><span class="">Bid Title : </span>{{ bid.title }}</p>
            <div class="pt-2">
              <p><span class="font-semibold">Posted Date : </span>{{ bid.Date }}</p>
              <p><span class="font-semibold">Deadline : </span>{{ bid.Deadline }}</p>
            </div>
            <button @click="openDetails(bid)" class="w-full py-2 bg-blue-600 text-white font-semibold mt-3 rounded-md">View</button>
          </div>
        </div>
        <div v-else>
          <div class="p-5 rounded-md  bg-slate-100">
            <div class="max-h-[250px] overflow-hidden">
              <img :src="bidDetails?.img" alt="" class="w-full -translate-y-[350px]">
            </div>
            
            <!-- <p class="text-3xl font-semibold">Title : </p> -->
            <p class="text-3xl font-semibold pt-2">{{ bidDetails.title }}</p>
            <div class="pt-2">
              <p><span class="font-semibold">Posted Date : </span>{{ bidDetails.Date }}</p>
              <p><span class="font-semibold">Deadline : </span>{{ bidDetails.Deadline }}</p>
            </div>

            <p class="text-2xl font-semibold mb-1">Order List : </p>
            <div v-for="(item,index) in bidDetails.products" class="flex mb-3 bg-white p-2 rounded-md">
              {{ index+1 }}
              <div class="px-2">
                <p class="text-xl font-semibold">Name : {{ item.name }}</p>
                <p>Details : {{ item.Details }}</p>
               <p>Amount : {{ item.totalAmount }}</p>
              </div>
            </div>
            <div class="flex justify-center gap-5">
              <router-link to="/Member_Login" v-if="authStore.isAuthenticated == true" class="px-5 py-2 rounded-md bg-blue-600 text-white">Sign In</router-link>
              <router-link to="/Signup" v-if="authStore.isAuthenticated == true" class="px-5 py-2 rounded-md bg-green-600 text-white">Sign Up</router-link>
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
import { ref } from 'vue'
import {useAuthStore} from '/src/stores/AuthStore.ts'


const authStore =  useAuthStore()

import rug from '/src/assets/image/prayer-rugs.jpg'
import deco from '/src/assets/image/Use-of-Natural-Light-in-mosque-inteiror-design.jpg'
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
</script>

<style scoped>
/* Add component-specific styles if needed */
</style>
