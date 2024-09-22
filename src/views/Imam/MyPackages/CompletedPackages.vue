<template>
    <section class="w-full p-10">
        <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Completed Packages</p>
        <div class="px-12">
            <div class="overflow-x-auto">
                <table class="table">
    <!-- head -->
    <thead>
        <tr class="bg-gray-800 text-white items-center text-xl">
            <th>No.</th>
            <th>Package Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Days</th>
            <th>Price</th>
            <th>Feedback</th>
            <th>Status</th>
            <th>Details</th>
        </tr>
    </thead>
    <tbody>
        <!-- row 1 -->
        <tr class="bg-gray-100">
            <th>1.</th>
            <td>
                <div class="font-bold">Premium Hajj Package 2025</div>
                <div class="text-sm opacity-50">Luxury accommodations</div>
            </td>
            <td>1st June 2025</td>
            <td>15th June 2025</td>
            <td>15</td>
            <td>$7000</td>
            <td>
                <span class="badge badge-success">Excellent</span>
            </td>
            <td>
                <span class="badge badge-outline">Completed</span>
            </td>
            <!--  -->
            <td>
                <button class="btn btn-outline btn-xs">details</button>
            </td>
        </tr>
        <!-- row 2 -->
        <tr class="bg-white">
            <th>2.</th>
            <td>
                <div class="font-bold">Economy Umrah Package 2025</div>
                        <div class="text-sm opacity-50">Affordable group package</div>
            </td>
            <td>10th March 2025</td>
            <td>20th March 2025</td>
            <td>11</td>
            <td>$2500</td>
            <td>
                <span class="badge badge-warning">Good</span>
            </td>
            <td>
                <span class="badge badge-outline">Completed</span>
            </td>
            <td>
                <button class="btn btn-outline btn-xs">details</button>
            </td>
        </tr>
        <!-- row 3 -->
        <tr class="bg-gray-100">
            <th>3.</th>
            <td>
                <div class="font-bold">Deluxe Umrah Package 2025</div>
                        <div class="text-sm opacity-50">High-end VIP services</div>
            </td>
            <td>1st December 2025</td>
            <td>10th December 2025</td>
            <td>10</td>
            <td>$5000</td>
            <td>
                <span class="badge badge-error">Average</span>
            </td>
            <td>
                <span class="badge badge-outline">Completed</span>
            </td>
            <td>
                <button class="btn btn-outline btn-xs">details</button>
            </td>
        </tr>
        <!-- row 4 -->
        <tr class="bg-white">
            <th>4.</th>
            <td>
                <div class="font-bold">Economy Hajj Package 2025</div>
                <div class="text-sm opacity-50">Best budget-friendly option</div>
            </td>
            <td>5th July 2025</td>
            <td>20th July 2025</td>
            <td>16</td>
            <td>$3500</td>
            <td>
                <span class="badge badge-success">Excellent</span>
            </td>
            <td>
                <span class="badge badge-outline">Completed</span>
            </td>
            <td>
                <button class="btn btn-outline btn-xs">details</button>
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