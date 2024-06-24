<template>
  <div class="bg-slate-100 p-5">
    <!-- <h2 class="text-3xl font-bold pb-16 uppercase">Calender of Activities</h2> -->
    <div class="flex gap-11">
        <div class="w-1/3 rounded-2xl relative">
          <div class="h-1/2">
            <img class="w-full rounded-xl" src="@/assets/image/gallery/e2.webp" alt="" />
          </div>
          <div class="flex-1 rounded-xl bg-primaryGreen3 hover:bg-primaryGreen2 text-white absolute bottom-0 z-10 w-full  h-[30%] flex justify-center items-center">
            <router-link  to="/yearlyPlannerDetails">
              <p class="font-extrabold">2024</p>
            </router-link>
          </div>
        </div>
      

      <div class="w-2/3 grid grid-cols-2 gap-5">
        <div v-for="date in dateList" :key="date.id">
          <!-- <div class="button-icon"> -->

          <!-- <div class="icon"> -->
          <router-link
            :to="{
              name: 'year_planner',
              params: {
                id: date.id
              }
            }"
          >
            <div class="">
              <div class="flex gap-1">
                <div class="w-3/6">
                  <img class="rounded-none" :src="date.img" alt="" />
                </div>
                <div
                  class="w-2/3 rounded-lg bg-primaryGreen3 hover:bg-primaryGreen2 text-white"
                >
                  <div class="flex justify-center items-center align-middle">
                    <span class="font-extrabold p-12">{{ date.date }}</span>
                  </div>
                  <!-- <span class="">check it on details page</span> -->
                  <!-- <span class="side front">{{ date.date }}</span>
                        <span class="side top">check it on details page</span> -->
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '@/assets/image/commitees/1.png'
import img2 from '@/assets/image/commitees/2.png'
import img3 from '@/assets/image/commitees/3.png'
import img4 from '@/assets/image/commitees/4.png'
import img5 from '@/assets/image/commitees/5.png'
import img6 from '@/assets/image/commitees/0.png'
import img7 from '@/assets/image/commitees/7.png'
import img8 from '@/assets/image/commitees/8.png'

const dateList = ref([
  // {id: 1, date: 2016, img: img1},
  //  {id: 2, date: 2017, img: img2},
  //  {id: 3, date: 2018, img: img3},
  //  {id: 4, date: 2019, img: img4},
  { id: 5, date: 2020, img: img5 },
  { id: 6, date: 2021, img: img6 },
  { id: 7, date: 2022, img: img7 },
  { id: 8, date: 2023, img: img8 }
])
</script>

<style scoped>
.button-icon {
  display: flex;
  border: 3px #fff solid;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
}

.icon {
  background-color: #fff;
  padding: 10px 10px 5px 10px;
}

.icon svg {
  width: 25px;
  height: 25px;
}

.cube {
  transition: all 0.4s;
  transform-style: preserve-3d;
  /* width: 200px;
  height: 20px; */
}

.button-icon:hover {
  /* border-color: #ff98a2; */
  border-color: #00b09c;
}

.button-icon:hover .cube {
  transform: rotateX(90deg);
}

.side {
  position: absolute;
  /* height: 47px;
  width: 200px; */
  display: flex;
  font-size: 0.8em;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
}

.top {
  /* background: #ff98a2; */
  background: #00b09c;
  color: #fff;
  transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
}

.front {
  background: #222229;
  color: #fff;
  transform: translate3d(0, 0, 1em);
}
</style>
