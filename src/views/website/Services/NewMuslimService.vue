<template>
  <div>
    <DefaultLayout>
      <div
        class="px-20 pt-20 mt-5 py-5 bg-cyan-800 bg-[url('/src/assets/image/home/bg123.png')] bg-repeat shadow-xl"
      >
        <div class="pt-3 mx-36 pb rounded-xl bg-[#ffffff] border-blue-50 shadow-xl border-[3px]">
          <div class="flex items-center justify-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path
                d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM9 9.99998H15V16H9V9.99998ZM11 12V14H13V12H11Z"
              ></path>
            </svg>
            <p>Home</p>
            <p>/ Services</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-blue-800">/ New Muslim Service</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-blue-800 text-4xl font-bold">New Muslim Service</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 h-full py-5 flex gap-5 px-20 w-full">
        <div class="space-y-8 w-3/4">
          <div class="bg-white rounded-xl p-5 w-full">
            <h1 class="text-3xl underline py-3">Shahada Service</h1>
            <p>
              "There is no God but Allah, and Muhammad is his messenger. <br />"The Arabic
              transliteration of the English phrase above is: "Ashhadu Alla Ilaha Illa Allah Wa
              Ashhadu Anna Muhammad Ar-Rasulu Allah <br />"This is the basic statement of the
              Islamic faith. Reciting this statement wholeheartedly and with sincerity in front of
              witnesses is all that anyone needs to do to become a Muslim. The Shahadah is the first
              of the Five Pillars of Islam.
            </p>
            <p class="py-3">When a Muslim recites this they proclaim:-</p>
            <ul class="px-10">
              <li class="list-disc">
                That Allah is the only God, and that Muhammad is his prophet-
              </li>
              <li class="list-disc">That they personally accept this as true</li>
              <li class="list-disc">
                That they will obey all the commitments of Islam in their life.
              </li>
            </ul>
            <p class="py-3">
              If you are ready to take the Shahada, please fill out this form and the Imam will
              schedule an appropriate time for you to take the Shahada.
            </p>
          </div>

          <div class="bg-white rounded-xl p-5 w-full">
            <p class="text-xl font-bold py-5">Are you?<span class="text-red-600">*</span></p>
            <div class="flex gap-5">
              <div class="flex items-center gap-2 font-semibold py-2">
                <input type="radio" id="Dhur" name="Event_Time" value="Dhur" class="h-4 w-4" />
                <label for="Dhur">Interested in Islam</label>
              </div>
              <div class="flex items-center gap-2 font-semibold py-2">
                <input type="radio" id="Asr" name="Event_Time" value="Asr" class="h-4 w-4" />
                <label for="Asr">Recent revert needing information</label>
              </div>
            </div>
            <div class="py-5 space-y-7 mt-5">
              <div class="flex w-full gap-5">
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >First Name <span class="text-red-500">*</span>
                  </label>
                </div>
                <div class="relative mb-3 w-full">
                  <input
                    type="text"
                    class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                    id="exampleFormControlInput50"
                    value=""
                  />
                  <label
                    for="exampleFormControlInput50"
                    class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                    >Last Name <span class="text-red-500">*</span>
                  </label>
                </div>
              </div>
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Age <span class="text-red-500">*</span>
                </label>
              </div>
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Email <span class="text-red-500">*</span>
                </label>
              </div>
              <div class="relative mb-3 w-full">
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput50"
                  value=""
                />
                <label
                  for="exampleFormControlInput50"
                  class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                  >Phone Number <span class="text-red-500">*</span>
                </label>
              </div>
            </div>
            <p class="text-xl font-bold pt-5 pb-2">Gender<span class="text-red-600">*</span></p>
            <div class="flex gap-5">
              <div class="flex items-center gap-2 font-semibold py-2">
                <input type="radio" id="Dhur" name="Event_Time" value="Dhur" class="h-4 w-4" />
                <label for="Dhur">Male</label>
              </div>
              <div class="flex items-center gap-2 font-semibold py-2">
                <input type="radio" id="Asr" name="Event_Time" value="Asr" class="h-4 w-4" />
                <label for="Asr">Female</label>
              </div>
            </div>
            <p class="text-xl font-bold pt-5 pb-2">
              Marital Status<span class="text-red-600">*</span>
            </p>
            <div class="grid grid-cols-2 gap-2">
              <div class="flex items-center gap-2 font-semibold">
                <input type="radio" id="Dhur" name="Event_Time" value="Dhur" class="h-4 w-4" />
                <label for="Dhur">Married</label>
              </div>
              <div class="flex items-center gap-2 font-semibold">
                <input type="radio" id="Asr" name="Event_Time" value="Asr" class="h-4 w-4" />
                <label for="Asr">Engaged</label>
              </div>
              <div class="flex items-center gap-2 font-semibold">
                <input type="radio" id="Dhur" name="Event_Time" value="Dhur" class="h-4 w-4" />
                <label for="Dhur">Single</label>
              </div>
              <div class="flex items-center gap-2 font-semibold">
                <input type="radio" id="Asr" name="Event_Time" value="Asr" class="h-4 w-4" />
                <label for="Asr">Divorced</label>
              </div>
            </div>
            <div>
              <p class="text-xl font-bold py-5">Any Question or Comments</p>
              <textarea
                name=""
                id=""
                cols=""
                rows="4"
                placeholder="Ex:23"
                class="w-full p-3 rounded-md shadow-lg border border-black"
              ></textarea>
            </div>
            <div class="flex justify-center py-3">
              <button
                class="w-[350px] h-[45px] rounded-2xl bg-blue-800 text-white font-bold mx-auto"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        <FacilitiesMore />
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Card from '/src/components/cardSection.vue'
import FacilitiesMore from '@/components/FacilitiesMore.vue'
</script>

<style lang="scss" scoped></style>
