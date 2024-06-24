<template>
  <DefaultLayout>
    <div class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
      <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
        <div class="flex items-center justify-center gap-2 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path
              d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z">
            </path>
          </svg>
          <p>Home</p>
          <p>/ Activities</p>
          <!-- <p>/ Volunteers</p> -->
          <p class="text-cyan-800">/ Projects</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-cyan-800 text-4xl font-bold">Projects</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 h-full py-5 flex gap-5 px-20 w-full">
      <div class="space-y-8 w-3/4">
        <div v-if="showProjectsList == true" class="bg-white rounded-xl p-5 w-full">
          <h1 class="text-3xl underline py-3 mb-4 text-center">On Going Project</h1>
          <div v-if="store.active_project_list.length > 0">
            <div v-for="item in store.active_project_list" :key="item"
              class="min-w-[350px] min-h-[450px] overflow-hidden relative rounded-3xl">
              <img src="/src/assets/image/home/l4.png" alt="" class="w-full absolute top-0" />
              <div class="absolute z-10 bottom-0 p-5 text-white flex flex-col gap-2">
                <p class="text-xl text-white">20 JAN 2024</p>
                <h3 class="text-2xl font-extrabold">Youth Development Project</h3>
                <p class="font-semibold">Youth Development project of IDL Masjid</p>
                <router-link to="/activity/projects" class="w-full hover:pl-5 duration-300">
                  <button class="h-[50px] w-[250px] bg-cyan-800 rounded-xl">Go To Project</button>
                </router-link>
              </div>
            </div>
          </div>
          <p v-else class="text-3xl font-semibold">No Ongoing Projects</p>
        </div>
        <div class="">
          <div v-if="showProjectsList == true" class="bg-white rounded-xl p-5 mb-5">
            <h1 class="text-3xl underline py-3 text-center">Up Coming Projects</h1>
            <div v-if="store.upcomming_project_list.length > 0" class="class grid grid-cols-2 gap-5">
              <div v-for="item in store.upcomming_project_list" :key="item.id"
                class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md">
                <p class="absolute text-white text-2xl font-bold p-6 bg-[#0000005d] m-2 rounded-xl">
                  Upcoming Projects
                </p>
                <img :src="item.image" alt="" class="w-full h-[50%] rounded-2xl" />
                <h3 class="text-2xl font-bold">{{ item.name }}</h3>
                <p class="text-sm font-semibold text-cyan-600">
                  {{ item.start_date }} - {{ item.end_date }}
                </p>
                <p>{{ item.description }}</p>
                <button class="h-[50px] w-full border bg-cyan-800 text-white rounded-md">
                  Register
                </button>
              </div>
            </div>
            <p v-else class="text-3xl font-semibold">No Upcoming Projects</p>
          </div>
          <div v-if="showProjectsList == true" class="bg-white rounded-xl p-5">
            <h1 class="text-3xl underline py-3 text-center">Project History</h1>
            <div class="class grid grid-cols-2 gap-5">
              <div v-for="item in store.past_project_list" :key="item.id"
                class="border border-gray-699 p-5 flex flex-col gap-2 text-center rounded-md">
                <p class="absolute text-white text-2xl font-bold p-6 bg-[#0000005d] m-2 rounded-xl">
                  Project History
                </p>
                <img :src="item.image" alt="" class="w-full h-[220px] rounded-2xl" />
                <h3 class="text-2xl font-bold">{{ item.title }}</h3>
                <p class="text-sm font-semibold text-cyan-600">{{ item.date }}</p>
                <p>{{ item.des }}</p>
                <button @click="openDetails(item)" class="h-[50px] w-full border bg-cyan-800 text-white rounded-md">
                  Details
                </button>
              </div>
            </div>
          </div>

          <div v-else>
            <div class="p-5 rounded-md  bg-slate-100">
              <div class="text-left flex items-center mb-2">
                <p class="flex gap-1 items-center rounded-full ps-2 pr-3 py-1 cursor-pointer text-white bg-teal-500"
                  @click="goBack"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    fill="currentColor">
                    <path
                      d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM12 11H16V13H12V16L8 12L12 8V11Z">
                    </path>
                  </svg>Back</p>
              </div>
              <div class="max-h-[250px] overflow-hidden">
                <img :src="projectDetails?.image" alt="" class="w-full -translate-y-[350px]">
              </div>

              <p class="text-3xl mt-4 font-semibold">Title : {{ projectDetails?.name }}</p>

              <p class="text-3xl font-semibold pt-2">{{ projectDetails?.title }}</p>
              <p><span class="font-bold">Project Details :</span> {{ projectDetails?.description }}</p>
              <p><span class="font-bold">Event Type :</span> {{ projectDetails?.event_type }}</p>
              <p><span class="font-bold">Address :</span> {{ projectDetails?.city ? projectDetails.city + ', ' : '' }}{{
                projectDetails.state }}</p>
              <div class="pt-2 flex justify-between">
                <p><span class="font-semibold">Start Date : </span>{{ projectDetails?.start_date }}</p>
                <p><span class="font-semibold">End Date : </span>{{ projectDetails?.end_date }}</p>
              </div>

              <!-- <div v-for="(item,index) in item" :key="index" class="flex mb-3 bg-white p-2 rounded-md">
              {{ index+1 }}
              <div class="px-2">
                <p class="text-xl font-semibold">Name : {{ item?.title }}</p>
                <p>Details : {{ item?.Details }}</p>
               <p>Amount : {{ item?.totalAmount }}</p>
              </div>
            </div> -->
              <!-- <div class="flex justify-center gap-5">
              <router-link to="/Member_Login" v-if="authStore.isAuthenticated == true" class="px-5 py-2 rounded-md bg-blue-600 text-white">Sign In</router-link>
              <router-link to="/Signup" v-if="authStore.isAuthenticated == true" class="px-5 py-2 rounded-md bg-green-600 text-white">Sign Up</router-link>
              <button v-else class="px-5 py-2 rounded-md bg-blue-600 text-white">Apply for bid</button>
            </div> -->
            </div>
          </div>
        </div>
      </div>
      <ActivityMore />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import ActivityMore from '/src/components/ActivityMore.vue'

import { ref, onMounted } from 'vue'


const project = ref([
  {
    id: 1,
    title: 'Eco-Friendly and Sustainability Projects',
    date: '20 Jan 2024',
    image: '/src/assets/image/home/l3.jpeg',
    des: 'Elevating Communities through Eco-Friendly and Sustainability Projects.'
  },
  {
    id: 2,
    title: 'Interfaith Dialogues',
    date: '24 Jan 2024',
    image: '/src/assets/image/home/l2.jpg',
    des: 'Fostering Understanding through Interfaith Dialogues.'
  },
  {
    id: 3,
    title: 'Technology and Media Outreach',
    date: '28 Jan 2024',
    image: '/src/assets/image/home/l4.jpg',
    des: 'Empowering Communities through Innovative Media Outreach.'
  },
  {
    id: 4,
    title: 'Infrastructure Development',
    date: '20 Jan 2024',
    image: '/src/assets/image/home/l2.jpg',
    des: 'Transforming Communities through Infrastructure Development.'
  }
])
const history = ref([
  {
    id: 1,
    title: 'Health and Wellness Initiatives Project',
    date: '10 Jan 2024',
    image: '/src/assets/image/commitees/0.png',
    des: 'Nurturing Communities through Health and Wellness Initiatives.'
  },
  {
    id: 2,
    title: 'Humanitarian Projects',
    date: '14 Jan 2024',
    image: '/src/assets/image/commitees/1.png',
    des: 'Driving Change through Humanitarian Projects.'
  },
  {
    id: 3,
    title: 'Islamic Education Initiatives',
    date: '08 Jan 2024',
    image: '/src/assets/image/commitees/2.png',
    des: 'Empowering Minds through Islamic Education Initiatives.'
  },
  {
    id: 4,
    title: 'Community Outreach Project',
    date: '05 Jan 2024',
    image: '/src/assets/image/commitees/3.png',
    des: 'ConnectCatalyst: Bridging Communities through Outreach Initiatives.'
  }
])

import { useStore } from '/src/stores/store.ts'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const store = useStore()

const showProjectsList = ref(true)
const projectDetails = ref()
const openDetails = (project) => {
  showProjectsList.value = false
  projectDetails.value = project
}

const getActiveProjectList = async () => {
  try {
    const { data } = await api().get('active-project-list')
    store.active_project_list = data.data
    console.log(store.active_project_list)
  } catch (error) {
    console.log(error)
  }
}
const getPastProjectList = async () => {
  try {
    const { data } = await api().get('past-project-list')
    store.past_project_list = data.data
    console.log(store.past_project_list)
  } catch (error) {
    console.log(error)
  }
}
const getUpcommingProjectList = async () => {
  try {
    const { data } = await api().get('upcoming-project-list')
    store.upcomming_project_list = data.data
    console.log(store.upcomming_project_list)
  } catch (error) {
    console.log(error)
  }
}

const goBack = () =>{
  showProjectsList.value = true
}

onMounted(async () => {
  getActiveProjectList()
  getPastProjectList()
  getUpcommingProjectList()
})
</script>

<style lang="scss" scoped></style>
