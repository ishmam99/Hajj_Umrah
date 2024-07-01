<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useRouter } from 'vue-router';
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

// pinia


const router = useRouter();
const { toast } = useToast()

const volunteerForm = ref({
  name: '',
  email: '',
  phone_number: '',
  yob: '',
  gender: '',
  education_qualification: '',
  professional_experience: '',
  expertise: '',
  hobbie: '',
  previus_volunteering: '',
  address: '',
  parents_name: '',
  relationship: '',
  parents_email: '',
  parents_address: '',
  parents_phone: '',
  additional_interest:'',
  volunteering_for:''
})

const volunteerAdmissionSubmit = async () => {
  try {
    const data = await api().post('volunteer-form-store',volunteerForm.value)
    toast({
      title: 'Success',
      description: 'sign up Completed'
    })
    console.log(data)
    // router.push({ name: 'Volunteer Login' })
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }
}
</script>

<template>
  <DefaultLayout>
  <div class="px-5 py-5 pt-[80px] bg-[url('/src/assets/image/gallery/e5.jpg')]">
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5 max-w-[800px] mx-auto">
      <div class="text-2xl font-bold py-3 border-b flex items-center space-x-3">
      <p>Apply for Volunteer</p>
    </div>
      <form @submit.prevent="volunteerAdmissionSubmit()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                v-model="volunteerForm.name"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Name <span class="text-red-500">*</span>
              </label>
            </div>

            <div class="relative mb-3 w-1/2">
              <input
                type="email"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="volunteerForm.email"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Email <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="number"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="volunteerForm.phone_number"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Phone <span class="text-red-500">*</span>
              </label>
            </div>

            <div class="relative mb-3 w-1/2">
              <input
                v-model="volunteerForm.yob"
                type="date"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Year of Birth <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <label
                for="exampleFormControlInput50"
                class="mb-2 left-3 -top-3 absolute bg-white text-gray-600 z-10 px-2"
                >Gender <span class="text-red-500">*</span>
              </label>
              <Select v-model="volunteerForm.gender">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Male"> Male </SelectItem>
                    <SelectItem value="Female"> Female </SelectItem>
                    <SelectItem value="Male Or Female"> Other </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="volunteerForm.hobbie"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Hobbies and Interest <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Educational Qualification
            </p>
            <input
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="H.S.C"
              v-model="volunteerForm.education_qualification"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Expertise</p>
            <input
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Software Developer"
              v-model="volunteerForm.expertise"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Professional Experience (If any)
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Professional Experience"
              v-model="volunteerForm.professional_experience"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            ></textarea>
          </div>

          <div class="relative" >
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">Address</p>
            <input
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Address"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            />
          </div>

          <div>
            <div>
              <p class="p-3 left-2 bg-white text-gray-600">Parent Information</p>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex gap-4">
                <div class="relative mb-3 w-1/2">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="volunteerForm.parents_name"
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Name <span class="text-red-500">*</span>
                  </label>
                </div>

                <div class="relative mb-3 w-1/2">
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="volunteerForm.parents_email"
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Email <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="relative mb-3 w-1/2">
                  <input
                    type="number"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="volunteerForm.parents_phone"
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Phone <span class="text-red-500">*</span>
                  </label>
                </div>

                <div class="relative mb-3 w-1/2">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="volunteerForm.relationship"
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Relationship <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>

              <div class="relative">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                  v-model="volunteerForm.address"
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Address <span class="text-red-500">*</span>
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  </div>
</DefaultLayout>
</template>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

fieldset {
  background: cyan;
  border: 5px solid rgb(136, 136, 241);
}

legend {
  padding: 10px;
  background: white;
  border: 2px solid black;
  color: black;
}
</style>
