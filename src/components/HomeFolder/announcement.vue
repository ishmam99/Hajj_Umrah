<template>
    <div class="w-full bg-[url('../assets/image/home/pattern-1.png')] bg-repeat">
        <div class="w-full px-5">
            <h1 class="text-3xl font-bold uppercase pb-3">Announcement</h1>
            <div>
                <div class="flex gap-5 ">
                    <div class="w-1/3 relative rounded-lg">
                        <img :src="lastAnnouncement?.image" alt="" class="w-full">  
                        <p class="absolute top-0 h-full w-full rounded-lg"></p>  
                    </div>
                    <div class="w-2/3 grid grid-cols-3 gap-5">
                        <div class="text-xl font-bold pb-3 relative rounded-lg" v-for="item in otherAnnouncement" :key="item.id">
                            <img :src="item?.image" alt="" class="w-full">
                            <p class="absolute top-0 h-full w-full rounded-lg"></p>
                        </div>
                        <div class="flex items-center justify-center py-14">
                            <button  class="px-5 py-2 bg-gray-300 text-sm text-gray-600 font-bold rounded-3xl">See More</button> 
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>
<script setup>
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