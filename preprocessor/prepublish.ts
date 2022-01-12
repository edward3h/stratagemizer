/// <reference types="../typings/xhr2" />
import './env'
import fs from 'fs'
import assert from 'assert'
import xhr2 from 'xhr2'
import papa from 'papaparse'
import yaml from 'js-yaml'
import convert from './convert'
import cleanup from './cleanup'
import type { Stratagem, SubfactionsFile } from './types'
global.XMLHttpRequest = xhr2.XMLHttpRequest

const httpPrefix = process.env.DATA_PREFIX
assert.ok(httpPrefix, 'DATA_PREFIX must be configured in .env')

const outputPrefix = 'src/data'
fs.mkdirSync(outputPrefix, { recursive: true })

const dataAssets = ['Stratagems']

dataAssets.forEach((filename) => {
  papa.parse(`${httpPrefix}/${filename}.csv`, {
    download: true,
    header: true,
    skipEmptyLines: 'greedy',
    transformHeader: s => s.trim(),
    transform: convert,
    complete: (results) => {
      const rows = results.data as Stratagem[]
      fs.writeFileSync(`${outputPrefix}/${filename}.json`, JSON.stringify(cleanup(rows), null, 2))
    },
  })
})

const sf = yaml.load(fs.readFileSync('preprocessor/subfactions.yml', 'utf-8')) as SubfactionsFile
sf.factions.forEach((f) => {
  f.superfaction ||= 'Other'
  f.subfactions ||= []
})
fs.writeFileSync(`${outputPrefix}/Factions.json`, JSON.stringify(sf, null, 2))
