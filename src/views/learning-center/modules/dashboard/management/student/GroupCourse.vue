<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Swal from 'sweetalert2'
import axios from 'axios'

//primeVue import
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'

//loding effect
import { useCommonStore } from '@/stores/common'
const commonStorage = useCommonStore()

//api end part
const areaListApi = 'area-list'
const programListApi = 'program-list/'
const courseListApi = 'course-list/'
const batchListApi = 'get-approved-batch-list/'

//area selection
let areas = ref([])
let selectedArea = ref([])

//program selection
let programs = ref([])
let selectedPrograms = ref([])

//course selection
let courses = ref([])
let selectedCourses = ref([])

//batch election
let batches = ref([])
const selectedBatches = ref([])

//all activities
let isProgramActive = false
let isCourseActive = false
// let isTeacherActive = false;
// let isTableActive = false;
const isBatchActive = ref(false)

//watch area to getProgram
watch(selectedArea, async (newValue) => {
  if (newValue) {
    console.log('Selected area changed:', newValue)
    isProgramActive = true
    getPrograms(newValue)
  }
})

//watch program to getCourse
watch(selectedPrograms, async (newValue) => {
  if (newValue) {
    console.log('Selected program changed:', newValue)
    getCourses(newValue)
    isCourseActive = true
  }
})

//watch teacher to getBatch
watch(selectedCourses, async (newValue) => {
  if (newValue) {
    console.log('Selected teacher changed:', newValue)
    isBatchActive.value = true
    getBatch()
  }
})

//get area
async function getAreas() {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + areaListApi)
  areas.value = resp.data

  console.log('area list ', resp.data)
}

//get program
async function getPrograms(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + programListApi + id)
  programs.value = resp.data

  console.log('program list ', resp.data)
}

//get course
async function getCourses(id) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + courseListApi + id)
  courses.value = resp.data

  console.log('course list ', resp.data)
}

//get batch
async function getBatch(id = 25) {
  const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + batchListApi + id)
  batches.value = resp.data
  //   isTableActive = true;

  console.log('Batch list ', resp.data)
}

//Dialog code
const showAdviserDialog = ref(false)
const advisers = ref([])
const selectedAdviser = ref(null)
const selectBatchId = ref()

async function openAdviserDialog(batchId) {
  console.log('Opening adviser dialog for batchId:', batchId)

  try {
    const adviserResponse = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + 'get-advisor')
    advisers.value = adviserResponse.data

    console.log('showAdviserDialog before:', showAdviserDialog.value)

    selectBatchId.value = batchId
    showAdviserDialog.value = true

    console.log('showAdviserDialog after:', showAdviserDialog.value)
  } catch (error) {
    console.error('Error fetching adviser list:', error)
  }
}

const closeAdviserDialog = () => {
  console.log('Closing adviser dialog')
  showAdviserDialog.value = false
}

// const adviser_id = ref('');
// const assignAdviser = async (selectedAdviser) => {

//     if (selectedAdviser) {

//         console.log('Selected Adviser ID:', selectedAdviser.id);
//         console.log('Selected Adviser Name:', selectedAdviser.name);
//     }

//     try {
//         //Ensure a valid advisor is selected
//         if(!selectedAdviser){
//             console.error('No adviser selected.');
//             return;
//         }

//         // Accessing adviser_id from the selectedAdviser object
//         const adviserId = selectedAdviser.id;

//         // Accessing batch information based on the selectBatchId
//         const selectedBatch = batches.value.find(batch => batch.id === selectBatchId.value);

//         // Ensure selectedBatch and batchName are available
//         if (!selectedBatch || !selectedBatch.data) {
//         console.error('Incomplete data for assignment. Selected batch:', selectedBatch);
//         return;
//         }

//         // Ensure batch data structure is as expected
//         // if (!selectedBatch.data.batch) {
//         // console.error('Batch data is missing batch name:', selectedBatch.data);
//         // return;
//         // }

//         const batchName = selectedBatch.data.batch;
//         console.log("Batch name ", batchName);
// }

//         // Prepare data for the POST request
//         const postData = {
//         adviser_id: adviserId,
//         batch_name: batchName,
//         };

//         //post request
//         const response =  axios.post(import.meta.env.VITE_ELEARNING_BASE_API + '/assign-advisor', postData);

//         console.log('Advisor assigned successfully:', response.data);

//         // Show SweetAlert2 success alert
//         Swal.fire({
//         icon: 'success',
//         title: 'Advisor Assigned!',
//         text: 'The adviser has been successfully assigned to the batch.',
//         confirmButtonText: 'OK',
//         });

//         // Close the dialog after assignment
//         closeAdviserDialog();

//     }catch(error) {
//         console.error('Error assigning adviser:', error.message)

//         //show sweetalert2 error alert
//         Swal.fire({
//         icon: 'error',
//         title: 'Error Assigning Advisor!',
//         text: 'An error occurred while assigning the adviser. Please try again.',
//         confirmButtonText: 'OK',
//         });
//     }

//   // Close the dialog after assignment
// //   closeAdviserDialog();
// };

const assignAdviser = async (selectedAdviser) => {
  if (selectedAdviser) {
    console.log('Selected Adviser ID:', selectedAdviser.id)
    console.log('Selected Adviser Name:', selectedAdviser.name)
  }

  try {
    // Ensure a valid adviser is selected
    if (!selectedAdviser) {
      console.error('No adviser selected.')
      return
    }

    const adviserId = selectedAdviser.id

    const selectedBatch = batches.value.find((batch) => batch.data.id === selectBatchId.value)
    console.log(
      'Select batchs',
      batches.value.find((batch) => batch.data.id === selectBatchId.value)
    )

    if (!selectedBatch || !selectedBatch.data) {
      console.error('Incomplete data for assignment. Selected batch:', selectedBatch)
      return
    }

    if (!selectedBatch.data.batch) {
      console.log(selectedBatch.data.batch)
      console.error('Batch data is missing batch name:', selectedBatch.data)
      return
    }

    const postData = {
      adviser_id: adviserId,
      batch_name: selectedBatch ? selectedBatch.data.batch : null
    }

    // Make the POST request
    const response = await axios.post(
      import.meta.env.VITE_ELEARNING_BASE_API + 'assign-advisor',
      postData
    )

    console.log('Advisor assigned successfully:', response.data)

    // Show SweetAlert2 success alert
    Swal.fire({
      icon: 'success',
      title: 'Advisor Assigned!',
      text: 'The adviser has been successfully assigned to the batch.',
      confirmButtonText: 'OK'
    })

    // Close the dialog after assignment
    // showAdviserDialog.value = false;
    // closeAdviserDialog();
    closeAdviserDialog()
  } catch (error) {
    console.error('Error assigning adviser:', error.message)

    // Show SweetAlert2 error alert
    Swal.fire({
      icon: 'error',
      title: 'Error Assigning Advisor!',
      text: 'An error occurred while assigning the adviser. Please try again.',
      confirmButtonText: 'OK'
    })

    closeAdviserDialog()
  }
}
//end dialog code

//Formate time in 12 hours clock
const formatTime = (time) => {
  const [hours, minutes] = time.split(':')

  const bstTime = new Date(2024, 0, 1, parseInt(hours), parseInt(minutes), 0)
  const formattedTime = bstTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
  return formattedTime
}

onMounted(() => {
  getAreas()
  //loding mounted
  commonStorage.loading = false
})

onUnmounted(() => {
  //loding unmounted
  commonStorage.loading = true
})
</script>

<template>
  <div class="dashboard-content">
    <!-- <img src="@/assets/images/dashboard/student-management/banner-10.png" alt=""> -->
    <div class="dashboard-wrapper">
      <!--select a area-->
      <div class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Area :
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedArea"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="area in areas" :key="area" :value="area.id">
              {{ area.title }}
            </option>
          </select>
        </div>
      </div>

      <!--select a program-->
      <div v-if="isProgramActive" class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Program
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedPrograms"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="program in programs" :key="program" :value="program.id">
              {{ program.name }}
            </option>
          </select>
        </div>
      </div>

      <!--select a course-->
      <div v-if="isCourseActive" class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Course
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedCourses"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="course in courses" :key="course" :value="course.id">
              {{ course.title }}
            </option>
          </select>
        </div>
      </div>

      <!--select a Batch-->
      <div v-if="isBatchActive" class="md:flex md:items-center mb-6 mt-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Select a Batch
          </label>
        </div>
        <div class="w-full">
          <select
            v-model="selectedBatches"
            class="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"
            id="grid-state"
          >
            <option>Select an Option</option>
            <option v-for="(batch, index) in batches" :key="index" :value="batch.data.id">
              {{ batch.data.batch }}
            </option>
          </select>
          <!-- {{ batches }} -->
        </div>
      </div>

      <!--Show batch data-->
      <div class="card bg-gray-400">
        <DataTable
          :value="batches"
          paginator
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20, 50]"
          showGridlines
          tableStyle="min-width: 50rem"
        >
          <template #header>
            <div class="display-center">
              <div class="dashboard-title text-cyan-700">
                <font-awesome-icon :icon="['fas', 'list-ul']" />
                Group Course List Information
              </div>
            </div>
          </template>

          <!--Indexing the table column-->
          <Column header="#">
            <template #body="slotProps">
              {{ slotProps.index + 1 }}
            </template>
          </Column>

          <!--Batch name of the column-->
          <!-- <Column field="data.batch" header="Batch Name" style="min-width: 10rem"></Column> -->

          <!--Teacher name of the column-->
          <Column field="teacher" header="Teacher" style="min-width: 8rem">
            <!-- <template #body="slotProps">
            {{ slotProps.data.teacher.length > 0 ? slotProps.data.teacher[0].name : "N/A " }}
        </template> -->
            <template #body="slotProps">
              <div class="flex align-items-center gap-2">
                <img
                  :alt="slotProps.data.teacher[0].name"
                  src="@/assets/images/user/user.jpg"
                  class="rounded-full"
                  style="width: 32px"
                />
                <span class="pt-2">{{
                  slotProps.data.teacher.length > 0 ? slotProps.data.teacher[0].name : 'N/A '
                }}</span>
              </div>
            </template>
          </Column>

          <!--Days of the week of  the group batch-->
          <Column field="day" header="Days">
            <template #body="slotProps">
              <span v-for="(day, index) in slotProps.data.day" :key="index">{{
                day.name.length > 0 ? day.name : 'N/A'
              }}</span>
            </template>
          </Column>

          <!--Group batch starting time of the column-->
          <Column header="Starting Time">
            <template #body="slotProps">
              <span>{{ formatTime(slotProps.data.data.start_time) }}</span>
            </template>
          </Column>

          <!--Group batch endiign time of the colum-->
          <Column header="Ending Time">
            <template #body="slotProps">
              <span>{{ formatTime(slotProps.data.data.end_time) }}</span>
            </template>
          </Column>

          <!--select Advisor-->
          <Column header="Advisor">
            <template #body="slotProps">
              <button
                @click="
                  console.log('SlotProps:', slotProps.data.data.id)
                  openAdviserDialog(slotProps.data.data.id)
                "
                class="flex items-center shadow-md ml-4 border-2 bg-gray-400 p-2 text-white rounded-full text-lg hover:shadow-lg"
              >
                <font-awesome-icon :icon="['fas', 'user-tie']" />
              </button>
            </template>
          </Column>
        </DataTable>
      </div>
      <div class="card flex items-center justify-center-center">
        <Dialog
          v-model:visible="showAdviserDialog"
          header="Assign Adviser"
          :modal="true"
          width="40%"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="p-field w-full md:w-full px-3">
              <!-- <label for="adviserSelect" class="inline-block">Select Adviser</label> -->
              <Dropdown
                v-model="selectedAdviser"
                :options="advisers"
                optionLabel="name"
                placeholder="Select an Adviser"
                class="w-full md:w-14rem"
              />
            </div>
            <div class="p-field">
              <button
                @click="assignAdviser(selectedAdviser)"
                label="Assign Adviser"
                class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-2 mt-3"
              >
                Submit Advisor
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dashboard-content img {
  width: 100%;
}

.dashboard-wrapper {
  padding: 20px;
}

@import 'datatables.net-dt';

.table-background {
  background: #f5f5f5 !important;
  box-shadow: 4px 4px 7px -2px rgba(0, 0, 0, 0.25) !important;
  border-radius: 10px !important;
  padding: 25px;
}

.editor-edit {
  cursor: pointer !important;
}

.dashboard-content {
  height: 90vh;
  overflow: auto;
}

.dashboard-title {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
}

.display-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-filter {
  padding: 10px 20px;
  border: 2px solid gray;
}

.card {
  border-top: 4px solid #0fa3b1;
}
</style>
