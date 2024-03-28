<template>
    <div class="px-4 bg-white py-5">
       <div class="flex justify-between items-center py-4">
         <p class="text-2xl text-yellow-600 font-bold pb-2">Donation Event Status</p>
         <input type="date" placeholder="Search by date or name" class="py-1.5 px-2 rounded-md border text-sm">
         <input type="text" placeholder="Search by name" class="py-1.5 px-2 rounded-md border text-sm">
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
               <th class="p-2 text-center w-1/8">Donation ID</th>
               <th class="p-2 text-center w-3/8">Donation Event Name(s)</th>
               <th class="p-2 text-center w-1/8">Starting Date</th>
               <th class="p-2 text-center w-1/8">Ending Date</th>
               <th class="p-2 text-center w-1/8">Amount(Need)</th>
               <th class="p-2 text-center w-1/8">Amount(Recieved)</th>
             </tr>
           </thead>
           <tbody>
             <tr class="">
               <td class="py-4 p-2 w-1/8 text-center">01</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8 relative group">
                 <img src="/src/assets/image/home/l4.jpg" alt="" class="h-10" />
                 <h3 class="font-bold">Save The Children</h3>
                 <div class="bg-[#181717de] text-white text-xs py-2 px-4 rounded-md absolute z-50 bottom-0 hidden group-hover:block">
                  <p>Mr. Azim donated $100</p>
                  <p>Mr. Rakib donated $200</p>
                  <p>Mr. Rahim donated $10</p>
                  <p>Mr. Salam donated $50</p>
                 </div>
               </td>
               <td class="py-4 p-2 text-center w-1/8">1 Jan 2024</td>
               <td class="py-4 p-2 text-center w-1/8">1 Feb 2024</td>
               <td class="py-4 p-2 text-center w-1/8">$ 1000000</td>
               <td class="py-4 p-2 text-center w-1/8">$ 20000</td>
             </tr>
             <tr class="bg-white">
               <td class="py-4 p-2 w-1/8 text-center">02</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8 relative group">
                 <img src="/src/assets/image/home/l2.jpg" alt="" class="h-10" />
                 <h3 class="font-bold">Comfort The Sick</h3>
                 <div class="bg-[#181717de] text-white text-xs py-2 px-4 rounded-md absolute z-50 bottom-0 hidden group-hover:block">
                  <p>Mr. Azim donated $100</p>
                  <p>Mr. Rakib donated $200</p>
                  <p>Mr. Rahim donated $10</p>
                  <p>Mr. Salam donated $50</p>
                 </div>
               </td>
               <td class="py-4 p-2 text-center w-1/8 ">1 Jan 2024</td>
               <td class="py-4 p-2 text-center w-1/8">1 Feb 2024</td>
               <td class="py-4 p-2 text-center w-1/8">$ 500000</td>
               <td class="py-4 p-2 text-center w-1/8">$ 1000</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   </template>
   <script setup>
   import { ref, onMounted } from 'vue'
   import { useRoute, useRouter } from 'vue-router'
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
   