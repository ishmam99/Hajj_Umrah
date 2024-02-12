<script setup>
import { useCommonStore } from '@/stores/common'
import { useCourseStore } from '@/stores/learning-center/course'
import axios from 'axios'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import CourseCard from '@/components/CourseCard.vue'
import Table from '@/components/TableComponent.vue'
import Tab1 from '@/components/tabs/TabComponent1.vue'
import Tab2 from '@/components/tabs/TabComponent2.vue'

const commonStore = useCommonStore()
const courseStore = useCourseStore()
const router = useRouter()
const courseDetailsIndividualApi = 'course-list/individual/'
const courseDetailsGroupApi = 'course-list/group/'

const courseTabs = ref([])
const courseTabsGroup = ref([])
let courseIndividual = ref([])
let courseGroup = ref([])
let courseDetailsIndividual = ref([])
let courseDetailsGroup = ref([])
let setTabId = ref()
let setTabIdGroup = ref()

async function getCourseDetails(id) {
  const individual = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + courseDetailsIndividualApi + id
  )
  const group = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + courseDetailsGroupApi + id
  )

  const individualObject = Object.keys(individual.data)
  const groupObject = Object.keys(group.data)

  individualObject.forEach((key) => {
    const individualSections = individual.data[key]['individual']
      .map((object) => object)
      .map((object) => object)
      .map((object) => object)
    const individualCourseId = individual.data[key]['course_info'].id
    const individualCourseTitle = individual.data[key]['course_info'].title
    const individualCourseThumbnail = individual.data[key]['course_info'].thumbnail_image
    const individualCourseDescription = individual.data[key]['course_info'].description

    individualSections.map((object) => {
      const courseId = individualCourseTitle
        .split(' ')
        .map((c) => c.toLowerCase())
        .join('-')
      courseTabs.value.push({
        id: individualCourseId,
        tabTitle: individualCourseTitle,
        tabId: courseId
      })
      courseDetailsIndividual.value.push([individualCourseTitle, object, courseId])
      object.map((newObject) => {
        const individualData = newObject
        individualData.course_title = individualCourseTitle
        individualData.course_thumbnail = individualCourseThumbnail
        individualData.course_description = individualCourseDescription

        courseIndividual.value.push([
          individualData.id,
          individualData.course_unique_id,
          individualData.section_id,
          individualData.course_title,
          individualData.country_name,
          individualData.course_type,
          individualData.class_duration,
          individualData.teacher_grade,
          individualData.cost_per_month
        ])
      })
    })
  })

  groupObject.forEach((key) => {
    const groupSections = group.data[key]['group']
      .map((object) => object)
      .map((object) => object)
      .map((object) => object)
    const groupCourseTitle = group.data[key]['course_info'].title

    const groupCourseId = group.data[key]['course_info'].id
    const groupCourseThumbnail = group.data[key]['course_info'].thumbnail_image
    const groupCourseDescription = group.data[key]['course_info'].description

    groupSections.map((object) => {
      const courseId = groupCourseTitle
        .split(' ')
        .map((c) => c.toLowerCase())
        .join('-')
      courseTabsGroup.value.push({
        id: groupCourseId,
        tabTitle: groupCourseTitle,
        tabId: courseId
      })
      courseDetailsGroup.value.push([groupCourseTitle, object, courseId])
      object.map((newObject) => {
        const groupData = newObject
        groupData.course_title = groupCourseTitle
        groupData.course_thumbnail = groupCourseThumbnail
        groupData.course_description = groupCourseDescription
        courseGroup.value.push([
          groupData.id,
          groupData.course_unique_id,
          groupData.section_id,
          groupData.course_title,
          groupData.country_name,
          groupData.course_type,
          groupData.class_duration,
          groupData.teacher_grade,
          groupData.cost_per_month
        ])
      })
    })
  })

  if (courseTabs.value != '') {
    setTabId.value = courseTabs.value[0]['tabId']
  }

  if (courseTabsGroup.value != '') {
    setTabIdGroup.value = courseTabsGroup.value[0]['tabId']
  }

  commonStore.loading = false
}

const columns = ref([
  { tableData: 'id', title: '#' },
  { tableData: 'unique_id', title: '#Course Unique Id' },
  { tableData: 'section_id', title: 'Section Id' },
  { tableData: 'course_title', title: 'Course Name' },
  { tableData: 'country', title: 'Origin of Teachers' },
  { tableData: 'course_type', title: 'Course Type' },
  { tableData: 'class_duration', title: 'Class Duration (Hour)' },
  { tableData: 'teacher_level', title: 'Teachers Grade' },
  { tableData: 'cost_per_month', title: 'Cost of Course per Month' }
])

const tabs = [
  {
    id: 1,
    tabTitle: 'Individual Lesson',
    tabId: 'individual'
  },
  {
    id: 2,
    tabTitle: 'Group Lesson',
    tabId: 'group'
  }
]

const courseType = [
  {
    id: 1,
    tabTitle: 'Course Teacher List',
    tabId: 'course-teacher-list',
    svg: "<path d='M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z' />"
  },
  {
    id: 2,
    tabTitle: 'Course Details',
    tabId: 'course-details',
    svg: "<path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z' />"
  }
]

function getTabId(tabId) {
  setTabId.value = tabId
  setTabIdGroup.value = tabId
}

onMounted(() => {
  getCourseDetails(router.currentRoute.value.params.id)
  courseStore.getProgramDetails(router.currentRoute.value.params.id)
  courseStore.getCourseList(router.currentRoute.value.params.id)
})

onUnmounted(() => {
  commonStore.loading = true
})
</script>

<template>
  <div v-if="courseStore.courseList">
    <div class="cat-banner">
      <div class="overlay">
        <div>
          <div class="text-md text-white mb-3">
            <router-link class="underline" to="/learning-center">Home</router-link>
            >
            <router-link
              class="underline"
              :to="'/learning-center/areas/' + courseStore.programDetails.area_id"
              >Area of Studies</router-link
            >
            > <span>{{ courseStore.programDetails.name }}</span>
          </div>
          <div class="cat-title">
            <h1 class="text-4xl font-bold">
              {{ courseStore.programDetails.name }}
            </h1>
            <p class="text-sm" v-html="courseStore.programDetails.description"></p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="courseStore.courseList != ''" class="recitation">
      <div class="title">
        <p>Available Courses</p>
      </div>

      <div class="test-tab">
        <Tab1 :tabs="tabs">
          <template #individual>
            <Tab2 class="m-4" :tabs="courseType">
              <template #course-teacher-list>
                <Table :columns="columns" :tableData="courseIndividual" />
              </template>

              <template #course-details>
                <div v-if="courseDetailsIndividual.length < 4" class="slider mt-4">
                  <div class="" v-for="item in courseDetailsIndividual" :key="item">
                    <h3 class="text-1xl text-center font-bold">
                      {{ item[2] }}
                    </h3>
                    <div class="course-list mt-4">
                      <CourseCard :link="'/learning-center/course/'" :dataObject="item[1]" />
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="tab-flex-start">
                    <div
                      v-for="tab in courseTabs"
                      :key="tab"
                      @click="getTabId(tab.tabId)"
                      :class="tab.tabId == setTabId ? 'tab-is-active' : ''"
                    >
                      {{ tab.tabTitle }}
                    </div>
                  </div>

                  <div class="list" v-for="item in courseDetailsIndividual" :key="item">
                    <div v-if="item[2] == setTabId">
                      <div class="slider-grid mt-4">
                        <div class="course-list-grid mt-4">
                          <CourseCard :link="'/learning-center/course/'" :dataObject="item[1]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </Tab2>
          </template>

          <template #group>
            <Tab2 class="m-4" :tabs="courseType">
              <template #course-teacher-list>
                <Table :columns="columns" :tableData="courseGroup" />
              </template>

              <template #course-details>
                <div v-if="courseDetailsGroup.length < 4" class="slider mt-4">
                  <div class="" v-for="item in courseDetailsGroup" :key="item">
                    <h3 class="text-1xl text-center font-bold">
                      {{ item[2] }}
                    </h3>
                    <div class="course-list mt-4">
                      <CourseCard :link="'/learning-center/course/'" :dataObject="item[1]" />
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="tab-flex-start">
                    <div
                      v-for="tab in courseTabs"
                      :key="tab"
                      @click="getTabId(tab.tabId)"
                      :class="tab.tabId == setTabId ? 'tab-is-active' : ''"
                    >
                      {{ tab.tabTitle }}
                    </div>
                  </div>

                  <div class="list" v-for="item in courseDetailsGroup" :key="item">
                    <div v-if="item[2] == setTabId">
                      <div class="slider-grid mt-4">
                        <div class="course-list-grid mt-4">
                          <CourseCard :link="'/learning-center/course/'" :dataObject="item[1]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </Tab2>
          </template>
        </Tab1>
      </div>
    </div>
    <div v-else class="recitation">
      <div class="title">
        <p>No course found for this Program</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-flex-start {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 25px;
  margin: 20px 0;
}

.tab-flex-start > * {
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  background-color: #3f88a9;
  cursor: pointer;
  border-radius: 5px;
}

.tab-is-active {
  background-color: #0fa3b1;
}
.course-list {
  display: grid;
  margin: 10px;
  justify-content: center;
}

.course-list-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}

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

.cat-title > p::v-deep > p {
  color: white !important;
  font-size: 20px !important;
  padding: 15px 0;
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

.recitation {
  padding: 50px;
}

.slider {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.slider > div {
  border: 1px solid #c7c7c7;
  background-color: #f8f8f8;
  border-radius: 10px;
  padding-top: 20px;
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
  grid-template-columns: auto auto auto auto auto auto;
  gap: 30px;
  padding: 20px 0;
}

.top-areas > .list > .item {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  padding: 1rem 2rem;

  --btn-raise: 1rem;
  clip-path: polygon(
    var(--btn-raise) 0%,
    calc(100% - var(--btn-raise)) 0%,
    100% 50%,
    calc(100% - var(--btn-raise)) 100%,
    var(--btn-raise) 100%,
    0 50%
  );
  background: linear-gradient(0deg, #39666e -0.01%, #26a3a4 100.06%);
  border: 2px solid #c79055;
  color: white;
  font-weight: bold;
  cursor: pointer;
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

@media only screen and (max-width: 1024px) {
  .slider > div {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .slider > div {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
