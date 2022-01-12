import type { Stratagem } from './types'

const cleanup = (input: Stratagem[]) => {
  return input.filter(row => row.name)
    .filter((row) => {
      return delete row['']
    })
}

export default cleanup
