<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'

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
 <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-cyan-600 font-bold pb-2">Completed Bid</p>
          </div>
          <hr />
          <div class="grid grid-cols-1 gap-5 my-5">
            <div
              class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-sm">
                    <th class="p-2 text-left">Bid Id</th>
                    <th class="p-2 text-left">Project Name</th>
                    <th class="p-2 text-left">Project Description</th>
                    <th class="p-2 text-left">Project Budget</th>
                    <th class="p-2 text-left">Project Completion Date</th>
                    <th class="p-2 text-left">Bids Submitted</th>
                    <th class="p-2 text-left">Selected Bidder Id</th>
                    <th class="p-2 text-left">Substitute Bidder 1</th>
                    <th class="p-2 text-left">Substitute Bidder 2</th>
                    <th class="p-2 text-left">Rejected Bidders</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td class="py-4 p-2 gap-2">
                      <h3 class="font-bold">01</h3>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <h3 class="font-bold">Sound System</h3>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="text-xl mb-2">
                                  <span class="font-bold">Project Name: </span>Sound System
                                </div>
                              </DialogTitle>
                              <DialogDescription>
                                <img src="/src/assets/image/home/l4.jpg" alt="" />
                                <div>
                                  <h1 class="font-semibold mt-2 text-lg text-black">
                                    Project Description:
                                  </h1>
                                  In our noble mission, we strive to alleviate hunger and nourish
                                  the vulnerable in our community. Committed to the values of
                                  compassion and social responsibility, we dedicate ourselves to
                                  feeding those in need. Every day, we work tirelessly to provide
                                  nutritious meals, ensuring that no one goes to bed hungry. Our
                                  initiative goes beyond immediate relief, aiming to empower
                                  individuals and build sustainable solutions for long-term food
                                  security.
                                </div>
                                <div class="flex gap-5 items-center justify-between mt-2">
                                  <div>
                                    <span class="text-black font-bold">Project Budget:</span>
                                    $ 500
                                  </div>
                                  <div>
                                    <span class="text-black font-bold">Completion Timeframe:</span>
                                    6 months
                                  </div>
                                </div>
                                <div class="flex mt-2 gap-5 items-center justify-between">
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-bold">Location:</h1>
                                    Masjid Premises
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-bold">Time:</h1>
                                    20th February
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </button>
                    </td>
                    <td class="py-4 p-2 font-semibold">$ 500</td>
                    <td class="py-4 p-2">3 March 2024</td>
                    <td class="py-4 p-2">30</td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          001
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2">
                                <span class="font-bold">Vendor Id: </span>001
                              </div>
                              <h1 class="text-l mb-2">Vendor Logo</h1>
                              <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            </DialogTitle>
                            <DialogDescription>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Name:</span>
                                  Dreaming Double
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Type:</span>
                                  Sound System
                                </div>
                              </div>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Project Budget:</span>
                                  $ 500
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold"
                                    >Completion Timeframe:</span
                                  >
                                  6 months
                                </div>
                              </div>
                              <div class="flex mt-2 gap-5 items-center justify-between">
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Vendor Address:</h1>
                                  Masjid Premises
                                </div>
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Start Time:</h1>
                                  20th February
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          Details
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2">
                                <span class="font-bold">Vendor Id: </span>002
                              </div>
                              <h1 class="text-l mb-2">Vendor Logo</h1>
                              <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            </DialogTitle>
                            <DialogDescription>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Name:</span>
                                  Dreaming Double
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Type:</span>
                                  Sound System
                                </div>
                              </div>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Project Budget:</span>
                                  $ 500
                                </div>
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Vendor Address:</h1>
                                  Masjid Premises
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          Details
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2">
                                <span class="font-bold">Vendor Id: </span>003
                              </div>
                              <h1 class="text-l mb-2">Vendor Logo</h1>
                              <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            </DialogTitle>
                            <DialogDescription>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Name:</span>
                                  Dreaming Double
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Type:</span>
                                  Sound System
                                </div>
                              </div>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Project Budget:</span>
                                  $ 500
                                </div>
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Vendor Address:</h1>
                                  Masjid Premises
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          Details
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2 text-center">
                                <span class="font-semibold">Rejected Bidder List </span>
                              </div>
                            </DialogTitle>
                            <DialogDescription>
                              <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
                              <div class="flex flex-col">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                      <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                          <tr>
                                            <th scope="col" class="px-6 py-4">Vendor Id</th>
                                            <th scope="col" class="px-6 py-4">Vendor Name</th>
                                            <th scope="col" class="px-6 py-4">Vendor Type</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                                              001
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                              Just For You
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Woodwork</td>
                                          </tr>
                                          <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                                              002
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                              Alex Pieterson
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Photography</td>
                                          </tr>
                                          <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                                              003
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                              Popcorn Heaven
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Food</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="py-4 p-2 gap-2">
                      <h3 class="font-bold">02</h3>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <h3 class="font-bold">Printer, Computer</h3>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="font-bold text-xl mb-2">
                                  <span>Project Name: </span>Printer, Computer
                                </div>
                              </DialogTitle>
                              <DialogDescription>
                                <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                                <div>
                                  <h1 class="font-semibold mt-2 text-lg text-black">
                                    Project Description:
                                  </h1>
                                  In our noble mission, we strive to alleviate hunger and nourish
                                  the vulnerable in our community. Committed to the values of
                                  compassion and social responsibility, we dedicate ourselves to
                                  feeding those in need. Every day, we work tirelessly to provide
                                  nutritious meals, ensuring that no one goes to bed hungry. Our
                                  initiative goes beyond immediate relief, aiming to empower
                                  individuals and build sustainable solutions for long-term food
                                  security.
                                </div>
                                <div class="flex gap-5 items-center justify-between mt-2">
                                  <div>
                                    <span class="text-black text-l font-bold">Project Budget:</span>
                                    $ 500
                                  </div>
                                  <div>
                                    <span class="text-black text-l font-bold"
                                      >Completation Timeframe:</span
                                    >
                                    6 months
                                  </div>
                                </div>
                                <div class="flex mt-2 gap-5 items-center justify-between">
                                  <div class="flex gap-2">
                                    <h1 class="text-black text-l font-bold">Location:</h1>
                                    Masjid Premises
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black text-l font-bold">Time:</h1>
                                    30 March
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </button>
                    </td>
                    <td class="py-4 p-2 font-semibold">$ 500</td>
                    <td class="py-4 p-2">3 March 2024</td>
                    <td class="py-4 p-2">30</td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          002
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2">
                                <span class="font-bold">Vendor Id: </span>001
                              </div>
                              <h1 class="text-l mb-2">Vendor Logo</h1>
                              <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            </DialogTitle>
                            <DialogDescription>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Name:</span>
                                  Dreaming Double
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Type:</span>
                                  Sound System
                                </div>
                              </div>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Project Budget:</span>
                                  $ 500
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold"
                                    >Completion Timeframe:</span
                                  >
                                  6 months
                                </div>
                              </div>
                              <div class="flex mt-2 gap-5 items-center justify-between">
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Vendor Address:</h1>
                                  Masjid Premises
                                </div>
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Start Time:</h1>
                                  20th February
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          Details
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2">
                                <span class="font-bold">Vendor Id: </span>002
                              </div>
                              <h1 class="text-l mb-2">Vendor Logo</h1>
                              <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            </DialogTitle>
                            <DialogDescription>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Name:</span>
                                  Dreaming Double
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Type:</span>
                                  Sound System
                                </div>
                              </div>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Project Budget:</span>
                                  $ 500
                                </div>
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Vendor Address:</h1>
                                  Masjid Premises
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          Details
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2">
                                <span class="font-bold">Vendor Id: </span>003
                              </div>
                              <h1 class="text-l mb-2">Vendor Logo</h1>
                              <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                            </DialogTitle>
                            <DialogDescription>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Name:</span>
                                  Dreaming Double
                                </div>
                                <div>
                                  <span class="text-black text-l font-bold">Vendor Type:</span>
                                  Sound System
                                </div>
                              </div>
                              <div class="flex gap-5 items-center justify-between mt-2">
                                <div>
                                  <span class="text-black text-l font-bold">Project Budget:</span>
                                  $ 500
                                </div>
                                <div class="flex gap-2">
                                  <h1 class="text-black text-l font-bold">Vendor Address:</h1>
                                  Masjid Premises
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                    <td class="py-4 p-2">
                      <Dialog>
                        <DialogTrigger
                          class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm"
                        >
                          Details
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <div class="text-l mb-2 text-center">
                                <span class="font-semibold">Rejected Bidder List </span>
                              </div>
                            </DialogTitle>
                            <DialogDescription>
                              <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
                              <div class="flex flex-col">
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                      <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                          <tr>
                                            <th scope="col" class="px-6 py-4">Vendor Id</th>
                                            <th scope="col" class="px-6 py-4">Vendor Name</th>
                                            <th scope="col" class="px-6 py-4">Vendor Type</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                                              001
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                              Just For You
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Woodwork</td>
                                          </tr>
                                          <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                                              002
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                              Alex Pieterson
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Photography</td>
                                          </tr>
                                          <tr class="border-b dark:border-neutral-500">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                                              003
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">
                                              Popcorn Heaven
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">Food</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
</template>
