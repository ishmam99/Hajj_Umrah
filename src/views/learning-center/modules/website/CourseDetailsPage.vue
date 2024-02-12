<script setup>
// import RatingComponent from '@/components/RatingComponent'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useCommonStore } from '@/stores/common'

const moduleListApi = 'course-module-list/'
const courseSectionDetailsApi = 'get-course-by-id/'

const commonStore = useCommonStore()
const router = useRouter()
const user = JSON.parse(localStorage.getItem('user'))

let tabIndex = ref(1)
// let slideDownIndex = ref(null)
let moduleList = ref([])
let courseDetails = ref({})
let sectionDetails = ref({})
let courseModules = ref()

function tab(index) {
  tabIndex.value = index
}

function apply() {
  localStorage.setItem('applying', router.currentRoute.value.params.id)
  localStorage.setItem('course-section', JSON.stringify(sectionDetails.value))
  router.push(
    '/learning-center/course/' + router.currentRoute.value.params.id + '/enroll'
  )
}

// function slideDown(index) {
//     if(slideDownIndex.value != index) {
//         slideDownIndex.value = null
//         slideDownIndex.value = index
//     } else {
//         slideDownIndex.value = null
//     }
// }

async function courseSectionDetails() {
  await axios
    .get(
      import.meta.env.VITE_ELEARNING_BASE_API +
        courseSectionDetailsApi +
        router.currentRoute.value.params.id
    )
    .then((response) => {
      courseDetails.value = response.data[0]['other'][0]
      sectionDetails.value = response.data[0]['course_detail']
      courseModules.value = response.data[0]['coourse_module']
    })
  commonStore.loading = false
}

async function getModuleList() {
  await axios
    .get(
      import.meta.env.VITE_ELEARNING_BASE_API +
        moduleListApi +
        router.currentRoute.value.params.id
    )
    .then((response) => {
      moduleList.value = response.data
    })
}

onMounted(() => {
  getModuleList()
  courseSectionDetails()
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div>
    <div class="course-banner">
      <div class="overlay">
        <div class="course-info">
          <h1 class="course-info-title">{{ courseDetails.course_title }}</h1>
          <p class="course-text" v-html="courseDetails.description"></p>
          <!-- <span><RatingComponent /></span> -->
          <div>
            <div class="updated_at">
              <font-awesome-icon :icon="['fas', 'fa-clock']" /> Class Duration:
              {{ Number(sectionDetails.class_duration) * 60 }} min
            </div>
            <div class="language">
              <font-awesome-icon :icon="['fas', 'fa-language']" /> English
            </div>
          </div>
        </div>
        <div v-if="user && user.role_id == 4" class="apply">
          <div>
            <h1 class="text-3xl font-bold text-white text-center m-2">
              ${{ sectionDetails.cost_per_month }} per month
            </h1>
            <div class="form">
              <h4 class="text-lg font-bold">Get started today</h4>
              <button @click="apply" class="apply-btn">Apply</button>
              <!-- <button class="request-btn">Request info</button> -->
            </div>
          </div>
        </div>
        <div v-else class="apply"></div>
      </div>
    </div>
    <div class="quick-info">
      <div>
        <h3 class="text-xl font-bold">Course Type</h3>
        <p>{{ sectionDetails.course_type }}</p>
      </div>
      <div>
        <h3 class="text-xl font-bold">Course duration</h3>
        <p>As per individual need</p>
      </div>
      <div>
        <h3 class="text-xl font-bold">Flexible schedule</h3>
        <p>{{ sectionDetails.class_per_week }} class per week</p>
      </div>
    </div>
    <div class="course-details">
      <div class="tab">
        <div class="tab-buttons">
          <button
            @click="tab(1)"
            :class="tabIndex == 1 ? 'tab-button active' : 'tab-button'"
          >
            Course Information
          </button>
          <button
            @click="tab(2)"
            :class="tabIndex == 2 ? 'tab-button active' : 'tab-button'"
          >
            Course Description
          </button>
          <!-- <button @click="tab(3)" :class="(tabIndex == 3) ? 'tab-button active' : 'tab-button'">Study Plan </button> -->
        </div>
        <div class="tabs">
          <div v-if="tabIndex == 1" class="overview">
            <div class="details">
              <div class="bullet-points">
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>Area of study:</strong>
                    {{ courseDetails.area_title }}
                  </p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>Program Name:</strong>
                    {{ courseDetails.program_name }}
                  </p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>Section Id:</strong> {{ sectionDetails.section_id }}
                  </p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p><strong>Course Name:</strong> Nadira Program</p>
                </div>

                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>Course Type:</strong>
                    {{ sectionDetails.course_type }}
                  </p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p><strong>No of Student:</strong> 1</p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>Class Duration:</strong>
                    {{ sectionDetails.class_duration * 60 }} min
                  </p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>No of class per week:</strong>
                    {{ sectionDetails.class_per_week }}
                  </p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>Course Duration:</strong> As per individual need
                  </p>
                </div>
                <div class="point">
                  <font-awesome-icon :icon="['fas', 'fa-hand-point-right']" />
                  <p>
                    <strong>Cost per Month:</strong
                    >{{ sectionDetails.cost_per_month }}USD
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="more-details">
                            <h2 class="text-2xl font-bold">Details to know</h2>
                            <div class="bullet-points">
                                <div class="point">
                                    <font-awesome-icon :icon="['fas', 'fa-share-alt']" />
                                    <h4 class="text-lg font-bold">Sharable certificates</h4>
                                    <p>Add to your linkedin profile</p>
                                </div>
                                <div class="point">
                                    <font-awesome-icon :icon="['fas', 'fa-comment-dots']" />
                                    <h4 class="text-lg font-bold">Quizzes and assessments</h4>
                                    <p>1 quiz, 14 assessments</p>
                                </div>
                                <div class="point">
                                    <font-awesome-icon :icon="['fas', 'fa-language']" />
                                    <h4 class="text-lg font-bold">English</h4>
                                    <p>Subtitles: German, Russian, Spanish</p>
                                </div>
                            </div>
                        </div> -->
          </div>
          <div v-else-if="tabIndex == 2" class="modules">
            <div class="review-section">
              <div v-for="mdule in courseModules" :key="mdule">
                <p>
                  <strong>{{ mdule.title }}</strong>
                </p>
                <p v-html="mdule.description"></p>
              </div>
            </div>
          </div>
          <div v-else-if="tabIndex == 3" class="reviews">
            <div class="review-section">
              <!-- <div class="review-stat">
                                <div class="review-count">
                                    <span class="average">4.8</span>
                                    <span class="star-icon"><font-awesome-icon :icon="['fas', 'fa-star']" /></span>
                                    <span class="count">372 reviews</span>
                                </div>
                                <div class="rating-percentage">
                                    <div class="rating">
                                        <span class="star-count">5 stars</span>
                                        <span class="progress">
                                            <div class="filled" style="width: 82.25%;"></div>
                                        </span>
                                        <span class="percentage">82.25%</span>
                                    </div>
                                    <div class="rating">
                                        <span class="star-count">4 stars</span>
                                        <span class="progress">
                                            <div class="filled" style="width: 70.25%;"></div>
                                        </span>
                                        <span class="percentage">70.25%</span>
                                    </div>
                                    <div class="rating">
                                        <span class="star-count">3 stars</span>
                                        <span class="progress">
                                            <div class="filled" style="width: 50.25%;"></div>
                                        </span>
                                        <span class="percentage">50.25%</span>
                                    </div>
                                    <div class="rating">
                                        <span class="star-count">2 stars</span>
                                        <span class="progress">
                                            <div class="filled" style="width: 30.25%;"></div>
                                        </span>
                                        <span class="percentage">30.25%</span>
                                    </div>
                                    <div class="rating">
                                        <span class="star-count">1 star</span>
                                        <span class="progress">
                                            <div class="filled" style="width: 2.25%"></div>
                                        </span>
                                        <span class="percentage">2.25%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="review-details">
                                <h3>Showing 3 of 372</h3>
                                <div class="review-cards">
                                    <div class="review-card">
                                        <div class="user">
                                            <img src="@/assets/images/user/user-1.jpg" alt="" height="50" width="50" srcset="">
                                            <span class="user-name">Kamal</span>
                                        </div>
                                        <div class="review">
                                            <div class="rating">
                                                <span class="average">4.8</span>
                                                <span class="star-icon"><font-awesome-icon :icon="['fas', 'fa-star']" /></span>
                                                <span class="count">Reviewed on Jan, 2023</span>
                                            </div>
                                            <div class="review-text">
                                                <p>I love this class! It gives me easy access to a wealth of information I wasn't taught in school, and it's the perfect pacing for me.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-card">
                                        <div class="user">
                                            <img src="@/assets/images/user/user-1.jpg" alt="" height="50" width="50" srcset="">
                                            <span class="user-name">Kamal</span>
                                        </div>
                                        <div class="review">
                                            <div class="rating">
                                                <span class="average">4.8</span>
                                                <span class="star-icon"><font-awesome-icon :icon="['fas', 'fa-star']" /></span>
                                                <span class="count">Reviewed on Jan, 2023</span>
                                            </div>
                                            <div class="review-text">
                                                <p>I love this class! It gives me easy access to a wealth of information I wasn't taught in school, and it's the perfect pacing for me.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="review-card">
                                        <div class="user">
                                            <img src="@/assets/images/user/user-1.jpg" alt="" height="50" width="50" srcset="">
                                            <span class="user-name">Kamal</span>
                                        </div>
                                        <div class="review">
                                            <div class="rating">
                                                <span class="average">4.8</span>
                                                <span class="star-icon"><font-awesome-icon :icon="['fas', 'fa-star']" /></span>
                                                <span class="count">Reviewed on Jan, 2023</span>
                                            </div>
                                            <div class="review-text">
                                                <p>I love this class! It gives me easy access to a wealth of information I wasn't taught in school, and it's the perfect pacing for me.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="more-reviews">
                                    <a>View more reviews</a>
                                </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="certificate">
            <div class="text">
                <div>
                    <h3 class="text-2xl font-bold">Earn a career certificate</h3>
                    <p>Add this credential to your LinkedIn profile, resume, or CV
                        Share it on social media and in your performance review</p>
                </div>
            </div>
            <div class="graph">
                <img src="@/assets/images/mock-certificate.png" alt="" height="100" width="200" srcset="">
            </div>
        </div>

        <div class="faq">
            <h2 class="text-2xl font-bold">Frequently asked questions</h2>

            <div class="module-list">
                <div class="module">
                    <div class="headline" @click="slideDown(1)">
                        <div class="text">
                            <p>Do I need to read or understand Arabic for this course?</p>
                        </div>
                        <div class="indicator">
                            <font-awesome-icon :icon="['fas', 'fa-caret-down']" />
                        </div>
                    </div>
                    <transition class="description" name="slide">
                        <div v-if="slideDownIndex == 1">
                            <h4>About the course:</h4>
                            <p>Did you know that Arabic was for centuries the lingua franca in an area stretching from the south of Spain to the Chinese border? Did you know that the Middle East under Muslim rule in those days was the world’s beating heart of trade, but also of science and scholarship?</p>
                        </div> 
                    </transition>
                </div>
                <div class="module">
                    <div class="headline" @click="slideDown(2)">
                        <div class="text">
                            <p>Do I need to read or understand Arabic for this course?</p>
                        </div>
                        <div class="indicator">
                            <font-awesome-icon :icon="['fas', 'fa-caret-down']" />
                        </div>
                    </div>
                    <transition class="description" name="slide">
                        <div v-if="slideDownIndex == 2">
                            <h4>About the course:</h4>
                            <p>Did you know that Arabic was for centuries the lingua franca in an area stretching from the south of Spain to the Chinese border? Did you know that the Middle East under Muslim rule in those days was the world’s beating heart of trade, but also of science and scholarship?</p>
                        </div> 
                    </transition>
                </div>
                <div class="module">
                    <div class="headline" @click="slideDown(3)">
                        <div class="text">
                            <p>Do I need to read or understand Arabic for this course?</p>
                        </div>
                        <div class="indicator">
                            <font-awesome-icon :icon="['fas', 'fa-caret-down']" />
                        </div>
                    </div>
                    <transition class="description" name="slide">
                        <div v-if="slideDownIndex == 3">
                            <h4>About the course:</h4>
                            <p>Did you know that Arabic was for centuries the lingua franca in an area stretching from the south of Spain to the Chinese border? Did you know that the Middle East under Muslim rule in those days was the world’s beating heart of trade, but also of science and scholarship?</p>
                        </div> 
                    </transition>
                </div>
            </div>
        </div> -->
  </div>
</template>

<style scoped>
.course-text {
  max-height: 100px;
  overflow: hidden;
}
.course-info-title {
  font-weight: bold;
  font-size: 40px;
}
.course-details,
.pricing {
  margin: 50px;
}

.faq,
.certificate {
  margin: 120px 50px;
}
.course-banner {
  height: 400px;
  background: url('@/assets/images/course/course-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}

.overlay {
  height: 400px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  padding: 0 50px;
}

.course-info {
  align-self: center;
}

.course-info > * {
  color: white;
  padding: 10px 0;
}

.course-info > div {
  display: flex;
  gap: 20px;
}

.quick-info {
  display: grid;
  grid-template-columns: auto auto auto;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 1;
  margin: 0 50px;
  margin-top: -60px;
  padding: 20px 0;
}

.quick-info > div {
  padding: 20px;
}
.quick-info > div:not(:last-child) {
  border-right: 1px solid gray;
}

.apply {
  display: flex;
  align-items: center;
  justify-content: end;
  top: 20px;
}

.apply > div {
  width: 350px;
  display: grid;
}

.apply > div > .price {
  font-size: 50px;
  padding: 10px;
  color: white;
  font-weight: bold;
  align-self: center;
  justify-self: center;
}

.apply > div > .form {
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  align-self: center;
  justify-self: end;
  border-radius: 10px;
  display: grid;
}

.apply-btn {
  width: 100%;
  background: #0fa3b1;
  color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  justify-self: center;
}

.request-btn {
  width: 100%;
  background: #b5e2fa;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  justify-self: center;
}

/* Course details tab */

.active {
  color: #0fa3b1;
  border-bottom: 1px solid #0fa3b1;
}

.details .bullet-points {
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px;
}

.details .bullet-points .point {
  display: flex;
  gap: 10px;
}

.more-details {
  margin-top: 35px;
}

.more-details .bullet-points {
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
}

.more-details .bullet-points .point *:first-child {
  font-size: 30px;
  font-weight: bold;
}

.more-details .bullet-points .point * {
  padding: 5px 0;
}
.tab-buttons {
  background-color: white;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid gray;
}

.tab-buttons button {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 30px;
  background-color: white;
}

.tabs {
  padding-top: 25px;
}

.small-dot {
  font-size: 6px;
  line-height: 2;
}

.module-list {
  border: 1px solid gray;
  width: 60%;
  border-radius: 10px;
  margin-top: 15px;
}

.module-list .module {
  padding: 10px;
  cursor: pointer;
}

.module-list .module:hover {
  opacity: 0.8;
}

.module-list .module:not(:last-child) {
  border-bottom: 1px solid gray;
}

.module-list .module .headline {
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
}

.module-list .module .headline .text * {
  padding: 5px;
}

.module-list .module .headline .indicator {
  display: flex;
  justify-content: end;
  align-items: start;
  padding-top: 10px;
  font-size: 20px;
}

.module-list .module .description {
  padding: 5px;
}

/* Review */

.review-section {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  gap: 70px;
}

.review-count {
  margin-bottom: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
}

.review-count > .average {
  font-weight: bold;
  font-size: 25px;
}

.review-count > .star-icon {
  font-size: 25px;
  color: #ffc700;
}

.review-count .count {
  color: #0fa3b1;
}

.rating-percentage .rating {
  display: grid;
  grid-template-columns: 0.15fr 0.7fr 0.15fr;
  padding: 5px 0;
}

.rating-percentage .rating .progress {
  height: 5px;
  width: 90%;
  border-radius: 20px;
  background-color: gray;
  align-self: center;
  justify-self: center;
}

.rating-percentage .rating .progress .filled {
  height: 5px;
  background: #0fa3b1;
}

/* Review details */
.review-details > * {
  margin: 20px;
}

.review-card {
  box-sizing: border-box;
  background: #ffffff;
  border: 2px solid #d8d8d8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
  margin: 25px 0;
}

.review-card .user {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.review-card .user img {
  border-radius: 50%;
}

.review-card .review {
  padding: 20px 0;
}

.review-card .review .rating {
  display: flex;
  justify-content: start;
  gap: 10px;
  padding: 5px;
  font-weight: bold;
}

.review-card .review .review-text {
  padding: 5px;
}

.more-reviews {
  text-align: center;
  text-decoration: underline;
}

/* Certificate */
.certificate {
  box-sizing: border-box;
  border: 2px solid #d8d8d8;
  height: 110px;
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
}

.certificate .text {
  padding: 20px;
}

.certificate .text {
  display: flex;
  justify-content: start;
  align-items: center;
}

.certificate .text > div > h3 {
  margin-bottom: 10px;
}
.certificate .graph {
  background: rgba(181, 226, 250, 0.4);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 141px 0px 0px 141px;
  display: flex;
  justify-content: center;
  height: 105px;
}

.certificate .graph img {
  height: 170px;
  width: 300px;
  margin-top: -30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

/* Faq */

/* Pricing */
</style>
