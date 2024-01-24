<template>
    <div>
     <header>
      <MembarNavbar/>
     </header>
     <main> 
       <div class="py-[70px]">
            <router-view/> <!-- This is where the page content will be rendered -->
       </div>
     </main>
     
       <!-- Footer content -->
       <foot/>
   </div>
 </template>
 
 <script setup lang="ts">
 import MembarNavbar from '../views/Member/MembarNavbar.vue';
 import foot from '../components/footer.vue'
 
 
 </script>
 
 <style>
 /* Add your CSS styles for the layout here */
 </style>