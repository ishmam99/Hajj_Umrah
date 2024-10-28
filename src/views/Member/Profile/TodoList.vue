<template>
  <div class="px-[20px] bg-white py-5 rounded-md shadow-md">
    <p class="text-2xl font-bold py-3 border-b">My To Do List</p>
    <div class="bg-slate-50 rounded-lg gap-y-2 w-full px-4 py-2 border-b-gray-100 mb-2 mt-3">
      <div class="overflow-x-auto bg-slate-100 shadow">
        <table class="table-auto w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#286d71] text-white">
              <th class="border px-3 py-3">Date</th>
              <th class="border px-3 py-3">Day</th>
              <th class="border px-3 py-3">Time</th>
              <th class="border px-3 py-3">Task</th>
              <th class="border px-3 py-3">Completed Status</th>
              <th class="border px-3 py-3 text-center">Action</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todoList" :key="index" class="hover:bg-gray-50 shadow">
              <td class="border-r border-slate-700 px-4 py-2">{{ todo?.date }}</td>
              <td class="border-r border-slate-700  px-4 py-2">{{ todo?.day }}</td>
              <td class="border-r border-slate-700  px-4 py-2">{{ todo?.time }}</td>
              <td class="border-r border-slate-700  px-4 py-2">{{ todo?.details }}</td>
              <!-- <td class="border-r border-slate-700 px-4 py-2 flex gap-4 justify-between items-center">
                <select v-if="todo.status == 0"
                  class="select select-success w-full max-w-xs"
                  @change="updateStatus(todo, $event.target.value)"
                  :value="todo.status"
                >
                  <option disabled>Select Status</option>
                  <option value="0">Pending</option>
                  <option value="1">Completed</option>
                </select>
                <span v-else class="w-full badge badge-success text-base font-semibold text-white">{{ todo.status == 1 ? 'Completed' : '' }}</span>
                <button class="btn btn-xs btn-accent text-white">Submit</button>
              </td> -->
              <td class="border-r border-slate-700 px-4 py-2 flex gap-4 justify-between items-center">
  <!-- Status Dropdown -->
  <select v-if="todo.status == 0"
    class="select select-success w-full max-w-xs"
    v-model="status"
  >
    <option value="0">Pending</option>
    <option value="1">Completed</option>
  </select>

  <!-- Display Completed Status Badge -->
  <span v-if="todo.status == 1" class="w-full badge badge-success text-base font-semibold text-white">
    Completed
  </span>

  <!-- Submit Button -->
  <button 
    class="btn btn-xs btn-accent text-white"
    @click="submitStatus(todo)"
  >
    Submit
  </button>
</td>

              <!-- <td class="border-r border-slate-700 flex items-center gap-5  px-4 py-2">

                <svg v-if="todo.status == 1" @click="updateStatus(todo, 0)" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24" width="24" height="24" fill="rgba(21,175,235,1)">
                  <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z">
                  </path>
                </svg>

                <svg v-else @click="updateStatus(todo, 1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  width="24" height="24" fill="rgba(213,23,23,1)">
                  <path
                    d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z">
                  </path>
                </svg>
                {{ todo.status == 0 ? 'Pending' : 'Completed' }}
              </td> -->
              <td class="text-center"><button @click="handleDeleteToDoList(todo.id)"
                  class="btn btn-xs btn-error text-white">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>
<script setup>
// import { packages } from '@/stores/itinenary.ts'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
const todoList = ref([])
const newStatus = ref(0); // default value for new status
const deletePackage = (packageId) => {
  alert(`Package ${packageId} deleted!`)
}
const statuses = [
  { id: 1, name: 'Not In Plan' },
  { id: 2, name: 'In Plan' },
  { id: 3, name: 'In Preparation' },
  { id: 4, name: 'In Review' },
  { id: 5, name: 'In Approval Process' },
  { id: 6, name: 'Approved' },
  { id: 7, name: 'Published' },
  { id: 8, name: 'Discontinued' }
]
const getTodo = async () => {
  const { data } = await api().get('customer-to-do-lists')
  todoList.value = data.data
}
// const updateStatus = async (todo, status) => {
//   try {
//     todo._method = 'PUT'
//     todo.status = status
//     const data = await api().post('customer-to-do-lists/' + todo.id, todo)
//     if (data) {
//       Swal.fire({
//         icon: "success",
//         title: "Status Updated",
//         text: status == 1 ? "Congrats Task Completed" : "Task Unchecked Successfully",
//       });
//     }
//   }
//   catch (error) {
//     Swal.fire({
//       icon: "error",
//       title: "Status Update Failed",
//       text: "Something went wrong ,Please Contact Support",
//     });
//   }
// }

// Temporary ref to hold the dropdown status value
const status = ref(0); // Default to "Pending" (0)

const updateStatus = async (todo, status) => {
  try {
    todo._method = 'PUT';
    todo.status = status;
    const data = await api().post('customer-to-do-lists/' + todo.id, todo);
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: status == 1 ? "Congrats! Task Completed" : "Task Unchecked Successfully",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Status Update Failed",
      text: "Something went wrong, Please Contact Support",
    });
  }
};

const submitStatus = (todo) => {
  if (status.value == 0) {
    // Show error alert if "Pending" is selected when submitting
    Swal.fire({
      icon: "error",
      title: "Status is unchanged",
      text: "Select Completed Status",
    });
  } else if (status.value == 1 && todo.status !== 1) {
    // Update status only if the selected status is "Completed" and is different from the current status
    updateStatus(todo, status.value);
  }
};


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
      const data = await api().delete('customer-to-do-lists/' + id);
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
