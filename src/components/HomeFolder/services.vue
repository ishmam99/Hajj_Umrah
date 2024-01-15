<template>
    <section class="container bg-slate-100 mx-auto my-8 py-5 px-[5%]">
    <!-- Service Section Header -->
        <h2 class="text-3xl font-bold pb-16 uppercase">Services</h2>
        <!-- Responsive Card Layout -->
        <div class="grid grid-cols-4 gap-x-5 gap-y-16">
        <!-- Loop through service items to generate cards -->
            <div
                v-for="service in services"
                :key="service.id"
                class="bg-white rounded-2xl shadow-2xl p-12 pt-14 border border-white h-full flex flex-col items-center uppercase text-center relative"
                >
                <img
                    src="/src/assets/image/home/s1.png"
                    alt="logo 1"
                    class="mb-4 absolute top-[-25%] p-4 rounded-full bg-white"
                />
                <h2 class="font-bold mb-2">{{ service.title }}</h2>
                <p class="text-gray-600 text-sm">{{ service.description }}</p>
            </div>
        </div>
    </section>
</template>
<script setup>
const services = [
  {
    id: 1,
    title: "Service 1",
    description: "Description for Service 1",
    imageUrl: "../../assets/union.png",
  },
  {
    id: 2,
    title: "Service 2",
    description: "Description for Service 2",
    imageUrl: "../../assets/union.png",
  },
  {
    id: 3,
    title: "Service 3",
    description: "Description for Service 3",
    imageUrl: "../../assets/union.png",
  },
  {
    id: 4,
    title: "Service 4",
    description: "Description for Service 4",
    imageUrl: "../../assets/union.png",
  },
  {
    id: 1,
    title: "Service 1",
    description: "Description for Service 1",
    imageUrl: "../../assets/union.png",
  },
  {
    id: 2,
    title: "Service 2",
    description: "Description for Service 2",
    imageUrl: "../../assets/union.png",
  },
  {
    id: 3,
    title: "Service 3",
    description: "Description for Service 3",
    imageUrl: "../../assets/union.png",
  },
  {
    id: 4,
    title: "Service 4",
    description: "Description for Service 4",
    imageUrl: "../../assets/union.png",
  },
];
</script>