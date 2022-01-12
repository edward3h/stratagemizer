<script lang="ts" setup>
defineProps<{stratagems: {value: {faction_id?: string; name: string; type: string; cp_cost: string; legend: string; source_id?: string; description: string}[]}}>()
defineEmits<{
  (e: 'hide', name: string): void
}>()
</script>

<template>
  <div v-if="stratagems.value.length > 0" class="mygrid">
    <Stratagem v-for="stratagem in stratagems.value" :key="stratagem.type + stratagem.name" :stratagem="stratagem" @hide="$emit('hide',$event)" />
  </div>
  <div v-else>
    <h2>Select factions to show stratagems.</h2>
  </div>
</template>
<style>
.mygrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 0.5rem;
  }</style>
