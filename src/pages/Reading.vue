<script setup>
import { ref, computed, onMounted } from 'vue'

const books = ref({})

onMounted(async () => {
  const bookResponse = await fetch('books.csv')
  const bookCSV = await bookResponse.text()
  
  books.value = bookCSV.split('\n').reduce((prev, current) => {
    const entries = current.split(',')
    const book = {
      title: entries[0],
      author: entries[1],
      published: entries[2],
      read: entries[3],
      rating: entries[4]
    }
    
    if (!prev[book.read]) prev[book.read] = [book]
    else prev[book.read].push(book)
    
    return prev
  }, {})
})

const selectedYear = ref(new Date().getFullYear())
</script>

<template>
  <div>
    <h1>Reading</h1>
    <div class="flex my-2">
      <h3>Books I read in:</h3>
      <select class="ml-3" v-model="selectedYear">
        <option value="2023">2023</option>
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
        <tr v-for="book in books[selectedYear]">
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
