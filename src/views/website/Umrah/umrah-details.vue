<template>
 <DefaultLayout>
  <div class="font-sans mt-20">
    <!-- Hero Section -->
    <section class="flex justify-center items-center bg-cover bg-center h-[70vh] bg-[url('/src/assets/image/hajj/hajj-2.jpg')]" >
      <div class="absolute inset-0 bg-black opacity-20 h-[79vh]"></div>
      <div class="relative z-10 text-center text-white p-10">
        <h1 class="text-4xl md:text-6xl font-bold">{{ packageDetails?.package_title }}</h1>
        <p class="mt-4 text-xl md:text-2xl my-5">{{ packageDetails?.description }}</p>
       
        <router-link to="/Member_Login" v-if="auth.user == null || auth.role != 'Member'"  class="mt-8 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded">
        
         Book Now
      </router-link>
        <button v-else @click="showPayment = !showPayment" class="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded">
         {{ showPayment ? 'Cancel' : 
         'Book Now' }} 
        </button>
      </div>
    </section>
<div v-if="!showPayment">
    <!-- Package Overview -->
    <section  class="py-16 px-4 text-center bg-gray-50">
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
          <p>${{ parseInt( packageDetails?.price) }} / ${{ parseInt( packageDetails?.price)+150 }} / ${{ parseInt( packageDetails?.price)+300 }} per person</p>
         
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
  <div v-else class="bg-white">
  <section class="py-16 px-4 mx-14 my-10 bg-slate-200">
    <h2 class="text-3xl font-bold text-center mb-8">Payment and Package Options</h2>
    <div class="max-w-6xl mx-auto space-y-4">
      <div class="flex bg-cyan-100">
        <table class="w-full">
          <thead class="bg-gray-200">
            <tr class="py-3 px-2 bg-sky-600 text-white">
              <th class="text-center py-2 px-4 border-e-2 border-white">Umrah Package Name</th>
              <th class="text-center py-2 px-4 border-e-2 border-white">Select Room</th>
              <th class="text-center py-2 px-4 border-e-2 border-white">Price</th>
              <th class="text-center py-2 px-4 border-e-2 border-white">Discount</th>
              <th class="text-center py-2 px-4 border-e-2 border-white">Get Pricing</th>
              <!-- <th class="text-left py-2 px-4">Services</th> -->
            </tr>
          </thead>
          {{ no_of_p }}
          <tbody>
            <tr class="border-b-2 border-white">
              <td class="py-2 px-4 text-xl font-semibold text-center border-x-2 border-white">{{ packageDetails?.package_title }}</td>
              <td class="py-2 px-4 border-e-2 font-bold text-center border-white">Double </td>
              <td class="py-2 px-4 border-e-2 font-bold text-center border-white">$3300 </td>
              <td class="py-2 px-4 border-e-2 font-bold text-center border-white">
                <div class="flex justify-between gap-2 items-center">
                   <p class="w-full text-nowrap">
                  Select Number of Persons:
                </p>
                
                    <select name="" v-model="no_of_p" class="p-2 rounded-sm w-full" id="">
                       <option value="" selected disabled>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                </div>
                <div class="flex items-center justify-between gap-2 py-2 border-t-white border-t-2 mt-1">
                  <p class=" py-1 rounded-md">Enter Promocode  </p>
                  <input v-model="promo1" type="text" class="bg-white p-2 w-1/2 rounded-md" placeholder="Enter Promo">
                 
                </div>
               
              </td>
              <td class="py-2 px-4 border-e-2 border-white text-center">
              <button @click="getPrice('double')" :class="selected == 'double'?'btn-info':'btn-success'" class="btn  text-white">{{ selected == 'double' ?'Selected': 'Select' }}</button>
              </td>
              <!-- <td class="py-2 px-4">{{ packaged.services.join(', ') }}</td> -->
            </tr>
            <tr class="border-b-2 border-white">
              <td class="py-2 px-4 text-xl font-semibold text-center border-x-2 border-white">{{ packageDetails?.package_title }}</td>
              <td class="py-2 px-4 border-e-2 font-bold text-center border-white">Triple </td>
               <td class="py-2 px-4 border-e-2 font-bold text-center border-white">${{parseInt( packageDetails?.price)+150 }}  </td>
                <td class="py-2 px-4 border-e-2 font-bold text-center border-white">
                <div class="flex justify-between gap-2 items-center">
                   <p class="w-full text-nowrap">
                  Select Number of Persons:
                </p>
                
                    <select name="" v-model="no_of_p" class="p-2 rounded-sm w-full" id="">
                       <option value="" selected disabled>Select</option>
                    <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                </div>
                <div class="flex items-center justify-between gap-2 py-2 border-t-white border-t-2 mt-1">
                  <p class=" py-1 rounded-md">Enter Promocode  </p>
                  <input v-model="promo2" type="text" class="bg-white p-2 w-1/2 rounded-md" placeholder="Enter Promo" />
                 
                </div>
               
              </td>
                <td class="py-2 px-4 border-e-2 border-white text-center">
               <button @click="getPrice('triple')" :class="selected == 'triple'?'btn-info':'btn-success'" class="btn  text-white">{{ selected == 'triple' ?'Selected': 'Select' }}</button></td>
            </tr>
            <tr class="border-b-2 border-white">
              <td class="py-2 px-4 text-xl font-semibold text-center border-x-2 border-white">{{ packageDetails?.package_title }}</td>
              <td class="py-2 px-4 border-e-2 font-bold text-center border-white">Quad </td>
               <td class="py-2 px-4 border-e-2 font-bold text-center border-white">${{parseInt( packageDetails?.price) }} </td>
                <td class="py-2 px-4 border-e-2 font-bold text-center border-white">
                <div class="flex justify-between gap-2 items-center">
                   <p class="w-full text-nowrap">
                  Select Number of Persons:
                </p>
                
                    <select name="" v-model="no_of_p" class="p-2 rounded-sm w-full" id="">
                       <option value="" selected disabled>Select</option>
                     <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                </div>
                <div class="flex items-center justify-between gap-2 py-2 border-t-white border-t-2 mt-1">
                  <p class=" py-1 rounded-md">Enter Promocode  </p>
                  <input v-model="promo3" type="text" class="bg-white p-2 w-1/2 rounded-md" placeholder="Enter Promo">
                 
                </div>
               
              </td>
                <td class="py-2 px-4 border-e-2 border-white text-center">
                <button @click="getPrice('quad')" :class="selected == 'quad'?'btn-info':'btn-success'" class="btn  text-white">{{ selected == 'quad' ?'Selected': 'Select' }}</button></td>
            </tr>
          </tbody>
        </table>
        
          <!-- <div class="flex flex-col w-full items-center justify-center p-3 rounded-md shadow-lg">
        <label for="package-type" class="text-lg w-full font-semibold">Umrah Package :</label>
        <h1>{{ packageDetails.package_title }}</h1>
      
      </div>
       <div class="flex  items-center justify-center p-3 rounded-md shadow-lg ">
        <label for="package-type" class="text-lg w-full font-semibold">Select Package :</label>
        <select id="package-type" class="form-select text-xl rounded-md py-3 px-2 bg-cyan-600 text-white block w-full mt-1">
          <option value="double">{{packageDetails.package_title}}-Double</option>
          <option value="triple">{{packageDetails.package_title}}-Triple</option>
          <option value="quad">{{packageDetails.package_title}}-Quad</option>
        </select>
      
      </div> -->
      </div>
    
        <div class="mt-4" v-if="selected">
          <h3 class="text-xl font-semibold text-center mb-4">Pricing Breakdown</h3>
          <p class="text-lg flex justify-center items-center font-semibold">Pricing:</p>
          <div class="text-lg flex justify-center items-center font-semibold"> <div class="w-1/2">
            <div class="flex justify-between items-center">
              <h1 class="text-md font-medium">Package Price:</h1>
              <h1 class="text-md font-medium">${{ selected === 'triple' ? 3150 : selected === 'quad' ? 3000 : 3300 }} X {{ no_of_p }}</h1>
            </div>
            <div class="flex justify-between items-center">
              <h1 class="text-md font-medium">Total:</h1>
              <h1 class="text-md font-medium">${{ selected === 'triple' ? 3150*no_of_p : selected === 'quad' ? 3000*no_of_p : 3300*no_of_p }}</h1>
            </div>
          
             <div class="flex justify-between items-center">
              <h1 class="text-md font-medium">Discount:</h1>
              <h1 class="text-md font-medium">${{ discount }}</h1>
            </div>
            <hr class="text-2xl font-bold border-2 border-blue-700">
            <div class="flex justify-between items-center">
              <h1 class="text-md font-medium">Sub Total:</h1>
              <h1 class="text-md font-medium">${{(parseInt(packageDetails.price)*no_of_p)-discount}}</h1>
            </div>
          </div></div>
           <div class="text-center flex items-center justify-center">
        <button @click="(parseInt(packageDetails.price)*no_of_p)-discount" class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-4 font-semibold rounded" :disabled="pending">
         
          <svg v-if="pending" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="animate-spin" width="18" height="18" fill="currentColor"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
        
          Proceed to Payment
        </button>
      </div>
        </div>
    
    </div>
  </section>

  </div>
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
import { useAuthStore } from '/src/stores/AuthStore.ts'
import Swal from 'sweetalert2'
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
    computed,watch
} from 'vue'
import {
    useRoute
} from 'vue-router'
const auth = useAuthStore()
const modules = [Pagination, Navigation, Autoplay]
const showPayment = ref(false)
const pending = ref(false)
const route = useRoute()
const socialStore = useSocialStore()
const selected = ref()
const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
`

// const packageDetails = computed(
//     () =>
//     socialStore.createNewPackage.find((pkg) => pkg.country.id === route.params.id) || {
//         steps: []
//     }
// )
const no_of_p = ref(1)
const promo1 = ref()
const promo2 = ref()
const promo3 = ref()
const discount = ref(0)
const getPrice = (type) => {
  selected.value = type
  if (type == 'quad' && promo3)
  {
    discount.value = 100
  }
  else if (type == 'triple' && promo2)
    {
    discount.value = 150
  
  }
   else if (type == 'double' && promo1)
    {
    discount.value = 200
  
  }
}
const packageDetails = ref()
const getPackage = async() => {
  const { data } = await api().get('package/'+route.params.id)
  packageDetails.value = data.data
}

const getSession = async (price) => {
  pending.value = true
  console.log(window.location)
  let stripe =  {
    
    amount:price,
    email: auth.user.email,
    success: window.location.origin+window.location.pathname + '?session_id={CHECKOUT_SESSION_ID}',
    cancel:  window.location.origin+window.location.pathname + '?cancel=TRUE'
  }
 
    const response = await api().post('stripe', stripe)
   console.log(response)
  auth.payment.amount = price
   auth.payment.package_id = packageDetails.value.id
   auth.payment.accomodation = selected.value
  // console.log(response, cardInfo.value.amount,price)
  auth.payment.session_token = response.data.clientSecret.id
  
  if (response.data.clientSecret) {
    window.open(response.data.clientSecret.url, '_self')
  }
}
const makePayment = async () => {
 
  let paymentData = {
    transaction_id: route.query.session_id,
    package_id : auth.payment.package_id,
    customer_id: auth.user.customer.id,
    accommodation_type: auth.payment.accomodation,
    amount : auth.payment.amount
  }
  console.log(paymentData)
  try {
    const response = await api().post('customer-packages', paymentData);
    if(response.data.message == 'Payment Success'){
     
      toast.success("Payment successful!");
      auth.payment.session_token = null
      auth.payment.success_token = null
     
    }
  }
  catch {
    toast.error("Failed to Pay.");
  }
}
watch(
  () => route.query,
  () => {
    console.log(route.query.session_id , auth.payment)
    if (route.query.cancel) {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: "Your payment is failed or cancelled . Please try again",
      });
    }
    else if (route.query.session_id && auth.payment.session_token ) {

     console.log('dsa')
        makePayment()
       Swal.fire({
        icon: "success",
        title: "Payment Success",
        text: "Your payment is Successfully done",
      });
    
    }

    
  },
  {
    immediate: true
  }
)

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
