<script setup>
const props = defineProps({
  title: String,
  location: String,
  dates: String,
  disabled: Boolean
})
</script>

<template>
  <collapsible-section :disabled="disabled">
    <template #head>
      <div class="md:flex items-center w-full select-none">
        <div>
          <h2 class="font-bold">{{ title }}</h2> 
          <h3 class="italic">{{ location }}</h3> 
        </div>
        <h3 class="ml-auto">{{ dates }}</h3>
      </div>
    </template>
    <template #body>
      <slot/>
    </template>
  </collapsible-section>
</template>