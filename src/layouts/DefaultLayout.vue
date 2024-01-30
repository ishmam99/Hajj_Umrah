<template>
   <div>
    <header>
     <Navbar/>
    </header>
    <main class="py-[70px]"> 
      <div >
           <slot /> <!-- This is where the page content will be rendered -->
      </div>
   
    </main>
    
      
      <foot/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import foot from '../components/footer.vue'

import { ref, onMounted } from 'vue'
import {useStore} from '../stores/store.ts'
const store = useStore()

const gatprayerTime = async () => {
  const { data } = await api().get('get-prayer-time')
    // console.log(data)
    store.prayertime = data
}
// const getCategories =async() =>{
//     const { data } = await api().get('product-category')
//     let categoryList = []
//     data.map((c) => {
//         let cat = c.category
//         cat.products = c.products
//         categoryList.push(cat)
//     })
//     store.category = categoryList
// }
const getEvent=async()=>{
    const { data } = await api().get('get-event')
    // console.log(data)
    store.event = data
}
const getAnnouncement=async()=>{
    const { data } = await api().get('get-announcement')
    console.log(data)
    store.announcement = data
}
onMounted(async() => {
  gatprayerTime()
  getEvent()
  getAnnouncement()
})

</script>

<style>
body{
    background-image: url('../assets/image/home/pattern-1.png');
    background-repeat: repeat;
    background-color: #36897b34;
}
</style>
