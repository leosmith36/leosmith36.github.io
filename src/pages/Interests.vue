<script setup>
import InterestsSection from '../components/sections/InterestsSection.vue'
</script>

<template>
  <div>
    <h1 class="header">Interests</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      <InterestsSection to="/running" icon="fa-solid fa-person-running" text="Running"/>
      <InterestsSection to="/reading" icon="fa-solid fa-book" text="Reading"/>
      <InterestsSection to="/learning" icon="fa-solid fa-school" text="Learning"/>
    </div>
  </div>
</template>