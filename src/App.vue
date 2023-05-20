<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div class="text-white">
    <Header/>
    <div class="wrapper">
      <router-view v-slot="{ Component }">
        <Transition appear mode="out-in">
          <component :is="Component"/>
        </Transition>
      </router-view>
    </div>
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