<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
import { ref } from 'vue'

const bidForm = ref({
  bid_id: '',
  job_name: '',
  job_budget: '',
  summary: '',
  term_and_condition:''
})

const ceateBidForm = async () => {
  try {
    const data = await api().post('create-bid-form', bidForm.value)
    console.log(data)
    bidForm.value.bid_id = ''
    bidForm.value.job_name = ''
    bidForm.value.job_budget = ''
    bidForm.value.summary = ''
    bidForm.value.term_and_condition = ''

  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Create Bid</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="ceateBidForm">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-4">
            <div class="relative mb-3 w-1/2">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="bidForm.bid_id"
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
                v-model="bidForm.job_name"
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
                v-model="bidForm.job_budget"
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
              Project Complition Time <span class="text-red-500">*</span>
            </p>
            <input type="text" class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200">
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
              v-model="bidForm.summary"
            ></textarea>
          </div>

          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-800 font-semibold">
              Project/Job Terms & Condition <span class="text-red-500">*</span>
            </p>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Ex:23"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              v-model="bidForm.term_and_condition"
            ></textarea>
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
