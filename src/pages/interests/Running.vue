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
          <li><a class="text-link" href="https://www.cityoflakeshalfmarathon.com/">City of Lakes Half Marathon</a> (9/8/2024)</li>
          <li><a class="text-link" href="https://www.tcmevents.org/alleventsandraces/medtronictwincitiesmarathonweekend/medtronictwinscitiesmarathon">Medtronic Twin Cities Marathon</a> (10/6/24)</li>
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