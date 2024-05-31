import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import {
  volunteerApplicantListData,
  volunteeringPostsData,
  volunteerInterestExpertiseData
} from './volunteerDummyData.js'

export const useVolunteerDataStore = defineStore('volunteerData', () => {
 

  // state
  const volunteerInterestExpertiseRef = ref<any>(volunteerInterestExpertiseData)
  const volunteeringPostsRef = ref<any>(volunteeringPostsData)
  const volunteerApplicantListRef = ref<any>(volunteerApplicantListData)
  const searchByJobTextRef = ref<string>('')
  const searchByInterestTextRef = ref<string>('')
  const searchByExpertiseRef = ref<string>('')
  const searchByDayRef = ref<string>('Any')
  const searchByRepeatedDayRef = ref<string>('Any')
  const searchByStartEndRef = ref<string>('Any')

  // computed
  const volunteerInterestExpertise = computed(() => volunteerInterestExpertiseRef.value)
  const volunteeringPosts = computed(() => volunteeringPostsRef.value)
  const volunteerApplicantList = computed(() => volunteerApplicantListRef.value)
  const searchByJobText = computed(() => searchByJobTextRef.value)
  const searchByInterestText = computed(() => searchByInterestTextRef.value)
  const searchByExpertise = computed(() => searchByExpertiseRef.value)
  const searchByDay = computed(() => searchByDayRef.value)
  const searchByRepeatedDay = computed(() => searchByRepeatedDayRef.value)
  const searchByStartEnd = computed(() => searchByStartEndRef.value)

  // actions
  const setVolunteerInterestExpertise = (payload: []) => {
    volunteerInterestExpertiseRef.value = payload
  }
  const setVolunteeringPosts = (payload: []) => {
    volunteeringPostsRef.value = payload
  }
  const setVolunteerApplicantList = (payload: any[]) => {
    volunteerApplicantListRef.value = payload
  }
  const setSearchByJobText = (payload: string) => {
    searchByJobTextRef.value = payload
    const searchText = payload.toLowerCase()
    const matchedVolunteerJob: any[] = []

    if (payload !== '') {
      volunteerApplicantListRef.value.forEach((volunteerApplicant: any) => {
        const volunteerJobName = volunteerApplicant.volunteerJob.toLowerCase()
        if (volunteerJobName.includes(searchText)) {
          matchedVolunteerJob.push(volunteerApplicant)
        }
      })

      setVolunteerApplicantList(matchedVolunteerJob)
    } else {
      setVolunteerApplicantList(volunteerApplicantListData)
    }
  }
  const setSearchByInterestText = (payload: string) => {
    searchByJobTextRef.value = payload
    const searchText = payload.toLowerCase()
    const matchedVolunteerJob: any[] = []

    if (payload !== '') {
      volunteerApplicantListRef.value.forEach((volunteerApplicant: any) => {
        const volunteerAdditionalInterest = volunteerApplicant.additionalInterestArea.toLowerCase()
        if (volunteerAdditionalInterest.includes(searchText)) {
          matchedVolunteerJob.push(volunteerApplicant)
        }
      })

      setVolunteerApplicantList(matchedVolunteerJob)
    } else {
      setVolunteerApplicantList(volunteerApplicantListData)
    }
  }
  const setSearchByExpertise = (payload: string) => {
    searchByJobTextRef.value = payload
    const searchText = payload.toLowerCase()
    const matchedVolunteerJob: any[] = []

    if (payload !== '') {
      volunteerApplicantListRef.value.forEach((volunteerApplicant: any) => {
        const volunteerApplicationStatus = volunteerApplicant.applicationStatus.toLowerCase()
        if (volunteerApplicationStatus.includes(searchText)) {
          matchedVolunteerJob.push(volunteerApplicant)
        }
      })

      setVolunteerApplicantList(matchedVolunteerJob)
    } else {
      setVolunteerApplicantList(volunteerApplicantListData)
    }
  }
  const setSearchByDay = (payload: string) => {
    searchByJobTextRef.value = payload
    const searchText = payload.toLowerCase()
    const matchedVolunteerJob: any[] = []

    if (payload !== '' && payload !== 'Any') {
      volunteerApplicantListData.forEach((volunteerApplicant) => {
        const volunteerApplicationAvailableDay = volunteerApplicant.availableDay.toLowerCase()
        if (volunteerApplicationAvailableDay.includes(searchText)) {
          matchedVolunteerJob.push(volunteerApplicant)
        }
      })

      setVolunteerApplicantList(matchedVolunteerJob)
    } else {
      setVolunteerApplicantList(volunteerApplicantListData)
    }
  }
  const setSearchByRepeatedDay = (payload: { day: string; repeatedTime: string }) => {
    searchByJobTextRef.value = payload.day
    const searchByDay = payload.day.toLowerCase()
    const matchedVolunteerJob: any[] = []

    if (payload.day !== '') {
      volunteerApplicantListData.forEach((volunteerApplicant: any) => {
        const volunteerApplicationAvailableDay = volunteerApplicant.availableDay.toLowerCase()
        const volunteerApplicationRepeatedTimes = parseInt(volunteerApplicant?.repeatedTime)
        if (volunteerApplicationAvailableDay.includes(searchByDay)) {
          if (volunteerApplicationRepeatedTimes >= parseInt(payload.repeatedTime)) {
            matchedVolunteerJob.push(volunteerApplicant)
          }
        }
      })

      setVolunteerApplicantList(matchedVolunteerJob)
    } else {
      setVolunteerApplicantList(volunteerApplicantListData)
    }
  }
  const setSearchByStartEnd = (payload: { startTime: string; endTime: string }) => {
    const startTimeSearchKey = payload.startTime.split(':')[0]
    const endTimeSearchKey = payload.endTime.split(':')[0]
    console.log(startTimeSearchKey, endTimeSearchKey, 'check payload')
    const matchedVolunteerJob: any[] = []

    if (
      payload.startTime !== '' &&
      payload.startTime !== 'Any' &&
      payload.endTime !== '' &&
      payload.endTime !== 'Any'
    ) {
      volunteerApplicantListData.forEach((volunteerApplicant: any) => {
        const volunteerApplicantStartTime = volunteerApplicant.startTime.split(':')[0]
        const volunteerApplicantEndTime = volunteerApplicant.endTime.split(':')[0]

        if (
          volunteerApplicantStartTime <= startTimeSearchKey &&
          volunteerApplicantEndTime >= endTimeSearchKey
        ) {
          matchedVolunteerJob.push(volunteerApplicant)
        }
      })
      setVolunteerApplicantList(matchedVolunteerJob)
      //   volunteerApplicantListData.forEach((volunteerApplicant: any) => {
      //     const volunteerApplicationAvailableDay = volunteerApplicant.availableDay.toLowerCase()
      //     const volunteerApplicationRepeatedTimes = parseInt(volunteerApplicant?.repeatedTime)
      //     if (volunteerApplicationAvailableDay.includes(searchByDay)) {
      //       if (volunteerApplicationRepeatedTimes >= parseInt(payload.repeatedTime)) {
      //         matchedVolunteerJob.push(volunteerApplicant)
      //       }
      //     }
      //   })
      //   setVolunteerApplicantList(matchedVolunteerJob)
      // } else {
    } else {
      setVolunteerApplicantList(volunteerApplicantListData)
    }
  }

  return {
    volunteerInterestExpertise,
    setVolunteerInterestExpertise,

    volunteeringPosts,
    setVolunteeringPosts,

    volunteerApplicantList,
    setVolunteerApplicantList,

    searchByJobText,
    setSearchByJobText,

    searchByInterestText,
    setSearchByInterestText,

    searchByExpertise,
    setSearchByExpertise,

    searchByDay,
    setSearchByDay,

    searchByRepeatedDay,
    setSearchByRepeatedDay,

    searchByStartEnd,
    setSearchByStartEnd
  }
})
