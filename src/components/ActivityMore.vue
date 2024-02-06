<template>
  <div class="w-1/4">
    <p class="font-[750] text-slate-800 py-3 text-lg">More..</p>
    <div class="bg-white rounded-xl p-5">
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgb(21 94 117 / var(--tw-bg-opacity))"
        >
          <path
            d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"
          ></path>
        </svg>
        <router-link to="/activity/event" class="text-xl py-3">Event</router-link>
      </div>
      <hr />
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgb(6 95 70 / var(--tw-bg-opacity))"
        >
          <path
            d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"
          ></path>
        </svg>
        <router-link to="/activity/project" class="text-xl py-3">Project</router-link>
      </div>
      <hr />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
