<template>
  <Navbar>
    <router-view></router-view>
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
