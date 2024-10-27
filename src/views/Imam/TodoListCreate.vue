<template>
  <div class="px-5 bg-slate-50 py-5 w-4/5">
    <Breadcrumb />
    <p class="text-2xl font-bold py-3 border-b-2 text-center mb-4">Create My Todo List </p>

   <!-- {{ packages }} -->
  

    <!-- To-Do List Section -->
    <div  class="bg-green-100 py-10 px-6 max-w-screen-2xl  mx-auto shadow-2xl rounded-2xl">
      <div class="bg-white p-6 rounded-lg">
        <p class="text-4xl font-extrabold text-blue-600 pb-4 border-b-2 border-gray-200 tracking-tight">Create Task</p>

        <div class="flex gap-5 justify-between">
          <!-- Add New To-Do Item -->
          <div class="flex flex-col w-full items-start justify-start gap-4 mt-2">
            <Label>Select Date</Label>
            <input type="date" v-model="todoData.date" class="input w-full rounded border-gray-500">
           
          </div>
          <!-- Add New To-Do Item -->
          <div class="flex flex-col w-full items-start justify-start gap-4 mt-2">
            <Label>Select Time</Label>
            <input type="time" v-model="todoData.time" class="input w-full rounded border-gray-500">
           
          </div>
 
          <div class="flex w-full flex-col items-start justify-start gap-4 mt-2">
            <Label>Select Package</Label>
            <select name="" v-model="todoData.package_id" id="" class="select w-full border-gray-500">
              <option value="">Select Package</option>
              <option :value="mypackage.id" v-if="packages" v-for="mypackage in packages">{{mypackage.id}}. {{ mypackage.package_title }} </option>
            </select>
       
          </div>
          <div class="flex flex-col w-full items-start justify-start gap-4 mt-2">
            <Label>Task Details</Label>
            <input type="text" v-model="todoData.details" class="input w-full rounded border-gray-500">
           
          </div>
  

        </div>
        <div class="flex justify-end items-center mt-5">
          <button @click="saveTodo" class="btn btn-success text-white">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Breadcrumb from "/src/components/Breadcrumb.vue";
import { itinerary } from '@/stores/itinenary.ts';
// import { packages } from '@/stores/itinenary.ts';
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
  todoData.value.day = moment(todoData.value.date).format('dddd')
  todoData.value.imam_id = auth.user.imam.id
  const data = await api().post('/imam-to-do-lists',todoData.value)
  Swal.fire({
        icon: "success",
        title: "Task Created",
        text: "Congrats Task created Successfully",
      });
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

