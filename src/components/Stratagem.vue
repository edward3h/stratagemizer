<script lang="ts" setup>
defineProps<{stratagem: {faction_id?: string; name: string; type: string; cp_cost: string; legend: string; source_id?: string; description: string}}>()
defineEmits<{(event: 'hide', name: string): void}>()
</script>

<template>
  <div class="min-w-1/3" border rounded-xl relative>
    <div text-lg bg-gray-100 dark:bg-gray-900 flex p-4 rounded-t-xl>
      <div
        font-bold
        text-left
        flex-grow
      >
        {{ stratagem.name }}
      </div>
      <div>
        {{ stratagem.cp_cost }}
      </div>
    </div>
    <div clear-both p-4 text-justify v-html="stratagem.description" />
    <div absolute bottom-2 right-2 hover:text-red-600 i-carbon-close hover:i-carbon-close-filled @click="$emit('hide', stratagem.name)">
      X
    </div>
  </div>
</template>
<style>
.kwb {font-family: fantasy;}
</style>
