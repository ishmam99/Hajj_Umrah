<template>
  <div
    class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-[350px] h-hit sticky top-[80px]"
  >
    <div class="bg-[#e1f2ff9a] p-5 h-full flex flex-col gap-3 font-semibold">
      <p class="text-2xl font-bold text-[#2e318a]">Media and Communication Dashboard</p>
      <p class="text-xl font-bold">Welcome Mr. Jamal</p>
      <router-link to="/Media_And_Com_Profile" class="flex items-center gap-2 text-lg"
      @click="drop=0"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
          ></path></svg
        >Profile</router-link
      >
      <div>
          <ul @click="drop=1" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M2 20H22V22H2V20ZM4 12H6V19H4V12ZM9 12H11V19H9V12ZM13 12H15V19H13V12ZM18 12H20V19H18V12ZM2 7L12 2L22 7V11H2V7ZM4 8.23607V9H20V8.23607L12 4.23607L4 8.23607ZM12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7C13 7.55228 12.5523 8 12 8Z"></path></svg>
            Khudbah</ul>
          <ul class="pl-8 flex flex-col gap-1 overflow-hidden" :class="drop==1 ? 'h-fit'
          :'h-0'">
            <router-link to="/media_and_com_khudba_create_khudba" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
              Create Khudba</router-link>
              <router-link to="/media_and_com_khudba_khudba_list" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
              Khudbah List</router-link>
              <router-link to="/media_and_com_khudba_khudba_broadcast" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
              Khudbah Broadcast</router-link>
           
          </ul>
      </div>

      <div>
          <ul @click="drop=2" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z"></path></svg>
          Khatira</ul>
          <ul class="pl-8 flex flex-col gap-1 overflow-hidden" :class="drop==2 ? 'h-fit'
          :'h-0'"> 
            <router-link to="/media_and_com_khatira_create" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>Create Khatira</router-link>

            <router-link to="/media_and_com_khatira_list" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>Khatira List</router-link>
            
            <router-link to="/media_and_com_khatira_broadcast_khatira" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>Broadcast Khatira</router-link>
          </ul>
      </div>

      <div>
          <ul @click="drop=3" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M21 21H13V6C13 4.34315 14.3431 3 16 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM11 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H8C9.65685 3 11 4.34315 11 6V21ZM11 21H13V23H11V21Z"></path></svg>
            Publications</ul>
          <ul class="pl-8 flex flex-col gap-1 overflow-hidden" :class="drop==3 ? 'h-fit'
          :'h-0'">
            <router-link to="/media_and_com_post_publications" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
              Post Publication</router-link>
              <router-link to="/media_and_com_publications_list" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Publications List</router-link>
              <router-link to="/media_and_com_publications_broadcast" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Publication Broadcast</router-link>
           
          </ul>
      </div>

      <div>
          <ul @click="drop=4" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
            Gallery</ul>
          <ul class="pl-8 flex flex-col gap-1 overflow-hidden" :class="drop==4 ? 'h-fit'
          :'h-0'">
            <router-link to="/media_and_com_pons_post_image" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
              Post Image</router-link>
              <router-link to="/media_and_com_pons_image_list" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Image List</router-link>
              <router-link to="/media_and_com_pons_image_broadcast" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Image Broadcast</router-link>
           
          </ul>
      </div>

      <div>
          <ul @click="drop=5" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path></svg>
            Banner</ul>
          <ul class="pl-8 flex flex-col gap-1 overflow-hidden" :class="drop==5 ? 'h-fit'
          :'h-0'">
            <router-link to="/media_and_com_pons_post_banner" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
              Post Banner</router-link>
              <router-link to="/media_and_com_pons_banner_list" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Banner List</router-link>
              <router-link to="/media_and_com_pons_banner_broadcast" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Banner Broadcast</router-link>
          </ul>
      </div>

      <div>
          <ul @click="drop=6" class="flex items-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path></svg>
            Marketing</ul>
          <ul class="pl-8 flex flex-col gap-1 overflow-hidden" :class="drop==6 ? 'h-fit'
          :'h-0'">
            <router-link to="/media_and_com_pons_post_promotion" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
              Post Promotion</router-link>
              <router-link to="/media_and_com_pons_promotion_list" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Promotion List</router-link>
              <router-link to="/media_and_com_pons_promotion_broadcast" class="flex items-center gap-2 group hover:text-[#2e318a] duration-150"><p class="h-[2px] w-3 bg-black group-hover:w-5 group-hover:bg-[#2e318a] duration-150"></p>
                Promotion Broadcast</router-link>
          </ul>
      </div>

      <router-link to="/volunteer" class="flex items-center gap-2 cursor-pointer"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM7.00488 9.00275L10.0049 5.50275L13.0049 9.00275H11.0049V13.0027H9.00488V9.00275H7.00488ZM17.0049 15.0027L14.0049 18.5027L11.0049 15.0027H13.0049V11.0027H15.0049V15.0027H17.0049Z"
          ></path></svg
        >Volunteer Management</router-link
      >

      <router-link to="" class="flex items-center gap-2 cursor-pointer"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM7.00488 9.00275L10.0049 5.50275L13.0049 9.00275H11.0049V13.0027H9.00488V9.00275H7.00488ZM17.0049 15.0027L14.0049 18.5027L11.0049 15.0027H13.0049V11.0027H15.0049V15.0027H17.0049Z"
          ></path></svg
        >Change Password</router-link
      >
      <button
        type="button"
        @click="store.logout()"
        class="py-2 px-5 mt-2 w-1/2 bg-red-800 rounded-md text-white duration-300"
      >
        Log Out
      </button>
      <div class="flex flex-col gap-2 overflow-hidden"></div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useAuthStore } from '/src/stores/AuthStore'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

watch(
  () => store.isAuthenticated,
  (newIsAuthenticated) => {
    console.log(newIsAuthenticated)

    if (!newIsAuthenticated) {
      router.push('/')
    }
  }
)
const drop = ref(0)
</script>
<style scoped>
.router-link-active {
  color: #2e318a;
}
</style>
