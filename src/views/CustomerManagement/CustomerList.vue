<template>
    <section class="w-full p-10">
        <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Customer List</p>
        <div class="px-5">
            <div class="overflow-x-auto">
                <table class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                    <thead>
                        <tr class="bg-teal-700 text-white items-center text-xl">
                            <th>No.</th>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Joined Date</th>
                            <!-- <th>Status</th> -->
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(customer, index) in customers" :key="customer.id"
                            :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
                            <th>{{ index + 1 }}.</th>
                            <td>
                                <div class="font-bold">{{ customer.user.name }}</div>
                                <div class="text-sm opacity-50">{{ customer.company }}</div>
                            </td>
                            <td>{{ customer.address }}</td>
                            <td>{{ customer.country }}</td>
                            <td>{{ customer.user.email }}</td>
                            <td>{{ customer.phone_no }}</td>
                            <td>{{ moment(customer.created_at).format('Do MMM, YYYY') }}</td>
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
                              <router-link :to="'/Customer_Profile/'+customer.id">  <button class="btn btn-outline btn-xs">Details</button></router-link>
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
import { onMounted, ref } from 'vue';

const customers = ref([]);
const getCustomers = async () => {
  const { data } = await api().get('customers')
  customers.value = data.data
 }
onMounted(() => {
  getCustomers()
})
</script>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>