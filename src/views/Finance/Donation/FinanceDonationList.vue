<template>
  <div class="px-4 bg-white py-5">
    <!-- list  -->
    <div v-if="showList == true">
      <div class="flex justify-between items-center py-4">
        <p class="text-2xl text-yellow-600 font-bold pb-2">Donation Event List</p>
        <input
          type="date"
          placeholder="Search by date or name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <input
          type="text"
          placeholder="Search by name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left w-1/8">Donation ID</th>
              <th class="p-2 w-3/8 text-left">Donation Event Name(s)</th>
              <th class="p-2 text-center w-1/8">Starting Date</th>
              <th class="p-2 text-center w-1/8">Ending Date</th>
              <th class="p-2 text-center w-1/8">Amount</th>
              <th class="p-2 text-center w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tableRowColor" v-for="item in store.donationList" :key="item.id">
              <td class="py-4 p-2 w-1/8">{{ item.event_id }}</td>
              <td class="py-4 p-2 gap-2 w-3/8">
                <h3 class="font-bold">{{ item.name }}</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">{{ item.start_date }}</td>
              <td class="py-4 p-2 text-center w-1/8">{{ item.end_date }}</td>
              <td class="py-4 p-2 text-center w-1/8">$ {{ item.amount }}</td>
              <td class="py-4 p-2 text-center w-1/8">
                <div
                  class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                >
                  <DropdownMenu class="w-full">
                    <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem class="text-blue-600" @click="openShowDetails(item)"
                        >Details</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-yellow-600" @click="showEdit(item)"
                        >Edit</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-green-600" @click="showEdit(item)"
                        >Post</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-red-600" @click="submitDelete()"
                        >Delete</DropdownMenuItem
                      >
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 16L6 10H18L12 16Z"></path>
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- update form  -->

    <div v-if="editForm == true" class="">
      <p class="text-2xl font-bold pb-3 border-b text-yellow-600">Donation Edit Form</p>
      <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
        <form @submit.prevent="donationEditFormCreate()">
          <div class="py-5 space-y-7 mt-5">
            <div class="flex gap-5 items-center justify-between">
              <div class="relative mb-3 w-3/5">
                <input
                  v-model="donationEditForm.name"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="name"
                  value=""
                />
                <label
                  for="name"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Donation Event Name <span class="text-red-500">*</span>
                </label>
              </div>
              <div class="relative mb-3 w-2/5">
                <input
                  v-model="donationEditForm.event_id"
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="id"
                  value=""
                />
                <label
                  for="id"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Donation Event ID <span class="text-red-500">*</span>
                </label>
              </div>
            </div>

            <div class="relative">
              <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                Donation Event Description
              </p>
              <textarea
                v-model="donationEditForm.description"
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Description"
                class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
              ></textarea>
            </div>
            <div class="flex justify-between gap-5">
              <div class="w-1/3 flex flex-col gap-5">
                <div class="relative">
                  <div class="gap-5">
                    <label for="">Starting Date <span class="text-red-500">*</span> </label>
                    <div class="pt-2">
                      <input
                        v-model="donationEditForm.start_date"
                        type="date"
                        class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      />
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="gap-5">
                    <label for="">Starting Time <span class="text-red-500">*</span> </label>
                    <div class="pt-2">
                      <input
                        v-model="donationEditForm.start_time"
                        type="time"
                        class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
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
                        v-model="donationEditForm.end_date"
                        type="date"
                        class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      />
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="gap-5">
                    <label for="">Ending Time <span class="text-red-500">*</span> </label>
                    <div class="pt-2">
                      <input
                        v-model="donationEditForm.end_time"
                        type="time"
                        class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/3 flex flex-col gap-5">
                <div class="">
                  <p class="text-gray-600">Donation Amount</p>
                  <div
                    class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                  >
                    <input
                      v-model="donationEditForm.amount"
                      type="text"
                      placeholder="Enter Amount"
                      class="h-full w-full absolute top-0 rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center"
                    />
                  </div>
                </div>
                <div class="">
                  <p class="text-gray-600">Donation Thumbnail</p>
                  <div
                    class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                  >
                    <input
                      @change="onFileChange"
                      type="file"
                      class="h-full w-full opacity-0 absolute top-0"
                    />
                    Choose File
                  </div>
                </div>
                <p class="text-gray-600 text-center">{{ selectedFile?.name }}</p>
              </div>
            </div>
            <div class="flex justify-center gap-5">
              <button
                type="submit"
                class="w-[250px] py-2 rounded-2xl bg-teal-800 text-white font-bold"
              >
                Update
              </button>
              <button
                @click="cancleEdit()"
                class="w-[250px] py-2 rounded-2xl bg-red-600 text-white font-bold"
              >
                Cancle
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- details -->

    <div v-if="showDetails == true">
      <div class="flex items-center justify-between gap-5">
        <p class="text-2xl text-yellow-600 font-bold pb-2">Donation Event : {{ detailsItem.name }}</p>
        <button
          @click="closeDetails()"
          class="w-[150px] py-2 rounded-md bg-red-600 text-white"
        >
          Close
        </button>
      </div>
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-center w-1/8">SL.</th>
              <th class="p-2 text-left line-clamp-1 w-2/8">Donator's Name</th>
              <th class="p-2 text-center w-1/8">Donated Date</th>
              <th class="p-2 text-center w-1/8">Donated Time</th>
              <th class="p-2 text-center w-1/8">Donated Amount</th>
              <th class="p-2 text-center w-1/8">Account Number</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 w-1/8 text-center">01</td>
              <td class="py-4 p-2 w-2/8 relative group">
                <h3 class="font-bold">Mr.Salam</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">1.00 PM</td>
              <td class="py-4 p-2 text-center w-1/8">$ 1000000</td>
              <td class="py-4 p-2 text-center w-1/8">1111 2222 3333 4444</td>
            </tr>
            <tr class="bg-white">
              <td class="py-4 p-2 w-1/8 text-center">02</td>
              <td class="py-4 p-2 w-2/8 relative group">
                <h3 class="font-bold">Mr.Karim</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">10.00 AM</td>
              <td class="py-4 p-2 text-center w-1/8">$ 500000</td>
              <td class="py-4 p-2 text-center w-1/8">1111 2222 3333 4444</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useAdminStore } from '/src/stores/adminStore.ts'
import { useToast } from '/components/ui/toast/use-toast'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '/components/ui/dropdown-menu'

const store = useAdminStore()

const loading = ref(false)
const { toast } = useToast()
const selectedFile = ref(null)
const editForm = ref(false)
const showDetails = ref(false)
const showList = ref(true)
const detailsItem = ref()

const donnationList = async () => {
  loading.value = true
  try {
    const { data } = await api().get('donation-method-list')
    store.donationList = data.data
    console.log(store.donationList)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

const donationEditForm = ref({
  name: '',
  event_id: '',
  description: '',
  start_date: '',
  start_time: '',
  end_date: '',
  end_time: '',
  amount: '',
  image: ''
})

const reset = () => {
  donationEditForm.value = ref({
    name: '',
    event_id: '',
    description: '',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    amount: '',
    image: ''
  })
}

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  donationEditForm.value.image = event.target.files[0]
  console.log('Selected File:', selectedFile.value)
}

const donationEditFormCreate = async () => {
  try {
    const data = await api().post('donation-method-store', donationEditForm.value)
    console.log(data)
    toast({
      title: 'Donation Event Created '
    })
    reset()
  } catch (error) {
    console.log(error)
  }
}

const showEdit = () => {
  editForm.value = true
  showList.value = false
}

const openShowDetails = (item) => {
  showDetails.value = true
  showList.value = false
  detailsItem.value = item
}

const cancleEdit = () => {
  editForm.value = false
  showList.value = true
}

const closeDetails = () => {
  showDetails.value = false
  showList.value = true
}

onMounted(async () => {
  donnationList()
})
</script>

<style>
.tableRowColor:nth-child(even) {
  background: white;
}
</style>
