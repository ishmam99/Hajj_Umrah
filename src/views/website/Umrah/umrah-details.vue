<template>
 <DefaultLayout>
  <div class="font-sans mt-20">
    <!-- Hero Section -->
    <section class="flex justify-center items-center bg-cover bg-center h-[70vh] bg-[url('/src/assets/image/hajj/hajj-2.jpg')]" >
      <div class="absolute inset-0 bg-black opacity-20 h-[79vh]"></div>
      <div class="relative z-10 text-center text-white p-10">
        <h1 class="text-4xl md:text-6xl font-bold">{{ packageDetails?.package_title }}</h1>
        <p class="mt-4 text-xl md:text-2xl">{{ packageDetails?.description }}</p>
        <button class="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded">
          Book Now
        </button>
      </div>
    </section>

    <!-- Package Overview -->
    <section class="py-16 px-4 text-center bg-gray-50">
      <h2 class="text-3xl font-bold mb-8">Package Details</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-sky-600 text-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl font-semibold">Duration</h3>
          <p>10 Days / 9 Nights</p>
        </div>
        <div class="bg-cyan-600 text-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl font-semibold">Cities Covered</h3>
          <p>Mecca, Medina</p>
        </div>
        <div class="bg-teal-600 text-white p-6 shadow-md rounded-lg">
          <h3 class="text-xl font-semibold">Price</h3>
          <p>${{ packageDetails?.price }} per person</p>
        </div>
      </div>
      <button class="mt-8 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded">
        Request More Info
      </button>
    </section>

    <!-- Itinerary Section -->
    <section class="py-16 px-[5%]" v-if="packageDetails">
      <h2 class="text-3xl font-bold text-center mb-8">Day-wise Itinerary</h2>
      <div class=" mx-auto space-y-6">
        <div class="flex items-center justify-stretch" v-for="(itinerary,index) in packageDetails.itineraries">
           <img v-if="index%2 !== 0" src="@/assets/image/hajj/mecca.jpg" alt="Mecca" class="w-full rounded-lg shadow-md" />
          <ItineraryItem :day="itinerary" class="w-full px-10" />
          <img v-if="index%2 == 0" src="@/assets/image/hajj/mecca.jpg" alt="Mecca" class="w-full rounded-lg shadow-md" />
        </div>
     
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="py-16 px-4 bg-gray-50">
      <h2 class="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <img src="@/assets/image/hajj/hajj-1.jpg" alt="Mecca" class="rounded-lg shadow-md" />
        <img src="@/assets/image/hajj/hajj-2.jpg" alt="Medina" class="rounded-lg shadow-md" />
        <img src="@/assets/image/hajj/hajj-3.webp" alt="Hotel" class="rounded-lg shadow-md" />
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 px-4">
      <h2 class="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard name="John Doe" review="An amazing experience, well organized and spiritual." />
        <TestimonialCard name="Fatima A." review="Excellent service, hotels were close to Haram." />
        <TestimonialCard name="Ahmed K." review="The best Umrah package I have ever taken." />
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 px-4 bg-gray-50">
      <h2 class="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div class="max-w-3xl mx-auto">
        <FaqItem question="What documents are required?" answer="A valid passport, visa, and vaccination certificates." />
        <FaqItem question="Can I book extra Ziyarat tours?" answer="Yes, additional Ziyarat tours can be arranged upon request." />
        <FaqItem question="What is the best time to book?" answer="We recommend booking at least 3 months in advance." />
      </div>
    </section>

  
  </div>
</DefaultLayout>
</template>


<script setup>
import ItineraryItem from '/src/components/ItineraryItem.vue';
import TestimonialCard from '@/components/TestimonialCard.vue';
import FaqItem from '@/components/FaqItem.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import {
    useSocialStore
} from '@/stores/SocialDashboard.ts'
import moment from 'moment'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper/modules'
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue'
import {ref, onMounted,
    computed
} from 'vue'
import {
    useRoute
} from 'vue-router'

const modules = [Pagination, Navigation, Autoplay]

const route = useRoute()
const socialStore = useSocialStore()

const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
`

// const packageDetails = computed(
//     () =>
//     socialStore.createNewPackage.find((pkg) => pkg.country.id === route.params.id) || {
//         steps: []
//     }
// )
const packageDetails = ref()
const getPackage = async() => {
  const { data } = await api().get('package/'+route.params.id)
  packageDetails.value = data.data
}
onMounted(() => {
  getPackage()
})
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    border: 3px solid #286d71;
    text-shadow: 2px 2px 3px black;
    border-radius: 8px;
    background: #286d71;
}

.head button:hover {
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    text-shadow: none;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
