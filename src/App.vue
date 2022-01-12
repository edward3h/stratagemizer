<script setup lang="ts">
import store from '~/models/store'

const [menu, toggleMenu] = useToggle(true)
const disableMenuOpen = computed(() => store.selectedFactions.value.size < 1)
const isMenuOpen = computed(() => disableMenuOpen.value || menu.value)

const controlProps = {
  isMenuOpen,
  superfactions: store.superfactions,
  factionsFor: store.factionsFor,
  subfactionsFor: store.subfactionsFor,
  addFaction: store.addFaction,
  removeFaction: store.removeFaction,
  clearHidden: store.clearHidden,
  selectedFactions: store.selectedFactions,
  hiddenCount: store.hiddenCount,
  clearAll: store.clearAll,
  disableClearAll: store.disableClearAll,
}
</script>
<template>
  <main font-sans p="x-4 y-10" text="gray-700 dark:gray-200">
    <Header v-bind="{disableMenuOpen, isMenuOpen}" @menuClick="toggleMenu()" />
    <div flex>
      <Controls v-bind="controlProps" m-r-2 min-w-240px />
      <MainList :stratagems="store.displayStratagems" @hide="store.hideStratagem($event)" />
    </div>
  </main>
</template>
