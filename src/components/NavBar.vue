<template>
  <nav class="flex flex-col text-lg">
    <RouterLink
      to="/"
      class="hover:bg-indigo-100 hover:text-indigo-600 p-4 transition-colors duration-300"
    >
      Home
    </RouterLink>

    <RouterLink
      to="/width-height"
      class="hover:bg-indigo-100 hover:text-indigo-600 p-4 transition-colors duration-300"
    >
      Width Height
    </RouterLink>

    <RouterLink
      to="/margin-padding"
      class="hover:bg-indigo-100 hover:text-indigo-600 p-4 transition-colors duration-300"
    >
      Margin Padding
    </RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
