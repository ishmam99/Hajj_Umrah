<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
import { ref } from 'vue'

const bidderInputs = ref([
  {
    name: 'Introduction',
    type: 'textarea'
  },
  {
    name: 'Scope of Work',
    type: 'text'
  },
  {
    name: 'Price',
    type: 'number'
  },
  {
    name: 'Timeline',
    type: 'datetime'
  }
])

const removeInput = (index) => {
  bidderInputs.value.splice(index, 1)
}

const inputType = ref('text')
const inputFiledName = ref('')

const addNewField = () => {
  console.log(inputType.value, inputFiledName.value)
  bidderInputs.value.push({ name: inputFiledName.value, type: inputType.value })
}

const showCreateNewField = ref(false)
// // const addInputFields = () => {
// //   bidderInputs.value.push(
// //     { name: '', type: 'text' },
// //     { name: '', type: 'text' }
// //   )
// // }

// const submitBidderInputs = () => {
//   // Perform submission logic here
// }
</script>

<template>
 <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Create Bid</p>
          <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
            <form>
              <div class="py-5 space-y-7 mt-5">
                <div class="flex gap-4">
                  <div class="relative mb-3 w-1/2">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Bid Id <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="relative mb-3 w-1/2">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 font-semibold z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Project/Job Name <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="relative mb-3 w-1/2">
                    <input
                      type="number"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Project/ Job Budget <span class="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div class="relative">
                  <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                    Project/Job scope of work/Summary <span class="text-red-500">*</span>
                  </p>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                  ></textarea>
                </div>
                <div class="relative">
                  <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                    Required Project Completion Timeframe <span class="text-red-500">*</span>
                  </p>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                  ></textarea>
                </div>

                <div class="relative">
                  <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
                    Terms & Conditions <span class="text-red-500">*</span>
                  </p>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                  ></textarea>
                </div>
                <div class="flex flex-col gap-5">
                  <div class="flex justify-between gap-2">
                    <div>
                      <h1 class="text-gray-800 font-semibold text-xl px-2">
                        Required Bidder Information
                      </h1>
                    </div>
                    <div class="flex justify-end gap-2">
                      <h1
                        v-if="!showCreateNewField"
                        class="text-gray-800 font-semibold text-xl px-2"
                      >
                        Create Additional Requirements
                      </h1>
                      <div v-else class="flex flex-col gap-2">
                        <div class="flex">
                          <p class="px-1">Name</p>
                          <input
                            v-model="inputFiledName"
                            type="text"
                            class="w-full rounded-lg px-2 border-2 focus:outline-gray-200"
                          />
                        </div>

                        <div class="flex">
                          <p class="px-1">Type {{ selected }}</p>
                          <select
                            v-model="inputType"
                            class="w-full rounded-lg px-2 border-2 focus:outline-gray-200"
                          >
                            <option disabled value="">Please select one</option>
                            <option>textarea</option>
                            <option>text</option>
                            <option>datetime</option>
                            <option>number</option>
                          </select>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="bg-teal-800 hover:bg-teal-900 text-white font-bold py-1 px-3 border border-blue-700 rounded-lg"
                        @click="
                          showCreateNewField ? addNewField() : '',
                            (showCreateNewField = !showCreateNewField)
                        "
                      >
                        {{ showCreateNewField ? 'Done' : 'Add' }}
                      </button>
                    </div>
                  </div>
                  <div class="relative mb-3 w-full">
                    <input
                      type="number"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 font-semibold top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Vendor Id <span class="text-red-500">*</span>
                    </label>
                  </div>

                  <div v-for="(input, index) in bidderInputs" class="relative">
                    <button @click="removeInput(index)" class="absolute z-50 right-0 pt-4 pr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="red"
                        height="20"
                        width="20"
                      >
                        <path
                          d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                        ></path>
                      </svg>
                    </button>
                    <p
                      class="p-3 absolute top-[-25px] left-2 bg-transparent text-gray-800 font-semibold"
                    >
                      {{ input.name }}
                    </p>
                    <input
                      v-if="input.type === 'textarea'"
                      name=""
                      id=""
                      cols=""
                      rows="4"
                      placeholder="An overview of the bidder and their qualifications"
                      class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                    />
                    <input
                      v-else-if="input.type === 'text'"
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 pt-5 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      placeholder="A detailed description of the services or products being offered"
                      value=""
                    />
                    <input
                      v-else-if="input.type === 'number'"
                      type="number"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none bg-transparent"
                      id="exampleFormControlInput50"
                      value=""
                    />
                    <input
                      v-else-if="input.type === 'datetime'"
                      type="date"
                      class="peer block min-h-[auto] w-3/4 rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
                >
                  Create bid
                </button>
              </div>
            </form>
          </div>
        </div>
</template>
