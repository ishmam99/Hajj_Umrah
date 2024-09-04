<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view></router-view>
  </component>
  <!-- <router-view class=""></router-view> Awwwww -->
</template>

<script setup></script>
