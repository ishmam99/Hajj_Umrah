<template>
  <section class="w-4/5">
    <p class="text-3xl font-bold p-5 pb-10 font-mono text-cyan-600 border-b">Completed Packages</p>
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
        <table v-if="!loading && packages.length > 0" class="table w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-800 text-white items-center text-lg">
              <th>Package Name</th>
              <th>Package ID</th>
              <th>Agent Name</th>
              <th>Imam Name</th>
              <th>Local Support Name</th>
              <th>Origin Country</th>
              <th>Origin City</th>
              <th>Origin Airport</th>
              <!-- <th>Status</th> -->
              <th class="text-center">Date</th>
              <th class="text-center">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pkg in packages" :key="pkg.id" class="bg-gray-100">
              
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                      <img src="/src/assets/image/prayer-rugs.jpg" alt="Upcoming Premium Hajj Package 2026" />
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
                <p class="text-gray-600"><span class="font-semibold text-base">Started: </span>{{ pkg.start_at }}</p><br />
                <p class="text-red-600"><span class="font-semibold text-base">Ended: </span>{{ pkg.end_at }}</p>
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
onMounted(() => {
    getPackages()
})
</script>

<style scoped>
tr:nth-child(even) {
  background-color: rgba(173, 216, 230, 0.26);
}
</style>