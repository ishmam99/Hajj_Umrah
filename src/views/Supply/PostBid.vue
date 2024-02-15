<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-20 flex justify-between">
        <SupplySidebar />
        <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-teal-700 font-bold pb-2">Bid List</p>
          </div>
          <hr />
          <div
            class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
          >
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white text-xl">
                  <th class="p-2 text-left">Bid Id</th>
                  <th class="p-2 text-left">Bid Title</th>
                  <th class="p-2 text-left">Post Date From</th>
                  <th class="p-2 text-left">Post Date To</th>
                  <th class="p-2 text-left">Details</th>
                  <th class="p-2 text-left">Action</th>
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
                  <td class="py-4 p-2">1 Jan 2024</td>
                  <td class="py-4 p-2">1 Feb 2024</td>
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
                                vulnerable in our community. Committed to the values of compassion
                                and social responsibility, we dedicate ourselves to feeding those in
                                need. Every day, we work tirelessly to provide nutritious meals,
                                ensuring that no one goes to bed hungry. Our initiative goes beyond
                                immediate relief, aiming to empower individuals and build
                                sustainable solutions for long-term food security. With the support
                                of our dedicated team and generous community, we envision a future
                                where hunger is eradicated, fostering a world where every person has
                                access to the fundamental right of wholesome sustenance and the hope
                                for a brighter tomorrow
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
                  <td class="py-4 p-2">
                    <Select>
                      <SelectTrigger class="w-full">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select</SelectLabel>
                          <SelectItem value="Comfort The Sick"> Post </SelectItem>
                          <SelectItem value="Educate The Children"> Withdrawal </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                  <td class="py-4 p-2">1 Jan 2024</td>
                  <td class="py-4 p-2">10 Feb 2024</td>
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
                                vulnerable in our community. Committed to the values of compassion
                                and social responsibility, we dedicate ourselves to feeding those in
                                need. Every day, we work tirelessly to provide nutritious meals,
                                ensuring that no one goes to bed hungry. Our initiative goes beyond
                                immediate relief, aiming to empower individuals and build
                                sustainable solutions for long-term food security. With the support
                                of our dedicated team and generous community, we envision a future
                                where hunger is eradicated, fostering a world where every person has
                                access to the fundamental right of wholesome sustenance and the hope
                                for a brighter tomorrow
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
                  <td class="py-4 p-2">
                    <Select>
                      <SelectTrigger class="w-full">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select</SelectLabel>
                          <SelectItem value="Comfort The Sick"> Post </SelectItem>
                          <SelectItem value="Educate The Children"> Withdrawal </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                  <td class="py-4 p-2">1 Jan 2024</td>
                  <td class="py-4 p-2">1 Feb 2024</td>
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
                                vulnerable in our community. Committed to the values of compassion
                                and social responsibility, we dedicate ourselves to feeding those in
                                need. Every day, we work tirelessly to provide nutritious meals,
                                ensuring that no one goes to bed hungry. Our initiative goes beyond
                                immediate relief, aiming to empower individuals and build
                                sustainable solutions for long-term food security. With the support
                                of our dedicated team and generous community, we envision a future
                                where hunger is eradicated, fostering a world where every person has
                                access to the fundamental right of wholesome sustenance and the hope
                                for a brighter tomorrow
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
                  <td class="py-4 p-2">
                    <Select>
                      <SelectTrigger class="w-full">
                        <SelectValue placeholder="Select one" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select</SelectLabel>
                          <SelectItem value="Comfort The Sick"> Post </SelectItem>
                          <SelectItem value="Educate The Children"> Withdrawal </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
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
