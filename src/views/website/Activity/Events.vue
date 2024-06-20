<template>
  <DefaultLayout>
    <div class="bg-gray-100 h-full pt-10 py-5 gap-5 w-full">
      <div class="bg-[url('/src/assets/image/home/bg-food-3.jpg')] bg-cover">
        <div class="bg-[#00000057] rounded-none pt-20">
          <div class=""></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="text-left">
              <div class="px-10 py-6">
                <h1 class="mb-5 text-5xl text-white font-bold">
                  {{ selectedEvent.selectedUpcommingEvent?.name }}
                  {{ selectedEvent.selectedActiveEvent?.name }}
                </h1>
                <p
                  class="mb-5 text-lg font-semibold bg-[#00000042] p-2 w-3/6 rounded-lg text-white"
                >
                  {{ selectedEvent.selectedUpcommingEvent?.description }}
                  {{ selectedEvent.selectedActiveEvent?.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full py-5 flex items-center justify-center gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 px-8 w-full">
            <h1 class="text-3xl underline py-3">
              {{
                selectedEvent.selectedUpcommingEvent?.name ||
                selectedEvent.selectedActiveEvent?.name
              }}
            </h1>
            <p>
              {{
                selectedEvent.selectedUpcommingEvent?.description ||
                selectedEvent.selectedActiveEvent?.description
              }}
            </p>
          </div>
          <div class="bg-white rounded-xl p-5 px-8 w-full">
            <h1 class="text-3xl underline py-3">Resource</h1>
            <p class="font-semibold">Material Resource :</p>
            <p>
              {{
                selectedEvent.selectedUpcommingEvent?.material_resource ||
                selectedEvent.selectedActiveEvent?.material_resource
              }}
            </p>
            <p class="font-semibold">Human Resource :</p>
            <p>
              {{
                selectedEvent.selectedUpcommingEvent?.human_resource ||
                selectedEvent.selectedActiveEvent?.human_resource
              }}
            </p>
          </div>
          <div class="bg-white rounded-xl p-5 px-8 w-full">
            <h1 class="text-3xl underline py-3">Location</h1>
            <p class="font-semibold">Address :</p>
            <p>
              {{
                selectedEvent.selectedUpcommingEvent?.address ||
                selectedEvent.selectedActiveEvent?.address
              }}
            </p>
            <p class="font-semibold">City</p>
            <p>
              {{
                selectedEvent.selectedUpcommingEvent?.city ||
                selectedEvent.selectedActiveEvent?.city
              }}
            </p>
            <p class="font-semibold">State</p>
            <p>
              {{
                selectedEvent.selectedUpcommingEvent?.state ||
                selectedEvent.selectedActiveEvent?.state
              }}
            </p>
          </div>

          <div class="bg-white rounded-xl p-5 w-full">
            <div class="grid gap-4">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  :src="
                    selectedEvent.selectedUpcommingEvent?.image ||
                    selectedEvent.selectedActiveEvent?.image
                  "
                  alt=""
                />
              </div>
              <!-- <div class="grid grid-cols-5 gap-4">
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="@/assets//image//hungry/hungry-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="@/assets//image//hungry/hungry-4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="@/assets//image//hungry/hungry-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="@/assets//image//hungry/hungry-7.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    class="h-auto max-w-full rounded-lg"
                    src="@/assets//image//hungry/hungry-8.jpg"
                    alt=""
                  />
                </div>
              </div> -->
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3">Procedure</h1>
            <div class="px-5">
              <ul>
                <li class="list-disc">
                  Organize volunteers at the Islamic Center for meal assembly.
                </li>
                <li class="list-disc">Prepare 2,000 bagged meals for distribution.</li>
                <li class="list-disc">
                  Coordinate with local homeless shelters for meal delivery.
                </li>
                <li class="list-disc">Ensure non-discriminatory distribution based on need.</li>
                <li class="list-disc">
                  Emphasize adherence to Islamic teachings on helping the hungry.
                </li>
                <li class="list-disc">Monitor and manage the overall logistics of the campaign.</li>
                <li class="list-disc">
                  Promote community engagement and awareness for future initiatives.
                </li>
                <li class="list-disc">
                  Collaborate with Pious Projects to align with global humanitarian goals.
                </li>
                <li class="list-disc">
                  Evaluate the effectiveness of the campaign and gather feedback.
                </li>
                <li class="list-disc">Document the event for reporting and future reference.</li>
              </ul>
            </div>
          </div>

          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3">Policy</h1>
            <div class="px-5">
              <p class="mb-2">
                The following are the policies for hosting Feed The Hungry event at IDL
              </p>

              <ul>
                <li class="list-disc">
                  All rules and policies must be followed. A refusal of any type could lead to a
                  termination of the program.
                </li>
                <li class="list-disc">
                  All volunteers must adhere to respectful and inclusive behavior during the
                  campaign.
                </li>
                <li class="list-disc">
                  Ensure fair and equal distribution of meals to individuals in need, irrespective
                  of background.
                </li>
                <li class="list-disc">
                  Implement measures to prioritize the well-being of volunteers and recipients
                  during meal preparation and distribution.
                </li>
                <li class="list-disc">
                  Maintain the privacy and confidentiality of individuals receiving assistance.
                </li>
                <li class="list-disc">
                  Establish mechanisms for tracking and reporting the usage of resources during the
                  campaign.
                </li>
                <li class="list-disc">
                  Promote eco-friendly practices, such as using recyclable materials in meal
                  packaging.
                </li>
                <li class="list-disc">
                  Foster partnerships with local shelters and community organizations for a unified
                  approach to addressing hunger.
                </li>
                <li class="list-disc">
                  Establish a system for volunteers and recipients to provide feedback, facilitating
                  continuous improvement.
                </li>
                <li class="list-disc">Only partitions provided by IDL are allowed.</li>
                <li class="list-disc">
                  Any cultural or banquet hall practices, such as flower curtains, formal entrances,
                  and men and women gathering at entrances or lobby areas, will not be allowed under
                  any circumstances.
                </li>
                <li class="list-disc">
                  IDL reserves the right to refuse service with or without reason.
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="authStore.isAuthenticated == true"
            class="bg-white rounded-xl p-5 w-full flex items-center justify-center"
          >
            <div class="space-y-8 w-full">
              <div class="bg-white rounded-xl w-full">
                <div class="pt-2">
                  <h1 class="text-2xl font-bold">Event Application</h1>
                </div>
                <div class="py-5 space-y-7 mt-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="tel"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      v-model="applyForm.phone"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Phone Number <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="flex w-full gap-5">
                    <div class="relative mb-3 w-full">
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlInput50"
                        v-model="applyForm.address"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Address <span class="text-red-500">*</span>
                      </label>
                    </div>
                    <div class="flex w-full gap-5">
                      <div class="relative mb-3 w-full">
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                          id="exampleFormControlInput50"
                          v-model="applyForm.city"
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
                          v-model="applyForm.state"
                        />
                        <label
                          for="exampleFormControlInput50"
                          class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                          >State <span class="text-red-500">*</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  @click="eventApply"
                  class="w-[350px] h-[45px] rounded-2xl bg-[#23646dc6] text-white font-bold flex items-center justify-center mx-auto"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div v-else class="flex justify-center gap-5">
            <router-link to="/Signup" class="bg-blue-600 px-8 py-2 rounded-2xl text-white"
              >Sign Up</router-link
            >
            <router-link to="/Member_Login" class="bg-green-600 px-8 py-2 rounded-2xl text-white"
              >Sign In</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from '/src/stores/store.ts'
import { useAuthStore } from '/src/stores/AuthStore.ts'
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

const store = useStore()
const authStore = useAuthStore()
const route = useRoute()
const { toast } = useToast()

const selectedEvent = computed(() => {
  let selectedActiveEvent = store.active_event_list.find(
    (item) => item.id === Number(route.params.id)
  )
  let selectedUpcommingEvent = store.upcomming_event_list.find(
    (item) => item.id === Number(route.params.id)
  )

  return { selectedActiveEvent, selectedUpcommingEvent }
})

const applyForm = ref({
  user_event_id: route.params.id,
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: ''
})

const eventApply = async () => {
  try {
    const { data } = await api().post('event-apply-store', applyForm.value)
    console.log(data)
    toast({
      title: 'Apply successful'
    })
  } catch (error) {
    console.log(error)
    toast({
      title: 'Apply failed'
    })
  }
}
</script>

<style lang="scss" scoped></style>
