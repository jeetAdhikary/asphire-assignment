<template>
  <div class="home">
    <CommonView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommonView from '@/views/CommonView.vue'
export default defineComponent({
  name: 'Home',
  components: {
    CommonView,
  },
})
</script>

<style></style>
