<template>
  <div
    class="h-[80px] w-full flex justify-center bg-[url('/src/assets/image/home/pattern-1.png')] bg-repeat items-center text-black fixed top-0 z-40 bg-[#36897bfa] duration-300"
  >
    <div
      class="flex items-center justify-center gap-5 bg-[#23646dc6] py-4 px-[3%] uppercase text-sm w-full font-semibold"
    >
      <div>
        <img src="/src/assets/image/common/n1.png" alt="" class="h-[50px] bg-white rounded-xl" />
      </div>
      <Menubar class="rounded-none font-bold border-0 text-white flex lg:gap-3">
        <MenubarMenu>
          <MenubarTrigger class="px-1 font-bold">
            <router-link to="/" class="font-bold rounded-lg p-1 2xl:text-lg">Home</router-link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Services
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
            <!-- <MenubarItem> -->
            <!-- <MenubarTrigger>Prayer Service <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></MenubarTrigger> -->


            <MenubarItem>
              <router-link
                to="/hajj-services"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj Service</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/umrah-services" class="w-full hover:pl-5 duration-300 font-semibold"
                >Umrah Service</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/tour-services"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Travel Service</router-link
              >
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
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Hajj
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
           
            <MenubarItem>
              <router-link
                to="/hajj-package"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj Packages</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/hajj-facilities" class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj Facilities</router-link
              >
            </MenubarItem>
            
            
            <!-- <MenubarItem>
              <router-link
                to="/hajj-traning"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj Trainning videos</router-link
              >
            </MenubarItem>

            <MenubarItem>
              <router-link to="/hajj-videos" class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj Videos</router-link
              >
            </MenubarItem>
            
            <MenubarItem>
              <router-link
                to="/hajj-faqs"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj FAQ's</router-link
              >
            </MenubarItem>
            -->
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Umrah
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
           
            <MenubarItem>
              <router-link to="/umrah-package" class="w-full hover:pl-5 duration-300 font-semibold"
                >Umrah Packages</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/umrah-international" class="w-full hover:pl-5 duration-300 font-semibold"
                >Umrah & International</router-link
              >
            </MenubarItem>
            
            <!-- <MenubarItem>
              <router-link
                to="/umrah-visa"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Umrah Visa</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/umrah-faqs"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Umrah FAQ's</router-link
              >
            </MenubarItem> -->
           
          </MenubarContent>
        </MenubarMenu>
        
        
        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Travel
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
           
            <MenubarItem>
              <router-link
                to="/tour-services"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Domestic Tours</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/tour-services" class="w-full hover:pl-5 duration-300 font-semibold"
                >Travel Packages</router-link
              >
            </MenubarItem>
            
          </MenubarContent>
        </MenubarMenu>
        
         
        <!-- <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Tickets
           </MenubarTrigger>
        </MenubarMenu> -->

        <!-- <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Hotels
            </MenubarTrigger>
        </MenubarMenu> -->

        <!-- <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Our Clients
            </MenubarTrigger>
        </MenubarMenu> -->

        <!-- <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Blogs
            </MenubarTrigger>
        </MenubarMenu> -->


        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg">Resource Library</MenubarTrigger>
          <MenubarContent>
            
            <MenubarItem>
              <router-link
                to="/learning-center"
                class="hover:pl-5 duration-300 font-semibold text-sm"
                >Hajj Trainning Videos
              </router-link>
            </MenubarItem>

            <MenubarItem>
              <router-link
                to="/learning-center/all-courses"
                class="hover:pl-5 duration-300 font-semibold text-sm"
                >Umrah Trainning Videos</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/learning-center/programs"
                class="hover:pl-5 duration-300 font-semibold text-sm"
                >Hajj Videos</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/student/registration"
                class="w-full hover:pl-5 duration-300 text-sm font-semibold"
                >Umrah videos
              </router-link>
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/teacher/registration"
                class="w-full hover:pl-5 duration-300 text-sm font-semibold"
                >Hajj FAQ's
              </router-link>
            </MenubarItem>
             <MenubarItem> 
              <router-link
                to="/student-login"
                class="w-full hover:pl-5 duration-300 text-sm font-semibold"
                >Umrah FAQ's
              </router-link></MenubarItem
            >
             
           </MenubarContent>
        </MenubarMenu>

        <!-- <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Activities
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <router-link to="/activity/event" class="w-full hover:pl-5 duration-300 font-semibold"
                >Events</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/activity/project"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Projects</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/career" class="w-full hover:pl-5 duration-300 font-semibold"
                >Career</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/more/ramadan_special"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Ramadan Special</router-link
              >
             </MenubarItem>
            <MenubarItem>
              <router-link
                to="/more/hajj_and_umrah"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj And Umrah Registration</router-link
              >
              </MenubarItem>
            <MenubarItem>
              <router-link
                to="/more/registration/memebship_registration"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Membership Registration</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/boardmemberlogin"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Board Member Login</router-link
              >
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu> -->
<!-- 
        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Get Involved
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent> -->
            <!-- <MenubarItem> -->
            <!-- <MenubarSub>
              <MenubarSubTrigger class="px-1 font-bold"> Volunteers </MenubarSubTrigger>
              <MenubarSubContent> -->
                <!-- <MenubarItem> -->
                <!-- <MenubarSub>
                  <MenubarSubTrigger class="px-1 font-bold">
                    <p class="w-full">Volunteer Services</p>
                  </MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem v-for="job in store.volunteerJobList">
                      <router-link
                        v-if="job?.job_status == 'Approved'"
                        :to="{
                          name: 'volunteer/service',
                          params: {
                            id: job.id
                          }
                        }"
                        class="w-full hover:pl-5 duration-300 font-semibold"
                        >{{ job?.title }}</router-link
                      >
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>
                  <router-link
                    to="/volunteerRegister"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Apply for the volunteer</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/volunteerLogin"
                    class="w-full hover:pl-5 duration-300 text-sm font-semibold"
                  >
                    Volunteer Login
                  </router-link> -->
                  <!-- <a href="/more/registration/mosjid_wavier_and_release_liability" class=" w-full hover:pl-5 duration-300">Volunteer Login</a> -->
                <!-- </MenubarItem> -->
                <!-- </MenubarItem> -->
              <!-- </MenubarSubContent>
            </MenubarSub> -->
            <!-- </MenubarItem> -->

            <!-- </MenubarItem> -->
            <!-- <MenubarItem>
              <router-link
                to="/getinvolved/applyforspeaker"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Speakers</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/getinvolved/applyforimam"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Guest Imam</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/Fund_Raising" class="w-full hover:pl-5 duration-300 font-semibold"
                >Fund Raising</router-link
              >
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu> -->

        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >About Us
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
          </MenubarTrigger>
          <!-- <MenubarContent> -->
            <!-- <MenubarItem>
              <router-link to="/about/about_us" class="w-full hover:pl-5 duration-300 font-semibold"
                >About</router-link
              >
            </MenubarItem> -->
            <!-- <MenubarItem>
              <router-link
                to="/about/board_of_directors"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Board Of Directors</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/about/committees"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Committees</router-link
              >
            </MenubarItem> -->
            <!-- <MenubarItem>
                <router-link to="/about/team" class=" w-full hover:pl-5 duration-300">Team</router-link>
              </MenubarItem> -->
            <!-- <MenubarItem>
              <router-link to="/about/policies" class="w-full hover:pl-5 duration-300 font-semibold"
                >Policies</router-link
              >
            </MenubarItem> -->
          <!-- </MenubarContent> -->
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Contact
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> -->
          </MenubarTrigger>
          <!-- <MenubarContent>
            <MenubarItem>
              <router-link
                to="/contact/ask_imam"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Ask Imam</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/contact/ask_scholar"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Ask Scholar</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/contact/get_appointment"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Get Appointment</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/contact/contact_us"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Contact Us</router-link
              >
            </MenubarItem>
          </MenubarContent> -->
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Supply Chain
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <p class="hover:pl-5 duration-300 font-bold">Vendor</p>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <router-link
                    to="/Supply_Chain/vendor_registration"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Register Now</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/Youth_Management_Login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Login</router-link
                  >
                </MenubarItem>
               
              </MenubarSubContent>
            </MenubarSub>

            <MenubarSub>
              <MenubarSubTrigger>
                <p class="hover:pl-5 duration-300 font-bold">Imam</p>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <router-link
                    to="/Supply_Chain/imam_registration"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Register Now</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/imam_login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Login</router-link
                  >
                </MenubarItem>
               
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>
                <p class="hover:pl-5 duration-300 font-bold">Agent</p>
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <router-link
                    to="/Supply_Chain/agent_registration"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Register Now</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/agent_login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Login</router-link
                  >
                </MenubarItem>
               
              </MenubarSubContent>
            </MenubarSub>
            
       
           
          </MenubarContent>
        </MenubarMenu>
     
        <MenubarMenu>
          <MenubarTrigger class="font-bold 2xl:text-lg"
            >Customer/ Member
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
           
            <MenubarItem>
              <router-link to="/umrah-package" class="w-full hover:pl-5 duration-300 font-semibold"
                >Register</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link to="/Member_Login" class="w-full hover:pl-5 duration-300 font-semibold"
                >Login</router-link
              >
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        

        <MenubarMenu v-if="authStore?.user">
          <MenubarTrigger class="px-1 font-bold">
            <router-link :to="authStore?.currentDashboard" class="p-1 rounded-md text-lg">
              Dashboard
            </router-link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu v-else>
          <MenubarTrigger class="2xl:text-lg font-bold"
            >Admin Login
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg>
          </MenubarTrigger>
          <MenubarContent>
            
            <MenubarItem>
              <router-link
                to="/hajj_Management_Login"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Hajj Management System</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/Umrah_Management_Login"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Umrah Management System</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/travel_Management_Login"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Tour and Travel Management System</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/imam_management_login"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Imam Management System</router-link
              >
            </MenubarItem>
            <MenubarItem>
              <router-link
                to="/agent_management_login"
                class="w-full hover:pl-5 duration-300 font-semibold"
                >Agent Management System</router-link
              >
            </MenubarItem>
            <MenubarItem>
                  <router-link
                    to="/Finance_Login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Finance Management System</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/Education_Login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Learning Management System</router-link
                  >
                </MenubarItem>
                
                <MenubarItem>
                  <router-link
                    to="/Supply_Chain_Management_Login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Supply Chain Management</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link to="/HR_Login" class="w-full hover:pl-5 duration-300 font-semibold"
                    >HR Management System</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/volunteerLogin"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Customer Management System</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/Operation_Login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Operations Management System</router-link
                  >
                </MenubarItem>
                <MenubarItem>
                  <router-link
                    to="/Media_Login"
                    class="w-full hover:pl-5 duration-300 font-semibold"
                    >Media and Communication Management System</router-link
                  >
                </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <div class="flex items-center justify-between gap-2 text-white font-bold text-sm"></div>
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
} from '/components/ui/menubar'

import { ref } from 'vue'
import { useAuthStore } from '../stores/AuthStore.js'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '../stores/store.ts'
const MemberDropMenu = ref(false)
const router = useRouter()
const authStore = useAuthStore()
const gotoDashboard = () => {
  router.push(authStore?.user.dashboard)
}
const store = useStore()
</script>

<style scoped>
.router-link-active {
  color: rgb(1, 118, 116);
  background: white;
}
</style>
