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
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-20 flex justify-between">
        <SupplySidebar />
        <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-cyan-600 font-bold pb-2">Select Bid</p>
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
                    <th class="p-2 text-left">Vendor Id</th>
                    <th class="p-2 text-left">Budget</th>
                    <th class="p-2 text-left">Vendor Details</th>
                    <th class="p-2 text-left">Action</th>
                    <th class="p-2 text-left">Reason for (Selection/Rejection)</th>
                    <th class="p-2 text-left">Save</th>
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
                    <td class="py-4 p-2">001</td>
                    <td class="py-4 p-2 font-semibold">$ 500</td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="font-bold text-xl mb-2">Vendor Details</div>
                              </DialogTitle>
                              <DialogDescription>
                                <h1 class="text-black text-l">Vendor Logo</h1>
                                <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                                <div class="flex gap-5 items-center justify-between mt-2">
                                  <div>
                                    <span class="text-black font-semibold">Vendor Id:</span>
                                    001
                                  </div>
                                  <div>
                                    <span class="text-black font-semibold">Vendor Name:</span>
                                    Dreaming Double
                                  </div>
                                </div>
                                <div class="flex gap-5 items-center justify-between">
                                  <div>
                                    <span class="text-black font-semibold">Vendor Type:</span>
                                    Woodwork
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Location:</h1>
                                    Masjid Premises
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
                            <!-- <SelectLabel>Options</SelectLabel> -->
                            <SelectItem value="accept"> Select </SelectItem>
                            <SelectItem value="reject"> Reject </SelectItem>
                            <SelectItem value="option 1"> Substitute 1 </SelectItem>
                            <SelectItem value="option 2"> Substitute 2 </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Insert </DialogTrigger>
                          <DialogContent>
                            <input
                              type="text"
                              class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 pt-5 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                              id="exampleFormControlInput50"
                              placeholder="reason"
                              value=""
                            />
                            <button
                              class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm items-center"
                            >
                              Save
                            </button>
                          </DialogContent>
                        </Dialog>
                      </button>
                    </td>

                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Save </DialogTrigger>
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
                    <!-- <td>
                      <p class="text-lg">Dallas Electronics</p>
                    </td> -->
                    <td class="py-4 p-2">002</td>
                    <!-- <td class="py-4 p-2">10 Feb 2024</td> -->
                    <td class="py-4 p-2 font-semibold">$ 5000</td>
                    <!-- <td class="py-4 p-2">
                      <p class="text-sm font-bold text-green-600">Completed</p>
                    </td> -->
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="font-bold text-xl mb-2">Vendor Details</div>
                              </DialogTitle>
                              <DialogDescription>
                                <h1>Vendor Logo</h1>
                                <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                                <div class="flex gap-5 items-center justify-between mt-2">
                                  <div>
                                    <span class="text-black font-semibold">Vendor Id:</span>
                                    001
                                  </div>
                                  <div>
                                    <span class="text-black font-semibold">Vendor Name:</span>
                                    Dreaming Double
                                  </div>
                                </div>
                                <div class="flex gap-5 items-center justify-between">
                                  <div>
                                    <span class="text-black font-semibold">Vendor Type:</span>
                                    Woodwork
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Location:</h1>
                                    Masjid Premises
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
                            <!-- <SelectLabel>Options</SelectLabel> -->
                            <SelectItem value="accept"> Select </SelectItem>
                            <SelectItem value="reject"> Reject </SelectItem>
                            <SelectItem value="option 1"> Substitute 1 </SelectItem>
                            <SelectItem value="option 2"> Substitute 2 </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </td>
                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Insert </DialogTrigger>
                          <DialogContent>
                            <input
                              type="text"
                              class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 pt-5 py-2 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                              id="exampleFormControlInput50"
                              placeholder="reason"
                              value=""
                            />
                            <button
                              class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm items-center"
                            >
                              Save
                            </button>
                          </DialogContent>
                        </Dialog>
                      </button>
                    </td>

                    <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Save </DialogTrigger>
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
    </div>
  </DefaultLayout>
</template>
