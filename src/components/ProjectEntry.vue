<script setup>
const props = defineProps({
  title: String,
  description: String,
  path: String
})
</script>

<template>
  <div>
    <div>
      <h2><router-link :to="path">{{ title }}</router-link></h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>