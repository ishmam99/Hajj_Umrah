import { useCommonStore } from '@/stores/common'
import axios from 'axios'
import { defineStore } from 'pinia'

const pageDetailsApi = 'get-details/'

export const useNewsEventStore = defineStore({
    id: 'news-event',
    state: () => ({
       details: [],
       postDate: '',
    }),

    actions: {
       async getDetails(id) {
         const commonStore = useCommonStore()
         await axios.get(import.meta.env.VITE_DIGITAL_LANE_BASE_API+pageDetailsApi+id).then(response => {
             this.details = response.data
             this.formatDate(this.details.created_at)
         })

         commonStore.loading = false
       },

       formatDate(created_at) {
        const options = { month: "long", day: "numeric", year: "numeric" };
        const date = new Date(created_at);
        this.postDate = date.toLocaleDateString(undefined, options);
    }
    }
}) 