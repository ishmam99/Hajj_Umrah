<template>
    <div class="bg-white px-8 py-5 pt-5 gap-5 rounded-lg">
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
</template>
<script setup>
import {ref, } from 'vue'
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