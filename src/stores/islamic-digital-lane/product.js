import { useCommonStore } from '@/stores/common'
import axios from 'axios'
import { defineStore } from 'pinia'

const productDetailsApi = 'product-details/'

export const useProductStore = defineStore({
    id: 'product', 
    state: () => ({
        productDetails: [],
        checkId: true
    }),
    
    actions: {
        async details(param) {
            const commonStore = useCommonStore()
            const response = await axios.get(import.meta.env.VITE_DIGITAL_LANE_BASE_API+productDetailsApi+param)
            this.productDetails = response.data[0] 
            commonStore.loading = false
        }
    }
})