<template>
  <div class="px-5 bg-slate-50 py-5 w-4/5">
    <Breadcrumb />
    <p class="text-2xl font-bold py-3 border-b-2 text-center mb-4">Create My Todo List </p>

   <!-- {{ packages }} -->
  

    <!-- To-Do List Section -->
    <div  class="bg-green-100 py-10 px-6 max-w-screen-2xl  mx-auto shadow-2xl rounded-2xl">
      <div class="bg-white p-6 rounded-lg">
        <p class="text-4xl font-extrabold text-blue-600 pb-4 border-b-2 border-gray-200 tracking-tight">Create Task</p>

        <div class="flex flex-col items-center w-full gap-5">
          <div class="flex gap-2 w-full">
            <!-- Add New To-Do Item -->
          <div class="flex flex-col w-1/2 items-start justify-start gap-4 mt-2">
            <Label>Select Date</Label>
            <input type="date" v-model="todoData.date" class="input w-full rounded border-gray-500">
           
          </div>
          <!-- Add New To-Do Item -->
          <div class="flex flex-col w-1/2 items-start justify-start gap-4 mt-2">
            <Label>Select Time</Label>
            <input type="time" v-model="todoData.time" class="input w-full rounded border-gray-500">
           
          </div>
          </div>
 
          <div class="flex gap-2 w-full">
            <div class="flex w-full flex-col items-start justify-start gap-4 mt-2">
              <Label>Select Package</Label>
              <select name="" v-model="todoData.package_id" id="" class="select w-full border-gray-500">
                <option value="" disabled>Select Package</option>
                <option :value="mypackage.id" v-if="packages" v-for="mypackage in packages">{{mypackage.id}}. {{ mypackage.package_title }} </option>
              </select>
         
            </div>
            <div class="flex flex-col w-full items-start justify-start gap-4 mt-2">
              <Label>Task Details</Label>
              <input type="text" v-model="todoData.details" class="input w-full rounded border-gray-500">
             
            </div>
          </div>
  

        </div>
        <div class="flex justify-center items-center mt-5" >
            
          <button @click="saveTodo" class="btn btn-success w-1/3 text-xl mx-auto mt-4 text-white" :disabled="loginload">
            <svg
              v-if="loginload"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-6 h-6 animate-spin"
              fill="currentColor"
            >
              <path
                d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"
              ></path>
            </svg>
            Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from "/src/components/Breadcrumb.vue";
const loginload = ref(false)
import moment from 'moment';
import { useAuthStore } from '/src/stores/AuthStore.ts'
import Swal from 'sweetalert2'
const auth = useAuthStore()
const route = useRoute();
const packageID = route.params.id;

// For package details
const packageDetails = ref(null);
const selectedDay = ref(0);
const packages = ref([])
// For tabs (Package Details and To-Do List)
const todoData = ref({
  date: null,
  package_id: null,
  imam_id: null,
  details: '',
  day:'',
  time:''
})
const getPackages = async () => {
 
  const { data } = await api().get('package')
  packages.value = data.data
}
const saveTodo = async () => {
  try{
    loginload.value = true
  todoData.value.day = moment(todoData.value.date).format('dddd')
  todoData.value.imam_id = auth.user.imam.id
  const data = await api().post('/imam-to-do-lists',todoData.value)
  Swal.fire({
        icon: "success",
        title: "Task Created",
        text: "Congrats Task created Successfully",
      });
      
  } catch (error) {
    console.log(error);
  }
  loginload.value = false
 }
// Fetch package details when mounted
onMounted(() => {
 getPackages()
});

// Watch for route changes and refetch package details
watch(() => route, () => {
  packageDetails.value = packages.find(data => data.id == packageID);
});


const todos = ref([]);
const newTodo = ref({ day: '', details: '', completed: false, date: '' });

const addTodo = () => {
  if (newTodo.value.day && newTodo.value.details) {
    let date = moment(packageDetails.value.startDate,'Do MMM YY')
    console.log(date);
    newTodo.value.date = moment(packageDetails.value.start_at, 'Do MMM YY').add('days', parseInt(newTodo.value.day)).format("MMM Do YY")
    
    sortTodos(); 
    newTodo.value = { day: '', details: '', completed: false }; 
  }
};


const deleteTodo = (index) => {
  todos.value.splice(index, 1);
};


const sortTodos = () => {
  todos.value.sort((a, b) => parseInt(a.day) - parseInt(b.day));
};
</script>

