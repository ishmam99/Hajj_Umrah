<template>
  <div>
    <DefaultLayout>
      <div class="px-20 ml-10">
        <div class="bg-white">
          <div class="flex items-center gap-2">
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
            <p>/ Services</p>
            <p class="text-yellow-500">/ Facilities Services</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">Facilities Services</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full py-5 mt-10 flex gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3">Facilities Services</h1>
            <p>Islamic Digital Lane offers many services via its facilities. Islamic Digital Lane caters its services for our community members, our community businesses and other non profit organizations. We offer different ways for our community members to hold programs that are valuable to them. We also want our community businesses to partner with us to sell their goods and services. We offer sponsorships, you can rent a room for your classes, trainings, seminars, tournaments or hold a fundraiser with over 1000 people in our gym. We also allow food vendors to sell their goods on our premises after Jumuah and Friday Nights. Please fill out the forms below if you would like to partner with Islamic Digital Lane.</p>
            <p class="py-3"><span class="font-semibold text-yellow-600">Please Note: </span>For Islamic Digital Lane Internal committee room reservations please use the same Facility Rental/Rervation link below.</p>
            <ul class="pl-10 text-blue-600">
              <li class="list-disc">Islamic Digital Lane Facility Rental/Reservation</li>
              <li class="list-disc">Islamic Digital Lane Food Vendor/Bake Sale</li>
              <li class="list-disc">Islamic Digital Lane Shuttle Service</li>
            </ul>
          </div>
        </div>
       <FacilitiesMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import Card from '../../components/CardSection.vue'
import FacilitiesMore from '../../components/FacilitiesMore.vue'
</script>

<style lang="scss" scoped></style>
