<template>
  <div class="px-5 bg-slate-50 py-5 w-4/4">
    <p class="text-2xl font-bold py-3 border-b">My Todo List Create</p>

   
  

    <!-- To-Do List Section -->
    <div  class="bg-green-100 py-10 px-6 max-w-screen-2xl  mx-auto shadow-2xl rounded-2xl">
      <div class="bg-white p-6 rounded-lg">
        <p class="text-4xl font-extrabold text-blue-600 pb-4 border-b-2 border-gray-200 tracking-tight">Create Task</p>

        <div class="flex gap-5 justify-between">
          <!-- Add New To-Do Item -->
          <div class="flex flex-col w-full items-start justify-start gap-4 mt-2">
            <Label>Selected Date</Label>
            <input type="date" v-model="todoData.date" class="input w-full rounded border-gray-500">
           
          </div>
 
          <div class="flex w-full flex-col items-start justify-start gap-4 mt-2">
            <Label>Selecte Package</Label>
            <select name="" v-model="todoData.customer_package_id" id="" class="select w-full border-gray-500">
              <option value="">Select Package</option>
              <option :value="mypackage.id" v-if="packages" v-for="mypackage in packages">{{ mypackage.package.package_title }}</option>
            </select>
       
          </div>  

        </div>
        <div class="flex gap-5 justify-between">
          <div class="flex flex-col w-full items-start justify-start gap-4 mt-2">
              <Label>Task Time</Label>
              <input type="time" v-model="todoData.time" class="input w-full rounded border-gray-500">
             
            </div>
          <div class="flex flex-col w-full items-start justify-start gap-4 mt-2">
              <Label>Task Details</Label>
              <input type="text" v-model="todoData.details" class="input w-full rounded border-gray-500">
             
            </div>
        </div>
        <div class="flex justify-end items-center mt-5">
          <button @click="saveTodo" class="btn btn-success text-white"><span v-if="isLoading" class="loading loading-spinner"></span> Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { itinerary } from '@/stores/itinenary.ts';
// import { packages } from '@/stores/itinenary.ts';
import moment from 'moment';
import { useAuthStore } from '/src/stores/AuthStore.ts'
import Swal from 'sweetalert2'


const auth = useAuthStore()
const route = useRoute();
const packageID = route.params.id;
const isLoading = ref(false);

// For package details
const packageDetails = ref(null);
const selectedDay = ref(0);
const packages = ref([])
// For tabs (Package Details and To-Do List)
const todoData = ref({
  date: null,
  customer_package_id: null,
  customer_id: null,
  details: '',
  day:'',
  time: ''
})
const getPackages = async () => {
 
  const { data } = await api().get('customer-packages')
  packages.value = data.data
}
const saveTodo = async () => {
  isLoading.value = true; // Set loading to true
  try {
    todoData.value.day = moment(todoData.value.date).format('dddd');
    todoData.value.customer_id = auth.user.customer.id;
    
    const data = await api().post('/customer-to-do-lists', todoData.value);
    
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Post Successful",
        text: "Your ToDo List Successfully Posted",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message || 'Something went wrong!',
    });
  } finally {
    isLoading.value = false; // Set loading to false regardless of success or failure
  }
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

