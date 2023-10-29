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
    console.log(row)

    return { name: parsed[0], date: parsed[1], time: parsed[2] }
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
        <li v-for="{ name, date, time } in races">
          <p><span class="font-bold">{{ name }}</span> ({{ date }}): {{ time }}</p>
        </li>
      </ul>      
    </template>
  </collapsible-section>
</template>