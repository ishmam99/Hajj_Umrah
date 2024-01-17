<script setup lang="ts">
import {
  MenubarRoot,
  type MenubarRootEmits,
  type MenubarRootProps,
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<MenubarRootProps & { class?: string }>()

const emits = defineEmits<MenubarRootEmits>()
</script>

<template>
  <MenubarRoot
    v-bind="props"
    :class="
      cn(
        'flex gap-2 items-center rounded-md border border-border',
        props.class,
      )
    "
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
  </MenubarRoot>
</template>
