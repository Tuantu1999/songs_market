<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
.fw-500 {
  font-weight: 500;
}

.fw-600 {
  font-weight: 600;
}

.fw-700 {
  font-weight: 700;
}

.font-size-14 {
  font-size: 14px;
}

.font-size-18 {
  font-size: 18px;
}

.font-size-20 {
  font-size: 20px;
}

.font-size-24 {
  font-size: 24px;
}

.font-size-40 {
  font-size: 40px;
}
</style>
