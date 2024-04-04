<template>
    <div class="w-full bg-[url('../assets/image/home/pattern-1.png')] bg-repeat">
        <div class="w-full px-5">
            <h1 class="text-3xl font-bold uppercase pb-3">Announcement</h1>
            <div>
                <div class="flex">
                    <div class="w-1/3">
                        <!-- {{ announcement }} -->
                       


                        {{ lastAnnouncement.image }}
                        <!-- <img :src="lastAnnouncement.image" alt="">     -->
                        <!-- <img src="/src/assets/image/home/h1.png" alt=""> -->
                    </div>
                    <div class="w-2/3">
                        <p class="text-xl font-bold pb-3">
                            <!-- {{ otherAnnouncement }} -->
                        </p>
                        <!-- <div>
                            <div>
                                <img src="/src/assets/image/home/h2.png" alt="">
                            </div>
                            <div>
                                <img src="/src/assets/image/home/h3.png" alt="">
                            </div>
                        </div> -->
                        <!-- <img src="/src/assets/image/home/h2.png" alt="" > -->
                        <!-- <button  class="px-5 py-2 bg-gray-300 text-sm text-gray-600 font-bold rounded-3xl">See More</button>  -->
                    </div>
                    <!-- <div class="w-1/3">
                        <div>
                            <img src="/src/assets/image/home/h2.png" alt="">
                        </div>
                        <div>
                            <img src="/src/assets/image/home/h3.png" alt="">
                        </div>
                    </div> -->
                    <!-- <div class="w-1/3">
                        <div>
                            <img src="/src/assets/image/home/h2.png" alt="">
                        </div>
                        <div class="flex items-center justify-center py-14">
                            <button  class="px-5 py-2 bg-gray-300 text-sm text-gray-600 font-bold rounded-3xl">See More</button> 
                        </div>
                    </div> -->
                    
                </div>
            
            </div>
            <!-- TODO: test -->
            <!-- <div>
                <h1>People Information</h1>
                <div class="container">
                <div class="left">
                    <h2>Last Person</h2>
                    <p>{{ lastPersonTest.name }} - {{ lastPersonTest.age }}</p>
                </div>
                <div class="right">
                    <h2>Other People</h2>
                    <p>Total: {{ otherPeopleTest.length }}</p>
                    <ul>
                    <li v-for="(person, index) in otherPeopleTest" :key="index">
                        {{ person.name }} - {{ person.age }} 
                    </li>
                    </ul>
                </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script setup>
// const people = [
//   { name: 'John', age: 25 },
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 28 },
//   { name: 'Eve', age: 22 },
//   { name: 'Michael', age: 35 },
//   { name: 'Sarah', age: 29 },
//   { name: 'David', age: 31 },
//   { name: 'Emma', age: 27 }
// ];

// const lastPersonTest = people[people.length - 1];
// console.log('lastPersonTest', lastPersonTest);
// const otherPeopleTest = people.slice(people.length - 6, people.length - 1);

// console.log('otherPeople',otherPeople)
// test================================================================

import { ref , onMounted } from 'vue'
import { useOperationStore } from '@/stores/operationDashboard';

const store = useOperationStore()
const loading = ref(false)
const lastAnnouncement = ref();
const otherAnnouncement = ref([]);

const announcements = async () => {
  loading.value = true
  try {
    const { data } = await api().get('announcement-list')
    store.announcementList = data.data
    const myData = store.announcementList;
    lastAnnouncement.value = myData[myData.length - 1];
    otherAnnouncement.value = myData.slice(myData.length - 6, myData.length - 1);
    console.log('lastAnnouncement Get api',lastAnnouncement);
    console.log('otherAnnouncement Get api',otherAnnouncement);
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}


onMounted(async () => {
   announcements()
})
</script>