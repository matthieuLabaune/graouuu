<template>
  <div class="w-full inline-block p-4 border-b border-gray-800 hover:bg-gray-800">
    <div class="flex w-full">
      <div class="mr-3">
        <img :src="graou.user.avatar" class="w-12 rounded-full">
      </div>
      <div >
        <app-graou-username
            :user="graou.user"/>
        <p class="text-gray-300 whitespace-pre-wrap">{{ graou.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppGraouUsername from "./AppGraouUsername";

export default {
  name: "AppGraou",
  components: {AppGraouUsername},
  props: {
    graou: {
      required: true,
      type: Object
    }
  }

}
</script>

<style scoped>

</style>