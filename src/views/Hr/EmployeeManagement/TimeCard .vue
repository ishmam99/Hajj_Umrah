<template>
    <div class="px-4 bg-white py-5 w-3/4">
            <div class="flex justify-between items-center pt-4">
              <p class="text-2xl text-yellow-600 font-bold pb-2">Time Card</p>
            </div>
            <hr />
            <div
              class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center"
            >
              <table class="table-auto w-full">
                <thead>
                  <tr class="bg-white text-xl">
                    <th class="p-2 text-left">Number</th>
                    <th class="p-2 text-left">Employee ID</th>
                    <th class="p-2 text-left">Employee Name</th>
                    <th class="p-2 text-left">time In</th>
                    <th class="p-2 text-left">Time Out</th>
                    <th class="p-2 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td class="py-4 p-2 gap-2">
                      <h3 class="font-bold">01</h3>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <h3 class="font-bold">173001</h3>
                    </td>
                    <td>
                      <p class="text-lg">Ishmam Azim</p>
                    </td>
                    <td class="py-4 p-2">
                      <p class="text-sm font-bold text-blue-600">7:00 PM</p>
                    </td>
                    <td class="py-4 p-2">
                        <p class="text-lg">3:30 AM</p>
                    </td>
                  </tr>
                  <tr class="bg-white">
                    <td class="py-4 p-2 gap-2">
                      <h3 class="font-bold">02</h3>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <h3 class="font-bold">173002</h3>
                    </td>
                    <td>
                      <p class="text-lg">Ashraful Hider Jaed</p>
                    </td>
                    <td class="py-4 p-2">
                      <p class="text-sm font-bold text-green-600">7:00 PM</p>
                    </td>
                    <td class="py-4 p-2">
                        <p class="text-lg">3:30 AM</p>
                      </td>
                  </tr>
                  <tr class="">
                    <td class="py-4 p-2">
                      <h3 class="font-bold">03</h3>
                    </td>
                    <td class="py-4 p-2 flex items-center gap-2">
                      <h3 class="font-bold">173003</h3>
                    </td>
                    <td>
                      <p class="text-lg">Arif Akib</p>
                    </td>
                    <td class="py-4 p-2">
                      <p class="text-sm font-bold text-blue-600">7:00 PM</p>
                    </td>
                    <td class="py-4 p-2">
                        <p class="text-lg">3:30 AM</p>
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
  