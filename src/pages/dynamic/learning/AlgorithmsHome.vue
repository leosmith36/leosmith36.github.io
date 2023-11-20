<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <ul>
      <li><router-link :key="route.path" to="/learning/algorithms-chapter-one" class="text-link">Chapter 1</router-link></li>
    </ul>
  </div>
</template>