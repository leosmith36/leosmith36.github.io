<script setup>
import ResumeSection from '../components/ResumeSection.vue'
import { ref } from 'vue'

const educationContents = ref([
  {
    title: 'Bachelor of Arts in Mathematics and ACS Chemistry',
    site: 'Concordia College',
    location: 'Moorhead, MN',
    dates: 'Aug 2018 - May 2023',
    details: [
      "Honors: <em>summa cum laude</em> (4.0 GPA), Dean's List (9 semesters)",
      'Minors: Biology, Environmental Studies',
      'Extracurriculars: Cross Country, Track & Field, Student Government'
    ] 
  }
])

const jobContents = ref([
  {
    title: 'Software Developer',
    site: 'Voxtelesys',
    location: 'Fargo, ND',
    dates: 'May 2023 - Present'
  }
])

const internshipContents = ref([
  {
    title: 'Software Developer Intern',
    site: 'Voxtelesys',
    location: 'Fargo, ND',
    dates: 'Dec 2022 - May 2023'
  },
  {
    title: 'Machine Learning Researcher',
    site: 'Boise State University',
    location: 'Boise, ID',
    dates: 'May 2022 - July 2022'
  },
  {
    title: 'Organic Chemistry Researcher',
    site: 'Scripps Research',
    location: 'San Diego, CA',
    dates: 'June 2021 - Aug 2021'
  }
])
</script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <h1>Resumé</h1>
      <a href="/resume.pdf" download class="px-4 button flex items-center">Download</a>
    </div>
    <div class="space-y-4">
      <ResumeSection title="Education" :contents="educationContents"/>
      <ResumeSection title="Work Experience" :contents="jobContents"/>
      <ResumeSection title="Internships" :contents="internshipContents"/>
      <ResumeSection title="Relevant Coursework">
        <ul class="list-disc grid grid-cols-2">
          <li>Real Analysis (MATH 330, Spring 2023)</li>
          <li>Modern Algebra (MATH 325, Fall 2022)</li>
          <li>Probability and Statistics (MATH 315, Fall 2022)</li>
          <li>Operations Research (MATH/CS 335, Fall 2022)</li>
          <li>Data Structures and Algorithms (CSCI 161, Fall 2022)</li>
          <li>Linear Algebra (MATH 210, Spring 2022)</li>
        </ul>
      </ResumeSection>
      <ResumeSection title="Skills">
        <ul class="list-disc">
          <li>
            Programming languages:
            <ul class="list-circle">
              <li>Javascript (full-stack web development)</li>
              <li>C# (application development)</li>
              <li>Python (machine learning)</li>
              <li>Java (school and personal projects)</li>
              <li>R (school and research)</li>
            </ul>
          </li>
          <li>Databases: MariaDB, MongoDB</li>
          <li>Frameworks: Vue.js, Node.js</li>
          <li>Container management: Docker & Kubernetes</li>
          <li>DevOps: GitLab</li>
          <li>Operating systems: Ubuntu, Windows</li>
        </ul>
      </ResumeSection>
    </div>
  </div>
</template>