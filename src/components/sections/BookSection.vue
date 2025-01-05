<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    title: String,
    year: Number,
    books: Array,
  })

  const books = computed(() => {
    if (!props.books) return []

    return props.books.reduce((acc, row) => {
      if (String(row.year_read) !== String(props.year)) {
        return acc
      }

      acc.push({
        title: row.name,
        author: row.author,
        year: row.year_published,
      })

      return acc
    }, [])
  })
</script>

<template>
  <collapsible-section class="md:w-2/3">
    <template #head>
      <h2>{{ title }}</h2>
    </template>
    <template #body>
      <ul>
        <li v-for="{ title, author, year } in books">
          <p>
            <span class="font-bold">{{ title }}</span
            >, <span class="italic">{{ author }}</span
            >, {{ year }}
          </p>
        </li>
      </ul>
    </template>
  </collapsible-section>
</template>
