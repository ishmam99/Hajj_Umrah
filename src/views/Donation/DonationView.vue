<template>
  <DefaultLayout>
    <div class="px-20 pt-20 mt-5 py-5 bg-lime-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
    <div class="flex item-center bg-[url('/src/assets/image/common/bg-2.jpg')] bg-cover justify-center py-10">
      <Card>
        <CardHeader>
          <CardTitle>Donation Method</CardTitle>
          <CardDescription>
            Please Select the donation type
          </CardDescription>
        </CardHeader>
        <form  @submit.prevent="submit()">
          <CardContent class="grid gap-6">
            <RadioGroup default-value="card" class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <RadioGroupItem id="card" v-model="donation.specialNeed" value="specialNeed" class="peer sr-only" />
                <Label
                  for="card"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M7.99837 10.3413L7.99793 12.5352C6.80239 13.2268 5.99805 14.5195 5.99805 16C5.99805 18.2091 7.78891 20 9.99805 20C11.4786 20 12.7712 19.1957 13.4628 18.0001L15.6565 18.0004C14.8327 20.3306 12.6103 22 9.99805 22C6.68434 22 3.99805 19.3137 3.99805 16C3.99805 13.3874 5.66782 11.1649 7.99837 10.3413ZM11.998 17C10.3412 17 8.99805 15.6569 8.99805 14V10C8.99805 8.34315 10.3412 7 11.998 7C13.6549 7 14.998 8.34315 14.998 10V15H16.4319C17.0803 15 17.6849 15.3141 18.0584 15.8362L18.1468 15.971L20.8555 20.4855L19.1406 21.5145L16.4319 17H11.998ZM11.998 2C13.3788 2 14.498 3.11929 14.498 4.5C14.498 5.88071 13.3788 7 11.998 7C10.6173 7 9.49805 5.88071 9.49805 4.5C9.49805 3.11929 10.6173 2 11.998 2Z"></path></svg>
                  Special Needs
                </Label>
              </div>
              <div >
                <RadioGroupItem
                  id="paypal"
                  value="fityah"
                  v-model="donation.fityah"
                  class="peer sr-only"
                />
                <Label
                  for="paypal"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M5.00488 9.00268C5.55717 9.00268 6.00488 9.45039 6.00488 10.0027C7.63965 10.0027 9.14352 10.5631 10.3349 11.5022L12.5049 11.5027C13.837 11.5027 15.0339 12.0815 15.8579 13.0014L19.0049 13.0027C20.9972 13.0027 22.7173 14.1679 23.521 15.8541C21.1562 18.9747 17.3268 21.0027 13.0049 21.0027C10.2142 21.0027 7.85466 20.3994 5.944 19.3447C5.80557 19.7283 5.43727 20.0027 5.00488 20.0027H2.00488C1.4526 20.0027 1.00488 19.555 1.00488 19.0027V10.0027C1.00488 9.45039 1.4526 9.00268 2.00488 9.00268H5.00488ZM6.00589 12.0027L6.00488 17.0238L6.05024 17.0572C7.84406 18.3176 10.183 19.0027 13.0049 19.0027C16.0089 19.0027 18.8035 17.847 20.84 15.8732L20.9729 15.7397L20.8537 15.6393C20.3897 15.2763 19.8205 15.051 19.2099 15.0096L19.0049 15.0027L16.8932 15.0017C16.9663 15.3236 17.0049 15.6586 17.0049 16.0027V17.0027H8.00488V15.0027L14.7949 15.0017L14.7605 14.9232C14.38 14.1296 13.593 13.568 12.6693 13.508L12.5049 13.5027L9.57547 13.5025C8.66823 12.5772 7.40412 12.003 6.00589 12.0027ZM4.00488 11.0027H3.00488V18.0027H4.00488V11.0027ZM13.6513 3.57806L14.0046 3.93183L14.3584 3.57806C15.3347 2.60175 16.9177 2.60175 17.894 3.57806C18.8703 4.55437 18.8703 6.13728 17.894 7.11359L14.0049 11.0027L10.1158 7.11359C9.13948 6.13728 9.13948 4.55437 10.1158 3.57806C11.0921 2.60175 12.675 2.60175 13.6513 3.57806ZM11.53 4.99227C11.3564 5.16584 11.3372 5.43526 11.4714 5.62938L11.5289 5.69831L14.0039 8.17368L16.4798 5.69938C16.6533 5.52581 16.6726 5.25639 16.5376 5.06152L16.4798 4.99227C16.3062 4.81871 16.0368 4.79942 15.8417 4.93457L15.7724 4.99249L14.0033 6.76111L12.236 4.9912L12.1679 4.93442C11.973 4.79942 11.7036 4.81871 11.53 4.99227Z"></path></svg>
                  Fityah
                </Label>
              </div>
              <div >
                <RadioGroupItem 
                id="apple" 
                value="zaqat"
                v-model="donation.zaqat"
                class="peer sr-only" />
                <Label
                  for="apple"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z"></path></svg>
                  Zaqat
                </Label>
              </div>
              <div>
                <RadioGroupItem id="sadaqah" value="sadaqah"  v-model="donation" class="peer sr-only" />
                <Label
                  for="sadaqah"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="sadaqah"><path d="m3.424 2.25.11.072c.095.06.142.148.111.249a.264.264 0 0 1-.07.109.468.468 0 0 1-.558.062c-.028-.02-.064-.037-.096-.052-.054-.027-.108-.052-.163-.078-.137-.065-.275-.13-.409-.2a4.098 4.098 0 0 1-.245-.138 1.8 1.8 0 0 1-.207-.144c-.088-.072-.114-.196-.138-.295-.019-.074-.039-.163-.08-.23a2.114 2.114 0 0 0-.154-.222 1.1 1.1 0 0 0-.12-.13.41.41 0 0 0-.11-.074c-.053-.014-.093-.054-.098-.103-.007-.065.048-.122.122-.128l.029-.003L2.453.857l.02-.001c.075 0 .136.053.136.118 0 .057.032.106.075.146.075.07.187.125.287.164.052.02.106.041.16.057.03.008.058.014.09.016.028.001.057 0 .086-.002.065-.004.129-.006.194-.006a1.5 1.5 0 0 1 .217.016c.315.046.6.187.853.352.278.182.531.4.775.616l.122.108.032.03c.096.085.154.196.121.316a.304.304 0 0 1-.095.148c-.045.04-.1.07-.16.088a.578.578 0 0 1-.246.021.629.629 0 0 1-.262-.096L3.757 2.24c-.11.011-.222.015-.333.012zm-.021 2.326-.11-.071c-.095-.06-.143-.149-.111-.25a.264.264 0 0 1 .069-.108.468.468 0 0 1 .558-.062c.029.019.065.036.097.052l.162.077c.138.065.275.13.41.2.083.044.165.09.245.138a1.8 1.8 0 0 1 .207.144c.088.073.114.197.138.296.018.074.038.163.079.23.047.076.098.151.155.222a1.1 1.1 0 0 0 .12.129.41.41 0 0 0 .11.075c.053.014.092.053.098.103.006.064-.049.122-.123.128l-.028.002c-.172.015-.344.034-.515.05-.107.011-.215.021-.322.029a4.123 4.123 0 0 1-.289.012c-.075 0-.135-.053-.135-.118 0-.057-.033-.106-.076-.147a.917.917 0 0 0-.286-.163 1.821 1.821 0 0 0-.16-.057.392.392 0 0 0-.09-.016c-.028-.001-.058 0-.086.002a3.632 3.632 0 0 1-.194.006 1.5 1.5 0 0 1-.218-.016c-.314-.046-.6-.187-.852-.352a6.82 6.82 0 0 1-.775-.617l-.122-.108-.033-.029c-.096-.085-.153-.196-.12-.317a.304.304 0 0 1 .094-.147c.045-.04.101-.07.161-.089a.578.578 0 0 1 .246-.02.629.629 0 0 1 .262.095l1.1.709c.111-.011.223-.015.334-.012zm.01-1.649c.152 0 .297.053.404.147.108.093.168.22.168.352 0 .133-.06.26-.168.353a.614.614 0 0 1-.404.146.614.614 0 0 1-.404-.146.468.468 0 0 1-.167-.353c0-.132.06-.259.167-.352a.614.614 0 0 1 .404-.147z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>
                  Sadaqah
                </Label>
              </div>
              <div >
                <RadioGroupItem id="mashjid" value="mashjidop" v-model="donation.mashjidop" class="peer sr-only" />
                <Label
                  for="mashjid"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="mosque" width="36" height="36"><path d="M26,6.18V5a1,1,0,0,0-2,0V6.18A3,3,0,0,0,22,9v7H20V15a1,1,0,0,0,1-1,5,5,0,0,0-4-4.9V8a1,1,0,0,0-2,0V9.1A5,5,0,0,0,11,14a1,1,0,0,0,1,1v1H10V9A3,3,0,0,0,8,6.18V5A1,1,0,0,0,6,5V6.18A3,3,0,0,0,4,9V27a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V9A3,3,0,0,0,26,6.18ZM25,8a1,1,0,0,1,1,1H24A1,1,0,0,1,25,8Zm-9,3a3,3,0,0,1,2.83,2H13.17A3,3,0,0,1,16,11Zm-2,4h4v1H14ZM7,8A1,1,0,0,1,8,9H6A1,1,0,0,1,7,8ZM6,11H8V26H6Zm4,7H22v8H19V23a3,3,0,0,0-6,0v3H10Zm5,8V23a1,1,0,0,1,2,0v3Zm9,0V11h2V26Z" data-name="Layer 21"></path></svg>
                  Mashjid Operations
                </Label>
              </div>
              <div >
                <RadioGroupItem id="others" value="others" v-model="donation.others" class="peer sr-only" />
                <Label
                  type="others"
                  for="others"
                  class="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="others" width="36" height="36"><path d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Zm19 5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Zm-8 6H3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm8 0h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z" data-name="27 Others"></path></svg>
                  Others
                </Label>

              </div>

            </RadioGroup>
            <Select>
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Others"  />
              </SelectTrigger>
            
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Other Donations</SelectLabel>
                  <SelectItem value="palestine"> Donation For Palestine </SelectItem>
                  <SelectItem value="syria"> Donation For Syria </SelectItem>
                  <SelectItem value="afghanistan"> Donation For Afghanistan </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div class="grid gap-2">
              <Label for="name">Name</Label>
              <Input id="name" placeholder="First Last" />
            </div>
            <div class="grid gap-2">
              <Label for="number">Card number</Label>
              <Input id="number" placeholder="" />
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class="grid gap-2">
                <Label for="month">Expires</Label>
                <Select>
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
                <Select>
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
                <Input id="cvc" placeholder="CVC" />
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
<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Button } from '/components/ui/button'
import { Separator  } from '/components/ui/separator'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '/components/ui/select'

import { useRoute } from 'vue-router'
const route = useRoute();

import {ref} from 'vue'
const donation = ref({})

const submit = () => {
  console.log(donation.value)
}
</script>