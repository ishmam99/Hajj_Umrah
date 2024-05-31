<template>
  <DefaultLayout>
    <div
      class="px-20 pt-20 mt-5 py-5 bg-teal-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
    >
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
          <p>/ About Us</p>
          <!-- <p>/ Volunteers</p> -->
          <p class="text-teal-800">/ About</p>
        </div>
        <div class="rounded-lg flex items-center justify-center relative py-3">
          <h1 class="text-teal-800 text-4xl font-bold">About</h1>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    <!-- <Separator /> -->

    <div class="px-20 flex bg-gray-100 gap-5">
      <div class="space-y-8 w-full">
        <div class="w-full">
          <div class="grid grid-cols-3 gap-3 my-5 py-5 px-4">
            <div
              class="bg-[url('@/assets/image/commitees/0.png')] w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full bg-[#00000050] h-full rounded-xl text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">ISLAMIC EVENT</p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/1.png')] h-64 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full h-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">YOUTH</p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/2.png')] h-64 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full h-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">
                  EPIC Sports &#38; Recreation
                </p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/3.png')] h-64 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full h-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">Outreach</p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/4.png')] h-64 bg-opacity-25 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center h-full w-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">IT</p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/5.png')] h-64 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full h-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">sister</p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/6.png')] h-64 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full h-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">facilities</p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/7.png')] h-64 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full h-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">construction</p>
              </div>
            </div>
            <div
              class="bg-[url('@/assets/image/commitees/8.png')] h-64 w-full bg-top bg-cover rounded-xl bg-origin-content"
            >
              <div
                class="flex flex-col items-center justify-center w-full h-full bg-opacity-25 rounded-xl bg-[#00000050] text-white"
              >
                <p class="text-xl text-center px-10 font-semibold mb-2 uppercase">Education</p>
              </div>
            </div>
          </div>
        </div>
        <Card class="rounded-2xl mx-2">
          <CardHeader>
            <!-- <CardTitle class="underline underline-offset-4 text-3xl text-slate-700">About IDL</CardTitle> -->
          </CardHeader>
          <CardContent class="text-gray-600"
            >IDL is a 501 c(3) non-profit organization dedicated to providing religious,
            educational, social and recreational services to the Muslim community in East Plano and
            surrounding areas. Our strength comes from individuals with diverse backgrounds and
            skills who can share ideas and contribute to enrich the organization. The following
            articles from the IDL constitution pertain to Committees:
            <br />
            <br />
            <h1 class="text-2xl font-semibold">8.7 Committees and Sub-Committees</h1>

            <br />
            8.7.1 The BOD may appoint ad-hoc committees comprised of general body members in good
            standing with IDL in order to accomplish the goals and objectives of IDL in accordance
            with Article 2.
            <br />
            <br />
            8.7.2 The activities of the committees and sub-committees shall remain in compliance
            with the IDL Constitution. Should there arise a time when the committee’s activities are
            found to be in non-compliance, the BOD shall have the right to intervene and rectify the
            problem.
            <br />
            <br />
            8.7.3 No committee will have the authority to take any action outside the scope of
            authority delegated to it by the BOD.
            <br />
            <br />
            8.7.4 All committees will be composed of at least five (5) members including a liaison
            from the BOD.
            <br />
            <br />
            8.7.5 The goals of the committee shall be provided by the BOD member(s) assigned as
            liaison(s) to the committee. The committee members may suggest changes to the goals, but
            the BOD shall provide final approval.
            <br />
            <br />
            8.7.6 Each committee must develop its yearly objectives in consultation with BOD
            liaison(s) and submit quarterly reports to the BOD.
            <br />
            <br />
            8.7.7 If a committee engages in any fundraising activity or has expenses, it must submit
            a budget to the IDL BOD. The IDL BOD must ratify the fundraising activity and the
            budget.
            <br />
            <br />
            8.7.8 The BoD will open up the committees to the community for willing participants and
            volunteers. If there are an insufficient number of willing volunteers, the BoD Liaison
            and/or Committee Lead shall recruit volunteers necessary to achieve the committee’s
            goals.
            <br />
            <br />
            8.7.9 The Board of Directors will resolve disputes among committees of IDL and
            adjudicate all conflicts referred to it.
            <br />
            <br />
            <p>
              We are looking for individuals who can lead and contribute in following professional
              organizational areas:
            </p>

            <br />
            <ul class="list-disc px-8">
              <li>Fund Raising</li>
              <li>Sunday School teachers</li>
              <li>Social Media Marketing, Communication</li>
              <li>Youth Mentoring</li>
              <li>Event Planning</li>
              <li>Tutoring</li>
              <li>Career Guidance</li>
              <li>Youth and Family Counseling</li>
              <li>Financial, Health, Legal services for the community</li>
              <li>Facility Maintenance</li>
              <li>Information Technology</li>
            </ul>
          </CardContent>
        </Card>
        <div class="flex justify-center items-center">
          <Card class="rounded-2xl mx-2 mb-10">
            <CardContent>
              <h1 class="text-xl py-3">Assalaamu Alaikum (Peace be with you),</h1>
              <p class="py-3">
                Thank you for your interest in volunteering for IDL. IDL is a 501c(3) non-profit
                organization that depends heavily on volunteers. Our strength comes from individuals
                with diverse backgrounds and skills who can contribute to enrich the organization.
                We request your support and participation. Please fill the form below and submit it
                to volunteer in the IDL Committee(s) of your interest. Please note the following
                general guidelines for volunteering at IDL.
              </p>
              <p class="py-3 flex gap-2 items-center">
                <span class="rounded-full bg-gray-300 px-3 py-1 font-bold">1</span>
                <span
                  >You must be a registered General Body member of IDL. You can become a member
                  online or stop by the IDL office to fill out the membership form.</span
                >
              </p>
              <p class="py-3 flex gap-2 items-center">
                <span class="rounded-full bg-gray-300 px-3 py-1 font-bold">2</span>
                <span
                  >The committee and members shall serve within the guidelines of the IDL
                  Constitution (Article 8.7) and report to its Board of Directors (BoD).</span
                >
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
              <p class="text-xl font-bold pt-5 pb-2">
                Volunteering For?*<span class="text-red-600">*</span>
              </p>
              <div class="px-6 py-3 grid grid-cols-3">
                <div class="flex gap-3">
                  <Input type="checkbox"></Input><Label>Comfort The Sick</Label>
                </div>
                <div class="flex gap-3">
                  <Input type="checkbox"></Input><Label>Educate The Children</Label>
                </div>
                <div class="flex gap-3">
                  <Input type="checkbox"></Input><Label> Enhance Social Justice</Label>
                </div>
                <div class="flex gap-3">
                  <Input type="checkbox"></Input><Label>Feed The Hungry</Label>
                </div>
                <div class="flex gap-3">
                  <Input type="checkbox"></Input><Label>Shelter The Homeless</Label>
                </div>
              </div>

              <div>
                <p class="text-xl font-bold py-5">Any Question or Comments</p>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="4"
                  placeholder="Ex:23"
                  class="w-full p-3 rounded-md shadow-lg border border-black"
                ></textarea>
              </div>
              <div class="flex gap-5 mt-3">
                <Input type="checkbox"></Input>
                <div class="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    for="terms"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              </div>
              <div class="flex justify-center py-3 mt-3">
                <button
                  class="w-[350px] h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto"
                >
                  Apply
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <!-- <FacilitiesMore /> -->
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader } from '/components/ui/card'
import { Separator } from '/components/ui/separator'
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
</script>

<style lang="scss" scoped></style>
