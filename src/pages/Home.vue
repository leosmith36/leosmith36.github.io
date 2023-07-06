<script setup>
import { ref } from 'vue'
import Typewriter from '../components/Typewriter.vue'

const text = ref([
  { text: 'I am a ' },
  {
    text: 'software developer',
    color: true,
  },
  { text: ' who lives in West Fargo, ND and works for ' },
  {
    text: 'Voxtelesys',
    color: true
  },
  { text: '.' }
])

</script>

<template>
  <div class="relative text-white">
    <div class="absolute md:top-16 md:left-24 md:w-2/3">
      <Transition>
        <div>
          <div class="text-5xl mb-3">Hi, I'm <b class="text-lime-300">Leo Smith</b>.</div>
          <div class="text-3xl">
            <Typewriter :text="text" :delay="2000"/>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active {
  transition: opacity 2s ease, transform 2s ease;
}
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  transform: translateY(+10rem);
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
</style>