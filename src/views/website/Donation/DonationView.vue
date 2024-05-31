<template>
  <DefaultLayout>
    <div class="px-20 pt-20 mt-5 py-5 bg-lime-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
      <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
        <div class="flex items-center justify-center gap-2 font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path
              d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z">
            </path>
          </svg>
          <p>Home</p>
          <p>/ Donate</p>
          <!-- <p>/ Volunteers</p> -->
          <p class="text-lime-800">/ {{ route.name }}</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-lime-800 text-4xl font-bold">{{ route.name }}</h1>
        </div>
      </div>
    </div>
    <div class="flex item-center bg-teal-50 bg-cover justify-center py-10 px-[5%]">
      <Card>
        <div class="grid grid-cols-5 gap-5 p-8">
          <div v-for="item in accountStore.donationList" :key="item.id"
            @click="store.donation.donation_method_id = item.id">
            <Label for="card"
              class="flex flex-col items-center justify-between rounded-md border-2 border-muted p-2 relative group shadow-lg bg-slate-100"
              :class="store?.donation.donation_method_id == item.id ? 'ring-2' : ''">
              <div class="h-[150px] overflow-hidden flex justify-center items-center mb-2 rounded-sm">
                <img :src="item.image" alt="" />
              </div>

              <p class="text-lg font-bold">{{ item.name }}</p>
              <div
                class="absolute bg-[#000000a4] text-white top-0 h-full w-full p-2 opacity-0 duration-300 group-hover:opacity-100 rounded-md">
                {{ item.description }}
              </div>
            </Label>
          </div>
        </div>
        <CardHeader v-if="store?.donation.donation_method_id != ''">
          <CardTitle>Donation Amount</CardTitle>
          <CardDescription> Please Select the donation amount </CardDescription>
          <div class="flex items-center gap-5">
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="10" v-model="selectDonation.amount" />
              <label>$ 10</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="20" v-model="selectDonation.amount" />
              <label>$ 20</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="30" v-model="selectDonation.amount" />
              <label>$ 30</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="40" v-model="selectDonation.amount" />
              <label>$ 40</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="50" v-model="selectDonation.amount" />
              <label>$ 50</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="60" v-model="selectDonation.amount" />
              <label>$ 60</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="70" v-model="selectDonation.amount" />
              <label>$ 70</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="80" v-model="selectDonation.amount" />
              <label>$ 80</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="90" v-model="selectDonation.amount" />
              <label>$ 90</label>
            </div>
            <div class="flex items-center gap-1">
              <input type="radio" name="amount" value="100" v-model="selectDonation.amount" />
              <label>$ 100</label>
            </div>
          </div>
          <CardDescription>Or Select your desired amount </CardDescription>
          <input v-model="selectDonation.amount" type="text" class="border py-1.5 px-2 rounded-md" />
        </CardHeader>

        <form @submit.prevent="getSession()">
          <CardContent class="grid gap-6">
            <div class="grid gap-2">
              <Label for="name">Name</Label>
              <Input id="name" v-model="store.donation.name" placeholder="First Last" />
            </div>
            <div class="grid gap-2">
              <Label for="number">Email</Label>
              <Input id="number" v-model="store.donation.email" placeholder="" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" class="w-full"> Continue </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { Button } from '/components/ui/button'
import { useAccountStore } from '/src/stores/accountStore'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '/components/ui/card'
import { Input } from '/components/ui/input'
import { Label } from '/components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from '/components/ui/toast/use-toast'
import { useStore } from '/src/stores/store.ts'

const store = useStore()
const { toast } = useToast()
const route = useRoute()
const accountStore = useAccountStore()
const selectDonation = ref({
  amount: ''
})

const loading = ref(false)

const successURL = 'http://localhost:5173/Member_Donation'
const cancelURL = 'http://localhost:5173/Member_Donation'

const checkoutRef = ref(null)
const getSession = async () => {
  const { data } = await api().post('getStripe', {
    amount: selectDonation.value.amount,
    email: store.donation.email,
    success_url: successURL,
    cancel_url: cancelURL
  })
  store.donation.session_token = data.clientSecret.id
  console.log(data.clientSecret.id)
  if (data.clientSecret) {
    window.open(data.clientSecret.url, '_self')
  }
}

watch(
  () => route.query,
  () => {
    if (route.query.session_id) {
      store.donation.success_token = route.query.session_id
      console.log(store.donation, 'chk store')
    }
      store.donation.donation_method_id = '',
      store.donation.name = '',
      store.donation.email = '',
      store.donation.session_token = '',
      store.donation.success_token = ''
  },
  {
    immediate: true
  }
)

const submit = () => {
  // You will be redirected to Stripe's secure checkout page
  checkoutRef.value.redirectToCheckout()
}
const paymentRef = ref(null)
const pk = ref(
  'pk_test_51P2ICU07jAgkHlirQXu3rSbc825znsgPsEDVGq04VTj9r0WZCP3Ub247LUSwKlmRmCcvLsZNdFoRvbDaAGBybDNM002NWuqILI'
)
const elementsOptions = ref({
  appearance: {}, // appearance options
  clientSecret: '' // Moved initialization here
})
const confirmParams = ref({
  return_url: 'http://localhost:8080/success' // success url
})

// Converts to using the Composition API's onMounted

const donnationList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('donation-method-list')
    accountStore.donationList = data.data
    console.log(accountStore.donationList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  donnationList()
})
</script>
