<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-cyan-700 font-bold pb-2">Project Post</p>
    </div>
    <hr />
    <div
      class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
    >
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">Project ID</th>
            <th class="p-2 text-left">Project Name(s)</th>
            <th class="text-left">Address</th>
            <th class="p-2 text-left">Starting Date</th>
            <th class="p-2 text-left">Ending Date</th>
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
                v-model="event.projectName"
                type="text"
                class="border rounded-md px-2 py-1"
              />
              <h3 v-else class="font-bold">{{ event.projectName }}</h3>
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
              <div class="flex items-center gap-4">
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
                <div class="relative group" @click.prevent="PostProject(id)">
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
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialSidebar from '/src/views/Social/SocialSidevar.vue'
import { ref } from 'vue'
import { useStore } from '/src/stores/store'
import api from '@/config/api'
import { useToast } from '/components/ui/toast/use-toast'
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
    projectName: 'Youth Development Project',
    img: '/src/assets/image/home/l4.png',
    description:
      'It focuses on nurturing the potential of young individuals by providing them with opportunities for personal growth, skill development, and leadership training. Through mentorship, education, and community engagement, we aim to equip youth with the tools and resources they need to thrive and become active contributors to society.',
    location: 'Masjid Premises',
    startingDate: '1 Jan 2024',
    endingDate: '5 Jan 2024',
    time: '1 PM'
  },
  {
    id: 2,
    projectName: 'Health and Wellness Initiatives Project',
    img: '/src/assets/image/gallery/e5.jpg',
    description:
      'It is dedicated to promoting holistic well-being and vitality within communities. Through education, access to resources, and community engagement, we strive to empower individuals to take control of their health and lead balanced lifestyles. From fitness programs to mental health awareness campaigns, our initiatives aim to foster a culture of wellness and resilience.',
    location: 'Masjid Premises',
    startingDate: '5 Feb 2024',
    endingDate: '10 Feb 2024',
    time: '8 PM'
  },
  {
    id: 3,
    projectName: 'Islamic Education Initiatives',
    img: '/src/assets/image/home/l4.jpg',
    description:
      'It is a comprehensive program designed to promote knowledge and understanding of Islamic principles, values, and practices. Through a variety of educational resources, including courses, workshops, and events, we aim to empower individuals with the teachings of Islam, fostering spiritual growth, cultural appreciation, and community cohesion. Our initiatives strive to create an inclusive and enriching environment where learners can explore and deepen their connection to the Islamic faith.',
    location: 'Masjid Premises',
    startingDate: '10 Jan 2024',
    endingDate: '15 Jan 2024',
    time: '6 PM'
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

const store = useStore()
const { toast } = useToast()

// const ProjectForm = ref({
//   name: '',
//   event_name: '',
//   description: '',
//   human_resource: '',
//   material_resource: '',
//   human_resource_planning: '',
//   material_resource_planning: '',
//   address: '',
//   city: '',
//   state: '',
//   start_date: '',
//   end_date: '',
//   start_time: '',
//   end_time: '',
//   image: ''
// })
// const ProjectFormApply = async () => {
//   try {
//     const data = await api().post('project-post', {
//       method: 'post',
//       body: ProjectForm
//     })
//     console.log(data)
//     toast({
//       title: 'Success',
//       description: 'Project Created Successfully'
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
</script>
