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
          <li>SDSU Indoor Classic (2/9/24)</li>
          <li><a class="text-link" href="https://www.tcmevents.org/alleventsandraces/getingear">Get In Gear Half Marathon</a> (4/29/24)</li>
          <li><a class="text-link" href="https://fargomarathon.com/">Fargo Marathon</a> (6/1/24)</li>
          <li><a class="text-link" href="https://www.tcmevents.org/alleventsandraces/medtronictwincitiesmarathonweekend/tc10mile">Medtronic Twin Cities</a> 10 Mile (10/6/24)</li>
          <li><a class="text-link" href="https://monumentalmarathon.com/">Indianapolis Monumental Marathon</a> (11/9/24)</li>
          <li>Boston Marathon (4/15/24)</li>
        </ul>
      </div>
      <div class="space-y-2">
        <h2>Past Races</h2>
        <RunningSection title="Races in 2023" file="races_2023.csv"/>
        <RunningSection title="Races in 2024" file="races_2024.csv"/>
      </div>
    </div>
  </div>
</template>