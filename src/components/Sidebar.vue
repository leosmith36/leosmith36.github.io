<script setup>
import gsap from 'gsap'
import { ref, watch } from 'vue'

const props = defineProps({
  show: Boolean
})

const pages = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Resumé',
    path: '/resume'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Reading',
    path: '/reading'
  },
  // {
  //   name: 'Contact',
  //   path: '/contact'
  // }
]

const sidebarList = ref([])

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.15,
    onComplete: done
  })
}

watch(() => props.show, value => {
  if (value) setTimeout(() => sidebarList.value = pages)
  else sidebarList.value = []
})
</script>

<template>
  <div>
    <Transition>
      <div v-if="show" class="bg-stone-900 rounded-md px-5 py-2 space-y-2">
        <TransitionGroup
          :css="false"
          @before-enter="onBeforeEnter"
          @enter="onEnter"
          @leave="onLeave"
        >
          <h3 v-for="(page, index) in sidebarList" :key="index" :data-index="index">
            <router-link @click="$emit('clicked')" class="link" :to="page.path">{{ page.name }}</router-link>
          </h3>
        </TransitionGroup>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>