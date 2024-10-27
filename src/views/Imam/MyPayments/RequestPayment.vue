<template>
    <section class="w-4/5 p-10">
        <Breadcrumb />
        <p class="text-3xl font-bold pb-2 mb-4 text-center border-b-2 font-mono text-blue-600">Request Payment</p>
        <div class="px-12">
            <form class=" shadow-lg bg-gray-100 rounded-lg p-6 ">
                <div class="flex w-full gap-2">
                    <!-- Package Dropdown -->
                <div class="mb-6 w-1/2">
                    <label for="package" class="block text-lg font-semibold text-gray-700">Select Package</label>
                    <select id="package" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300">
                        <option value="premium-hajj">Premium Hajj Package</option>
                        <option value="economy-hajj">Economy Hajj Package</option>
                        <option value="umrah-special">Umrah Special Package</option>
                    </select>
                </div>

                <!-- Work Hours -->
                <div class="mb-6 w-1/2">
                    <label for="workHours" class="block text-lg font-semibold text-gray-700">Work Hours</label>
                    <input type="number" id="workHours" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter total work hours" />
                </div>
                </div>

                <!-- Commission -->
                <div class="mb-6">
                    <label for="commission" class="block text-lg font-semibold text-gray-700">Commission</label>
                    <input type="text" id="commission" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" placeholder="Enter commission amount or percentage" />
                </div>

                <!-- Payment Method -->
                <div class="mb-6">
                    <label for="paymentMethod" class="block text-lg font-semibold text-gray-700">Payment Method</label>
                    <select id="paymentMethod" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300">
                        <option value="bank-transfer">Bank Transfer</option>
                        <option value="paypal">PayPal</option>
                        <option value="cash">Cash</option>
                    </select>
                </div>

                <!-- Due Date for Submission -->
                <div class="mb-6">
                    <label for="dueDate" class="block text-lg font-semibold text-gray-700">Due Date for Submission</label>
                    <input type="date" id="dueDate" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" />
                </div>

                <!-- Comments -->
                <div class="mb-6">
                    <label for="comments" class="block text-lg font-semibold text-gray-700">Comments</label>
                    <textarea id="comments" class="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring focus:border-blue-300" rows="4" placeholder="Any additional details"></textarea>
                </div>

                <!-- Submit Button -->
                <div class="flex justify-end">
                    <button class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg">
                        Submit Request
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup>
    import Breadcrumb from "/src/components/Breadcrumb.vue";
</script>
<style scoped>
/* Optional styling for the form */
form {
    max-width: 600px;
    margin: 0 auto;
}
</style>
