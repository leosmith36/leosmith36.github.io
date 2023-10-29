<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <div class="text-black bg-white rounded">
    <div @click="show = !show" class="flex items-center button rounded p-3">
      <div class="w-3 mr-5 flex items-center">
        <font-awesome-icon class="text-2xl" :icon="['fa-solid', show ? 'fa-caret-down' : 'fa-caret-right']"/>
      </div>
      <slot name="head"/>
    </div>
    <collapse :show="show">
      <div class="rounded p-3">
        <slot name="body"/>
      </div>
    </collapse>
  </div>
</template>