<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select'
</script>

<template>
  <div class="px-5 bg-slate-50 py-5 w-3/4">
    <p class="text-2xl font-bold py-3 border-b">Volunteer Applicant List</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <div class="flex justify-between items-center pt-4 pb-2">
        <p class="text-2xl text-yellow-600 font-bold">Year Planer List</p>
        <input
          type="date"
          placeholder="Search by date or name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <input
          type="text"
          placeholder="Search by date or name"
          class="py-1.5 px-2 rounded-md border text-sm"
        />
        <div class="w-[200px]">
          <Select class="">
            <SelectTrigger class="w-full">
              <SelectValue placeholder="Sort By order" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Comfort The Sick"> new to old </SelectItem>
                <SelectItem value="Educate The Children"> old to new </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-center w-1/8">No.</th>
              <th class="w-1/8">Date</th>
              <th class="w-1/8">Time</th>
              <th class="p-2 text-center w-3/8">Plan Name</th>
              <!-- <th class="p-2 text-center w-2/8">Description</th> -->
              <th class="p-2 text-center w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 text-center w-1/8">01</td>
              <td class="py-4 p-2 text-center text-sm w-1/8">12/12/2023</td>
              <td class="py-4 p-2 text-center text-sm w-1/8">11.30 AM</td>
              <td class="py-4 p-2 text-center w-3/8">Education Tour</td>
              <!-- <td class="py-4 p-2 text-center w-1/8">Nearest Islamic Site</td> -->
              <td class="py-4 p-2 flex justify-center">
                <button
                  class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="py-4 p-2 text-center w-1/8">02</td>
              <td class="py-4 p-2 text-center text-sm w-1/8">12/12/2023</td>
              <td class="py-4 p-2 text-center text-sm w-1/8">11.30 AM</td>
              <td class="py-4 p-2 text-center w-3/8">Islamic Event</td>
              <!-- <td class="py-4 p-2 text-center w-1/8">Nearest Islamic Site</td> -->
              <td class="py-4 p-2 flex justify-center">
                <button
                  class="px-3 py-2 w-full rounded-md shadow-md bg-cyan-600 text-white text-sm"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Program List Table -->
    <div class="px-4 bg-white py-5 w-full">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-yellow-600 font-bold pb-2">Program List</p>
      </div>
      <hr />
      <div
        class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
      >
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-center w-1/8">No.</th>
              <th class="p-2 text-center w-3/8">Program Name(s)</th>
              <th class="p-2 text-center w-1/8">Starting Date</th>
              <th class="p-2 text-center w-1/8">Ending Date</th>
              <th class="p-2 text-center w-1/8">Time</th>
              <th class="p-2 text-center w-1/8">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="py-4 p-2 w-1/8 text-center">01</td>
              <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                <h3 class="font-bold">Save The Children</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">1 Feb 2024</td>
              <td class="py-4 p-2 text-center w-1/8">10.00 AM</td>
              <td class="py-4 p-2 text-center w-1/8">
                <Select class="">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="Comfort The Sick"> Active </SelectItem>
                      <SelectItem value="Educate The Children"> Inactive </SelectItem>
                      <SelectItem value="Shelter The Homeless"> Repeate </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            </tr>
            <tr class="bg-white">
              <td class="py-4 p-2 w-1/8 text-center">02</td>
              <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l2.jpg" alt="" class="h-10" />
                <h3 class="font-bold">Comfort The Sick</h3>
              </td>
              <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
              <td class="py-4 p-2 text-center w-1/8">1 Feb 2024</td>
              <td class="py-4 p-2 text-center w-1/8">4.00 PM</td>
              <td class="py-4 p-2 text-center w-1/8">
                <Select class="">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select one" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select</SelectLabel>
                      <SelectItem value="Comfort The Sick"> Active </SelectItem>
                      <SelectItem value="Educate The Children"> Inactive </SelectItem>
                      <SelectItem value="Shelter The Homeless"> Repeate </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Bid List Table -->
    <div class="px-4 bg-white py-5 w-full">
      <div class="flex justify-between items-center pt-4">
        <p class="text-2xl text-cyan-600 font-bold pb-2">Bid List</p>
      </div>
      <hr />
      <div class="grid grid-cols-1 gap-5 my-5">
        <div
          class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white text-xl">
                <th class="p-2 text-left">Bid Id</th>
                <th class="p-2 text-left">Project Name</th>
                <th class="p-2 text-left">Require Completion Timeframe</th>
                <th class="p-2 text-left">Budget</th>
                <th class="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">01</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                  <h3 class="font-bold">Sound System</h3>
                </td>
                <td class="py-4 p-2">6 months</td>
                <td class="py-4 p-2 font-semibold">$ 5000</td>
                <td class="py-4 p-2">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="font-bold text-xl mb-2">Sound System</div>
                          </DialogTitle>
                          <DialogDescription>
                            <img src="/src/assets/image/home/l4.jpg" alt="" />
                            <div>
                              <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                              In our noble mission, we strive to alleviate hunger and nourish the
                              vulnerable in our community. Committed to the values of compassion and
                              social responsibility, we dedicate ourselves to feeding those in need.
                              Every day, we work tirelessly to provide nutritious meals, ensuring
                              that no one goes to bed hungry. Our initiative goes beyond immediate
                              relief, aiming to empower individuals and build sustainable solutions
                              for long-term food security. With the support of our dedicated team
                              and generous community, we envision a future where hunger is
                              eradicated, fostering a world where every person has access to the
                              fundamental right of wholesome sustenance and the hope for a brighter
                              tomorrow
                            </div>
                            <div class="flex gap-5 items-center justify-between">
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Project Budget:</h1>
                                $ 5000
                              </div>
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Completion Timeframe:</h1>
                                6 months
                              </div>
                            </div>
                            <div class="flex gap-5 items-center justify-between mt-2">
                              <div>
                                <span class="text-black font-semibold">Starting Date:</span> 1 Jan
                                2024
                              </div>
                              <div>
                                <span class="text-black font-semibold">Ending Date:</span> 10 Feb
                                2024
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">02</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="/src/assets/image/home/l4.png" alt="" class="h-10" />
                  <h3 class="font-bold">Computer, Printer, Camera</h3>
                </td>
                <td class="py-4 p-2">6 months</td>
                <td class="py-4 p-2 font-semibold">$ 5000</td>
                <td class="py-4 p-2">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="font-bold text-xl mb-2">Computer, Printer, Camera</div>
                          </DialogTitle>
                          <DialogDescription>
                            <img src="/src/assets/image/home/l4.png" alt="" />
                            <div>
                              <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                              In our noble mission, we strive to alleviate hunger and nourish the
                              vulnerable in our community. Committed to the values of compassion and
                              social responsibility, we dedicate ourselves to feeding those in need.
                              Every day, we work tirelessly to provide nutritious meals, ensuring
                              that no one goes to bed hungry. Our initiative goes beyond immediate
                              relief, aiming to empower individuals and build sustainable solutions
                              for long-term food security. With the support of our dedicated team
                              and generous community, we envision a future where hunger is
                              eradicated, fostering a world where every person has access to the
                              fundamental right of wholesome sustenance and the hope for a brighter
                              tomorrow
                            </div>
                            <div class="flex gap-5 items-center justify-between">
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Budget:</h1>
                                $ 5000
                              </div>
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Completion Timeframe:</h1>
                                6 months
                              </div>
                            </div>
                            <div class="flex gap-5 items-center justify-between mt-2">
                              <div>
                                <span class="text-black font-semibold">Starting Date:</span> 1 Jan
                                2024
                              </div>
                              <div>
                                <span class="text-black font-semibold">Ending Date:</span> 10 Feb
                                2024
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>
              </tr>
              <tr class="">
                <td class="py-4 p-2">
                  <h3 class="font-bold">03</h3>
                </td>
                <td class="py-4 p-2 flex items-center gap-2">
                  <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                  <h3 class="font-bold">Sound System</h3>
                </td>
                <td class="py-4 p-2">6 months</td>
                <td class="py-4 p-2 font-semibold">$ 500</td>
                <td class="py-4 p-2">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="font-bold text-xl mb-2">Save The Children</div>
                          </DialogTitle>
                          <DialogDescription>
                            <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            <div>
                              <h1 class="font-semibold mt-2 text-lg text-black">Description</h1>
                              In our noble mission, we strive to alleviate hunger and nourish the
                              vulnerable in our community. Committed to the values of compassion and
                              social responsibility, we dedicate ourselves to feeding those in need.
                              Every day, we work tirelessly to provide nutritious meals, ensuring
                              that no one goes to bed hungry. Our initiative goes beyond immediate
                              relief, aiming to empower individuals and build sustainable solutions
                              for long-term food security. With the support of our dedicated team
                              and generous community, we envision a future where hunger is
                              eradicated, fostering a world where every person has access to the
                              fundamental right of wholesome sustenance and the hope for a brighter
                              tomorrow
                            </div>
                            <div class="flex gap-5 items-center justify-between mt-2">
                              <div>
                                <span class="text-black font-semibold">Starting Date:</span> 1 Jan
                                2024
                              </div>
                              <div>
                                <span class="text-black font-semibold">Ending Date:</span> 10 Feb
                                2024
                              </div>
                            </div>
                            <div class="flex gap-5 items-center justify-between">
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Location:</h1>
                                Masjid Premises
                              </div>
                              <div class="flex gap-2">
                                <h1 class="text-black font-semibold">Time:</h1>
                                4 PM
                              </div>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
