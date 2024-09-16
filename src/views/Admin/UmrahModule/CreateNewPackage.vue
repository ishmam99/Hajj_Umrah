<template>
    <div class="px-5 bg-slate-50 py-5 w-3/4">
      <p class="text-2xl font-bold py-3 border-b">Create New Package</p>
      <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
        <form @submit.prevent="EventFormApply">
          <section>
            <!-- Country and City -->
            <div class="flex gap-5 mb-5">
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Country</span>
                </div>
                <select v-model="formData.country" class="select select-bordered w-full">
                  <option disabled selected>Select a Country</option>
                  <option v-for="country in countries" :value="country">{{ country.name }}</option>
                </select>
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">City</span>
                </div>
                <select v-model="formData.city" class="select select-bordered w-full">
                  <option disabled selected>Select a City</option>
                 <option v-for="city in formData.country.cities" :value="city">{{ city.name }}</option>
                </select>
              </div>
            </div>
  
            <!-- Package Title and Code -->
            <div class="flex gap-5 mb-5">
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Package Title</span>
                </div>
                <input v-model="formData.packageTitle" type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Package Year</span>
                </div>
                <input v-model="formData.packageYear" @change="formData.packageId = `${formData.packageYear}-${formData.country.id}-${formData.city.id}-${formData.packageCode}`" type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
             
            </div>
  
            <!-- Package Year and ID -->
            <div class="flex gap-5 mb-5">
               <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Package Code</span>
                </div>
                <input v-model="formData.packageCode" @change="formData.packageId = `${formData.packageYear}-${formData.country.id}-${formData.city.id}-${formData.packageCode}`"  type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Package ID</span>
                </div>
                <input v-model="formData.packageId" type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
            </div>
  
            <!-- Package Status and Price -->
            <div class="flex gap-5 mb-5">
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Status of Package</span>
                </div>
                <select v-model="formData.status" class="select select-bordered w-full">
                  <option disabled selected>Select an option</option>
                  <option v-for="status in statuses" :value="status.name">{{ status.name }}</option>
                
                </select>
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Price</span>
                </div>
                <input v-model="formData.price" type="text" placeholder="Type here" class="input input-bordered w-full" />
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Pax</span>
                </div>
                <input v-model="formData.pax" type="number" placeholder="Type here" class="input input-bordered w-full" />
              </div>
            </div>
  
            <!-- Dates -->
            <div class="flex gap-5 mb-5">
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Starting Date</span>
                </div>
                <input v-model="formData.startDate" type="date" class="input input-bordered w-full" />
              </div>
              <div class="w-1/2">
                <div class="label">
                  <span class="label-text">Ending Date</span>
                </div>
                <input v-model="formData.endDate" type="date" class="input input-bordered w-full" />
              </div>
            </div>
  
            <!-- Description -->
            <div>
              <div class="label">
                <span class="label-text">Description</span>
              </div>
              <textarea v-model="formData.description" class="textarea textarea-bordered w-full" placeholder="Description"></textarea>
            </div>
            <div class="flex flex-col gap-5 mt-4">
              <div class="label bg-yellow-600 text-white p-2 rounded-lg">Add Steps</div>
                <div v-for="(step, index) in formData.steps" :key="index" class="grid grid-cols-6 gap-5 px-2 py-4 bg-gray-100 rounded-lg">
                  <div class="flex flex-col col-span-3">
                    <label for="step.from_type">From Type</label>
                      <select v-model="step.from_type" class="select select-bordered w-full">
                    <option disabled selected>Select a Type</option>
                    <option v-for="type in types" :key="type.id" :value="type" >{{ type.name }}</option>
                  </select>
                  </div>
                  <div class="flex flex-col col-span-3">
                    <label for="step.from">From</label>
                    <select v-model="step.from" class="select select-bordered w-full">
                    <option disabled selected>Select a From</option>
                    <option v-for="from in step.from_type.types" v-if="step.from_type" :key="from.id" :value="from.id">{{ from.name }}</option>
                    </select>
                  </div>
                  <div class="flex flex-col col-span-2">
                    <label for="step.transportation_type">Transportation Type</label>
                  <select v-model="step.transportation_type" class="select select-bordered w-full">
                    <option disabled selected>Select a Transportation Type</option>
                      <option v-for="transportation_type in transportation_types" :key="transportation_type.id" :value="transportation_type">{{ transportation_type.name }}</option>
                  </select>
                  </div>
                  <div class="flex flex-col col-span-2">
                    <label for="step.transportation_vendor">Transportation Vendor</label>
                  <select v-model="step.transportation_vendor"  class="select select-bordered w-full">
                    <option disabled selected>Select a Transportation Vendor</option>
                    <option v-if="step.transportation_type" v-for="vendor in step.transportation_type.vendors" :key="vendor.id" :value="vendor">{{ vendor.name }}</option>
                  </select>
                  </div>
                  <div class="flex flex-col col-span-2">
                    <label for="step.duration">Duration</label>
                  <input v-model="step.duration" type="text" name="duration" id="duration" class="input input-bordered w-full">
                  </div>
                  <div class="flex flex-col col-span-3">
                    <label for="step.to_type">To Type</label>
                    <select v-model="step.to_type" class="select select-bordered w-full">
                    <option disabled selected>Select a To Type</option>
                    <option v-for="type in types" :key="type.id" :value="type" >{{ type.name }}</option>
                  </select>
                  </div>
                  <div class="flex flex-col col-span-3">
                    <label for="step.to">To</label>
                    <select v-model="step.to" class="select select-bordered w-full">
                    <option disabled selected>Select a To</option>
                    <option v-for="to in step.to_type.types" v-if="step.to_type" :key="to.id" :value="to.id">{{ to.name }}</option>
                  </select>
                  </div>
                  <button @click="removeStep(index)" class="btn btn-sm btn-error text-white px-5">Remove</button>
              </div>
              <button @click="addNewStep" type="button" class="btn btn-sm btn-success text-white px-5">Add New Step</button>
            </div>
            <!-- Buttons -->
            <div class="flex justify-center gap-5 my-5">
              <button type="submit" class="btn btn-success btn-sm px-5">Create</button>
              <button type="button" class="btn btn-error btn-sm px-5">Cancel</button>
            </div>
          </section>
        </form>
      </div>
    </div>

  </template>
  
  <script setup>
import { ref } from 'vue'
import { useSocialStore } from '@/stores/SocialDashboard.ts'

const store = useSocialStore()
  const statuses = ref([
  { id: 1, name: 'Not In Plan' },
  { id: 2, name: 'In Plan' },
  { id: 3, name: 'In Preparation' },
  { id: 4, name: 'In Review' },
  { id: 5, name: 'In Approval Process' },
  { id: 6, name: 'Approved' },
  { id: 7, name: 'Published' },
  { id: 8, name: 'Discontinued' }
])
// Define a single object to hold all form data
const formData = ref({
  country: '',
  city: '',
  packageTitle: '',
  packageCode: '',
  packageYear: '',
  packageId: '',
  status: '',
  price: '',
  startDate: '',
  endDate: '',
  pax:'',
  description: '',
  steps: [
    {
  title: '',
  description: ''
    }
  ]
})
const step = ref({
  type: '',
  vendor: '',
  from_country: '',
  from_city: '',
  to_country: '',
  to_city: ''
})
 
  const types =ref([
     {
      id: 1,
      name: 'Airport',
      description: 'Airport',
      types: [{
        id: 1,
        name: 'Airport A  ',
        description: 'Airport A'
      },{
        id: 2,
        name: 'Airport B',
        description: 'Airport B'
      },{
        id: 3,
        name: 'Airport C',
        description: 'Airport C'
      }]
    },
    {
      id: 2,
      name: 'Hotel',
      description: 'Hotel',
      types: [{
        id: 1,
        name: 'Hotel A',
        description: 'Hotel A'
      },{
        id: 2,
        name: 'Hotel B',
        description: 'Hotel B'
      }]
    },
    {
      id: 3,
      name: 'City',
      description: 'City',
      types: [{
        id: 1,
        name: 'City A',
        description: 'City A'
      },{
        id: 2,
        name: 'City B',
        description: 'City B'
      }]
    },
   
    {
      id: 4,
      name: 'Country',
      description: 'Country',
      types: [{
        id: 1,
        name: 'Country A',
        description: 'Country A'
      },{
        id: 2,
        name: 'Country B',
        description: 'Country B'
      }]
    },
    {
      id: 5,
      name: 'Restaurant',
      description: 'Restaurant',
      types: [{
        id: 1,
        name: 'Restaurant A',
        description: 'Restaurant A'
      },{
        id: 2,
        name: 'Restaurant B',
        description: 'Restaurant B'
      }]
    },
    {
      id: 6,
      name: 'Location',
      description: 'Location',
      types: [{
        id: 1,
        name: 'Location A',
        description: 'Location A'
      },{
        id: 2,
        name: 'Location B',
        description: 'Location B'
      }]
    }
  ])
  const transportation_types = ref([
    {
      id: 1,
      name: 'Air',
      description: 'Air',
      vendors: [{
        id: 1,
        name: 'Fly Emirates',
        description: 'Fly Emirates'
      },{
        id: 2,
        name: 'Fly Qatar',
        description: 'Fly Qatar'
      }]
    },
    {
      id: 2,
      name: 'Train',
      description: 'Train',
      vendors: [{
        id: 1,
        name: 'Train Emirates',
        description: 'Train Emirates'
      },{
        id: 2,
        name: 'Train Qatar',
        description: 'Train Qatar'
      }]
    },
    {
      id: 3,
      name: 'Bus',
      description: 'Bus',
      vendors: [{
        id: 1,
        name: 'Bus Emirates',
        description: 'Bus Emirates'
      },{
        id: 2,
        name: 'Bus Qatar',
        description: 'Bus Qatar'
      }]
    },
    {
      id: 4,
      name: 'Boat',
        description: 'Boat',
      vendors: [{
        id: 1,
        name: 'Boat Emirates',
        description: 'Boat Emirates'
      },{
        id: 2,
        name: 'Boat Qatar',
        description: 'Boat Qatar'
      }]
    },
    {
      id: 5,
      name: 'Car',
      description: 'Car',
      vendors: [{
        id: 1,
        name: 'Car Emirates',
        description: 'Car Emirates'
      },{
        id: 2,
        name: 'Car Qatar',
        description: 'Car Qatar'
      }]
    },
    {
      id: 6,
      name: 'Walking',
      description: 'Walking',
      vendors: []
    },
    {
      id: 7,
      name: 'Other',
      description: 'Other',
      vendors: []
    }
  ])
  const vendors = ref([
    {
      id: 1,
      name: 'ABC Airport',
      description: 'Vendor 1'
    },
    {
      id: 2,
      name: 'BCD Hotel',
      description: 'Vendor 2'
    },
    {
      id: 3,
      name: 'CDE Transport',
      description: 'Vendor 3'
    },
    {
      id: 4,
      name: 'DEF Food',
      description: 'Vendor 4'
    },
    {
      id: 5,
      name: 'GHI Other',
    }
  ])
  const countries = ref([
  {
    id: '01',
    name: 'USA',
    description: 'USA',
    cities: [
      { id: 'US01', name:'Texas' },
      { id: 'US02', name: 'New York' },
      { id: 'US03', name: 'Los Angeles' },
      { id: 'US04', name: 'Chicago' },
      { id: 'US05', name: 'Houston' },
      { id: 'US06', name: 'Phoenix' },
      { id: 'US07', name: 'Philadelphia' },
      { id: 'US08', name: 'San Antonio' },
      { id: 'US09', name: 'San Diego' },
      { id: 'US10', name: 'Dallas' }
    ]
  },
  {
    id: '02',
    name: 'Bangladesh', 
    description: 'Bangladesh',
    cities: [
      { id: 'BD01', name: 'Dhaka' },
      { id: 'BD02', name: 'Chittagong' },
      { id: 'BD03', name: 'Khulna' },
      { id: 'BD04', name: 'Rajshahi' },
      { id: 'BD05', name: 'Sylhet' },
      { id: 'BD06', name: 'Barisal' },
      { id: 'BD07', name: 'Rangpur' },
      { id: 'BD08', name: 'Mymensingh' },
      { id: 'BD09', name: "Cox's Bazar" },
      { id: 'BD10', name: 'Comilla' }
    ]
  },
  {
    id: '03',
    name: 'UK',
    description: 'UK',
    cities: [
      { id: 'UK01', name: 'London' },
      { id: 'UK02', name: 'Birmingham' },
      { id: 'UK03', name: 'Manchester' },
      { id: 'UK04', name: 'Glasgow' },
      { id: 'UK05', name: 'Liverpool' },
      { id: 'UK06', name: 'Leeds' },
      { id: 'UK07', name: 'Sheffield' },
      { id: 'UK08', name: 'Edinburgh' },
      { id: 'UK09', name: 'Bristol' },
      { id: 'UK10', name: 'Leicester' }
    ]
  },
  {
    id: '04',
    name: 'Canada',
    description: 'Canada',
    cities: [
      { id: 'CA01', name: 'Toronto' },
      { id: 'CA02', name: 'Montreal' },
      { id: 'CA03', name: 'Vancouver' },
      { id: 'CA04', name: 'Calgary' },
      { id: 'CA05', name: 'Ottawa' },
      { id: 'CA06', name: 'Edmonton' },
      { id: 'CA07', name: 'Quebec City' },
      { id: 'CA08', name: 'Winnipeg' },
      { id: 'CA09', name: 'Hamilton' },
      { id: 'CA10', name: 'Halifax' }
    ]
  },
  {
    id: '05',
    name: 'Australia',
    description: 'Australia',
    cities: [
      { id: 'AU01', name: 'Sydney' },
      { id: 'AU02', name: 'Melbourne' },
      { id: 'AU03', name: 'Brisbane' },
      { id: 'AU04', name: 'Perth' },
      { id: 'AU05', name: 'Adelaide' },
      { id: 'AU06', name: 'Gold Coast' },
      { id: 'AU07', name: 'Newcastle' },
      { id: 'AU08', name: 'Canberra' },
      { id: 'AU09', name: 'Hobart' },
      { id: 'AU10', name: 'Darwin' }
    ]
  },
  {
    id: '06',
    name: 'Germany',
    description: 'Germany',
    cities: [
      { id: 'DE01', name: 'Berlin' },
      { id: 'DE02', name: 'Hamburg' },
      { id: 'DE03', name: 'Munich' },
      { id: 'DE04', name: 'Cologne' },
      { id: 'DE05', name: 'Frankfurt' },
      { id: 'DE06', name: 'Stuttgart' },
      { id: 'DE07', name: 'Düsseldorf' },
      { id: 'DE08', name: 'Leipzig' },
      { id: 'DE09', name: 'Dortmund' },
      { id: 'DE10', name: 'Essen' }
    ]
  },
  {
    id: '07',
    name: 'France',
    description: 'France',
    cities: [
      { id: 'FR01', name: 'Paris' },
      { id: 'FR02', name: 'Marseille' },
      { id: 'FR03', name: 'Lyon' },
      { id: 'FR04', name: 'Toulouse' },
      { id: 'FR05', name: 'Nice' },
      { id: 'FR06', name: 'Nantes' },
      { id: 'FR07', name: 'Strasbourg' },
      { id: 'FR08', name: 'Montpellier' },
      { id: 'FR09', name: 'Bordeaux' },
      { id: 'FR10', name: 'Lille' }
    ]
  },
  {
    id: '08',
    name: 'Italy',
    description: 'Italy',
    cities: [
      { id: 'IT01', name: 'Rome' },
      { id: 'IT02', name: 'Milan' },
      { id: 'IT03', name: 'Naples' },
      { id: 'IT04', name: 'Turin' },
      { id: 'IT05', name: 'Palermo' },
      { id: 'IT06', name: 'Genoa' },
      { id: 'IT07', name: 'Bologna' },
      { id: 'IT08', name: 'Florence' },
      { id: 'IT09', name: 'Venice' },
      { id: 'IT10', name: 'Verona' }
    ]
  },
  {
    id: '09',
    name: 'Saudi Arabia',
    description: 'Saudi Arabia',
    cities: [
      { id: 'SA01', name: 'Mecca' },
      { id: 'SA02', name: 'Medina' },
      { id: 'SA03', name: 'Riyadh' },
      { id: 'SA04', name: 'Jeddah' },
      { id: 'SA05', name: 'Dammam' },
      { id: 'SA06', name: 'Taif' },
      { id: 'SA07', name: 'Tabuk' },
      { id: 'SA08', name: 'Al-Khobar' },
      { id: 'SA09', name: 'Abha' },
      { id: 'SA10', name: 'Buraidah' }
    ]
  },
  {
    id: '10',
    name: 'Turkey',
    description: 'Turkey',
    cities: [
      { id: 'TR01', name: 'Istanbul' },
      { id: 'TR02', name: 'Ankara' },
      { id: 'TR03', name: 'Izmir' },
      { id: 'TR04', name: 'Bursa' },
      { id: 'TR05', name: 'Antalya' },
      { id: 'TR06', name: 'Adana' },
      { id: 'TR07', name: 'Konya' },
      { id: 'TR08', name: 'Gaziantep' },
      { id: 'TR09', name: 'Mersin' },
      { id: 'TR10', name: 'Diyarbakir' }
    ]
  },
  {
    id: '11',
    name: 'India',
    description: 'India',
    cities: [
      { id: 'IN01', name: 'Mumbai' },
      { id: 'IN02', name: 'Delhi' },
      { id: 'IN03', name: 'Bangalore' },
      { id: 'IN04', name: 'Hyderabad' },
      { id: 'IN05', name: 'Chennai' },
      { id: 'IN06', name: 'Kolkata' },
      { id: 'IN07', name: 'Ahmedabad' },
      { id: 'IN08', name: 'Pune' },
      { id: 'IN09', name: 'Jaipur' },
      { id: 'IN10', name: 'Lucknow' }
    ]
  },
  {
    id: '12',
    name: 'Pakistan',
    description: 'Pakistan',
    cities: [
      { id: 'PK01', name: 'Karachi' },
      { id: 'PK02', name: 'Lahore' },
      { id: 'PK03', name: 'Islamabad' },
      { id: 'PK04', name: 'Rawalpindi' },
      { id: 'PK05', name: 'Faisalabad' },
      { id: 'PK06', name: 'Multan' },
      { id: 'PK07', name: 'Peshawar' },
      { id: 'PK08', name: 'Quetta' },
      { id: 'PK09', name: 'Sialkot' },
      { id: 'PK10', name: 'Gujranwala' }
    ]
  },
  {
    id: '13',
    name: 'Indonesia',
    description: 'Indonesia',
    cities: [
      { id: 'ID01', name: 'Jakarta' },
      { id: 'ID02', name: 'Surabaya' },
      { id: 'ID03', name: 'Bandung' },
      { id: 'ID04', name: 'Medan' },
      { id: 'ID05', name: 'Semarang' },
      { id: 'ID06', name: 'Makassar' },
      { id: 'ID07', name: 'Palembang' },
      { id: 'ID08', name: 'Tangerang' },
      { id: 'ID09', name: 'Depok' },
      { id: 'ID10', name: 'Bekasi' }
    ]
  },
  {
    id: '14',
    name: 'China',
    description: 'China',
    cities: [
      { id: 'CN01', name: 'Shanghai' },
      { id: 'CN02', name: 'Beijing' },
      { id: 'CN03', name: 'Guangzhou' },
      { id: 'CN04', name: 'Shenzhen' },
      { id: 'CN05', name: 'Chengdu' },
      { id: 'CN06', name: 'Tianjin' },
      { id: 'CN07', name: 'Wuhan' },
      { id: 'CN08', name: 'Dongguan' },
      { id: 'CN09', name: 'Chongqing' },
      { id: 'CN10', name: 'Nanjing' }
    ]
  },
  {
    id: '15',
    name: 'Mexico',
    description: 'Mexico',
    cities: [
      { id: 'MX01', name: 'Mexico City' },
      { id: 'MX02', name: 'Guadalajara' },
      { id: 'MX03', name: 'Monterrey' },
      { id: 'MX04', name: 'Puebla' },
      { id: 'MX05', name: 'Tijuana' },
      { id: 'MX06', name: 'León' },
      { id: 'MX07', name: 'Juárez' },
      { id: 'MX08', name: 'Zapopan' },
      { id: 'MX09', name: 'Mérida' },
      { id: 'MX10', name: 'San Luis Potosí' }
    ]
  },
  {
    id: '16',
    name: 'Portugal',
    description: 'Portugal',
    cities: [
      { id: 'PT01', name: 'Lisbon' },
      { id: 'PT02', name: 'Porto' },
      { id: 'PT03', name: 'Vila Nova de Gaia' },
      { id: 'PT04', name: 'Amadora' },
      { id: 'PT05', name: 'Braga' },
      { id: 'PT06', name: 'Setúbal' },
      { id: 'PT07', name: 'Coimbra' },
      { id: 'PT08', name: 'Funchal' },
      { id: 'PT09', name: 'Almada' },
      { id: 'PT10', name: 'Queluz' }
    ]
  },
  {
    id: '17',
    name: 'Malaysia',
    description: 'Malaysia',
    cities: [
      { id: 'MY01', name: 'Kuala Lumpur' },
      { id: 'MY02', name: 'George Town' },
      { id: 'MY03', name: 'Ipoh' },
      { id: 'MY04', name: 'Shah Alam' },
      { id: 'MY05', name: 'Petaling Jaya' },
      { id: 'MY06', name: 'Johor Bahru' },
      { id: 'MY07', name: 'Melaka' },
      { id: 'MY08', name: 'Kota Kinabalu' },
      { id: 'MY09', name: 'Kuching' },
      { id: 'MY10', name: 'Kuantan' }
    ]
  },
  {
    id: '18',
    name: 'Thailand',
    description: 'Thailand',
    cities: [
      { id: 'TH01', name: 'Bangkok' },
      { id: 'TH02', name: 'Nonthaburi' },
      { id: 'TH03', name: 'Nakhon Ratchasima' },
      { id: 'TH04', name: 'Chiang Mai' },
      { id: 'TH05', name: 'Hat Yai' },
      { id: 'TH06', name: 'Udon Thani' },
      { id: 'TH07', name: 'Pak Kret' },
      { id: 'TH08', name: 'Khon Kaen' },
      { id: 'TH09', name: 'Pattaya' },
      { id: 'TH10', name: 'Songkhla' }
    ]
  },
  {
    id: '19',
    name: 'Maldives',
    description: 'Maldives',
    cities: [
      { id: 'MV01', name: 'Malé' },
      { id: 'MV02', name: 'Addu City' },
      { id: 'MV03', name: 'Fuvahmulah' },
      { id: 'MV04', name: 'Hithadhoo' },
      { id: 'MV05', name: 'Kulhudhuffushi' },
      { id: 'MV06', name: 'Thinadhoo' },
      { id: 'MV07', name: 'Naifaru' },
      { id: 'MV08', name: 'Dhidhdhoo' },
      { id: 'MV09', name: 'Eydhafushi' },
      { id: 'MV10', name: 'Kudahuvadhoo' }
    ]
  },
  {
    id: '20',
    name: 'Uzbekistan',
    description: 'Uzbekistan',
    cities: [
      { id: 'UZ01', name: 'Tashkent' },
      { id: 'UZ02', name: 'Namangan' },
      { id: 'UZ03', name: 'Samarkand' },
      { id: 'UZ04', name: 'Andijan' },
      { id: 'UZ05', name: 'Nukus' },
      { id: 'UZ06', name: 'Bukhara' },
      { id: 'UZ07', name: 'Qarshi' },
      { id: 'UZ08', name: 'Kokand' },
      { id: 'UZ09', name: 'Margilan' },
      { id: 'UZ10', name: 'Fergana' }
    ]
  },
  {
    id: '21',
    name: 'Myanmar',
    description: 'Myanmar',
    cities: [
      { id: 'MM01', name: 'Yangon' },
      { id: 'MM02', name: 'Mandalay' },
      { id: 'MM03', name: 'Naypyidaw' },
      { id: 'MM04', name: 'Bago' },
      { id: 'MM05', name: 'Mawlamyine' },
      { id: 'MM06', name: 'Pathein' },
      { id: 'MM07', name: 'Monywa' },
      { id: 'MM08', name: 'Meiktila' },
      { id: 'MM09', name: 'Sittwe' },
      { id: 'MM10', name: 'Taunggyi' }
    ]
  },
  {
    id: '22',
    name: 'South Africa',
    description: 'South Africa',
    cities: [
      { id: 'ZA01', name: 'Johannesburg' },
      { id: 'ZA02', name: 'Cape Town' },
      { id: 'ZA03', name: 'Durban' },
      { id: 'ZA04', name: 'Pretoria' },
      { id: 'ZA05', name: 'Port Elizabeth' },
      { id: 'ZA06', name: 'Bloemfontein' },
      { id: 'ZA07', name: 'Nelspruit' },
      { id: 'ZA08', name: 'Kimberley' },
      { id: 'ZA09', name: 'Polokwane' },
      { id: 'ZA10', name: 'Pietermaritzburg' }
    ]
  },
  {
    id: '23',
    name: 'Afghanistan',
    description: 'Afghanistan',
    cities: []
  },
  {
    id: '24',
    name: 'South America (Central)',
    description: 'South America (Central)',
    cities: []
  }
])
const addNewStep = () => {
  formData.value.steps.push(step.value)
  step.value = {
    type: '',
    vendor: '',
    from_country: '',
    from_city: '',
    to_country: '',
    to_city: ''
  }
  }
  const setCountryAndCity = () => { 
    console.log(step.value.type.id)
    if(step.value.type.id === 3){
      step.value.from_country =  formData.value.steps[steps.value.length - 1].to_country;
    
      step.value.to_country = formData.value.steps[steps.value.length - 1].to_country;
      
    }
  }
const removeStep = (index) => {
  formData.value.steps.splice(index, 1)
}
// Ensure createNewPackage is available in the store
if (!store.createNewPackage) {
  store.createNewPackage = []
}


// Submit handler
const EventFormApply = () => {
  // Push the formData object into the createNewPackage array in the store
  store.createNewPackage.push({ ...formData.value })

  // Log formData to the console
  console.log("Form Data Submitted:", formData.value)

  // Optional: Reset form fields after submission
  formData.value = {
    country: '',
    city: '',
    packageTitle: '',
    packageCode: '',
    packageYear: '',
    packageId: '',
    status: '',
    price: '',
    startDate: '',
    endDate: '',
    description: ''
  }
}
</script>
