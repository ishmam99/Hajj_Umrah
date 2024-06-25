<template>
  <div class="px-4 bg-white py-5 w-3/4">
    <div class="flex justify-between items-center pt-4">
      <p class="text-2xl text-teal-700 font-bold pb-2">All Vendor Applications</p>
    </div>
    <hr />

    <!-- Vendor List -->
    <div class="rounded-md px-2 py-3 mt-4 flex gap-5 justify-between bg-gray-100 shadow-md items-center">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-white text-xl">
            <th class="p-2 text-left">No.</th>
            <th class="p-2 text-left">Vendor Name</th>
            <th class="p-2 text-left">Address</th>
            <th class="p-2 text-left">Details</th>
            <th class="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in store.vendorList" :key="item.id">
            <td class="py-4 p-2 gap-2">
              <h3 class="font-bold">{{ index + 1 }}</h3>
            </td>
            <td class="py-4 p-2">{{ item?.first_name }}&nbsp;{{ item?.last_name }}</td>
            <td class="py-4 p-2">{{ item?.address }}</td>
            <td class="py-4 p-2">
              <button class="px-3 py-2 rounded-md shadow-md bg-cyan-600 text-white text-sm">
                <Dialog>
                  <DialogTrigger> Details </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div class="font-semibold text-l mb-2">Vendor Details</div>
                      </DialogTitle>
                      <DialogDescription>
                        <h1 class="font-semibold text-l mb-2">Vendor Logo:</h1>
                        <img src="/src/assets/image/home/l4.jpg" alt="" />
                        <div class="flex mt-2 gap-5 items-center justify-between">
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Vendor Name:</h1>
                            {{ item?.first_name }}&nbsp;{{ item?.last_name }}
                          </div>
                          <div class="flex gap-2">
                            <h1 class="text-black font-semibold">Vendor Type:</h1>
                            Beverage
                          </div>
                        </div>
                        <div class="flex gap-5 items-center justify-between mt-2">
                          <div>
                            <span class="text-black font-semibold">Vendor Address:</span>
                            {{ item?.address }}
                          </div>
                          <div>
                            <span class="text-black font-semibold">Application Submission Date:</span>
                            10 Feb 2024
                          </div>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </button>
            </td>
            <td class="py-4 p-2">
              <!-- {{ item.id }} -->
              <Select>
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select one" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select</SelectLabel>
                    <SelectItem value="Approved" @click="() => postVendor(item.id)"> Approve </SelectItem>
                    <SelectItem value="Declined"> Decline </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAdminStore } from '/src/stores/adminStore.ts'
import { useToast } from '/components/ui/toast/use-toast'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SupplySidebar from '/src/views/Supply/SupplySidevar.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '/components/ui/select';

const { toast } = useToast();
const store = useAdminStore();
const loading = ref(false);

const vendorList = async () => {
  loading.value = true;
  try {
    const { data } = await api().get('vendor-registration-list');
    store.vendorList = data.data;
    console.log(store.vendorList);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const postVendor = async (id) => {
  try {
    const data = await api().post(`vendor-approved/${id}`, { status: 'Approved' });
    console.log(data);
    toast({
      title: 'Vendor Approved'
    });
    vendorList(); // Reload the list after approval
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  vendorList();
});
</script>
