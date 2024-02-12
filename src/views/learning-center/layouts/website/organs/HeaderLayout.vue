<script setup>
import NavMenu from '@/components/menu/LcNavMenuComponent.vue'
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
const user = JSON.parse(localStorage.getItem('user'))
</script>

<template>
    <div class="h-[80px] w-full flex justify-center bg-[url('src/assets/image/home/pattern-1.png')] bg-repeat items-center text-black fixed top-0 z-40 bg-[#36897bfa] duration-300">  
      
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
            <router-link to="/" class="logo">
        <img src="@/assets/islamic-digital-lane/images/brand/logo.png" alt="" srcset="">
      </router-link>
        <router-link to="/" class="logo">
          Islamic Digital Lane  <br> Learning <br> Center
        </router-link>
        <!-- <NavMenu /> -->
        <div class="right-menu">
            <!-- <div class="favorite">
                <font-awesome-icon :icon="['fas', 'fa-heart']" />
            </div>
            <div class="cart">
                <font-awesome-icon :icon="['fas', 'fa-cart-shopping']" />
            </div>
            <div class="notification">
                <font-awesome-icon :icon="['fas', 'fa-bell']" />
            </div> -->
            
            <router-link v-if="!user" to="/teacher-login" class="login-btn text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Teacher Login
            </router-link>
            <router-link v-if="!user" to="/student-login" class="login-btn text-white bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Student Login
            </router-link>
            <router-link v-if="!user" to="/management-login" class="login-btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Advisor Login
            </router-link>
            <a v-if="!user" href="https://learningcenter.islamicdigitallane.com/login" class="login-btn text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-sm rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Administrator Login
            </a>
            <div class="filter">
                <font-awesome-icon :icon="['fas', 'fa-magnifying-glass']" />
            </div>
            <div v-if="user && user.role_id == 4" class="favorite">
                <font-awesome-icon :icon="['fas', 'fa-heart']" />
            </div>
            <div v-if="user && user.role_id == 4" class="cart">
                <font-awesome-icon :icon="['fas', 'fa-cart-shopping']" />
            </div>
            <div v-if="user && user.role_id == 4" class="notification">
                <font-awesome-icon :icon="['fas', 'fa-bell']" />
            </div>
            <router-link v-if="user" to="/dashboard" class="float-right">
                <font-awesome-icon :icon="['fas', 'fa-user']" />
            </router-link>
         </div>
          </Menubar>
            
        </div>  
    </div>
   
</template>

<style scoped>

.login-btn {
    font-size: 12px !important;
}
.main-header {
    display: grid;
    grid-template-columns: 0.1fr 0.1fr  0.2fr 0.6fr;
    background: #0FA3B1;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 50px;
    position: relative;
}

.logo {
    display: flex;
    align-items: center;
    color: white;
    line-height: 1;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}

/* Category */

.categories {
    background: white;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.category-items {
    display: grid;
    width: 300px;
    position: absolute;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    top: 10vh;
    left: 15.1vw;
    z-index: 99999;
}

.category-items > *{
    text-decoration: none;
    color: inherit;
    padding: 10px;
    font-family: 'Inter';
    cursor: pointer;
}

.category-items *:last-child{
    text-decoration: none;
    color: inherit;
    padding: 10px;
    border-bottom: none;
    cursor: pointer;
}

.category-items > *:hover {
    background-color: rgb(240, 240, 240);;
}

/* Right menu */

.right-menu {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
}

.right-menu > * {
    color: white;
    cursor: pointer;
    font-size: 18px;
}

.right-menu > *:hover {
    color: rgb(236, 236, 236);
}
.logo img {
  height: 100%;
  width: 80px;
}
</style>