<template>
  <div class="px-5 bg-slate-50 py-5 w-4/4">
    <p class="text-2xl font-bold py-3 border-b">Customer Package Details</p>


    <!-- Conditional Rendering for Package Details and To-Do List -->
    <div v-if="currentTab === 'details'" class="bg-green-100 py-10">
      <!-- Package Details Content -->

      <div v-if="packageDetails" class="px-6 py-10 max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl ">
        <div class="flex items-center bg-sky-600 py-6 justify-between px-4 rounded text-xl text-white font-semibold">
          <p class=" px-1 text-center w-full">Package ID: <span class="">{{ packageDetails.package_id }}</span></p>
          <p class="border-s-2 px-1 text-center w-full">Origin Country: <span class="">{{ packageDetails.country.name
              }}</span></p>
          <p class="border-s-2 px-1 text-center w-full">Origin City: <span class="">{{ packageDetails.city.name
              }}</span></p>
          <p class="border-s-2 px-1 text-center w-full">Origin Airport: <span class="">{{ packageDetails.airport.name
              }}</span></p>
        </div>
        <p class="text-4xl font-extrabold text-blue-600 pb-8 border-b-2 border-gray-200 tracking-tight pt-6">Itinerary
          Details</p>

        <!-- Tabs for Days -->
        <div class="my-8" v-if="packageDetails">
          <nav class="flex space-x-2 overflow-x-auto pb-4 border-b-2 border-gray-200">
            <button v-for="(day, index) in packageDetails.itineraries" :key="index" @click="updateSelectedDay(day)" :class="{
              'shadow-xl bg-blue-600 text-white rounded-full mx-2 px-5 py-2 text-lg font-semibold transition-transform duration-200 scale-105': selectedDay.id === day.id,
              'text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-transform duration-200 rounded-full px-6 py-2 text-lg font-semibold': selectedDay.id !== day.id,
            }" class="whitespace-nowrap">
              Day {{ day?.day }}
            </button>
          </nav>
        </div>

        <!-- Itinerary Details for Selected Day -->
        <div v-if="selectedDay" class="mt-8">
          <h3 class="text-3xl font-semibold text-gray-800 tracking-wide">Day {{ selectedDay.day }}: {{ selectedDay.date
            }}</h3>
          <ul class="space-y-6 mt-6">
            <li v-for="(activity, idx) in selectedDay.activities" :key="idx" class="flex items-center space-x-6">
              <!-- Time Section -->
              <div class="text-blue-700 text-xl font-bold w-2/12">{{ activity.time }}</div>
              <!-- Timeline and Activity Section -->
              <div class="relative w-10/12">
                <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-blue-400 h-full"></div>
                <div
                  class="ml-8 p-6 bg-gray-100 rounded-xl flex gap-7 shadow-lg hover:bg-gray-50 transition duration-200">

                  <p class="mx-4">{{ activity.activity_type }}</p>
                  <h1 class="font-bold text-lg">{{ activity.from }}</h1>
                  <p v-if="activity.to">To</p>
                  <h1 class="font-bold text-lg">{{ activity.to }}</h1>
                  <p v-if="activity.by">By</p>
                  <h1 class="font-bold text-lg text-sky-700">{{ activity.by }}</h1>

                  <p>{{ activity.description }}</p>
                  <p class="text-blue-600 font-semibold">{{ activity.created_by ? activity.created_by : 'Package Admin' }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- {{ todoList }} -->
    <!-- To-Do List Section -->
    <div v-if="currentTab === 'todo'" class="bg-green-100 py-10 px-6 max-w-screen-2xl  mx-auto shadow-2xl rounded-2xl">
      <div class="bg-white p-6 rounded-lg">
        <p class="text-4xl font-extrabold text-blue-600 pb-4 border-b-2 border-gray-200 tracking-tight">My To-Do List
        </p>

        <div class="">
          <!-- Add New To-Do Item -->
          <div class="flex gap-4 mt-2">
            <!-- <input v-model="newTodo.day" placeholder="Day Name" class="border border-gray-300 p-2 rounded-lg w-1/3"> -->
            <select v-model="newTodo.day" name="days" id="" class="border border-gray-300 p-2 rounded-lg w-1/4">
              <option value="" disabled>Select Day</option>
              <option value="-30">-30</option>
              <option value="-29">-29</option>
              <option value="-28">-28</option>
              <option value="-27">-27</option>
              <option value="-26">-26</option>
              <option value="-25">-25</option>
              <option value="-24">-24</option>
              <option value="-23">-23</option>
              <option value="-22">-22</option>
              <option value="-21">-21</option>
              <option value="-20">-20</option>
              <option value="-19">-19</option>
              <option value="-18">-18</option>
              <option value="-17">-17</option>
              <option value="-16">-16</option>
              <option value="-15">-15</option>
              <option value="-14">-14</option>
              <option value="-13">-13</option>
              <option value="-12">-12</option>
              <option value="-11">-11</option>
              <option value="-10">-10</option>
              <option value="-09">-09</option>
              <option value="-08">-08</option>
              <option value="-07">-07</option>
              <option value="-06">-06</option>
              <option value="-05">-05</option>
              <option value="-04">-04</option>
              <option value="-03">-03</option>
              <option value="-01">-01</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
            </select>

            <input v-model="newTodo.details" placeholder="Details" class="border border-gray-300 p-2 rounded-lg w-3/4">
            <button @click="addTodo" class="bg-blue-600 text-white px-6 py-2 rounded-lg">Add</button>
          </div>

          <!-- To-Do List -->
          <ul class="mt-6 space-y-4">
            <li v-for="(todo, index) in todos" :key="index"
              class="flex items-center justify-between bg-slate-50 shadow-lg p-5 rounded-xl transform transition hover:scale-100 hover:shadow-2xl">
              <div class="flex items-start space-x-6">
                <!-- Checkbox with better styling -->
                <input type="checkbox" v-model="todo.completed"
                  class="w-5 h-5 text-sky-600 rounded focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50">

                <!-- To-Do details with dynamic strike-through -->
                <div :class="{ 'line-through text-gray-400': todo.completed }" class="text-lg font-medium">
                  <span class="text-sky-600 font-bold">{{ todo.day }} Day ({{ todo.date }})</span><br>
                  <p class="mt-1 text-gray-600">{{ todo.details }}</p>
                </div>
              </div>

              <!-- Delete button with hover effects and better styling -->
              <button @click="deleteTodo(index)"
                class="bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300">
                Delete
              </button>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
  <!-- s{{ selectedDay.date}} -->
  <!-- todoList {{ todoList.id }} -->
  <!-- filteredTodoListByDate {{ filteredTodoListByDate }} -->
  <!-- selectedDay {{ selectedDay }} -->
  <!-- todoList {{ todoList }} -->
  <!-- packageDetails.itineraries = {{ packageDetails.itineraries[0] }} -->
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { itinerary } from '@/stores/itinenary.ts';
import { packages } from '@/stores/itinenary.ts';
import moment from 'moment';
import { useAuthStore } from '@/stores/AuthStore';

const auth = useAuthStore();


const route = useRoute();
const packageID = route.params.id;

// For package details
const packageDetails = ref(null);
const selectedDay = ref({});
const todoList = ref([])
// For tabs (Package Details and To-Do List)
const currentTab = ref('details');
const getPackage = async () => {
  const { data } = await api().get('package/' + packageID)
  packageDetails.value = data.data
  selectedDay.value = packageDetails.value.itineraries[0];
  todoList.value = todoList.value.filter(t => t.package.id == data.data.id)

}
const getTodo = async () => {
  const { data } = await api().get('customer-to-do-lists')
  todoList.value = data.data
}
// Fetch package details when mounted
onMounted(() => {
  getTodo()
  getPackage()
});

// Watch for route changes and refetch package details
watch(() => route, () => {
  packageDetails.value = packages.find(data => data.id == packageID);
});

const updateSelectedDay = (day) =>{
  selectedDay.value = day
  // const dayDate = day.date;
  // const dayActivities = day.activities;
  // console.log('dayDate: ' + dayDate);
  // console.log('dayActivities', dayActivities);
  // let filteredTodoListByDate = todoList.filter(t => t.date == day.date)

  let filteredTodoListByDate = todoList.filter(t => (t.date == day.date));
    todoList.map(t =>{
      let data = {
        time: t.time,
        date: t.date,
        description: t.task,
        created_by: auth.user.name
      }
      selectedDay.value.activities.push(data)
    })
     // Sort selectedDay.value.activities by time
  selectedDay.value.activities.sort((a, b) => {
    return moment(a.time, 'HH:mm').diff(moment(b.time, 'HH:mm'));
  });e
}


const todos = ref([]);
const newTodo = ref({ day: '', details: '', completed: false, date: '' });

const addTodo = () => {
  if (newTodo.value.day && newTodo.value.details) {
    let date = moment(packageDetails.value.startDate, 'Do MMM YY')
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
