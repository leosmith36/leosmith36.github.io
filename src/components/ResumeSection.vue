<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String
})

const open = ref(false)
</script>

<template>
  <div class="text-black">
    <div @click="open = !open" :class="{ 'rounded-b-md': !open }" class="flex rounded-t-md items-center bg-white p-3 transition hover:bg-gray-400 hover:cursor-pointer">
      <font-awesome-icon class="mr-2" :icon="['fa-solid', open ? 'fa-caret-down' : 'fa-caret-right']"/>
      <h2>{{ title }}</h2>
    </div>
    <collapse-transition>
      <div v-show="open" class=" bg-white rounded-b-md">
        <div class="p-3">
          TEST
        </div>
      </div>
    </collapse-transition>
  </div>
</template>