<template>
  <div class="h-[70px] w-full flex justify-between items-center text-black fixed top-0 z-40 px-[5%] bg-white duration-300">  
      
      <div class="flex items-center gap-6 uppercase text-sm w-full font-semibold">
          <div>
            <img src="/src/assets/image/common/n1.png" alt="" class="h-[50px]">
          </div> 
         <Menubar class="rounded-none border-0">
          <MenubarMenu>
            <MenubarTrigger>
              <router-link to="/" class="font-semibold">Home</router-link> 
            </MenubarTrigger>
          </MenubarMenu>
           
          <MenubarMenu>
            <MenubarTrigger>Service <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/services/nikah" class=" w-full hover:pl-5 duration-300">Nikha Service</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/services/facilities" class=" w-full hover:pl-5 duration-300">Facilities Service</router-link>
              </MenubarItem>
              <MenubarItem >
              <router-link to="/services/funeral" class=" w-full hover:pl-5 duration-300">Funeral Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/new_muslim" class=" w-full hover:pl-5 duration-300">New Muslim Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/special_needs" class=" w-full hover:pl-5 duration-300">Special Needs Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/social" class=" w-full hover:pl-5 duration-300">Social Services</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/matrimony" class=" w-full hover:pl-5 duration-300">Matrimony Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <a href="http://islamicdigitallane.com/learning-center" class=" w-full hover:pl-5 duration-300">Education Service</a>
              </MenubarItem>
              <!-- <MenubarItem >
                <a class=" w-full hover:pl-5 duration-300">IT Training Services</a>
              </MenubarItem> 
              <MenubarItem >
                <a class=" w-full hover:pl-5 duration-300">Financial Aid</a>
              </MenubarItem>   -->
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Explore <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/explore/dua" class=" w-full hover:pl-5 duration-300 text-sm">Dua</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/explore/quran" class=" w-full hover:pl-5 duration-300 text-sm">Quran</router-link>
              </MenubarItem>
              <MenubarItem>
                  <router-link to="/explore/hadith"  class=" w-full hover:pl-5 duration-300 text-sm">Hadith</router-link>
              </MenubarItem>
              <!-- <MenubarItem>
                <a href="" class=" w-full hover:pl-5 duration-300 text-sm">Watch</a>
              </MenubarItem> -->
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Learning Center  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/onsitelearning" class=" w-full hover:pl-5 duration-300 text-sm">Onsite learning center
</router-link>
              </MenubarItem>
              <MenubarItem>
                <a href="" class=" w-full hover:pl-5 duration-300 text-sm">Online learning center
</a>
              </MenubarItem>
             
            </MenubarContent>
          </MenubarMenu>
  
          <MenubarMenu>
            <MenubarTrigger>Abut Us <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/about/about_us" class=" w-full hover:pl-5 duration-300">About</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/about/board_of_directors" class=" w-full hover:pl-5 duration-300">Board Of Directors</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/about/committees" class=" w-full hover:pl-5 duration-300">Committees</router-link>
              </MenubarItem>
              <!-- <MenubarItem>
                <router-link to="/about/team" class=" w-full hover:pl-5 duration-300">Team</router-link>
              </MenubarItem> -->
              <MenubarItem>
                <router-link to="/about/policies" class=" w-full hover:pl-5 duration-300">Policies</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Contact <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/contact/ask_imam" class=" w-full hover:pl-5 duration-300">Ask Imam</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/contact/mashjid_info" class=" w-full hover:pl-5 duration-300">Mashjid Info</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Activity <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/activity/event" class=" w-full hover:pl-5 duration-300">Events</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/activity/project" class=" w-full hover:pl-5 duration-300">Projects</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>Volunteer <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/volunteer/educate_the_children" class=" w-full hover:pl-5 duration-300">Educate The Children</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/volunteer/shelter_the_homeless" class=" w-full hover:pl-5 duration-300">Shetler The Homeless</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/volunteer/comfort_the_sick" class=" w-full hover:pl-5 duration-300">Comfort The Sick</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/volunteer/enhance_social_jsustice" class=" w-full hover:pl-5 duration-300">Enhance Social Justice</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/volunteer/feed_the_hungry" class=" w-full hover:pl-5 duration-300">Feed The Hungry</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger>More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <a href="" class=" w-full hover:pl-5 duration-300">Ramadan Special</a>
              </MenubarItem>
              <MenubarItem>
                <a href="" class=" w-full hover:pl-5 duration-300">Hajj And Umrah Registration</a>
              </MenubarItem>
              <MenubarSub>
                  <MenubarSubTrigger>
                    <p href="" class=" w-full hover:pl-5 duration-300">Registration</p>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>
                      <router-link to="/more/registration/memebship_registration" class=" w-full hover:pl-5 duration-300">Membership Registration</router-link>
                    </MenubarItem>
                    <MenubarItem>
                      <a href="" class=" w-full hover:pl-5 duration-300">Masjid Wavier & Release Liability</a>
                    </MenubarItem>
                    <MenubarItem>
                      <a href="" class=" w-full hover:pl-5 duration-300">Sports & Recreation Events</a>
                    </MenubarItem>
                    <MenubarItem>
                      <a href="" class=" w-full hover:pl-5 duration-300">ESL Class Registration</a>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div class="flex items-center gap-2 text-white font-bold text-sm">
        <router-link to="/donation" class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500 border-2 border-yellow-500">
          Donate
        </router-link>
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
 background: white;
}
</style>