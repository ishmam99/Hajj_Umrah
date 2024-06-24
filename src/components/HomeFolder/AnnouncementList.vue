<template>
  <DefaultLayout>
    <div
      class="px-20 pt-20 mt-5 py-5 bg-emerald-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
    >
      <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
        <div class="flex items-center justify-center gap-2 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
          >
            <path
              d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
            ></path>
          </svg>
          <p>Home</p>
          <p class="text-emerald-800">/ Announcement</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-emerald-800 text-4xl font-bold">Announcement</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <!-- {{ store.active_event_list }} -->
    <div class="bg-gray-100 h-full py-5 flex gap-5 px-20 w-full">
      <div class="space-y-8 container">
        <!-- {{ store?.upcomming_event_list }} -->
        <div class="bg-white rounded-xl p-5 w-full">
          <h1 class="text-3xl font-semibold underline py-3">Announcements</h1>
          <div class="class grid grid-cols-3 gap-5 mt-4">
            <div
              v-for="item in store?.upcomming_event_list"
              :key="item.id"
              class="border border-gray-600 p-5 flex flex-col gap-2 text-center rounded-md"
            >
              <img :src="item?.image" alt="" class="w-full max-h-[220px]" />
              <h3 class="text-2xl font-bold line-clamp-1">{{ item?.title }}</h3>
              <p class="text-sm font-semibold text-yellow-600">
                {{ item.created_at.slice(0, 10) }}
              </p>
              <p class="line-clamp-2">{{ item?.description }}</p>
              <router-link
                :key="item.id"
                :to="{
                    name: 'announcementDetails',
                    params: {
                        id: item.id
                    }
                }"
              >
                  <p class="pt-2 flex items-center justify-center">
                    <button class="flex bg-blue-600 text-white p-1 rounded-lg gap-2 hover:bg-[#23646dc6] ">Details <svg class="w-full text-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"></path></svg></button>
                  </p>
                </router-link>
              <!-- <router-link
                :to="{
                  name: 'Events',
                  params: {
                    id: item.id
                  }
                }"
                class="h-[50px] w-full bg-emerald-800 text-white rounded-md flex items-center justify-center"
                >Register</router-link
              > -->
            </div>
          </div>
        </div>
        <!-- <div class="bg-white rounded-xl p-5 w-full">
          <h1 class="text-3xl font-semibold underline py-3">Past Announcement</h1>
          <div class="class grid grid-cols-3 gap-5">
            <div
              v-for="item in store?.past_event_list"
              :key="item.id"
              class="border border-gray-600 p-5 flex flex-col gap-2 text-center rounded-md"
            >
              <img :src="item.image" alt="" class="w-full max-h-[220px]" />
              <h3 class="text-2xl font-bold line-clamp-1">{{ item.name }}</h3>
              <p class="text-sm font-semibold text-yellow-600">
                {{ item.start_date }} - {{ item.end_date }}
              </p>
              <p class="line-clamp-2">{{ item.description }}</p>
            </div>
          </div>
        </div> -->
      </div>
      <!-- <ActivityMore /> -->
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import ActivityMore from '/src/components/ActivityMore.vue'
import { ref, onMounted } from 'vue'
import { useStore } from '/src/stores/store.ts'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()

const eventList = store.announcementList;
// const getActiveEventList = async () => {
//   try {
//     const { data } = await api().get('active-event-list')
//     store.active_event_list = data.data
//     console.log(store.active_event_list)
//   } catch (error) {
//     console.log(error)
//   }
// }
// const getPastEventList = async () => {
//   try {
//     const { data } = await api().get('past-event-list')
//     store.past_event_list = data.data
//     console.log(store.past_event_list)
//   } catch (error) {
//     console.log(error)
//   }
// }


//rasik
const getUpcommingEventList = async () => {
  try {
    const { data } = await api().get('announcement-list')
    store.upcomming_event_list = data.data
    console.log(store.upcomming_event_list)
  } catch (error) {
    console.log(error)
  }
}


onMounted(async () => {
  // getActiveEventList()
  // getPastEventList()
  getUpcommingEventList()
})
</script>

<style lang="scss" scoped></style>
