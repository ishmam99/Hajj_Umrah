<template>
  <div ref="card"></div>
  <button @click="purchase">Purchase</button>
</template>

<script>
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()
// const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY_ME
let stripe = window.Stripe(
    'pk_test_51HEVPoKW3DXJSnrBVwv34M0xesdZR8bCLpDnvah5rP7HI8ze42RP3ocbR5oKNXJRdACMDNbMQj87GPfmVfbfkmX200CCk6aDJj'
  ),
  elements = stripe.elements(),
  card = undefined

export default {
  mounted: function () {
    commonStore.loading = false
    card = elements.create('card')
    card.mount(this.$refs.card)
  },

  methods: {
    purchase() {
      console.log(card)
      stripe.createToken(card).then(function (result) {
        console.log(result)
      })
    },
  },
}
</script>
