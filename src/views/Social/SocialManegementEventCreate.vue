<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-[80px] flex justify-between">
        <SocialSidebar />
        <div class="px-5 bg-slate-50 py-5 w-3/4">
          <p class="text-2xl font-bold py-3 border-b">Event Create Form</p>
          <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
            <form @submit.prevent="socialEventSubmit()">
              <div class="py-5 space-y-7 mt-5">
                <div class="flex items-center justify-center gap-5">
                  <div class="relative mb-3 w-3/4">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="EventList.event_name"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-1 leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Event Name <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="w-1/4">
                    <div class="relative mb-3">
                      <div class="">
                        <p class="text-xl font-bold py-1">
                          Occurrence Type <span class="text-red-600">*</span>
                        </p>
                        <div class="flex gap-2 items-center">
                          <div>
                            <input
                              type="radio"
                              name=""
                              id=""
                              value="single"
                              v-model="occurrence.type"
                            />
                            <label for="" class="font-semibold mx-2">Single</label>
                          </div>
                          <div>
                            <!-- <input
                              type="radio"
                              value="recurrence"
                              v-model="occurrence.type"
                              id="toggleModal"
                              @update="modalOpen = !modalOpen"
                            />
                            <label for="toggleModal" class="font-semibold mx-2">Recurrence</label> -->

                            <Dialog>
                              <DialogTrigger class="">
                                <input
                                  type="radio"
                                  value="recurrence"
                                  v-model="occurrence.type"
                                  id="toggleModal"
                                />
                                <label for="toggleModal" class="font-semibold mx-2"
                                  >Recurrence</label
                                >
                              </DialogTrigger>
                              <DialogContent class="h-3/5">
                                <DialogHeader>
                                  <DialogTitle>
                                    <div class="font-bold text-2xl mb-6 text-center">
                                      Recurrence Form
                                    </div>
                                  </DialogTitle>
                                  <DialogDescription>
                                    <!-- <img :src="event.img" alt="" /> -->
                                    <div class="flex gap-2">
                                      <div class="font-semibold my-2 text-xl text-black">
                                        Recurrence Pattern:
                                      </div>
                                      <div>
                                        <Select v-model="occurrenceType">
                                          <SelectTrigger class="w-full">
                                            <SelectValue placeholder="Recurrence Pattern" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectGroup>
                                              <SelectLabel>Recurrence Pattern</SelectLabel>
                                              <SelectItem value="Days"> Daily </SelectItem>
                                              <SelectItem value="Weeks"> Weekly </SelectItem>
                                              <SelectItem value="Months"> Monthly </SelectItem>
                                              <!-- <SelectItem value="Shelter">
                                                Humanitarian Assistance Event
                                              </SelectItem>
                                              <SelectItem value="Homeless">
                                                Donation Collection Event
                                              </SelectItem> -->
                                            </SelectGroup>
                                          </SelectContent>
                                        </Select>
                                      </div>

                                      <!-- {{ event.description }} -->
                                    </div>
                                    <div
                                      class="mt-2 flex items-center font-semibold gap-2 text-black"
                                    >
                                      <p>Repeat Every</p>
                                      <Input
                                        type="number"
                                        placeholder="number"
                                        class="w-[100px] focus:border-0"
                                      />
                                      <label for="" class="">{{ occurrenceType }} On</label>
                                    </div>
                                    <div
                                      class="flex items-center gap-2 mt-2 text-black font-semibold"
                                    >
                                      <div>
                                        <input type="checkbox" name="" id="" />
                                        <label for="" class="font-semibold mx-2">Sun</label>
                                      </div>
                                      <div>
                                        <input type="checkbox" name="" id="" />
                                        <label for="" class="font-semibold mx-2">Mon</label>
                                      </div>
                                      <div>
                                        <input type="checkbox" name="" id="" />
                                        <label for="" class="font-semibold mx-2">Tue</label>
                                      </div>
                                      <div>
                                        <input type="checkbox" name="" id="" />
                                        <label for="" class="font-semibold mx-2">Wed</label>
                                      </div>
                                      <div>
                                        <input type="checkbox" name="" id="" />
                                        <label for="" class="font-semibold mx-2">Thu</label>
                                      </div>
                                      <div>
                                        <input type="checkbox" name="" id="" />
                                        <label for="" class="font-semibold mx-2">Fri</label>
                                      </div>
                                      <div>
                                        <input type="checkbox" name="" id="" />
                                        <label for="" class="font-semibold mx-2">Sat</label>
                                      </div>
                                    </div>
                                    <div>
                                      <h1 class="text-xl font-semibold text-black mt-4 mb-2">
                                        Ends
                                      </h1>
                                      <RadioGroup default-value="comfortable" class="">
                                        <div class="flex items-center space-x-2">
                                          <RadioGroupItem id="r1" value="default" />
                                          <Label for="r1">Never</Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                          <RadioGroupItem id="r2" value="comfortable" />
                                          <Label for="r2">
                                            <div class="mt-2 flex items-center gap-2 text-black">
                                              <p>On</p>
                                              <Input type="date" placeholder="date" />
                                            </div>
                                          </Label>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                          <RadioGroupItem id="r3" value="compact" />
                                          <Label for="r3">
                                            <div class="mt-2 flex items-center gap-2 text-black">
                                              <p>After</p>
                                              <Input
                                                type="number"
                                                placeholder="number"
                                                class="w-[100px]"
                                              />
                                              <label for="" class="">{{ occurrenceType }}</label>
                                            </div>
                                          </Label>
                                        </div>
                                      </RadioGroup>
                                    </div>
                                  </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                  <button
                                    type="submit"
                                    class="w-1/2 h-[45px] rounded-2xl bg-cyan-800 text-white font-bold mx-auto flex items-center text-center justify-center"
                                  >
                                    Save
                                  </button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                    Event Description <span class="text-red-500">*</span>
                  </p>
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                    v-model="EventList.event_description"
                  ></textarea>
                </div>

                <div class="flex gap-5">
                  <div class="relative w-1/2">
                    <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                      Human Resource <span class="text-red-500">*</span>
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols=""
                      rows="4"
                      placeholder="Ex:23"
                      class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                      v-model="EventList.human_resource"
                    ></textarea>
                  </div>
                  <div class="relative w-1/2">
                    <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                      Material Resource <span class="text-red-500">*</span>
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols=""
                      rows="4"
                      placeholder="Ex:23"
                      class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                      v-model="EventList.material_resource"
                    ></textarea>
                  </div>
                </div>

                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="EventList.event_location"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Event Location <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="flex w-full gap-5">
                    <div class="relative mb-3 w-full">
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlInput50"
                        value=""
                        v-model="EventList.city"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >City <span class="text-red-500">*</span>
                      </label>
                    </div>
                    <div class="relative mb-3 w-full">
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlInput50"
                        value=""
                        v-model="EventList.state"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >State <span class="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between gap-5">
                  <div class="w-1/3 flex flex-col gap-5">
                    <div class="relative">
                      <div class="gap-5">
                        <label for="" class=""
                          >Starting Date <span class="text-red-500">*</span>
                        </label>
                        <div class="pt-2">
                          <input
                            type="date"
                            class="py-2 px-6 rounded-2xl w-full border-2"
                            v-model="EventList.starting_date"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="relative">
                      <div class="gap-5">
                        <label for="">Starting Time <span class="text-red-500">*</span> </label>
                        <div class="pt-2">
                          <input
                            type="time"
                            class="py-2 px-6 rounded-2xl w-full border-2"
                            v-model="EventList.starting_time"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/3 flex flex-col gap-5">
                    <div class="relative">
                      <div class="gap-5">
                        <label for="">Ending Date <span class="text-red-500">*</span> </label>
                        <div class="pt-2">
                          <input
                            type="date"
                            class="py-2 px-6 rounded-2xl w-full border-2"
                            v-model="EventList.ending_date"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="relative">
                      <div class="gap-5">
                        <label for="">Ending Time <span class="text-red-500">*</span> </label>
                        <div class="pt-2">
                          <input
                            type="time"
                            class="py-2 px-6 rounded-2xl w-full border-2"
                            v-model="EventList.ending_time"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/3 flex flex-col gap-5">
                    <div class="">
                      <label for="" class="text-gray-600"
                        >Event Thumbnail <span class="text-red-500">*</span></label
                      >
                      <div
                        class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                      >
                        <input type="file" class="h-full w-full opacity-0 absolute top-0" />
                        Choose File
                      </div>
                    </div>
                    <div>
                      <label for="">Event Type <span class="text-red-500">*</span> </label>
                      <div class="pt-2">
                        <Select v-model="EventList.event_type">
                          <SelectTrigger class="w-full">
                            <SelectValue placeholder="Event Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select Event Type</SelectLabel>
                              <SelectItem value="Comfort The Sick"> Sports Event </SelectItem>
                              <SelectItem value="Educate The Children">
                                Religious Event
                              </SelectItem>
                              <SelectItem value="Shelter The Homeless">
                                Social Outreach Event
                              </SelectItem>
                              <SelectItem value="Shelter">
                                Humanitarian Assistance Event
                              </SelectItem>
                              <SelectItem value="Homeless"> Donation Collection Event </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
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
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SocialSidebar from '/src/views/Social/SocialSidevar.vue'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
import { ref } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { Input } from '/components/ui/input'
import { Label } from '/components/ui/label'
import { RadioGroup, RadioGroupItem } from '/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'
const store = useSocialStore()
const EventList = ref({
  event_name: '',
  event_type: '',
  event_description: '',
  human_resource: '',
  material_resource: '',
  event_location: '',
  city: '',
  state: '',
  starting_date: '',
  ending_date: '',
  event_thumbnail: '',
  starting_time: '',
  ending_time: '',
  occurrence_type: ''
})

const occurrenceType = ref('Weeks')

const occurrence = ref({
  type: null
})

const modalOpen = ref(false)

function toggleModal() {
  modalOpen.value = !modalOpen.value
}

const loading = ref(false)
const { toast } = useToast()

// const socialEventSubmit = async () => {
//   console.log(socialEventSubmit);
//   loading.value = true
//   try {
//     const data = await api().post('ramadan-program-request', {
//       method: 'post',
//       body: ramadanProgram
//     })
//     toast({
//       title: 'Success',
//       description: data.data.message
//     })
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//     toast({
//       title: 'Error',
//       description: 'Please Try Again'
//     })
//   }
//   loading.value = false
// }

const socialEventSubmit = () => {
  store.event.push = EventList.value

  console.log(store.event)
}
</script>
