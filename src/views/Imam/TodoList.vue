<template>
  <div class="px-[20px] bg-white py-5 w-4/5 rounded-md shadow-md">
    <Breadcrumb />
          <p class="text-2xl font-bold py-3 text-center border-b-2 mb-4">My To Do List</p>
          <div class="bg-slate-50 rounded-lg gap-y-2 w-full px-4 py-2 border-b-gray-100 mb-2 mt-3">
            <div class="overflow-x-auto bg-slate-100 shadow">
              <table class="table-auto w-full text-left border-collapse">
                <thead>
                  <tr class="bg-[#286d71] text-white">
                    <th class="border px-3 py-3">Date</th>
                    <th class="border px-3 py-3">Day</th>
                    <th class="border px-3 py-3">Task</th>
                    <th class="border px-3 py-3">Completed Status</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(todo, index) in todoList" :key="index" class="hover:bg-gray-50 shadow">
                    <td class="border-r border-slate-700 px-4 py-2">{{ todo.date}}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ todo.day }}</td>
                    <td class="border-r border-slate-700  px-4 py-2">{{ todo.details }}</td>
                    <td class="border-r border-slate-700 flex items-center gap-5  px-4 py-2">
                     
                      <svg v-if="todo.status == 1" @click="updateStatus(todo,0)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(21,175,235,1)"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path></svg>

                      <svg v-else @click="updateStatus(todo,1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(213,23,23,1)"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>
                      {{ todo.status == 0 ? 'Pending' : 'Completed' }}
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
</template>
<script setup>
// import { packages } from '@/stores/itinenary.ts'
import Breadcrumb from "/src/components/Breadcrumb.vue";
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
const todoList = ref([])
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
const updateStatus = async (todo,status) => {
  try {
    todo._method = 'PUT'
    todo.status = status
    const data = await api().post('customer-to-do-lists/' + todo.id, todo)
    if (data)
    {
     Swal.fire({
        icon: "success",
        title: "Status Updated",
        text: status == 1 ?"Congrats Task Completed" : "Task Unchecked Successfully",
      });
  }
  }
  catch (error)
  {
   Swal.fire({
        icon: "error",
        title: "Status Update Failed",
        text: "Something went wrong ,Please Contact Support",
      });
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
