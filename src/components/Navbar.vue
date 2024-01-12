<template>
  <header class="bg-white flex items-center justify-between h-[70px] fixed z-[99] top-0 w-full px-[5%]">
        <nav class="flex items-center justify-between w-full mx-auto">
          <div>
            <img src="../assets/image/common/n1.png" alt="logo" class="h-[50px]">
          </div>
          <div class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
            <ul class="flex md:flex-row flex-col md:items-center md:gap-[3vw] gap-8">
              <li>
                <a class="hover:text-orange-500 font-semibold" href="">Home</a>
              </li>
              <li class="service-dropdown relative">
                <a class="hover:text-orange-500 font-semibold" href="">
                    Services
                    <span class="dropdown-arrow"></span>
                </a>
                <div class="nav-link-submenu">
                    <a href="#">Submenu</a>
                    <a href="#">Submenu</a>
                </div>
              </li>
              <li>
                <a class="hover:text-orange-500 font-semibold" href="">Watch</a>
              </li>
              <li>
                <a class="hover:text-orange-500 font-semibold" href="">Learning Center</a>
              </li>
              <li>
                <a class="hover:text-orange-500 font-semibold" href="">About Us</a>
              </li>
              <li>
                <a class="hover:text-orange-500 font-semibold" href="">Contact</a>
              </li>
              <li>
                <a class="hover:text-orange-500 font-semibold" href="">Event</a>
              </li>
              <li>
                <a class="hover:text-orange-500 font-semibold" href="">More</a>
              </li>
            </ul>
          </div>
          <div class="flex items-center gap-6 mx-5">
            <button class="bg-orange-300 text-white px-6 py-1 rounded-full hover:bg-orange-500">Donation</button>
            <button class="bg-orange-300 text-white px-6 py-1 rounded-full hover:bg-orange-500">Member</button>
            <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden" ></ion-icon>
          </div>
    
        </nav>
    
      </header>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  // You can pass any props you want to use in the component
});
</script>

<style scoped>
        .dropdown-arrow {
          display: inline-block;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 6px 0 6px;
          border-color: #000 transparent transparent transparent;
          position: relative;
          top: -2px;
          left: 4px;
        }
    
        .service-dropdown:hover .nav-link-submenu {
          display: block;
        }
    
        .nav-link-submenu {
          display: none;
          position: absolute;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }
    
        .nav-link-submenu a {
          color: #333;
          padding: 10px;
          display: block;
        }
</style>
