<template>
    <div>
      <DefaultLayout>
        <div class="px-20 ml-10">
          <div class="bg-white">
            <div class="flex items-center gap-2">
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
              <p>/ Volunteer</p>
              <p class="text-yellow-500">/ Educate The Children</p>
            </div>
            <div class="bg-white rounded-lg relative py-3">
              <h1 class="text-yellow-500 text-4xl font-semibold">Educate The Children</h1>
              <div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 h-full py-5 mt-10 flex gap-5 px-20 w-full">
          <div class="space-y-8 w-3/4">
            <div class="bg-white rounded-xl p-5 w-full">
              <h1 class="text-3xl underline py-3">Introduction</h1>
              <p>Many children in our community suffer from homelessness, poverty, neglect and disabilities. These children have less or no educational services. Education is the key to success and this pillar helps to alleviate their situation.</p>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
                <h1 class="text-3xl underline py-3">What do we aim to accomplish?</h1>
                <ul class="pl-10">
                    <li class="list-disc">Create the conditions that make the children engaged and motivated to learn and apply their creative thinking skills</li>
                    <li class="list-disc">Collaborate and apply skills to real world</li>
                    <li class="list-disc">Promoting parent and family engagement</li>
                </ul>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
                <h1 class="text-3xl underline py-3">What are the needs in the community?</h1>
                <ul class="pl-10">
                    <li class="list-disc">1 in 4 children in America grow up without learning how to read</li>
                    <li class="list-disc">Students who don’t read proficiently by 3rd grade are 4 times likely to drop out of school</li>
                    <li class="list-disc">80% of preschool and after school programs serving low income groups have no age appropriate books</li>
                </ul>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
                <h1 class="text-3xl underline py-3">Why do we need to focus on this issue?</h1>
                <ul class="pl-10">
                    <li class="list-disc">Better future for the kids and families and society</li>
                    <li class="list-disc">Increase in income and quality of living</li>
                    <li class="list-disc">Improves their self confidence and higher self esteem</li>
                    <li class="list-disc">Builds a bridge between us (EPIC community) and different faiths.</li>
                </ul>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
                <h1 class="text-3xl underline py-3">What are we going to do?</h1>
                <ul class="pl-10">
                    <li class="list-disc">Teach and tutor kids after school</li>
                    <li class="list-disc">Collect books and donate to them</li>
                    <li class="list-disc">Introduce them to arts- drawing, painting, drama and more</li>
                    <li class="list-disc">Teaching self-help skills and crafts to special need kids.</li>
                    <li class="list-disc">Physical education</li>
                </ul>
            </div>
            <div class="bg-white rounded-xl p-5 w-full">
                <h1 class="text-3xl underline py-3">Apply for Volunteering</h1>
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
                    <input type="radio" id="Dhur" name="Event_Time" value="Dhur" class="h-4 w-4">
                    <label for="Dhur">Male</label>
                </div>
                <div class="flex items-center gap-2 font-semibold py-2">
                    <input type="radio" id="Asr" name="Event_Time" value="Asr" class="h-4 w-4">
                    <label for="Asr">Female</label>
                </div>
                </div>
                <div>
                <p class="text-xl font-bold py-5">Any Question or Comments</p>
                <textarea name="" id="" cols="" rows="4" placeholder="Ex:23" class="w-full p-3 rounded-md shadow-lg border border-black"></textarea>
                </div>
                <div class="flex justify-center py-3 ">
                <button class="w-[350px] h-[45px] rounded-2xl bg-yellow-600 text-white font-bold mx-auto">Apply</button>
                </div>
            </div>
          </div>
         <VolunteerMore />
        </div>
      </DefaultLayout>
    </div>
  </template>
  
  <script setup>
  import DefaultLayout from '../../layouts/DefaultLayout.vue'
  import Card from '../../components/CardSection.vue'
  import VolunteerMore from '../../components/VolunteerMore.vue'
  </script>
  
  <style lang="scss" scoped></style>
  