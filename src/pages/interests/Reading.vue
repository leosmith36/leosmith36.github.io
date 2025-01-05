<script setup>
  import BookSection from '../../components/sections/BookSection.vue'
  import { onMounted, ref } from 'vue'

  const books = ref([])

  onMounted(async () => {
    const res = await fetch(`${location.origin}/api/v1/books`)

    books.value = await res.json()
  })
</script>

<template>
  <div>
    <h1 class="header">Reading</h1>
    <div class="space-y-3">
      <BookSection title="Books Read in 2023" :books="books" year="2023" />
      <BookSection title="Books Read in 2024" :books="books" year="2024" />
      <BookSection title="Books Read in 2025" :books="books" year="2025" />
    </div>
  </div>
</template>
