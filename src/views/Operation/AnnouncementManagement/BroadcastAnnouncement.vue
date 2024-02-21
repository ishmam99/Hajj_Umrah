<template>
    <div class="px-4 bg-white py-5 w-3/4">
            <div class="flex justify-between items-center pt-4">
              <p class="text-2xl text-cyan-700 font-bold pb-2">Broadcast Announcement</p>
            </div>
            <hr />
            <div
              class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-lg">
                    <th class="p-2 text-left">Announcement ID</th>
                    <th class="p-2 text-left">Announcement Name(s)</th>
                    <th class="p-2 text-left">Announcement Type</th>
                    <th class="p-2 text-left">Occurrence Type</th>
                    <th class="p-2 text-left">Location</th>
                    <th class="p-2 text-left">Starting Date</th>
                    <th class="p-2 text-left">Ending Date</th>
                    <th class="p-2 text-left">Time</th>
                    <!-- <th class="p-2 text-left">Status</th> -->
                    <th class="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(event, index) in events" :key="index">
                    <td class="py-4 p-2 gap-2">
                      <h3 class="font-bold">{{ event.id }}</h3>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <img :src="event.img" alt="" class="h-10" />
                      <h3 class="font-semibold">{{ event.eventName }}</h3>
                    </td>
                    <td class="py-4 p-2 items-center gap-2">
                      <h3 class="font-semibold">{{ event.eventType }}</h3>
                    </td>
                    <td class="py-4 p-2 items-center gap-2">
                      <h3 v-if="event.occurrenceType == 'Single'" class="font-semibold text-cyan-600">
                        {{ event.occurrenceType }}
                      </h3>
                      <h3 v-else class="font-semibold text-green-600">
                        {{ event.occurrenceType }}
                      </h3>
                    </td>
                    <td>
                      <p class="font-semibold text-sm">{{ event.location }}</p>
                    </td>
                    <td class="py-4 p-2 font-semibold">{{ event.startingDate }}</td>
                    <td class="py-4 p-2 font-semibold">{{ event.endingDate }}</td>
                    <td class="py-4 p-2 font-semibold">{{ event.time }}</td>
                    <td class="py-4 p-2">
                      <button
                        class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white hover:bg-black text-sm"
                      >
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="font-bold text-xl mb-2">{{ event.eventName }}</div>
                              </DialogTitle>
                              <DialogDescription>
                                <img :src="event.img" alt="" />
                                <div>
                                  <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                                  {{ event.description }}
                                </div>
                                <div class="flex gap-5 items-center justify-between mt-2">
                                  <div>
                                    <span class="text-black font-semibold">Starting Date:</span>
                                    {{ event.startingDate }}
                                  </div>
                                  <div>
                                    <span class="text-black font-semibold">Ending Date:</span>
                                    {{ event.endingDate }}
                                  </div>
                                </div>
                                <div class="flex gap-5 items-center justify-between">
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Location:</h1>
                                    {{ event.location }}
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Time:</h1>
                                    {{ event.time }}
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
  
                            <!-- <DialogFooter> Save changes </DialogFooter> -->
                          </DialogContent>
                        </Dialog>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
  </template>
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import SocialSidebar from '/src/views/Operation/OperationSidevar.vue'
  import { ref } from 'vue'
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from '/components/ui/dialog'
  const events = ref([
    {
      id: 1,
      eventName: 'Educate the children',
      img: '/src/assets/image/hero/h2.jpg',
      eventType: 'Social Outreach Event',
      occurrenceType: 'Recurring',
      description:
        'It is a transformative program aimed at providing quality education to underserved youth, empowering them with the knowledge and skills necessary for a brighter future. Through innovative teaching methods, mentorship, and community engagement, we strive to unlock each childs potential and create pathways to success.',
      location: 'Masjid Premises',
      startingDate: '2024-01-01',
      endingDate: '2024-01-05',
      time: '1:45'
    },
    {
      id: 2,
      eventName: 'Comfort the sick',
      img: '/src/assets/image/common/v4.jpg',
      eventType: 'Humanitarian Event',
      occurrenceType: 'Single',
      description:
        'It is a compassionate initiative dedicated to providing solace and support to those battling illness. Through personalized care, emotional assistance, and practical aid, we strive to alleviate suffering and bring moments of peace to individuals and families facing health challenges.',
      location: 'Masjid Premises',
      startingDate: '2024-02-05',
      endingDate: '202402-10',
      time: '2:30'
    },
    {
      id: 3,
      eventName: 'Feed The Hungry',
      img: '/src/assets/image/hungry/hungry-5.jpg',
      eventType: 'Donation Collection Event',
      occurrenceType: 'Recurring',
      description:
        'vulnerable in our community. Committed to the values of compassion and social responsibility, we dedicate ourselves to feeding those in need. Every day, we work tirelessly to provide nutritious meals, ensuring that no one goes to bed hungry. Our initiative goes beyond immediate relief, aiming to empower individuals and build sustainable solutions for long-term food security. With the support of our dedicated team and generous community, we envision a future where hunger is eradicated, fostering a world where every person has access to the fundamental right of wholesome sustenance and the hope for a brighter tomorrow',
      location: 'Masjid Premises',
      startingDate: '2024-01-10',
      endingDate: '2024-01-15',
      time: '6:00'
    }
  ])
  </script>
  