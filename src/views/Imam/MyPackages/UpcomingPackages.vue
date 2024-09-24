<template>
    <section class="w-full p-10">
        <p class="text-3xl font-bold pb-10 font-mono text-cyan-600">Upcoming Packages</p>
        <div class="px-12">
            <div class="overflow-x-auto">
                <table class="table w-full border-collapse border border-gray-300">
                    <!-- head -->
                    <thead>
                        <tr class="bg-[#088f5b] text-white items-center text-xl">
                            <th>No.</th>
                            <th>Package Name</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Agent</th>
                            <th>Support Manager</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Total Days</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr class="bg-[#E5F9E0]">
                            <th>1.</th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img src="/src/assets/image/prayer-rugs.jpg" alt="Upcoming Premium Hajj Package 2026" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Premium Hajj Package 2026</div>
                                        <div class="text-sm opacity-50">Includes luxury accommodations</div>
                                    </div>
                                </div>
                            </td>
                            <td>Histon</td>
                            <td>USA</td>
                            <td>Fatima Saeed</td>
                            <td>Sarah Al-Omari</td>
                            <td>12th May 2026</td>
                            <td>25th May 2026</td>
                            <td>14</td>
                            <td><button class="btn btn-success btn-xs">Details</button></td>
                        </tr>
                        <!-- row 2 -->
                        <tr class="bg-[#F2F6F0]">
                            <th>2.</th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img src="/src/assets/image/Use-of-Natural-Light-in-mosque-inteiror-design.jpg" alt="Upcoming Standard Umrah Package 2026" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Standard Umrah Package 2026</div>
                                        <div class="text-sm opacity-50">Affordable group package</div>
                                    </div>
                                </div>
                            </td>
                            <td>Histon</td>
                            <td>USA</td>
                            <td>Ahmed Al-Farsi</td>
                            <td>Michael Scott</td>
                            <td>5th August 2026</td>
                            <td>15th August 2026</td>
                            <td>11</td>
                            <td><button class="btn btn-success btn-xs">Details</button></td>
                        </tr>
                        <!-- row 3 -->
                        <tr class="bg-[#E5F9E0]">
                            <th>3.</th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img src="/src/assets/image/hajj/hajj-2.jpg" alt="Upcoming Deluxe Umrah Package 2026" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Deluxe Umrah Package 2026</div>
                                        <div class="text-sm opacity-50">High-end package with VIP services</div>
                                    </div>
                                </div>
                            </td>
                            <td>Histon</td>
                            <td>USA</td>
                            <td>Fatima Saeed</td>
                            <td>Natasha Romanoff</td>
                            <td>20th October 2026</td>
                            <td>30th October 2026</td>
                            <td>10</td>
                            <td><button class="btn btn-success btn-xs">Details</button></td>
                        </tr>
                        <!-- row 4 -->
                        <tr class="bg-[#F2F6F0]">
                            <th>4.</th>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle h-12 w-12">
                                            <img src="/src/assets/image/hajj/hajj-1.jpg" alt="Upcoming Economy Hajj Package 2026" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Economy Hajj Package 2026</div>
                                        <div class="text-sm opacity-50">Best budget-friendly option</div>
                                    </div>
                                </div>
                            </td>
                            <td>Histon</td>
                            <td>USA</td>
                            <td>Sarah Ali Khan</td>
                            <td>Khalid Bin-Salem</td>
                            <td>1st June 2026</td>
                            <td>15th June 2026</td>
                            <td>15</td>
                            <td><button class="btn btn-success btn-xs">Details</button></td>
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
