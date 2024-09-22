<template>
    <section class="w-full p-10">
        <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Pending Payments</p>
        <div class="px-12">
            <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
            <!-- head -->
            <thead>
                <tr class="bg-[#0802A3] text-white text-lg">
                    <th class="p-4 border-b border-gray-300 text-left">No.</th>
                    <th class="p-4 border-b border-gray-300 text-left">Package Name</th>
                    <th class="p-4 border-b border-gray-300 text-left">Due Date</th>
                    <th class="p-4 border-b border-gray-300 text-left">Amount Due</th>
                    <th class="p-4 border-b border-gray-300 text-left">Status</th>
                    <th class="p-4 border-b border-gray-300 text-left">Action</th>
                </tr>
            </thead>

            <tbody class="text-gray-700">
                <!-- row 1 -->
                <tr class="border-b">
                    <td class="p-4 border-r">1.</td>
                    <td class="p-4 border-r">Premium Hajj Package 2025</td>
                    <td class="p-4 border-r">March 1, 2025</td>
                    <td class="p-4 border-r">$1,500</td>
                    <td class="p-4 text-yellow-500 font-semibold border-r">Pending</td>
                    <td class="p-4">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                            Pay Now
                        </button>
                    </td>
                </tr>

                <!-- row 2 -->
                <tr class="bg-gray-50 border-b">
                    <td class="p-4 border-r">2.</td>
                    <td class="p-4 border-r">Economy Hajj Package 2025</td>
                    <td class="p-4 border-r">April 5, 2025</td>
                    <td class="p-4 border-r">$500</td>
                    <td class="p-4 text-yellow-500 font-semibold border-r">Pending</td>
                    <td class="p-4">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
                            Pay Now
                        </button>
                    </td>
                </tr>

                <!-- row 3 -->
                <tr class="border-b">
                    <td class="p-4 border-r">3.</td>
                    <td class="p-4 border-r">Umrah Special Package 2023</td>
                    <td class="p-4 border-r">June 1, 2023</td>
                    <td class="p-4 border-r">$750</td>
                    <td class="p-4 text-green-500 font-semibold border-r">Completed</td>
                    <td class="p-4">
                        <button class="bg-green-400 text-white font-semibold px-8 py-2 rounded cursor-not-allowed" disabled>
                            Paid
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        </div>
    </section>
</template>

<style scoped>
tr:nth-child(even) {
    background-color: rgba(173, 216, 230, 0.26);
}
</style>