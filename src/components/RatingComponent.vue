<template>
  <div class="ratings">
    <span class="count">5.00</span>
    <!-- <span class="graph">
      <font-awesome-icon :icon="['fas', 'fa-star']" />
      <font-awesome-icon :icon="['fas', 'fa-star']" />
      <font-awesome-icon :icon="['fas', 'fa-star']" />
      <font-awesome-icon :icon="['fas', 'fa-star']" />
      <font-awesome-icon :icon="['fas', 'fa-star']" />
    </span> -->
  </div>
</template>

<style scoped>
.ratings {
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  color: #ffc700;
  font-weight: bold;
}
</style>
