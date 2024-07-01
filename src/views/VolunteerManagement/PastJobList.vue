<template>
    <div class="px-5 bg-slate-50 py-5">
      <div v-if="showDetails == false" class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
        <div class="flex justify-between items-center pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Past Volunteer Job List</p>
        </div>
  
        <hr />
        <div
        v-if="allVolunteerList.length>0"
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left w-1/8"> SL.</th>
              <th class="p-2 text-left w-1/8">Title</th>
              <th class="p-2 text-left w-1/8">Gender</th>
              <th class="p-2 text-left w-1/8">venue</th>
              <th class="p-2 text-left w-1/8">Date</th>
              <th class="p-2 text-left w-1/8">Time</th>
              <th class="p-2 text-left w-1/8">Action</th>
            </tr>
          </thead>
          <tbody >
            <tr class="tableRowColor" v-for="(volunteerPost, index) in allVolunteerList" :key="index">
              <td class="py-4 p-2 w-1/8">{{ index+1 }}</td>
              <td class="py-4 p-2 gap-2 w-1/8">
                <h3 class="font-bold">{{ volunteerPost.title }}</h3>
              </td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.gender }}</td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.venue }}</td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.date }} </td>
              <td class="py-4 p-2 text-left w-1/8">{{ volunteerPost.time }} </td>
             
              <td class="py-4 p-2 text-left w-1/8">
                <div
                  class="w-full flex justify-center border py-2 rounded-md text-sm bg-white pr-2"
                >
                  <DropdownMenu class="w-full">
                    <DropdownMenuTrigger class="w-full">Action</DropdownMenuTrigger>
                    
                    <DropdownMenuContent>
                      <DropdownMenuItem @click="details(volunteerPost)" class="text-blue-600" 
                        >Details</DropdownMenuItem
                      >
                      <DropdownMenuItem class="text-red-600" @click="submitDelete()"
                        >Delete</DropdownMenuItem
                      >
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M12 16L6 10H18L12 16Z"></path>
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
         
        </table>
        </div>
        <p v-else class="text-2xl font-semibold text-center">No Past Events</p>
      </div>
    
  
      <div v-if="showDetails == true">
        <div class="flex justify-between items-center pt-4 pb-2">
          <p class="text-2xl text-yellow-600 font-bold">Volunteer Applicant Details</p>
          <button @click="showDetails = false" class="bg-green-600 text-white rounded-md px-3 py-1.5">Back</button>
        </div>
        <!-- {{  volunteerDetails }} -->
        
        <div class="p-5 rounded-md shadow-lg bg-white">
  
          <p class="text-2xl my-3 border-b font-semibold">Volunteer Event Information</p>
          <table class="table-auto w-full bg-slate-200 border">
            <tbody>
              <tr >
                <th class="p-2 text-left w-1/3">Volunteer Event Name:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_jobs.title }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Volunteer Type:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_jobs.volunteering_type ? volunteerDetails.volunteer_jobs.volunteering_type : '---'  }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Venue:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_jobs.venue ? volunteerDetails.volunteer_jobs.venue : '---'  }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Gender:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_jobs.gender ? volunteerDetails.volunteer_jobs.gender : '---'  }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Date and Time:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_jobs.date }} | {{ volunteerDetails.volunteer_jobs.time }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Required  Qualification:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_jobs.qualification ? volunteerDetails.volunteer_jobs.qualification : '---'  }}</td>
              </tr>
            </tbody>
          </table>
          
          <p class="text-2xl mb-3 mt-8 border-b font-semibold">Applicant Information</p>
          <table class="table-auto w-full bg-slate-200 border">
            <tbody>
              <tr >
                <th class="p-2 text-left w-1/3">Name:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.name }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Email:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.email }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Phone:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.phone_number ? volunteerDetails.volunteer_form.phone_number : '---'  }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Gender:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.gender ? volunteerDetails.volunteer_form.gender : '---'  }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Country:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.country ? volunteerDetails.volunteer_form.country : '---'  }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Address:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.address ? volunteerDetails.volunteer_form.address : '---'  }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Educational Qualification:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.educational_qualification ? volunteerDetails.volunteer_form.educational_qualification : '---'  }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Professional Experience:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.professional_experience ? volunteerDetails.volunteer_form.professional_experience : '---'  }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Expertise:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.expertise ? volunteerDetails.volunteer_form.expertise : '---'  }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Previous Volunteer Experience:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.previous_volunteering ? volunteerDetails.volunteer_form.previous_volunteering : '---'  }}</td>
              </tr>
            </tbody>
          </table>
  
          <p class="text-2xl mb-3 mt-8 border-b font-semibold">Applicant Parents Information</p>
          <table class="table-auto w-full bg-slate-200 border">
            <tbody>
              <tr >
                <th class="p-2 text-left w-1/3">Parents Name:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.parents_name }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Relationship with Parents:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.relationship }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Parents Email:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.parents_email ? volunteerDetails.volunteer_form.parents_email : '---'  }}</td>
              </tr>
              <tr class="bg-white">
                <th class="p-2 text-left w-1/3">Parents Address:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.parents_address ? volunteerDetails.volunteer_form.parents_address : '---'  }}</td>
              </tr>
              <tr >
                <th class="p-2 text-left w-1/3">Parents Phone:</th>
                <td class="p-2 text-left w-2/3">{{ volunteerDetails.volunteer_form.parents_phone ? volunteerDetails.volunteer_form.country : '---'  }}</td>
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
  import { useAdminStore } from '/src/stores/adminStore.ts'


  const store = useAdminStore()
  const showDetails = ref(false)
  const volunteerDetails = ref()
  
  const details = (volunteerApplicant) => {
    showDetails.value = true
    volunteerDetails.value = volunteerApplicant
  }
  
 
  const registerVolunteerAppliedList = async () => {
    try {
      const { data } = await api().get('volunteer-form-list')
      console.log(data)
      store.registerVolunteerAppliedList = data.data
      
    } catch (error) {
      console.log(error)
    }
  }
//   const getJobList = async () => {
//   try {
//     const { data } = await api().get('job-apply-list')
//     // store.volunteerJobList = data.data
//   }catch (error) {
//     console.log(error)
//   }
// }

const volunteerJobList = async () => {
  try {
    const { data } = await api().get('volunteer-job-list')

    store.volunteerJobList = data.data
    console.log(store.volunteerJobList)
  } catch (error) {
    console.log(error)
  }
}
  
  const allVolunteerList = computed(() => {
    return store.volunteerJobList.filter((item)=> item.job_status == "Complete")
  })
  
  const volunteerConfirm = async (id) => {
    try {
      const { data } = await api().post(`volunteer-job-apply-update-status/${id}`, {
        status:1
      })
      console.log(data)
      registerVolunteerAppliedList()
    } catch (error) {
      console.log(error)
    }
  }
  
  const volunteerReject = async (id) => {
    try {
      const { data } = await api().post(`volunteer-job-apply-update-status/${id}`, {
        status:2
      })
      console.log(data)
      registerVolunteerAppliedList()
    } catch (error) {
      console.log(error)
    }
  }

  const volunteerComplete = async (id) => {
    try {
      const { data } = await api().post(`volunteer-job-apply-update-status/${id}`, {
        status:3
      })
      console.log(data)
      registerVolunteerAppliedList()
    } catch (error) {
      console.log(error)
    }
  }
  
  
  
  onMounted(() => {
    volunteerJobList()
  })
  </script>
  
  <style>
  .table-row:nth-child(even){
    background: white;
  }
  </style>
  