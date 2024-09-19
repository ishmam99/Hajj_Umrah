<template>
    <div class="px-[20px] bg-white py-5 rounded-md shadow-md">
            <p class="text-2xl font-bold py-3 border-b">Member Rewards</p>
            <div class="bg-slate-50 rounded-lg gap-y-2 w-full px-4 py-2 border-b-gray-100 mb-2 mt-3">
              <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
  <tr class="bg-[#219C90] text-white text-lg">
    <th>No.</th>
    <th>Package Name</th>
    <th>Payment Method</th>
    <th>Transaction Date</th>
    <th>Status</th>
    <th>Amount</th>
    <th></th>
  </tr>
</thead>
<tbody>
  <!-- row 1: Hajj Package Payment -->
  <tr>
    <th>1.</th>
    <td>
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="mask mask-squircle h-12 w-12">
            <img :src="hajj2img" alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div class="font-bold">Hajj Package 2024</div>
          <div class="text-sm opacity-50">Transaction ID: #HAJ123456</div>
        </div>
      </div>
    </td>
    <td>Credit Card</td>
    <td>2024-05-10</td>
    <td>
      <span class="badge badge-success">Paid</span>
    </td>
    <td>$5000</td>
  </tr>
  <!-- row 2: Umrah Package Payment -->
  <tr>
    <th>2.</th>
    <td>
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="mask mask-squircle h-12 w-12">
            <img :src="hajjimg" alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div class="font-bold">Umrah Package 2024</div>
          <div class="text-sm opacity-50">Transaction ID: #UMR654321</div>
        </div>
      </div>
    </td>
    <td>Bank Transfer</td>
    <td>2024-03-15</td>
    <td>
      <span class="badge badge-warning">Pending</span>
    </td>
    <td>$3000</td>
  </tr>
  <!-- row 3: VIP Hajj Package Payment -->
  <tr>
    <th>3.</th>
    <td>
      <div class="flex items-center gap-3">
        <div class="avatar">
          <div class="mask mask-squircle h-12 w-12">
            <img :src="umrahimg" alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div class="font-bold">VIP Hajj Package</div>
          <div class="text-sm opacity-50">Transaction ID: #VIP098765</div>
        </div>
      </div>
    </td>
    <td>PayPal</td>
    <td>2024-06-01</td>
    <td>
      <span class="badge badge-error">Failed</span>
    </td>
    <td>$10000</td>
  </tr>
</tbody>

    </table>
  </div>
  
            </div>
          </div>
  </template>
  <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import MembarSidebar from '/src/views/Member/MembarSidevar.vue'
  import hajjimg from "/src/assets/image/hajj/hajj-1.jpg";
  import hajj2img from "/src/assets/image/hajj/hajj-2.jpg";
  import umrahimg from "/src/assets/image/prayer-rugs.jpg";
  </script>
  