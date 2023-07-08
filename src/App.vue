<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const currentRoute = computed(() => useRoute().name)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header/>
    <div class="wrapper">
      <router-view v-slot="{ Component }">
        <Transition mode="out-in">
          <component :is="Component"/>
        </Transition>
      </router-view>
    </div>
    <Transition>
      <Footer v-if="currentRoute !== 'Home'"/>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>