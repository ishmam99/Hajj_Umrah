<script setup>
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['modalClose'])

defineProps({
  width: String
})

function close() {
  emit('modalClose', false)
}
</script>

<template>
    <div class="modal" >
        <div class="modal-content" :style="width">
          <div @click="close" class="close"><font-awesome-icon :icon="['fas', 'fa-close']" /></div>
          <div class="content-body">
            <slot></slot>
          </div>
        </div>
    </div>
</template>

<style scoped>
.close {
  padding: 10px;
  display: flex;
  justify-content: end;
  transition: 0.2s ease;
  cursor: pointer;
}

.close:hover {
  color: red;
}

.content-body {
  padding: 20px;
}

.modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: math !important;
  }

  .modal-content {
    height: auto;

    background: white;
    border-radius: 5px;
  }
</style>