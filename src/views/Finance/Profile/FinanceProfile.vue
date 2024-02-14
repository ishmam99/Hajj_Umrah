<template>

   <div class="px-[5%] bg-white py-5 w-3/4 flex flex-col items-center">
        <img src="/src/assets/image/home/download.jpeg" alt="" class="h-[100px] w-[100px] rounded-full border shadow-md">
        <div class="bg-slate-50 px-5 mt-5 w-full rounded-md shadow-md">
            <p class="text-sm text-gray-500 pt-2">Name</p>
            <p class="text-xl font-semibold pb-2">User</p>
        </div>
        <div class="bg-slate-50 px-5 mt-5 w-full rounded-md shadow-md">
            <p class="text-sm text-gray-500 pt-2">Email Address</p>
            <p class="text-xl font-semibold pb-2">user@idl.com</p>
        </div>
        <div class="bg-slate-50 px-5 mt-5 w-full rounded-md shadow-md">
            <p class="text-sm text-gray-500 pt-2">Phone Number</p>
            <p class="text-xl font-semibold pb-2">+8801722222222</p>
        </div>
        <div class="bg-slate-50 px-5 mt-5 w-full rounded-md shadow-md">
            <p class="text-sm text-gray-500 pt-2">Gender</p>
            <p class="text-xl font-semibold pb-2">Male</p>
        </div>
        <div class="bg-slate-50 px-5 mt-5 w-full rounded-md shadow-md">
            <p class="text-sm text-gray-500 pt-2">Date of Birth (DD/MM/YY)</p>
            <p class="text-xl font-semibold pb-2">1/1/22</p>
        </div>
        
        <div class="bg-slate-50 shadow-md rounded-md p-5 mt-5 w-full">
            <div class="flex gap-3 items-center pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="rgba(100,205,138,1)"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                <p class="font-bold">Address</p>
            </div>
            <button class="w-full bg-white font-semibold py-3 rounded-md shadow-md mt-5">+ Add new address</button>
            
            <div class="mt-5 px-5 py-2  bg-green-100 border border-green-500 rounded-md flex justify-between items-center gap-2">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(8,126,51,1)"><path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path>
                    </svg>
                    <div>
                        <p class="text-gray-500 text-sm">Sector: 12, Roard: 8, House: 6</p>
                        <p class="text-lg font-semibold">Uttara , Dhaka</p>
                        <p class="text-gray-500 text-sm">+8801722222222</p>
                    </div>
                </div>
                <button class="bg-red-600 text-white text-sm rounded-md px-5 py-1.5">Verify</button>
            </div>
            <div class="mt-5 px-5 py-2 pl-10 bg-gray-100 border border-gray-500 rounded-md flex justify-between items-center gap-2">
                <div class="flex items-center gap-2">
                    <div>
                        <p class="text-gray-500 text-sm">Sector: 2, Roard: 8, House: 6</p>
                        <p class="text-lg font-semibold">Uttara , Dhaka</p>
                        <p class="text-gray-500 text-sm">+8801722222222</p>
                    </div>
                </div>
                <button class="bg-red-600 text-white text-sm rounded-md px-5 py-1.5">Verify</button>
            </div>
        </div>

   </div> 

</template>
<script setup>
</script>