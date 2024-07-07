<script setup>
import ProjectsSection from '../components/sections/ProjectsSection.vue'
</script>

<template>
  <div>
    <h1 class="header">Projects</h1>
    <div class="grid grid-cols-2 gap-4md:grid-cols-3 lg:grid-cols-4 gap-8">
      <ProjectsSection title="Portfolio Website" path="/portfolio-website" image="portfolio.png"/>
      <ProjectsSection title="Cyclic Voltammetry Simulator" path="/cv-simulator" image="cv_sim.png"/>
    </div>
  </div>
</template>