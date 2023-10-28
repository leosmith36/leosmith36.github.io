<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  location: String,
  dates: String
})

const show = ref(false)
</script>

<template>
  <div class="text-black bg-white rounded">
    <div @click="show = !show" class="flex items-center button rounded p-3">
      <div class="w-3">
        <font-awesome-icon class="text-2xl" :icon="['fa-solid', show ? 'fa-caret-down' : 'fa-caret-right']"/>
      </div>
      <div class="md:flex items-center ml-5 w-full">
        <div>
          <h2 class="font-bold">{{ title }}</h2> 
          <h3 class="italic">{{ location }}</h3> 
        </div>
        <h3 class="ml-auto">{{ dates }}</h3>
      </div>
    </div>
    <collapse :show="show">
      <div class="rounded p-3">
        <slot/>
      </div>
    </collapse>
  </div>
</template>