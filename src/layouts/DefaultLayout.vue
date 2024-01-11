<template>
   <div>
    <header>
     <Navbar />
    </header>
    <main>
    
      <slot /> <!-- This is where the page content will be rendered -->
    </main>
    <footer>
      <!-- Footer content -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';


</script>

<style>
/* Add your CSS styles for the layout here */
</style>
