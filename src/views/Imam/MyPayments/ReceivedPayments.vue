<template>
    <section class="w-4/5 p-10">
        <Breadcrumb />
        <p class="text-3xl font-bold pb-2 mb-4 text-center border-b-2 font-mono text-green-600">Received Payments</p>
        <div class="px-12">
            <div class="overflow-x-auto">
                <table class="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
                    <!-- head -->
                    <thead>
                        <tr class="bg-[#0802A3] text-white text-lg">
                            <th class="p-4 border-b border-gray-300 text-left">No.</th>
                            <th class="p-4 border-b border-gray-300 text-left">Package Name</th>
                            <th class="p-4 border-b border-gray-300 text-left">Payment Date</th>
                            <th class="p-4 border-b border-gray-300 text-left">Amount Paid</th>
                            <th class="p-4 border-b border-gray-300 text-left">Status</th>
                            <th class="p-4 border-b border-gray-300 text-left">Receipt</th>
                        </tr>
                    </thead>

                    <tbody class="text-gray-700">
                        <!-- row 1 -->
                        <tr class="border-b">
                            <td class="p-4 border-r">1.</td>
                            <td class="p-4 border-r">Premium Hajj Package 2025</td>
                            <td class="p-4 border-r">February 20, 2025</td>
                            <td class="p-4 border-r">$1,500</td>
                            <td class="p-4 text-green-500 font-semibold border-r">Received</td>
                            <td class="p-4">
                                <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">
                                    View Receipt
                                </button>
                            </td>
                        </tr>

                        <!-- row 2 -->
                        <tr class="bg-gray-50 border-b">
                            <td class="p-4 border-r">2.</td>
                            <td class="p-4 border-r">Economy Hajj Package 2025</td>
                            <td class="p-4 border-r">March 15, 2025</td>
                            <td class="p-4 border-r">$500</td>
                            <td class="p-4 text-green-500 font-semibold border-r">Received</td>
                            <td class="p-4">
                                <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">
                                    View Receipt
                                </button>
                            </td>
                        </tr>

                        <!-- row 3 -->
                        <tr class="border-b">
                            <td class="p-4 border-r">3.</td>
                            <td class="p-4 border-r">Umrah Special Package 2023</td>
                            <td class="p-4 border-r">May 1, 2023</td>
                            <td class="p-4 border-r">$750</td>
                            <td class="p-4 text-green-500 font-semibold border-r">Received</td>
                            <td class="p-4">
                                <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded">
                                    View Receipt
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
    import Breadcrumb from "/src/components/Breadcrumb.vue";
</script>
<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>
