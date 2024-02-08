<template>
  <div>
    <DefaultLayout>
      <div
        class="px-20 mt-5 pt-20 py-5 bg-fuchsia-800 bg-[url('../assets/image/home/bg123.png')] bg-repeat shadow-xl"
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
            <p>/ Digital Library</p>
            <!-- <p>/ Volunteers</p> -->
            <p class="text-fuchsia-800">/ Watch</p>
          </div>
          <div class="rounded-lg flex items-center justify-center relative py-3">
            <h1 class="text-fuchsia-800 text-4xl font-bold">Watch</h1>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div class="p-20 flex bg-gray-100 gap-5 w-full">
        <div class="grid grid-cols-2 gap-5 w-full">
          <Card class="flex items-center justify-center">
            <CardContent class="py-10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9bc1w6jy_co?si=7eju5rUALgUGKI8X"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </CardContent>
          </Card>

          <Card class="flex items-center justify-center">
            <CardContent class="py-10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/EOh8iLVbcgI?si=6aT-oEnnt-I2RHEC"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </CardContent>
          </Card>
          <Card class="flex items-center justify-center">
            <CardContent class="py-10">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eYFN2RZscls?si=fjTWXJxC8bUhXor-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </CardContent>
          </Card>
          <Card class="flex items-center justify-center">
            <CardContent class="py-10">
              <iframe    width="560"
                height="315"
                src="https://www.youtube.com/embed/Wq6tTR1tbqc?si=8lxYM0D4hff5hPCa"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent } from '/components/ui/card'
import DefaultLayout from '/src/layouts/DefaultLayout.vue'
const currentDua = ref()
const videoList = ref([
  {
    name: 'Divine Speech',
    img: '/src/assets/image/home/book1.jpg',
    author: 'Noman Ali Khan',
    description: `The Quran, the sacred scripture of Islam, is revered as the spoken word of God by approximately one-fifth of the world's population. Since its inception, the power of the Quran has derived not only from its message, but also from the inimitable literary style and rhetorical impact that the Arabic scripture has on its audiences. Divine Speech: Exploring the Quran as Literature attempts to make some of the most recent Arabic and European-language scholarship on its literary features accessible to a wider, English-speaking audience. These features include its language and word choice, its use of figures of speech and other rhetorical devices, its manner of narrating parables and stories, and the structure, coherence, and the order of its "chapters"-aspects that typically remain mysterious to readers of English translations of the text. Divine Speech furnishes its readers with a better appreciation of the Quran from a literary perspective, and in the process stimulates interest in, and provides tools and resources for, further study of the scripture.`,
    link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9bc1w6jy_co?si=7eju5rUALgUGKI8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  },

  {
    name: 'Muqaddimah',
    img: '/src/assets/image/home/book2.jpg',
    author: 'Ibn Khaldun',
    description: `Ibn Khaldun wrote the first version of the Muqaddimah in Qalʿat ibn Salama, where he secluded himself for almost four years after withdrawing from political life. It is the first of three parts of a project he worked on for almost thirty years: his Kitab al-ʿIbar, a massive work of universal history filling seventeen volumes of 500 pages each in its modern edition.[13] A draft of the Muqaddimah was completed in 1377.[14] Manuscripts of the Muqaddimah copied in the lifetime of Ibn Khaldun are extant, and a number of them have autographed marginal notes or additions.`
  },
  {
    name: 'Muhammad: His Character and Conduct',
    img: '/src/assets/image/home/book3.jpg',
    author: 'Adil Salahi',
    description: `Muslims all over the world see Muhammad as God's last messenger to mankind. Through his actions, he showed the way to live a life that provides for all the needs of body, mind, and soul, and elevates man's aspirations towards a sublime ideal in a very simple, direct, and truthful manner. He built a state that was dedicated to truth and justice and to the liberation of man throughout the world. He wrote to emperors, kings, and rulers, calling on them to believe in God and to follow His message, yet, at the same time, he lived a life of poverty, leaving aside the riches that were offered to him.`
  }
])
</script>

<style lang="scss" scoped></style>
