<script setup>
import { ref } from 'vue'
import Typewriter from '../components/Typewriter.vue'

const text = ref([
  'A ',
  'software developer',
  ' from Fargo, North Dakota whose goal is to solve real-life problems by writing ',
  'robust',
  ', ',
  'efficient',
  ', and ',
  'elegant',
  ' code.'
])

const options = ref({
  1: { transitionClass: 'color-transition-lime' },
  3: { transitionClass: 'color-transition-lime' },
  5: { transitionClass: 'color-transition-lime' },
  7: { transitionClass: 'color-transition-lime' }
})

</script>

<template>
  <div class="relative text-white">
    <div class="absolute md:top-16 md:left-24 md:max-lg:w-2/3 lg:w-1/2">
      <Transition>
        <div>
          <div class="text-5xl mb-3">Hi, I'm <b style="color: #A3DE83;">Leo Smith</b>.</div>
          <div class="text-3xl">
            <Typewriter :text="text" :options="options" :delay="1200" :speed="60"/>
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