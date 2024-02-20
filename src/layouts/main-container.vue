<template>
  <AppBar />
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppBar from '@/layouts/app-bar.vue'

export default defineComponent({
  name: 'main-container',
  components: { AppBar },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
:deep(.v-container) {
  padding-top: 0px !important;
}
</style>
