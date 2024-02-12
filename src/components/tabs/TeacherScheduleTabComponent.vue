<!-- TabComponent.vue -->
<template>
  <div>
    <div class="tab-headers">
      <!-- Tab Headers -->
      <div
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="{ active: activeTab === index }"
          class="tab-header"
      >
        {{ tab.label }}
      </div>
    </div>
    <!-- Tab Content -->
    <div class="tab-content">
      <div v-for="(tab, index) in tabs" :key="index" v-show="activeTab === index" class="tab-pane">
        <slot :name="tab.label"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Add CSS for tabs styling */
</style>
