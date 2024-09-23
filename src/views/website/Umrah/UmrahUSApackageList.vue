<template>
    <DefaultLayout>
        <div class="pt-[80px]"></div>
        <div class="h-[60vh] 2xl:h-[50vh] relative">
            <div class="h-full">
                <swiper :slidesPerView="'1'" :centeredSlides="true" :spaceBetween="0" :loop="true" :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false
                }" :pagination="{
            clickable: true
        }" :navigation="false" :modules="modules" class="mySwiper">
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
                <P class="text-5xl font-bold text-[#286d71]">USA Package List</P>
                <p class="text-3xl mx-20 mt-3"></p>
            </div>
            
            <section class="w-full p-10 bg-gray-50">
  <!-- Title -->
  <p class="text-3xl font-bold pb-10 font-mono text-blue-600">Available Packages</p>

  <!-- Package Table -->
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <!-- Header Row -->
    <div class="grid grid-cols-1 md:grid-cols-6 bg-blue-600 text-white p-4 text-left text-lg font-semibold">
      <div class="p-2">Name</div>
      <div class="p-2">Start Date</div>
      <div class="p-2">End Date</div>
      <div class="p-2">City</div>
      <div class="p-2">Country</div>
      <div class="p-2">Details</div>
    </div>

    <!-- Package Rows -->
    <div class="divide-y divide-gray-300">
      <!-- Row 1 -->
      <div class="grid grid-cols-1 md:grid-cols-6 bg-gray-50 hover:bg-blue-100 transition-colors">
        <div class="p-4 font-semibold text-blue-600">Premium Hajj Package</div>
        <div class="p-4">March 1, 2025</div>
        <div class="p-4">March 20, 2025</div>
        <div class="p-4">Mecca</div>
        <div class="p-4">Saudi Arabia</div>
        <div class="p-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow-md">
            View Details
          </button>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="grid grid-cols-1 md:grid-cols-6 bg-white hover:bg-blue-100 transition-colors">
        <div class="p-4 font-semibold text-blue-600">Economy Umrah Package</div>
        <div class="p-4">April 5, 2025</div>
        <div class="p-4">April 15, 2025</div>
        <div class="p-4">Medina</div>
        <div class="p-4">Saudi Arabia</div>
        <div class="p-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow-md">
            View Details
          </button>
        </div>
      </div>

      <!-- Row 3 -->
      <div class="grid grid-cols-1 md:grid-cols-6 bg-gray-50 hover:bg-blue-100 transition-colors">
        <div class="p-4 font-semibold text-blue-600">VIP Hajj Package</div>
        <div class="p-4">June 1, 2025</div>
        <div class="p-4">June 15, 2025</div>
        <div class="p-4">Jeddah</div>
        <div class="p-4">Saudi Arabia</div>
        <div class="p-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow-md">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



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
                id: 1,
                name: 'USA',
                cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'San Francisco', 'Boston', 'Seattle', 'Miami']
            },
            {
                id: 2,
                name: 'Canada',
                cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Winnipeg', 'Quebec City']
            },
            {
                id: 3,
                name: 'Mexico',
                cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Toluca', 'Tijuana', 'Leon', 'Juarez']
            }
        ]
    }, {
        id: 2,
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
                id: 1,
                name: 'Brazil',
                cities: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador', 'Belo Horizonte', 'Porto Alegre', 'Recife', 'Curitiba']
            },
            {
                id: 2,
                name: 'Argentina',
                cities: ['Buenos Aires', 'Córdoba', 'Mendoza', 'Tucumán', 'Rosario', 'Mar del Plata', 'Salta', 'Santa Fe']
            },
            {
                id: 3,
                name: 'Chile',
                cities: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena', 'Antofagasta', 'Puerto Montt', 'Temuco', 'Iquique']
            }
        ]
    }, {
        id: 3,
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
                id: 1,
                name: 'United Kingdom',
                cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Sheffield', 'Bradford', 'Liverpool']
            },
            {
                id: 2,
                name: 'Germany',
                cities: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig']
            },
            {
                id: 3,
                name: 'France',
                cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier']
            }
        ]
    }, {
        id: 4,
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
                id: 1,
                name: 'Bangladesh',
                cities: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna', 'Barisal']
            },
            {
                id: 2,
                name: 'India',
                cities: ['New Delhi', 'Mumbai', 'Kolkata', 'Bengaluru', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Pune']
            },
            {
                id: 3,
                name: 'Pakistan',
                cities: ['Islamabad', 'Lahore', 'Karachi', 'Faisalabad', 'Rawalpindi', 'Gujranwala', 'Peshawar', 'Multan']
            },
            {
                id: 4,
                name: 'Indonesia',
                cities: ['Jakarta', 'Surabaya', 'Bandung', 'Bekasi', 'Depok', 'Tangerang', 'Palembang', 'Semarang']
            },
            {
                id: 5,
                name: 'Malaysia',
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