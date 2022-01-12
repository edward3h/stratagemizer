
export interface Faction {
  name: string
  alias?: string
  superfaction?: string
  subfactions: string[]
}

export interface SubfactionsFile {
  superfactions: string[]
  factions: Faction[]
}

export interface Stratagem {
  name: string
  '': any
}
