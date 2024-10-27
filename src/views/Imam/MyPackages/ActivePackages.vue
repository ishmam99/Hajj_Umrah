<template>
    <section class="w-4/5">
        <div class="py-4 border-b-2">
            <Breadcrumb />
            <p class="text-4xl font-bold px-5 text-center font-mono text-cyan-600 ">Active Packages</p> 
        </div>

        <!-- Filters Section -->
        <div class="flex gap-4 px-5 py-4 w-full">
            <!-- Filter by Country -->
            <div class="w-1/3 flex flex-col gap-1">
                <label for="countrySort" class="mr-2">Sort by Country:</label>
                <select v-model="selectedCountry" @change="applyFilters" class="border rounded p-2">
                    <option value="" disabled>All Countries</option>
                    <option v-for="country in countryOptions" :key="country.id" :value="country.id">
                        {{ country.name }}
                    </option>
                </select>
            </div>

            <!-- Filter by City -->
            <div class="w-1/3 flex flex-col gap-1">
                <label for="countrySort" class="mr-2">Sort by City:</label>
                <select v-model="selectedCity" @change="applyFilters" class="border rounded p-2">
                    <option value="" disabled>All Cities</option>
                    <option v-for="city in cityOptions" :key="city.id" :value="city.id">
                        {{ city.name }}
                    </option>
                </select>
            </div>

            <!-- Filter by Airport -->
            <div class="w-1/3 flex flex-col gap-1"> 
                <label for="countrySort" class="mr-2">Sort by Country:</label>
                <select v-model="selectedAirport" @change="applyFilters" class="border rounded p-2">
                    <option value="" disabled>All Airports</option>
                    <option v-for="airport in airportOptions" :key="airport.id" :value="airport.id">
                        {{ airport.short_name }}
                    </option>
                </select>
            </div>
        </div>

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
                <p v-if="!loading && filteredPackages.length === 0" class="border w-1/4 mx-auto py-6 rounded my-10 bg-gray-200 text-center text-red-500 text-xl font-semibold">
                    No data available for this user
                </p>

                <!-- Data table -->
                <table v-if="!loading && filteredPackages.length > 0" class="table w-full my-2 border-collapse border border-gray-300">
                    <thead>
                        <tr class="bg-sky-600 text-white items-center text-lg">
                            <th>Package Name</th>
                            <th class="border-s border-slate-400">Package ID</th>
                            <th class="border-s border-slate-400">Agent Name</th>
                            <th class="border-s border-slate-400">Imam Name</th>
                            <th class="border-s border-slate-400">Local Support Name</th>
                            <th class="border-s border-slate-400">Origin Country</th>
                            <th class="border-s border-slate-400">Origin City</th>
                            <th class="border-s border-slate-400">Origin Airport</th>
                            <th class="text-center border-s border-slate-400">Details</th>
                            <th class="p-3 border-s border-slate-400">Status</th>
                            <th class="text-center border-s border-slate-400">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pkg in filteredPackages" :key="pkg.id" class="bg-gray-100">
                            <!-- (Data rows here, same as provided in the initial code) -->
                            <td>
                                <div class="flex items-center gap-3">
                                    <!-- <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img src="/src/assets/image/prayer-rugs.jpg" alt="Upcoming Premium Hajj Package 2026" />
                                        </div>
                                    </div> -->
                                    <div>
                                        <div class="font-bold">{{ pkg.package_title }}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="border-s border-slate-400" >{{ pkg.package_id }}</td>
                            <td class="border-s border-slate-400" >{{ pkg.agent?.user?.name }}</td>
                            <td class="border-s border-slate-400" >{{ pkg.imam?.user?.name }}</td>
                            <td class="border-s border-slate-400" >{{ pkg.support_manager?.user?.name }}</td>
                            <td class="border-s border-slate-400" >{{ pkg.country?.name }}</td>
                            <td class="border-s border-slate-400" >{{ pkg.city?.name }}</td>
                            <td class="border-s border-slate-400" >{{ pkg.airport.short_name }}</td>
                            <td class="border-s border-slate-400">
                                <button class="btn btn-primary btn-sm text-white">
                                    <router-link :to="'imam_package_details/'+pkg.id">Details</router-link>
                                </button>
                            </td>
                            <td
                            
                            class="border-s border-slate-400 " 
                            :class="{
                                'text-green-500 font-semibold ': pkg.status_of_package === 'In Plan',
                                'text-sky-500 font-semibold ': pkg.status_of_package === 'Fully Booked',
                                'text-orange-500 font-semibold ': pkg.status_of_package !== 'In Plan' && pkg.status_of_package !== 'Fully Booked'
                            }">
                                <span v-if="pkg.status_of_package === '1'">Not In Plan</span>
                                <span v-if="pkg.status_of_package === '2'">In Plan</span>
                                <span v-if="pkg.status_of_package === '3'">In Preparation</span>
                                <span v-if="pkg.status_of_package === '4'">Fully Booked</span>
                                <span v-if="pkg.status_of_package === '5'">In Approval Process</span>
                                <span v-if="pkg.status_of_package === '6'">Approved</span>
                                <span v-if="pkg.status_of_package === '7'">Published</span>
                                <span v-if="pkg.status_of_package === '7'">Discontinued</span>
                            </td>
                            
                            <td class="text-center border-s border-slate-400">
                                <p class="text-gray-600"><span class="font-semibold text-base">Started: </span>{{ pkg.start_at }}</p><br />
                                <p class="text-red-600"><span class="font-semibold text-base">Ended: </span>{{ pkg.end_at }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '@/stores/AuthStore';
import Breadcrumb from "/src/components/Breadcrumb.vue";
import { packages } from '@/stores/itinenary.ts';

const store = useAuthStore();
const packagesData = ref([]);
const loading = ref(true);
const selectedCountry = ref('');
const selectedCity = ref('');
const selectedAirport = ref('');

// Dynamic options for filters
const countryOptions = computed(() => {
    return [...new Set(packagesData.value.map(pkg => pkg.country))]
        .filter(Boolean);
});
const cityOptions = computed(() => {
    return [...new Set(packagesData.value
        .filter(pkg => !selectedCountry.value || pkg.country?.id === selectedCountry.value)
        .map(pkg => pkg.city))].filter(Boolean);
});
const airportOptions = computed(() => {
    return [...new Set(packagesData.value
        .filter(pkg => (!selectedCountry.value || pkg.country?.id === selectedCountry.value) &&
                       (!selectedCity.value || pkg.city?.id === selectedCity.value))
        .map(pkg => pkg.airport))].filter(Boolean);
});

// Filtered package data
const filteredPackages = computed(() => {
    return packagesData.value.filter(pkg => {
        return (
            (!selectedCountry.value || pkg.country?.id === selectedCountry.value) &&
            (!selectedCity.value || pkg.city?.id === selectedCity.value) &&
            (!selectedAirport.value || pkg.airport?.id === selectedAirport.value)
        );
    });
});

const applyFilters = () => {
    // The computed properties automatically update the view when filters change
};

const getPackages = async () => {
    loading.value = true;
    try {
        const { data } = await api().get('package');
        packagesData.value = data.data.filter(pkg => pkg.imam?.user?.id === store.user.id);
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    getPackages();
});
</script>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(51, 57, 59, 0.26);
}
</style>
