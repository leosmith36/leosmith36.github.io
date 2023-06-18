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
      class="flex rounded-t-md items-center bg-white p-3 transition hover:bg-gray-400 hover:cursor-pointer"
    >
      <font-awesome-icon class="w-6 -ml-1 mr-1" :icon="['fa-solid', open ? 'fa-caret-down' : 'fa-caret-right']"/>
      <h2>{{ title }}</h2>
    </div>
    <collapse-transition>
      <div v-show="open" class=" bg-white rounded-b-md">
        <div class="p-3">
          <slot>
            <div class="space-y-2">
              <div v-for="entry in contents">
                <b>{{ entry.title }}</b>
                <div class="flex justify-between">
                  <p><em>{{ entry.site }}</em>, {{ entry.location }}</p>
                  <p><em>{{ entry.dates }}</em></p>
                </div>
                <ul class="list-disc">
                  <li v-for="note in entry.details" v-html="note"/>
                </ul>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>