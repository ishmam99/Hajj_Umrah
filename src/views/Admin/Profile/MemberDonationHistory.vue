<template>
  <DefaultLayout>
    <div class="bg-slate-50">
      <div class="pt-20 flex justify-between">
        <MembarSidebar />
        <div class="px-[20px] bg-white py-5 rounded-md shadow-md w-3/4">
          <div class="bg-slate-50 rounded-lg gap-y-2 w-full px-4 py-2 border-b-gray-100 mb-2 mt-3">
            <div class="flex justify-between items-center mb-1">
              <div class="font-semibold flex gap-2">
                <p>Payment Id :</p>
                <p>#INV-1015</p>
              </div>

              <div
                class="flex items-center gap-2 text-xs font-light absolute md:static right-4 top-2"
              >
                <p>Donated Date</p>
                <p>Aug 07, 2023</p>
              </div>
            </div>
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center gap-2 flex-wrap font-semibold">
                <p>Payment Method :</p>
                <p>Card Payment</p>
              </div>
              <div class="flex items-center font-semibold gap-2">
                <p>Card Number :</p>
                <p class="uppercase">xxxx-xxxx-xxxx-0123</p>
              </div>
            </div>
            <div class="flex justify-between items-center mb-1">
              <div class="flex items-center font-semibold gap-2">
                <p class="">Donated Amount</p>
                <p>$ 1,230</p>
              </div>
              <div class="flex items-center gap-2">
                <p
                  class="w-[80px] rounded-3xl bg-green-600 text-white text-xs font-light text-center py-[2px] absolute md:static right-4 top-10"
                >
                  Paid
                </p>
              </div>
            </div>
            <div class="mb-1">
              <div class="flex items-center font-semibold gap-2">
                <p>Reciever Card Number :</p>
                <p class="uppercase">xxxx-xxxx-xxxx-0123</p>
              </div>
            </div>
            <div class="mb-1">
              <div class="flex items-center font-semibold gap-2">
                <p>Donated For :</p>
                <p class="">Comfort The Sick</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
</script>
