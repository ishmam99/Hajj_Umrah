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
import { ref } from 'vue'
import {useAuthStore} from '/src/stores/AuthStore.ts'
// const suppliers = [
//   {
//     name: 'Al-Falah Islamic Mart',
//     contactPerson: 'Mohammed Ahmed',
//     email: 'mohammed.ahmed@alfalahmart.com',
//     phone: '+123 456 7890',
//     address: {
//       street: '123 Halal Street',
//       city: 'Islamic City',
//       state: 'Islamic State',
//       zip: '54321',
//       country: 'Muslimland'
//     },
//     products: [
//       { id: 1, name: 'Islamic Books', category: 'Literature', price: 20 },
//       { id: 2, name: 'Prayer Rugs', category: 'Spiritual', price: 30 }
//     ],
//     orders: [
//       { id: 101, date: '2024-01-15', totalAmount: 50 },
//       { id: 102, date: '2024-01-20', totalAmount: 40 }
//     ]
//   },
//   {
//     name: 'Nur al-Hidayah Bookstore',
//     contactPerson: 'Fatima Ali',
//     email: 'fatima.ali@nuralhidayah.com',
//     phone: '+987 654 3210',
//     address: {
//       street: '789 Quran Avenue',
//       city: 'Madina Town',
//       state: 'Blessed Region',
//       zip: '98765',
//       country: 'Sacred Land'
//     },
//     products: [
//       { id: 3, name: 'Islamic Art Prints', category: 'Art', price: 25 },
//       { id: 4, name: 'Halal Cosmetics', category: 'Beauty', price: 40 }
//     ],
//     orders: [
//       { id: 103, date: '2024-02-01', totalAmount: 60 },
//       { id: 104, date: '2024-02-05', totalAmount: 75 }
//     ]
//   },
//   {
//     name: 'Sakinah Islamic Attire',
//     contactPerson: 'Aisha Rahman',
//     email: 'aisha.rahman@sakinahattire.com',
//     phone: '+456 789 0123',
//     address: {
//       street: '456 Modesty Lane',
//       city: 'Hijabville',
//       state: 'Covered State',
//       zip: '67890',
//       country: 'Modestland'
//     },
//     products: [
//       { id: 5, name: 'Abayas', category: 'Clothing', price: 50 },
//       { id: 6, name: 'Kufi Caps', category: 'Accessories', price: 15 }
//     ],
//     orders: [
//       { id: 105, date: '2024-03-10', totalAmount: 90 },
//       { id: 106, date: '2024-03-15', totalAmount: 120 }
//     ]
//   },
//   {
//     name: 'Noor Islamic Grocery',
//     contactPerson: 'Ahmed Malik',
//     email: 'ahmed.malik@noorgrocery.com',
//     phone: '+789 012 3456',
//     address: {
//       street: '789 Sunnah Street',
//       city: 'Halal City',
//       state: 'Blessed State',
//       zip: '12345',
//       country: 'Pureland'
//     },
//     products: [
//       { id: 7, name: 'Dates', category: 'Food', price: 10 },
//       { id: 8, name: 'Zamzam Water', category: 'Beverages', price: 5 }
//     ],
//     orders: [
//       { id: 107, date: '2024-04-05', totalAmount: 15 },
//       { id: 108, date: '2024-04-10', totalAmount: 20 }
//     ]
//   }
//   // Add more Islamic-named suppliers as needed
// ]

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
