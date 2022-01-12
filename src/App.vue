<script setup lang="ts">
import store from '~/models/store'

</script>
<template>
  <main font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
    <Header />
    <div flex>
      <Controls v-bind="store" m-r-2 min-w-240px />
      <MainList :stratagems="store.displayStratagems" @hide="store.hideStratagem($event)" />
    </div>
  </main>
</template>
