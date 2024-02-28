<template>
  <div>
    <DefaultLayout>
      <div class="px-20 pt-20 mt-5 py-5 bg-sky-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
        <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path
                d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
              ></path>
            </svg>
            <p>Home</p>
            <p>/ Services</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-sky-800">/ Matrimony Service</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-sky-800 text-4xl font-bold"> Matrimony Service </h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full px-20 pl-28 py-5 flex justify-between gap-5">
        <div class="space-y-8 w-3/4">
          <div class="bg-white px-8 py-5 mt-5 gap-5 rounded-lg">
            <p>
              <span class="font-semibold"
                >IDL-Masjid presents a new matrimony program to help those in the community wishing
                to get married</span
              >. To provide that program, we have partnered with a non-profit that is dedicated to
              the institution of marriage in the Muslim communities:
              <a class="text-sky-500" href="https://www.muslimmatrimonynetwork.org/"
                >Muslim Matrimony Network.</a
              >
            </p>
          </div>
          <div class="bg-white px-8 py-5 mt-10 gap-5 rounded-lg">
            <h1 class="text-3xl underline space-y-8">FEES AND PROCESS</h1>
            <p class="mt-5">
              Fees are kept minimal to be affordable to everyone. There is a one-time non-refundable
              $100 registration fee. There are no monthly fees so singles can stay in our database
              and work with a dedicated matchmaker until they get married. The only requirement to
              stay is to be serious about marriage and to be responsive.
            </p>
            <p class="mt-5">
              Once there is a match where both parties are interested, the matchmakers will arrange
              a conference call between the two singles to help them get introduced and ask their
              most important questions first to establish compatibility for marriage. The
              matchmakers will be on the conference call with both singles to offer their guidance
              and support. There is a modest fee of $25 per half hour for the conference calls.
            </p>
            <p class="mt-5">
              If the conference call(s) go well, the singles can move forward to the contact
              exchange step where the matchmakers will hand it off to the families and continue to
              get updates from both parties to ensure everything is going in the right direction
              insha’Allah. There is a modest fee of $100 for the final contact exchange.
            </p>
          </div>
          <div class="bg-white px-8 py-5 mt-10 gap-5 rounded-lg">
            <h1 class="text-3xl underline space-y-8">TO REGISTER</h1>
            <p>
              The first step is to complete the 5 minute registration at:
              <a class="text-sky-500" href="https://www.muslimmatrimonynetwork.org/"
                >IDL-Masjid Matrimony Program Registration..</a
              >
            </p>
          </div>
          <div class="bg-white px-8 py-5 mt-10 gap-5 rounded-lg">
            <h1 class="text-3xl underline space-y-8">ONCE YOU RESIGTER</h1>
            <div class="mt-10 ml-2">
              <ol class="list-decimal list-inside text-l">
                <li>You will pay the $100 non-refundable registration fee.</li>
                <li>
                  After you pay, you will be able to login and finish your marriage profile by
                  uploading 4-5 pictures and answering a questionnaire.
                </li>
                <li>
                  Once you finish your profile, you can schedule a time with the registration
                  specialist to go over your profile together.
                </li>
                <li>
                  After that, you will be assigned a dedicated matchmaker to work with. Each month
                  you can reach out to your matchmaker to go over potentianl matches and provide
                  your feedback over the phone.
                </li>
              </ol>
            </div>
          </div>
          <div class="bg-white px-8 py-5 mt-10 gap-5 rounded-lg">
            <p class="italic">
              <span class="font-semibold text-yellow-600">A Note About Privacy:</span>
              The system is built around confidentiality so only your matchmaker has your detailed
              information. Your anonymous profile is shared with other matchmakers and only to
              clients who are highly qualified. Once there is a match where both parties are
              interested, the matchmakers help the singles get introduced and determine
              compatibility for marriage on a conference call. No contact information is shared at
              this point. After the conference call(s), if both parties want to move forward, they
              can get the families involved and proceed with contact information exchange
              insha’Allah. Your matchmaker will be with you through the entire process to provide
              guidance and advice.
            </p>
          </div>
          <div class="bg-white px-8 py-5 mt-10 gap-5 rounded-lg">
            <p class="italic">
              <span class="font-semibold text-yellow-600">Note:</span>
              IDL-Masjid is providing matrimony services through 3rd party non-profits institutions.
              Any personal information collected on the form is securely kept with the institutions.
              For General Inquires Contact: info@muslimmatrimonynetwork.org.
            </p>
          </div>
        </div>
        <FacilitiesMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue'
// import Card from '../../components/CardSection.vue'
import FacilitiesMore from '../../components/FacilitiesMore.vue'
</script>

<style lang="scss" scoped></style>
