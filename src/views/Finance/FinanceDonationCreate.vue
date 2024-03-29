<template>
  <div class="px-5 bg-slate-50 py-5">
    <p class="text-2xl font-bold py-3 border-b">Donation Create Form</p>
    <div class="bg-white rounded-xl p-5 w-full shadow-md mt-5">
      <form @submit.prevent="donationCreateFormCreate()">
        <div class="py-5 space-y-7 mt-5">
          <div class="flex gap-5 items-center justify-between">
            <div class="relative mb-3 w-3/5">
              <input
              v-model="donationCreateForm.name"
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="name"
                value=""
              />
              <label
                for="name"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Donation Event Name <span class="text-red-500">*</span>
              </label>
            </div>
            <div class="relative mb-3 w-2/5">
              <input
              v-model="donationCreateForm.event_id"
                type="text"
                class="peer block min-h-[auto] w-full rounded-xl border-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary placeholder:opacity-100 motion-reduce:transition-none"
                id="id"
                value=""
              />
              <label
                for="id"
                class="absolute left-3 top-0 mb-0 z-10 text-xl px-2 origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-900 transition-all duration-200 ease-out bg-white peer-focus:text-primary -translate-y-[0.9rem] scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
                >Donation Event ID <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          
          <div class="relative">
            <p class="p-3 absolute top-[-25px] left-2 bg-white text-gray-600">
              Donation Event Description
            </p>
            <textarea
            v-model="donationCreateForm.description"
              name=""
              id=""
              cols=""
              rows="4"
              placeholder="Description"
              class="w-full p-3 pt-5 rounded-lg border-2 focus:outline-gray-200"
            ></textarea>
          </div>
          <div class="flex justify-between gap-5">
            <div class="w-1/3 flex flex-col gap-5">
              <div class="relative">
                <div class="gap-5">
                  <label for="">Starting Date <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                    v-model="donationCreateForm.start_date"
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                    />
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="gap-5">
                  <label for="">Starting Time <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                    v-model="donationCreateForm.start_time"
                      type="time"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3 flex flex-col gap-5">
              <div class="relative">
                <div class="gap-5">
                  <label for="">Ending Date <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                    v-model="donationCreateForm.end_date"
                      type="date"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                    />
                  </div>
                </div>
              </div>
              <div class="relative">
                <div class="gap-5">
                  <label for="">Ending Time <span class="text-red-500">*</span> </label>
                  <div class="pt-2">
                    <input
                    v-model="donationCreateForm.end_time"
                      type="time"
                      class="py-2 px-6 rounded-2xl w-full border-2 border-grau-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3 flex flex-col gap-5">
              <div class="">
                <p class="text-gray-600">Donation Amount</p>
                <div
                  class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                >
                  <input 
                  v-model="donationCreateForm.amount"
                  type="text"
                   placeholder="Enter Amount" class="h-full w-full absolute top-0 rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center"/>
                </div>
              </div>
              <div class="">
                <p class="text-gray-600">Donation Thumbnail</p>
                <div
                  class="flex justify-center items-center h-[45px] rounded-2xl bg-white px-4 py-2 text-sm text-gray-500 text-center relative border-2 mt-2"
                >
                  <input @change="onFileChange"
                  type="file" 
                  class="h-full w-full opacity-0 absolute top-0" />
                  Choose File
                </div>
              </div>
              <p class="text-gray-600 text-center">{{selectedFile?.name  }}</p>
            </div>
          </div>
          <button
            type="submit"
            class="w-full h-[45px] rounded-2xl bg-teal-800 text-white font-bold mx-auto flex items-center text-center justify-center"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { useAccountStore } from '/src/stores/accountStore.ts'


const store = useAccountStore()
const selectedFile = ref(null);

const donationCreateForm = ref({
  name:'',
  event_id: '',
  description:'',
  start_date: '',
  start_time: '',
  end_date: '',
  end_time: '',
  amount: '',
  image: '',
  status:'0'
})

function onFileChange(event) {
  selectedFile.value = event.target.files[0];
  donationCreateForm.value.image = event.target.files[0];
  console.log('Selected File:', selectedFile.value);
}

const { toast } = useToast()

// const donationCreateFormCreate = async () => {
//   try {
//     const data = await api().post('account-ledger-store', {
//       method: 'post',
//       body: accountLedger,
//     })
//     console.log(data)
//     toast({
//         title: 'Account Ledger Created ',
//       });
//   }
//   catch (error) {
//     console.log(error)
//   }
// }



const donationCreateFormCreate = () => {
  store.DonationListCreate(donationCreateForm.value)
  // donationCreateForm.value.name = '',
  //   donationCreateForm.value.event_id = '',
  //   donationCreateForm.value.description = '',
  //   donationCreateForm.value.start_date = '',
  //   donationCreateForm.value.start_time = '',
  //   donationCreateForm.value.end_date = '',
  //   donationCreateForm.value.end_time = '',
  //   donationCreateForm.value.image = ''
}

</script>
