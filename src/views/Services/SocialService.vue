<template>
  <div>
    <DefaultLayout>
      <div class="px-20 pt-20 mt-5 py-5 bg-indigo-900 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl">
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
            <p class="text-indigo-900">/ Social Service</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-indigo-900 text-4xl font-bold"> Social Service </h1>
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
              The mission of the Social Services Committee is to develop, implement and manage human
              services programs and supports needed to improve the quality of life of individuals
              and families. The committee seeks to serve the humanity without regard to race, gender
              or religion.
            </p>
            <p class="mt-5 font-semibold">
              Currently, IDL-Masjid Social Services provides the following services:
            </p>
            <!-- <div class="mt-5 ml-10">
              <ul class="list-disc">
                <li><a class="text-sky-500" href="">Medical Clinic</a></li>
                <li><a class="text-sky-500" href="">Visiting and helping refugees</a></li>
                <li><a class="text-sky-500" href="">Food Bank</a></li>
                <li><a class="text-sky-500" href="">Distribution of Zakat funds</a></li>
                <li>
                  <a class="text-sky-500" href=""
                    >Ansaar (Helpers) Program for reverts and newcomers</a
                  >
                </li>
              </ul>
            </div> -->
            <div class="mt-5">
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button class="p-4 bg-indigo-900 text-white rounded-xl">Medical Clinic</button>
                <button class="p-4 bg-indigo-900 text-white rounded-xl">
                  Visiting and helping refugees
                </button>
                <button class="p-4 bg-indigo-900 text-white rounded-xl">Food Bank</button>
                <button class="p-4 bg-indigo-900 text-white rounded-xl">
                  Distribution of Zakat funds
                </button>
                <button class="p-4 bg-indigo-900 text-white rounded-xl">
                  Ansaar (Helpers) Program for reverts and newcomers
                </button>
              </div>
            </div>
            <div class="mt-10">
              <p>
                <span class="font-bold"
                  >Meetings: Every other Tuesday after Maghrib Salah at IDL-Masjid.</span
                >
              </p>
              <p class="pt-5">
                To volunteer for the IDL-Masjid Ansaar Program, please click
                <button class="underline font-semibold text-sky-600">
                  <a href="">here</a>
                </button>
              </p>
              <p class="pt-5">
                To volunteer for the IDL-Masjid Social Services Committee, please click
                <button class="underline font-semibold text-sky-600">
                  <a href="">here</a>
                </button>
              </p>
              <p class="pt-5">
                To request Financial Aid, please click
                <button class="underline font-semibold text-sky-600">
                  <a href="">here</a>
                </button>
              </p>
            </div>
          </div>
          <div class="bg-white px-8 py-5 pt-5 gap-5 rounded-lg">
            <!-- <p>Assalaamu Alaikum (Peace be with you),</p> -->
            <p class="mt-5">
              Thank you for your interest in volunteering for IDL-Masjid. IDL-Masjid is a 501c(3)
              non-profit organization that depends heavily on volunteers. Our strength comes from
              individuals with diverse backgrounds and skills who can contribute to enrich the
              organization. We request your support and participation. Please fill the form below
              and submit it to volunteer in the IDL-Masjid Committee(s) of your interest. Please
              note the following general guidelines for volunteering at IDL-Masjid.
            </p>
            <div class="mt-5 ml-4">
              <ul class="list-decimal">
                <li>
                  You must be a registered General Body member of IDL-Masjid. You can become a
                  member online or stop by the IDL-Masjid office to fill out the membership form.
                </li>
                <li>
                  The committee and members shall serve within the guidelines of the IDL-Masjid
                  Constitution (Article 8.7) and report to its Board of Directors (BoD).
                </li>
              </ul>
            </div>
            <form @submit.prevent="socialServiceFormApply()">
                <div class="py-5 space-y-7 mt-5">
                    <div class="flex w-full gap-5">
                      <div class="relative pt-1 mb-3 w-full">
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                          id="exampleFormControlInput50"
                          value=""
                          v-model="socialServiceForm.FirstName"
                        />
                        <label
                          for="exampleFormControlInput50"
                          class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                          >First Name <span class="text-red-500">*</span>
                        </label>
                      </div>
                      <div class="relative pt-1 mb-3 w-full">
                        <input
                          type="text"
                          class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                          id="exampleFormControlInput50"
                          value=""
                          v-model="socialServiceForm.LastName"
                        />
                        <label
                          for="exampleFormControlInput50"
                          class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                          >Last Name <span class="text-red-500">*</span>
                        </label>
                      </div>
                    </div>
                    <div class="relative pt-1 mb-3 w-full">
                      <input
                        type="date"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlInput50"
                        value=""
                        v-model="socialServiceForm.Age"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Age <span class="text-red-500">*</span>
                      </label>
                    </div>
                    <div class="relative pt-1 mb-3 w-full">
                      <input
                        type="email"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlInput50"
                        value=""
                        v-model="socialServiceForm.Email"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Email <span class="text-red-500">*</span>
                      </label>
                    </div>
                    <div class="relative pt-1 mb-3 w-full">
                      <input
                        type="tel"
                        class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlInput50"
                        value=""
                        v-model="socialServiceForm.Phone"
                      />
                      <label
                        for="exampleFormControlInput50"
                        class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                        >Phone Number <span class="text-red-500">*</span>
                      </label>
                    </div>
                    <p class="text-xl font-bold pt-2 pb-2">
                      Volunteering For?<span class="text-red-600">*</span>
                    </p>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="flex items-center gap-2 font-semibold">
                        <input 
                          v-model="socialServiceForm.Volunteering.account"
                          id="Asr" type="checkbox" name="Event_Time" value="Accounting_(Finances)" class="h-3 w-3" />
                        <label for="Dhur">Accounting (Finances)</label>
                      </div>
                      <div class="flex items-center gap-2 font-semibold">
                        <input
                            v-model="socialServiceForm.Volunteering.facility"
                            type="checkbox" id="Asr" name="Event_Time" value="Facilities_Management" class="h-3 w-3" />
                        <label for="Asr">Facilities Management</label>
                      </div>
                      <div class="flex items-center gap-2 font-semibold">
                        <input 
                            v-model="socialServiceForm.Volunteering.clinic"
                            type="checkbox" id="Asr" name="Event_Time" value="IDL-Masjid_Medical_Clinic" class="h-3 w-3" />
                        <label for="Asr">IDL-Masjid Medical Clinic</label>
                      </div>
                      <div class="flex items-center gap-2 font-semibold">
                        <input
                          v-model="socialServiceForm.Volunteering.social"
                          type="checkbox" id="Dhur" name="Event_Time" value="Social_Services" class="h-3 w-3" />
                        <label for="Dhur">Social Services</label>
                      </div>
                    </div>
                </div>
                <div class="bg-white px-0 py-5 pt-2 gap-5 rounded-lg">
                  <p><span class="text-xl font-bold">Accounting Team</span></p>
                  <p class="mt-5 font-semibold">
                    The accounting team comprises of one or more members of IDL-Masjid's Board of
                    Directors with the IDL-Masjid BOD Treasurer as the Liaison. IDL-Masjid BOD may need
                    help with accounting tools and/or during special events such as Fundraising or
                    pledge collection drives. Please sign up if you have an accounting/financial
                    background or expertise.
                  </p>
                  <div>
                    <p class="text-xl font-bold py-5">Question or Comments</p>
                    <textarea
                      v-model="socialServiceForm.Question"
                      name=""
                      id=""
                      cols=""
                      rows="4"
                      placeholder="Ex:23"
                      class="w-full p-3 rounded-md shadow-lg border border-black"
                    ></textarea>
                  </div>
                  <div class="flex justify-center py-3">
                    <button type="submit"

                      class="w-full h-[45px] rounded-2xl bg-indigo-900 text-white font-bold mx-auto"
                    >
                      Submit
                    </button>

                  </div>
                </div>
            </form>
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
import {ref} from 'vue'
const socialServiceForm = ref({
  FirstName: '',
  LastName: '',
  Age: '',
  Email: '',
  Phone: '',
  Volunteering: {},
  Question :'',
})

const socialServiceFormApply = () => {
  if (socialServiceForm.value.FirstName == '' || socialServiceForm.value.LastName =='' || socialServiceForm.value.Age == '' || socialServiceForm.value.Email == '' || socialServiceForm.value.Phone == '' || socialServiceForm.value.Volunteering == '' ) {
    alert('you have a empty field')
  }
  else {
    console.log(socialServiceForm.value)
  }
  
}

</script>

<style lang="scss" scoped></style>
