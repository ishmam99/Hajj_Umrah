<template>
  <div>
    <DefaultLayout>
      <div class="px-10 bg-white py-[5%] w-full">
        <div class="flex justify-between items-center pt-4">
          <p class="text-2xl text-teal-700 font-bold pb-2">All Bids</p>
        </div>
        <hr />
        <div
          class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
        >
          <table class="table-auto w-full">
            <thead>
              <tr class="bg-white text-sm">
                <th class="p-2 text-left">Bid Id</th>
                <th class="p-2 text-left">Bid Title</th>
                <th class="p-2 text-left">Post Date From</th>
                <th class="p-2 text-left">Post Date To</th>
                <th class="p-2 text-left">Bid Submission Deadline</th>
                <th class="p-2 text-left">Bid Submission Link</th>
                <th class="p-2 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="py-4 p-2 gap-2">
                  <h3 class="font-bold">01</h3>
                </td>
                <td class="py-6 p-2 flex items-center gap-2">
                  <h3 class="font-semibold">Sound System</h3>
                </td>
                <td class="py-4 p-2">1 Jan 2024</td>
                <td class="py-4 p-2">1 Feb 2024</td>
                <td class="py-4 p-2">1 March 2024</td>
                <td class="py-4 p-2 text-blue-700">
                  <a href="">Click to Submit</a>
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
                              Streamline the proposal process and save time by using a pre-designed
                              template Clearly outline the scope, objectives, and deliverables of
                              your sound system project Present a professional and organized
                              proposal that will impress clients and stakeholders Include all
                              necessary details such as budget, timeline, and resources required
                              Increase your chances of winning the project by presenting a
                              well-structured and persuasive proposal
                            </div>
                            <div class="flex mt-2 gap-5 items-center justify-between">
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
                                <span class="text-black font-semibold">Post Date From:</span> 1 Jan
                                2024
                              </div>
                              <div>
                                <span class="text-black font-semibold">Post Date To:</span> 10 Feb
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
                <td class="py-6 p-2 flex items-center gap-2">
                  <h3 class="font-semibold">Computer, Printer, Camera</h3>
                </td>
                <td class="py-4 p-2">1 Jan 2024</td>
                <td class="py-4 p-2">10 Feb 2024</td>
                <td class="py-4 p-2">1 March 2024</td>
                <td class="py-4 p-2 text-blue-700">
                  <a href="">Click to Submit</a>
                </td>
                <td class="py-4 p-2">
                  <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                    <Dialog>
                      <DialogTrigger> Details </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            <div class="text-xl mb-2">
                              <span class="font-bold">Project Name: </span>Computer, Printer, Camera
                            </div>
                          </DialogTitle>
                          <DialogDescription>
                            <img src="/src/assets/image/home/l4.jpg" alt="" />
                            <div>
                              <h1 class="font-semibold mt-2 text-lg text-black">
                                Project Description:
                              </h1>
                              Printers are programmed using a programming language. The printer
                              interprets the program, and the outputs the result. There are two big
                              classes of such languages: Page description languages, and Printer
                              Control languages.
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
                                <span class="text-black font-semibold">Post Date From:</span> 1 Jan
                                2024
                              </div>
                              <div>
                                <span class="text-black font-semibold">Post Date To:</span> 10 Feb
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
            </tbody>
          </table>
        </div>
      </div>
    
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog'
const suppliers = [
  {
    name: 'Al-Falah Islamic Mart',
    contactPerson: 'Mohammed Ahmed',
    email: 'mohammed.ahmed@alfalahmart.com',
    phone: '+123 456 7890',
    address: {
      street: '123 Halal Street',
      city: 'Islamic City',
      state: 'Islamic State',
      zip: '54321',
      country: 'Muslimland'
    },
    products: [
      { id: 1, name: 'Islamic Books', category: 'Literature', price: 20 },
      { id: 2, name: 'Prayer Rugs', category: 'Spiritual', price: 30 }
    ],
    orders: [
      { id: 101, date: '2024-01-15', totalAmount: 50 },
      { id: 102, date: '2024-01-20', totalAmount: 40 }
    ]
  },
  {
    name: 'Nur al-Hidayah Bookstore',
    contactPerson: 'Fatima Ali',
    email: 'fatima.ali@nuralhidayah.com',
    phone: '+987 654 3210',
    address: {
      street: '789 Quran Avenue',
      city: 'Madina Town',
      state: 'Blessed Region',
      zip: '98765',
      country: 'Sacred Land'
    },
    products: [
      { id: 3, name: 'Islamic Art Prints', category: 'Art', price: 25 },
      { id: 4, name: 'Halal Cosmetics', category: 'Beauty', price: 40 }
    ],
    orders: [
      { id: 103, date: '2024-02-01', totalAmount: 60 },
      { id: 104, date: '2024-02-05', totalAmount: 75 }
    ]
  },
  {
    name: 'Sakinah Islamic Attire',
    contactPerson: 'Aisha Rahman',
    email: 'aisha.rahman@sakinahattire.com',
    phone: '+456 789 0123',
    address: {
      street: '456 Modesty Lane',
      city: 'Hijabville',
      state: 'Covered State',
      zip: '67890',
      country: 'Modestland'
    },
    products: [
      { id: 5, name: 'Abayas', category: 'Clothing', price: 50 },
      { id: 6, name: 'Kufi Caps', category: 'Accessories', price: 15 }
    ],
    orders: [
      { id: 105, date: '2024-03-10', totalAmount: 90 },
      { id: 106, date: '2024-03-15', totalAmount: 120 }
    ]
  },
  {
    name: 'Noor Islamic Grocery',
    contactPerson: 'Ahmed Malik',
    email: 'ahmed.malik@noorgrocery.com',
    phone: '+789 012 3456',
    address: {
      street: '789 Sunnah Street',
      city: 'Halal City',
      state: 'Blessed State',
      zip: '12345',
      country: 'Pureland'
    },
    products: [
      { id: 7, name: 'Dates', category: 'Food', price: 10 },
      { id: 8, name: 'Zamzam Water', category: 'Beverages', price: 5 }
    ],
    orders: [
      { id: 107, date: '2024-04-05', totalAmount: 15 },
      { id: 108, date: '2024-04-10', totalAmount: 20 }
    ]
  }
  // Add more Islamic-named suppliers as needed
]
</script>

<style scoped>
/* Add component-specific styles if needed */
</style>
