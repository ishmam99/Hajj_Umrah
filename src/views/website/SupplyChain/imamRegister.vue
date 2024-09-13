<template>
    <div>
      <DefaultLayout>
        <div
          class="px-20 pt-20 mt-5 py-5 bg-emerald-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
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
              <p>/ Supply Chain</p>
              <p class="text-emerald-800">/ Imam Register</p>
            </div>
            <div class="rounded-lg flex items-center justify-center relative py-3">
              <h1 class="text-emerald-800 text-4xl font-bold">Imam Register</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full py-5 flex items-center justify-center gap-5 px-20 w-full">
          <div class="space-y-8 w-3/4">
           
            <div class="bg-white rounded-xl p-5 w-full">
             
              <div class="pt-10">
                <h1 class="text-2xl font-semibold">Imam Information</h1>
              </div>
              <form class="py-5 space-y-7 mt-5" @submit.prevent="vendorForm()">
                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="vendorCreateForm.first_name"
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
                      v-model="vendorCreateForm.last_name"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Last Name <span class="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="vendorCreateForm.email"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Email <span class="text-red-500">*</span>
                    </label>
                  </div>
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="vendorCreateForm.phone"
                    />
                    <label
                      for="exampleFormControlInput50"
                      class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                      >Phone Number <span class="text-red-500">*</span>
                    </label>
                  </div>
                </div>
                <div class="flex w-full gap-5">
                  <div class="relative mb-3 w-full">
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                      id="exampleFormControlInput50"
                      value=""
                      v-model="vendorCreateForm.address"
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
                        value=""
                        v-model="vendorCreateForm.city"
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
                        v-model="vendorCreateForm.state"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >State <span class="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="flex gap-5">
                  <div class="relative mb-3 w-1/2">
                    <div class="gap-5">
                      <label for="">Date of Birth <span class="text-red-500">*</span> </label>
                      <div class="pt-2">
                        <input
                          type="date"
                          class="py-2 px-6 rounded-2xl w-full border-2"
                          v-model="vendorCreateForm.dob"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="relative mb-3 w-1/2">
                    <div class="gap-5">
                      <label for="">CV <span class="text-red-500">*</span> </label>
                      <div class="pt-2">
                        <Input
                          type="file"
                          class="py-2 px-6 rounded-2xl w-full border-2"
                          @change="handleFileUpload"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button :disabled="loginload" type="submit" class="px-5 py-2 rounded-md bg-green-600 hover:bg-emerald-700 text-white flex items-center justify-center mx-auto w-1/3"> Register 
                  <span v-if="loginload" class="flex items-center gap-2">ing
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 animate-spin"
                  fill="currentColor"
                  width="12"
                  height="12"
                >
                  <path
                    d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
                  ></path>
                </svg>
                  </span>
                </button>
              </form>
             
              <!-- <div class="flex justify-center gap-5">
                <router-link to="/Member_Login" v-if="authStore.isAuthenticated == false" class="px-5 py-2 rounded-md bg-blue-600 text-white">Sign In</router-link>
                <router-link to="/Signup" v-if="authStore.isAuthenticated == false" class="px-5 py-2 rounded-md bg-green-600 text-white">Sign Up</router-link>
                <button v-else class="lg:w-[350px] h-[45px] rounded-2xl bg-emerald-700 text-white flex items-center justify-center font-bold">Apply</button>
              </div> -->
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  </template>
  
  <script setup>
  import DefaultLayout from '/src/layouts/DefaultLayout.vue'
  import { Input } from '/components/ui/input'
  import { useAuthStore } from '/src/stores/AuthStore.ts'
  import { ref} from 'vue'
  import { useToast } from '/components/ui/toast/use-toast'
  const authStore = useAuthStore()
  const loginload = ref(false)
  
  
  const vendorCreateForm = ref({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    dob: '',
    cv: null,
  });
  
  const reset = () => {
    vendorCreateForm.value = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      dob: '',
      cv: null,
    };
  };
  
  const handleFileUpload = (event) => {
    vendorCreateForm.value.cv = event.target.files[0];
  };
  
  const vendorForm = async () => {
    loginload.value = true
    try {
      // const formData = new FormData();
      // for (const key in vendorCreateForm.value) {
      //   formData.append(key, vendorCreateForm.value[key]);
      // }
  
      const data = await api().post('vendor-registration-store', vendorCreateForm.value);
      console.log(data);
      toast({
        title: 'Application Submitted',
      });
      reset();
    } catch (error) {
      console.log(error);
    }
    loginload.value = false
  };
  
  
  
  </script>
  
  <style lang="scss" scoped></style>
  