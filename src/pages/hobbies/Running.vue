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
          <li><a class="text-link" href="https://madisonmarathon.org/">Madison Marathon</a> (11/12/23)</li>
          <li>Cobber Open 1-mile and 3K (1/19/23)</li>
          <li>UND Open 5K (1/26/23)</li>
          <li>UND Tune-Up 5K (2/17/23)</li>
          <li>Al Bortke Open 5K or 10K (3/30/23)</li>
          <li><a class="text-link" href="https://fargomarathon.com/">Fargo Marathon</a> (6/1/24)</li>
          <li>Twin Cities Marathon (10/6/24)</li>
          <li>Boston Marathon (4/15/24)</li>
        </ul>
      </div>
      <div class="space-y-2">
        <h2>Past Races</h2>
        <RunningSection title="Races in 2023" file="races_2023.csv"/>
      </div>
    </div>
  </div>
</template>