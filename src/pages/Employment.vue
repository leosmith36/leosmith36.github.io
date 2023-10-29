<script setup>
import EmploymentSection from '../components/sections/EmploymentSection.vue'
</script>

<template>
  <div>
    <div class="md:flex justify-between header max-md:space-y-3">
      <h1>Employment</h1>
      <div><a class="bg-white rounded text-black p-2 button" href="resume.pdf" download>Download Resume</a></div>
    </div>
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
                In this project, I revamped the porting page in the customer portal by making it more intuitive and adding a local number portability (LNP)
                check for the requested phone numbers. This project streamlined the porting process by automatically filtering out non-portable numbers
                and improving the overall customer experience.
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
                billing application. This feature saved the accounting team quite a bit of time, since they no longer needed to manually locate the transactions
                within each batch. While working on this project, I had to ensure that each payment was validated against the payment gateway provider before
                it was associated with a batch.
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
      <div class="space-y-3">
        An an intern at Voxtelesys, I engaged in several projects at Voxtelesys that streamlined many of the daily activites
        of the accounting and support teams. To name a few:
        <ul>
          <li>
            <span class="font-bold">Customer Payment Notices: </span>
            Previously, accounting had been manually notifying customers who have not paid off their outstanding balances. I created a new
            front-end component which displays customers that have outstanding balances, and this component allows accounting to send
            late payment notices to customers from the browser by simply selecting which customers to notify.
          </li>
          <li>
            <span class="font-bold">Address Validation: </span>
            Validating addresses is one of the first things support does when adding new customers. I integrated the HUD with Google's address
            validation API to streamline the process of validating an address before adding it to an account.
          </li>
          <li>
            <span class="font-bold">Call Authorization: </span>
            Due to varying costs, not all customers want to be able to call every region of every country. So, calls need to have their destination authorized before
            they can be routed. Here, I reworked the database authorization schema to make it more flexible to customers' needs, so that customers are only
            able to call the regions with costs that fit their business model.
          </li>
        </ul>
      </div>
      </EmploymentSection>
      <EmploymentSection
        title="Machine Learning Researcher"
        location="Boise State University, Boise, ID"
        dates="May 2022 - Jul 2022"
      >
        At Boise State, I was part of an NSF-funded Research Experience for Undergraduates (REU), in the field of computational materials science.
        I was involved in the Mamivand lab, where I employed machine learning to predict material properties from microstructure images.
        Specifically, I investigated the effects of several parameters on a process called spinodal decomposition, which is used to strengthen
        metal alloys. I used computing clusters to run simulations to create microstructure images, and once I had a large enough image dataset,
        I developed Python scripts to train neural networks on these images to predict their parameters.
      </EmploymentSection>
      <EmploymentSection
        title="Organic Chemistry Researcher"
        location="Scripps Research, San Diego, CA"
        dates="Jun 2021 - Aug 2021"
      >
        At Scripps, I participated in an NSF-funded Summer Undergraduate Research Fellowship (SURF) in the Shenvi lab. This research took place in
        the field of organic synthesis, where I assisted with developing a synthesis route for an potentially therapeutic alkaloid molecule. I utilized
        several synthesis and analysis techniques in organic chemistry, such as thin layer chromatography (TLC), column chromatography, 
        nuclear magnetic resonance (NMR), and liquid chromatography with mass spectrometry (LCMS). My biggest accomplishment at Scripps was the optimization
        of a Suzuki coupling reaction which helped produce a key intermediate for the target molecule.
      </EmploymentSection>
    </div>
  </div>
</template>