<script setup lang="ts">
const props = defineProps<{checked: boolean}>()
const emit = defineEmits<{
  (e: 'change', value: boolean): void
}>()

const toggle = () => {
  emit('change', !props.checked)
}
</script>
<template>
  <div @click="toggle">
    <div v-if="checked" i-carbon-checkbox-checked-filled h-6 />
    <div v-else i-carbon-checkbox h-6 />
  </div>
</template>
