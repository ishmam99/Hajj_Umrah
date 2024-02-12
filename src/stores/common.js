import axios from 'axios'
import { defineStore } from 'pinia'

const api = 'product-details/'
const videApi = 'product-video/'
const featureApi = 'product-feature/'

export const useCommonStore = defineStore({
    id: 'common',
    state: () => ({
      loading: true,
      countries: [],
      data: [],
      videos: [],
      features: []
    }),
    actions: {
      async getData(id) {
        const commonStore = useCommonStore()
        try {
          const response = await axios.get(import.meta.env.VITE_DIGITAL_LANE_BASE_API+api+id)
          const videoList = await axios.get(import.meta.env.VITE_DIGITAL_LANE_BASE_API+videApi+id)
          const featureList = await axios.get(import.meta.env.VITE_DIGITAL_LANE_BASE_API+featureApi+id)
          this.data = response.data[0]
          this.videos = videoList.data
          this.features = featureList.data
          console.log(this.features)
        } catch(e) {
            console.log(e)
        }
        commonStore.loading = false
      }
    }
}) 