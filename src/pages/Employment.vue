<script setup>
import EmploymentSection from '../components/EmploymentSection.vue'
</script>

<template>
  <div>
    <h1 class="mb-3">Employment</h1>
    <h2 class="mb-3 mt-6 italic">Full-Time Jobs</h2>
    <div class="space-y-4">
      <EmploymentSection
        title="Software Engineer 1"
        location="Voxtelesys, Fargo, ND"
        dates="May 2023 - Present"
      >
        <div class="space-y-3">
          <p>
            Voxtelesys is an internet telephony service provier (ITSP) whose products enable voice communication
            for companies of all sizes. In essence, telephony services provided by Voxtelsys allow companies to communicate
            with customers and with other employees by routing calls over the internet instead of using traditional phone lines.
          </p>
          <p>
            At Voxtelesys, I have been heavily involved in several areas, including the customer portal, the support team's HUD,
            and myriad applications on the web and voice stack. Through my work, I have gained experience in a variety of technologies, especially
            Vue.js, Node.js, MariaDB, MongoDB, Docker, C#, and Golang, to name a few.
          </p>
          <p>
            Here are some of my key projects:
            <ul>
              <li>
                <span class="font-bold">Porting Redesign: </span>
                Customers request to port numbers to Voxtelsys by filling out a form with their contact information and the numbers they wish to port.
                In this project, I revamped the porting page in the customer portal by making it more intuitive and adding an LNP check for the requested phone numbers.
                This streamlined the porting process by automatically filtering out non-portable numbers and improving the overall customer experience.
              </li>
              <li>
                <span class="font-bold">Web Service Migrations: </span>
                I migrated the billing and payment web servers from Ruby to Node.js to improve the readability and performance of those applications,
                as well as make them consistent with the rest of the code base. To boost maintanability, I also implemented a robust
                testing framework which helps ensure that future code changes preserve the existing functionality.
              </li>
              <li>
                <span class="font-bold">Batch Depositing: </span>
                I implemented a new database schema which allows accounting to deposit payments by settled batch using the Voxtelesys .NET
                billing application. This feature saved the accounting team quite a bit of time, since they no longer need to manually locate the transactions
                within each batch. While working on this project, I had to ensure that each payment was validated against the payment gateway provider before
                it could be included in a batch.
              </li>
              <li>
                <span class="font-bold">Call Troubleshooting: </span>
                 Previously, customers were unable to troubleshoot calls by downloading the packet captures from the portal, and neither support nor
                 customers were able to easily view the SIP messages in a call. Here, I built a front-end display in the HUD and portal which allows users to
                 view SIP messages in the browser using a ladder diagram, download packet captures, and search for specific calls. In addition, I implemented
                 automated call analysis, which locates any "red flags" in SIP messages that may lead to audio issues.
              </li>
            </ul>
          </p>
        </div>
      </EmploymentSection>
    </div>
    <h2 class="mb-3 mt-6 italic">Internships</h2>
    <div class=space-y-4>
      <EmploymentSection
        title="Software Engineer Intern"
        location="Voxtelesys, Fargo, ND"
        dates="Dec 2022 - May 2023"
      >

      </EmploymentSection>
      <EmploymentSection
        title="Machine Learning Researcher"
        location="Boise State University, Boise, ID"
        dates="May 2022 - Jul 2022"
      >

      </EmploymentSection>
      <EmploymentSection
        title="Organic Chemistry Researcher"
        location="Scripps Research, San Diego, CA"
        dates="Jun 2021 - Aug 2021"
      >

      </EmploymentSection>
    </div>
  </div>
</template>