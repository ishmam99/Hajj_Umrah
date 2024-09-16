<template>
  <DefaultLayout>
  <div class="pt-[80px]"></div>
  <div class="h-[60vh] 2xl:h-[50vh] relative">
    <div class="h-full">
      <swiper
        :slidesPerView="'1'"
        :centeredSlides="true"
        :spaceBetween="0"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true
        }"
        :navigation="false"
        :modules="modules"
        class="mySwiper"
      >
      <swiper-slide>
          <img src="/src/assets/image/hero/hajj_services.jpg" alt="" class="" />
          <div class="head">
            <p>Umrah - Texas - 2024</p>
            <h3 class="text-xl">Learn about your Deen, come closer to your Lord, and explore the world with Muslim World Adventures</h3>
            <button class=""><router-link to="/Signup">Registration now!</router-link></button>
          </div>
        </swiper-slide>
<!--       
      <swiper-slide>
          <img src="/src/assets/image/hero/hajj_services.jpg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services & packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide>
        
        <swiper-slide>
          <img src="/src/assets/image/hajj/hajj-2.jpg" alt="" class="" />
          <div class="head">
            <p>Hajj Exploration LLC</p>
            <h3 class="text-2xl">Exclusive hassle -free Umrah services & packages</h3>
            <button class=""><router-link to="/Signup">Apply Now</router-link></button>
          </div>
        </swiper-slide> -->
        
        
      </swiper>
    </div>
  </div>

  

 
  <div class="container mx-auto my-8">
    <div class="flex flex-col items-center justify-center  pb-10  my-6"> 
        <P class="text-5xl font-bold text-[#286d71]">Packages Details</P>
    </div>
    <div class="shadow-md rounded-md pb-8">
      <div class="flex items-center justify-center">
        <div class="my-6 py-5 w-full mx-10">
        <!-- <p class="text-2xl text-slate-800 font-bold">Basic Umrah </p> -->
        
        <div class="text-slate-800">
          <ul class="text-xl">
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Package Id - <span class="text-xl text-[#286d71] font-semibold"> 2024-01-US01-01000</span></span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Country - <span class="text-xl text-[#286d71] font-semibold"> USA</span></span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">City - <span class="text-xl text-[#286d71] font-semibold"> Texas </span></span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Package Code - <span class="text-xl text-[#286d71] font-semibold"> 01000</span></span>
            </li>
            
          </ul>
        </div>          

      </div>
      <div class="my-6 py-5 w-full mx-10">
        <!-- <p class="text-2xl text-slate-800 font-bold">Basic Umrah </p> -->
        
        <div class="text-slate-800">
          <ul class="text-xl">
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Package Price - <span class="text-xl text-[#286d71] font-semibold">$3999</span></span>
            </li>
            
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Package Year - <span class="text-xl text-[#286d71] font-semibold"> 2024</span></span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Starting Date - <span class="text-xl text-[#286d71] font-semibold"> 20 September</span></span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2"> Ending Date - <span class="text-xl text-[#286d71] font-semibold"> 30 September</span></span>
            </li>
          </ul>
        </div>          

      </div>
      </div>
      
        <!-- <div class="flex items-center justify-center rounded-lg shadow-sm mx-8 bg-[#286d71] px-3 py-4 text-white hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <div class="text-center">
            <router-link
                to="/Social_Service_Login"
                class=" text-lg !text-white"
                >Registration now!
              </router-link>
          </div>
        </div> -->
     </div>
  </div>
<!--  
  <div class="container mx-auto mt-10 mb-8">
    
    <div class="shadow-md rounded-md pb-8">
      <div class="my-6 py-5 w-full mx-10">
        <p class="text-2xl text-slate-800 font-bold">Additional Details</p>
        <div class="flex text-center items-start justify-start my-2 font-semibold">
           <p class="text-lg text-slate-800">Package Includes</p>
        </div>
        <div class="text-slate-800">
          <ul class="text-lg">
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Booking & Umrah Guidance</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Hotel Accommodation</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Complementary Ziarat Medinah</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Visa Assistance</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Meet & Assist</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Airport Private Transfers (By Cars)</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Accommodation & Airport Transport On Family Basis</span>
            </li>
            
          </ul>
        </div>          

        <div class="flex text-center items-start justify-start mt-8 mb-2 font-semibold">
           <p class="text-lg text-slate-800">Required Documents for Umrah Visa</p>
        </div>
        <div class="text-slate-800">
          <ul class="text-lg">
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">6 months Valid Passport</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">CNIC smart card /FRC/MRC</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Complementary Ziarat Medinah</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">White background picture</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Vaccination card / Polio card</span>
            </li>
          </ul>
        </div>
        
        <div class="flex text-center items-start justify-start mt-8 mb-2 font-semibold">
           <p class="text-lg text-slate-800">Note</p>
        </div>
        <div class="text-slate-800">
          <ul class="text-lg">
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Package subject to availability.</span>
            </li>
            <li class="flex mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="rgba(40,109,113,1)"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
              <span class="mx-2">Rates may be changed due to any reason.</span>
            </li>
          </ul>
        </div>

      </div>
     </div>

  </div> -->

  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useSocialStore } from '@/stores/SocialDashboard.ts'
// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
const modules = [Pagination, Navigation, Autoplay]
const socialStore = useSocialStore()
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  position: relative;
}
.head {
  text-shadow: 2px 2px 3px black;
  font-size: 54px;
  font-weight: 700;
  color: white;
  position: absolute;
  text-transform: uppercase;
  left: 5%;
  text-align: left;
}
.head p {
  text-shadow: 2px 2px 3px black;
  font-size: 34px;
  color: rgb(255, 255, 255);
}
.head button {
  font-size: 24px;
  font-weight: 500;
  padding: 8px 12px;
  border: 3px solid #286d71;
  text-shadow: 2px 2px 3px black;
  border-radius: 8px;
  background: #286d71;
  /* transition: .2s ease-in-out; */
}
.head button:hover {
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  text-shadow: none;
  /* transition: .2s ease-in-out; */
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* animation: 5s banimg linear; */
}
</style>
