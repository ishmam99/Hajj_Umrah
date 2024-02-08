import axios from 'axios'
import { defineStore } from 'pinia'
import { useCommonStore } from '../common'

const topSellingCourseApi = 'top-selling-courses' 
const newReleasedCourseApi = 'new-released-courses' 
const featuredCourseApi = 'get-featured-courses' 
const newReleasedProgramApi = 'new-released-programs' 
const courseDetailsApi = 'get-course/' 
const dataApi = 'get-area-of-programs-courses/'
const courseListApi = 'course-list/'
const programDetailsApi = 'get-program/'
const teacherListByCourseApi = 'teachers-list/'
const availableSlotsApi = 'available-teacher-slots/'
// const availableSlotsCourseApi = 'get-day-time-slots/'
const enrollApi = 'store-enrollments'
const slotApi = 'get-time-slot/'
const teacherDetailsApi = 'get-user-detail/'
const postCheckout = 'store-enrollment-schedules'
// const postPayment = 'post-payment'
const scheduleByEnrApi = 'schedule-details/'

export const useCourseStore = defineStore({
    id: 'course',
    state: () => ({
        topSellingCourseList: [],
        newReleasedCourseList: [],
        newReleasedProgramList: [],
        featuredCourseList: [],
        courseDetails: {},
        sub_menu: [],
        courseList: [],
        programDetails: {},
        area: [],
        programs: [],
        teacherListForCourse: [],
        availableDaySlots: [],
        timeSlotById: {},
        teacherDetails: {},
        scheduleList: []
    }),

    actions: {
      async topSellingCourses() {
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+topSellingCourseApi).then(response => {
            this.topSellingCourseList = response.data 
         })
      },

      async newReleasedCourses() {
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+newReleasedCourseApi).then(response => {
            this.newReleasedCourseList = response.data
         })
      },

      async featuredCourses() {
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+featuredCourseApi).then(response => {
            this.featuredCourseList = response.data
            console.log(this.featuredCourseList)
         })
      },

      async newReleasedPrograms() {
         const commonStore = useCommonStore()
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+newReleasedProgramApi).then(response => {
            this.newReleasedProgramList = response.data
         })
         commonStore.loading = false
      },

      async courseInfo(id) {
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+courseDetailsApi+id).then(response => {
            this.courseDetails = response.data[0]
         })
      },
       
      async getSubMenu(id) {
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+dataApi+id).then(response => {
            return response.data.data.programs
         })
      },

      async getProgramDetails(id) {
         // const commonStore = useCommonStore()
         const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+programDetailsApi+id)
         this.programDetails = resp.data[0]
         // commonStore.loading = false
     },

     async getCourseList(id) {
      const resp = await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+courseListApi+id)
      this.courseList = resp.data
     },

      async getAreaPrograms(id) {
         const commonStore = useCommonStore()
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+dataApi+id).then(response => {
            this.area = response.data.data.area
            this.programs = response.data.data.programs
         })
         commonStore.loading = false
      },

      async getTeacherList(courseId) {
         console.log(courseId)
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+teacherListByCourseApi+courseId).then(response => {
            this.teacherListForCourse = response.data.data
            console.log(this.teacherListForCourse)
         })
      },

      async getAvailableSlots(courseId, teacherId) {
         if(teacherId != null) {
            await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+availableSlotsApi+courseId+"/"+teacherId).then(response => {
               this.availableDaySlots = response.data.map(object => object)
               console.log(this.availableDaySlots)
            })
         } 
         // else {
         //    await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+availableSlotsCourseApi+courseId).then(response => {
         //       this.availableDaySlots = response.data.data
         //    })
         // }
      },

      async courseEnrollment(data) {
         const resp = await axios.post(import.meta.env.VITE_ELEARNING_BASE_API+enrollApi, data)
         return resp.data
      },

      async getTimeSlotById(id) {
         await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+slotApi+id).then(response => {
            return response.data.data[0]
         })
      },

      async getTeacherDetails(id) {
         if(id != null) {
            await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+teacherDetailsApi+id).then(response => {
              console.log(response)
              this.teacherDetails = response.data.data
           })
         } else {
            this.teacherDetails = null
         }
      },

      async postCheckoutDataProcessing(data) {
         try {
            await axios.post(import.meta.env.VITE_ELEARNING_BASE_API+postCheckout, {json:data})
            return true
         } catch(e) {
            return false
         }
      },

      async getScheduleByEnrollment(id) {
         console.log(id)
            await axios.get(import.meta.env.VITE_ELEARNING_BASE_API+scheduleByEnrApi+id).then(response => {
              this.scheduleList = response.data
              console.log(this.scheduleList)
           })
      },
   }
}) 