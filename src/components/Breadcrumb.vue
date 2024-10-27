<template>
  <nav aria-label="breadcrumb" class="pb-4 flex gap-10 items-center justify-between px-8">
    <ol class="flex items-center space-x-2 text-gray-600">
      <router-link to="/" class="hover:text-blue-600">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="24"
        width="24"
        fill="currentColor"
      >
        <path
          d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM8 15V17H16V15H8Z"
        ></path>
      </svg>
      </router-link>&nbsp;/
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <router-link :to="crumb.path" class="hover:text-blue-600 text-lg font-semibold">
          {{ crumb.name }}
        </router-link>
        <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
      </li>
    </ol>
    <button
            @click="$router.go(-1)"
            type="button"
            class="inline-flex items-center px-4 py-1 text-sm font-medium gap-1 text-center text-white bg-red-700 rounded-full focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
            Back
          </button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(path => path)
  const breadcrumbArray = pathArray.map((path, index) => {
    return {
      name: path.charAt(0).toUpperCase() + path.slice(1),
      path: '/' + pathArray.slice(0, index + 1).join('/')
    }
  })
  return breadcrumbArray
})
</script>

<style scoped>

.router-link-exact-active {
  color: #14b8a6;
  font-weight: bold;
}
</style>
