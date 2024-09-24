<template>
    <section class="w-full">
      
        <div class="px-6">
            <div class="px-5 bg-slate-50 py-5 w-4/4">
              <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Imam Package Details</p>
            
                <div class="relative h-80 w-full bg-gray-300 rounded-t-lg shadow-xl overflow-hidden">
                  <img src="/src/assets/image/hajj/hajj-2.jpg" alt="Package Cover" class="h-full w-full object-cover" />
                  <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-6 px-8">
                    <p class="text-white text-5xl font-extrabold tracking-wide drop-shadow-md">{{ packageDetails?.title }}</p>
                    <p class="text-white text-2xl font-semibold mt-1">{{ packageDetails?.code }}</p>
                    <p class="text-white text-lg mt-2">{{ packageDetails?.startDate }} - {{ packageDetails?.endDate }}</p>
                  </div>
                </div>
                
                <!-- Tabs for switching between Package Details and To-Do List -->
                <div class="flex items-baseline bg-blue-600 justify-between w-full gap-16 text-2xl font-semibold pt-6">
                  <button
                    @click="currentTab = 'details'"
                    :class="{
                      ' bg-green-100 border-blue-600 text-blue-600': currentTab === 'details',
                      'bg-blue-600 text-white': currentTab !== 'details',
                    }"
                    class="w-full py-4 rounded-e flex justify-center items-center"
                  >
                    Package Details
                  </button>
                  <button
                    @click="currentTab = 'todo'"
                    :class="{
                      ' bg-green-100 border-blue-600 text-blue-600': currentTab === 'todo',
                      'bg-blue-600 text-white': currentTab !== 'todo',
                    }"
                    class="rounded-s py-4 w-full flex justify-center items-center "
                  >
                    To-Do List
                  </button>
                </div>
            
                <!-- Conditional Rendering for Package Details and To-Do List -->
                <div v-if="currentTab === 'details'" class="bg-green-100 py-10">
                  <!-- Package Details Content -->
            
                  <div v-if="packageDetails" class="px-6 py-10 max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl ">
                    <div class="flex items-center bg-sky-600 py-6 justify-between px-4 rounded text-xl text-white font-semibold">
                      <p class=" px-1 text-center w-full">Package ID: <span class="">{{ packageDetails.pkgId }}</span></p>
                      <p class="border-s-2 px-1 text-center w-full">Origin Country: <span class="">{{ packageDetails.country }}</span></p>
                      <p class="border-s-2 px-1 text-center w-full">Origin City: <span class="">{{ packageDetails.city }}</span></p>  
                      <p class="border-s-2 px-1 text-center w-full">Origin Airport: <span class="">{{ packageDetails.airport }}</span></p>  
                    </div>
                    <p class="text-4xl font-extrabold text-blue-600 pb-8 border-b-2 border-gray-200 tracking-tight pt-6">Itinerary Details</p>
                   
            
                    <!-- Tabs for Days -->
                    <div class="my-8">
                      <nav class="flex space-x-4 overflow-x-auto pb-4 border-b-2 border-gray-200">
                        <button
                          v-for="(day, index) in itinerary"
                          :key="index"
                          @click="selectedDay = index"
                          :class="{
                            'shadow-xl bg-blue-600 text-white rounded-full mx-2 px-6 py-2 text-lg font-semibold transition-transform duration-200 scale-105': selectedDay === index,
                            'text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-transform duration-200 rounded-full px-6 py-2 text-lg font-semibold': selectedDay !== index,
                          }"
                          class="whitespace-nowrap"
                        >
                          {{ day.day }}
                        </button>
                      </nav>
                    </div>
            
                    <!-- Itinerary Details for Selected Day -->
                    <div v-if="itinerary[selectedDay]" class="mt-8">
                      <h3 class="text-3xl font-semibold text-gray-800 tracking-wide">{{ itinerary[selectedDay].day }}: {{ itinerary[selectedDay].date }}</h3>
                      <ul class="space-y-6 mt-6">
                        <li v-for="(event, idx) in itinerary[selectedDay].events" :key="idx" class="flex items-start space-x-6">
                          <div class="text-blue-700 text-xl font-bold w-2/12">{{ event.time }}</div>
                          <div class="relative w-10/12">
                            <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 bg-blue-400 h-full"></div>
                            <div class="ml-8 p-6 bg-gray-100 rounded-xl shadow-lg hover:bg-gray-50 transition duration-200">
                              <p class="text-gray-800 font-medium">{{ event.activity }}</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            
                <!-- To-Do List Section -->
                <div v-if="currentTab === 'todo'" class="bg-green-100 py-10 px-6 max-w-screen-2xl  mx-auto shadow-2xl rounded-2xl">
                  <div class="bg-white p-6 rounded-lg">
                    <p class="text-4xl font-extrabold text-blue-600 pb-4 border-b-2 border-gray-200 tracking-tight">To-Do List</p>
            
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
              <li v-for="(todo, index) in todos" :key="index" class="flex items-center justify-between bg-slate-50 shadow-lg p-5 rounded-xl transform transition hover:scale-100 hover:shadow-2xl">
                <div class="flex items-start space-x-6">
                  <!-- Checkbox with better styling -->
                  <input type="checkbox" v-model="todo.completed" class="w-5 h-5 text-sky-600 rounded focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50">
                  
                  <!-- To-Do details with dynamic strike-through -->
                  <div :class="{ 'line-through text-gray-400': todo.completed }" class="text-lg font-medium">
                    <span class="text-sky-600 font-bold">{{ todo.day }} Day ({{ todo.date }})</span><br>
                    <p class="mt-1 text-gray-600">{{ todo.details }}</p>
                  </div>
                </div>
                
                <!-- Delete button with hover effects and better styling -->
                <button 
                  @click="deleteTodo(index)" 
                  class="bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300">
                  Delete
                </button>
              </li>
            </ul>
            
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { itinerary } from '@/stores/itinenary.ts';
import { packages } from '@/stores/itinenary.ts';
import moment from 'moment';

const route = useRoute();
const packageID = route.params.id;

// For package details
const packageDetails = ref(null);
const selectedDay = ref(0);

// For tabs (Package Details and To-Do List)
const currentTab = ref('details'); 

// Fetch package details when mounted
onMounted(() => {
  packageDetails.value = packages.find(data => data.id == packageID);
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
    newTodo.value.date = moment(packageDetails.value.startDate,'Do MMM YY').add('days', parseInt(newTodo.value.day)).format("MMM Do YY")
    console.log(newTodo.value.date);
    todos.value.push({ ...newTodo.value });
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


<style scoped>
tr:nth-child(even) {
  background-color: rgba(173, 216, 230, 0.26);
}
</style>