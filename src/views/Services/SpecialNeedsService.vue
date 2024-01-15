<template>
  <div>
    <DefaultLayout>
      <div class="px-20 ml-10">
        <div class="bg-white">
          <div class="flex items-center gap-2">
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
            <p class="text-yellow-500">/ Special Needs Services</p>
          </div>
          <div class="bg-white rounded-lg relative py-3">
            <h1 class="text-yellow-500 text-4xl font-semibold">Special Needs Services</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full px-20 pl-28 py-5 mt-10 flex justify-between gap-5">
        <div class="space-y-8">
          <Card
            :headline="'Nikah Policy and Procedure'"
            :text="'These rules, regulations, and forms are for those who intend to have their Nikah and Marriage conducted at EPIC Masjid'"
          />
          <Card
            :headline="'Overview'"
            :text="'East Plano Islamic Center (EPIC) offers Nikah Service for Muslims to get married at EPIC. All Nikahs and marriages are officiated by Imam Nadim Bashir or Ustadh Mohamed Baajour if specifically requested by the family and depending on their availability.The families can also invite any approved scholar from outside of EPIC to officiate their marriage This document describes the policies and procedures of hosting nikah service at EPIC'"
          />
          <div class="bg-white rounded-xl p-5 w-[800px]">
            <h1 class="text-3xl underline py-3">Procedure</h1>
            <div class="px-5">
              <ul>
                <li class="list-disc">Submit a nikah request online at</li>
                <li class="list-disc">https://epicmasjid.org/nikah-services/</li>
                <li class="list-disc">
                  Upload or Attach all necessary documents as described in the policy section above
                </li>
                <li class="list-disc">
                  The system will send an acknowledgment email to the submitter. Please keep it for
                  record purposes
                </li>
                <li class="list-disc">EPIC operations team will</li>
                <li class="list-disc">communicate with the person in charge via email or phone</li>
                <li class="list-disc">
                  schedule a meeting with the family to go over the program flow and other
                  requirements
                </li>
                <li class="list-disc">
                  Inform the family whether or not the nikah has been approved
                </li>
                <li class="list-disc">
                  EPIC operations team will also send a form to be filled out by the family members.
                  This must be filled out as soon as possible
                </li>
              </ul>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 w-[800px]">
            <h1 class="text-3xl underline py-3">Policy</h1>
            <div class="px-5">
              The following are the policies for hosting Nikah Service at EPIC

              <ul>
                <li class="list-disc">
                  All rules and policies must be followed. A refusal of any type could lead to a
                  termination of the program.
                </li>
                <li class="list-disc">
                  Only prepacked sweets can be distributed to the guests for take along from the
                  lobby area, no breakfast, lunch, or dinner.
                </li>
                <li class="list-disc">
                  Modest attire for ALL GUESTS AND PARTICIPANTS (Muslim or Non-Muslim) and hired
                  photographers are REQUIRED. ANYONE VIOLATING THIS RULE WILL BE ASKED
                </li>
                <li class="list-disc">TO LEAVE THE PREMISES. NO EXCEPTIONS. Violations include</li>
                <li class="list-disc">Transparent and see-through clothing and</li>
                <li class="list-disc">Skirts Music / Nasheed is strictly prohibited.</li>
                <li class="list-disc">Men and women will be seated separately</li>
                <li class="list-disc">
                  The start and end times of the event will be strictly enforced
                </li>
                <li class="list-disc">Only partitions provided by EPIC are allowed.</li>
                <li class="list-disc">
                  Any cultural or banquet hall practices, such as flower curtains, formal entrances,
                  and men and women gathering at entrances or lobby areas, will not be allowed under
                  any circumstances.
                </li>
                <li class="list-disc">
                  EPIC reserves the right to refuse service with or without reason.
                </li>
              </ul>
            </div>
          </div>
          <div class="bg-white rounded-xl p-5 w-[800px]">
            <h1 class="text-3xl underline font-bold text-gray-700 py-3">Nikah Service Request</h1>
            <p>
              Please fill out this form to request for Nikah Service at EPIC. Please select a date
              when you would like to have the Nikah Service Performed. The date is not final until
              approved by EPIC administration.
            </p>
            <div class="py-5 space-y-7 mt-5">
              <div class="flex w-full gap-5">
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >First Name <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Last Name <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Email <span class="text-red-500">*</span>
                </label>
              </div>
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Phone Number <span class="text-red-500">*</span>
                </label>
              </div>
            </div>
            <div class="flex gap-5">
              <div>
                <p class="text-2xl font-bold text-slate-800">
                  Nikah Service Request Date <span class="text-red-500">*</span>
                </p>
                <input
                  id="datepicker"
                  class="border-2 border-gray-300 rounded px-3 py-2 w-56"
                  type="date"
                  placeholder="Select a date"
                />
              </div>
              <div>
                <p class="text-2xl font-bold text-slate-800">
                  Event Timer <span class="text-red-500">*</span>
                </p>
                <div class="flex">
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-yellow-500 border-transparent"
                  />
                  Duhr
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-transparent border-transparent checked:text-yellow-500"
                  />
                  Asr
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-transparent border-transparent checked:text-yellow-500"
                  />
                  Maghrib
                </label>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-transparent border-transparent checked:text-yellow-500"
                  />
                  Ishaa
                </label>
                </div>
              </div>
            </div>
          </div>
        </div>
         <FacilitesMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '../../layouts/DefaultLayout.vue'
import Card from '../../components/CardSection.vue'
import FacilitesMore from '../../components/FacilitiesMore.vue'
</script>

<style lang="scss" scoped></style>
