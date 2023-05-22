<script setup>
import ResumeSection from '../components/ResumeSection.vue'
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <h1>Resumé</h1>
      <a href="/resume.pdf" download class="px-4 button flex items-center">
        Download
      </a>
    </div>
    <div class="space-y-4">
      <ResumeSection title="Education">
        <b>Bachelor of Arts in Mathematics and ACS Chemistry</b>
        <div class="flex justify-between">
          <p><em>Concordia College</em>, Moorhead, MN</p>
          <p><em>Aug 2018 - May 2023</em></p>
        </div>
        <ul class="list-disc pl-5">
          <li>Honors: <em>summa cum laude</em> (4.0 GPA), Dean's List (9 semesters)</li>
          <li>Minors: Biology, Environmental Studies</li>
          <li>Extracurriculars: Cross Country, Track & Field, Student Government</li>
        </ul>
      </ResumeSection>
      <ResumeSection title="Full-Time Jobs">
        <b>Software Developer</b>
        <p><em>Voxtelesys</em>, Fargo, ND</p>
      </ResumeSection>
      <ResumeSection title="Internships">
        <b>Software Developer Intern</b>
        <p><em>Voxtelesys</em>, Fargo, ND</p>
      </ResumeSection>
      <ResumeSection title="Relevant Coursework"/>
      <ResumeSection title="Skills"/>
    </div>
  </div>
</template>