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
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>

    <!-- <Separator /> -->
    <div class="flex item-center bg-teal-50 bg-cover justify-center py-10 px-[5%]">
      <Card>
        <div class="grid grid-cols-5 gap-5 p-8">
          <div v-for="item in store.donationList">
          <Label for="card"
            class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary relative group">
            <img :src="item.image" alt="" class="pb-2" />
            <p class="text-lg font-bold">{{ item.name }}</p>
            <div class="absolute bg-[#000000a4] text-white top-0 h-full w-full p-2 opacity-0 duration-300 group-hover:opacity-100 rounded-md">
              {{ item.description }}
            </div>
          </Label>
        </div>
        </div>
        <CardHeader>
          <CardTitle>Donation Method</CardTitle>
          <CardDescription> Please Select the donation type </CardDescription>
        </CardHeader>
        <form @submit.prevent="getSession()">
          <CardContent class="grid gap-6">
            <div class="grid gap-2">
              <Label for="name">Name</Label>
              <Input id="name" v-model="donation.name" placeholder="First Last" />
            </div>
            <div class="grid gap-2">
              <Label for="number">Card number</Label>
              <Input id="number" v-model="donation.card_number" placeholder="" />
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="grid gap-2">
                <Label for="month">Expires</Label>
                <Select v-model="donation.expire_month">
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1"> January </SelectItem>
                    <SelectItem value="2"> February </SelectItem>
                    <SelectItem value="3"> March </SelectItem>
                    <SelectItem value="4"> April </SelectItem>
                    <SelectItem value="5"> May </SelectItem>
                    <SelectItem value="6"> June </SelectItem>
                    <SelectItem value="7"> July </SelectItem>
                    <SelectItem value="8"> August </SelectItem>
                    <SelectItem value="9"> September </SelectItem>
                    <SelectItem value="10"> October </SelectItem>
                    <SelectItem value="11"> November </SelectItem>
                    <SelectItem value="12"> December </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-2">
                <Label for="year">Year</Label>
                <Select v-model="donation.expire_year">
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem v-for="i in 10" :key="i" :value="`${new Date().getFullYear() + i}`">
                      {{ new Date().getFullYear() + i }}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-2">
                <Label for="cvc">CVC</Label>
                <Input id="cvc" v-model="donation.cvc" placeholder="CVC" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" class="w-full"> Continue </Button>
          </CardFooter>
        </form>
        <div>

        </div>
        <stripe-buy-button buy-button-id="buy_btn_1P3MwRKGnxnRW2Flao7BSnuC"
          publishable-key="pk_test_51O1nZWKGnxnRW2FleKUVO7ehputq4YhMzBXIgBk9qaku5gzZGAvTQmjhN18YSHIXSjXhVgndcos35WIVhDPxmim000RQoO42wT">
        </stripe-buy-button>
      </Card>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { Button } from '/components/ui/button'
import { Separator } from '/components/ui/separator'
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
import { RadioGroup, RadioGroupItem } from '/components/ui/radio-group'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
import { StripeElementCard } from '@vue-stripe/vue-stripe'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from '/components/ui/toast/use-toast'
const { toast } = useToast()
const route = useRoute()
const store = useAccountStore()

const donation = ref({
  donation_method_id: '',
  name: '',
  card_number: '',
  expire_month: '',
  expire_year: '',
  cvc: ''
})


const loading = ref(false);

const successURL = 'http://localhost:5173/Member_Donation';
const cancelURL = 'http://localhost:5173/Member_Donation';

const checkoutRef = ref(null);
const getSession = async () => {
  const { data } = await api().post('getStripe', {
    amount: 100,
    email: 'ishmamazim2@gmail.com',
    success_url: successURL,
    cancel_url: cancelURL,
  })
  console.log(data)
  if (data.clientSecret) {
    window.open(data.clientSecret.url,"_self")
  }
}

const submit = () => {
  // You will be redirected to Stripe's secure checkout page
  checkoutRef.value.redirectToCheckout();
};
const paymentRef = ref(null);
const pk = ref('pk_test_51P2ICU07jAgkHlirQXu3rSbc825znsgPsEDVGq04VTj9r0WZCP3Ub247LUSwKlmRmCcvLsZNdFoRvbDaAGBybDNM002NWuqILI');
const elementsOptions = ref({
  appearance: {}, // appearance options
  clientSecret: '', // Moved initialization here
});
const confirmParams = ref({
  return_url: 'http://localhost:8080/success', // success url
});

// Converts to using the Composition API's onMounted


const donnationList = async () => {

  loading.value = true
  try {
    const { data } = await api().get('donation-method-list')
    store.donationList = data.data
    console.log(store.donationList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  donnationList()

})

</script>
