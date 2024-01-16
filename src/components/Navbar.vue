<template>
  <div class="h-[70px] w-full flex justify-between items-center text-black fixed top-0 z-40 px-[5%] bg-white duration-300 " :class="searchBar==true ? '':'bg-slate-50'" id="navBar">  
      
      <div class="flex gap-6 uppercase text-sm w-full font-semibold">
          <div>
            <img src="/src/assets/image/common/n1.png" alt="" class="h-[50px]">
          </div> 
         <Menubar class="rounded-none border-0">
        <router-link to="/" class="py-6 flex items-center uppercase  text-sm font-semibold">
              Home
          </router-link>  
    <MenubarMenu>
      <MenubarTrigger>SERVICE <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
      <router-link to="/services/nikah" class="hover:pl-5 duration-300">Nikha Service</router-link>
        </MenubarItem>
        <MenubarItem>
          <router-link to="/services/facilities" class="hover:pl-5 duration-300">Facilities Service</router-link>
        </MenubarItem>
        <MenubarItem >
         <router-link to="/services/funeral" class="hover:pl-5 duration-300">Funeral Service</router-link>
        </MenubarItem>
        <MenubarItem >
          <router-link to="/services/new_muslim" class="hover:pl-5 duration-300">New Muslim Service</router-link>
        </MenubarItem>
        <MenubarItem >
          <router-link to="/services/special_needs" class="hover:pl-5 duration-300">Special Needs Service</router-link>
        </MenubarItem>
        <MenubarItem >
          <router-link to="/services/matrimony" class="hover:pl-5 duration-300">Matrimony Service</router-link>
        </MenubarItem>
        <MenubarItem >
          <a href="http://islamicdigitallane.com/learning-center" class="hover:pl-5 duration-300">Education Service</a>
        </MenubarItem>
        <MenubarItem >
          <a class="hover:pl-5 duration-300">IT Training Services</a>
        </MenubarItem>
        <MenubarItem >
          <router-link to="/services/social" class="hover:pl-5 duration-300">Social Services</router-link>
        </MenubarItem>
      
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>EXPLORE <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
      <MenubarContent>
        <MenubarItem>DUA</MenubarItem>
        <MenubarItem>QURAN</MenubarItem>
        <MenubarItem>HADITH</MenubarItem>
        <MenubarItem>WATCH</MenubarItem>
      </MenubarContent>
    </MenubarMenu> <router-link to="/Clearance" class="py-6 flex items-center uppercase  text-sm font-semibold">Learning Center</router-link>
  
    <MenubarMenu>
      <MenubarTrigger>ABOUT US <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Board Of Directors</MenubarItem>
        <MenubarItem>Committees</MenubarItem>
        <MenubarItem>Team</MenubarItem>
        <MenubarItem>Policies</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>CONTACT <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Ask Imam</MenubarItem>
        <MenubarItem>Mashjid Info</MenubarItem>
       
      </MenubarContent>
    </MenubarMenu>
     <router-link to="/Clearance" class="py-6 flex items-center uppercase  text-sm font-semibold">Event</router-link>
     <router-link to="/Clearance" class="py-6 flex items-center uppercase  text-sm font-semibold">Volunteer</router-link>
     <MenubarMenu>
      <MenubarTrigger>MORE <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
        <MenubarContent>
           <MenubarItem>Ramadan Special</MenubarItem>
           <MenubarItem>Hajj And Umrah</MenubarItem>
      <MenubarSub>
          <MenubarSubTrigger>Registration</MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Membership Registration</MenubarItem>
            <MenubarItem>Masjid Wavier & Release Liability</MenubarItem>
            <MenubarItem>Sports & Recreation Events</MenubarItem>
            <MenubarItem>ESL Class Registration</MenubarItem>
          </MenubarSubContent>
        </MenubarSub></MenubarContent>
      </MenubarMenu>
  </Menubar>
      </div>
      <div class="flex items-center gap-2 text-white font-bold text-sm">
        <button class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500">Donation</button>
        <button class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500">Member</button>
      </div>
       
  </div>
</template>

<script setup lang="ts">
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
}  from '/components/ui/menubar'
</script>

<style scoped>

.router-link-active{
 color: rgb(201, 130, 0);
}
</style>