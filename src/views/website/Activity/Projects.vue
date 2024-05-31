<template>
  <DefaultLayout>
    <div class="bg-gray-100 h-full pt-10 py-5 gap-5 w-full">
      <div class="bg-[url('/src/assets/image/home/l4.png')] bg-cover">
        <div class="bg-[#00000057] rounded-none pt-20">
          <div class=""></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="text-left">
              <div class="px-10 py-6">
                <h1 class="mb-5 text-5xl text-white font-bold">Youth Development Project</h1>

                <p
                  class="mb-5 text-lg font-semibold bg-[#00000042] p-2 w-3/6 rounded-lg text-white"
                >
                  The Youth Development Project is a targeted initiative dedicated to empowering our
                  community's young individuals. Through mentorship, workshops, and
                  character-building activities, we aim to instill values of leadership,
                  responsibility, and resilience. Focused on educational enrichment, this project
                  equips youth with the skills needed to navigate challenges and contribute
                  meaningfully to society. It stands as a commitment to shaping a generation of
                  leaders who embody integrity, empathy, and a strong sense of social
                  responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 h-full py-5 flex items-center justify-center gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 px-8 w-full">
            <h1 class="text-3xl underline py-3">Youth Development Project</h1>
            <p>
              Organize activities, workshops, and educational programs to support the development of
              Muslim youth within the community..
            </p>
          </div>
          <div class="bg-white rounded-xl p-5 px-8 w-full">
            <h1 class="text-3xl underline py-3">Overview</h1>
            <p>
              The Youth Development Project is a transformative initiative designed to cultivate the
              potential of young individuals within our community. Through a multifaceted approach
              encompassing mentorship, workshops, and character-building activities, the project
              aims to instill values of leadership, responsibility, and resilience. Focused on
              educational enrichment, it equips youth with the skills necessary to navigate lifes
              challenges while encouraging personal growth. The program creates a supportive
              environment that empowers participants to become not only successful individuals but
              also compassionate contributors to society. By fostering a commitment to community
              service and active citizenship, the Youth Development Project stands as a testament to
              our dedication to shaping a generation of leaders characterized by integrity, empathy,
              and a strong sense of social responsibility. It serves as a beacon for youth
              empowerment, ensuring they are prepared to positively impact both their immediate
              surroundings and the wider world...
            </p>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/src/assets/image/home/l3.jpeg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/src/assets/image/home/l4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/src/assets/image/home/l7.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/src/assets/image/home/l4.png"
                alt=""
              />
            </div>
          </div>

          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3">Procedure</h1>
            <div class="px-5">
              <ul>
                <li class="list-disc">
                  Design and implement mentorship programs for personalized guidance.
                </li>
                <li class="list-disc">
                  Conduct educational workshops to enhance academic and practical skills.
                </li>
                <li class="list-disc">
                  Facilitate character-building activities to instill leadership and resilience.
                </li>
                <li class="list-disc">
                  Create a supportive environment fostering open communication and collaboration.
                </li>
                <li class="list-disc">
                  Develop partnerships with educational institutions and professionals for
                  expertise.
                </li>
                <li class="list-disc">
                  Assess and address individual needs through personalized development plans.
                </li>
                <li class="list-disc">
                  Organize community service projects to instill a sense of social responsibility.
                </li>
                <li class="list-disc">
                  Encourage active participation in extracurricular and leadership activities.
                </li>
                <li class="list-disc">
                  Provide resources for career exploration and skill development.
                </li>
                <li class="list-disc">
                  Evaluate and adapt program effectiveness based on ongoing feedback and
                  assessments.
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3">Policy</h1>
            <div class="px-5">
              <p class="mb-2">
                The following are the policies for hosting Youth Development Project at IDL
              </p>

              <ul>
                <li class="list-disc">
                  All rules and policies must be followed. A refusal of any type could lead to a
                  termination of the program.
                </li>
                <li class="list-disc">
                  Implement a code of conduct emphasizing respect, inclusivity, and collaboration
                  among participants.
                </li>
                <li class="list-disc">
                  Ensure equal access to program resources and opportunities for all youth involved.
                </li>
                <li class="list-disc">
                  Maintain confidentiality regarding personal information shared during mentorship
                  and counseling sessions.
                </li>
                <li class="list-disc">
                  Prioritize a safe and secure environment, adhering to child protection policies.
                </li>
                <li class="list-disc">
                  Foster a zero-tolerance policy for discrimination, bullying, or any form of
                  harassment.
                </li>
                <li class="list-disc">
                  Establish clear guidelines for mentor-mentee interactions to maintain professional
                  boundaries.
                </li>
                <li class="list-disc">
                  Require parental consent and involvement for participants under a certain age.
                </li>
                <li class="list-disc">
                  Regularly assess and update program content to stay relevant and impactful.
                </li>
                <li class="list-disc">
                  Promote diversity and cultural sensitivity in all program activities and
                  materials.
                </li>
                <li class="list-disc">
                  Implement an effective grievance resolution process to address concerns promptly
                  and fairly.
                </li>
                <li class="list-disc">
                  IDL reserves the right to refuse service with or without reason.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import Card from '/src/components/CardSection.vue'
import FacilitesMore from '/src/components/FacilitiesMore.vue'

import { ref } from 'vue'
import { Calendar } from '/components/ui/calendar'

const date = ref()

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const event = ref([
  {
    id: 1,
    title: 'Feed the hungry',
    date: '20 jan 2024',
    image: '/src/assets/image/home/h1.png',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
  },
  {
    id: 2,
    title: 'Help the weak',
    date: '24 jan 2024',
    image: '/src/assets/image/home/h2.png',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
  },
  {
    id: 3,
    title: 'Comfort the sick',
    date: '28 jan 2024',
    image: '/src/assets/image/home/h3.png',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
  },
  {
    id: 4,
    title: 'Comfort the sick',
    date: '28 jan 2024',
    image: '/src/assets/image/home/h3.png',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
  },
  {
    id: 5,
    title: 'Educate children',
    date: '20 jan 2024',
    image: '/src/assets/image/home/h1.png',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
  },
  {
    id: 5,
    title: 'Help the weak',
    date: '24 jan 2024',
    image: '/src/assets/image/home/h2.png',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, distinctio.'
  }
])
</script>

<style lang="scss" scoped></style>
