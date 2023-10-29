<script setup>
defineProps({
  title: String,
  path: String,
  image: String
})
</script>

<template>
  <router-link :to="path">
    <div class="flex flex-col aspect-square bg-white text-black rounded transition hover:scale-105 hover:cursor-pointer">
      <div class="p-3">
        <img :src="image"/>
      </div>
      <div class="mt-auto text-center p-3 w-full border-top border-t-2 border-slate-500">
        <h2 class="font-bold">{{ title }}</h2>
      </div>
    </div>
  </router-link>
</template>