<script setup>
import HobbiesSection from '../components/sections/HobbiesSection.vue'
</script>

<template>
  <div>
    <h1 class="header">Hobbies</h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
      <HobbiesSection to="/running" icon="fa-solid fa-person-running" text="Running"/>
      <HobbiesSection to="/reading" icon="fa-solid fa-book" text="Reading"/>
    </div>
  </div>
</template>