<template>
  <div>
    <DefaultLayout>
      <div class="px-20 pt-20 mt-5 py-5 bg-teal-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
            <p class="text-teal-800">/ Apply For Volunteer</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-teal-800 text-4xl font-bold">Apply For Volunteer</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <PostVolunteerJob :renderFrom="'applyVolunteer'" />

    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import Card from '/src/components/cardSection.vue'
import RegistrationMore from '/src/components/RgistrationMore.vue'
import PostVolunteerJob from '@/components/volunteer/PostVolunteerJob.vue'
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
import { useToast } from '/components/ui/toast/use-toast'
const { toast } = useToast()

</script>

<style lang="scss" scoped></style>
