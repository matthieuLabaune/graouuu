<template>
  <div class="container">
    <div class="border border-red-300 rounded">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null
    }
  },
  methods: {
    async getUser() {
      let response = await axios.get('/api/user')

      this.user = response.data
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>
