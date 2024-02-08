<template>
    <section class="bg-slate-100 py-10 px-[5%]">
        <h2 class="text-3xl font-bold pb-16 uppercase">Calender of Activities</h2>
        <div class="grid grid-cols-3 gap-5">
        <div v-for="date in dateList" :key="date.id">
            <!-- <div class="button-icon"> -->
            
            <!-- <div class="icon"> -->
            <router-link :to="{
                name: 'year_planner',
                params:{
                    id: date.id
                }
            }">
                <div class="">
                <div class="flex">
                    <div class="w-3/6">
                        <img class="rounded-none" :src="date.img" alt="">
                    </div>
                    
                    <!-- <svg viewBox="0 0 24 24">
                    <path
                        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        fill="#222229"
                    ></path>
                    </svg> -->
                    <div class="cube w-2/3 bg-black hover:bg-primaryGreen2 text-white">
                        <div class="flex justify-center items-center align-middle h-full">
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
    </section>
    
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
    {id: 1, date: 2016, img: img1},
    {id: 2, date: 2017, img: img2},
    {id: 3, date: 2018, img: img3},
    {id: 4, date: 2019, img: img4},
    {id: 5, date: 2020, img: img5},
    {id: 6, date: 2021, img: img6},
    {id: 7, date: 2022, img: img7},
    {id: 8, date: 2023, img: img8},
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
  border-color: #00B09C;
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
  background: #00B09C;
  color: #fff;
  transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
}

.front {
  background: #222229;
  color: #fff;
  transform: translate3d(0, 0, 1em);
}
</style>