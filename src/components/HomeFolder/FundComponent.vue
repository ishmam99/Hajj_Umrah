<template>
    <div class="flex px-[5%] py-10 gap-10 bg-slate-200 my-10">
        <div class="w-2/3">
            <h1 class="text-4xl font-bold pb-3 uppercase">Fund Raising</h1>
            <div class="bg-[url('/src/assets/image/common/v5.jpg')] bg-cover">
                <div class="w-full h-full  p-10 flex flex-col justify-center gap-5 bg-[#0000006e]">
                    <p class="text-green-400 text-lg font-bold">#fundraisewithIslamicDigitalLane</p>
                    <p class="flex p-2 text-3xl font-bold text-white bg-green-500 w-fit">Fundraise with</p>
                    <p class="flex py-2 px-3 text-5xl font-bold text-white bg-cyan-500 w-fit">Islamic Digital Lane</p>
                    <p class="text-lg text-gray-200">Fundraise for one of our many campaigns or for one of our upcoming <br> events with a click of a few buttons!</p>
                    <router-link to="/Fund_Raising_Form" class="text-center py-4 px-3 rounded-lg text-white text-lg bg-teal-600 hover:bg-blue-500">Start fund Raising for today</router-link>
                </div>
            </div>
        </div>
        <div class="w-1/3">
            <h1 class="text-2xl font-bold pb-3 uppercase text-green-600">Our Campaigns</h1>
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col gap-1 rounded-md p-2 bg-white">
                    <img src="/src/assets/image/common/v3.jpg" alt="">
                    <p class="text-xs font-semibold text-gray-600">6th Dec 2021</p>
                    <p class="text-lg font-bold">Build A Mosque In Bangadesh</p>
                </div>
                <div class="flex flex-col gap-1 rounded-md p-2 bg-white">
                    <img src="/src/assets/image/common/v2.jpg" alt="" class="">
                    <p class="text-xs font-semibold text-gray-600">12th March 2021</p>
                    <p class="text-lg font-bold">Fund Raising Event GAZA</p>
                </div>
                <div class="flex flex-col gap-1 rounded-md p-2 bg-white">
                    <img src="/src/assets/image/common/v4.jpg" alt="" class="">
                    <p class="text-xs font-semibold text-gray-600">9th jan 2021</p>
                    <p class="text-lg font-bold">Winter Emergency Fundraser</p>
                </div>
                <div class="flex items-center justify-center">
                    <button class="px-3 py-3 bg-green-600 text-white text-sm rounded-md">See More</button>
                </div>
            </div>
        </div>
        
        
    </div>
</template>