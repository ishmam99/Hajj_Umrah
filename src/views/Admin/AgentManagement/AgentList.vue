<template>
    <section class="w-full py-10 container">
        <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Agent List</p>
        <div class="px-5">
            <div class="overflow-x-auto ">
                <tr v-if="agents.length === 0" class="mb-20">
                    <td colspan="8" class="py-10 text-center">
                      <p class="text-3xl text-red-600 text-center mt-12 font-semibold">
                        No Agents available at the moment
                      </p>
                      <p class="text-lg text-gray-500 text-center mb-16">
                        You're all caught up! Keep an eye out for new agents.
                      </p>
                    </td>
                  </tr>
                <table class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                     <!-- {{ agents }} -->
                    <thead>
                        <tr class="bg-teal-700 text-white items-center text-xl">
                            <th>No.</th>
                            <th>Agent Name</th>
                            <!-- <th>City</th> -->
                            <th>Country</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Joined Date</th>
                            <!-- <th>Status</th> -->
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(customer, index) in agents" :key="customer.id"
                            :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
                            <th>{{ index + 1 }}.</th>
                            <td>
                                <div class="font-bold">{{ customer?.name }}</div>
                                <div class="text-sm opacity-50">{{ customer.company }}</div>
                            </td>
                            <!-- <td>{{ customer?.city }}</td> -->
                            <td>{{ customer?.country }}</td>
                            <td>{{ customer?.user.email }}</td>
                            <td>{{ customer?.phone_no }}</td>
                            <td> {{moment(customer?.created_at).format("MMM Do YYYY")}}</td>
                            <!-- <td>
                                <span :class="{
                                    'badge badge-success': customer.status === 'Active',
                                    'badge badge-warning': customer.status === 'Pending',
                                    'badge badge-error': customer.status === 'Inactive'
                                }">
                                    {{ customer.status }}
                                </span>
                            </td> -->
                            <td>
                                <button class="btn btn-outline btn-xs">Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import moment from 'moment';
import {ref , onMounted} from 'vue'

const agents = ref([])
const getAgents = async () => {
  const { data } = await api().get('agents')
  agents.value = data.data
}


onMounted(() => {
    getAgents()
})
</script>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>