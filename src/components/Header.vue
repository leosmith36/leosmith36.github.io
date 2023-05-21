<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)
const width = ref(screen.width)

const updateWidth = () => width.value = screen.width

onMounted(() => window.addEventListener('resize', updateWidth))
onBeforeUnmount(() => window.removeEventListener('resize', updateWidth))
</script>

<template>
  <nav>
    <div class="text-white flex max-md:flex-col md:h-16 md:items-center p-5">
      <div class="flex justify-between basis-1/3">
        <router-link to="/">
          <img class="w-32 h-auto" src="../assets/logo.png" alt="Leo Smith Logo"/>
        </router-link>
        <button @click="open = !open" class="md:hidden transition hover:text-gray-600">
          <font-awesome-icon :icon="['fas', open ? 'x' : 'bars']"/>
        </button>
      </div>
      <div class="basis-2/3">
        <collapse-transition>
          <div v-show="open || width >= 768">
            <div class="flex max-md:flex-col max-md:space-y-1 max-md:pt-3">
              <div class="flex max-md:flex-col max-md:text-center basis-1/2 justify-center md:space-x-8">
                <span><router-link class="transition hover:text-gray-600" to="/about">About</router-link></span>
                <span><router-link class="transition hover:text-gray-600" to="/resume">Resumé</router-link></span>
                <span><router-link class="transition hover:text-gray-600" to="/portfolio">Portfolio</router-link></span>
                <span><router-link class="transition hover:text-gray-600" to="/reading">Reading</router-link></span>
                <span><router-link class="transition hover:text-gray-600" to="/contact">Contact</router-link></span>
              </div>
              <div class="flex basis-1/2 md:justify-end max-md:justify-center space-x-4 px-5">
                <a class="transition hover:text-gray-600" href="mailto:leosmith36@yahoo.com"><font-awesome-icon icon="fa-solid fa-envelope"/></a>
                <a class="transition hover:text-gray-600" href="https://www.linkedin.com/in/leomsmith/"><font-awesome-icon icon="fa-brands fa-linkedin"/></a>
                <a class="transition hover:text-gray-600" href="https://www.facebook.com/leosmith36/"><font-awesome-icon icon="fa-brands fa-facebook"/></a>
              </div>
            </div>
          </div>
        </collapse-transition>
      </div>
    </div>
  </nav>
</template>