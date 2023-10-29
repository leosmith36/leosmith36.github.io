<script setup>
import RunningSection from '../../components/sections/RunningSection.vue'
</script>

<template>
  <div>
    <h1 class="header">Running</h1>
    <div class="space-y-3">
      <div class="space-y-2">
        <h2>Upcoming Races:</h2>
        <ul>
          <li>Madison Marathon (11/12/23)</li>
        </ul>
      </div>
      <div class="space-y-2">
        <h2>Past Races</h2>
        <RunningSection title="Races in 2023" file="races_2023.csv"/>
      </div>
    </div>
  </div>
</template>