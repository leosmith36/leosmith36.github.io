<script setup>
import BookSection from '../../components/sections/BookSection.vue'
</script>

<template>
  <div>
    <h1 class="header">Reading</h1>
    <div class="space-y-3">
      <BookSection title="Books Read in 2023" file="books_2023.csv"/>
      <BookSection title="Books Read in 2024" file="books_2024.csv"/>
    </div>
  </div>
</template>