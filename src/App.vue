<template>
  <Navbar>
    <div class="overflow-y-scroll w-full">
      <router-view></router-view>
    </div>
  </Navbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
})
</script>

<style></style>
