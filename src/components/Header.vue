<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'
</script>

<template>
  <nav mx-auto text-xl flex gap-2>
    <h1 flex-grow text-center>
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
      h-7
    />
  </nav>
</template>
