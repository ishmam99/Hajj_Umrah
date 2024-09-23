<template>
  <DefaultLayout>
    <!-- Swiper Section -->
    <div class="pt-[80px]"></div>
    <div class="h-[60vh] 2xl:h-[50vh] relative bg-gray-800">
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
          <!-- Slide 1 -->
          <swiper-slide class="relative">
            <img src="/src/assets/image/hero/people.jpeg" alt="Umrah" class="w-full h-full object-cover opacity-70" />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
              <p class="text-lg font-semibold">Hajj Exploration LLC</p>
              <h3 class="text-4xl font-bold mb-6">Exclusive hassle-free Umrah services &amp; packages</h3>
              <router-link to="/Signup" class="text-white bg-[#286d71] hover:bg-[#1e5152] transition-all duration-300 px-6 py-3 rounded-lg shadow-md">Apply Now</router-link>
            </div>
          </swiper-slide>
          
          <!-- Slide 2 -->
          <swiper-slide class="relative">
            <img src="/src/assets/image/hero/hajj_services.jpg" alt="Umrah Services" class="w-full h-full object-cover opacity-70" />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
              <p class="text-lg font-semibold">Hajj Exploration LLC</p>
              <h3 class="text-4xl font-bold mb-6">Plan your journey with peace of mind</h3>
              <router-link to="/Signup" class="text-white bg-[#286d71] hover:bg-[#1e5152] transition-all duration-300 px-6 py-3 rounded-lg shadow-md">Apply Now</router-link>
            </div>
          </swiper-slide>
          
          <!-- Slide 3 -->
          <swiper-slide class="relative">
            <img src="/src/assets/image/hajj/hajj-2.jpg" alt="Hajj" class="w-full h-full object-cover opacity-70" />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
              <p class="text-lg font-semibold">Hajj Exploration LLC</p>
              <h3 class="text-4xl font-bold mb-6">Join our Hajj packages today</h3>
              <router-link to="/Signup" class="text-white bg-[#286d71] hover:bg-[#1e5152] transition-all duration-300 px-6 py-3 rounded-lg shadow-md">Apply Now</router-link>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Packages Section -->
    <div class="container mx-auto mt-16 mb-12">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-[#286d71]">Umrah Packages</h1>
        <p class="text-xl mt-4 text-gray-600">Find your perfect package and start your spiritual journey</p>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="(packageData, index) in packagesList"
          :key="index"
          class="bg-white shadow-lg border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
        >
          <!-- Package Title -->
          <h1 class="text-center bg-gray-200 text-xl font-semibold py-3 rounded-t-lg">{{ packageData.name }}</h1>
          
          <!-- Package Image -->
          <div class="relative h-56 overflow-hidden">
            <img src="@/assets/image/hajj/hajj-1.jpg" alt="Package Image" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
          </div>

          <!-- Package Info -->
          <div class="p-6">
            <h2 class="text-xl font-bold text-slate-800 mb-2">{{ packageData.packageTitle }}</h2>
            <p class="text-slate-600 leading-normal">{{ packageData.description }}</p>

            <!-- Country Selector -->
            <div class="mt-6">
              <label for="countries" class="block mb-2 text-lg font-medium text-[#286d71]">Select Country</label>
              <select
                id="countries"
                v-model="selectedCountry"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#286d71] focus:border-[#286d71] block w-full p-2"
              >
                <option selected>Choose a country</option>
                <option
                  :value="country"
                  v-for="(country, index) in packageData.countries"
                  :key="index"
                >
                  {{ country.name }}
                </option>
              </select>
            </div>
          </div>

          <!-- <div class="px-4 pb-4 pt-0 mt-2" v-if="selectedCity">
            <router-link
              :to="{
                name: 'umrah-details',
                params: { id: packageData.id, country: selectedCountry.name, city: selectedCity }
              }"
              class="text-lg !text-white"
            >
              <button
                class="rounded-md bg-[#286d71] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Click To See Details
              </button>
            </router-link>
          </div> -->

          <!-- View Packages Button -->
          <div class="text-center py-2 bg-[#286d71] rounded-b-lg">
            <router-link to="/Umrah_usa_packageList" class="text-white text-lg hover:underline">View Packages</router-link>
          </div>
        </div>
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
import { ref } from 'vue'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
const selectedCountry = ref()
const selectedCity = ref()
const packagesList = ref([
  {
    id: 1,
    name: 'North America',
    packageTitle: 'Umrah Package North America',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img1,
    status: 'In Plan',
    countries: [
      {
        id: 1,
        name: 'USA',
        cities: [
          'New York',
          'Los Angeles',
          'Chicago',
          'Houston',
          'San Francisco',
          'Boston',
          'Seattle',
          'Miami'
        ]
      },
      {
        id: 2,
        name: 'Canada',
        cities: [
          'Toronto',
          'Vancouver',
          'Montreal',
          'Calgary',
          'Ottawa',
          'Edmonton',
          'Winnipeg',
          'Quebec City'
        ]
      },
      {
        id: 3,
        name: 'Mexico',
        cities: [
          'Mexico City',
          'Guadalajara',
          'Monterrey',
          'Puebla',
          'Toluca',
          'Tijuana',
          'Leon',
          'Juarez'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'South America',
    packageTitle: 'Umrah Package South America',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img2,
    status: 'In Plan',
    countries: [
      {
        id: 1,
        name: 'Brazil',
        cities: [
          'Rio de Janeiro',
          'São Paulo',
          'Brasília',
          'Salvador',
          'Belo Horizonte',
          'Porto Alegre',
          'Recife',
          'Curitiba'
        ]
      },
      {
        id: 2,
        name: 'Argentina',
        cities: [
          'Buenos Aires',
          'Córdoba',
          'Mendoza',
          'Tucumán',
          'Rosario',
          'Mar del Plata',
          'Salta',
          'Santa Fe'
        ]
      },
      {
        id: 3,
        name: 'Chile',
        cities: [
          'Santiago',
          'Valparaíso',
          'Concepción',
          'La Serena',
          'Antofagasta',
          'Puerto Montt',
          'Temuco',
          'Iquique'
        ]
      },
      {
        id: 3,
        name: 'Bolivia',
        cities: [
          'Santiago',
          'Valparaíso',
          'Concepción',
          'La Serena',
          'Antofagasta',
          'Puerto Montt',
          'Temuco',
          'Iquique'
        ]
      },
      {
        id: 3,
        name: 'Combodia',
        cities: [
          'Santiago',
          'Valparaíso',
          'Concepción',
          'La Serena',
          'Antofagasta',
          'Puerto Montt',
          'Temuco',
          'Iquique'
        ]
      },
    ]
  },
  {
    id: 3,
    name: 'Europe',
    packageTitle: 'Umrah Package Europe',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img3,
    status: 'In Plan',
    countries: [
      {
        id: 1,
        name: 'United Kingdom',
        cities: [
          'London',
          'Manchester',
          'Birmingham',
          'Leeds',
          'Glasgow',
          'Sheffield',
          'Bradford',
          'Liverpool'
        ]
      },
      {
        id: 2,
        name: 'Germany',
        cities: [
          'Berlin',
          'Hamburg',
          'Munich',
          'Cologne',
          'Frankfurt',
          'Stuttgart',
          'Düsseldorf',
          'Leipzig'
        ]
      },
      {
        id: 3,
        name: 'France',
        cities: [
          'Paris',
          'Marseille',
          'Lyon',
          'Toulouse',
          'Nice',
          'Nantes',
          'Strasbourg',
          'Montpellier'
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Asia',
    packageTitle: 'Umrah Package Asia',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img1,
    status: 'In Plan',
    countries: [
      {
        id: 1,
        name: 'Bangladesh',
        cities: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal']
      },
      {
        id: 2,
        name: 'India',
        cities: [
          'New Delhi',
          'Mumbai',
          'Kolkata',
          'Bengaluru',
          'Hyderabad',
          'Chennai',
          'Ahmedabad',
          'Pune'
        ]
      },
      {
        id: 3,
        name: 'Pakistan',
        cities: [
          'Islamabad',
          'Lahore',
          'Karachi',
          'Faisalabad',
          'Rawalpindi',
          'Gujranwala',
          'Peshawar',
          'Multan'
        ]
      },
      {
        id: 4,
        name: 'Indonesia',
        cities: [
          'Jakarta',
          'Surabaya',
          'Bandung',
          'Bekasi',
          'Depok',
          'Tangerang',
          'Palembang',
          'Semarang'
        ]
      },
      {
        id: 5,
        name: 'Malaysia',
        cities: [
          'Kuala Lumpur',
          'Seberang Perai',
          'Kuching',
          'Johor Bahru',
          'Petaling Jaya',
          'Shah Alam',
          'George Town',
          'Ipoh'
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Africa',
    packageTitle: 'Umrah Package Africa',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img1,
    status: 'In Plan',
    countries: [
      {
        id: 1,
        name: 'South Africa',
        cities: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal']
      },
      {
        id: 2,
        name: 'Morocco',
        cities: [
          'New Delhi',
          'Mumbai',
          'Kolkata',
          'Bengaluru',
          'Hyderabad',
          'Chennai',
          'Ahmedabad',
          'Pune'
        ]
      },
      {
        id: 3,
        name: 'Sudan',
        cities: [
          'Islamabad',
          'Lahore',
          'Karachi',
          'Faisalabad',
          'Rawalpindi',
          'Gujranwala',
          'Peshawar',
          'Multan'
        ]
      },
      {
        id: 4,
        name: 'Egypt',
        cities: [
          'Jakarta',
          'Surabaya',
          'Bandung',
          'Bekasi',
          'Depok',
          'Tangerang',
          'Palembang',
          'Semarang'
        ]
      },
      {
        id: 5,
        name: 'Algeria',
        cities: [
          'Kuala Lumpur',
          'Seberang Perai',
          'Kuching',
          'Johor Bahru',
          'Petaling Jaya',
          'Shah Alam',
          'George Town',
          'Ipoh'
        ]
      },
      {
        id: 5,
        name: 'Nigeria',
        cities: [
          'Kuala Lumpur',
          'Seberang Perai',
          'Kuching',
          'Johor Bahru',
          'Petaling Jaya',
          'Shah Alam',
          'George Town',
          'Ipoh'
        ]
      },
    ]
  },
  {
    id: 6,
    name: 'Australia',
    packageTitle: 'Umrah Package Australia',
    startDate: '1st Nov, 2024',
    endDate: '10th Nov, 2024',
    description:
      'Our meticulously designed package guarantees an unforgettable Umrah experience, with knowledgeable professionals guiding you every step of the way.',
    img: img1,
    status: 'In Plan',
    countries: [
      {
        id: 1,
        name: 'Australia',
        cities: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal']
      },
      {
        id: 2,
        name: 'New Zealand',
        cities: [
          'New Delhi',
          'Mumbai',
          'Kolkata',
          'Bengaluru',
          'Hyderabad',
          'Chennai',
          'Ahmedabad',
          'Pune'
        ]
      },
      {
        id: 3,
        name: 'Fiji',
        cities: [
          'Islamabad',
          'Lahore',
          'Karachi',
          'Faisalabad',
          'Rawalpindi',
          'Gujranwala',
          'Peshawar',
          'Multan'
        ]
      },
      {
        id: 4,
        name: 'Samoa',
        cities: [
          'Jakarta',
          'Surabaya',
          'Bandung',
          'Bekasi',
          'Depok',
          'Tangerang',
          'Palembang',
          'Semarang'
        ]
      },
      {
        id: 5,
        name: 'Papua New Guinea',
        cities: [
          'Kuala Lumpur',
          'Seberang Perai',
          'Kuching',
          'Johor Bahru',
          'Petaling Jaya',
          'Shah Alam',
          'George Town',
          'Ipoh'
        ]
      }
    ]
  },
])
const socialStore = useSocialStore()
const modules = [Pagination, Navigation, Autoplay]
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: transform 0.5s ease-in-out;
}

.swiper-slide:hover {
  transform: scale(1.03);
}

.head {
  text-shadow: 3px 3px 8px black;
  font-size: 48px;
  font-weight: 700;
  color: white;
  position: absolute;
  text-transform: uppercase;
  left: 5%;
  bottom: 10%;
  text-align: left;
  line-height: 1.2;
  animation: fadeIn 1.5s ease-in-out;
}

.head p {
  font-size: 36px;
  color: #f8f9fa;
  margin-bottom: 10px;
}

.head button {
  font-size: 20px;
  font-weight: 500;
  padding: 12px 24px;
  border: 2px solid white;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.head button:hover {
  background: white;
  color: #286d71;
  border-color: #286d71;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.4s ease;
}

.swiper-slide img:hover {
  transform: scale(1.05);
  filter: brightness(90%);
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

