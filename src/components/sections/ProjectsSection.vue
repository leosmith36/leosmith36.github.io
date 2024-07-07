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
      <div class="p-3 flex justify-center">
        <img :src="image" class="h-40"/>
      </div>
      <div class="mt-auto p-3 w-full border-top border-t-2 border-slate-500 h-20 flex justify-center text-center">
        <h2 class="font-bold self-center">{{ title }}</h2>
      </div>
    </div>
  </router-link>
</template>