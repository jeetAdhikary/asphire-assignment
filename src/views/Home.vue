<template>
  <div class="home">
    <span>Home Works</span>
    <BeakerIcon class="h-5 w-5 text-blue-500" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BeakerIcon } from '@heroicons/vue/solid'
export default defineComponent({
  name: 'Home',
  components: {
    BeakerIcon,
  },
})
</script>

<style></style>
