<template>
  <section>
    <div class="py-[30px] px-[5%] bg-white gap-5">
      <h1 class="text-3xl font-bold uppercase pb-3">Gallery</h1>
      <div class="grid grid-cols-2 gap-5 rounded-xl">
        <router-link
          v-for="(item, index) in store.categoryWiseImage"
          :key="index"
          :to="{
            name: 'Kabah_Id',
            params: {
              id: item.id
            }
          }"
        >
          <div class="flex gap-3 p-2 rounded-md shadow-md">
            <img :src="item.image" alt="" class="w-1/2 rounded-lg" />
            <div class="w-1/2">
              <h1 class="text-blue-600 text-2xl font-bold py-1">{{ item.category_title }}</h1>
              <p>{{ item.category_description }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMediaStore } from '/src/stores/mediaDashboard.ts'
import { ref, onMounted } from 'vue'
import { useToast } from '/components/ui/toast/use-toast'
import { useRoute, useRouter } from 'vue-router'

const store = useMediaStore()
const loading = ref(false)

const categoryWiseImage = async () => {
  loading.value = true
  try {
    const { data } = await api().get('category-wise-image')
    store.categoryWiseImage = data.data
    console.log(store.categoryWiseImage)
  } catch (error) {
    console.log(error)
  }
  loading.value = false
}

onMounted(async () => {
  categoryWiseImage()
})
</script>

<style scoped></style>
