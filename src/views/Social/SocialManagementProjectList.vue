<template>
  <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-emerald-700 font-bold pb-2">Project List</p>
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
                  <th class="text-left">Location</th>
                  <th class="p-2 text-left">Starting Date</th>
                  <th class="p-2 text-left">Ending Date</th>
                  <th class="p-2 text-left">Time</th>
                  <!-- <th class="p-2 text-left">Status</th> -->
                  <th class="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="" v-for="(project, index) in projects" :key="index">
                  <td class="py-4 p-2 gap-2">
                    <h3 class="font-bold">{{ project.id }}</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    <img :src="project.img" alt="" class="h-10" />
                    <h3 class="font-bold">{{ project.projectName }}</h3>
                  </td>
                  <td>
                    <p class="text-lg">{{ project.location }}</p>
                  </td>
                  <td class="py-4 p-2">{{ project.startingDate }}</td>
                  <td class="py-4 p-2">{{ project.endingDate }}</td>
                  <td class="py-4 p-2 font-semibold">{{ project.time }}</td>
                  <td class="py-4 p-2">
                    <button
                      class="px-3 py-2 rounded-md shadow-md bg-emerald-600 text-white hover:bg-black text-sm"
                    >
                      <Dialog>
                        <DialogTrigger> Details </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="font-bold text-xl mb-2">{{ project.projectName }}</div>
                            </DialogTitle>
                            <DialogDescription>
                              <img :src="project.img" alt="" />
                              <div>
                                <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                                {{ project.description }}
                              </div>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black font-semibold">Starting Date:</span>
                                  {{ project.startingDate }}
                                </div>
                                <div>
                                  <span class="text-black font-semibold">Ending Date:</span>
                                  {{ project.endingDate }}
                                </div>
                              </div>
                              <div class="flex gap-5 items-center justify-between">
                                <div class="flex gap-2">
                                  <h1 class="text-black font-semibold">Location:</h1>
                                  {{ project.location }}
                                </div>
                                <div class="flex gap-2">
                                  <h1 class="text-black font-semibold">Time:</h1>
                                  {{ project.time }}
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
import SocialSidebar from '/src/views/Social/SocialSidevar.vue'
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
const projects = ref([
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
</script>
