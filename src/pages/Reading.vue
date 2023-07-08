<script setup>
import { ref, computed } from 'vue'

const books = [
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    published: 2021,
    read: 2023,
    rating: 10
  },
  {
    title: 'The Dark Forest',
    author: 'Cixin Liu',
    published: 2008,
    read: 2023,
    rating: 8
  }
]

const selectedYear = ref(2023)

const booksByYear = books.reduce((prev, current) => {
  if (!prev[current.read]) prev[current.read] = [current]
  else prev[current.read].push(current)

  return prev
}, {})

const selectedBooks = computed(() => booksByYear[selectedYear.value])
</script>

<template>
  <div>
    <h1>Reading</h1>
    <div class="flex my-2">
      <h3>Books I read in:</h3>
      <select class="ml-3" v-model="selectedYear">
        <option :value="2023">2023</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year Published</th>
          <th>Year Read</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in selectedBooks">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.published }}</td>
          <td>{{ book.read }}</td>
          <td>{{ `${book.rating}/10` }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
