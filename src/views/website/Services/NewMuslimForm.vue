<template>
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
    <p class="text-xl font-bold pt-5 pb-2">Marital Status<span class="text-red-600">*</span></p>
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
      <button class="w-[350px] h-[45px] rounded-2xl bg-blue-800 text-white font-bold mx-auto">
        Apply
      </button>
    </div>
  </div>
</template>
