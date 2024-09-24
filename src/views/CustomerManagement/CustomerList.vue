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
                            <th>City</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Joined Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(customer, index) in customers" :key="customer.id"
                            :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
                            <th>{{ index + 1 }}.</th>
                            <td>
                                <div class="font-bold">{{ customer.name }}</div>
                                <div class="text-sm opacity-50">{{ customer.company }}</div>
                            </td>
                            <td>{{ customer.city }}</td>
                            <td>{{ customer.country }}</td>
                            <td>{{ customer.email }}</td>
                            <td>{{ customer.phone }}</td>
                            <td>{{ customer.joinedDate }}</td>
                            <td>
                                <span :class="{
                                    'badge badge-success': customer.status === 'Active',
                                    'badge badge-warning': customer.status === 'Pending',
                                    'badge badge-error': customer.status === 'Inactive'
                                }">
                                    {{ customer.status }}
                                </span>
                            </td>
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
import { ref } from 'vue';

const customers = ref([
    {
        id: 1,
        name: 'Jayed Ahmed',
        company: 'Tech Solutions',
        city: 'New York',
        country: 'USA',
        email: 'jayed@example.com',
        phone: '+1555-1234',
        joinedDate: '2023-01-15',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Fatima Zahir',
        company: 'Innovate Inc.',
        city: 'London',
        country: 'UK',
        email: 'fatima@example.com',
        phone: '+44555-5678',
        joinedDate: '2022-10-05',
        status: 'Pending',
    },
    {
        id: 3,
        name: 'Mohammad Ali',
        company: 'Hajj Travels',
        city: 'Mecca',
        country: 'Saudi Arabia',
        email: 'ali@example.com',
        phone: '+966555-9876',
        joinedDate: '2021-06-22',
        status: 'Inactive',
    },
    // Add more customer objects as needed
]);
</script>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>