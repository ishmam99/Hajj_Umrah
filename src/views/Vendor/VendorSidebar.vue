<template>
  <div class="bg-[url('/src/assets/image/common/bg-pattern.jpg')] bg-cover w-1/5 h-screen sticky top-[80px]">
    <div class="bg-[#135D66] p-5 h-full flex flex-col gap-3 font-semibold text-lg text-white">
      <p class="text-2xl font-bold text-white">Vendor Dashboard</p>
      <p class="text-xl font-bold">Welcome {{store?.user?.name}}</p>
      <router-link to="/vendor_profile"
        class="flex items-center gap-2 bg-white p-2 rounded-md border border-black py-2 hover:bg-gray-200 text-slate-800"><svg
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path
            d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z">
          </path>
        </svg>Profile</router-link>

        <div class="bg-white text-black p-2 rounded-md cursor-pointer ">
          <p @click="dropdown = dropdown === 3 ? 0 : 3" class="pb-1 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17.0047 16.0027H19.0047V4.00275H9.00468V6.00275H17.0047V16.0027ZM17.0047 18.0027V21.0019C17.0047 21.5546 16.5547 22.0027 15.9978 22.0027H4.01154C3.45548 22.0027 3.00488 21.5581 3.00488 21.0019L3.00748 7.00362C3.00759 6.45085 3.45752 6.00275 4.0143 6.00275H7.00468V3.00275C7.00468 2.45046 7.4524 2.00275 8.00468 2.00275H20.0047C20.557 2.00275 21.0047 2.45046 21.0047 3.00275V17.0027C21.0047 17.555 20.557 18.0027 20.0047 18.0027H17.0047ZM5.0073 8.00275L5.00507 20.0027H15.0047V8.00275H5.0073ZM7.00468 16.0027H11.5047C11.7808 16.0027 12.0047 15.7789 12.0047 15.5027C12.0047 15.2266 11.7808 15.0027 11.5047 15.0027H8.50468C7.12397 15.0027 6.00468 13.8835 6.00468 12.5027C6.00468 11.122 7.12397 10.0027 8.50468 10.0027H9.00468V9.00275H11.0047V10.0027H13.0047V12.0027H8.50468C8.22854 12.0027 8.00468 12.2266 8.00468 12.5027C8.00468 12.7789 8.22854 13.0027 8.50468 13.0027H11.5047C12.8854 13.0027 14.0047 14.122 14.0047 15.5027C14.0047 16.8835 12.8854 18.0027 11.5047 18.0027H11.0047V19.0027H9.00468V18.0027H7.00468V16.0027Z"></path></svg>
           
            My Bids
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </p>
          <div v-if="dropdown == 3" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-md">
            <router-link to="/vendor_accepted_bids" class="flex rounded-lg border border-black py-2 items-center gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path
                  d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z">
                </path>
              </svg>
              Accepted Bids
            </router-link>
            
            <router-link to="/vendor_pending_bids" class="flex items-center gap-2 cursor-pointer rounded-lg border border-black py-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.9995 2C12.5518 2 12.9995 2.44772 12.9995 3V6C12.9995 6.55228 12.5518 7 11.9995 7C11.4472 7 10.9995 6.55228 10.9995 6V3C10.9995 2.44772 11.4472 2 11.9995 2ZM11.9995 17C12.5518 17 12.9995 17.4477 12.9995 18V21C12.9995 21.5523 12.5518 22 11.9995 22C11.4472 22 10.9995 21.5523 10.9995 21V18C10.9995 17.4477 11.4472 17 11.9995 17ZM20.6597 7C20.9359 7.47829 20.772 8.08988 20.2937 8.36602L17.6956 9.86602C17.2173 10.1422 16.6057 9.97829 16.3296 9.5C16.0535 9.02171 16.2173 8.41012 16.6956 8.13398L19.2937 6.63397C19.772 6.35783 20.3836 6.52171 20.6597 7ZM7.66935 14.5C7.94549 14.9783 7.78161 15.5899 7.30332 15.866L4.70525 17.366C4.22695 17.6422 3.61536 17.4783 3.33922 17C3.06308 16.5217 3.22695 15.9101 3.70525 15.634L6.30332 14.134C6.78161 13.8578 7.3932 14.0217 7.66935 14.5ZM20.6597 17C20.3836 17.4783 19.772 17.6422 19.2937 17.366L16.6956 15.866C16.2173 15.5899 16.0535 14.9783 16.3296 14.5C16.6057 14.0217 17.2173 13.8578 17.6956 14.134L20.2937 15.634C20.772 15.9101 20.9359 16.5217 20.6597 17ZM7.66935 9.5C7.3932 9.97829 6.78161 10.1422 6.30332 9.86602L3.70525 8.36602C3.22695 8.08988 3.06308 7.47829 3.33922 7C3.61536 6.52171 4.22695 6.35783 4.70525 6.63397L7.30332 8.13398C7.78161 8.41012 7.94549 9.02171 7.66935 9.5Z"></path></svg>Pending Bids
            </router-link>
            
          </div>
        </div>





      <!-- My Packages  -->
<div class="bg-white p-2 text-black rounded-md cursor-pointer ">
  <p  @click="dropdown = dropdown === 2 ? 0 : 2" class="pb-1 flex items-center gap-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 3L22 7V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V7.00353L4 3H20ZM20 9H4V19H20V9ZM12 10L16 14H13V18H11V14H8L12 10ZM18.764 5H5.236L4.237 7H19.764L18.764 5Z"></path></svg>
    <!-- /lmao -->
    My Services
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 16L6 10H18L12 16Z"></path>
    </svg>
  </p>
  <div v-if="dropdown == 2" class="flex flex-col gap-3 pl-2 py-2 bg-slate-100 rounded-lg">


    <div class="space-y-2 py-2 bg-slate-200 rounded-md border border-black shadow-md px-1 me-1">
     
      <p @click="toggleMyLog"
        class="flex justify-between  items-center cursor-pointer  font-semibold">
      <div class="flex justify-between items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.16705 4.36681L12 1L17.833 4.36681L15.6885 5.61061L12 3.48758L8.31152 5.61061L6.16705 4.36681ZM17.833 8.61285L15.6885 7.36907L12 9.49209L8.31152 7.36907L6.16705 8.61285V11.1004L9.85553 13.2234V17.4695L12 18.7133L14.1445 17.4695V13.2234L17.833 11.1004V8.61285ZM17.833 15.3465V12.8589L15.6885 14.1026V16.5902L17.833 15.3465ZM19.3555 16.2257L15.667 18.3487V20.8363L21.5 17.4695V10.7358L19.3555 11.9797V16.2257ZM17.2111 6.48984L19.3555 7.73362V10.2212L21.5 8.97741V6.48984L19.3555 5.24605L17.2111 6.48984ZM9.85553 19.2494V21.737L12 22.9808L14.1445 21.737V19.2494L12 20.4932L9.85553 19.2494ZM6.16705 15.3465L8.31152 16.5902V14.1026L6.16705 12.8589V15.3465ZM9.85553 6.48984L12 7.73362L14.1445 6.48984L12 5.24605L9.85553 6.48984ZM4.64446 7.73362L6.78894 6.48984L4.64446 5.24605L2.5 6.48984V8.97741L4.64446 10.2212V7.73362ZM4.64446 11.9797L2.5 10.7358V17.4695L8.33294 20.8363V18.3487L4.64446 16.2257V11.9797Z"></path></svg>
        Ground Transport Service  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 16L6 10H18L12 16Z"></path>
        </svg>
      </div>

      </p>
      
      <transition name="fade">
        <div v-if="showMyLog" class="flex flex-col gap-4 p-3  rounded-md ">
         

          <router-link to="/vendor_add_transportService"
          class="flex items-center gap-2 border border-black space-y-2 p-2 rounded-md  shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 20H7V21C7 21.5523 6.55228 22 6 22H4C3.44772 22 3 21.5523 3 21V12H2V8H3V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V8H22V12H21V21C21 21.5523 20.5523 22 20 22H18C17.4477 22 17 21.5523 17 21V20ZM5 5V11H19V5H5ZM19 13H5V18H19V13ZM7.5 17C6.67157 17 6 16.3284 6 15.5C6 14.6716 6.67157 14 7.5 14C8.32843 14 9 14.6716 9 15.5C9 16.3284 8.32843 17 7.5 17ZM16.5 17C15.6716 17 15 16.3284 15 15.5C15 14.6716 15.6716 14 16.5 14C17.3284 14 18 14.6716 18 15.5C18 16.3284 17.3284 17 16.5 17Z"></path></svg> Add Ground Transport
        </router-link>
          <router-link to="/vendor_show_transportService"
          class="flex items-center gap-2 border border-black space-y-2 p-2 rounded-md  shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg>Show Transport list
        </router-link>

        </div>
      </transition>
    </div>

    <div class="space-y-2 py-2 border border-black bg-slate-200 rounded-md shadow-md px-1 me-1">
      <!-- Sidebar Header -->
      <p @click="toggleMyHotel"
        class="flex justify-between items-center cursor-pointer  font-semibold">
      <div class="flex justify-between items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.16705 4.36681L12 1L17.833 4.36681L15.6885 5.61061L12 3.48758L8.31152 5.61061L6.16705 4.36681ZM17.833 8.61285L15.6885 7.36907L12 9.49209L8.31152 7.36907L6.16705 8.61285V11.1004L9.85553 13.2234V17.4695L12 18.7133L14.1445 17.4695V13.2234L17.833 11.1004V8.61285ZM17.833 15.3465V12.8589L15.6885 14.1026V16.5902L17.833 15.3465ZM19.3555 16.2257L15.667 18.3487V20.8363L21.5 17.4695V10.7358L19.3555 11.9797V16.2257ZM17.2111 6.48984L19.3555 7.73362V10.2212L21.5 8.97741V6.48984L19.3555 5.24605L17.2111 6.48984ZM9.85553 19.2494V21.737L12 22.9808L14.1445 21.737V19.2494L12 20.4932L9.85553 19.2494ZM6.16705 15.3465L8.31152 16.5902V14.1026L6.16705 12.8589V15.3465ZM9.85553 6.48984L12 7.73362L14.1445 6.48984L12 5.24605L9.85553 6.48984ZM4.64446 7.73362L6.78894 6.48984L4.64446 5.24605L2.5 6.48984V8.97741L4.64446 10.2212V7.73362ZM4.64446 11.9797L2.5 10.7358V17.4695L8.33294 20.8363V18.3487L4.64446 16.2257V11.9797Z"></path></svg>
        Hotel Service  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 16L6 10H18L12 16Z"></path>
        </svg>
      </div>

      </p>
      <!-- Submenu -->
      <transition name="fade">
        <div v-if="showMyHotel" class="flex flex-col gap-4 p-3  rounded-md ">
          <!-- Math Program -->

          <router-link to="/vendor_hotel_Service"
          class="flex items-center gap-2 space-y-2 p-2 rounded-md border border-black  shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22 21H2V19H3V4C3 3.44772 3.44772 3 4 3H18C18.5523 3 19 3.44772 19 4V9H21V19H22V21ZM17 19H19V11H13V19H15V13H17V19ZM17 9V5H5V19H11V9H17ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM7 7H9V9H7V7Z"></path></svg> Add Hotel
        </router-link>
          <router-link to="/vendor_show_hotel_Service"
          class="flex items-center gap-2 space-y-2 p-2 rounded-md border border-black  shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg>Show Hotel list
        </router-link>

        </div>
      </transition>
    </div>

    <div class="space-y-2 py-2 border border-black bg-slate-200 rounded-md shadow-md px-1 me-1">
      <!-- Sidebar Header -->
      <p @click="toggleMyGround"
        class="flex justify-between items-center cursor-pointer  font-semibold">
      <div class="flex justify-between items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M6.16705 4.36681L12 1L17.833 4.36681L15.6885 5.61061L12 3.48758L8.31152 5.61061L6.16705 4.36681ZM17.833 8.61285L15.6885 7.36907L12 9.49209L8.31152 7.36907L6.16705 8.61285V11.1004L9.85553 13.2234V17.4695L12 18.7133L14.1445 17.4695V13.2234L17.833 11.1004V8.61285ZM17.833 15.3465V12.8589L15.6885 14.1026V16.5902L17.833 15.3465ZM19.3555 16.2257L15.667 18.3487V20.8363L21.5 17.4695V10.7358L19.3555 11.9797V16.2257ZM17.2111 6.48984L19.3555 7.73362V10.2212L21.5 8.97741V6.48984L19.3555 5.24605L17.2111 6.48984ZM9.85553 19.2494V21.737L12 22.9808L14.1445 21.737V19.2494L12 20.4932L9.85553 19.2494ZM6.16705 15.3465L8.31152 16.5902V14.1026L6.16705 12.8589V15.3465ZM9.85553 6.48984L12 7.73362L14.1445 6.48984L12 5.24605L9.85553 6.48984ZM4.64446 7.73362L6.78894 6.48984L4.64446 5.24605L2.5 6.48984V8.97741L4.64446 10.2212V7.73362ZM4.64446 11.9797L2.5 10.7358V17.4695L8.33294 20.8363V18.3487L4.64446 16.2257V11.9797Z"></path></svg>
        Air Transport Service  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 16L6 10H18L12 16Z"></path>
        </svg>
      </div>

      </p>
      <!-- Submenu -->
      <transition name="fade">
        <div v-if="showMyGround" class="flex flex-col gap-4 p-3  rounded-md ">
          <!-- Math Program -->

          <router-link to="/ground_transport_service"
          class="flex items-center gap-2 space-y-2 p-2 rounded-md border border-black shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M22 11V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V11L4.44721 6.10557C4.786 5.428 5.47852 5 6.23607 5H9V3H15V5H17.7639C18.5215 5 19.214 5.428 19.5528 6.10557L22 11ZM20 13H4V18H20V13ZM4.23607 11H19.7639L17.7639 7H6.23607L4.23607 11ZM6.5 17C5.67157 17 5 16.3284 5 15.5C5 14.6716 5.67157 14 6.5 14C7.32843 14 8 14.6716 8 15.5C8 16.3284 7.32843 17 6.5 17ZM17.5 17C16.6716 17 16 16.3284 16 15.5C16 14.6716 16.6716 14 17.5 14C18.3284 14 19 14.6716 19 15.5C19 16.3284 18.3284 17 17.5 17Z"></path></svg> Add Air Service
        </router-link>
          <router-link to="/imam_packages_active_package"
          class="flex items-center gap-2 space-y-2 p-2 rounded-md border border-black shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path></svg>Show Air Service list
        </router-link>

        </div>
      </transition>
    </div>
  </div>
</div>

      <!-- <div class="accordion">
        <button @click.stop="toggleAccordion('bidManagement')"
          class="flex items-center gap-2 text-slate-800 bg-white p-2 rounded-md w-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
          </svg>

          My Services
        </button>
        <div v-if="currentAccordions === 'bidManagement'" class="submenu mx-8">
          <router-link to="/vendor_add_transportService" class="flex items-center gap-2 hover:px-2">-
            Add Transport Service</router-link>
          <router-link to="/vendor_hotel_Service" class="flex items-center gap-2 hover:px-2">-
            Hotel Service</router-link>
          <router-link to="/ground_transport_service" class="flex items-center gap-2 hover:px-2">-
            Ground Transport Service</router-link>


        </div>
      </div> -->


      


      <button type="button" @click="logout" class="py-2 px-5 mt-2 bg-red-800 rounded-md text-white duration-300">
        <span v-if="loginload" class="flex justify-center items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 animate-spin"
            fill="currentColor">
            <path
              d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z">
            </path>
          </svg>
          Logging Out...
        </span>
        <span v-else>Logout</span>
      </button>
      <div class="flex flex-col gap-2 overflow-hidden"></div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useAuthStore } from '/src/stores/AuthStore'
import { useRouter, useRoute } from 'vue-router'

const currentAccordions = ref('projectManagement')
const currentAccordions2 = ref('bidManagement')
const dropdown = ref(0)
const subDropDown = ref(false)
const showMyLog = ref(false);
const showMyHotel = ref(false);
const showMyGround = ref(false);
const route = useRoute()
const router = useRouter()
const store = useAuthStore()
const loginload = ref(false);
const toggleMyLog = () => {
  showMyLog.value = !showMyLog.value;
};
const toggleMyHotel = () => {
  showMyHotel.value = !showMyHotel.value;
};
const toggleMyGround = () => {
  showMyGround.value = !showMyGround.value;
};




const logout = () => {
  loginload.value = true;
  try{

    store.logout()
    router.push('/')
  } catch (error) {
    console.log(error);
  }
  loginload.value = false;
}






const toggleAccordion = (accordionName) => {

  if (accordionName === currentAccordions.value) {
    currentAccordions.value = ''
  } else {
    currentAccordions.value = accordionName
  }
}

const toggleAccordion2 = (accordionName2) => {
  if (accordionName2 === currentAccordions2.value) {
    currentAccordions2.value = ''
  } else {
    currentAccordions2.value = accordionName2
  }
}

watch(() => route, () => {
  console.log(route.name)
  if (route.name.includes('Social_Service_Event')) {
    currentAccordions.value = 'projectManagement'
  }
  else if (route.name.includes('Social_Service_Project')) {
    currentAccordions.value = 'bidManagement'
  }
}, {
  deep: true,
  immediate: true
})
watch(
  () => store.isAuthenticated,
  (newIsAuthenticated) => {
    console.log(newIsAuthenticated)

    if (!newIsAuthenticated) {
      router.push('/')
    }
  }
)
</script>
<style scoped>
.router-link-active {
  background-color: lightseagreen;
  color: white;
}
</style>
