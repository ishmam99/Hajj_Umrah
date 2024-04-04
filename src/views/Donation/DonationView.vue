<template>
  <DefaultLayout>
    <div class="px-20 pt-20 mt-5 py-5 bg-lime-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
          <p>/ Donate</p>
          <!-- <p>/ Volunteers</p> -->
          <p class="text-lime-800">/ {{ route.name }}</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-lime-800 text-4xl font-bold"> {{ route.name }}</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
      <!-- <Separator /> -->
    <div class="flex item-center bg-teal-50 bg-cover justify-center py-10 px-[5%]">
      <Card>
        <CardHeader>
          <CardTitle>Donation Method</CardTitle>
          <CardDescription>
            Please Select the donation type
          </CardDescription>
        </CardHeader>
        <form  @submit.prevent="submit()">
          <CardContent class="grid gap-6">
           
            <RadioGroup default-value="card" v-model="donation.donation_method_id"  class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div v-for="item in store.donationList">
                <RadioGroupItem 
                id="card" 
                :value="item.name" 
                class="peer sr-only" />
                <Label
                  for="card"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <img :src="item.image" alt="" class="pb-2">
                  {{ item.name }}
                </Label>
              </div>
            </RadioGroup>
            <div class="grid gap-2">
              <Label for="name">Name</Label>
              <Input id="name" v-model="donation.name" placeholder="First Last" />
            </div>
            <div class="grid gap-2">
              <Label for="number">Card number</Label>
              <Input id="number"  v-model="donation.card_number" placeholder="" />
            </div>
            <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
          />
            <div class="grid grid-cols-3 gap-4">
              <div class="grid gap-2">
                <Label for="month">Expires</Label>
                <Select  v-model="donation.expire_month">
                  <SelectTrigger id="month">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      January
                    </SelectItem>
                    <SelectItem value="2">
                      February
                    </SelectItem>
                    <SelectItem value="3">
                      March
                    </SelectItem>
                    <SelectItem value="4">
                      April
                    </SelectItem>
                    <SelectItem value="5">
                      May
                    </SelectItem>
                    <SelectItem value="6">
                      June
                    </SelectItem>
                    <SelectItem value="7">
                      July
                    </SelectItem>
                    <SelectItem value="8">
                      August
                    </SelectItem>
                    <SelectItem value="9">
                      September
                    </SelectItem>
                    <SelectItem value="10">
                      October
                    </SelectItem>
                    <SelectItem value="11">
                      November
                    </SelectItem>
                    <SelectItem value="12">
                      December
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-2">
                <Label for="year">Year</Label>
                <Select  v-model="donation.expire_year">
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
                <Input id="cvc"  v-model="donation.cvc" placeholder="CVC" />
              </div>
            </div>

  

          </CardContent>
          <CardFooter>
            <Button type="submit" class="w-full">
              Continue
            </Button>
          </CardFooter>
        </form>
        
      </Card>
      
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Button } from '/components/ui/button'
import { Separator } from '/components/ui/separator'
import {useAccountStore} from '/src/stores/accountStore'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '/components/ui/card'
import { Input } from '/components/ui/input'
import { Label } from '/components/ui/label'
import { RadioGroup, RadioGroupItem } from '/components/ui/radio-group'
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { StripeElementCard } from '@vue-stripe/vue-stripe';

const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY
const lineItems = [
  {
      price: 'price_1NvoTBKW3DXJSnrBkZfxJDVO',
    // price: ,
    quantity: 1,
  },
]

const successURL = 'http://localhost:8080/learning-center/success'
const cancelURL = 'http://localhost:8080/learning-center/checkout'

const checkoutRef = ref()

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '/components/ui/select'

import {ref , onMounted} from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from '/components/ui/toast/use-toast'
const { toast } = useToast()
const route = useRoute();
const store = useAccountStore()

const donation = ref({
  donation_method_id: '',
  name: '',
  card_number: '',
  expire_month: '',
  expire_year: '',
  cvc:'',
})


const donnationList = async () => {

  try {
    const { data } = await api().get('donation-method-list', {
    })
    store.donationList = data.data
    console.log(store.donationList)
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  donnationList()

})
</script>