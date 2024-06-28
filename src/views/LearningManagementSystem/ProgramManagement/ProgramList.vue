<template>
    <div class="px-4 bg-white py-5">
      <div v-if="isEdit == false">
        <div class="flex justify-between items-center pt-4">
          <p class="text-2xl text-cyan-700 font-bold pb-2">Program List</p>
        </div>
        <hr />
  
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white text-lg">
                <th class="p-2 text-start w-1/8">ID</th>
                <th class="p-2 text-start w-1/8">Program Name</th>
                <th class="p-2 text-start w-2/8">Description</th>
                <th class="p-2 text-start w-2/8">Program Type</th>
                <th class="p-2 text-center w-1/8">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="tableRowColor"
              >
                <td class="py-4 px-2 w-1/8">01</td>
                <td class="py-4 px-2 w-1/8">
                  <h3 class="font-semibold">Nadira Program</h3>
                </td>
                <td class="py-4 px-2 w-2/8">
                  Be Hafiz by joining our program
                </td>
                <td class="py-4 px-2 w-2/8">
                  Full Time
                </td>
                <td class="py-4 px-2 flex justify-center">
                  <div
                    class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                  >
                    <DropdownMenu class="w-full">
                      <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                      <DropdownMenuContent class="w-40">
                        <DropdownMenuItem class="text-blue-600">Details</DropdownMenuItem>
  
                        <DropdownMenuItem class="text-cyan-800" @click="edit(event)"
                          >Edit</DropdownMenuItem
                        >
                        <DropdownMenuItem class="text-cyan-800" @click="edit(event)"
                          >Approved</DropdownMenuItem
                        >
                        <DropdownMenuItem class="text-red-600">Delete</DropdownMenuItem>
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
  
      <div v-else class="px-5 bg-slate-50 py-5 w-full">
        <p class="text-2xl font-bold py-3 border-b">Update Announcement</p>
        <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
          <form  @submit.prevent="editSubmit">
            <div class="py-5 space-y-7 mt-5">
              <div class="flex justify-between gap-5">
                <div class="w-1/2 flex flex-col gap-5">
                  <div class="relative">
                    <div class="gap-5">
                      <label for="" class=""> Title <span class="text-red-500">*</span> </label>
                      <div class="pt-2">
                        <input
                          type="text"
                          class="py-2 px-6 rounded-2xl w-full border-2"
                          v-model="announcemnetStore.title"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 flex flex-col gap-5">
                  <div class="">
                    <label for="" class="text-gray-600"
                      >Event Thumbnail <span class="text-red-500">*</span></label
                    >
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
                </div>
              </div>
              <div class="relative">
                <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
                  Announcement Description <span class="text-red-500">*</span>
                </p>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="4"
                  placeholder="Ex:23"
                  class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
                  v-model="announcemnetStore.description"
                ></textarea>
              </div>
  
              <div class="flex justify-center items-center gap-5">
                <button
                type="submit"
                class="w-full h-[45px] rounded-2xl bg-yellow-600 text-white font-bold mx-auto flex items-center text-center justify-center"
              >
                Update
              </button>
  
              <button
                @click="isEdit = false"
                type="submit"
                class="w-full h-[45px] rounded-2xl bg-red-800 text-white font-bold mx-auto flex items-center text-center justify-center"
              >
                Cancle
              </button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
  
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
  } from '/components/ui/dialog'
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
  } from '/components/ui/dropdown-menu'
  
  import { useOperationStore } from '@/stores/operationDashboard.ts'
  import { useAuthStore } from '@/stores/AuthStore'
  
  const store = useOperationStore()
  const authStore = useAuthStore()
  
  const getProjectList = async () => {
    try {
      const { data } = await api().get('announcement-list')
      store.announcementList = data.data
      // console.log(store.serviceList[0])
    } catch (error) {
      console.log(error)
    }
  }
  const isEdit = ref(false)
  const announceId = ref()
  
  const edit = (event) => {
    isEdit.value = true
    announceId.value = event.id
    announcemnetStore.value.title = event.title
    announcemnetStore.value.description = event.description
    console.log(event, 'event chk')
  }
  
  const selectedFile = ref(null)
  
  const announcemnetStore = ref({
    name: '',
    event_type: '',
    occurrence_type: '',
    human_resource: '',
    material_resource: '',
    description: '',
    address: '',
    city: '',
    state: '',
    start_date: '',
    state_time: '',
    end_date: '',
    end_time: '',
    image: ''
  })
  
  function onFileChange(event) {
    selectedFile.value = event.target.files[0]
    announcemnetStore.value.image = event.target.files[0]
    console.log('Selected File:', selectedFile.value)
  }
  
  const editSubmit = async (eventId) => {
    // try {
    //   const data = await api().post('event-store', announcemnetStore.value,)
    //   console.log(data)
    //   toast({
    //     title: 'Fund Raise Event Created '
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  
    isEdit.value = false
  }
  
  onMounted(async () => {
    getProjectList()
  })
  </script>
  
  <style>
  .tableRowColor:nth-child(even) {
    background: white;
  }
  </style>
  