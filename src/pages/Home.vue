<template>
  <Transition class="text-center">
    <div>
      <div class="text-7xl font-black">Leo Smith</div>
      <div class="text-2xl my-2">Software engineer.</div>
    </div>
  </Transition>
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