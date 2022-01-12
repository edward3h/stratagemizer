<script setup lang="ts">
const props = defineProps<{
  superfactions: string[]
  factionsFor: (f: string) => string[]
  subfactionsFor: (f: string) => string[]
  addFaction: (f: string) => void
  removeFaction: (f: string) => void
  clearHidden: () => void
  selectedFactions: Set<string>
  hiddenCount: number
  disableClearAll: boolean
  clearAll: () => void
  isMenuOpen: boolean
}>()

const open = ref(new Set<string>())

const toggleOpen = (checked: boolean, faction: string) => {
  if (checked)
    open.value.add(faction)
  else
    open.value.delete(faction)
}

const toggleFaction = (checked: boolean, faction: string) => {
  if (checked)
    props.addFaction(faction)

  else
    props.removeFaction(faction)
}

const isChecked = (faction: string) => props.selectedFactions.value.has(faction)
const noHidden = computed(() => props.hiddenCount.value < 1)
</script>
<template>
  <div v-if="isMenuOpen.value">
    <h1>Choose Factions</h1>
    <Collapse v-for="sf in superfactions" :key="sf" :title="sf" :is-open="open.has(`SF_${sf}`)" stripe @change="toggleOpen($event, `SF_${sf}`)">
      <Collapse v-for="f in factionsFor(sf)" :key="f" :title="f" :is-open="open.has(f)" stripe @change="toggleOpen($event, f)">
        <template #title>
          <Checkbox p-l-2 :checked="isChecked(f)" @change="toggleFaction($event, f)" />
        </template>
        <template #default>
          <div v-for="sub in subfactionsFor(f)" :key="sub" flex w-auto stripe>
            <div flex-grow>
              {{ sub }}
            </div> <Checkbox p-l-2 :checked="isChecked(sub)" @change="toggleFaction($event, sub)" />
          </div>
        </template>
      </Collapse>
    </Collapse>
    <button block btn w-auto :disabled="noHidden" @click="clearHidden">
      Show {{ hiddenCount }} hidden.
    </button>
    <button block btn w-auto :disabled="disableClearAll.value" @click="clearAll">
      Clear all selections.
    </button>
  </div>
</template>
