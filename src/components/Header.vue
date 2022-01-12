<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
defineProps<{
  disableMenuOpen: boolean
  isMenuOpen: boolean
}>()
defineEmits<{(e: 'menuClick'): void}>()
</script>

<template>
  <nav mx-auto text-xl flex gap-2>
    <button class="icon-btn" :disabled="disableMenuOpen" @click="$emit('menuClick')">
      <div v-if="isMenuOpen" i-carbon-minimize />
      <div v-else i-carbon-menu />
    </button>
    <h1 flex-grow text-center text-2xl font-black>
      Stratagemizer
    </h1>
    <button class="icon-btn !outline-none" @click="toggleDark()">
      <div v-if="isDark" i-carbon-moon />
      <div v-else i-carbon-sun />
    </button>

    <a
      class="icon-btn"
      i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/edward3h/stratagemizer"
      target="_blank"
      title="GitHub"
      h-8
    />
  </nav>
</template>
