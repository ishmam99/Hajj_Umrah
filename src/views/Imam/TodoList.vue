<template>
  <div class="px-[20px] bg-white py-5 w-4/5 rounded-md shadow-md min-h-screen">
    <Breadcrumb />
    <p class="text-2xl font-bold py-3 text-center border-b-2 mb-4">My To Do List</p>

    <div class="bg-slate-50 rounded-lg gap-y-2 w-full px-4 py-2 border-b-gray-100 mb-2 mt-3">
      <!-- Loader -->
      <div v-if="loading" class="text-center py-10">
        <svg class="animate-spin h-10 w-10 text-cyan-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-2a6 6 0 00-12 0H4z"></path>
        </svg>
        <p class="text-xl text-gray-500">Loading...</p>
      </div>
      <div v-if="!loading && todoList.length > 0" class="overflow-x-auto bg-slate-100 shadow">
        <table class="table-auto w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#286d71] text-white">
              <th class="border px-3 py-3">Date</th>
              <th class="border px-3 py-3">Day</th>
              <th class="border px-3 py-3">Time</th>
              <th class="border px-3 py-3">Task</th>
              <th class="border px-3 py-3">Package</th>
              <th class="border px-3 py-3">Completed Status</th>
              <th class="border px-3 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todoList" :key="index" class="hover:bg-gray-50 shadow">
              <td class="border-r border-slate-700 px-4 py-2">{{ todo.date }}</td>
              <td class="border-r border-slate-700 px-4 py-2">{{ todo.day }}</td>
              <td class="border-r border-slate-700 px-4 py-2">{{ todo.time }}</td>
              <td class="border-r border-slate-700 px-4 py-2">{{ todo.details }}</td>
              <td class="border-r border-slate-700 px-4 py-2">{{ todo?.package?.package_title }}</td>
              <td class="border-r border-slate-700 px-2 py-2 text-center">
                <!-- Status Dropdown -->
                <select v-model="todo.status" class="border px-2 py-2 bg-white w-full text-center rounded-lg">
                  <option :value="0">Pending</option>
                  <option :value="1">Completed</option>
                </select>
              </td>
              <td class="text-center">
                <button @click="updateStatus(todo, todo.status)"
                  class="btn btn-sm rounded-2xl btn-success text-white me-2">Save
                </button>
                <button @click="handleDeleteToDoList(todo.id)"
                  class="btn btn-sm rounded-2xl btn-error text-white">Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="!loading && todoList.length == 0" class="bg-sky-600 text-white text-center py-48 text-4xl">
        No task is created for this package.
        To Create task click <router-link to="create_imam_todo_list" class="underline text-red-400 hover:text-green-500">Click here</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { packages } from '@/stores/itinenary.ts'
import Breadcrumb from "/src/components/Breadcrumb.vue";
import { useAuthStore } from '/src/stores/AuthStore.ts'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const auth = useAuthStore()
const loading = ref(true);
const route = useRoute()
const todoList = ref([])
const package_id = route.query.package_id

const getTodo = async () => {
  try {
    loading.value = true;
    const { data } = await api().get('imam-to-do-lists');
    // Apply filtering to the data.data array
    todoList.value = data.data.filter(e => e.package_id == package_id);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error Fetching To-Do List",
      text: "Could not retrieve the to-do list. Please contact support.",
    });
  }
  loading.value = false;
};

const updateStatus = async (todo, status) => {
  try {
    todo._method = 'PUT'
    todo.status = status
    todo.imam_id = auth.user.imam.id
    const data = await api().post('imam-to-do-lists/' + todo.id, todo)
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: status == 1 ? "Congrats Task Completed" : "Task Unchecked Successfully",
      });
      getTodo(); // Refresh to update the list with new statuses
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Status Update Failed",
      text: "Something went wrong, Please Contact Support",
    });
  }
}

const handleDeleteToDoList = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      const data = await api().delete('imam-to-do-lists/' + id);
      if (data) {
        Swal.fire({
          icon: "success",
          title: "Task Deleted",
          text: "Task Removed Successfully",
        });
        getTodo(); // Refresh the todo list after deletion
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Task Delete Failed",
        text: "Something went wrong, Please Contact Support",
      });
    }
  }
}

onMounted(() => {
  getTodo()
})
</script>

<style scoped>
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
