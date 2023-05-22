<script setup>
const props = defineProps({
  title: String
})
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>