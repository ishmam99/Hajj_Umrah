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
</script>

<template>
<div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-cyan-600 font-bold pb-2">Prefered Vendor List</p>
          </div>
          <hr />
          <div class="grid grid-cols-1 gap-5 my-5">
            <div
              class="rounded-md px-2 py-3 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-xl">
                    <th class="p-2 text-left">Vendor Id</th>
                    <th class="p-2 text-left">Vendor Image</th>
                    <th class="p-2 text-left">Vendor Name</th>
                    <th class="p-2 text-left">Completed Project</th>
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
                    </td>
                    <td><h3 class="font-semibold">Humble Cup Coffee</h3></td>
                    <td class="py-4 p-2 font-semibold">4</td>
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
                                <h1 class="font-bold text-xl mb-2">Vendor Logo</h1>
                                <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                                <div class="flex mt-2 gap-5 items-center justify-between">
                                  <div>
                                    <span class="text-black font-semibold">Vendor Name:</span>
                                    Humble Cup Coffee
                                  </div>
                                  <div>
                                    <span class="text-black font-semibold">Vendor Type:</span>
                                    Beverage
                                  </div>
                                </div>
                                <div class="flex gap-5 items-center justify-between">
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Address:</h1>
                                    Texas, Masjid Premises
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Completion Project:</h1>
                                    4
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
                    </td>
                    <td class="py-4 p-2"><h3 class="font-semibold">Just For You</h3></td>
                    <td class="py-4 p-2 font-semibold">2</td>
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
                                <h1 class="font-bold text-xl mb-2">Vendor Logo</h1>
                                <img src="../../assets/image/hungry/hungry-2.jpg" alt="" />
                                <div class="flex gap-5 items-center justify-between mt-2">
                                  <div>
                                    <span class="text-black font-semibold">Vendor Name:</span>
                                    Jan 2024
                                  </div>
                                  <div>
                                    <span class="text-black font-semibold">Vendor Type:</span>
                                    Feb 2024
                                  </div>
                                </div>
                                <div class="flex gap-5 items-center justify-between">
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Address:</h1>
                                    Texas
                                  </div>
                                  <div class="flex gap-2">
                                    <h1 class="text-black font-semibold">Completion Project:</h1>
                                    2
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
</template>
