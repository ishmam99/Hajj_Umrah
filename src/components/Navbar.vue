<template>
  <div class="h-[80px] w-full flex justify-center bg-[url('../assets/image/home/pattern-1.png')] bg-repeat items-center text-black fixed top-0 z-40 bg-[#36897bfa] duration-300">  
      
      <div class="flex items-center justify-center gap-5 bg-[#23646dc6] py-4 px-[3%] uppercase text-sm w-full font-semi">
          <div>
            <img src="/src/assets/image/common/n1.png" alt="" class="h-[50px] bg-white rounded-xl">
          </div> 
         <Menubar class="rounded-none font-bold border-0 text-white  gap-2">
          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold ">
              <router-link to="/" class="font-bold rounded-lg p-1">Home</router-link> 
            </MenubarTrigger>
          </MenubarMenu>
           
          <MenubarMenu >
            <MenubarTrigger class="px-1 font-bold ">Services 
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <!-- <MenubarItem> -->
                  <!-- <MenubarTrigger>Prayer Service <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger> -->
               
                  <MenubarSub>
                  <MenubarSubTrigger> 
                    <p class="hover:pl-5 duration-300 font-bold"> Prayer Service</p>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>
                      <router-link to="/Prayer_Time" class=" w-full hover:pl-5 duration-300 font-semibold">Prayer Time</router-link>
                    </MenubarItem>
                    <MenubarItem>
                      <router-link to="/Prayer_Announcement" class=" w-full hover:pl-5 duration-300 font-semibold">Prayer Announcement</router-link>
                    </MenubarItem>
                    <MenubarItem>
                      <router-link to="/Next_Prayer_Service" class=" w-full hover:pl-5 duration-300 font-semibold">Next Prayer Service</router-link> 
                    </MenubarItem>
                    <MenubarItem>
                      <router-link to="/Recent_Prayer_Service" class=" w-full hover:pl-5 duration-300 font-semibold">Recent Prayer Services</router-link>
                    </MenubarItem>
                    <MenubarItem>
                      <router-link to="/Makkah_Live" class=" w-full hover:pl-5 duration-300 font-semibold">Makkah Live</router-link>
                    </MenubarItem>
                    <MenubarItem>
                      <router-link to="/Janaja_Announcement" class=" w-full hover:pl-5 duration-300 font-semibold">Janaja Prayer Announcement</router-link>
                    </MenubarItem>
                    <MenubarItem>
                      <router-link to="/Ranadam_Payer_Time" class=" w-full hover:pl-5 duration-300 font-semibold">Ramadan Prayer Timings</router-link>
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              <!-- </MenubarItem> -->
             
              <MenubarItem>
                <router-link to="/services/facilities" class=" w-full hover:pl-5 duration-300 font-semibold">Facilities Service</router-link>
              </MenubarItem>
               <MenubarItem>
                <router-link to="/services/nikah" class=" w-full hover:pl-5 duration-300 font-semibold">Nikha Service</router-link>
              </MenubarItem>
              <MenubarItem >
              <router-link to="/services/funeral" class=" w-full hover:pl-5 duration-300 font-semibold">Funeral Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/new_muslim" class=" w-full hover:pl-5 duration-300 font-semibold">New Muslim Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/special_needs" class=" w-full hover:pl-5 duration-300 font-semibold">Special Needs Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/social" class=" w-full hover:pl-5 duration-300 font-semibold">Social Services</router-link>
              </MenubarItem>
              <MenubarItem >
                <router-link to="/services/matrimony" class=" w-full hover:pl-5 duration-300 font-semibold">Matrimony Service</router-link>
              </MenubarItem>
              <MenubarItem >
                <a href="http://localhost:5173/" class=" w-full hover:pl-5 duration-300 font-semibold">Education Service</a>
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
            <MenubarTrigger class="px-1 font-bold ">Digital Library 
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/explore/dua" class=" w-full hover:pl-5 duration-300 text-sm font-semibold">Dua</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/explore/quran" class=" w-full hover:pl-5 duration-300 text-sm font-semibold">Quran</router-link>
              </MenubarItem>
              <MenubarItem>
                  <router-link to="/explore/hadith"  class=" w-full hover:pl-5 duration-300 text-sm font-semibold">Hadith</router-link>
              </MenubarItem>
              <MenubarItem>
                  <router-link to="/explore/watch"  class=" w-full hover:pl-5 duration-300 text-sm font-semibold">Watch</router-link>
              </MenubarItem>
              <MenubarItem>
                  <router-link to="/explore/publications"  class=" w-full hover:pl-5 duration-300 text-sm font-semibold">Publication & Books</router-link>
              </MenubarItem>
              <!-- <MenubarItem>
                <a href="" class=" w-full hover:pl-5 duration-300 text-sm">Watch</a>
              </MenubarItem> -->
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">
              <a href="http://localhost:5173/"> Learning Center  </a>
             
            </MenubarTrigger>
            <!-- <MenubarContent>
              <MenubarItem>
                <router-link to="/studentadmission" class=" w-full hover:pl-5 duration-300 text-sm">Student Admission  </router-link>
                </MenubarItem>
                  <MenubarItem>
                <router-link to="/Login" class=" w-full hover:pl-5 duration-300 text-sm">Student Login
                </router-link></MenubarItem>  <MenubarItem>
                <router-link to="/onsitelearning" class=" w-full hover:pl-5 duration-300 text-sm">Onsite learning center
                </router-link>
              </MenubarItem>
              <MenubarItem>
                <a href="" class=" w-full hover:pl-5 duration-300 text-sm">Online learning center
                </a>
              </MenubarItem>
             
            </MenubarContent> -->
          </MenubarMenu>
  
         
          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">Activities 
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/activity/event" class=" w-full hover:pl-5 duration-300 font-semibold">Events</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/activity/project" class=" w-full hover:pl-5 duration-300 font-semibold">Projects</router-link>
              </MenubarItem>
              <MenubarItem>
                <a href="/more/ramadan_special" class=" w-full hover:pl-5 duration-300 font-semibold">Ramadan Special</a>
              </MenubarItem>
              <MenubarItem>
                <a href="/more/hajj_and_umrah" class=" w-full hover:pl-5 duration-300 font-semibold">Hajj And Umrah Registration</a>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/boardmemberlogin" class=" w-full hover:pl-5 duration-300 font-semibold">Board Member Login</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

         

            <MenubarMenu>
              <MenubarTrigger class="px-1 font-bold">Get Involved 
                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
              </MenubarTrigger>
              <MenubarContent>
                <!-- <MenubarItem> -->
                  <MenubarSub>
                  <MenubarSubTrigger class="px-1 font-bold">
                    Volunteers
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                    
                      <!-- <MenubarItem> -->
                        <MenubarSub>
                  <MenubarSubTrigger class="px-1 font-bold">
                      <p href="" class=" w-full">Volunteer Services</p>
                    </MenubarSubTrigger>
                    <MenubarSubContent>
                        <MenubarItem>
                  <router-link to="/volunteer/educate_the_children" class=" w-full hover:pl-5 duration-300 font-semibold">Educate The Children</router-link>
                </MenubarItem>
                <MenubarItem>
                  <router-link to="/volunteer/shelter_the_homeless" class=" w-full hover:pl-5 duration-300 font-semibold">Shetler The Homeless</router-link>
                </MenubarItem>
                <MenubarItem>
                  <router-link to="/volunteer/comfort_the_sick" class=" w-full hover:pl-5 duration-300 font-semibold">Comfort The Sick</router-link>
                </MenubarItem>
                <MenubarItem>
                  <router-link to="/volunteer/enhance_social_jsustice" class=" w-full hover:pl-5 duration-300 font-semibold">Enhance Social Justice</router-link>
                </MenubarItem>
                <MenubarItem>
                  <router-link to="/volunteer/feed_the_hungry" class=" w-full hover:pl-5 duration-300 font-semibold">Feed The Hungry</router-link>
                </MenubarItem>
                        </MenubarSubContent>
                      </MenubarSub>
                        <MenubarItem>
                        <router-link to="/volunteers/volunteeradmission" class=" w-full hover:pl-5 duration-300 font-semibold">Apply for the volunteer</router-link>
                      </MenubarItem>
                      <MenubarItem>
                        <router-link to="/volunteers/volunteerlogin" class=" w-full hover:pl-5 duration-300 text-sm font-semibold">
                          Volunteer Login
                        </router-link>
                        <!-- <a href="/more/registration/mosjid_wavier_and_release_liability" class=" w-full hover:pl-5 duration-300">Volunteer Login</a> -->
                      </MenubarItem>
                      <!-- </MenubarItem> -->
                      </MenubarSubContent>
                    </MenubarSub>
                    <!-- </MenubarItem> -->
                  
              <!-- </MenubarItem> -->
           <MenubarItem>
                 <router-link to="/getinvolved/applyforspeaker" class=" w-full hover:pl-5 duration-300 font-semibold">Speakers</router-link>
              </MenubarItem>
           <MenubarItem>
                <router-link to="/getinvolved/applyforimam" class=" w-full hover:pl-5 duration-300 font-semibold">Guest Imam</router-link>
              </MenubarItem>
           <MenubarItem>
            <router-link to="/Fund_Raising" class=" w-full hover:pl-5 duration-300 font-semibold">Fund Raising</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">More
               <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              
              <MenubarItem>
                <a href="/more/hajj_and_umrah" class=" w-full hover:pl-5 duration-300 font-semibold">Employee Login</a>
              </MenubarItem>
            
            </MenubarContent>
          </MenubarMenu> 
           <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">About Us
               <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
              </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/about/about_us" class=" w-full hover:pl-5 duration-300 font-semibold">About</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/about/board_of_directors" class=" w-full hover:pl-5 duration-300 font-semibold">Board Of Directors</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/about/committees" class=" w-full hover:pl-5 duration-300 font-semibold">Committees</router-link>
              </MenubarItem>
              <!-- <MenubarItem>
                <router-link to="/about/team" class=" w-full hover:pl-5 duration-300">Team</router-link>
              </MenubarItem> -->
              <MenubarItem>
                <router-link to="/about/policies" class=" w-full hover:pl-5 duration-300 font-semibold">Policies</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">Contact 
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/contact/ask_imam" class=" w-full hover:pl-5 duration-300 font-semibold">Ask Imam</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/contact/ask_scholar" class=" w-full hover:pl-5 duration-300 font-semibold">Ask Scholar</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/contact/get_appointment" class=" w-full hover:pl-5 duration-300 font-semibold">Get Appointment</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/contact/contact_us" class=" w-full hover:pl-5 duration-300 font-semibold">Contact Us</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">Employees 
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/login" class=" w-full hover:pl-5 duration-300 font-semibold">Employee Login</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/contact/contact_us" class=" w-full hover:pl-5 duration-300 font-semibold">HR Management</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">Supply Chain
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/Supply_Chain/supplier" class=" w-full hover:pl-5 duration-300 font-semibold">Supplier</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/Supply_Chain/customer" class=" w-full hover:pl-5 duration-300 font-semibold">Customer</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">Donate
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <router-link to="/Member_Donation" class=" w-full hover:pl-5 duration-300 font-semibold">Member</router-link>
              </MenubarItem>
              <MenubarItem>
                <router-link to="/Guest_Donation" class=" w-full hover:pl-5 duration-300 font-semibold">Guest / Annonymous</router-link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger class="px-1 font-bold">Member
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>

                  <router-link to="/Login" class=" w-full hover:pl-5 duration-300 font-semibold">Login</router-link>
                </MenubarItem>
                <MenubarItem>
                  <router-link to="/more/registration/memebship_registration" class=" w-full hover:pl-5 duration-300 font-semibold">Sign up</router-link>
                </MenubarItem>

              </MenubarContent>
            </MenubarMenu>
          <div class="flex items-center justify-between gap-2 text-white font-bold text-sm">
          
          <!-- <router-link to="/donation" class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500 border-2 border-yellow-500">
            Donate
          </router-link> -->
          <!-- <div v-if="store.isAuthenticated==false" class="relative group">
            <button @click="MemberDropMenu=!MemberDropMenu" class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500 ">Member</button>
            <div v-show="MemberDropMenu==true"  class="flex flex-col absolute top-[110%] w-[150px] right-0 z-50 p-3 rounded-md shadow-md text-black bg-white">
                <router-link to="/Login" class="py-1.5">Sign in</router-link>
                <router-link to="/Signup" class="py-1.5">Sign up</router-link>
            </div>
          </div>
          <router-link v-else to="/Membar_Dashboard" class="bg-yellow-600 px-6 py-1 rounded-full hover:bg-yellow-500 border-2 border-yellow-500">
            Member
          </router-link> -->
        </div>
          </Menubar>
            
        </div>  
    </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
import {
Menubar,
MenubarContent,
MenubarItem,
MenubarMenu,
MenubarSub,
MenubarSubContent,
MenubarSubTrigger,
MenubarTrigger
} from '/components/ui/menubar';

import { ref } from 'vue';
import { useAuthStore } from '../stores/AuthStore.js';
const MemberDropMenu = ref(false)
const store = useAuthStore()
</script>

<style scoped>

.router-link-active{
 color: rgb(1, 118, 116);
 background: white;

}
</style>