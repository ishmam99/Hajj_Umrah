<template>
    <section class="w-4/5 p-10">
        <Breadcrumb/>
        <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Vendor List</p>
        <div class="px-5">
            <div class="overflow-x-auto">
                <table class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                    <thead>
                        <tr class="bg-teal-700 text-white items-center text-xl">
                            <th class="border-e">No.</th>
                            <th class="border-e">Imam Name</th>
                            <th class="border-e">Phone</th>
                            <th class="border-e">Email</th>
                            <th class="border-e">Country</th>
                            <th>Address</th>
                            <!-- <th>Joined Date</th>
                            <th>Status</th>
                            <th>Actions</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(imam, index) in imams" :key="imam.id"
                            :class="index % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
                            <th class="border-e border-slate-300">{{ index + 1 }}.</th>
                            <td class="border-e border-slate-300">
                                <img :src="imam.imams_image" class="rounded-full" alt="">
                                <div class="font-bold">{{ imam.name }}</div>
                            </td>
                            <td class="border-e border-slate-300">{{ imam.user.email }}</td>
                            <td class="border-e border-slate-300">{{ imam.phone_no }}</td>
                            <td class="border-e border-slate-300">{{ imam.country }}</td>
                            <td>{{ imam.address }}</td>
                            
                            <!-- <td>
                                <button class="btn btn-outline btn-xs">Details</button>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import {ref , onMounted} from 'vue'
// import { packages } from '@/stores/itinenary.ts'
const imams = ref([])
const getImamList = async () => {
  const { data } = await api().get('imam')
  imams.value = data.data
}


onMounted(() => {
  getImamList()
})
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
    background-color: rgba(64, 73, 76, 0.181);
}
</style>