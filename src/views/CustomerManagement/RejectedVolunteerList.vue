<template>
    <div class="px-5 bg-slate-50 py-5">
      <div v-if="showDetails == false" class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Rejected Volunteer Applicant List</p>
        </div>
  
        <hr />
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/8">No.</th>
                <th class="p-2 text-left w-1/8">Name</th>
                <th class="p-2 text-left w-1/8">Email</th>
                <th class="p-2 text-left w-1/8">phone_number</th>
                <th class="p-2 text-left w-1/8">gender</th>
                <th class="p-2 text-left w-1/8">Job Title</th>
                <th class="p-2 text-left w-1/8">More Info</th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="(volunteerApplicant, index) in allVolunteerList"
                :key="volunteerApplicant.id"
              >
                <tr class="table-row">
                  <td class="p-2 text-left w-1/8">{{ index + 1 }}</td>
                  <td class="p-2 text-left w-1/8">{{ volunteerApplicant.user.name }}</td>
                  <td class="p-2 text-left w-1/8">{{ volunteerApplicant.user.email }}</td>
                  <td class="p-2 text-left w-1/8">{{ volunteerApplicant.user.phone_no }}</td>
                  <td class="p-2 text-left w-1/8">{{ volunteerApplicant.volunteer_jobs.gender }}</td>
                  <td class="p-2 text-left w-1/8">{{ volunteerApplicant.volunteer_jobs.title }}</td>
                  <td class="py-4 p-2 text-left">
                    <button
                      @click="details(volunteerApplicant)"
                      class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
  
      <div v-if="showDetails == true">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Volunteer Applicant List</p>
          <button @click="showDetails = false" class="bg-green-600 text-white rounded-md px-3 py-1.5">
            Back
          </button>
        </div>
        <!-- {{ volunteerDetails }} -->
  
        <div class="p-5 rounded-md shadow-lg bg-white">
          <p class="text-2xl my-3 border-b font-semibold">Volunteer Event Information</p>
          <table class="table-auto w-full bg-slate-200 border">
            <tbody>
              <tr>
                <th class="p-2 text-left w-1/3">Volunteer Event Name:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_jobs.title }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Volunteer Type:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_jobs.volunteering_type
                      ? volunteerDetails.volunteer_jobs.volunteering_type
                      : '---'
                  }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Venue:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_jobs.venue
                      ? volunteerDetails.volunteer_jobs.venue
                      : '---'
                  }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Gender:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_jobs.gender
                      ? volunteerDetails.volunteer_jobs.gender
                      : '---'
                  }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Date and Time:</th>
                <td class="p-2 text-left w-2/3">
                  {{ volunteerDetails.volunteer_jobs.date }} |
                  {{ volunteerDetails.volunteer_jobs.time }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Required Qualification:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_jobs.qualification
                      ? volunteerDetails.volunteer_jobs.qualification
                      : '---'
                  }}
                </td>
              </tr>
            </tbody>
          </table>
  
          <p class="text-2xl mb-3 mt-8 border-b font-semibold">Applicant Information</p>
          <table class="table-auto w-full bg-slate-200 border">
            <tbody>
              <tr>
                <th class="p-2 text-left w-1/3">Name:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.name }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Email:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.email }}</td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Phone:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.phone_number
                      ? volunteerDetails.volunteer_form.phone_number
                      : '---'
                  }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Gender:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.gender
                      ? volunteerDetails.volunteer_form.gender
                      : '---'
                  }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Country:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.country
                      ? volunteerDetails.volunteer_form.country
                      : '---'
                  }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Address:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.address
                      ? volunteerDetails.volunteer_form.address
                      : '---'
                  }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Educational Qualification:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.educational_qualification
                      ? volunteerDetails.volunteer_form.educational_qualification
                      : '---'
                  }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Professional Experience:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.professional_experience
                      ? volunteerDetails.volunteer_form.professional_experience
                      : '---'
                  }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Expertise:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.expertise
                      ? volunteerDetails.volunteer_form.expertise
                      : '---'
                  }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Previous Volunteer Experience:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.previous_volunteering
                      ? volunteerDetails.volunteer_form.previous_volunteering
                      : '---'
                  }}
                </td>
              </tr>
            </tbody>
          </table>
  
          <p class="text-2xl mb-3 mt-8 border-b font-semibold">Applicant Parents Information</p>
          <table class="table-auto w-full bg-slate-200 border">
            <tbody>
              <tr>
                <th class="p-2 text-left w-1/3">Parents Name:</th>
                <td class="p-2 text-left w-2/3">
                  {{ volunteerDetails.volunteer_form.parents_name }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Relationship with Parents:</th>
                <td class="p-2 text-left w-2/3">
                  {{ volunteerDetails.volunteer_form.relationship }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Parents Email:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.parents_email
                      ? volunteerDetails.volunteer_form.parents_email
                      : '---'
                  }}
                </td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Parents Address:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.parents_address
                      ? volunteerDetails.volunteer_form.parents_address
                      : '---'
                  }}
                </td>
              </tr>
              <tr>
                <th class="p-2 text-left w-1/3">Parents Phone:</th>
                <td class="p-2 text-left w-2/3">
                  {{
                    volunteerDetails.volunteer_form.parents_phone
                      ? volunteerDetails.volunteer_form.country
                      : '---'
                  }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
  } from '/components/ui/dropdown-menu'
  
  import { ref, onMounted, computed } from 'vue'
  import { useVolunteerDashboardStore } from '@/stores/volunteerStore2.ts'
  
  const showDetails = ref(false)
  const volunteerDetails = ref()
  
  const details = (volunteerApplicant) => {
    showDetails.value = true
    volunteerDetails.value = volunteerApplicant
  }
  
  const store = useVolunteerDashboardStore()
  const registerVolunteerAppliedList = async () => {
    try {
      const { data } = await api().get('volunteer-job-apply-list')
      console.log(data)
      store.registerVolunteerAppliedList = data.data
    } catch (error) {
      console.log(error)
    }
  }
  
  const allVolunteerList = computed(() => {
    return store.registerVolunteerAppliedList.filter((item) => item.status == 2)
  })
  
  onMounted(() => {
    registerVolunteerAppliedList()
  })
  </script>
  
  <style>
  .table-row:nth-child(even) {
    background: white;
  }
  </style>
  