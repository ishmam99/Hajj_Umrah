<script setup>
// import SliderComponent from '@/components/sliders/SliderComponent1'
import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import { useCourseStore } from '@/stores/learning-center/course'
import { useCommonStore } from '@/stores/common'
import CourseCard from '@/components/CourseCard.vue'

const commonStore = useCommonStore()
const areaListApi = 'area-list'
const courseStore = useCourseStore()

let getAreas = ref([])

async function areas() {
  await axios.get(import.meta.env.VITE_ELEARNING_BASE_API + areaListApi).then((response) => {
    getAreas.value = response.data
    console.log(getAreas.value)
  })
}

onMounted(() => {
  areas()
  courseStore.topSellingCourses()
  courseStore.newReleasedCourses()
  courseStore.featuredCourses()
  courseStore.newReleasedPrograms()
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div>
    <div class="banner-section">
      <img src="@/assets/images/area/banner.jpg" alt="" srcset="" />
    </div>

    <div class="top-areas">
      <div class="title">
        <p>Areas of Study</p>
        <!-- <router-link class="view-all" to="/">View All</router-link> -->
      </div>
      <p class="text-lg">Islamic digital lane offering courses in the following area of studies:</p>

      <div class="list mt-4">
        <router-link
          v-for="area in getAreas"
          :key="area"
          :to="'/learning-center/areas/' + area.id"
          class="item"
          >{{ area.title }}</router-link
        >
      </div>
    </div>

   
  </div>
</template>

<style scoped>
.banner-section {
  max-height: 300px;
  overflow: hidden;
}
.banner-section img {
  width: 100%;
}

.top-areas {
  padding: 50px;
}
.top-courses,
.new-courses,
.category-section {
  padding: 50px;
}

.view-all {
  text-decoration-line: underline;
  color: #0fa3b1;
}

/* Top Areas */

.title {
  display: flex;
  justify-content: space-between;
}
.title p {
  padding-bottom: 10px;
  color: #00000080;
  font-size: 30px;
  font-weight: bold;
  font-family: math;
}

.top-areas > .list {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;
}

.top-areas > .list > .item {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  height: 80px;
  padding: 5px 10px;
  --btn-raise: 1rem;
  /* -webkit-clip-path: polygon(var(--btn-raise) 0%, calc(100% - var(--btn-raise)) 0%, 100% 50%, calc(100% - var(--btn-raise)) 100%, var(--btn-raise) 100%, 0 50%); */
  /* clip-path: polygon(var(--btn-raise) 0%, calc(100% - var(--btn-raise)) 0%, 100% 50%, calc(100% - var(--btn-raise)) 100%, var(--btn-raise) 100%, 0 50%); */
  background: #609962;
  /* border: 2px solid #C79055; */
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size: 22px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 10px solid #c79055;
  /* display: inline-block;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    user-select: none;
    padding: 1rem 2rem;
    
    --btn-raise: 1rem;
    clip-path: polygon(var(--btn-raise) 0%, calc(100% - var(--btn-raise)) 0%, 100% 50%, calc(100% - var(--btn-raise)) 100%, var(--btn-raise) 100%, 0 50%);
    background: linear-gradient(0deg, #39666E -0.01%, #65ff6b 100.06%); */
  /* border: 2px solid #C79055; */
  /* color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 22px; */
}

.top-areas > .list > .item:hover {
  opacity: 0.8;
}

.slider > div {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}

/* Category */

.category-section > .list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

.category-section > .list > .item {
  display: grid;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.category-section > .list > .item > img {
  width: 100%;
}

.category-section > .list > .item:hover {
  opacity: 0.8;
}

.category-section > .list > .item > .cat-title {
  padding: 10px 0;
  font-family: math;
  font-weight: bold;
}

@media only screen and (max-width: 1024px) {
  .slider > div {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .slider > div {
    grid-template-columns: 1fr 1fr;
  }

  .top-areas > .list {
    grid-template-columns: auto auto;
  }

  .category-section > .list {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (max-width: 425px) {
  .slider > div {
    grid-template-columns: 1fr;
  }

  .top-areas > .list {
    grid-template-columns: auto;
  }

  .category-section > .list {
    grid-template-columns: 1fr;
  }
}
</style>
