<template>
    <DefaultLayout>
      <div class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
            <p>/ Get Involved</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-cyan-800">/ Fund Raising</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-cyan-800 text-4xl font-bold"> Fund Raising Form</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
        <div class="flex px-[5%] mt-10">
            <div class="w-1/2 bg-[url('/src/assets/image/common/v6.jpg')] opacity-85 rounded-s-lg p-10 flex flex-col gap-3">
                <p class="text-3xl font-bold text-white">Create your <br> Fundraising page</p>
                <p class="text-lg text-white">Create your fundraising page with a click of a few buttons and start fundraising for your chosen cause. Let's make a difference together!</p>
                <input type="text" name="" id="" placeholder="Enter Fundraiser Title" class="py-1.5 px-2 rounded-md w-full">
                <div class="text-white flex items-center gap-2">
                    <input type="checkbox" class="h-6 w-6">
                    <p>I would like to link my fundraiser to a Muslim Aid Event Morocco Earthquake Emergency</p>
                </div>
                <div class="flex gap-5">
                    <div class="w-1/2">
                        <Select>
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="apple">Bulid A Mouque in Bangladesh</SelectItem>
                                    <SelectItem value="shelter">Fund Paise for Gaza</SelectItem>
                                    <SelectItem value="banana">Help WinterEffectedPeople</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div class="w-1/2 gap-2 flex items-center bg-white rounded-lg py-2 px-3">
                        <p class="text-lg font-bold text-green-600">$</p>
                        <input type="text" placeholder="Enter Your Goal">
                    </div>
                </div>
                <button class="text-white font-semibold text-sm px-3 py-3 rounded-lg bg-green-600 mt-1">Create Your Fundrasing</button>
            </div>
            <div class="w-1/2 bg-[url('/src/assets/image/common/v5.jpg')] rounded-e-lg bg-cover">

            </div>
        </div>
        <div class="">
            <h1 class="px-20 text-4xl font-bold text-center pt-10">Why do fundraisers choose us?</h1>
            <div class="grid grid-cols-3 gap-10 px-20 py-20">
                <div class="p-5 rounded-md bg-green-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="rgba(255,255,255,1)"><path d="M2.04932 12.9999H7.52725C7.70624 16.2688 8.7574 19.3053 10.452 21.8809C5.98761 21.1871 2.5001 17.5402 2.04932 12.9999ZM2.04932 10.9999C2.5001 6.45968 5.98761 2.81276 10.452 2.11902C8.7574 4.69456 7.70624 7.73111 7.52725 10.9999H2.04932ZM21.9506 10.9999H16.4726C16.2936 7.73111 15.2425 4.69456 13.5479 2.11902C18.0123 2.81276 21.4998 6.45968 21.9506 10.9999ZM21.9506 12.9999C21.4998 17.5402 18.0123 21.1871 13.5479 21.8809C15.2425 19.3053 16.2936 16.2688 16.4726 12.9999H21.9506ZM9.53068 12.9999H14.4692C14.2976 15.7828 13.4146 18.3732 11.9999 20.5915C10.5852 18.3732 9.70229 15.7828 9.53068 12.9999ZM9.53068 10.9999C9.70229 8.21709 10.5852 5.62672 11.9999 3.40841C13.4146 5.62672 14.2976 8.21709 14.4692 10.9999H9.53068Z"></path></svg>
                    <p class="text-2xl font-bold py-2">Trusted around the world</p>
                    <p class="text-lg">Muslim aid has been on the ground for over 35 years. Most recently we were recognised as one of the top 100 most loved charities in the UK.</p>
                </div>
                <div class="p-5 rounded-md bg-pink-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="rgba(255,255,255,1)"><path d="M6.38231 5.9681C7.92199 4.73647 9.87499 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 10.875 3.73647 8.92199 4.9681 7.38231L3.51472 5.92893L4.92893 4.51472L6.38231 5.9681ZM12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20ZM13 12H16L11 18.5V14H8L13 7.4952V12ZM8 1H16V3H8V1Z"></path></svg>
                    <p class="text-2xl font-bold py-2">Simple & quick</p>
                    <p class="text-lg">Our user-friendly fundrasing platform makes it easy to setup your fundraising page.</p>
                </div>
                <div class="p-5 rounded-md bg-orange-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120" fill="rgba(255,255,255,1)"><path d="M2 12H4V21H2V12ZM5 14H7V21H5V14ZM16 8H18V21H16V8ZM19 10H21V21H19V10ZM9 2H11V21H9V2ZM12 4H14V21H12V4Z"></path></svg>
                    <p class="text-2xl font-bold py-2">Our social reach</p>
                    <p class="text-lg">We have over 100k+ followers on our social media platforms.</p>
                </div>
            </div>
        </div>
        
    </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
</script>