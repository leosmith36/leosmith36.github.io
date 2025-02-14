<script setup>
import EmploymentSection from '../components/sections/EmploymentSection.vue'
</script>

<template>
  <div>
    <div class="md:flex justify-between header max-md:space-y-3">
      <h1>Employment</h1>
      <div><a class="bg-white rounded text-black p-2 button font-bold" href="resume.pdf" download>Download Resume</a></div>
    </div>
    <h2 class="mb-3 mt-6 italic">Full-Time Jobs</h2>
    <div class="space-y-4">
      <EmploymentSection
        title="Software Engineer"
        location="Voxtelesys, Fargo, ND"
        dates="May 2023 - Present"
      >
        <div class="space-y-3">
          <p><b>Titles held:</b> Software Engineer 1 (May 2023 - Dec 2023), Software Engineer 2 (Dec 2023 - Present)</p>
          <p>
            Voxtelesys is an internet telephony service provier (ITSP) whose products enable communication
            for companies of all sizes. In essence, the services provided by Voxtelsys allow companies to communicate
            with customers and with other employees by routing calls over the internet instead of traditional phone lines.
          </p>
          <p>
            My work at Voxtelesys involves maintaining and improving numerous projects across the company's technology stack, especially websites such as the customer portal and company HUD.
            For most of my time at Voxtelesys, my focus has been on the billing and payment web servers, where I have implemented optimizations and features to serve the needs
            of the accounting team. More recently, my work has shifted towards expanding the programmable voice and messaging applications offered by Voxtelesys.
          </p>
          <p>
            Here are some of my key projects:
            <ul>
              <li>
                <span class="font-bold">Porting Redesign: </span>
                Customers usually request to port numbers to Voxtelsys by filling out a form with their contact information and the numbers they wish to port.
                In this project, I revamped the porting page in the customer portal by making it more intuitive and adding a local number portability (LNP)
                check for the requested phone numbers. This project streamlined the porting process by automatically filtering out non-portable numbers
                and improving the overall customer experience.
              </li>
              <li>
                <span class="font-bold">Web Service Migrations: </span>
                I migrated the billing and payment web servers to Node.js to improve the readability and performance of those applications,
                as well as make them consistent with the rest of the code base. To boost maintainability, I implemented a robust
                testing framework for these applications which helps ensure that future code changes preserve the existing functionality.
                I also rewrote the database procedures to be more efficient and introduced concurrency using BullMQ as a job queueing system. Altogether, this overhaul resulted in
                the time for monthly billing being cut in half, from ~3 hours to ~1.5 hours.
              </li>
              <li>
                <span class="font-bold">Call Analysis: </span>
                Previously, customers were unable to troubleshoot calls by downloading the packet captures from the portal, and neither support nor
                customers were able to easily view the SIP messages in a call. I built a front-end display with Vue.js for customers and support which allows users to
                view SIP messages in the browser using a ladder diagram, download packet captures, and search for specific calls. In addition, I implemented
                an automated call analysis feature, which locates and displays "red flags" in SIP messages that may lead to audio issues.
              </li>
              <li>
                <span class="font-bold">Dynamic E911: </span>
                  Leading up to this project, geolocations for 911 numbers were always associated with the phone number itself. However, many customers desired the ability to use the same 911 number
                  in different locations, such as floors of a hotel. To address this problem, I implemented the ability to route 911 calls on a per-call basis by augmenting our SIP proxy servers to accept 
                  geolocation information as an input. This project required writing code in a C-like language and developing a wide variety of unit tests to test several edge cases.
              </li>
              <li>
                <span class="font-bold">One-Time Charges: </span>
                One of my most impactful contributions to Voxtelesys was one-time charges, which is a framework that I designed for adding one-off charges onto customers' recurring invoices. This
                framework obviated the need for accounting to create one-off invoices every time a phone number, PBX line, etc. had to be purchased. This project was full-stack, in that it involved creating
                a relational database architecture, a back-end system for processing charges, and a user interface for viewing and managing charges.
              </li>
              <li>
                <span class="font-bold">Flow Builder: </span>
                One of my favorite projects at Voxtelesys was the Flow Builder, which is a drag-and-drop user interface for building communication flows without writing a single line of code.
                I was a key player in the design and implementation of both the Flow Builder UI and the web server for processing executions of flows.
              </li>
              <li>
                <span class="font-bold">3CX Licensing: </span>
                  3CX licensing constitutes a significant portion of the business at Voxtelesys, and previously, all 3CX licensing ordering was done internally. So, I developed a user interface that
                  allowed customers to purchase and renew 3CX licenses in the customer portal. This project also involves reworking and expanding the billing system for 3CX licenses, since a lot of business logic 
                  (such as agent discounts) had to be accounted for as well.
              </li>
              <li>
                <span class="font-bold">Answering Machine Detection: </span>
                  Many of our competitors' programmable voice products include answering machine detection, a feature that allows users to control an IVR call based on whether the call was answered by a machine or human.
                  I successfully implemented this feature into the IVR system offered by Voxtelesys, thus bringing the company closer to parity with competitors' offerings. Implementing this feature required writing Go code to 
                  stream audio to a third-party provider and then listen for results that indicate whom the call was answered by.
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
            Validating addresses is one of the first things support does when adding new customers. I utilized with Google's address
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
        I then developed Python scripts to train neural networks on these images to predict their parameters.
      </EmploymentSection>
      <EmploymentSection
        title="Organic Chemistry Researcher"
        location="Scripps Research, San Diego, CA"
        dates="Jun 2021 - Aug 2021"
      >
        At Scripps, I participated in an NSF-funded Summer Undergraduate Research Fellowship (SURF) in the Shenvi lab. This research took place in
        the field of organic synthesis, where I assisted with developing a synthesis route for a potentially therapeutic alkaloid molecule. I utilized
        several synthesis and analysis techniques in organic chemistry, such as thin layer chromatography (TLC), column chromatography, 
        nuclear magnetic resonance (NMR), and liquid chromatography with mass spectrometry (LCMS). My biggest accomplishment at Scripps was the optimization
        of a Suzuki coupling reaction which helped produce a key intermediate for the target molecule.
      </EmploymentSection>
    </div>
  </div>
</template>