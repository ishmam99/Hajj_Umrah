<template>
  <div>
    <DefaultLayout>
      <div
        class="px-20 pt-20 mt-5 py-5 bg-lime-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
      >
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
            <p>/ Contact</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-lime-800">/ Ask Imam</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-lime-800 text-4xl font-bold">Ask Imam</h1>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full px-20 pl-28 py-5 flex justify-between gap-5">
        <div class="space-y-8 w-3/4">
          <div class="bg-white px-8 py-5 pt-5 gap-5 rounded-lg">
            <!-- <p>Assalaamu Alaikum (Peace be with you),</p> -->
            <p class="mt-5">
              Please fill out this form to ask the IDL Imam a question. THIS INFORMATION IS
              CONFIDENTIAL BETWEEN YOU AND THE IMAM
            </p>
            <form @submit.prevent="imamListSubmit()">
              <div class="py-5 space-y-7 mt-5">
                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="askImamForm.first_name"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >First Name <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="askImamForm.last_name"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Last Name <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <Select v-model="askImamForm.imam_user_id">
                    <SelectTrigger class="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <!-- <SelectLabel>Product</SelectLabel> -->
                        <SelectItem :value="item.id" v-for="item in store.imamList">
                          {{ item.id }}</SelectItem
                        >
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="email"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="askImamForm.email"
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Email <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="tel"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                    v-model="askImamForm.phone"
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Phone Number <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>
              <div class="bg-white px-0 py-5 pt-2 gap-5 rounded-lg">
                <div>
                  <p class="text-xl font-bold py-5">Question or Comments</p>
                  <textarea
                    v-model="askImamForm.text"
                    name=""
                    id=""
                    cols=""
                    rows="4"
                    placeholder="Ex:23"
                    class="w-full p-3 rounded-md shadow-lg border border-black"
                  ></textarea>
                </div>
                <div class="w-full">
                  <p class="text-xl font-bold py-5">Attach a File</p>
                  <div
                    class="w-1/2 h-[40px] rounded-2xl bg-white px-4 py-2 shadow-lg text-sm text-gray-500 text-center relative border border-black m-auto"
                  >
                    <input
                      @change="onFileChange"
                      type="file"
                      name=""
                      id=""
                      class="h-full w-full opacity-0 absolute top-0"
                    />
                    Choose File
                  </div>
                </div>
                <div class="flex justify-center pt-5 pb-3">
                  <button
                    type="submit"
                    class="w-full h-[45px] rounded-2xl bg-lime-800 text-white font-bold mx-auto"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ContactMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
import Card from '/src/components/cardSection.vue'
import ContactMore from '/src/components/ContactMore.vue'
import { useRoute, useRouter } from 'vue-router'
import { useContactStore } from '/src/stores/contactStore'
import { ref, onMounted } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { useAuthStore } from '@/stores/AuthStore.ts'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
const { toast } = useToast()
const store = useContactStore()
const authStore = useAuthStore();
const askImamForm = ref({
  imam_user_id: '',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  text: '',
  file: ''
})
const selectedFile = ref(null)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  askImamForm.value.image = event.target.files[0]
  console.log('selected image', selectedFile.value)
}

const imamList = async () => {
  try {
    const { data } = await api().get('imam-list')

    store.imamList = data.data
    console.log(store.imamList)
  } catch (error) {
    console.log(error)
  }
}
const imamListSubmit = async () => {

try {
  const data = await api().post('ask-imam-store',askImamForm.value, {
    headers: {
    Authorization: `Bearer ${authStore.token}`
  }
  })
  toast({
    title: 'Success',
    description: 'Your Question is Posted'
  })
  console.log(data)
  // router.push({ name: 'Volunteer job posted' })
} catch (error) {
  console.log(error)
  toast({
    title: 'Error',
    description: 'Please Try Again'
  })
}

}
onMounted(async () => {
  imamList()
})
</script>

<style lang="scss" scoped></style>
