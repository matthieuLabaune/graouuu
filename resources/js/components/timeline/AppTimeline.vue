<template>
  <div>
    <app-graou
    v-for="graou in graous"
    :key="graou.id"
    :graou="graou"
    />


  </div>
</template>

<script>
import AppGraou from "../Graous/AppGraou";
export default {
  name: "AppTimeline.vue",
  components: {AppGraou},
  data() {
    return {
      graous: []
    }
  },

  methods: {
    async getGraous() {
      let response = await axios.get('/api/timeline')

      this.graous = response.data.data;
    }
  },
  mounted() {
    this.getGraous()

  }
}
</script>

<style scoped>

</style>