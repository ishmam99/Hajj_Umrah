<template>
    <section class="w-4/5 p-10">
        <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Upcoming Packages</p>
        <div class="px-4">
            <div class="overflow-x-visible">
                <table class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                    <thead>
                        <tr class="bg-[#088f5b] text-white items-center text-lg">
                            <!-- <th>No.</th> -->
                            <th>Package Name</th>
                            <th>Package ID</th>
                            <th>Agent Name</th>
                            <th>Imam Name</th>
                            <th>Local Support Name</th>
                            <th>Origin Country</th>
                            <th>Origin City</th>
                            <th>Origin Airport</th>
                            <th>Start Date - End Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="(pkg, index) in packages" v-if="packages.length > 0" :key="index"
                            class="bg-[#E5F9E0] shadow">
                            <!-- <td>{{ index + 1 }}.</td> -->
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img src="/src/assets/image/prayer-rugs.jpg"
                                                alt="Upcoming Premium Hajj Package 2026" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{{ pkg.package_title }}</div>
                                        <!-- <div class="text-sm opacity-50">Includes luxury accommodations</div> -->
                                    </div>
                                </div>
                            </td>
                            <!-- <td>{{ pkg.package_title }}</td> -->
                            <td>{{ pkg.package_id }}</td>
                            <td>{{ pkg.agent?.user?.name }}</td>
                            <td>{{ pkg.imam?.user?.name }}</td>
                            <td>{{ pkg.support_manager?.user?.name }}</td>
                            <td>{{ pkg.country?.name }}</td>
                            <td>{{ pkg.city?.name }}</td>
                            <td>{{ pkg.airport.short_name }}</td>
                            <td class="text-center">
                                <span class="font-medium flex justify-center items-center gap-2 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="currentColor">
                                        <path
                                            d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 10H4V19H20V10ZM15.0355 11.136L16.4497 12.5503L11.5 17.5L7.96447 13.9645L9.37868 12.5503L11.5 14.6716L15.0355 11.136ZM7 5H4V8H20V5H17V6H15V5H9V6H7V5Z">
                                        </path>
                                    </svg>
                                    {{ pkg.start_at }}
                                </span>
                                <br>
                                <span class="font-medium flex justify-center items-center gap-2 text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                        fill="currentColor">
                                        <path
                                            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9 9V15H15V9H9Z">
                                        </path>
                                    </svg>
                                    {{ pkg.end_at }}
                                </span>
                            </td>

                            <td class=" px-4 py-2">
                                <div class="flex space-x-2">
                                    <router-link :to="{ path: 'package_details/' }">
                                        <button class="btn btn-success btn-xs">
                                            Details
                                        </button>
                                    </router-link>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { packages } from '@/stores/itinenary.ts'
const packages = ref([])
const getPackages = async () => {
    const { data } = await api().get('package')
    packages.value = data.data
}
const statuses = [
    { id: 1, name: 'Not In Plan' },
    { id: 2, name: 'In Plan' },
    { id: 3, name: 'In Preparation' },
    { id: 4, name: 'Fully Booked' },
    { id: 5, name: 'In Approval Process' },
    { id: 6, name: 'Approved' },
    { id: 7, name: 'Published' },
    { id: 8, name: 'Discontinued' }
];
const getStatus = (status) => {


    return statuses.find(s => s.id == status)?.name || 'Unknown Status';
}
const deletePackage = (packageId) => {
    alert(`Package ${packageId} deleted!`)
}
onMounted(() => {
    getPackages()
})
</script>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>
