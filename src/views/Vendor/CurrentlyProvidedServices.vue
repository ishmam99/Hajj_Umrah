<template>
  <div class="px-4 bg-white py-5 w-3/4">
     <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Currently Provided Services</p>
          
      </div>
     <hr />
     
   </div>
 </template>
 <script setup>

  import { ref , onMounted } from 'vue'
  import { useToast } from '/components/ui/toast/use-toast'
  import { useRoute, useRouter } from 'vue-router'
  import { useAuthStore } from '@/stores/AuthStore.ts'
  import {useYouthStore} from '@/stores/YouthDashboard.ts'
 import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'

const authStore = useAuthStore()
const store = useYouthStore()

  const route = useRoute()
  const router = useRouter()
  
  const loading = ref(false)
  const { toast } = useToast()
  
  const programList = async () => {
  
    loading.value = true
    try {
      const { data } = await api().get('program-list', {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })
      
      store.programList = data.data
      console.log(store.programList)
    } catch (error) {
      console.log(error)
    }
    loading.value = false
  }

  onMounted(async () => {
    programList()

})


 </script>
