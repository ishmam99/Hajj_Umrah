<template>
  <section class="w-full">
    <p class="text-3xl font-bold p-5 pb-10 font-mono text-cyan-600">Completed Packages</p>
    <div class="px-5">
      <div class="overflow-x-auto">
        <table class="table w-full border-collapse border border-gray-300">
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
              <th class="text-center">Date</th>
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const packages = ref([])

const getPackages = async () => {
  const { data } = await api().get('package')
  packages.value = data.data
}
  getPackages()
</script>

<style scoped>
tr:nth-child(even) {
  background-color: rgba(173, 216, 230, 0.26);
}
</style>