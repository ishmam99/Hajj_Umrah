<template>
    <section class="w-full py-10">
        <p class="text-3xl font-bold pb-10 ps-6 font-mono text-cyan-600">Active Packages</p>
        <div class="px-5">
            <div class="overflow-x-auto">
                <table class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                    <thead>
                        <tr class="bg-blue-700 text-white text-center text-lg">
                            <th class="p-3">No.</th>
                            <th class="p-3 border-s">Package Name</th>
                            <th class="p-3 border-s">City</th>
                            <th class="p-3 border-s">Country</th>
                            <th class="p-3 border-s">Agent</th>
                            <th class="p-3 border-s">Support Manager</th>
                            <th class="p-3 border-s">Start Date</th>
                            <th class="p-3 border-s">End Date</th>
                            <th class="p-3 border-s">Total Days</th>
                            <th class="p-3 border-s">Status</th>
                            <th class="p-3 border-s">Progress</th>
                            <th class="p-3 border-s">Details</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        <!-- row 1 -->
                        <tr v-for="(pkg, index) in packages" :key="index" class="hover:bg-gray-100">
                            <th>{{ index + 1 }}</th>
                            <td class="border-s border-slate-200">
                                <div class="flex items-center gap-3 justify-start">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img :src="activeImg1" alt="Premium Hajj Package 2025" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">{{ pkg.title }}</div>
                                        <div class="text-sm opacity-50">Exclusive Facilities</div>
                                    </div>
                                </div>
                            </td>
                            <td class="border-s border-slate-200">{{ pkg.city }}</td>
                            <td class="border-s border-slate-200">{{ pkg.country }}</td>
                            <td class="border-s border-slate-200">{{ pkg.agent }}</td>
                            <td class="border-s border-slate-200">{{ pkg.support_manager }}</td>
                            <td class="border-s border-slate-200">{{ pkg.startDate }}</td>
                            <td class="border-s border-slate-200">{{ pkg.endDate }}</td>
                            <td class="border-s border-slate-200">21 Days</td>
                            <td
                            class="border-s border-slate-200" 
                            :class="{
                                'text-green-500': pkg.status === 'In Plan',
                                'text-red-500': pkg.status === 'Fully Booked',
                                'text-yellow-500 font-semibold': pkg.status !== 'In Plan' && pkg.status !== 'Fully Booked'
                            }">
                                {{ pkg.status }}
                            </td>


                            <td class="border-s border-slate-200">
                                <progress class="progress progress-info w-56" value="70" max="100"></progress>
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
import activeImg1 from "@/assets/image/hajj/Platinum-Maktab-A-1.jpg"
import activeImg2 from "@/assets/image/hajj/hajj-3.webp"
import activeImg3 from "@/assets/image/hajj/hajj-4.webp"
import activeImg4 from "@/assets/image/hajj/hajj-5.jpg"

import { packages } from '@/stores/itinenary.ts'
</script>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>