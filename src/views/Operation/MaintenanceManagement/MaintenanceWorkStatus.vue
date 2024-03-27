<template>
    <div class="px-4 bg-white py-5 w-full">
      <!-- <div class="pt-20 flex justify-between">
        <SocialSidebar />
        <div class="px-4 bg-white py-5 w-3/4"> -->
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-cyan-800 font-bold pb-2">Maintenance Work Status</p>
          </div>
          <hr />
          <div
            class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
          >
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white text-lg">
                  <th class="p-2 text-left">ID</th>
                  <th class="p-2 text-left">Maintenance Category</th>
                  <th class="p-2 text-left">Maintenance Subject</th>
                  <th class="p-2 text-left">Occurrence Type</th>
                  <th class="p-2 text-left">Location</th>
                  <th class="p-2 text-left">Date</th>
                  <th class="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(event, index) in events" :key="index">
                  <td class="py-4 p-2 gap-2">
                    <h3 class="font-bold">{{ event.id }}</h3>
                  </td>
                  <td class="py-4 p-2 items-center gap-2">
                    <h3 class="font-semibold">{{ event.maintenanceCategory }}</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    <img :src="event.img" alt="" class="h-10" />
                    <h3 class="font-semibold">{{ event.maintenanceSubject }}</h3>
                  </td>
                  <td class="py-4 p-2 items-center gap-2">
                    <h3 class="font-semibold">{{ event.occurrenceType }}</h3>
                  </td>
                  <td class="py-4 p-2 items-center gap-2">
                    <h3 class="font-semibold">{{ event.location }}</h3>
                  </td>
                  <td class="py-4 p-2 items-center gap-2">
                    <h3 class="font-semibold">{{ event.date }}</h3>
                  </td>
                  <td class="py-4 p-2 items-center gap-2">
                    <h3 class="font-semibold text-green-500">{{ event.status }}</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      <!-- </div>
    </div> -->
  </template>
  <script setup>
  import { ref } from "vue";
  // import {
  //   Dialog,
  //   DialogContent,
  //   DialogDescription,
  //   DialogHeader,
  //   DialogTitle,
  //   DialogTrigger,
  // } from "@/components/ui/dialog";
  // import SocialSidebar from "/src/views/Social/SocialSidevar.vue";
  const events = ref([
    {
      id: 1,
      eventName: "APARTMENT SET-UPS",
      img: "/src/assets/donation/16kilis1-superJumbo.webp",
      maintenanceCategory: "Fundraising",
      maintenanceSubject: "Planning Ramadan Fundraising",
      occurrenceType: "Recurring",
      location: "Northern California",
      date: "01-01-2024",
      status: "80% complete",
    },
    {
      id: 2,
      eventName: "EMERGENCY FOOD",
      img: "/src/assets/donation/16kilis1-superJumbo.webp",
      maintenanceCategory: "Donor",
      maintenanceSubject: "Donor Relationship Building",
      occurrenceType: "Single",
      location: "Northern California",
      date: "02-05-2024",
      status: "90% complete",
    },
    {
      id: 3,
      eventName: "APARTMENT COMPLEX DISTRIBUTIONS",
      img: "/src/assets/donation/16kilis1-superJumbo.webp",
      maintenanceCategory: "Donor",
      maintenanceSubject: "Zakat Distribution",
      occurrenceType: "Recurring",
      location: "Northern California",
      date: "01-10-2024",
      status: "60% complete",
    },
    {
      id: 4,
      eventName: "VEHICLE DONATION PROGRAM",
      img: "/src/assets/donation/16kilis1-superJumbo.webp",
      maintenanceCategory: "Charitable",
      maintenanceSubject: "Charitable",
      occurrenceType: "Recurring",
      location: "Northern California",
      date: "01-10-2024",
      status: "80% complete",
    },
    {
      id: 5,
      eventName: "RENT ASSISTANCE PROGRAM",
      img: "/src/assets/donation/16kilis1-superJumbo.webp",
      maintenanceCategory: "Charitable",
      maintenanceSubject: "Charitable",
      occurrenceType: "Recurring",
      location: "Northern California",
      date: "01-10-2024",
      status: "50% complete",
    },
    {
      id: 6,
      eventName: "COMMUNITY RESOURCE CENTER",
      img: "/src/assets/donation/16kilis1-superJumbo.webp",
      maintenanceCategory: "Charitable",
      maintenanceSubject: "Charitable",
      occurrenceType: "Recurring",
      location: "Northern California",
      date: "01-10-2024",
      status: "80% complete",
    },
  ]);
  </script>
  