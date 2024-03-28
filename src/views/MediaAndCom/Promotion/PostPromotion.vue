<template>
    <div class="px-5  py-5 w-3/4">
            <p class="text-2xl text-yellow-600 font-bold py-3 border-b">Post Banner </p>
            <hr />
            <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
              <form @submit.prevent="bannerListStore()">
                <div class="py-5 space-y-7 mt-5">
                  <div class="flex items-center justify-center gap-5">
                    <div class="relative mb-3 w-3/4">
                      <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        v-model="bannerList.title"
                      />
                      <label
                    
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Text <span class="text-red-500">*</span>
                      </label>
                    </div>
                    <div class="relative mb-3 w-3/4">
                      <input
                        type="url"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        v-model="bannerList.url"
                      />
                      <label
                        
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Link <span class="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                  
  
                  <div class="flex justify-between gap-5 items-center">
                    <div class="w-1/2 flex flex-col gap-5">
                      <div class="">
                        <label for="" class="text-gray-600"
                          >Select Image <span class="text-red-500">*</span></label
                        >
                        <div
                          class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                        >
                          <input @change="onFileChange"
                          type="file" class="h-full w-full opacity-0 absolute top-0" />
                          Choose File
                        </div>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <p class="text-gray-600 pb-2">Choose banner order <span class="text-red-500">*</span></p>
                      <input 
                      v-model="bannerList.order"
                      type="number" class="w-full border-2 py-1.5 px-2 rounded-xl">
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
  import { useSocialStore } from '@/stores/SocialDashboard.ts'
  import { ref } from 'vue'
  import { useToast } from '/components/ui/toast/use-toast'
  import { useRoute, useRouter } from 'vue-router'
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
  } from '/components/ui/select'
  const route = useRoute()
  const router = useRouter()

  const bannerList = ref({
    title: '',
    order:'',
    url: '',
    image: '',
  })
  const selectedFile = ref(null)

function onFileChange(event) {
  selectedFile.value = event.target.files[0]
  bannerList.value.image = event.target.files[0]
  console.log('selected image', selectedFile.value)
}
  
  const loading = ref(false)
  const { toast } = useToast()
  
  const bannerListStore = async () => {
    console.log(bannerListStore);
    loading.value = true
    try {
      const data = await api().post('web-banner-store',bannerList.value)
      toast({
        title: 'Success',
        description: 'Banner Added '
      })
      console.log(data)
      router.push({ name: 'Media_And_Com_Pons_Banner_List' })
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
  