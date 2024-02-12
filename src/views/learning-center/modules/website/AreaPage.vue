<script setup>
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import CourseCard from '@/components/CourseCard.vue'
// import RatingComponent from '@/components/RatingComponent.vue';

const commonStore = useCommonStore()
const courseStore = useCourseStore()
const router = useRouter()

function toCoursePage(id) {
  router.push('/learning-center/course/' + id)
}

onMounted(() => {
  courseStore.getCourseList(router.currentRoute.value.params.id)
  courseStore.getAreaPrograms(router.currentRoute.value.params.id)
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div>
    <div class="cat-banner">
      <div class="overlay">
        <div>
          <div class="text-md text-white mb-3">
            <router-link class="underline" to="/learning-center">Home</router-link> >
            <span>{{ courseStore.area.title }}</span>
          </div>
          <div class="cat-title">
            <h1 class="text-4xl font-bold">{{ courseStore.area.title }}</h1>
            <p v-html="courseStore.area.description"></p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="courseStore.programs != ''" class="top-areas">
      <div class="title">
        <p>{{ courseStore.area.title }} Program Name</p>
      </div>

      <p class="text-lg text-left">Islamic digital lane offereing courses as listed bellow:</p>

      <div class="list">
        <router-link
          v-for="program in courseStore.programs"
          :key="program"
          class="item"
          :to="'/learning-center/programs/' + program.id"
          >{{ program.name }}</router-link
        >
      </div>
    </div>

    <div v-if="courseStore.courseList != ''" class="degree">
      <p class="offer-title">New released courses</p>

      <div class="top-course-slider">
        <swiper
          :slides-per-view="5"
          :navigation="true"
          :rewind="true"
          :space-between="20"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: true
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="course in courseStore.courseList" :key="course" class="slide">
            <div class="thumb">
              <img
                v-if="course.thumbnail_image"
                :src="
                  'https://learningcenter.islamicdigitallane.com/images/' + course.thumbnail_image
                "
              />
              <img v-else src="@/assets/images/course-thumb.png" width="290" height="120" />
            </div>
            <div class="details">
              <h3 class="text-lg font-bold">{{ course.title }}</h3>
              <!-- <h6>Instructor: Rafik Nasr</h6> -->
              <p v-html="course.description"></p>
              <!-- <h5>Course Duration - {{ course.duration }}</h5> -->
              <!-- <RatingComponent /> -->
              <!-- <div class="price">${{ course.price }}</div> -->
            </div>
            <div class="details-btn">
              <button
                @click="toCoursePage(course.id)"
                class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 w-max me-2 mb-2"
              >
                Details
              </button>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="offer">
      <p>Join for free and get personalized recommendations, updates and offers.</p>
    </div>

    <div v-for="program in courseStore.programs" :key="program" class="recitation">
      <div v-if="program.courses != ''" class="program">
        <div class="title">
          <p>{{ program.name }}</p>
          <router-link class="view-all" :to="'/learning-center/programs/' + program.id"
            >View All</router-link
          >
        </div>

        <div class="recitation-slider">
          <CourseCard :link="'/learning-center/course/'" :dataArray="program.courses" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view-all {
  text-decoration-line: underline;
  color: #0fa3b1;
}
.top-areas {
  padding: 50px;
}
.cat-banner {
  height: 250px;
  background-image: url('@/assets/images/course/course-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}
.overlay {
  height: 250px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
  padding: 0 50px;
  display: flex;
  align-items: center;
}

.overlay > div {
  display: grid;
  gap: 10px;
}

.cat-title {
  color: white;
  font-size: 25px;
}

.cats {
  display: flex;
  justify-content: start;
  gap: 15px;
}

.cat-card {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  min-width: 150px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.cat-card:hover {
  background-color: rgb(235, 235, 235);
}

.recitation,
.memorization,
.offer {
  padding: 0 50px;
  margin: 50px 0;
}

.degree {
  padding: 0 50px;
}

.offer-title {
  padding-bottom: 10px;
  color: #00000080;
  font-size: 25px;
  font-weight: bold;
}

.memorization-slider,
.recitation-slider {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
}

/* Slider */

.slide {
  background: #f5f5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
}

.slide:hover {
  opacity: 0.8;
}

.slide > .details {
  padding: 20px;
  display: grid;
}

.slide > .details > * {
  margin: 5px 0;
  justify-self: center;
  text-align: center;
}

.slide > .thumb {
  height: 120px;
  background-image: url('@/assets/images/cat-thumb.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.slide > .details > .price {
  font-weight: bold;
  font-size: 30px;
}

.slide > .details > .ratings {
  display: flex;
  gap: 10px;
  justify-content: center;
  color: #ffc700;
  font-weight: bold;
}

/* Top Areas */

.title {
  display: flex;
  justify-content: space-between;
}
.title p {
  padding-bottom: 10px;
  color: #00000080;
  font-size: 25px;
  font-weight: bold;
}

.top-areas > .list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
  padding: 20px 0;
}

.top-areas > .list > .item {
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  min-height: 80px;
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
}

.top-areas > .list > .item:hover {
  opacity: 0.8;
}

/* Offer */

.offer {
  background: #0fa3b1;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  font-family: math;
}

.offer > p {
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.slide > .details > p {
  height: 90px;
  overflow: hidden;
}

.details-btn {
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 1024px) {
  .top-course-slider,
  .memorization-slider,
  .recitation-slider {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .top-course-slider,
  .memorization-slider,
  .recitation-slider {
    grid-template-columns: 1fr 1fr;
  }

  .top-areas > .list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 425px) {
  .top-areas > .list {
    grid-template-columns: auto;
  }

  .top-course-slider,
  .memorization-slider,
  .recitation-slider {
    grid-template-columns: 1fr;
  }
}
</style>
