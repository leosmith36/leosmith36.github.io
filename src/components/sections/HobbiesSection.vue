<script setup>
const props = defineProps({
  icon: String,
  text: String,
  path: String
})
</script>

<template>
  <router-link :to="path">
    <div class="flex items-center space-x-5 p-3 bg-white rounded text-black button">
      <font-awesome-icon class="text-2xl" :icon="icon"/>
      <h2>{{ text }}</h2>
    </div>
  </router-link>
</template>