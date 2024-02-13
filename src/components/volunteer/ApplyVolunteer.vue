<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import VolunteerSidebar from '@/views/GetInvolved/Volunteers/VolunteerSideBar.vue'
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

const participants_yob = ref(2010)
</script>

<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
        <VolunteerSidebar />
        <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Apply Volunteer Job</p>
          <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
            <form @submit.prevent="volunteerAdmissionSubmit()">
              <div class="py-5 space-y-7 mt-5">
                <div class="flex gap-4">
                  <div class="relative mb-3 w-1/2">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
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
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Phone <span class="text-red-500">*</span>
                    </label>
                  </div>

                  <div class="relative mb-3 w-1/2">
                    <input
                      v-model="participants_yob"
                      type="number"
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
                    <Select>
                      <SelectTrigger class="w-full">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <!-- <SelectLabel>Product</SelectLabel> -->
                          <SelectItem value="male"> Male </SelectItem>
                          <SelectItem value="female"> Female </SelectItem>
                          <SelectItem value="maleOrFemale"> Other </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div class="relative mb-3 w-1/2">
                    <input
                      type="email"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
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
                    class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                  ></textarea>
                </div>

                <div class="relative" v-if="new Date().getFullYear() - participants_yob > 18">
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

                <div
                  v-if="new Date().getFullYear() - participants_yob < 18"
                  class="border border-gray-600 p-2 rounded-md"
                >
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
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Address <span class="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <fieldset class="p-4">
                    <legend>Applying for</legend>
                    <div>
                      <label>
                        <input type="checkbox" id="coding" name="interest" value="coding" />
                        Coding
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" id="music" name="interest" value="music" />
                        Music
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" id="art" name="interest" value="art" />
                        Art
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" id="sports" name="interest" value="sports" />
                        Sports
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" id="cooking" name="interest" value="cooking" />
                        Cooking
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" id="other" name="interest" value="other" />
                        Other
                      </label>
                      <input type="text" id="otherValue" name="other" aria-label="Other interest" />
                    </div>
                  </fieldset>
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
  border: 5px solid blue;
}

legend {
  padding: 10px;
  background: blue;
  color: cyan;
}
</style>
