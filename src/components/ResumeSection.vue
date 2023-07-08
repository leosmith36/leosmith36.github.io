<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  contents: Array
})

const open = ref(false)
</script>

<template>
  <div class="text-black">
    <div
      @click="open = !open"
      :class="{ 'rounded-b-md': !open }"
      class="flex rounded-t-md items-center p-3 bg-lime-300 transition hover:bg-lime-800 hover:cursor-pointer"
    >
      <font-awesome-icon class="w-6 -ml-1 mr-1" :icon="['fa-solid', open ? 'fa-caret-down' : 'fa-caret-right']"/>
      <h2>{{ title }}</h2>
    </div>
    <collapse :show="open">
      <div class="bg-gray-300 rounded-b-md">
        <div class="p-3">
          <slot>
            <div class="space-y-2">
              <div v-for="entry in contents">
                <b>{{ entry.title }}</b>
                <div class="flex md:justify-between max-md:flex-col">
                  <span><em>{{ entry.site }}</em>, {{ entry.location }}</span>
                  <span><em>{{ entry.dates }}</em></span>
                </div>
                <ul class="list-disc">
                  <li v-for="note in entry.details" v-html="note"/>
                </ul>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </collapse>
  </div>
</template>