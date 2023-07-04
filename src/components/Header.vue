<script setup>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'

const collapsed = ref(true)

function toggleSidebar() {
  collapsed.value = !collapsed.value
}
</script>

<template>
  <div>
    <header>
      <nav>
        <div class="flex pt-5 px-5 pb-2 justify-between">
          <router-link to="/">
            <img class="w-32 h-auto" src="../assets/logo.png" alt="Leo Smith Logo"/>
          </router-link>
          <button class="text-inherit link" type="button" @click="toggleSidebar">
            <font-awesome-icon :icon="['fas', collapsed ? 'bars' : 'x']"/>
          </button>
        </div>
      </nav>
    </header>
    <Sidebar :show="!collapsed" class="absolute right-0 mr-2"/>
  </div>
</template>