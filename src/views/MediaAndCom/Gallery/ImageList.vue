<template>
  <div class="px-4 bg-white py-5 w-3/4">
          <div class="flex justify-between items-center pt-4">
            <p class="text-2xl text-yellow-600 font-bold pb-2">Image List</p>
          </div>
          <hr />
          <div
            class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
          >
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-white text-xl">
                  <th class="p-2 text-left">Number</th>
                  <th class="p-2 text-left">Category</th>
                  <th class="p-2 text-left">Title</th>
                  <th class="p-2 text-left">Action</th>
                  <th class="p-2 text-left">Status</th>
                  <th class="p-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <td class="py-4 p-2 gap-2">
                    <h3 class="font-bold">01</h3>
                  </td>
                  <td class="py-4 p-2 flex items-center gap-2">
                    <img src="/src/assets/image/home/l2.jpg" alt="" class="h-10" />
                    <h3 class="font-bold">Save The Children</h3>
                  </td>
                  <td>
                    <p class="text-lg">Khutbah Image</p>
                  </td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-blue-600">Pending</p>
                  </td>
                  <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="text-xl mb-2">
                                  <span class="font-bold">Project Name:</span> Save The Children
                                </div>
                              </DialogTitle>
                              <DialogDescription>
                                <img src="/src/assets/image/home/l4.png" alt="" />
                                <div>
                                  <h1 class="font-semibold mt-2 text text-black">
                                    Project Description:
                                  </h1>
                                  Printers are programmed using a programming language. The printer
                                  interprets the program, and the outputs the result. There are two
                                  big classes of such languages: Page description languages, and
                                  Printer Control languages.
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
                    <img src="/src/assets/image/home/l2.jpg" alt="" class="h-10" />
                    <h3 class="font-bold">Enhance Social Justice</h3>
                  </td>
                  <td>
                    <p class="text-lg">Khutbah Image</p>
                  </td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-green-600">Completed</p>
                  </td>
                  <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="text-xl mb-2">
                                  <span class="font-bold">Project Name:</span> Enhance Social Justice
                                </div>
                              </DialogTitle>
                              <DialogDescription>
                                <img src="../../../assets/image/hungry/hungry-2.jpg" alt="" />
                                <div>
                                  <h1 class="font-semibold mt-2 text text-black">
                                    Project Description:
                                  </h1>
                                  Printers are programmed using a programming language. The printer
                                  interprets the program, and the outputs the result. There are two
                                  big classes of such languages: Page description languages, and
                                  Printer Control languages.
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
                    <img src="/src/assets/image/home/l2.jpg" alt="" class="h-10" />
                    <h3 class="font-bold">Help the weak</h3>
                  </td>
                  <td>
                    <p class="text-lg">Khutbah Image</p>
                  </td>
                  <td class="py-4 p-2">
                    <p class="text-sm font-bold text-blue-600">Pending</p>
                  </td>
                  <td class="py-4 p-2">
                      <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                        <Dialog>
                          <DialogTrigger> Details </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                <div class="text-xl mb-2">
                                  <span class="font-bold">Project Name:</span> 
Help the weak
                                </div>
                              </DialogTitle>
                              <DialogDescription>
                                <img src="/src/assets/image/home/l4.png" alt="" />
                                <div>
                                  <h1 class="font-semibold mt-2 text-l text-black">
                                    Project Description:
                                  </h1>
                                  Streamline the proposal process and save time by using a
                                  pre-designed template Clearly outline the scope, objectives, and
                                  deliverables of your sound system project Present a professional
                                  and organized proposal that will impress clients and stakeholders
                                  Include all necessary details such as budget, timeline, and
                                  resources required Increase your chances of winning the project by
                                  presenting a well-structured and persuasive proposal
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
</template>
<script setup>
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
