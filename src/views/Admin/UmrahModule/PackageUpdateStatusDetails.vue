<template>
  <div class="px-5 bg-slate-50 py-5 w-4/5">
    <p class="text-2xl font-bold py-3 border-b">Umrah Package Status</p>
    <div class="bg-slate-50 py-10">
      <div class="relative h-72 w-full bg-gray-300 rounded-b-lg shadow-xl overflow-hidden">
        <img src="/src/assets/image/hajj/hajj-3.webp" alt="Package Cover" class="h-full w-full object-cover" />
        <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent py-6 px-8">
          <p class="text-white text-5xl font-extrabold tracking-wide drop-shadow-md">{{ packageDetails?.package_title }}
          </p>
          <p class="text-white text-2xl font-semibold mt-1">{{ packageDetails?.code }}</p>
          <p class="text-white text-lg mt-2">{{ moment(packageDetails?.start_at).format("MMM Do YY") }} -
            {{ moment(packageDetails?.end_at).format("MMM Do YY") }}</p>
        </div>
      </div>

      <div v-if="packageDetails" class="pt-10">
        <ul class="steps w-full steps-vertical lg:steps-horizontal lg:w-full mb-10">
          <li v-for="(status, index) in statuses" :key="index" class="flex-1 text-center"
            :class="{ 'step step-success': isChecked(status.name), 'step': true }">

            <div class="text-lg font-semibold">{{ status.name }}</div>

            <div class="text-sm text-gray-500 mt-1">
              <p v-if="status.name === 'Date'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                {{ packageDetails.start_at }}
              </p>
              <p v-if="status.name === 'Imam'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                {{ packageDetails.imam.name }}
              </p>
              <p v-if="status.name === 'Agent'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                {{ packageDetails.agent.name }}
              </p>
              <p v-if="status.name === 'Flight'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                Turkish Airlines
              </p>
              <p v-if="status.name === 'Bus'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                Green Line Bus
              </p>
              <p v-if="status.name === 'Hotel'"
                :class="{ 'text-green-500 text-base font-semibold': isChecked(status.name) }">
                Mövenpick Hotel
              </p>

              <div class="mt-2 space-y-3">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-sm ps-1">Note</span>
                  </label>
                  <input type="text" placeholder="Add a note" class="input input-bordered w-32 lg:w-48 input-sm" />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text text-sm ps-1">Attachment</span>
                  </label>
                  <input type="file" class="file-input file-input-bordered w-32 lg:w-48 file-input-sm" />
                </div>

                <div class="form-control">
                  <label class="cursor-pointer flex justify-start gap-4 label">
                    <input type="checkbox" v-model="checkedStatus[status.name]" :disabled="index > currentCheckboxIndex"
                      @change="handleCheckboxChange(index)" class="checkbox checkbox-primary checkbox-sm" />
                    <span class="label-text text-sm">{{ checkedStatus[status.name] ? 'Is Approved' : 'Is Approve'
                      }}</span>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';

const route = useRoute();
const packageID = route.params.id;
const packageDetails = ref();
const checkedStatus = ref({}); // Track checkbox states
const currentCheckboxIndex = ref(0); // Track the index of the currently enabled checkbox

watch(() => route, () => {
  getPackage();
});

const getPackage = async () => {
  const { data } = await api().get('package/' + packageID);
  packageDetails.value = data.data;
};

onMounted(() => {
  getPackage();
});

const statuses = [
  { id: 1, name: 'Date' },
  { id: 2, name: 'Imam' },
  { id: 3, name: 'Agent' },
  { id: 4, name: 'Flight' },
  { id: 5, name: 'Bus' },
  { id: 6, name: 'Hotel' },
  { id: 7, name: 'Final Review' },
];

// Function to handle checkbox changes
const handleCheckboxChange = (index) => {
  // If the checkbox is checked, move to the next checkbox
  if (checkedStatus.value[statuses[index].name]) {
    currentCheckboxIndex.value = index + 1; // Enable the next checkbox
  }
};

// Function to check if the status is checked
const isChecked = (statusName) => {
  return checkedStatus.value[statusName] || false;
};
</script>
