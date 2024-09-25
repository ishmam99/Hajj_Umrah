<template>
    <section class="w-full">
      <p class="text-3xl font-bold p-5 pb-10 font-mono text-cyan-600">Active Packages</p>
      <div class="px-5">
            <div class="overflow-x-auto">
                <table class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                    <thead>
                        <tr class="bg-blue-700 text-white text-center text-lg">
                            <th class="p-3">No.</th>
                            <th class="p-3">Package Name</th>
                            <th class="p-3">City</th>
                            <th class="p-3">Country</th>
                            <th class="p-3">Agent</th>
                            <th class="p-3">Support Manager</th>
                            <th class="p-3">Start Date</th>
                            <th class="p-3">End Date</th>
                            <th class="p-3">Total Days</th>
                            <th class="p-3">Status</th>
                            <th class="p-3">Progress</th>
                            <th class="p-3">Details</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <!-- row 1 -->
                        <tr v-for="(pkg, index) in packages" :key="index" class="hover:bg-gray-100">
                            <th>{{ index + 1 }}</th>
                            <td>
                                <div class="flex items-center gap-3 justify-start">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img :src="activeImg4" alt="Premium Hajj Package 2025" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{{ pkg.title }}</div>
                                        <!-- <div class="text-sm opacity-50">Exclusive Facilities</div> -->
                                    </div>
                                </div>
                            </td>
                            <td>{{ pkg.city }}</td>
                            <td>{{ pkg.country }}</td>
                            <td>{{ pkg.agent }}</td>
                            <td>{{ pkg.support_manager }}</td>
                            <td>{{ pkg.startDate }}</td>
                            <td>{{ pkg.endDate }}</td>
                            <td>21 Days</td>
                            <td :class="{
                                'text-green-500': pkg.status === 'In Plan',
                                'text-red-500': pkg.status === 'Fully Booked',
                                'text-yellow-500 font-semibold': pkg.status !== 'In Plan' && pkg.status !== 'Fully Booked'
                            }">
                                {{ pkg.status }}
                            </td>


                            <td>
                                <progress class="progress progress-info w-56" value="70" max="100"></progress>
                            </td>
                            <td>
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
import activeImg4 from "@/assets/image/hajj/hajj-5.jpg"

import { packages } from '@/stores/itinenary.ts'
</script>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>