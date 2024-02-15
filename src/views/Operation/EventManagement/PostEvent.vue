<template>
    <DefaultLayout>
      <div class="bg-slate-50">
        <div class="pt-20 flex justify-between">
          <OperationSidebar />
          <div class="px-4 bg-white py-5 w-3/4">
            <div class="flex justify-between items-center pt-4">
              <p class="text-2xl text-cyan-700 font-bold pb-2">Event Post</p>
            </div>
            <hr />
            <div
              class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-lg">
                    <th class="p-2 text-left">Event ID</th>
                    <th class="p-2 text-left">Event Name(s)</th>
                    <!-- <th class="p-2 text-left">Event Type</th> -->
                    <th class="p-2 text-left">Occurrence Type</th>
                    <th class="p-2 text-left">Location</th>
                    <th class="p-2 text-left">Start Date</th>
                    <th class="p-2 text-left">End Date</th>
                    <th class="p-2 text-left">Time</th>
                    <!-- <th class="p-2 text-left">Status</th> -->
                    <th class="p-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="event in events" :key="event.id">
                    <td class="py-4 p-2">
                      <!-- <input
                        v-if="editEventId === event.id"
                        v-model="events[index].id"
                        type="number"
                        class="border rounded-md px-2 py-1"
                      /> -->
                      <h3 class="font-bold">{{ event.id }}</h3>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <img :src="event.img" alt="" class="h-10" />
                      <input
                        v-if="editEventId === event.id"
                        v-model="event.eventName"
                        type="text"
                        class="border rounded-md px-2 py-1"
                      />
                      <h3 v-else class="font-bold">{{ event.eventName }}</h3>
                    </td>
                    <!-- <td class="py-4 p-2 items-center gap-2">
                      <h3 class="font-semibold">{{ event.eventType }}</h3>
                    </td> -->
                    <td class="py-4 p-2 items-center gap-2">
                      <!-- <input
                        v-if="editEventId === event.id"
                        v-model="event.occurrenceType"
                        type="text"
                        class="border rounded-md px-2 py-1"
                      /> -->
                      <Select class="" v-if="editEventId === event.id" v-model="event.occurrenceType">
                        <SelectTrigger class="w-full">
                          <SelectValue placeholder="Occurrence Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select Type</SelectLabel>
                            <SelectItem value="Single"> Single Event </SelectItem>
                            <SelectItem value="Recurring"> Recurring Event </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <div v-else>
                        <h3
                          v-if="event.occurrenceType == 'Single'"
                          class="font-semibold text-cyan-600"
                        >
                          {{ event.occurrenceType }}
                        </h3>
                        <h3 v-else class="font-semibold text-green-600">
                          {{ event.occurrenceType }}
                        </h3>
                      </div>
                    </td>
                    <td>
                      <input
                        v-if="editEventId === event.id"
                        v-model="event.location"
                        type="text"
                        class="border rounded-md px-2 py-1"
                      />
                      <p v-else class="font-semibold">{{ event.location }}</p>
                    </td>
                    <td class="py-4 p-2 font-semibold">
                      <input
                        v-if="editEventId === event.id"
                        v-model="event.startingDate"
                        type="date"
                        class="border rounded-md px-2 py-1"
                      />
                      <p v-else>
                        {{ event.startingDate }}
                      </p>
                    </td>
                    <td class="py-4 p-2 font-semibold">
                      <input
                        v-if="editEventId === event.id"
                        v-model="event.endingDate"
                        type="date"
                        class="border rounded-md px-2 py-1"
                      />
                      <p v-else>
                        {{ event.endingDate }}
                      </p>
                    </td>
                    <td class="py-4 p-2 font-semibold">
                      <input
                        v-if="editEventId === event.id"
                        v-model="event.time"
                        type="time"
                        class="border rounded-md px-2 py-1"
                      />
                      <p v-else>
                        {{ event.time }}
                      </p>
                    </td>
                    <td class="py-4 p-2">
                      <div class="flex items-center gap-2">
                        <div class="relative group">
                          <div v-if="isEdit && editEventId === event.id" @click="saveEvent(event.id)">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="green"
                              height="30"
                              width="30"
                            >
                              <path
                                d="M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"
                              ></path>
                            </svg>
                          </div>
                          <div v-else @click="editEvent(event.id)">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="rgb(135, 206, 235)"
                              height="30"
                              width="30"
                            >
                              <path
                                d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"
                              ></path>
                            </svg>
                          </div>
                          <p
                            class="absolute bottom-[-100%] z-50 hidden group-hover:block px-3 py-1.5 rounded-md shadow-md bg-slate-600 text-white text-xs"
                          >
                            Edit
                          </p>
                        </div>
                        <div class="relative group" @click="deleteEvent(index)">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="red"
                            height="30"
                            width="30"
                          >
                            <path
                              d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                            ></path>
                          </svg>
                          <p
                            class="absolute bottom-[-100%] z-50 hidden group-hover:block px-3 py-1.5 rounded-md shadow-md bg-slate-600 text-white text-xs"
                          >
                            Delete
                          </p>
                        </div>
                        <div class="relative group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="green"
                            height="30"
                            width="30"
                          >
                            <path
                              d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"
                            ></path>
                          </svg>
                          <p
                            class="absolute bottom-[-100%] z-50 hidden group-hover:block px-3 py-1.5 rounded-md shadow-md bg-slate-600 text-white text-xs"
                          >
                            Post
                          </p>
                        </div>
                      </div>
                      <!-- <Select>
                        <SelectTrigger class="w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Select</SelectLabel>
                            <SelectItem value="Comfort The Sick"> Post </SelectItem>
                            <SelectItem value="Educate The Children" @click="eventEdit()">
                              Edit
                            </SelectItem>
                            <SelectItem value="Shelter The Homeless"> Delete </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select> -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  </template>
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import OperationSidebar from '/src/views/Operation/OperationSidevar.vue'
  import { ref } from 'vue'
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
  } from '/components/ui/select'
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
  const isEdit = ref(false)
  const editEventId = ref('')
  
  const eventEdit = (index) => {
    edit.value = true
    editingIndex.value = index
  }
  
  const editEvent = (eventId) => {
    editEventId.value = eventId
    isEdit.value = true
    console.log('lmao', eventId)
  }
  
  const saveEvent = (eventId) => {
    isEdit.value = false
    editEventId.value = ''
  }
  
  const deleteEvent = (index) => {
    events.value.splice(index, 1)
  }
  </script>
  