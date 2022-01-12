import { computed, ref } from 'vue'
import stratagems from '~/data/Stratagems.json'
import { factions, superfactions } from '~/data/Factions.json'

const aliases = factions.filter(f => f.alias).reduce((m, f) => m.set(f.name, f.alias), new Map())
const factionMap = factions.reduce((m, f) => m.set(f.name, f), new Map())

const factionMatch = (faction: string, stratagem: { faction_id: string; name: string; type: string; cp_cost: string; legend: string; source_id: string; description: string }) => {
  return stratagem.type && (stratagem.type.startsWith(`${faction} `) || (aliases.get(faction) && stratagem.type.startsWith(`${aliases.get(faction)} `)))
}

const selectedFactions = ref(new Set<string>())

const addFaction = (faction: string) => selectedFactions.value.add(faction)
const removeFaction = (faction: string) => selectedFactions.value.delete(faction)

const hidden = ref(new Set())

const hideStratagem = (name: string) => hidden.value.add(name)
const clearHidden = () => hidden.value.clear()

const factionsFor = (superfaction: string) => factions.filter(f => f.superfaction === superfaction).map(f => f.name)
const subfactionsFor = (faction: string) => factionMap.get(faction).subfactions

const displayStratagems = computed(() => {
  return stratagems.filter((s) => {
    for (const f of selectedFactions.value) {
      if (factionMatch(f, s))
        return true
    }
    return false
  }).filter(s => !hidden.value.has(s.name))
})
const hiddenCount = computed(() => hidden.value.size)

export default {
  superfactions,
  factionsFor,
  subfactionsFor,
  addFaction,
  removeFaction,
  hideStratagem,
  clearHidden,
  displayStratagems,
  selectedFactions,
  hiddenCount,
}
