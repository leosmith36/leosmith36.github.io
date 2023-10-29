<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: String,
  file: String
})

const books = ref([])

onMounted(async () => {
  const file = await fetch('books_2023.csv')
  const fileText = await file.text()
  
  books.value = fileText.split('\n').map(row => {
    const parsed = row.split(',')

    return { title: parsed[0], author: parsed[1], year: parsed[2] }
  })
})
</script>

<template>
  <collapsible-section>
    <template #head>
      <h2>{{ title }}</h2>
    </template>
    <template #body>
      <ul>
        <li v-for="{ title, author, year } in books">
          <p><span class="font-bold">{{ title }}</span>, <span class="italic">{{ author }}</span>, {{ year }}</p>
        </li>
      </ul>      
    </template>
  </collapsible-section>
</template>