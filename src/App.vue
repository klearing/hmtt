<template>
  <div>
     <router-view></router-view>
  </div>
</template>

<script>
import { getAllChannelsAPI } from '@/api'
export default {
  async created () {
    try {
      const res = await getAllChannelsAPI()
      console.log(res)
    } catch (error) {
      console.dir(error)
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
