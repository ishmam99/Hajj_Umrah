<template>
   <div>
    <header>
     <Navbar/>
    </header>
    <main> 
      <div class="py-[70px]">
           <slot /> <!-- This is where the page content will be rendered -->
      </div>
   
    </main>
    
      <!-- Footer content -->
      <foot/>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue';
import foot from '../components/footer.vue'


</script>

<style>
/* Add your CSS styles for the layout here */
</style>
