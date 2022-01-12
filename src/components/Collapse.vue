<script lang="ts" setup>
interface Props {
  iconOpen?: string
  iconClosed?: string
  title: string
  isOpen: boolean
}
withDefaults(defineProps<Props>(), {
  iconOpen: 'i-carbon-subtract-alt',
  iconClosed: 'i-carbon-add-alt',
})
defineEmits<{
  (e: 'change', value: boolean): void
}>()
</script>

<template>
  <div cursor-pointer flex v-bind="$attrs" @click="$emit('change', !isOpen)">
    <div v-if="isOpen" :class="iconOpen" icon-btn h-6 />
    <div v-else :class="iconClosed" icon-btn h-6 />

    <div p-l-2 flex-grow>
      {{ title }}
    </div>

    <slot name="title" />
  </div>
  <div v-if="isOpen" m-l-4>
    <slot />
  </div>
</template>
