<template>
    <section class="w-4/5">
      <p class="text-3xl font-bold p-5 pb-10 font-mono text-cyan-600 border-b">Upcoming Packages</p>
      <div class="px-5">
            <div class="overflow-x-auto">
                <!-- Loader -->
                <div v-if="loading" class="text-center py-10">
                    <svg class="animate-spin h-10 w-10 text-cyan-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-2a6 6 0 00-12 0H4z"></path>
                    </svg>
                    <p class="text-xl text-gray-500">Loading...</p>
                </div>
                
                <!-- No data message -->
                <p v-if="!loading && packages.length === 0" class="border w-1/4 mx-auto py-6 rounded my-10 bg-gray-200 text-center text-red-500 text-xl font-semibold">
                    No data available for this user
                </p>
                <!-- If data is available, show the table -->
                <table v-if="!loading && packages.length > 0" class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                    <thead>
                        <tr class="bg-[#088f5b] text-white items-center text-lg">
                            <th>Package Name</th>
                            <th>Package ID</th>
                            <th>Agent Name</th>
                            <th>Imam Name</th>
                            <th>Local Support Name</th>
                            <th>Origin Country</th>
                            <th>Origin City</th>
                            <th>Origin Airport</th>
                            <th>Start Date - End Date</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr v-for="(pkg, index) in packages" :key="index" class="bg-[#E5F9E0] shadow">
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
                                    </div>
                                </div>
                            </td>
                            <td>{{ pkg.package_id }}</td>
                            <td>{{ pkg.agent?.user?.name }}</td>
                            <td>{{ pkg.imam?.user?.name }}</td>
                            <td>{{ pkg.support_manager?.user?.name }}</td>
                            <td>{{ pkg.country?.name }}</td>
                            <td>{{ pkg.city?.name }}</td>
                            <td>{{ pkg.airport.short_name }}</td>
                            <td class="text-center">
                                <span class="font-medium flex justify-center items-center gap-2 text-green-600">
                                    {{ pkg.start_at }}
                                </span>
                                <br>
                                <span class="font-medium flex justify-center items-center gap-2 text-red-500">
                                    {{ pkg.end_at }}
                                </span>
                            </td>
                            <td class="border-s border-slate-200">
                                <button class="btn btn-primary btn-xs text-white">
                                    <router-link :to="'imam_package_details/'+pkg.id">Details</router-link>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useAuthStore } from '@/stores/AuthStore';
import { ref, onMounted } from 'vue'
const loading = ref(true);
// import { packages } from '@/stores/itinenary.ts'
const store = useAuthStore();

const packages = ref([])
const getPackages = async () => {
    loading.value = true; // Start loading
    try {
        const { data } = await api().get('package');
        packages.value = data.data.filter(pkg => pkg.imam?.user?.id === store.user.id);
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false; // End loading
    }
};
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
