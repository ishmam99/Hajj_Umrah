<template>
    <DefaultLayout>
        <div class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
              <p>/ More</p>
              <!-- <p>/ Volunteers</p> -->
              <p class="text-cyan-800">/ Calender of Activities</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-cyan-800 text-4xl font-bold"> Calender of Activities</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <!-- <Separator/> -->
        <div class="w-full bg-[url('../assets/image/home/dua_banner.png')] bg-cyan-800">
          <h1 class="py-10 text-center bg-[#2d292938] text-4xl text-white font-bold">Our yearly activities at a glance for 2024</h1>
         </div>
        <div class="bg-gray-100 h-full py-5 flex items-center justify-center gap-5 px-20 w-full">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 w-full">
              <h1 class="text-3xl font-semibold">Feed the hungry</h1>
              <span class="text-sm font-semibold text-yellow-600">20 jan 2024</span>
              <p class="pt-5">
                The Muslim community organizes a heartfelt event focused on the noble endeavor of "Feed the Hungry." This event is not just a gathering, but a compassionate initiative aimed at addressing the pressing issue of hunger within their local area. With a strong sense of community and generosity ingrained in their faith, members come together with the shared goal of making a tangible difference in the lives of those less fortunate.

The event is meticulously planned, with volunteers dedicating their time and efforts to ensure its success. Weeks prior, organizers collaborate with local charities and food banks to identify families and individuals in need. They meticulously plan meals that are not only nourishing but also culturally appropriate, taking into account dietary preferences and restrictions.

On the day of the event, the venue is bustling with activity as volunteers set up stations for meal preparation and distribution. The air is filled with the aroma of spices and freshly cooked food, adding to the warmth and welcoming atmosphere. Families, young and old, eagerly participate, knowing that their contributions, whether big or small, will make a meaningful impact.
              </p>
              <div class="bg-white rounded-xl p-5 w-full">
                <div class="grid grid-cols-2 gap-2">
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../../assets/image/hungry/hungry-1.jpg" alt="">
                  </div>
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../../assets/image/hungry/hungry-7.jpg" alt="">
                  </div>
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../../assets/image/hungry/hungry-3.jpg" alt="">
                  </div>
                  <div>
                      <img class="h-auto max-w-full rounded-lg" src="../../assets/image/hungry/hungry-4.jpg" alt="">
                  </div>
                </div>
              </div>
            </div>


          </div>
          
        </div>
      </DefaultLayout>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import DefaultLayout from '@/layouts/DefaultLayout.vue';
    import img1 from '@/assets/image/commitees/1.png'
    import img2 from '@/assets/image/commitees/2.png'
    import img3 from '@/assets/image/commitees/3.png'
    import img4 from '@/assets/image/commitees/4.png'
    import img5 from '@/assets/image/commitees/5.png'
    import img6 from '@/assets/image/commitees/0.png'
    import img7 from '@/assets/image/commitees/7.png'
    import img8 from '@/assets/image/commitees/8.png'

    const route = useRoute();
    onMounted(() => {
        dateList.value = dateList.value.find(el => el.id == route.params.id);
    })
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

<style lang="scss" scoped>

</style>