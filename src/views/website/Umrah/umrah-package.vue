<template>
  <DefaultLayout>
  <div class="pt-[80px]"></div>
  <div class="h-[60vh] 2xl:h-[50vh] relative">
    <div class="h-full">
      <swiper
        :slidesPerView="'1'"
        :centeredSlides="true"
        :spaceBetween="0"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
      <swiper-slide>
          <img src="/src/assets/image/hero/people.jpeg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services &amp; packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide>
      <swiper-slide>
          <img src="/src/assets/image/hero/hajj_services.jpg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services &amp; packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/src/assets/image/hajj/hajj-2.jpg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services &amp; packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="container mx-auto mt-8 mb-8">
    <div class="flex flex-col items-center justify-center  pb-4  mt-6"> 
        <P class="text-5xl font-bold text-[#286d71]">Umrah Packages</P>
        <p class="text-3xl mx-20 mt-3"></p>
    </div>
    <div class="flex flex-row items-end justify-end my-3">
<div></div>

    </div>
    <div class="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 " v-if="packagesList.length > 0">
      <div v-for="packageData in packagesList" class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80">
      <h1 class="text-center px-3 py-2 font-bold bg-gray-200">{{ packageData.name}}</h1>
          <!-- {{ packageData.id }} -->
        <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <!-- <h1>{{ packageData.name }}</h1> -->
          <img src="@/assets/image/hajj/hajj-1.jpg" alt="card-image" />
        </div>
        
        <div class="p-4">
          <h6 class="mb-2 text-slate-800 text-xl font-semibold">
            {{ packageData.packageTitle }}
          </h6>
          <form class="grid grid-cols-2 my-2">
  <label for="countries" class="block mb-2 text-xl font-medium text-[#286d71] dark:text-white">Select Country</label>
  <select id="countries" v-model="selectedCountry" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option :value="country" v-for="country in packageData.countries">{{ country.name }}</option>
   
  </select>
</form>
  <form class="grid grid-cols-2 my-2">
  <label for="countries" class="block mb-2 text-xl font-medium text-[#286d71] dark:text-white">Select city</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a city</option>
    <option :value="city" v-if="selectedCountry" v-for="city in selectedCountry.cities">{{ city }}</option>
  </select>
</form>
          <!-- <p class="text-slate-800 text-lg mb-2 font-semibold">Country: {{packageData.country}}</p>
          <p class="text-slate-800 text-lg mb-2">City: {{packageData.city}}</p>
           -->
          <p class="text-slate-800 text-md mb-2">Starting Date: {{packageData.startDate}}</p>
          <p class="text-slate-800 text-md mb-2">Ending Date: {{packageData.endDate}}</p>
          
          <p class="text-slate-600 leading-normal font-light">
            {{ packageData.description }}
          </p>
        </div>
        <div>
        </div>
        <div class="px-4 pb-4 pt-0 mt-2" v-if="selectedCity">
          <router-link
          :to="{ name: 'umrah-details', params: { id: packageData.id ,country:selectedCountry.name, city:selectedCity} }"
          class="text-lg !text-white"
        >
          <button
            class="rounded-md bg-[#286d71] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Click To See Details
          </button>
        </router-link>
        </div>
      </div>  
      <!-- {{ socialStore.createNewPackage }} -->
     </div>
  </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { packages } from '@/stores/itinenary.ts'
// Import Swiper styles
import img2 from '@/assets/image/hajj/hajj-1.jpg'
import img3 from '@/assets/image/hajj/hajj-5.jpg'
import img1 from '@/assets/image/hajj/umrah-1.jpg'
import 'swiper/css'
import {ref} from 'vue'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
const selectedCountry = ref()
const selectedCity = ref()
const packagesList = ref([
  
  {
    id:1,
    name: "North America",
    packageTitle: 'Umrah Package North America',
      startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img1,
    status: 'In Plan',
    countries: [
      {
        id:1,
        name:'USA',
        cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Boston', 'Seattle', 'Miami']
      },
      {
        id:2,
        name:'Canada',
        cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City']
      },
      {
        id:3,
        name:'Mexico',
        cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Toluca', 'Tijuana', 'Leon', 'Juarez']
      }
    ]
  }, {
    id:2,
    name: "South America",
    packageTitle: 'Umrah Package South America',
      startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img2,
    status: 'In Plan',
  countries: [
    {
      id:1,
      name:'Brazil',
      cities: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador', 'Belo Horizonte', 'Porto Alegre', 'Recife', 'Curitiba']
    },
    {
      id:2,
      name:'Argentina',
      cities: ['Buenos Aires', 'Córdoba', 'Mendoza', 'Tucumán', 'Rosario', 'Mar del Plata', 'Salta', 'Santa Fe']
    },
    {
      id:3,
      name:'Chile',
      cities: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta', 'Puerto Montt', 'Temuco', 'Iquique']
    }
  ]
  }, {
    id:3,
    name: "Europe",
    packageTitle: 'Umrah Package Europe',
      startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img3,
    status: 'In Plan',
  countries: [
    {
      id:1,
      name:'United Kingdom',
      cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Sheffield', 'Bradford', 'Liverpool']
    },
    {
      id:2,
      name:'Germany',
      cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig']
    },
    {
      id:3,
      name:'France',
      cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier']
    }
  ]
  }, {
    id:4,
    name: "Asia",
    packageTitle: 'Umrah Package Asia',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img1,
    status: 'In Plan',
    countries: [
      {
        id:1,
        name:'Bangladesh',
        cities: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal']
      },
      {
        id:2,
        name:'India',
        cities: ['New Delhi', 'Mumbai', 'Kolkata', 'Bengaluru', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Pune']
      },
      {
        id:3,
        name:'Pakistan',
        cities: ['Islamabad', 'Lahore', 'Karachi', 'Faisalabad', 'Rawalpindi', 'Gujranwala', 'Peshawar', 'Multan']
      },
      {
        id:4,
        name:'Indonesia',
        cities: ['Jakarta', 'Surabaya', 'Bandung', 'Bekasi', 'Depok', 'Tangerang', 'Palembang', 'Semarang']
      },
      {
        id:5,
        name:'Malaysia',
        cities: ['Kuala Lumpur', 'Seberang Perai', 'Kuching', 'Johor Bahru', 'Petaling Jaya', 'Shah Alam', 'George Town', 'Ipoh']
      }
    ]
  }
])
const socialStore = useSocialStore()
const modules = [Pagination, Navigation, Autoplay]
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: relative;
}
.head {
  text-shadow: 2px 2px 3px black;
  font-size: 54px;
  font-weight: 700;
  color: white;
  position: absolute;
  text-transform: uppercase;
  left: 5%;
  text-align: left;
}
.head p {
  text-shadow: 2px 2px 3px black;
  font-size: 34px;
  color: rgb(255, 255, 255);
}
.head button {
  font-size: 24px;
  font-weight: 500;
  padding: 8px 12px;
  border: 3px solid white;
  text-shadow: 2px 2px 3px black;
  border-radius: 8px;
  /* transition: .2s ease-in-out; */
}
.head button:hover {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  text-shadow: none;
  /* transition: .2s ease-in-out; */
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* animation: 5s banimg linear; */
}
</style>
