<script setup>


</script>

<template>
    <div class="px-4 bg-white py-5 w-3/4">
       <div class="flex justify-between items-center pt-4">
         <p class="text-2xl text-yellow-600 font-bold pb-2">Orientation</p>
       </div>
       <hr />
       <div
         class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
       >
         <table class="table-auto w-full">
           <thead>
             <tr class="bg-white">
               <!-- <th class="p-2 text-center w-1/8">Applicant ID</th> -->
               <th class="p-2 text-center w-1/8">Position Title</th>
               <th class="p-2 text-center w-3/8">Applicant name</th>
               <th class="p-2 text-center w-1/8">Personal particulars Update</th>
               <th class="p-2 text-center w-1/8">Issue Badge</th>
               <th class="p-2 text-center w-1/8">Organization Orientation</th>
               <th class="p-2 text-center w-1/8">Initial Training</th>
               <th class="p-2 text-center w-1/8">Assigning to Duty</th>
             </tr>
           </thead>
           <tbody>
             <tr class="">
               <!-- <td class="py-4 p-2 w-1/8 text-center">01</td> -->
               <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="w-14 h-14 rounded-full ring-4 ring-gray-500" />
                 <h3 class="font-bold">Ibnul Hossain</h3>
               </td>
               <td class="py-4 p-2 pl-5 text-center w-1/8">
                <select class="p-2 border">
                  <option class="text-red-500">Not Yet Started</option>
                  <option class="text-sky-500"> In progress</option>
                  <option class="text-green-400"> In review</option>
                  <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>Complete</option>
                </select>
               </td>
               <td class="py-4 p-2 text-center w-1/8">
                <select class="p-2 border">
                  <option class="text-red-500">Not Yet Started</option>
                  <option class="text-sky-500"> In progress</option>
                  <option class="text-green-400"> In review</option>
                  <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>Complete</option>
                </select>
              </td>
              <td class="py-4 p-2 text-center w-1/8">
                <select class="p-2 border">
                  <option class="text-red-500">Not Yet Started</option>
                  <option class="text-sky-500"> In progress</option>
                  <option class="text-green-400"> In review</option>
                  <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>Complete</option>
                </select>
              </td>
               <td class="py-4 p-2 text-center w-1/8">
                <select class="p-2 border">
                  <option class="text-red-500">Not Yet Started</option>
                  <option class="text-sky-500"> In progress</option>
                  <option class="text-green-400"> In review</option>
                  <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>Complete</option>
                </select>
                
               </td>
               <td class="py-4 p-2 text-center w-1/8">
                
                <div class="flex">
                  <select class="p-2 border">
                    <option class="text-red-500">Not Yet Started</option>
                    <option class="text-sky-500"> In progress</option>
                    <option class="text-green-400"> In review</option>
                    <option class="text-green-600 hover:bg-green-100 focus:bg-green-100" selected>Complete</option>
                  </select>
                    <span class="px-2"><button class=" text-white text-sm px-2 py-2 rounded-sm bg-blue-500">Update</button></span>
                    
                  </div>
                
               </td>
             </tr>
             <!-- <tr class="">
               <td class="py-4 p-2 w-1/8 text-center">02</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="w-14 h-14 rounded-full ring-4 ring-gray-500" />
                 <h3 class="font-bold">Ibnul Hossain</h3>
               </td>
               <td class="py-4 p-2 text-center w-1/8">+8801823455640</td>
               <td class="py-4 p-2 text-center w-1/8">02/14/2024</td>
               <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
               <td class="py-4 p-2 text-center w-1/8">
                <span class="text-sm text-white p-2 bg-yellow-500">Application in Review</span>
               </td>
             </tr>
             <tr class="">
               <td class="py-4 p-2 w-1/8 text-center">03</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="w-14 h-14 rounded-full ring-4 ring-gray-500" />
                 <h3 class="font-bold">Ibnul Hossain</h3>
               </td>
               <td class="py-4 p-2 text-center w-1/8">+8801823455640</td>
               <td class="py-4 p-2 text-center w-1/8">02/14/2024</td>
               <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
               <td class="py-4 p-2 text-center w-1/8">
                <span class="text-sm text-white p-2 bg-green-500">Application Submitted</span>
               </td>
             </tr>
             <tr class="">
               <td class="py-4 p-2 w-1/8 text-center">03</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="w-14 h-14 rounded-full ring-4 ring-gray-500" />
                 <h3 class="font-bold">Ibnul Hossain</h3>
               </td>
               <td class="py-4 p-2 text-center w-1/8">+8801823455640</td>
               <td class="py-4 p-2 text-center w-1/8">02/14/2024</td>
               <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
               <td class="py-4 p-2 text-center w-1/8">
                <span class="text-sm text-white p-2 bg-green-500">Interview Scheduled</span>
               </td>
             </tr>
             <tr class="">
               <td class="py-4 p-2 w-1/8 text-center">01</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="w-14 h-14 rounded-full ring-4 ring-gray-500" />
                 <h3 class="font-bold">Ibnul Hossain</h3>
               </td>
               <td class="py-4 p-2 text-center w-1/8">+8801823455640</td>
               <td class="py-4 p-2 text-center w-1/8">02/14/2024</td>
               <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
               <td class="py-4 p-2 text-center w-1/8">
                <span class="text-sm text-white p-2 bg-green-500">Interview Scheduled</span>
               </td>
             </tr>
             <tr class="">
               <td class="py-4 p-2 w-1/8 text-center">04</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="w-14 h-14 rounded-full ring-4 ring-gray-500" />
                 <h3 class="font-bold">Ibnul Hossain</h3>
               </td>
               <td class="py-4 p-2 text-center w-1/8">+8801823455640</td>
               <td class="py-4 p-2 text-center w-1/8">02/14/2024</td>
               <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
               <td class="py-4 p-2 text-center w-1/8">
                <span class="text-sm text-white p-2 bg-yellow-500">Onboarding</span>
               </td>
             </tr>
             <tr class="">
               <td class="py-4 p-2 w-1/8 text-center">05</td>
               <td class="py-4 p-2 flex justify-center items-center gap-2 w-3/8">
                <img src="/src/assets/image/home/l4.jpg" alt="" class="w-14 h-14 rounded-full ring-4 ring-gray-500" />
                 <h3 class="font-bold">Ibnul Hossain</h3>
               </td>
               <td class="py-4 p-2 text-center w-1/8">+8801823455640</td>
               <td class="py-4 p-2 text-center w-1/8">02/14/2024</td>
               <td class="py-4 p-2 text-center w-1/8">Imam hiring</td>
               <td class="py-4 p-2 text-center w-1/8">
                <span class="text-sm text-white p-2 bg-green-500">Hired</span>
               </td>
             </tr> -->
           </tbody>
         </table>
       </div>
     </div>
</template>