<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: String,
  file: String
})

const races = ref([])

onMounted(async () => {
  const file = await fetch(props.file)
  const fileText = await file.text()
  
  races.value = fileText.split('\n').map(row => {
    const parsed = row.split(',')

    const [name, date, time, place, url] = parsed

    return { name, date, time, place, url }
  })
})
</script>

<template>
  <collapsible-section class="md:w-2/3">
    <template #head>
      <h2>{{ title }}</h2>
    </template>
    <template #body>
      <ul>
        <li v-for="{ name, date, time, place, url } in races">
          <p><a class="text-link-dark" :href="url">{{ name }}</a> ({{ date }}): {{ time }}, {{ place }} place</p>
        </li>
      </ul>      
    </template>
  </collapsible-section>
</template>