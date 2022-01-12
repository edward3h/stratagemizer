<script setup lang="ts">
import store from '~/models/store'

const controls = ref(true)
const toggle = () => controls.value = !controls.value
</script>

<template>
  <div flex>
    <Collapse
      icon-closed="i-carbon-maximize"
      icon-open="i-carbon-minimize"
      :is-open="controls"
      title=""
      @change="toggle"
    >
      <Controls v-bind="store" m-r-2 min-w-240px />
    </Collapse>
    <MainList :stratagems="store.displayStratagems" @hide="store.hideStratagem($event)" />
  </div>
</template>
