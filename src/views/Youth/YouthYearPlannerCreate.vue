<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Year Planner Create Form</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="yearPlannerFormApply()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex justify-between items-center gap-5">
            <div class="relative w-full">
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="exampleFormControlInput50"
                value=""
                v-model="yearPlannerForm.name"
              />
              <label
                for="exampleFormControlInput50"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Plan Name <span class="text-red-500">*</span>
              </label>
            </div>
          </div>

          <div class="flex justify-between gap-5">
            <div class="w-full flex gap-5">
              <div class="relative w-1/2">
                <div class="gap-5">
                  <label for="">Starting Date <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="yearPlannerForm.date"
                    />
                  </div>
                </div>
              </div>
              <div class="relative w-1/2">
                <div class="gap-5">
                  <label for="">Starting Time <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                      type="time"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      v-model="yearPlannerForm.time"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import YouthSidebar from '/src/views/Youth/youthSidebar.vue'
import { Input } from '/components/ui/input'
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

const store = useStore()
const loading = ref(false)
const { toast } = useToast()

const yearPlannerForm = ref({
  name: '',
  date: '',
  time: '',
})


const yearPlannerFormApply = async () => {
  loading.value = true
  try {
    const data = await api().post('year-planner-store',yearPlannerForm.value, {
      
    })
    toast({
      title: 'Success',
      description: "Year Planner Create"
    })
    console.log(data)
  } catch (error) {
    console.log(error)
    toast({
      title: 'Error',
      description: 'Please Try Again'
    })
  }
  loading.value = false
}
</script>
