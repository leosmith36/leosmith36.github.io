<script setup>
import Header from './components/Header.vue'
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
  </div>
</template>

<style scoped>
.wrapper {
  @apply flex-grow;
}

@media only screen and (min-width: 768px) {
  .wrapper {
    margin: 2rem 12%;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper {
    margin: 1rem 2rem;
  }
}
</style>