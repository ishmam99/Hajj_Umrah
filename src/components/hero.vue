<template>
    <div class="h-[80vh] pb-5">
        <div class="h-full">
            <swiper
                :slidesPerView="'1'"
                :centeredSlides="true"
                :spaceBetween="0"
                :loop="true"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                }"
                :navigation="false"
                :modules="modules"
                class="mySwiper"
            >       
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h1.jpg" alt="" class="">
                        <div class="head">
                          <p>Welcome To</p>
                          <h1>Islamic Digital Lane</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/Signup">Join Now</router-link></button>
                        </div>
                    </swiper-slide>
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h2.jpg" alt="" class="">
                        <div class="head">
                          <p>IDL</p>
                          <h1>Learning Center</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/onsitelearning">Join Now</router-link></button>
                        </div>
                    </swiper-slide>        
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h3.jpg" alt="" class="">
                        <div class="head">
                          <p>IDL</p>
                          <h1>Prayer Service</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/Signup">Join Now</router-link></button>
                        </div>
                    </swiper-slide>
                    <swiper-slide> 
                        <img src="/src/assets/image/hero/h5.jpg" alt="" class="">
                        <div class="head">
                          <p>IDL</p>
                          <h1>New Muslim Service</h1>
                          <button class="py-2 px-3 rounded-lg border-1 border-white"><router-link to="/services/new_muslim">Join Now</router-link></button>
                        </div>
                    </swiper-slide>
            </swiper>
        </div>
    </div>
    
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  
    // import './style.css';
  
    // import required modules
    import { Pagination ,Navigation,Autoplay } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Pagination , Navigation,Autoplay],
        };
      },
    };
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
.head{
    text-shadow: 2px 2px 3px black;
    font-size: 54px;
    font-weight: 700;
    color: white;
    position: absolute;
    text-transform: uppercase;
    left: 5%;
    text-align: left;
}
.head p{
  text-shadow: 2px 2px 3px black;
  font-size: 34px;
  color: rgb(194, 127, 3);
}
.head button{
  font-size: 24px;
  font-weight: 500;
  padding: 10px 20px;
  border: 2px solid white;
  text-shadow: 2px 2px 3px black;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* animation: 5s banimg linear; */
}

@keyframes banimg {
    0%{
        scale: 1;
    }
    50%{
        scale: 1.1;
    }
    100%{
        scale: 1;
    }
}
</style>
  